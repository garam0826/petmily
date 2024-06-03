package com.petmily.util;

import org.springframework.http.MediaType;

import java.util.Map;
import java.util.HashMap;

public class ImageMediaType{
    private static Map<String, MediaType> imgMediaMap;

    static{
        imgMediaMap = new HashMap<String, MediaType>();

        imgMediaMap.put("JPG", MediaType.IMAGE_JPEG);
        imgMediaMap.put("PNG", MediaType.IMAGE_PNG);
        imgMediaMap.put("GIF", MediaType.IMAGE_GIF);
    }

    public static MediaType getMediaType(String type){
        return imgMediaMap.get(type.toUpperCase());
    }

    // paging 처리
    // 썸네일 보기, 삭제
    // 강아지 정보(animail info) 페이지 댓글 -> 글 idx, des_number, 내용, 글쓴이, 작성 날짜
    //
}