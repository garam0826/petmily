package com.petmily.service;

import com.petmily.dto.MemberDTO;
import com.petmily.dto.ImageDTO;

import com.petmily.dao.ImageUploadDAO;

import java.io.IOException;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.DirectoryNotEmptyException;
import java.nio.file.FileAlreadyExistsException;
import java.nio.file.NoSuchFileException;

import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Service
public class ImageUploadServiceImple implements ImageUploadService{
    // DAO Autowired
    @Autowired
    private ImageUploadDAO imageUploadDAO;

    // Logging
    private static final Logger logger = LoggerFactory.getLogger(ImageUploadServiceImple.class);

    // Upload Folder 경로 설정
    String rootPath = System.getProperty("user.dir");
    String imageDirPath = rootPath+ "\\petimage";

    // 회원 ID folder 생성
    @Override
    public boolean createMem_Dir(String mem_id) throws Exception{
        // 회원 ID Folder 경로 설정
        Path path = Paths.get(imageDirPath+ "\\" +mem_id);
        boolean result = false;

        // 설정된 경로에 Folder 생성
        try{
            Files.createDirectories(path);
            result = true;
            logger.info("folder 경로 : " +path);
            logger.info(mem_id+ " folder 생성 Service 완료");
        }catch(IOException e) {
            e.printStackTrace();
        }

        return result;
    }

    // 회원 ID folder 삭제
    @Override
    public boolean deleteMem_Dir(String mem_id) throws Exception{
        // 회원 ID Folder 경로 설정
        Path path = Paths.get(imageDirPath+ "\\" +mem_id);
        boolean result = false;

        try{
            Files.deleteIfExists(path);
            result = true;
            logger.info(mem_id+ " folder 삭제 Service 완료");
        }catch(DirectoryNotEmptyException dne) {
            logger.info(path+ " 경로에 file이 존재");
        }catch(IOException e){
            e.printStackTrace();
        }

        return result;
    }

    // test
    public String getTime() throws Exception{
        String time = imageUploadDAO.getTime();
        System.out.println("Service 완료!");

        return time;
    }
}