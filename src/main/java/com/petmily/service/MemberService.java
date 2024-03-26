package com.petmily.service;

import com.petmily.dto.MemberDTO;

import java.util.HashMap;

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
    // ID 찾기 입력된 email과 nickname 둘 다 일치 확인
    // 입력된 email, nickname과 DAO에서 가져온 정보를 여기서 일치여부 확인
    public String searchMem_ID(HashMap<String, String> hashMap) throws Exception;

    // 회원 비밀번호 찾기
    // PW 찾기 입력된 email, mem_id과 회원정보 2개 일치 확인
    public String searchMem_PW(HashMap<String, String> hashMap) throws Exception;

    // test
    public String getTime() throws Exception;
}
