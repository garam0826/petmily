package com.petmily.service;

import com.petmily.dao.AnimalInfoDAO;
import com.petmily.dao.ImageAnalysisDAO;
import com.petmily.dto.ImageAnalysisResult;
import com.petmily.dto.DogCharacteristics;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@EnableScheduling
public class AutomaticDataProcessor {

    @Autowired
    private ImageAnalysisDAO imageAnalysisDAO;

    @Autowired
    private BreedCharacteristicService breedCharacteristicService;

    @Autowired
    private AnimalInfoDAO animalInfoDAO;

    @Autowired
    private AnimalInfoService animalInfoService;


    //매일 14시 50분에 실행되게 하는 스케쥴링 메서드 (테스트/수정예정)
    @Scheduled(cron = "0 01 17 * * ?")
    public void processImageAnalysisResults() {
        // 이미지 분석 결과를 조회하여 아직 특성이 계산되지 않은 결과를 가져오기
        List<ImageAnalysisResult> unprocessedResults = imageAnalysisDAO.findAllUnprocessed();

        for (ImageAnalysisResult result : unprocessedResults) {
            // 특성을 계산하고 결과저장
            DogCharacteristics characteristics = breedCharacteristicService.calculateAndSaveCharacteristics(result);
            System.out.println("Processed characteristics for desertionNo: " + result.getDesertionNo());
        }
    }



    @Scheduled(cron = "0 01 17 * * ?")
    public void updateImageAnalysisTable() {
        // AnimalInfo 테이블에서 ImageAnalysisResult 테이블에 없는 desertionNo 찾기
        List<String> unprocessedDesertionNos = animalInfoDAO.findUnprocessedDesertionNos();

        for (String desertionNo : unprocessedDesertionNos) {
            // 각 desertionNo에 해당하는 정보를 가져오고 이미지 분석을 진행
            // 이미지 URL 가져오기, 분석 수행 등
            String imageUrl = animalInfoDAO.findImageUrlByDesertionNo(desertionNo);
            try {
                ImageAnalysisResult analysisResult = animalInfoService.analyzeAndSaveImage(desertionNo, imageUrl);
                System.out.println("New Image Analysis added for desertionNo: " + desertionNo);
            } catch (Exception e) {
                System.err.println("Failed to analyze image for desertionNo: " + desertionNo);
            }
        }
    }

}
