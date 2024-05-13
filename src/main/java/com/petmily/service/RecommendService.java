package com.petmily.service;

import com.petmily.dto.MemberDTO;
import com.petmily.dto.RegionDTO;
import com.petmily.dto.DistrictDTO;

public interface RecommendService {
    // 추천기능 1 : 강아지 품종 특성값 & 사용자 Profile 조합
    // Characteristics에 회원 ID 추가
    public boolean insertChar(String mem_id) throws Exception;

    // 회원 ID별 Characteristics 조회


    // Characteristics에서 회원 ID 삭제
    public boolean deleteChar(String mem_id) throws Exception;

    // test
    public String getTime() throws Exception;
}