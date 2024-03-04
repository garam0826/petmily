package com.petmily.dto;

import java.time.LocalDateTime;

public class BoardDTO {
    // member변수
    private int idx;
    private String title;
    private String reg_name;
    private String content;
    private int hit;
    private LocalDateTime w_date;
    private LocalDateTime u_date;

    // getter/setter
    public int getIdx() {
        return idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getReg_name() {
        return reg_name;
    }

    public void setReg_name(String reg_name) {
        this.reg_name = reg_name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getHit() {
        return hit;
    }

    public void setHit(int hit) {
        this.hit = hit;
    }

    public LocalDateTime getW_date() {
        return w_date;
    }

    public void setW_date(LocalDateTime w_date) {
        this.w_date = w_date;
    }

    public LocalDateTime getU_date() {
        return u_date;
    }

    public void setU_date(LocalDateTime u_date) {
        this.u_date = u_date;
    }

    // toString()
    @Override
    public String toString() {
        return "BoardDTO{" +
                "idx=" + idx +
                ", title='" + title + '\'' +
                ", reg_name='" + reg_name + '\'' +
                ", content='" + content + '\'' +
                ", hit=" + hit +
                ", w_date=" + w_date +
                ", u_date=" + u_date +
                '}';
    }

}