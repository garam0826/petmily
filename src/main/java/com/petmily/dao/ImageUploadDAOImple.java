package com.petmily.dao;

import com.petmily.dto.MemberDTO;
import com.petmily.dto.ImageDTO;

import org.apache.ibatis.session.SqlSession;

import org.springframework.stereotype.Repository;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Repository
public class ImageUploadDAOImple implements ImageUploadDAO{
    // SQL Session Autowired
    @Autowired
    private SqlSession sqlSession;

    // Mapper namespace 지정
    private static String namespace = "com.petmily.mappers.ImageUploadMapper";




    // test
    @Override
    public String getTime() throws Exception{
        String time = sqlSession.selectOne(namespace+ ".getTime");
        System.out.println("DAO 완료!");

        return time;
    }
}