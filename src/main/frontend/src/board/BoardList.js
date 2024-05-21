import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import './board.css';
import Menu from "../Menu";

function BoardList() {
    const [boards, setBoards] = useState([]);
    const navigate = useNavigate();

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
        <div>
            <Menu/>
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
}

export default BoardList;