package com.petmily.dao;

import com.petmily.dto.BoardDTO;
import com.petmily.dto.ReplyDTO;

import java.util.List;

public interface BoardDAO {
    // 글 쓰기
    public int writeBoard(BoardDTO boardDTO) throws Exception;

    // 글 목록 조회
    public List<BoardDTO> listBoard() throws Exception;

    // 글 내용 조회
    public BoardDTO readBoard(int idx) throws Exception;

    // 글 수정
    // 글 삭제
    public int deleteBoard(int idx) throws Exception;

    // 글 갯수 조회
    public int countBoard() throws Exception;

    // 글 조회수 증가

    // 댓글 쓰기
    public int writeReply(ReplyDTO replyDTO) throws Exception;

    // 댓글 조회
    public List<ReplyDTO> listReply(int board_idx) throws Exception;

    // 댓글 수정

    // 댓글 삭제
    // 댓글 갯수 조회
    public int countReplyBoard(int board_idx) throws Exception;

    // test
    public String getTime() throws Exception;
}