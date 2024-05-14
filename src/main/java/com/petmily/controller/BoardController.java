package com.petmily.controller;

import com.petmily.dto.BoardDTO;
import com.petmily.dto.ReplyDTO;

import com.petmily.service.BoardService;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/board")
public class BoardController {
    // Service Autowired
    @Autowired
    private BoardService boardService;

    // Logging
    private static final Logger logger = LoggerFactory.getLogger(BoardController.class);

    // 글 쓰기
    @PostMapping("/WriteBoard")
    public ResponseEntity<Integer> writeBoard(@RequestBody BoardDTO boardDTO){
        logger.info("/WriteBoard PostMapping");

        try{
            int result = boardService.writeBoard(boardDTO);

            if(result > 0){
                logger.info("글 쓰기 성공");

                return new ResponseEntity<>(result, HttpStatus.OK);
            }else{
                logger.info("글 쓰기 실패");

                return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 글 목록 조회
    @GetMapping("/List")
    public ResponseEntity<List<BoardDTO>> listBoard(){
        logger.info("/List GetMapping");
        // paging 글 갯수 추가

        try{
            List<BoardDTO> b_List = boardService.listBoard();
            int count = boardService.countBoard();

            return new ResponseEntity<>(b_List, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 글 내용 조회
    @GetMapping("/Content")
    public ResponseEntity<BoardDTO> readBoard(int idx) throws Exception{
        logger.info("/Content GetMapping");
        // 조회수 증가

        try{
            BoardDTO boardDTO = boardService.readBoard(idx);

            return new ResponseEntity<>(boardDTO, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // 글 수정
    @PutMapping("/Update")
    public ResponseEntity<Boolean> updateBoard(@RequestBody BoardDTO boardDTO){
        logger.info("/Update PutMapping");

        try{
            int value = boardService.updateBoard(boardDTO);
            boolean result = false;

            if(result){
                logger.info("");

                return new ResponseEntity<>(result, HttpStatus.OK);
            }else{
                logger.info("");

                return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 글 삭제

    // 댓글 쓰기
    @PostMapping("/WriteReply")
    public ResponseEntity<Integer> writeReply(@RequestBody ReplyDTO replyDTO){
        logger.info("/WriteReply PostMapping");

        try{
            int result = boardService.writeReply(replyDTO);

            if(result > 0){
                logger.info("댓글 쓰기 성공");

                return new ResponseEntity<>(result, HttpStatus.OK);
            }else{
                logger.info("댓글 쓰기 실패");

                return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 댓글 조회
    // 댓글 수정
    // 댓글 삭제
    // 댓글 갯수 조회

    // test
    @GetMapping("/test")
    public ResponseEntity<String> getTime(){
        logger.info("/test GetMapping");

        try{
            String time = boardService.getTime();
            logger.info(time);

            return new ResponseEntity<>(time, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}