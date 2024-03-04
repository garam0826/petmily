package com.petmily.controller;

import com.petmily.dto.Favorite;
import com.petmily.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/list")
    public ResponseEntity<List<Favorite>> getFavorites(@RequestParam String memId) {
        List<Favorite> favorites = favoriteService.getFavoritesByMemberId(memId);
        return new ResponseEntity<>(favorites, HttpStatus.OK);
    }

    @DeleteMapping("/remove")
    public ResponseEntity<?> removeFavoriteByMemIdAndDesertionNo(@RequestParam String memId, @RequestParam String desertionNo) {
        favoriteService.removeFavoriteByMemIdAndDesertionNo(memId, desertionNo);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    

}

