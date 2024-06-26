package com.petmily.service;

import com.petmily.dto.MemberDTO;
import com.petmily.dto.ImageDTO;

import java.nio.file.Path;

import java.util.List;

public interface ImageUploadService {
    // png, jpeg로 일단 개발
    // 가입 시 폴더 생성, 탈퇴시 폴더 삭제
    // 개인 폴더에 imgae 업로드, 수정(기존 삭제 새로 추가), 삭제

    // 회원 ID folder 생성
    public boolean createMem_Dir(String mem_id) throws Exception;

    // 회원 ID folder 삭제
    public boolean deleteMem_Dir(String mem_id) throws Exception;

    // 회원 ID folder 경로 찾기
    public String findMem_Dir(String mem_id) throws Exception;

    // Image Upload
    // image 1개씩
    public String uploadImage(String uploadPath, String originalName, byte[] fileData) throws Exception;

    // Upload Image정보 조회
    // Upload Image 수정(기존 Image 중복 확인 후 추가)
    // Upload Image 삭제

    // test
    public String getTime() throws Exception;
}