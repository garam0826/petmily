package com.petmily.service;

import com.petmily.dto.MemberDTO;
import com.petmily.dto.ImageDTO;

import com.petmily.dao.ImageUploadDAO;

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

    // test
    public String getTime() throws Exception{
        String time = imageUploadDAO.getTime();
        System.out.println("Service 완료!");

        return time;
    }
}