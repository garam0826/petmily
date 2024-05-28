package com.petmily.service;

import com.petmily.dao.DogSpecDAO;
import com.petmily.dto.DogSpec;
import com.petmily.dto.ImageAnalysisResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DogSpecService {

    private final DogSpecDAO dogSpecDAO;
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DogSpecService(DogSpecDAO dogSpecDAO, JdbcTemplate jdbcTemplate) {
        this.dogSpecDAO = dogSpecDAO;
        this.jdbcTemplate = jdbcTemplate;
    }

    public DogSpec calculateWeightedCharacteristics(String desertionNo) {
        ImageAnalysisResult analysisResult = getImageAnalysisResult(desertionNo);

        if (analysisResult == null) {
            throw new IllegalArgumentException("No analysis result found for desertionNo: " + desertionNo);
        }

        List<DogSpec> dogSpecs = dogSpecDAO.getAllDogSpecs();

        double totalProbability = analysisResult.getProbability1() + analysisResult.getProbability2() + analysisResult.getProbability3();

        double weightedHeight = 0;
        double weightedWeight = 0;
        double weightedLifeExpectancy = 0;

        String[] breedNames = {analysisResult.getClassName1(), analysisResult.getClassName2(), analysisResult.getClassName3()};
        double[] probabilities = {analysisResult.getProbability1(), analysisResult.getProbability2(), analysisResult.getProbability3()};

        for (int i = 0; i < breedNames.length; i++) {
            final String breedName = breedNames[i];
            double weight = probabilities[i] / totalProbability;
            Optional<DogSpec> optionalDogSpec = dogSpecs.stream()
                    .filter(spec -> spec.getBreed().equalsIgnoreCase(breedName))
                    .findFirst();

            if (optionalDogSpec.isPresent()) {
                DogSpec dogSpec = optionalDogSpec.get();
                weightedHeight += ((dogSpec.getHeight1() + dogSpec.getHeight2()) / 2) * weight;
                weightedWeight += ((dogSpec.getWeight1() + dogSpec.getWeight2()) / 2) * weight;
                weightedLifeExpectancy += ((dogSpec.getLifeExpectancy1() + dogSpec.getLifeExpectancy2()) / 2) * weight;
            }
        }

        DogSpec weightedSpec = new DogSpec();
        weightedSpec.setBreed(desertionNo);
        weightedSpec.setHeight1(weightedHeight);
        weightedSpec.setHeight2(weightedHeight);
        weightedSpec.setWeight1(weightedWeight);
        weightedSpec.setWeight2(weightedWeight);
        weightedSpec.setLifeExpectancy1(weightedLifeExpectancy);
        weightedSpec.setLifeExpectancy2(weightedLifeExpectancy);

        return weightedSpec;
    }

    private ImageAnalysisResult getImageAnalysisResult(String desertionNo) {
        String sql = "SELECT desertionNo, className1, probability1, className2, probability2, className3, probability3 " +
                "FROM imageanalysisresult WHERE desertionNo = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{desertionNo}, (rs, rowNum) -> {
            ImageAnalysisResult result = new ImageAnalysisResult();
            result.setDesertionNo(rs.getString("desertionNo"));
            result.setClassName1(rs.getString("className1"));
            result.setProbability1(rs.getDouble("probability1"));
            result.setClassName2(rs.getString("className2"));
            result.setProbability2(rs.getDouble("probability2"));
            result.setClassName3(rs.getString("className3"));
            result.setProbability3(rs.getDouble("probability3"));
            return result;
        });
    }
}
