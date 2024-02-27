package com.petmily.dao;

import com.petmily.dto.MemberDTO;

public interface MemberDAO {
    // 회원가입
    public int insertMember(MemberDTO memberDTO) throws Exception;

    // 회원 ID 중복 확인
    public int checkMem_ID(String mem_id) throws Exception;

    // 회원 비밀번호 조회
    public String checkMem_PW(String mem_id) throws Exception;

    // 회원정보 조회
    public MemberDTO slctMyInfo(String mem_id) throws Exception;

    // 회원정보 수정

    // 회원탈퇴
    public int deleteMember(String mem_id) throws Exception;

    // test
    public String getTime() throws Exception;
}
