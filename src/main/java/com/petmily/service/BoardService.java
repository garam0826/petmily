package com.petmily.service;

import com.petmily.dto.BoardDTO;
import com.petmily.dto.ReplyDTO;

import com.petmily.util.PagingCriteria;

import java.util.List;

public interface BoardService {
    // 글 쓰기
    public boolean writeBoard(BoardDTO boardDTO) throws Exception;

    // 글 목록 조회
    public List<BoardDTO> listBoard() throws Exception;

    // 글 내용 조회
    public BoardDTO readBoard(int idx) throws Exception;

    // 글 수정
    public boolean updateBoard(BoardDTO boardDTO) throws Exception;

    // 글 삭제
    public boolean deleteBoard(int idx) throws Exception;

    // 글 갯수 조회
    public int countBoard() throws Exception;

    // 댓글 쓰기
    public boolean writeReplyBoard(ReplyDTO replyDTO) throws Exception;

    // 댓글 조회
    public List<ReplyDTO> listReplyBoard(int board_idx) throws Exception;

    // 댓글 수정
    public boolean updateReplyBoard(ReplyDTO replyDTO) throws Exception;

    // 댓글 삭제
    public boolean deleteReplyBoard(int reply_idx) throws Exception;

    // 댓글 갯수 조회
    public int countReplyBoard(int board_idx) throws Exception;


    // test
    public String getTime() throws Exception;
}