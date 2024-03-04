package com.petmily.controller;

import com.petmily.dto.MemberDTO;

import com.petmily.service.MemberService;

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

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/member")
public class MemberController {
    // Service Autowired
    @Autowired
    private MemberService memberService;

    // Logging
    private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

    // 회원가입
    @PostMapping("/SignUp")
    public ResponseEntity<Integer> insertMember(@RequestBody MemberDTO memberDTO){
        logger.info("/SignUp PostMapping");

        try{
            int result = memberService.insertMember(memberDTO);

            if(result > 0){
                logger.info("회원가입 성공");

                // 회원 ID folder 추가

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

    // 회원탈퇴
    @DeleteMapping("/Mypage/Resign")
    public ResponseEntity<Boolean> deleteMember(@RequestBody MemberDTO memberDTO){
        logger.info("/resign DeleteMapping");

        try{
            boolean result = memberService.deleteMember(memberDTO.getMem_id());

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
