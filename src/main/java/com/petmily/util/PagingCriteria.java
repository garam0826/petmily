package com.petmily.util;

import org.springframework.stereotype.Component;

@Component
public class PagingCriteria {
    // member변수
    private int page;
    private int perPageNum;

    // constructor
    public PagingCriteria(){
        this.page = 1;
        this.perPageNum = 10;
    }

    // getter/setter
    public void setPage(int page){
        if(page <= 0){
            this.page = 1;

            return;
        }

        this.page = page;
    }

    public void setPerPageNum(int perPageNum){
        if(perPageNum <= 0 || perPageNum > 100){
            this.perPageNum = 10;

            return;
        }

        this.perPageNum = perPageNum;
    }

    public int getPage(){
        return page;
    }

    public int getPerPageNum(){
        return this.perPageNum;
    }

    // member method
    public int getPageStart(){
        return (this.page - 1) * perPageNum;
    }

    // toString()
    @Override
    public String toString() {
        return "PagingCriteria{" +
                "page=" + page +
                ", perPageNum=" + perPageNum +
                '}';
    }

}