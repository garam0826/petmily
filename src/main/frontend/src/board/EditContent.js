import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './board.css';
import {useSelector} from "react-redux";

function EditContent() {
    const navigate = useNavigate();
    const { idx } = useParams();
    const [board, setBoard] = useState({});
    const userData = useSelector(state => state.userData);

    useEffect(() => {
        axios.get(`/board/Content?idx=${idx}`)
            .then(response => {
                setBoard(response.data);
            })
            .catch(error => {
                console.error("There was an error retrieving the board: ", error);
            });
    }, [idx]);

    const handleEdit = async () => {
        try {
            if (board.reg_name !== userData.mem_id) {
                alert("본인의 글만 수정할 수 있습니다.");
                return;
            }
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
            <div className="form-container">
                <h2>게시글 수정</h2>
                <div>
                    <span>제목</span>
                    <input
                        name="title"
                        type="text"
                        value={board.title || ''}
                        onChange={(e) => setBoard({...board, title: e.target.value})}
                        required
                    />
                </div>
            </div>
            <br/>
            <div className="form-group">
                <span>내용</span>
                <textarea
                    name="content"
                    cols="30"
                    rows="20"
                    value={board.content || ''}
                    onChange={(e) => setBoard({...board, content: e.target.value})}
                ></textarea>
            </div>
            <br/>
            <div className="button-container">
                <button onClick={handleEdit}>수정 완료</button>
                <button onClick={() => navigate('/board/list')}>취소</button>
            </div>
        </div>
    );
}

export default EditContent;
