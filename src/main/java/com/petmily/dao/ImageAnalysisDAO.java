package com.petmily.dao;

import com.petmily.dto.ImageAnalysisResult;

import java.util.List;

public interface ImageAnalysisDAO {
    ImageAnalysisResult findByDesertionNo(String desertionNo);
    void save(ImageAnalysisResult result);

    //check용
    List<ImageAnalysisResult> findAllUnprocessed();
}
