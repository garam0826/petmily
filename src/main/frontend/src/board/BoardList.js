/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import './board.css';
import Menu from "../Menu";
import {useSelector} from "react-redux";
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
                //setBoards(response.data);
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

    return (
        <div>
            <Menu/>
            <h2 className="board-title">게시판</h2>
            <div className={"board-write"}>
                <button onClick={handleWrite}>
                    글 작성하기
                </button>
            </div>
            <div className="board-cont">
                <span>No.</span>
                <span>제목</span>
                <span>글쓴이</span>
                <span>작성시간</span>
            </div>
            <ul className="board-list">
                {Array.isArray(boards) && boards.map(board => (
                    <li className="board-item" key={board.idx}>
                        <span>{board.idx}</span>
                        <Link to={`/board/list/read/${board.idx}`}>{board.title}</Link>
                        <span>{board && board.reg_name}</span>
                        <span>{board && board.w_date}</span>
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
    );
}

export default BoardList;
*/
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

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('ko-KR', options);
    };

    return (
        <div>
            <Menu />
            <div>
                <h2 className="board-title">게시판</h2>
                <div className={"board-write"}>
                    <button onClick={handleWrite}>
                        글 작성하기
                    </button>
                </div>
                <div className="board-cont">
                    <span className="board-header-no">No.</span>
                    <span className="board-header-title">제목</span>
                    <span className="board-header-author">글쓴이</span>
                    <span className="board-header-date">작성일</span>
                </div>
                <ul className="board-list">
                    {Array.isArray(boards) && boards.slice(offset, offset + limit).map(board => (
                        <li className="board-item" key={board.idx}>
                            <span className="board-index">{board.idx}</span>
                            <Link to={`/board/list/read/${board.idx}`} className="board-link">{board.title}</Link>
                            <span className="board-author">{board.reg_name}</span>
                            <span className="board-date">{formatDate(board.w_date)}</span>
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
