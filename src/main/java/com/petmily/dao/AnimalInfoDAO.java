package com.petmily.dao;

import com.petmily.dto.AnimalInfo;

import java.util.List;

public interface AnimalInfoDAO {
    void insertAnimalInfo(AnimalInfo animalInfo);
    void insertAnimalInfoList(List<AnimalInfo> animalInfoList);

    List<String> findUnprocessedDesertionNos();
    String findImageUrlByDesertionNo(String desertionNo);

    // desertionNo를 이용하여 동물 정보 조회
    AnimalInfo findByDesertionNo(String desertionNo);
}
