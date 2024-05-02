package com.petmily.controller;

import com.petmily.dto.ImageAnalysisResult;
import com.petmily.dto.DogCharacteristics;
import com.petmily.service.BreedCharacteristicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//postman test용 코드
@RestController
@RequestMapping("/api/dog-characteristics")
public class DogCharacteristicController {

    private final BreedCharacteristicService breedCharacteristicService;

    @Autowired
    public DogCharacteristicController(BreedCharacteristicService breedCharacteristicService) {
        this.breedCharacteristicService = breedCharacteristicService;
    }

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
}

