package com.petmily.controller;

import com.petmily.dto.UserCharacteristics;
import com.petmily.service.UserCharacteristicsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/member/profile")
public class UserCharacteristicsController {

    @Autowired
    private UserCharacteristicsService userCharacteristicsService;

    @PostMapping("/save")
    public ResponseEntity<String> saveUserCharacteristics(@RequestBody UserCharacteristics userCharacteristics) {
        try {
            userCharacteristicsService.saveUserCharacteristics(userCharacteristics);
            return ResponseEntity.ok("User characteristics saved successfully.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Failed to save user characteristics.");
        }
    }
}


