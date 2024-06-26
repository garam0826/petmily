package com.petmily.dao;
import com.petmily.dto.AnimalInfo;
import org.mybatis.spring.SqlSessionTemplate;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class AnimalInfoDAOImple implements AnimalInfoDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public void insertAnimalInfo(AnimalInfo animalInfo) {
        sqlSession.insert("com.petmily.mappers.AnimalInfoMapper.insertAnimalInfo", animalInfo);
    }

    @Override
    public void insertAnimalInfoList(List<AnimalInfo> animalInfoList) {
        for (AnimalInfo animalInfo : animalInfoList) {
            insertAnimalInfo(animalInfo);
        }
    }

    @Override
    public List<String> findUnprocessedDesertionNos() {
        return sqlSession.selectList("com.petmily.mappers.AnimalInfoMapper.findUnprocessedDesertionNos");
    }

    @Override
    public String findImageUrlByDesertionNo(String desertionNo) {
        return sqlSession.selectOne("com.petmily.mappers.AnimalInfoMapper.findImageUrlByDesertionNo", desertionNo);
    }

    @Override
    public AnimalInfo findByDesertionNo(String desertionNo) {
        return sqlSession.selectOne("com.petmily.mappers.AnimalInfoMapper.findByDesertionNo", desertionNo);
    }

    // 한국어 키워드에 해당하는 영어 키워드 목록을 조회
    @Override
    public Map<String, Object> findEnglishKeywordsByKorean(String korean) {
        return sqlSession.selectOne("com.petmily.mappers.AnimalInfoMapper.findEnglishKeywordsByKorean", korean);
    }
}
