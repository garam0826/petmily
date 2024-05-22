package com.petmily.dao;

import com.petmily.dto.AnimalInfo;

import java.util.List;
import java.util.Map;

public interface AnimalInfoDAO {
    void insertAnimalInfo(AnimalInfo animalInfo);
    void insertAnimalInfoList(List<AnimalInfo> animalInfoList);

    List<String> findUnprocessedDesertionNos();
    String findImageUrlByDesertionNo(String desertionNo);

    // desertionNo를 이용하여 동물 정보 조회
    AnimalInfo findByDesertionNo(String desertionNo);

    // 한국어 키워드로 영어 키워드 목록 조회
    Map<String, Object> findEnglishKeywordsByKorean(String korean);
}
