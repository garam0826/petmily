package com.petmily.controller;

import com.petmily.service.MemberImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/member/images")
public class MemberImageController {

    @Autowired
    private MemberImageService memberImageService;

    // 멤버 ID로 첫 번째 이미지 분석
    @GetMapping("/analyze/{mem_id}")
    public ResponseEntity<?> analyzeFirstImage(@PathVariable String mem_id) {
        try {
            String result = memberImageService.analyzeFirstImageInFolder(mem_id);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error analyzing image: " + e.getMessage());
        }
    }

    @GetMapping("/{mem_id}")
    public ResponseEntity<?> userImageUrl(@PathVariable String mem_id) {
        try {
            String url = memberImageService.userImageUrl(mem_id);
            return ResponseEntity.ok(url);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error analyzing image: " + e.getMessage());
        }
    }

}
