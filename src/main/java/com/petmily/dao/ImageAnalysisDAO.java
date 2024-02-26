package com.petmily.dao;

import com.petmily.dto.ImageAnalysisResult;

public interface ImageAnalysisDAO {
    ImageAnalysisResult findByDesertionNo(String desertionNo);
    void save(ImageAnalysisResult result);
}
