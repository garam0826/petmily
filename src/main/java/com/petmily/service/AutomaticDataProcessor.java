package com.petmily.service;

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

    // 매일 새벽 2시에 실행되게하려면 스케줄링 메서드
    //@Scheduled(cron = "0 0 2 * * ?")

    //지금 시간으로 테스트
    @Scheduled(cron = "0 37 17 * * ?")
    public void processImageAnalysisResults() {
        // 이미지 분석 결과를 조회하여 아직 특성이 계산되지 않은 결과를 가져오기
        List<ImageAnalysisResult> unprocessedResults = imageAnalysisDAO.findAllUnprocessed();

        for (ImageAnalysisResult result : unprocessedResults) {
            // 특성을 계산하고 결과저장
            DogCharacteristics characteristics = breedCharacteristicService.calculateAndSaveCharacteristics(result);
            System.out.println("Processed characteristics for desertionNo: " + result.getDesertionNo());
        }
    }
}
