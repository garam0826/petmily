package com.petmily.dao;

import com.petmily.dto.DogCharacteristics;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DogCharacteristicsDAOImple implements DogCharacteristicsDAO {

    private final SqlSession sqlSession;
    private static final String namespace = "com.petmily.mappers.DogCharacteristicsMapper";

    @Autowired
    public DogCharacteristicsDAOImple(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    @Override
    public void save(DogCharacteristics dogCharacteristics) {
        sqlSession.insert(namespace + ".save", dogCharacteristics);
    }
}

