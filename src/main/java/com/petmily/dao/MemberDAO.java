package com.petmily.dao;

import com.petmily.dto.MemberDTO;

public interface MemberDAO {

    //회원가입
    public int insertMember(MemberDTO memberDTO) throws Exception;
}
