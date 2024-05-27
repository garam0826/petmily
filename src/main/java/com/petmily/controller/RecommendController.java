package com.petmily.controller;

import com.petmily.dto.MemberDTO;
import com.petmily.dto.RegionDTO;
import com.petmily.dto.DistrictDTO;

import com.petmily.service.MemberService;
import com.petmily.service.RecommendService;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.multipart.MultipartFile;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;

import java.io.IOException;

@RestController
@RequestMapping("/recommend")
public class RecommendController {
    // Service Autowired
    @Autowired
    private RecommendService recommendService;

    // Logging
    private static final Logger logger = LoggerFactory.getLogger(RecommendController.class);

    // 추천기능 1 : 강아지 품종 특성값 & 사용자 Profile 조합

    // 광역 주소 목록
    // get방식, 경로 /api/animal/

    // 시군구 주소 코드 띄우기
    // get, code반환 /api/animal/district/

    // 추천기능 2 : 강아지 성격 Keyword 활용 -> 사용자 선택값과 강아지 품종의 일치 갯수
    // 알고리즘 : UI에서 사용자가 선택 -> 선택한  csv파일 품종에서 keyword로 저장 ->
    // 예시) 똑똑함(영단어 4개), 장난기 많은(영단어 2개), 민첩한(영단어 2개)




    // 추천기능 3 : 협업 Filtering
    //


    // 번역 test
    @GetMapping("/Trans_test")
    public ResponseEntity<String> getTranslation(@RequestParam String code){
        logger.info("/Trans_test GetMapping");

        String word = "";

        word = recommendService.getKoreanTranslation(code);

        return new ResponseEntity<>(word, HttpStatus.OK);
    }

    // test
    @GetMapping("/test")
    public ResponseEntity<String> getTime(){
        logger.info("/test GetMapping");

        try{
            String time = recommendService.getTime();
            logger.info(time);

            return new ResponseEntity<>(time, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}