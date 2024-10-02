import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import './board.css';
import Menu from "../Menu";
import { useSelector } from "react-redux";
import Pagination from '../animal/Pagination';

function BoardList() {
    const [boards, setBoards] = useState([]);
    const navigate = useNavigate();
    const userData = useSelector(state => state.userData); // 현재 로그인한 사용자 정보

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;

    useEffect(() => {
        // API 호출
        axios.get('/board/List')
            .then(response => {
                const { b_List } = response.data;
                setBoards(b_List);
            })
            .catch(error => {
                console.error("There was an error retrieving the board list: ", error);
            });
    }, []);

    const handleWrite = () => {
        if (userData) {
            navigate("/board/list/write");
        } else {
            alert("로그인이 필요합니다.");
            navigate("/member/login");
        }
    };

    const formDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div>
            <Menu />
            <div>
                <h2 className="board-title">자유게시판</h2>
                <div className="fix">
                    <button className="board-write" onClick={handleWrite}>글 작성하기</button>
                </div>
                <hr className="board-divider"/>
                <div className="board-cont">
                    <span className="board-header-no">No.</span>
                    <span className="board-header-title">제목</span>
                    <span className="board-header-author">작성자</span>
                    <span className="board-header-date">작성일</span>
                </div>
                <ul className="board-list">
                    {Array.isArray(boards) && boards.slice(offset, offset + limit).map(board => (
                        <li className="board-item" key={board.idx}>
                            <span className="board-index">{board.idx}</span>
                            <Link to={`/board/list/read/${board.idx}`} className="board-link">{board.title}</Link>
                            <span className="board-author">{board.reg_name}</span>
                            <span className="board-date">{formDate(board.w_date)}</span>
                        </li>
                    ))}
                </ul>
                <footer>
                    <Pagination
                        total={boards.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </footer>
            </div>
        </div>
    );
}

export default BoardList;