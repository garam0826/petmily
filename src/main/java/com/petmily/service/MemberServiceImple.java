package com.petmily.service;

import com.petmily.dto.MemberDTO;

import com.petmily.dao.MemberDAO;

import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class MemberServiceImple implements MemberService{
    // DAO Autowired
    @Autowired
    private MemberDAO memberDAO;

    // Logging
    private static final Logger logger = LoggerFactory.getLogger(MemberServiceImple.class);

    // 회원가입
    @Override
    public int insertMember(MemberDTO memberDTO) throws Exception{
        int result = memberDAO.insertMember(memberDTO);
        logger.info("회원가입 Service 완료");

        return result;
    }

    // 회원 ID 중복 확인
    @Override
    public boolean checkMem_ID(String mem_id) throws Exception{
        boolean result = false;
        int value = memberDAO.checkMem_ID(mem_id);

        if(value == 0){
            logger.info(mem_id+ " ID 중복 확인 Service 완료");

            return result = true;
        }else{
            logger.info(mem_id+ " ID 중복 확인 Service 완료");

            return result = false;
        }
    }

    // 회원 비밀번호 조회

    //public String checkMem_PW(String mem_id) throws Exception;

    // 회원정보 조회
    @Override
    public MemberDTO slctMyInfo(String mem_id) throws Exception{
        MemberDTO memberDTO = memberDAO.slctMyInfo(mem_id);
        logger.info(memberDTO.getMem_id()+ " 조회 Service 완료");

        return memberDTO;
    }

    // 회원정보 수정

    // 회원탈퇴
    @Override
    public boolean deleteMember(String mem_id) throws Exception{
        boolean result = false;
        int value = memberDAO.deleteMember(mem_id);

        if(value > 0){
            logger.info(mem_id+ " 회원탈퇴 Service 완료");

            return result = true;
        }else{
            logger.info(mem_id+ " 회원탈퇴 Service 완료");

            return result = false;
        }

    }


    // test
    public String getTime() throws Exception{
        String time = memberDAO.getTime();
        System.out.println("Service 완료!");

        return time;
    }
}
