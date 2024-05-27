package com.petmily.util;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Bean;

import org.springframework.context.MessageSource;
import org.springframework.context.support.ResourceBundleMessageSource;

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
}