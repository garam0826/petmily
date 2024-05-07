package com.petmily.dto;

public class RegionDTO {
    // member변수
    private String reg_code;
    private String reg_name;

    // getter/setter
    public String getReg_code() {
        return reg_code;
    }

    public void setReg_code(String reg_code) {
        this.reg_code = reg_code;
    }

    public String getReg_name() {
        return reg_name;
    }

    public void setReg_name(String reg_name) {
        this.reg_name = reg_name;
    }

    // toString()
    @Override
    public String toString() {
        return "RegionDTO{" +
                "reg_code='" + reg_code + '\'' +
                ", reg_name='" + reg_name + '\'' +
                '}';
    }

}