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
}