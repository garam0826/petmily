package com.petmily.controller;

import com.petmily.dto.MemberDTO;
import com.petmily.service.MemberService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
