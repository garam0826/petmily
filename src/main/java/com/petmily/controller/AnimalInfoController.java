package com.petmily.controller;

import com.petmily.dto.AnimalInfo;
import com.petmily.dto.DistrictDTO;
import com.petmily.dto.ImageAnalysisResult;
import com.petmily.dto.RegionDTO;
import com.petmily.service.MemberService;
import com.petmily.service.AnimalInfoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/animal")
public class AnimalInfoController {
    // Service Autowired
    @Autowired
    private MemberService memberService;
    @Autowired
    private AnimalInfoService animalInfoService;

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

        // 클라이언트에 결과 반환
        return ResponseEntity.ok(analysisResult);
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
}
