package com.petmily.service;

import com.petmily.dto.MemberDTO;
import com.petmily.dto.RegionDTO;
import com.petmily.dto.DistrictDTO;
import com.petmily.dto.MailDTO;

import com.petmily.dao.MemberDAO;

import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.List;

@Service
public class MemberServiceImple implements MemberService{
    // DAO Autowired
    @Autowired
    private MemberDAO memberDAO;

    // Logging
    private static final Logger logger = LoggerFactory.getLogger(MemberServiceImple.class);

    // Java Mail 설정
    @Autowired
    private JavaMailSender javaMailSender;

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

    // 광역 주소 목록 조회
    @Override
    public List<RegionDTO> listRegion() throws Exception{
        List<RegionDTO> r_List = memberDAO.listRegion();

        return r_List;
    }

    // 시/군/구 주소 목록 검색(광역 주소 기준)
    @Override
    public List<DistrictDTO> searchDistrict(String reg_name) throws Exception{
        List<DistrictDTO> d_List = memberDAO.searchDistrict(reg_name);

        return d_List;
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
        // 새 비밀번호 생성
        // 입력된 email 주소로 새 비밀번호 발송
        if(db_ID.equals(hashMap.get("mem_id")) && db_email.equals(hashMap.get("email"))){
            logger.info("일치");
            /*
            // 임시 비밀번호 설정
            String tempMem_PW = setTempMem_PW();
            logger.info("임시 비밀번호 생성 : " +tempMem_PW);

            // 임시 비밀번호로 회원 비밀번호 수정
            memberDTO.setMem_pw(tempMem_PW);

            HashMap<String, String> tempMap = new HashMap<>();

            tempMap.put("mem_id", memberDTO.getMem_id());
            tempMap.put("tempmem_pw", tempMem_PW);

            memberDAO.updateTempMem_PW(tempMap);
            logger.info("DB 수정 후 : " +memberDTO.getMem_pw());

            // 회원 email로 임시 비밀번호 발송
            //MailDTO mailDTO = new MailDTO();
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");

            messageHelper.setTo(memberDTO.getEmail());
            messageHelper.setSubject("Petmily 임시 비밀번호 안내 Email입니다.");
            messageHelper.setText("안녕하세요~ Petmily 임시 비밀번호 안내입니다.\n" +memberDTO.getMem_id()+ "님의 임시 비밀번호 : " +tempMem_PW+ " 입니다.\n 다시 Login 후 비밀번호를 변경해주세요!");

            javaMailSender.send(message);
*/
            resultPW = memberDTO.getMem_pw();

            return resultPW;
        }else{
            logger.info("불일치");

            return resultPW;
        }
    }

    // 임시 회원 비밀번호 생성
    public String setTempMem_PW() throws Exception{
        char[] charSet = new char[]{
                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                'U', 'V', 'W', 'X', 'Y', 'Z'};
        StringBuilder tempPW = new StringBuilder();

        for(int i = 0; i < 10; i++){
            int idx = (int) (charSet.length * Math.random());
            tempPW.append(charSet[idx]);
        }

        return tempPW.toString();
    }

    // 광역 주소 code 목록 조회
    @Override
    public List<RegionDTO> slctReg_code() throws Exception{
        List<RegionDTO> r_List = memberDAO.slctReg_code();

        return r_List;
    }

    // 시/군/구 주소 code 목록 검색(광역 주소 기준)
    public List<DistrictDTO> slctDist_code(String reg_name) throws Exception{
        List<DistrictDTO> d_List = memberDAO.slctDist_code(reg_name);

        return d_List;
    }

    // test
    public String getTime() throws Exception{;
        String time = memberDAO.getTime();
        System.out.println("Service 완료!");

        return time;
    }
}
