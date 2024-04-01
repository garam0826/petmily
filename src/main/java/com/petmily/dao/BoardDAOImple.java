package com.petmily.dao;

import com.petmily.dto.BoardDTO;
import com.petmily.dto.ReplyDTO;

import org.apache.ibatis.session.SqlSession;

import org.springframework.stereotype.Repository;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Repository
public class BoardDAOImple implements BoardDAO{
    // SQL Session Autowired
    @Autowired
    private SqlSession sqlSession;

    // Mapper namespace 지정
    private static String namespace = "com.petmily.mappers.BoardMapper";

    // 글 쓰기
    @Override
    public int writeBoard(BoardDTO boardDTO) throws Exception{
        int result = sqlSession.insert(namespace+ ".writeBoard", boardDTO);

        return result;
    }

    // 글 목록 조회
    @Override
    public List<BoardDTO> listBoard() throws Exception{
        List<BoardDTO> b_List = sqlSession.selectList(namespace+ ".listBoard");

        return b_List;
    }

    // 글 내용 조회
    @Override
    public BoardDTO readBoard(int idx) throws Exception{
        BoardDTO boardDTO = sqlSession.selectOne(namespace+ ".readBoard", idx);

        return boardDTO;
    }

    // 글 조회수 증가
    @Override
    public int hitUpBoard(int idx) throws Exception{
        int result = sqlSession.update(namespace+ ".hitUpBoard", idx);

        return result;
    }

    // 글 수정
    @Override
    public int updateBoard(BoardDTO boardDTO) throws Exception{
        int result = sqlSession.update(namespace+ ".updateBoard", boardDTO);

        return result;
    }

    // 글 삭제
    public int deleteBoard(int idx) throws Exception{
        int result = sqlSession.delete(namespace+ ".deleteBoard", idx);

        return result;
    }

    // 글 갯수 조회
    @Override
    public int countBoard() throws Exception{
        int result = sqlSession.selectOne(namespace+ ".countBoard");

        return result;
    }

    // 회원 ID 기준 글 목록 조회
    @Override
    public List<BoardDTO> listMyBoard(String mem_id) throws Exception{
        List<BoardDTO> myb_List = sqlSession.selectList(namespace+ ".listBoard", mem_id);

        return myb_List;
    }

    // 댓글 쓰기
    @Override
    public int writeReply(ReplyDTO replyDTO) throws Exception{
        int result = sqlSession.insert(namespace+ ".writeReply", replyDTO);

        return result;
    }

    // 댓글 조회
    @Override
    public List<ReplyDTO> listReply(int board_idx) throws Exception{
        List<ReplyDTO> r_List = sqlSession.selectList(namespace+ ".readReplyBoard", board_idx);

        return r_List;
    }

    // 댓글 삭제
    @Override
    public int deleteReply(int reply_idx) throws Exception{
        int result = 0;

        return result;
    }


    // 댓글 갯수 조회
    @Override
    public int countReplyBoard(int board_idx) throws Exception{
        int result = sqlSession.selectOne(namespace+ ".countReplyBoard", board_idx);

        return result;
    }

    // test
    @Override
    public String getTime() throws Exception{
        String time = sqlSession.selectOne(namespace+ ".getTime");
        System.out.println("DAO 완료!");

        return time;
    }
}