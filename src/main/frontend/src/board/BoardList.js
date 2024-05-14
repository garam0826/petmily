//게시판 리스트 컨트롤러
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from "react-router-dom";
import './board.css';

function BoardList() {
    const [boards, setBoards] = useState([]);
    const navigate = useNavigate();
    //const { idx } = useParams();

    useEffect(() => {
        // API 호출
        axios.get('/board/List')
            .then(response => {

                setBoards(response.data);
            })
            .catch(error => {
                console.error("There was an error retrieving the board list: ", error);
            });
    }, []);

    return (
        <div className="board-container">
            <h2 className="board-title">게시판</h2>
            <div className={"board-write"}>
                <button onClick={() => navigate("/board/list/write")}>
                    글 작성하기
                </button>
            </div>
            <div className="board-cont">
                <span>제목</span>
                <span>글쓴이</span>
                <span>작성시간</span>
            </div>
            <ul className="board-list">
                {boards.map(board => (
                    <li className="board-item" key={board.idx}>
                        <Link to={`/board/list/read/${board.idx}`}>{board.title}</Link>
                        <span>{board && board.reg_name}</span>
                        <span>{board && board.w_date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
    /*return (
        <div>
            <h2>게시글 목록</h2>
            <ul>
                {boards.map(board => (
                    <li key={board.idx}>
                        <Link to={`/board/list/read/${board.idx}`}>{board.title}</Link>- {board && board.reg_name} ({board && board.w_date})
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() =>
                    navigate("/board/list/write")}>
                    글 작성하기
                </button>
            </div>
        </div>
    );*/
}

export default BoardList;