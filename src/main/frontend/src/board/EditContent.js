import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './board.css';
import {useSelector} from "react-redux";
import Menu from "../Menu";

function EditContent() {
    const navigate = useNavigate();
    const { idx } = useParams();
    const [board, setBoard] = useState({});
    const userData = useSelector(state => state.userData);

    useEffect(() => {
        axios.get(`/board/Content?idx=${idx}`)
            .then(response => {
                const data = response.data;
                setBoard(data.boardDTO);
            })
            .catch(error => {
                console.error("There was an error retrieving the board: ", error);
            });
    }, [idx]);

    const handleEdit = async () => {
        try {
            await axios.put(`/board/UpdateBoard`, board)
                .then(response => {
                    console.log('게시글 수정 성공:', response.data);
                    navigate('/board/list');
                })
        } catch(error) {
                console.error('게시글 수정 실패:', error);
                alert(error);
        }
    };

    return (
        <div>
            <Menu/>
            <div className="form-container">
                <h2>게시글 수정</h2>
                <div className="form-group">
                    <label>제목</label>
                    <input
                        name="title"
                        type="text"
                        value={board.title || ''}
                        onChange={(e) => setBoard({...board, title: e.target.value})}
                        placeholder="제목"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>내용</label>
                    <textarea
                        name="content"
                        cols="30"
                        rows="10"
                        value={board.content || ''}
                        onChange={(e) => setBoard({...board, content: e.target.value})}
                        placeholder="내용을 입력하세요"
                        required
                    ></textarea>
                </div>
                <div className="button-container">
                    <button onClick={handleEdit}>수정 완료</button>
                    <button onClick={() => navigate('/board/list')}>취소</button>
                </div>
            </div>
        </div>
    );
}

export default EditContent;