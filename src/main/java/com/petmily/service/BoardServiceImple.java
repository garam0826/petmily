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
    public boolean writeBoard(BoardDTO boardDTO) throws Exception{
        boolean result = false;
        int value = boardDAO.writeBoard(boardDTO);

        if(value > 0){
            result = true;
            logger.info(boardDTO.getReg_name()+ " : " +boardDTO.getTitle()+ " 글 쓰기 Service 완료");

            return result;
        }else{
            logger.info(boardDTO.getReg_name()+ " : " +boardDTO.getTitle()+ " 글 쓰기 Service 실패");

            return result;
        }
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
        // 조회수 증가
        boardDAO.hitUpBoard(idx);
        // 내용 조회
        BoardDTO boardDTO = boardDAO.readBoard(idx);
        logger.info(boardDTO.getIdx()+ "번째 글의 내용 조회 Service 완료");

        return boardDTO;
    }

    // 글 수정
    @Override
    public boolean updateBoard(BoardDTO boardDTO) throws Exception{
        boolean result = false;
        int value = boardDAO.updateBoard(boardDTO);

        if(value > 0){
            result = true;
            logger.info(boardDTO.getIdx()+ "번째 글의 내용 수정 Service 완료");

            return result;
        }else{
            logger.info(boardDTO.getIdx()+ "번째 글의 내용 수정 Service 실패");

            return result;
        }
    }

    // 글 삭제
    @Override
    public boolean deleteBoard(int idx) throws Exception{
        boolean result = false;
        int value = boardDAO.deleteBoard(idx);

        if(value > 0){
            result = true;
            logger.info(idx+ "번 글 삭제 Service 완료");

            return result;
        }else{
            logger.info(idx+ "번 글 삭제 Service 실패");

            return result;
        }
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
    public boolean writeReplyBoard(ReplyDTO replyDTO) throws Exception{
        boolean result = false;
        int value = boardDAO.writeReplyBoard(replyDTO);

        if(value > 0){
            result = true;
            logger.info(replyDTO.getBoard_idx()+ "번 글 : " +replyDTO.getStep()+ " - " +replyDTO.getDepth()+ " 댓글 쓰기 Service 완료");

            return result;
        }else{
            logger.info(replyDTO.getBoard_idx()+ "번 글 : " +replyDTO.getStep()+ " - " +replyDTO.getDepth()+ " 댓글 쓰기 Service 실패");

            return result;
        }
    }

    // 댓글 조회
    @Override
    public List<ReplyDTO> listReplyBoard(int board_idx) throws Exception{
        List<ReplyDTO> r_List = boardDAO.listReplyBoard(board_idx);
        logger.info(board_idx+ "번 글 : " +r_List.size()+ "개의 댓글 조회 Service 완료");

        return r_List;
    }

    // 댓글 수정
    @Override
    public boolean updateReplyBoard(ReplyDTO replyDTO) throws Exception{
        boolean result = false;
        int value = boardDAO.updateReplyBoard(replyDTO);

        if(value > 0){
            result = true;
            logger.info(replyDTO.getBoard_idx()+ "번 글 : " +replyDTO.getStep()+ " - " +replyDTO.getDepth()+ " 댓글 수정 Service 완료");

            return result;
        }else{
            logger.info(replyDTO.getBoard_idx()+ "번 글 : " +replyDTO.getStep()+ " - " +replyDTO.getDepth()+ " 댓글 수정 Service 실패");

            return result;
        }
    }

    // 댓글 삭제
    @Override
    public boolean deleteReplyBoard(int reply_idx) throws Exception{
        boolean result = false;
        int value = boardDAO.deleteReplyBoard(reply_idx);

        if(value > 0){
            result = true;
            logger.info(reply_idx+ "번 댓글 삭제 Service 완료");

            return result;
        }else{
            logger.info(reply_idx+ "번 댓글 삭제 Service 실패");

            return result;
        }
    }

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