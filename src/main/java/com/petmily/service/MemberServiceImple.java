package com.petmily.service;

import com.petmily.dao.MemberDAO;
import com.petmily.dto.MemberDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImple implements MemberService {
    // DAO Autowired
    @Autowired
    private MemberDAO memberDAO;

    // Logging
    private static final Logger logger = LoggerFactory.getLogger(MemberServiceImple.class);

    // 회원가입
    @Override
    public int insertMember(MemberDTO memberDTO) throws Exception{
        int result = memberDAO.insertMember(memberDTO);
        logger.info("회원가입 Service 완료!");

        return result;
    }

    // test
    public String getTime() throws Exception{
        String time = memberDAO.getTime();
        System.out.println("Service 완료!");

        return time;
    }
}
