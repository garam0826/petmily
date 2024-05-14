package com.petmily.controller;



import com.petmily.service.RecommendService;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.multipart.MultipartFile;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.List;

import java.io.IOException;

@RestController
@RequestMapping("/recommend")
public class RecommendController {
    // Service Autowired
    @Autowired
    private RecommendService recommendService;

    // Logging
    private static final Logger logger = LoggerFactory.getLogger(RecommendController.class);

    //

    // test
    @GetMapping("/test")
    public ResponseEntity<String> getTime(){
        logger.info("/test GetMapping");

        try{
            String time = recommendService.getTime();
            logger.info(time);

            return new ResponseEntity<>(time, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}