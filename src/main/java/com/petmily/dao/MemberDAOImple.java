package com.petmily.dao;

import com.petmily.dto.MemberDTO;
import com.petmily.dto.RegionDTO;
import com.petmily.dto.DistrictDTO;

import org.apache.ibatis.session.SqlSession;

import org.springframework.stereotype.Repository;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;

@Repository
public class MemberDAOImple implements MemberDAO {
    // SQL Session Autowired
    @Autowired
    private SqlSession sqlSession;

    // Mapper namespace 지정
    private static String namespace = "com.petmily.mappers.MemberMapper";

    // 회원가입
    @Override
    public int insertMember(MemberDTO memberDTO) throws Exception{
        int result = sqlSession.insert(namespace+ ".insertMember", memberDTO);

        return result;
    }

    // 회원 ID 중복 확인
    @Override
    public int checkMem_ID(String mem_id) throws Exception{
        int result = sqlSession.selectOne(namespace+ ".checkMem_ID", mem_id);

        return result;
    }

    // 광역 주소 목록 조회
    @Override
    public List<RegionDTO> listRegion() throws Exception{
        List<RegionDTO> r_List = sqlSession.selectList(namespace+ ".listRegion");

        return r_List;
    }

    // 시/군/구 주소 목록 검색(광역 주소 기준)
    public List<DistrictDTO> searchDistrict(String reg_name) throws Exception{
        List<DistrictDTO> d_List = sqlSession.selectList(namespace+ ".searchDistrict", reg_name);

        return d_List;
    }

    // 회원 비밀번호 조회
    @Override
    public String checkMem_PW(String mem_id) throws Exception{
        String result = sqlSession.selectOne(namespace+ ".checkMem_PW", mem_id);

        return result;
    }

    // 회원정보 조회
    @Override
    public MemberDTO slctMyInfo(String mem_id) throws Exception{
        MemberDTO memberDTO = sqlSession.selectOne(namespace+ ".slctMyInfo", mem_id);

        return memberDTO;
    }

    // 회원정보 수정
    @Override
    public int updateMyInfo(MemberDTO memberDTO) throws Exception{
        int result = sqlSession.update(namespace+ ".updateMyInfo", memberDTO);

        return result;
    }

    // 회원탈퇴
    @Override
    public int deleteMember(String mem_id) throws Exception{
        int result = sqlSession.delete(namespace+ ".deleteMember", mem_id);

        return result;
    }

    // 회원 ID 찾기
    @Override
    public MemberDTO searchMem_ID(HashMap<String, String> hashMap) throws Exception{
        MemberDTO memberDTO = sqlSession.selectOne(namespace+ ".searchMem_ID", hashMap);

        return memberDTO;
    }

    // 회원 비밀번호 찾기
    @Override
    public MemberDTO searchMem_PW(HashMap<String, String> hashMap) throws Exception{
        MemberDTO memberDTO = sqlSession.selectOne(namespace+ ".searchMem_PW", hashMap);

        return memberDTO;
    }

    // 광역 주소 code 목록 조회
    @Override
    public List<RegionDTO> slctReg_code() throws Exception{
        List<RegionDTO> r_List = sqlSession.selectList(namespace+ ".slctReg_code");

        return r_List;
    }

    // 시/군/구 주소 code 목록 검색(광역 주소 기준)
    @Override
    public List<DistrictDTO> slctDist_code(String reg_name) throws Exception{
        List<DistrictDTO> d_List = sqlSession.selectList(namespace+ ".slctDist_code", reg_name);

        return d_List;
    }

    // test
    @Override
    public String getTime() throws Exception{
        String time = sqlSession.selectOne(namespace+ ".getTime");
        System.out.println("DAO 완료!");

        return time;
    }
}
