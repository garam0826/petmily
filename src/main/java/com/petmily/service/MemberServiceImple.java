package com.petmily.service;

import com.petmily.dao.MemberDAO;
import com.petmily.dto.MemberDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImple implements MemberService {
    @Autowired
    private MemberDAO memberDAO;

    //회원가입
    public int insertMember(MemberDTO memberDTO)throws Exception{
        int result = memberDAO.insertMember(memberDTO);

        System.out.println("회원가입 Service");

        return result;

    }
}
