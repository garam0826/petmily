package com.petmily.dto;

import java.time.LocalDateTime;

public class MemberDTO {
    // member변수
    private String mem_id;
    private String mem_pw;
    private String nickname;
    private String email;
    private String region;
    private String county_district;
    private LocalDateTime reg_date;
    private LocalDateTime edit_date;

    // getter/setter
    public String getMem_id() {
        return mem_id;
    }

    public void setMem_id(String mem_id) {
        this.mem_id = mem_id;
    }

    public String getMem_pw() {
        return mem_pw;
    }

    public void setMem_pw(String mem_pw) {
        this.mem_pw = mem_pw;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getCounty_district() {
        return county_district;
    }

    public void setCountry_district(String country_district) {
        this.county_district = county_district;
    }

    public LocalDateTime getReg_date() {
        return reg_date;
    }

    public void setReg_date(LocalDateTime reg_date) {
        this.reg_date = reg_date;
    }

    public LocalDateTime getEdit_date() {
        return edit_date;
    }

    public void setEdit_date(LocalDateTime edit_date) {
        this.edit_date = edit_date;
    }

    // toString()
    @Override
    public String toString() {
        return "MemberDTO{" +
                "mem_id='" + mem_id + '\'' +
                ", mem_pw='" + mem_pw + '\'' +
                ", nickname='" + nickname + '\'' +
                ", email='" + email + '\'' +
                ", region='" + region + '\'' +
                ", county_district='" + county_district + '\'' +
                ", reg_date=" + reg_date +
                ", edit_date=" + edit_date +
                '}';
    }

}
