//게시판 리스트 컨트롤러
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from "react-router-dom";

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
            <h2>게시글 목록</h2>
            <ul>
                {boards.map(board => (
                    <li key={board.idx}>
                        <Link to={`/board/list/read/${board.idx}`}>{board.title}</Link> - {board.reg_name} ({board.reg_date})
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
    );
}

export default BoardList;

/*

//게시판 리스트 컨트롤러
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from "react-router-dom";

function BoardList() {
    const [boards, setBoards] = useState([]);
    const navigate = useNavigate();
    const [idx, setIdx] = useState(null);

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

    const handleWrite = () => {
        // 글 작성하기 버튼 클릭 시, 선택된 게시글의 idx를 사용하여 페이지 이동
        if (idx) {
            navigate(`/board/list/write/${idx}`); // 수정된 부분: 선택된 게시글의 idx를 전달
        } else {
            navigate("/board/list/write");
        }
    };

    return (
        <div>
            <h2>게시글 목록</h2>
            <ul>
                {boards.map(board => (
                    <li key={board.idx}>
                        <Link to={`/board/list/read/${board.idx}`} onClick={() => setIdx(board.idx)}>
                            {board.title}
                        </Link> - {board.reg_name}
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={handleWrite}>
                    글 작성하기
                </button>
            </div>
        </div>
    );
}

export default BoardList;*/
