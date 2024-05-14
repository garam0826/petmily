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


    // 추천기능 2 : 강아지 성격 Keyword 활용 -> 사용자 선택값과 강아지 품종의 일치 갯수
    // 알고리즘 : UI에서 사용자가 선택 -> 선택한  csv파일 품종에서 keyword로 저장 ->
    // 예시) 똑똑함(영단어 4개), 장난기 많은(영단어 2개), 민첩한(영단어 2개)
    // Preference에 회원 ID 추가

    // Preference에서 회원 ID 삭제




    // 추천기능 3 : 협업 Filtering
    //

    // test
    @Override
    public String getTime() throws Exception{
        String time = sqlSession.selectOne(namespace+ ".getTime");
        System.out.println("DAO 완료!");

        return time;
    }
}