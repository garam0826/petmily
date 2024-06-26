package com.petmily.service;

import com.petmily.dto.MemberDTO;
import com.petmily.dto.RegionDTO;
import com.petmily.dto.DistrictDTO;

import com.petmily.dao.RecommendDAO;

import com.petmily.util.TranslationConfig;

import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;

@Service
public class RecommendServiceImple implements RecommendService{
    // DAO Autowired
    @Autowired
    private RecommendDAO recommendDAO;

    @Autowired
    private MessageSource messageSource;

    //
    @Autowired
    private TranslationConfig translationConfig;

    // Logging
    private static final Logger logger = LoggerFactory.getLogger(RecommendServiceImple.class);

    // 추천기능 1 : 강아지 품종 특성값 & 사용자 Profile 조합
    // Characteristics에 회원 ID 추가
    @Override
    public boolean insertChar(String mem_id) throws Exception{
        boolean result = false;
        int value = recommendDAO.insertChar(mem_id);

        if(value > 0){
            result = true;
            logger.info(mem_id+ " : Characteristics 추가 완료");

            return result;
        }else{
            logger.info(mem_id+ " : Characteristics 추가 실패");

            return result;
        }
    }

    // 회원 ID별 Characteristics 조회


    // Characteristics에서 회원 ID 삭제
    @Override
    public boolean deleteChar(String mem_id) throws Exception{
        boolean result = false;
        int value = recommendDAO.deleteChar(mem_id);

        if(value > 0){
            result = true;
            logger.info(mem_id+ " : Characteristics 삭제 완료");

            return result;
        }else{
            logger.info(mem_id+ " : Characteristics 삭제 실패");

            return result;
        }
    }

    // 추천기능 2 : 강아지 성격 Keyword 활용 -> 사용자 선택값과 강아지 품종의 일치 갯수
    // 알고리즘 : UI에서 사용자가 선택 -> 선택한  csv파일 품종에서 keyword로 저장 ->
    // 예시) 똑똑함(영단어 4개), 장난기 많은(영단어 2개), 민첩한(영단어 2개)
    // Preference에 회원 ID 추가

    // Preference에서 회원 ID 삭제




    // 추천기능 3 : 협업 Filtering
    //

    // 번역 test
    @Override
    public String getKoreanTranslation(String code){
        logger.info("시작 : " +code);
        String word = TranslationConfig.getTranslation(messageSource, code);
        logger.info("완료 : " +word);

        return word;
    }

    // test
    public String getTime() throws Exception{;
        String time = recommendDAO.getTime();
        System.out.println("Service 완료!");

        return time;
    }
}