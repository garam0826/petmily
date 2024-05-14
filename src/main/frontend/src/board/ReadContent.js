import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import './readBoard.css';

function ReadContent() {
    const navigate = useNavigate();
    const { idx } = useParams();
    const [board, setBoard] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const userData = useSelector(state => state.userData);
    const reg_name = userData ? userData.mem_id : '';
    const currentTime = new Date().toISOString();

    useEffect(() => {
        // 게시글 조회 API 호출
        axios.get(`/board/Content?idx=${idx}`)
            .then(response => {
                setBoard(response.data);
            })
            .catch(error => {
                console.error("There was an error retrieving the board: ", error);
            });
        axios.get(`/board/Reply?boardIdx=${idx}`)
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.error("There was an error retrieving the board: ", error);
            });
    }, [idx]);

    const handleComment = async () => {
        await axios.post(`/board/WriteReply`, {
            boardIdx: idx,
            content: newComment,
            reg_name: reg_name,
            w_date: currentTime,
            u_date: currentTime,
        })
            .then(response => {
                console.log('댓글 작성 성공:', response.data);
                setComments(prevComments => [...prevComments, response.data]);
                setNewComment('');
            })
            .catch(error => {
                console.error('댓글 작성 실패:', error);
            });
    };

    const handleDelete = async () => {
        await axios.delete(`/board/Delete?idx=${idx}`)
            .then(response => {
                console.log('게시글 삭제 성공:', response.data);
                navigate('/board/list');
            })
            .catch(error => {
                console.error('게시글 삭제 실패:', error);
            });
    };

    return (
        <div className="container">
            <div className="content-container">
                <div className="title">{board.title}</div>
                <div className="meta-info">
                    작성자: {board.reg_name} | 조회수: {board.hit} | 작성 시간: {board.w_date} | 수정 시간: {board.u_date}
                </div>
                <div className="content">{board.content}</div>
                <div className="content">
                    <Link to={`/board/list/edit/${idx}`}>
                        <button>수정</button>
                    </Link>
                    <button onClick={() => navigate("/board/list")}>목록</button>
                    <button onClick={handleDelete}>삭제</button>
                </div>
                <h3>댓글</h3>
                <ul className="comment-list">
                    {comments.map(comment => (
                        <li key={comment.idx} className="comment-item">
                            <div className="comment-content">{comment.content}</div>
                            <div className="comment-info">
                                작성자: {comment.reg_name} | 작성 시간: {comment.w_date}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="comment-input">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder={"댓글을 작성하세요"}
                    ></textarea>
                    <button onClick={handleComment}>댓글 작성</button>
                </div>
            </div>
        </div>
    );
}

export default ReadContent;

