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


    // test
    public String getTime() throws Exception{
        String time = memberDAO.getTime();
        System.out.println("Service 완료!");

        return time;
    }
}
