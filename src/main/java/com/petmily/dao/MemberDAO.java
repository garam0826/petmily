package com.petmily.dao;

import com.petmily.dto.MemberDTO;

import java.util.Map;
import java.util.HashMap;

public interface MemberDAO {
    // 회원가입
    public int insertMember(MemberDTO memberDTO) throws Exception;

    // 회원 ID 중복 확인
    public int checkMem_ID(String mem_id) throws Exception;

    // 시/군/구 주소 검색 -> region table(지역, 코드), district table(컬럼 4개) 구분
    // 14개 특성 입력 table (정수로만 입력)

    // 회원 비밀번호 조회
    public String checkMem_PW(String mem_id) throws Exception;

    // 회원정보 조회
    public MemberDTO slctMyInfo(String mem_id) throws Exception;

    // 회원정보 수정
    public int updateMyInfo(MemberDTO memberDTO) throws Exception;

    // 회원탈퇴
    public int deleteMember(String mem_id) throws Exception;

    // 회원 ID 찾기
    // ID 찾기 입력된 email과 nickname 둘 다 일치 확인
    public MemberDTO searchMem_ID(HashMap<String, String> hashMap) throws Exception;

    // 회원 비밀번호 찾기
    // PW 찾기 입력된 email, mem_id과 회원정보 2개 일치 확인
    public MemberDTO searchMem_PW(HashMap<String, String> hashMap) throws Exception;

    // test
    public String getTime() throws Exception;
}
