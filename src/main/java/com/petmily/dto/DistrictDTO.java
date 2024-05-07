package com.petmily.dto;

public class DistrictDTO {
    // member변수
    private String dist_code;
    private String reg_code;
    private String reg_name;
    private String dist_name;


    // getter/setter
    public String getDist_code() {
        return dist_code;
    }

    public void setDist_code(String dist_code) {
        this.dist_code = dist_code;
    }

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

    public String getDist_name() {
        return dist_name;
    }

    public void setDist_name(String dist_name) {
        this.dist_name = dist_name;
    }

    // toString()
    @Override
    public String toString() {
        return "DistrictDTO{" +
                "dist_code='" + dist_code + '\'' +
                ", reg_code='" + reg_code + '\'' +
                ", reg_name='" + reg_name + '\'' +
                ", dist_name='" + dist_name + '\'' +
                '}';
    }

}