package com.petmily.dao;

import com.petmily.dto.UserCharacteristics;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserCharacteristicsDAOImple implements UserCharacteristicsDAO {

    private final SqlSession sqlSession;

    @Autowired
    public UserCharacteristicsDAOImple(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    @Override
    public void save(UserCharacteristics userCharacteristics) {
        sqlSession.insert("com.petmily.mappers.UserCharacteristicsMapper.save", userCharacteristics);
    }
}
