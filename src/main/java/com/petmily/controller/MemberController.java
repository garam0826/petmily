package com.petmily.controller;

import com.petmily.dto.MemberDTO;

import com.petmily.service.MemberService;
import com.petmily.service.ImageUploadService;

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
import java.util.UUID;


@RestController
@RequestMapping("/member")
public class MemberController {
    // Service Autowired
    @Autowired
    private MemberService memberService;
    @Autowired
    private ImageUploadService imageUploadService;

    // Logging
    private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

    // 회원가입
    @PostMapping("/SignUp")
    public ResponseEntity<Boolean> insertMember(@RequestBody MemberDTO memberDTO){
        logger.info("/SignUp PostMapping");

        try{
            boolean result = memberService.insertMember(memberDTO);

            if(result){
                logger.info("회원가입 성공");

                // 회원 ID 개인 folder 추가
                imageUploadService.createMem_Dir(memberDTO.getMem_id());

                return new ResponseEntity<>(result, HttpStatus.OK);
            }else{
                logger.info("회원가입 실패");

                return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 회원 ID 중복 확인
    @GetMapping("/CheckID")
    public ResponseEntity<Boolean> checkMem_ID(@RequestParam String mem_id){
        logger.info("/checkID GetMapping");

        try{
            boolean result = memberService.checkMem_ID(mem_id);

            if(result){
                logger.info("ID 사용가능");

                return new ResponseEntity<>(result, HttpStatus.OK);
            }else{
                logger.info("이미 가입된 ID");

                return new ResponseEntity<>(result, HttpStatus.OK);
            }
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Session에 필요한 정보 ID nickname
    // Login
    /*@PostMapping("/Login")
    public ResponseEntity<MemberDTO> login(@RequestBody MemberDTO memberDTO){
        return
        // 내가 쓴 글, 댓글 찾는 SQL하고 service 작성
    }*/


    // 회원정보 수정
    @PutMapping("/MyPage/Update")
    public ResponseEntity<Boolean> updateMyInfo(@RequestBody MemberDTO memberDTO){
        logger.info("/MyPage/Update PutMapping");

        try{
            boolean result = memberService.updateMyInfo(memberDTO);

            if(result){


                return new ResponseEntity<>(result, HttpStatus.OK);
            }else{
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 회원탈퇴
    @DeleteMapping("/MyPage/Resign")
    public ResponseEntity<Boolean> deleteMember(@RequestBody MemberDTO memberDTO){
        logger.info("/MyPage/Resign DeleteMapping");

        try{
            boolean result = memberService.deleteMember(memberDTO.getMem_id());

            if(result){
                // 회원 ID 개인 folder 삭제
                imageUploadService.deleteMem_Dir(memberDTO.getMem_id());

                return new ResponseEntity<>(result, HttpStatus.OK);
            }else{
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 회원 ID 찾기
    // ID 찾기 입력된 email과 nickname 둘 다 일치 확인
    // 입력된 email, nickname과 DAO에서 가져온 정보를 여기서 일치여부 확인
    @PostMapping("/SearchID")
    public ResponseEntity<String> searchMem_ID(@RequestBody MemberDTO memberDTO){
        logger.info("/SearchID PostMapping");

        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put("nickname", memberDTO.getNickname());
        hashMap.put("email", memberDTO.getEmail());

        try{
            String resultID = memberService.searchMem_ID(hashMap);
            logger.info("검색된 ID : " +resultID);

            return new ResponseEntity<>(resultID, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }



    // image upload test
    @PostMapping("/imagetest")
    public ResponseEntity<Boolean> testUpload(@RequestParam("images") MultipartFile images){
        logger.info("/imagetest PostMapping");

        boolean result = false;

        logger.info("image name : " +images.getOriginalFilename());
        logger.info("image size : " +images.getSize());

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // test
    @GetMapping("/test")
    public ResponseEntity<String> getTime(){
        logger.info("/test GetMapping");

        try{
            String time = memberService.getTime();
            logger.info(time);

            return new ResponseEntity<>(time, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
