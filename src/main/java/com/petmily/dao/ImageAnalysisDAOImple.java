package com.petmily.dao;

import com.petmily.dto.ImageAnalysisResult;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ImageAnalysisDAOImple implements ImageAnalysisDAO {

    @Autowired
    private SqlSession sqlSession;
    private static final String namespace = "com.petmily.mappers.ImageAnalysisMapper";

    @Override
    public ImageAnalysisResult findByDesertionNo(String desertionNo) {
        return sqlSession.selectOne(namespace + ".findByDesertionNo", desertionNo);
    }

    @Override
    public void save(ImageAnalysisResult result) {
        sqlSession.insert(namespace + ".save", result);
    }

    //check용
    @Override
    public List<ImageAnalysisResult> findAllUnprocessed() {
        return sqlSession.selectList(namespace + ".findAllUnprocessed");
    }

    @Override
    public List<ImageAnalysisResult> findAll() {
        return sqlSession.selectList(namespace + ".findAll");
    }
}
