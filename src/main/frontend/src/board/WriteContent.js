import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './board.css';
import Menu from "../Menu";

function WriteContent() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Redux 스토어에서 userData를 가져옴
    const userData = useSelector(state => state.userData);

    const handleSubmit = (event) => {
        event.preventDefault();

        const reg_name = userData ? userData.mem_id : '';
        const currentTime = new Date().toISOString();

        axios.post('/board/WriteBoard', {
            title: title,
            content: content,
            reg_name: reg_name,
            hit: 0,
            w_date: currentTime,
            u_date: currentTime,
        })
            .then(response => {
                console.log('게시글 작성 성공:', response.data);
                navigate('/board/list');
            })
            .catch(error => {
                console.error('게시글 작성 실패:', error);
            });
    };

    if (!userData) {
        return (
            <div>
                <h2>로그인이 필요합니다.</h2>
                <button onClick={() => navigate('/member/login')}>로그인</button>
            </div>
        );
    }

    return (
        <div>
            <Menu/>
            <div className="form-container">
                <h2>게시글 작성</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>제목</label>
                        <input
                            name="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>작성자</label>
                        <input
                            name="reg_name"
                            type="text"
                            value={userData ? userData.mem_id : ''}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label>내용</label>
                        <textarea
                            name="content"
                            cols="30"
                            rows="10"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </div>
                    <div className="button-container">
                        <button type="submit">저장</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default WriteContent;

