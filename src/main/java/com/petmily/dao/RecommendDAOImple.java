package com.petmily.dao;

import com.petmily.dto.MemberDTO;
import com.petmily.dto.RegionDTO;
import com.petmily.dto.DistrictDTO;

import org.apache.ibatis.session.SqlSession;

import org.springframework.stereotype.Repository;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;

@Repository
public class RecommendDAOImple implements RecommendDAO{
    // SQL Session Autowired
    @Autowired
    private SqlSession sqlSession;

    // Mapper namespace 지정
    private static String namespace = "com.petmily.mappers.RecommendMapper";

    // 추천기능 1 : 강아지 품종 특성값 & 사용자 Profile 조합
    // Characteristics에 회원 ID 추가
    @Override
    public int insertChar(String mem_id) throws Exception{
        int result = sqlSession.insert(namespace+ ".insertChar", mem_id);

        return result;
    }

    // 회원 ID별 Characteristics 조회


    // Characteristics에서 회원 ID 삭제
    @Override
    public int deleteChar(String mem_id) throws Exception{
        int result = sqlSession.delete(namespace+ ".deleteChar", mem_id);

        return result;
    }


    // test
    @Override
    public String getTime() throws Exception{
        String time = sqlSession.selectOne(namespace+ ".getTime");
        System.out.println("DAO 완료!");

        return time;
    }
}