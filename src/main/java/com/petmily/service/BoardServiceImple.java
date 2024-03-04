package com.petmily.service;

import com.petmily.dto.BoardDTO;
import com.petmily.dto.ReplyDTO;

import com.petmily.dao.BoardDAO;

import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Service
public class BoardServiceImple implements BoardService{
    // DAO Autowired
    @Autowired
    private BoardDAO boardDAO;

    // Logging
    private static final Logger logger = LoggerFactory.getLogger(BoardServiceImple.class);

    // 글 쓰기
    @Override
    public int writeBoard(BoardDTO boardDTO) throws Exception{
        int result = boardDAO.writeBoard(boardDTO);
        logger.info("글 쓰기 Service 완료");

        return result;
    }

    // 글 목록 조회
    @Override
    public List<BoardDTO> listBoard() throws Exception{
        List<BoardDTO> b_List = boardDAO.listBoard();
        logger.info("글 목록 조회 Service 완료");

        return b_List;
    }

    // 글 내용 조회
    @Override
    public BoardDTO readBoard(int idx) throws Exception{
        BoardDTO boardDTO = boardDAO.readBoard(idx);
        logger.info("글 내용 조회 Service 완료");

        return boardDTO;
    }

    // 글 수정
    // 글 삭제
    @Override
    public int deleteBoard(int idx) throws Exception{
        int result = boardDAO.deleteBoard(idx);
        logger.info(idx+"번 글 삭제 Service 완료");

        return result;
    }


    // 글 갯수 조회
    @Override
    public int countBoard() throws Exception{
        int result = boardDAO.countBoard();
        logger.info("Service 완료 : " +result+ "개 글 조회");

        return result;
    }

    // 댓글 쓰기
    @Override
    public int writeReply(ReplyDTO replyDTO) throws Exception{
        int result = boardDAO.writeReply(replyDTO);
        logger.info("댓글 쓰기 Service 완료");

        return result;
    }

    // 댓글 조회
    @Override
    public List<ReplyDTO> listReply(int board_idx) throws Exception{
        List<ReplyDTO> r_list = boardDAO.listReply(board_idx);
        logger.info(board_idx+"번 글의 댓글 조회 Service 완료");

        return r_list;
    }

    // 댓글 수정
    // 댓글 삭제
    // 댓글 갯수 조회
    @Override
    public int countReplyBoard(int board_idx) throws Exception{
        int result = boardDAO.countReplyBoard(board_idx);
        logger.info("Service 완료 : " +board_idx+ "번 글의 " +result+ "개 댓글 조회");

        return result;
    }

    // test
    @Override
    public String getTime() throws Exception{
        String time = boardDAO.getTime();
        System.out.println("Service 완료!");

        return time;
    }
}