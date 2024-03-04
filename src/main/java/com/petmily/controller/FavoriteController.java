package com.petmily.controller;

import com.petmily.dto.Favorite;
import com.petmily.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/favorites")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    // 찜하기 기능
    @PostMapping("/add")
    public ResponseEntity<?> addFavorite(@RequestParam String memId, @RequestParam String desertionNo) {
        try {
            favoriteService.addFavorite(memId, desertionNo);
            return ResponseEntity.ok().body("Favorite added successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error adding favorite: " + e.getMessage());
        }
    }

    // 나의 찜 목록 가져오기
    // @GetMapping("/{memId}") , 구현예정

    //찜 삭제도 구현 예정
    

}

