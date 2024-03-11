package com.petmily.service;

import com.petmily.dto.MemberDTO;

public interface MemberService {
    // 회원가입
    public boolean insertMember(MemberDTO memberDTO) throws Exception;

    // 회원 ID 중복 확인
    public boolean checkMem_ID(String mem_id) throws Exception;

    // 회원 비밀번호 조회
    //public String checkMem_PW(String mem_id) throws Exception;

    // Login

    // 회원정보 조회
    public MemberDTO slctMyInfo(String mem_id) throws Exception;

    // 회원정보 수정
    public boolean updateMyInfo(MemberDTO memberDTO) throws Exception;

    // 회원탈퇴
    public boolean deleteMember(String mem_id) throws Exception;

    // 회원 ID 찾기
    // 회원 비밀번호 찾기

    // test
    public String getTime() throws Exception;
}
