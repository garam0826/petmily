package com.petmily.controller;

import com.petmily.dto.*;
import com.petmily.service.DogSpecService;
import com.petmily.service.MemberService;
import com.petmily.service.AnimalInfoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import com.petmily.util.TranslationConfig;

@RestController
@RequestMapping("/api/animal")
public class AnimalInfoController {
    // Service Autowired
    @Autowired
    private MemberService memberService;
    @Autowired
    private AnimalInfoService animalInfoService;

    @Autowired
    private MessageSource messageSource;

    // Logging
    private static final Logger logger = LoggerFactory.getLogger(AnimalInfoController.class);

    @GetMapping("/info")
    public ResponseEntity<List<AnimalInfo>> getAnimalInfo(
            @RequestParam String startDate,
            @RequestParam String endDate,
            @RequestParam String kind,
            @RequestParam String uprCd,
            @RequestParam String orgCd) {

        List<AnimalInfo> animalInfos = animalInfoService.getAnimalInfo(startDate, endDate, kind, uprCd, orgCd);
        animalInfoService.saveAnimalInfoList(animalInfos);
        return ResponseEntity.ok(animalInfos);
    }

    @GetMapping("/analyze")
    public ResponseEntity<ImageAnalysisResult> analyzeImage(
            @RequestParam("desertionNo") String desertionNo,
            @RequestParam("popfile") String imageUrl) {

        // 데이터베이스에서 분석 결과 조회
        ImageAnalysisResult analysisResult = animalInfoService.getAnalysisResult(desertionNo);

        // 결과가 없으면 이미지 분석 수행
        if (analysisResult == null) {
            try {
                // 이미지 분석 및 결과 저장
                analysisResult = animalInfoService.analyzeAndSaveImage(desertionNo, imageUrl);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
            }
        }

        // 분석 결과를 한국어로 변환
        ImageAnalysisResult translatedResult = translateImageAnalysisResult(analysisResult);

        // 클라이언트에 결과 반환
        return ResponseEntity.ok(analysisResult);
    }

    // Helper method to translate ImageAnalysisResult
    private ImageAnalysisResult translateImageAnalysisResult(ImageAnalysisResult result) {
        String translatedClassName1 = TranslationConfig.getTranslation(messageSource, result.getClassName1());
        String translatedClassName2 = TranslationConfig.getTranslation(messageSource, result.getClassName2());
        String translatedClassName3 = TranslationConfig.getTranslation(messageSource, result.getClassName3());

        logger.info("Translation Result - ClassName1: " + translatedClassName1);
        logger.info("Translation Result - ClassName2: " + translatedClassName2);
        logger.info("Translation Result - ClassName3: " + translatedClassName3);

        result.setClassName1(translatedClassName1);
        result.setClassName2(translatedClassName2);
        result.setClassName3(translatedClassName3);
        return result;
    }

    //desertionNo에 따른 상세정보 반환
    @GetMapping("/{desertionNo}")
    public ResponseEntity<AnimalInfo> getAnimalInfoByDesertionNo(@PathVariable String desertionNo) {
        AnimalInfo animalInfo = animalInfoService.getAnimalInfoByDesertionNo(desertionNo);
        if (animalInfo != null) {
            return ResponseEntity.ok(animalInfo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/keyword")
    public ResponseEntity<List<String>> getTop5DesertionNos(@RequestBody List<String> keywords) {
        List<String> top5DesertionNos = animalInfoService.getTop5DesertionNosByKeywords(keywords);
        return ResponseEntity.ok(top5DesertionNos);
    }

    // 광역 주소 code 목록 조회
    @GetMapping("/SlctReg_code")
    public ResponseEntity<List<RegionDTO>> slctReg_code(){
        logger.info("/SlctReg_code GetMapping");

        try{
            List<RegionDTO> r_List = memberService.slctReg_code();

            return new ResponseEntity<>(r_List, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 시/군/구 주소 code 목록 검색(광역 주소 기준)
    @GetMapping("/SlctDist_code")
    public ResponseEntity<List<DistrictDTO>> slctDist_code(@RequestParam("reg_name") String reg_name){
        logger.info("/SlctDist_code GetMapping");

        try{
            List<DistrictDTO> d_List = memberService.slctDist_code(reg_name);

            return new ResponseEntity<>(d_List, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/translateKeywords")
    public ResponseEntity<List<String>> translateKeywords(@RequestBody List<String> koreanKeywords) {
        List<String> englishKeywords = animalInfoService.getEnglishKeywordsFromKorean(koreanKeywords);
        return ResponseEntity.ok(englishKeywords);
    }
    private final DogSpecService dogSpecService;

    @Autowired
    public AnimalInfoController(DogSpecService dogSpecService) {
        this.dogSpecService = dogSpecService;
    }

    @GetMapping("/calculateSpec")
    public ResponseEntity<DogSpec> calculateDogSpec(@RequestParam("desertionNo") String desertionNo) {
        DogSpec dogSpec = dogSpecService.calculateWeightedCharacteristics(desertionNo);
        return ResponseEntity.ok(dogSpec);
    }
}
