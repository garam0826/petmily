package com.petmily.service;

import com.petmily.dto.MemberDTO;
public interface MemberService {

    //회원가입
	public int insertMember(MemberDTO memberDTO) throws Exception;
}
