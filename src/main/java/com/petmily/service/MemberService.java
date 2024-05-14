package com.petmily.service;

import com.petmily.dto.MemberDTO;
import com.petmily.dto.RegionDTO;
import com.petmily.dto.DistrictDTO;

import java.util.HashMap;
import java.util.List;

public interface MemberService {
    // 회원가입
    public boolean insertMember(MemberDTO memberDTO) throws Exception;

    // 회원 ID 중복 확인
    public boolean checkMem_ID(String mem_id) throws Exception;

    // 광역 주소 목록 조회
    public List<RegionDTO> listRegion() throws Exception;

    // 시/군/구 주소 검색(광역 주소 기준)
    public List<DistrictDTO> searchDistrict(String reg_name) throws Exception;

    // 회원 비밀번호 조회
    //public String checkMem_PW(String mem_id) throws Exception;

    // Login
    public MemberDTO loginMember(HashMap<String, String> hashMap) throws Exception;

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

    // 기초자치단체 기준 주소 검색 경기도 부터 다시 저장

    // test
    public String getTime() throws Exception;
}
