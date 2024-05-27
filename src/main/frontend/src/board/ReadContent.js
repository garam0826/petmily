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
    const [editCommentId, setEditCommentId] = useState(null); //수정 중인 댓글의 id를 저장
    const [editCommentCont, setEditCommentCont] = useState(''); //수정할 댓글의 내용을 저장

    const userData = useSelector(state => state.userData);
    const reg_name = userData ? userData.mem_id : '';
    const currentTime = new Date().toISOString();

    useEffect(() => {
        // 게시글 조회 API 호출
        axios.get(`/board/Content?idx=${idx}`)
            .then(response => {
                const data = response.data;
                setBoard(data.boardDTO);
                setComments(data.r_List);
                //setBoard(response.data);
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
            step: 0,
            depth: 0,
            w_date: currentTime,
            u_date: currentTime,
        })
            .then(response => {
                console.log('댓글 작성 성공:', response.data);
                /*setComments(prevComments => [...prevComments, response.data]);*/
                setNewComment('');
            })
            .catch(error => {
                console.error('댓글 작성 실패:', error);
            });
    };

    const handleEditComment = async (comment) => {
        if (comment.reg_name !== reg_name) {
            alert("본인의 댓글만 수정할 수 있습니다.");
            return;
        }
        await axios.put(`/board/UpdateReply`, {
            ...comment,
            content: editCommentCont,
            u_date: currentTime,
        })
            .then(response => {
                console.log('댓글 수정 성공:', response.data);
                setComments(prevComments => prevComments.map(c => c.idx === comment.idx ? { ...c, content: editCommentCont, u_date: currentTime } : c));
                setEditCommentId(null);
                setEditCommentCont('');
            })
            .catch(error => {
                console.error('댓글 수정 실패:', error);
            });
    };

    // 댓글 삭제 함수
    const handleDeleteComment = async (reply_idx) => {
        const comment = comments.find(c => c.idx === reply_idx);
        if (comments.reg_name !== reg_name) {
            alert("본인의 댓글만 삭제할 수 있습니다.");
            return;
        }
        await axios.delete(`/board/DeleteReply?idx=${reply_idx}`)
            .then(response => {
                console.log('댓글 삭제 성공:', response.data);
                setComments(prevComments => prevComments.filter(comment => comment.idx !== reply_idx));
            })
            .catch(error => {
                console.error('댓글 삭제 실패:', error);
            });
    };

    const handleDelete = async () => {
        if (board.reg_name !== reg_name) {
            alert("본인의 글만 삭제할 수 있습니다.");
            return;
        }
        await axios.delete(`/board/DeleteBoard?idx=${idx}`)
            .then(response => {
                console.log('게시글 삭제 성공:', response.data);
                navigate('/board/list');
            })
            .catch(error => {
                console.error('게시글 삭제 실패:', error);
            });
    };

    return (
        <div className="content-container">
            <div className="title">{board.title}</div>
            <div className="meta-info">
                작성자: {board.reg_name} | 조회수: {board.hit} | 작성 시간: {board.w_date} | 수정 시간: {board.u_date}
            </div>
            <div className="content">{board.content}</div>
            <div className="content">
                {board.reg_name === reg_name && (
                    <>
                        <Link to={`/board/list/edit/${idx}`}>
                            <button>수정</button>
                        </Link>
                        <button onClick={handleDelete}>삭제</button>
                    </>
                )}
                <button onClick={() => navigate("/board/list")}>목록</button>
            </div>
            <h3>댓글</h3>
            <ul className="comment-list">
                {comments.map(comment => (
                    <li key={comment.idx} className="comment-item">
                        {/*<div className="comment-content">{comment.content}</div>
                            <div className="comment-info">
                                작성자: {comment.reg_name} | 작성 시간: {comment.w_date}
                            </div>*/}
                        {editCommentId === comment.idx ? (
                            <>
                                    <textarea
                                        value={editCommentCont}
                                        onChange={(e) => setEditCommentCont(e.target.value)}
                                    ></textarea>
                                <button onClick={() => handleEditComment(comment)}>수정 완료</button>
                                <button onClick={() => {
                                    setEditCommentId(null);
                                    setEditCommentCont('');
                                }}>취소
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="comment-content">{comment.content}</div>
                                <div className="comment-info">
                                    작성자: {comment.reg_name} | 작성 시간: {comment.w_date}
                                </div>
                                {comment.reg_name === reg_name && (
                                    <>
                                        <button onClick={() => {
                                            setEditCommentId(comment.idx);
                                            setEditCommentCont(comment.content);
                                        }}>수정
                                        </button>
                                        <button onClick={() => handleDeleteComment(comment.idx)}>삭제</button>
                                    </>
                                )}
                            </>
                        )}
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
    );
}

export default ReadContent;

