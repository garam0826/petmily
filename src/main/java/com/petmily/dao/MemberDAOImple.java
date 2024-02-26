package com.petmily.dao;

import com.petmily.dto.MemberDTO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MemberDAOImple implements MemberDAO {
    @Autowired
    private SqlSession sqlSession;

    // Mapper namespace
    private static String namespace = "com.petmily.mappers.MemberMapper";

    //회원가입
    @Override
    public int insertMember(MemberDTO memberDTO) throws Exception{

        int result = sqlSession.insert(namespace + ".insertMember", memberDTO);

        return result;
    }
}
