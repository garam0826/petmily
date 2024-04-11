import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from "react-redux";

function WriteContent() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    //const [idx, setIdx] = useState(null);
    const userData = useSelector((state) => state.user.userData);

    const handleSubmit = (event) => {
        event.preventDefault();

        const reg_name = userData ? userData.mem_id : '';
        const currentTime = new Date().toISOString();

        axios.post('/board/WriteBoard', {
            //idx: idx,
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

    return (
        <div>
            <h2>게시글 작성</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목</label>
                    <input
                        name="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>작성자</label>
                    <input
                        name="reg_name"
                        type="text"
                        value={userData ? userData.name : ''}
                        readOnly
                    />
                </div>
                <br/>
                <div>
                    <label>내용</label>
                    <textarea
                        name="content"
                        cols="30"
                        rows="20"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <br/>
                <button type="submit">저장</button>
            </form>
        </div>
    );
}

export default WriteContent;
