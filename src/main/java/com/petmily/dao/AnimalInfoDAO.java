package com.petmily.dao;

import com.petmily.dto.AnimalInfo;

import java.util.List;

public interface AnimalInfoDAO {
    void insertAnimalInfo(AnimalInfo animalInfo);
    void insertAnimalInfoList(List<AnimalInfo> animalInfoList);

    List<String> findUnprocessedDesertionNos();
    String findImageUrlByDesertionNo(String desertionNo);
}
