package com.petmily.util;

import org.springframework.context.annotation.Configuration;

import org.springframework.context.annotation.Bean;

import org.springframework.context.MessageSource;
import org.springframework.context.support.ResourceBundleMessageSource;

import java.util.Locale;

@Configuration
public class TranslationConfig {
    //

    @Bean
    public MessageSource messageSource(){
        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
        messageSource.setBasename("breed");
        messageSource.setDefaultEncoding("UTF-8");

        return messageSource;
    }

    public String getTranslation(String code){
        String word = messageSource().getMessage(code, null, new Locale("ko"));

        return word;
    }
}