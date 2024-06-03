package com.petmily.util;

import org.springframework.context.annotation.Configuration;

import org.springframework.context.annotation.Bean;

import org.springframework.context.MessageSource;
import org.springframework.context.support.ResourceBundleMessageSource;

import java.util.Locale;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Configuration
public class TranslationConfig {
    //
    private static final Logger logger = LoggerFactory.getLogger(TranslationConfig.class);
    @Bean
    public MessageSource messageSource(){
        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
        messageSource.setBasename("breed");
        messageSource.setDefaultEncoding("UTF-8");

        return messageSource;
    }

    /*public String getTranslation(String code){
        String word = messageSource().getMessage(code, null, new Locale("ko"));

        return word;
    }*/

    public static String getTranslation(MessageSource messageSource, String code) {
        String translation = messageSource.getMessage(code, null, new Locale("ko"));
        logger.info("Translating code '{}' to '{}'", code, translation);
        return translation;
    }
}