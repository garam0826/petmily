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
    public ResponseEntity<Boolean> writeBoard(@RequestBody BoardDTO boardDTO){
        logger.info("/WriteBoard PostMapping");

        try{
            boolean result = boardService.writeBoard(boardDTO);

            if(result){
                logger.info("글 쓰기 완료");

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
    @GetMapping("/ListBoard")
    public ResponseEntity<List<BoardDTO>> listBoard(){
        logger.info("/ListBoard GetMapping");
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
    public ResponseEntity<BoardDTO> readBoard(@RequestParam int idx) throws Exception{
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
    @PutMapping("/UpdateBoard")
    public ResponseEntity<Boolean> updateBoard(@RequestBody BoardDTO boardDTO){
        logger.info("/UpdateBoard PutMapping");

        try{
            boolean result = boardService.updateBoard(boardDTO);

            if(result){
                logger.info(boardDTO.getIdx()+ "번 : " +boardDTO.getTitle()+ " 글 수정 완료");

                return new ResponseEntity<>(result, HttpStatus.OK);
            }else{
                logger.info(boardDTO.getIdx()+ "번 : " +boardDTO.getTitle()+ " 글 수정 실패");

                return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 글 삭제
    @DeleteMapping("/DeleteBoard")
    public ResponseEntity<Boolean> deleteBoard(@RequestParam int idx) throws Exception{
        logger.info("/DeleteBoard DeleteMapping");

        try{
            boolean result = boardService.deleteBoard(idx);

            if(result){
                logger.info(idx+ "번 글 : 삭제 성공");

                return new ResponseEntity<>(result, HttpStatus.OK);
            }else{
                logger.info(idx+ "번 글 : 삭제 실패");

                return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }catch(Exception e){
            e.printStackTrace();

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 댓글 쓰기
    @PostMapping("/WriteReply")
    public ResponseEntity<Boolean> writeReply(@RequestBody ReplyDTO replyDTO){
        logger.info("/WriteReply PostMapping");

        try{
            boolean result = boardService.writeReply(replyDTO);

            if(result){
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

    // 댓글 삭제(게시판 원글 지울 때 삭제)

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