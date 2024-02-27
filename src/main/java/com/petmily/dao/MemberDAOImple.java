package com.petmily.dao;

import com.petmily.dto.MemberDTO;

import org.apache.ibatis.session.SqlSession;

import org.springframework.stereotype.Repository;

import org.springframework.beans.factory.annotation.Autowired;

@Repository
public class MemberDAOImple implements MemberDAO {
    // SQL Session Autowired
    @Autowired
    private SqlSession sqlSession;

    // Mapper namespace 지정
    private static String namespace = "com.petmily.mappers.MemberMapper";

    // 회원가입
    @Override
    public int insertMember(MemberDTO memberDTO) throws Exception{
        int result = sqlSession.insert(namespace+ ".insertMember", memberDTO);

        return result;
    }

    // 회원 ID 중복 확인
    @Override
    public int checkMem_ID(String mem_id) throws Exception{
        int result = sqlSession.selectOne(namespace+ ".checkMem_ID", mem_id);

        return result;
    }

    // 회원 비밀번호 조회
    @Override
    public String checkMem_PW(String mem_id) throws Exception{
        String result = sqlSession.selectOne(namespace+ ".checkMem_PW", mem_id);

        return result;
    }

    // 회원정보 조회
    @Override
    public MemberDTO slctMyInfo(String mem_id) throws Exception{
        MemberDTO memberDTO = sqlSession.selectOne(namespace+ ".slctMyInfo", mem_id);

        return memberDTO;
    }

    // 회원탈퇴
    @Override
    public int deleteMember(String mem_id) throws Exception{
        int result = sqlSession.delete(namespace+ ".deleteMember", mem_id);

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
