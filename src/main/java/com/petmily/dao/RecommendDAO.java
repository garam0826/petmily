package com.petmily.dao;

import com.petmily.dto.MemberDTO;
import com.petmily.dto.RegionDTO;
import com.petmily.dto.DistrictDTO;

public interface RecommendDAO {
    // 추천기능 1 : 강아지 품종 특성값 & 사용자 Profile 조합
    // Characteristics에 회원 ID 추가
    public int insertChar(String mem_id) throws Exception;

    // 회원 ID별 Characteristics 조회


    // Characteristics에서 회원 ID 삭제
    public int deleteChar(String mem_id) throws Exception;




    // 추천기능 2 : 강아지 성격 Keyword 활용 -> 사용자 선택값과 강아지 품종의 일치 갯수
    // 알고리즘 : UI에서 사용자가 선택 -> 선택한  csv파일 품종에서 keyword로 저장 ->
    // 예시) 똑똑함(영단어 4개), 장난기 많은(영단어 2개), 민첩한(영단어 2개)
    // Preference에 회원 ID 추가

    // Preference에서 회원 ID 삭제




    // 추천기능 3 : 협업 Filtering
    //

    // test
    public String getTime() throws Exception;
}