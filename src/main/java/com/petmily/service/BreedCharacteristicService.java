package com.petmily.service;

import com.petmily.dao.DogCharacteristicsDAO;
import com.petmily.dto.DogCharacteristics;
import com.petmily.dto.ImageAnalysisResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.util.ResourceUtils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

import java.util.HashMap;
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

}

