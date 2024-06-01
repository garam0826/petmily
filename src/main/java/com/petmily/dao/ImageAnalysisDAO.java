package com.petmily.dao;

import com.petmily.dto.ImageAnalysisResult;

import java.util.List;

public interface ImageAnalysisDAO {
    ImageAnalysisResult findByDesertionNo(String desertionNo);
    void save(ImageAnalysisResult result);

    //check용
    List<ImageAnalysisResult> findAllUnprocessed();

    // 모든 이미지 분석 결과를 가져오는 메서드
    List<ImageAnalysisResult> findAll();

    List<String> findRandomDesertionNos(int limit);
}
