package com.petmily.dao;

import com.petmily.dto.DogSpec;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DogSpecDAO {

    private final SqlSession sqlSession;
    private static final String namespace = "com.petmily.mappers.DogSpecMapper";

    @Autowired
    public DogSpecDAO(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<DogSpec> getAllDogSpecs() {
        return sqlSession.selectList(namespace + ".getAllDogSpecs");
    }
}
