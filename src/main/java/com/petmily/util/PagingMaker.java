package com.petmily.util;

import org.springframework.stereotype.Component;

import org.springframework.web.util.UriBuilder;
import org.springframework.web.util.UriComponents;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.web.util.UriComponentsBuilder;

@Component
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PagingMaker {
    // member변수
    private int totalCnt;
    private int startPage;
    private int endPage;
    private int displayPageNum = 10;
    private boolean prev;
    private boolean next;
    private PagingCriteria p_Cri;

    // getter/setter
    public void setP_Cri(PagingCriteria p_Cri){
        this.p_Cri = p_Cri;
    }

    public void setTotalCnt(int totalCnt){
        this.totalCnt = totalCnt;

        calcData();
    }

    @JsonProperty
    public int getTotalCnt(){
        return totalCnt;
    }

    @JsonProperty
    public int getStartPage(){
        return startPage;
    }

    @JsonProperty
    public int getEndPage(){
        return endPage;
    }

    @JsonProperty
    public int getDisplayPageNum(){
        return displayPageNum;
    }

    @JsonProperty
    public boolean isPrev(){
        return prev;
    }

    @JsonProperty
    public boolean isNext(){
        return next;
    }

    @JsonProperty
    public PagingCriteria getP_Cri(){
        return p_Cri;
    }

    // member method
    private void calcData(){
        endPage = (int)(Math.ceil(p_Cri.getPage() / (double)displayPageNum) * displayPageNum);
        startPage = (endPage - displayPageNum) + 1;
        int tempEndPage = (int)(Math.ceil(totalCnt / (double)p_Cri.getPerPageNum()));

        if(endPage > tempEndPage){
            endPage = tempEndPage;
        }

        prev = (startPage == 1) ? false : true;
        next = ((endPage * p_Cri.getPerPageNum()) >= totalCnt) ? false : true;
    }

    public String makeQuery(int page){
        UriComponents uriComponents = UriComponentsBuilder.newInstance()
                .queryParam("page", page)
                .queryParam("perPageNum", p_Cri.getPerPageNum())
                .build();

        return uriComponents.toUriString();
    }

    // toString()
    @Override
    public String toString() {
        return "PagingMaker{" +
                "totalCnt=" + totalCnt +
                ", startPage=" + startPage +
                ", endPage=" + endPage +
                ", displayPageNum=" + displayPageNum +
                ", prev=" + prev +
                ", next=" + next +
                ", p_Cri=" + p_Cri +
                '}';
    }

}