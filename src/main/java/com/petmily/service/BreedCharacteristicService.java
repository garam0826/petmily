package com.petmily.service;

import com.petmily.dao.DogCharacteristicsDAO;
import com.petmily.dto.DogCharacteristics;
import com.petmily.dto.ImageAnalysisResult;
import com.petmily.dto.UserCharacteristics;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import org.springframework.util.ResourceUtils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BreedCharacteristicService {

    private final DogCharacteristicsDAO dogCharacteristicsDAO;
    private final Map<String, int[]> breedCharacteristicsMap = new HashMap<>();

    @Autowired
    public BreedCharacteristicService(DogCharacteristicsDAO dogCharacteristicsDAO) {
        this.dogCharacteristicsDAO = dogCharacteristicsDAO;
        loadBreedCharacteristics();
    }


    private void loadBreedCharacteristics() {
        // breedCharacteristicsMap을 CSV 파일에서 로드하는 로직
        try {
            File file = ResourceUtils.getFile("file:csv/dogs_re.csv");
            BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(file), StandardCharsets.UTF_8));

            String line;
            reader.readLine(); // 헤더 라인 건뛰
            while ((line = reader.readLine()) != null) {
                String[] values = line.split(",");
                // 배열의 길이 확인
                if (values.length < 19) {

                    continue;
                }
                String breedName = values[0].trim(); // Breed 이름
                int[] characteristics = new int[14]; // 14개 특성 저장할 배열
                for (int i = 0; i < characteristics.length; i++) {
                    try {
                        characteristics[i] = Integer.parseInt(values[i + 5].trim()); // Affectionate With Family부터 시작
                    } catch (NumberFormatException e) {
                        // 숫자로 변환할 수 없는 데이터 처리
                        characteristics[i] = 0; // 일단 0이라 했지만, 다른 적절한 기본값 사용예정
                    }
                }
                breedCharacteristicsMap.put(breedName, characteristics);
            }
            reader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public DogCharacteristics calculateAndSaveCharacteristics(ImageAnalysisResult analysisResult) {
        DogCharacteristics dogCharacteristics = calculateCharacteristics(analysisResult);
        dogCharacteristicsDAO.save(dogCharacteristics);
        return dogCharacteristics;
    }

    private DogCharacteristics calculateCharacteristics(ImageAnalysisResult analysisResult) {


        double totalProbability = analysisResult.getProbability1() + analysisResult.getProbability2() + analysisResult.getProbability3();
        double[] weightedCharacteristics = new double[14];

        // 각 품종별로 가중치를 계산
        String[] breedNames = {analysisResult.getClassName1(), analysisResult.getClassName2(), analysisResult.getClassName3()};
        double[] probabilities = {analysisResult.getProbability1(), analysisResult.getProbability2(), analysisResult.getProbability3()};

        //System.out.println("Total Probability: " + totalProbability);

        for (int i = 0; i < breedNames.length; i++) {
            int[] breedCharacteristic = breedCharacteristicsMap.get(breedNames[i]);

            System.out.println("Breed Name: " + breedNames[i]);

            if (breedCharacteristic != null) {
                double weight = probabilities[i] / totalProbability;
                for (int j = 0; j < weightedCharacteristics.length; j++) {
                    weightedCharacteristics[j] += breedCharacteristic[j] * weight;

                    // 로그 확인용 (추후 삭제)
                    System.out.println("Characteristic " + j + ": " + breedCharacteristic[j]
                            + ", Weight: " + weight + ", Weighted Value: "
                            + weightedCharacteristics[j]);
                }
            }
        }

        // DogCharacteristics 객체를 생성하고 가중치로 계산된 특성 값 설정
        DogCharacteristics dogCharacteristics = new DogCharacteristics(
                analysisResult.getDesertionNo(),
                (int) Math.round(weightedCharacteristics[0]),
                (int) Math.round(weightedCharacteristics[1]),
                (int) Math.round(weightedCharacteristics[2]),
                (int) Math.round(weightedCharacteristics[3]),
                (int) Math.round(weightedCharacteristics[4]),
                (int) Math.round(weightedCharacteristics[5]),
                (int) Math.round(weightedCharacteristics[6]),
                (int) Math.round(weightedCharacteristics[7]),
                (int) Math.round(weightedCharacteristics[8]),
                (int) Math.round(weightedCharacteristics[9]),
                (int) Math.round(weightedCharacteristics[10]),
                (int) Math.round(weightedCharacteristics[11]),
                (int) Math.round(weightedCharacteristics[12]),
                (int) Math.round(weightedCharacteristics[13])
        );

        return dogCharacteristics;
    }


    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<DogCharacteristics> findBestMatchesForUser(String userId) throws Exception {
        // 먼저 사용자 특성 가져오기
        UserCharacteristics userChar = jdbcTemplate.queryForObject(
                "SELECT * FROM UserCharacteristics WHERE mem_id = ?",
                new Object[]{userId},
                new RowMapper<UserCharacteristics>() {
                    @Override
                    public UserCharacteristics mapRow(ResultSet rs, int rowNum) throws SQLException {
                        return new UserCharacteristics(
                                rs.getInt("affectionateWithFamily"),
                                rs.getInt("goodWithYoungChildren"),
                                rs.getInt("goodWithOtherDogs"),
                                rs.getInt("sheddingLevel"),
                                rs.getInt("coatGroomingFrequency"),
                                rs.getInt("droolingLevel"),
                                rs.getInt("opennessToStrangers"),
                                rs.getInt("watchdogProtectiveNature"),
                                rs.getInt("playfulnessLevel"),
                                rs.getInt("adaptabilityLevel"),
                                rs.getInt("trainabilityLevel"),
                                rs.getInt("barkingLevel"),
                                rs.getInt("energyLevel"),
                                rs.getInt("mentalStimulationNeeds")
                        );
                    }
                }
        );

        // DogCharacteristics과 비교해서 MSE 계산
        String sql = "SELECT desertionNo, " +
                "(" +
                "POWER(? - affectionateWithFamily, 2) + " +
                "POWER(? - goodWithYoungChildren, 2) + " +
                "POWER(? - goodWithOtherDogs, 2) + " +
                "POWER(? - sheddingLevel, 2) + " +
                "POWER(? - coatGroomingFrequency, 2) + " +
                "POWER(? - droolingLevel, 2) + " +
                "POWER(? - opennessToStrangers, 2) + " +
                "POWER(? - watchdogProtectiveNature, 2) + " +
                "POWER(? - playfulnessLevel, 2) + " +
                "POWER(? - adaptabilityLevel, 2) + " +
                "POWER(? - trainabilityLevel, 2) + " +
                "POWER(? - barkingLevel, 2) + " +
                "POWER(? - energyLevel, 2) + " +
                "POWER(? - mentalStimulationNeeds, 2) " +
                ") AS mse " +
                "FROM DogCharacteristics " +
                "ORDER BY mse ASC " +
                "LIMIT 15";

        return jdbcTemplate.query(
                sql,
                new Object[]{
                        userChar.getAffectionateWithFamily(),
                        userChar.getGoodWithYoungChildren(),
                        userChar.getGoodWithOtherDogs(),
                        userChar.getSheddingLevel(),
                        userChar.getCoatGroomingFrequency(),
                        userChar.getDroolingLevel(),
                        userChar.getOpennessToStrangers(),
                        userChar.getWatchdogProtectiveNature(),
                        userChar.getPlayfulnessLevel(),
                        userChar.getAdaptabilityLevel(),
                        userChar.getTrainabilityLevel(),
                        userChar.getBarkingLevel(),
                        userChar.getEnergyLevel(),
                        userChar.getMentalStimulationNeeds()
                },
                (rs, rowNum) -> {
                    DogCharacteristics dog = new DogCharacteristics(rs.getString("desertionNo"));
                    System.out.println("DesertionNo: " + dog.getDesertionNo() + ", MSE: " + rs.getDouble("mse")); // 로그 추가
                    return dog;
                }
        );

    }

    // 키워드 점수화 로직 추가
    public Map<String, Integer> scoreBreedsByKeywords(List<String> keywords) {
        String sql = "SELECT Breed, Characteristic1, Characteristic2, Characteristic3, Characteristic4, Characteristic5 FROM animals";

        List<Map<String, Object>> breeds = jdbcTemplate.queryForList(sql);

        Map<String, Integer> breedScores = new HashMap<>();

        for (Map<String, Object> breed : breeds) {
            String breedName = (String) breed.get("Breed");
            int score = 0;
            for (String keyword : keywords) {
                if (keyword.equalsIgnoreCase((String) breed.get("Characteristic1")) ||
                        keyword.equalsIgnoreCase((String) breed.get("Characteristic2")) ||
                        keyword.equalsIgnoreCase((String) breed.get("Characteristic3")) ||
                        keyword.equalsIgnoreCase((String) breed.get("Characteristic4")) ||
                        keyword.equalsIgnoreCase((String) breed.get("Characteristic5"))) {
                    score++;
                }
            }
            breedScores.put(breedName, score);
        }

        return breedScores;
    }
}

