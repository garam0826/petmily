package com.petmily.dto;

import java.time.LocalDateTime;

public class ReplyDTO {
    // member변수
    private int reply_idx;
    private int board_idx;
    private int step;
    private int depth;
    private String reg_name;
    private String content;
    private LocalDateTime w_date;
    private LocalDateTime u_date;

    // getter/setter
    public int getReply_idx() {
        return reply_idx;
    }

    public void setReply_idx(int reply_idx) {
        this.reply_idx = reply_idx;
    }

    public int getBoard_idx() {
        return board_idx;
    }

    public void setBoard_idx(int board_idx) {
        this.board_idx = board_idx;
    }

    public int getStep() {
        return step;
    }

    public void setStep(int step) {
        this.step = step;
    }

    public int getDepth() {
        return depth;
    }

    public void setDepth(int depth) {
        this.depth = depth;
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
        return "ReplyDTO{" +
                "reply_idx=" + reply_idx +
                ", board_idx=" + board_idx +
                ", step=" + step +
                ", depth=" + depth +
                ", reg_name='" + reg_name + '\'' +
                ", content='" + content + '\'' +
                ", w_date=" + w_date +
                ", u_date=" + u_date +
                '}';
    }

}