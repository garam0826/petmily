package com.petmily.service;

import com.petmily.dto.MemberDTO;

import com.petmily.dao.MemberDAO;

import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;

@Service
public class MemberServiceImple implements MemberService{
    // DAO Autowired
    @Autowired
    private MemberDAO memberDAO;

    // Logging
    private static final Logger logger = LoggerFactory.getLogger(MemberServiceImple.class);

    // 회원가입
    @Override
    public boolean insertMember(MemberDTO memberDTO) throws Exception{
        boolean result = false;
        int value = memberDAO.insertMember(memberDTO);

        if(value > 0){
            result = true;
            logger.info(memberDTO.getMem_id()+ " 회원가입 Service 완료");

            return result;
        }else{
            logger.info(memberDTO.getMem_id()+ " 회원가입 Service 실패");

            return result;
        }
    }

    // 회원 ID 중복 확인
    @Override
    public boolean checkMem_ID(String mem_id) throws Exception{
        boolean result = false;
        int value = memberDAO.checkMem_ID(mem_id);

        if(value == 0){
            result = true;
            logger.info(mem_id+ " ID 중복 확인 Service 완료");

            return result;
        }else{
            logger.info(mem_id+ " ID 중복 확인 Service 실패");

            return result;
        }
    }

    // 회원 비밀번호 조회

    //public String checkMem_PW(String mem_id) throws Exception;

    // Login
    @Override
    public MemberDTO loginMember(HashMap<String, String> hashMap) throws Exception{
        logger.info("사용자가 입력한 ID : " +hashMap.get("mem_id"));
        logger.info("사용자가 입력한 비밀번호 : " +hashMap.get("mem_pw"));
        MemberDTO memberDTO = null;

        String db_pw = memberDAO.checkMem_PW(hashMap.get("mem_id"));
        logger.info("DB에서 검색된 비밀번호 : " +db_pw);
        // SQL 결과값과 비교
        // 불일치 -> null값 return
        // 일치 -> ID값 return
        if(db_pw.equals(hashMap.get("mem_pw"))){
            logger.info("일치");
            memberDTO = memberDAO.slctMyInfo(hashMap.get("mem_id"));

            return memberDTO;
        }else{
            logger.info("불일치");

            return memberDTO;
        }
    }

    // 회원정보 조회
    @Override
    public MemberDTO slctMyInfo(String mem_id) throws Exception{
        MemberDTO memberDTO = memberDAO.slctMyInfo(mem_id);
        logger.info(memberDTO.getMem_id()+ " 조회 Service 완료");

        return memberDTO;
    }

    // 회원정보 수정
    @Override
    public boolean updateMyInfo(MemberDTO memberDTO) throws Exception{
        boolean result = false;
        int value = memberDAO.updateMyInfo(memberDTO);

        if(value > 0){
            result = true;
            logger.info(memberDTO.getMem_id()+" 정보 수정 Service 완료");

            return result;
        }else{
            logger.info(memberDTO.getMem_id()+" 정보 수정 Service 실패");

            return result;
        }
    }

    // 회원탈퇴
    @Override
    public boolean deleteMember(String mem_id) throws Exception{
        boolean result = false;
        int value = memberDAO.deleteMember(mem_id);

        if(value > 0){
            result = true;
            logger.info(mem_id+ " 회원탈퇴 Service 완료");

            return result;
        }else{
            logger.info(mem_id+ " 회원탈퇴 Service 실패");

            return result;
        }
    }

    // 회원 ID 찾기
    // ID 찾기 입력된 email과 nickname 둘 다 일치 확인
    // 입력된 email, nickname과 DAO에서 가져온 정보를 여기서 일치여부 확인
    @Override
    public String searchMem_ID(HashMap<String, String> hashMap) throws Exception{
        logger.info("사용자가 입력한 nickname : " +hashMap.get("nickname"));
        logger.info("사용자가 입력한 email : " +hashMap.get("email"));

        MemberDTO memberDTO = memberDAO.searchMem_ID(hashMap);
        String db_nickname = memberDTO.getNickname();
        String db_email = memberDTO.getEmail();
        String resultID = null;
        logger.info("DB에서 검색된 nickname : " +db_nickname);
        logger.info("DB에서 검색된 email : " +db_email);
        // SQL 결과값과 비교
        // 불일치 -> null값 return
        // 일치 -> ID값 return
        if(db_nickname.equals(hashMap.get("nickname")) && db_email.equals(hashMap.get("email"))){
            logger.info("일치");
            resultID = memberDTO.getMem_id();

            return resultID;
        }else{
            logger.info("불일치");

            return resultID;
        }
    }

    // 회원 비밀번호 찾기
    // PW 찾기 입력된 email, mem_id과 회원정보 2개 일치 확인
    public String searchMem_PW(HashMap<String, String> hashMap) throws Exception{
        logger.info("사용자가 입력한 ID : " +hashMap.get("mem_id"));
        logger.info("사용자가 입력한 email : " +hashMap.get("email"));

        MemberDTO memberDTO = memberDAO.searchMem_PW(hashMap);
        String db_ID = memberDTO.getMem_id();
        String db_email = memberDTO.getEmail();
        String resultPW = null;
        logger.info("DB에서 검색된 ID : " +db_ID);
        logger.info("DB에서 검색된 email : " +db_email);
        // SQL 결과값과 비교
        // 불일치 -> null값 return
        // 일치 -> ID값 return
        if(db_ID.equals(hashMap.get("mem_id")) && db_email.equals(hashMap.get("email"))){
            logger.info("일치");
            resultPW = memberDTO.getMem_id();

            return resultPW;
        }else{
            logger.info("불일치");

            return resultPW;
        }
    }

    // test
    public String getTime() throws Exception{;
        String time = memberDAO.getTime();
        System.out.println("Service 완료!");

        return time;
    }
}
