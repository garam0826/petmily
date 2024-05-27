package com.petmily.controller;

import com.petmily.dto.MemberDTO;
import com.petmily.dto.RegionDTO;
import com.petmily.dto.DistrictDTO;

import com.petmily.service.MemberService;
import com.petmily.service.ImageUploadService;

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

import java.io.IOException;

@RestController
@RequestMapping("/member")
public class MemberController {
    // Service Autowired
    @Autowired
    private MemberService memberService;
    @Autowired
    private ImageUploadService imageUploadService;
    @Autowired
    private RecommendService recommendService;

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
                // Characteristics에 회원 ID 추가
                recommendService.insertChar(memberDTO.getMem_id());
                // 강아지 특성값 저장할 table 회원 ID 추가 -> 0으로 초기화, 수정 날짜 column 포함

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

    // 광역 주소 목록 조회
    @GetMapping("/SignUp")
    public ResponseEntity<List<RegionDTO>> listRegion(){
        logger.info("/SignUp GetMapping");

        try{
            List<RegionDTO> r_List = memberService.listRegion();

            return new ResponseEntity<>(r_List, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 시/군/구 주소 목록 검색(광역 주소 기준)
    @GetMapping("/SearchDistrict")
    public ResponseEntity<List<DistrictDTO>> searchDistrict(@RequestParam("reg_name") String reg_name){
        logger.info("/SearchDistrict GetMapping");

        try{
            List<DistrictDTO> d_List = memberService.searchDistrict(reg_name);

            return new ResponseEntity<>(d_List, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    // 회원 ID 중복 확인
    @GetMapping("/CheckID")
    public ResponseEntity<Boolean> checkMem_ID(@RequestParam String mem_id){
        logger.info("/CheckID GetMapping");

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
    @PostMapping("/Login")
    public ResponseEntity<MemberDTO> login(@RequestBody MemberDTO memberDTO){
        logger.info("/Login PostMapping");

        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put("mem_id", memberDTO.getMem_id());
        hashMap.put("mem_pw", memberDTO.getMem_pw());

        try{
            MemberDTO loginInfo = memberService.loginMember(hashMap);
            logger.info("Login 완료 : " +loginInfo.getMem_id());

            // Login정보 축소 여부, 추가 내가 쓴 글, 댓글 찾는 SQL service 작성

            return new ResponseEntity<>(loginInfo, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 회원정보 조회
    @GetMapping("/MyPage")
    public ResponseEntity<MemberDTO> slctMyInfo(@RequestParam String mem_id){
        logger.info("/MyPage GetMapping");

        try{
            MemberDTO memberDTO = memberService.slctMyInfo(mem_id);

            return new ResponseEntity<>(memberDTO, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 회원정보 수정
    @PutMapping("/MyPage/Update")
    public ResponseEntity<Boolean> updateMyInfo(@RequestBody MemberDTO memberDTO){
        logger.info("/MyPage/Update PutMapping");

        try{
            boolean result = memberService.updateMyInfo(memberDTO);

            if(result){
                //

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
                // Characteristics에서 회원 ID 삭제
                recommendService.deleteChar(memberDTO.getMem_id());

                return new ResponseEntity<>(result, HttpStatus.OK);
            }else{
                logger.info(memberDTO.getMem_id()+ " : 회원 탈퇴 실패");

                return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
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

    // 회원 비밀번호 찾기
    @PostMapping("/SearchPW")
    public ResponseEntity<String> searchMem_PW(@RequestBody MemberDTO memberDTO){
        logger.info("/SearchPW PostMapping");

        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put("mem_id", memberDTO.getMem_id());
        hashMap.put("email", memberDTO.getEmail());

        try{
            String resultPW = memberService.searchMem_PW(hashMap);
            logger.info("검색된 ID : " +memberDTO.getMem_id());
            logger.info("검색된 PW : " +resultPW);

            return new ResponseEntity<>(resultPW, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 회원별 강아지 Image Upload
    @PostMapping("/PetImg")
    public ResponseEntity<Boolean> uploadPetImg(@RequestParam("") MultipartFile images, @RequestParam String mem_id){
        logger.info("/PetImg PostMapping");
        boolean result = false;

        logger.info("upload 요청 회원 ID : " +mem_id);
        logger.info("image file name : " +images.getOriginalFilename());
        logger.info("image file size : " +images.getSize());

        try{
            String path = imageUploadService.findMem_Dir(mem_id);
            String name = imageUploadService.uploadImage(path, images.getOriginalFilename(), images.getBytes());
            result = true;
        }catch(IOException e){
            e.printStackTrace();
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // image upload test
    @PostMapping("/imagetest")
    public ResponseEntity<Boolean> testUpload(@RequestParam("images") MultipartFile images, @RequestParam String mem_id){
        logger.info("/imagetest PostMapping");

        boolean result = false;

        try{
            String path = imageUploadService.findMem_Dir(mem_id);
            String name = imageUploadService.uploadImage(path, images.getOriginalFilename(), images.getBytes());
            result = true;

            logger.info("upload ID : " +mem_id);
            logger.info("image name : " +images.getOriginalFilename());
            logger.info("image size : " +images.getSize());

            return new ResponseEntity<>(result, HttpStatus.OK);
        }catch(IOException e){
            e.printStackTrace();

            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
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

    // 광역 주소 test1
    @GetMapping("/test2")
    public ResponseEntity<List<RegionDTO>> slctReg_code(){
        logger.info("/test2 GetMapping");

        try{
            List<RegionDTO> r_List = memberService.slctReg_code();

            return new ResponseEntity<>(r_List, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 시/군/구 주소 test2
    @GetMapping("/test3")
    public ResponseEntity<List<DistrictDTO>> slctDist_code(@RequestParam("reg_name") String reg_name){
        logger.info("/test3 GetMapping");

        try{
            List<DistrictDTO> d_List = memberService.slctDist_code(reg_name);

            return new ResponseEntity<>(d_List, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
