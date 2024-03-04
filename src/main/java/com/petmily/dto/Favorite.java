package com.petmily.dto;

import java.time.LocalDateTime;

public class Favorite {
    private Integer id;
    private String memId;
    private String desertionNo;
    private LocalDateTime createdAt;

    public Favorite() {}


    public Favorite(String memId, String desertionNo) {
        this.memId = memId;
        this.desertionNo = desertionNo;
        this.createdAt = LocalDateTime.now();
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMemId() {
        return memId;
    }

    public void setMemId(String memId) {
        this.memId = memId;
    }

    public String getDesertionNo() {
        return desertionNo;
    }

    public void setDesertionNo(String desertionNo) {
        this.desertionNo = desertionNo;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }


    @Override
    public String toString() {
        return "Favorite{" +
                "id=" + id +
                ", memId='" + memId + '\'' +
                ", desertionNo='" + desertionNo + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}
