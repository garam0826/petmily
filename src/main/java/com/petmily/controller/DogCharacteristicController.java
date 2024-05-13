package com.petmily.controller;

import com.petmily.dto.ImageAnalysisResult;
import com.petmily.dto.DogCharacteristics;
import com.petmily.service.BreedCharacteristicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/member/profile/recommend")
public class DogCharacteristicController {

    private final BreedCharacteristicService breedCharacteristicService;

    @Autowired
    public DogCharacteristicController(BreedCharacteristicService breedCharacteristicService) {
        this.breedCharacteristicService = breedCharacteristicService;
    }

    //postman test용 코드, 실제 사용 x
    @PostMapping("/calculate")
    public ResponseEntity<DogCharacteristics> calculateCharacteristics(@RequestBody ImageAnalysisResult analysisResult) {
        try {
            DogCharacteristics dogCharacteristics = breedCharacteristicService.calculateAndSaveCharacteristics(analysisResult);
            return ResponseEntity.ok(dogCharacteristics);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

    //가장 오차가 적은, 가장 유사한 desertionNo 반환
    @GetMapping("/{userId}")
    public ResponseEntity<List<DogCharacteristics>> getBestMatches(@PathVariable String userId) {
        try {
            List<DogCharacteristics> matches = breedCharacteristicService.findBestMatchesForUser(userId);
            return ResponseEntity.ok(matches);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}

