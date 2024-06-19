/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import './readBoard.css';

function ReadContent() {
    const navigate = useNavigate();
    const { idx } = useParams();
    const {reply_idx} = useParams();
    const [board, setBoard] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [editCommentId, setEditCommentId] = useState(null); //수정 중인 댓글의 id를 저장
    const [editCommentCont, setEditCommentCont] = useState(''); //수정할 댓글의 내용을 저장
    const [replyId, setReplyId] = useState(null); //대댓글 작성 대상 댓글의 id를 저장

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
        const cmtData = {
            reply_idx: 0,
            boardIdx: idx,
            content: newComment,
            reg_name: reg_name,
            step: 1,
            depth: 1,
            w_date: currentTime,
            u_date: currentTime,
        };

        if (replyId != null) {
            //대댓글 작성
            const parentCmt = comments.find(comment => comment.idx === replyId);
            cmtData.step = parentCmt.step + 1;
            cmtData.depth = parentCmt.depth + 1;
            cmtData.reply_idx = replyId;
        }
        await axios.post(`/board/WriteReply`, cmtData)
            .then(response => {
                console.log('댓글 작성 성공:', response.data);
                /!*setComments([...comments, response.data]);*!/
                setComments(prevComments => [...prevComments, {...cmtData, reply_idx: response.data.reply_idx}]);
                setNewComment('');
                /!*setReplyId(null);*!/
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
                setComments(prevComments => prevComments.map(c => c.reply_idx === comment.reply_idx ? { ...c, content: editCommentCont, u_date: currentTime } : c));
                setEditCommentId(null);
                setEditCommentCont('');
            })
            .catch(error => {
                console.error('댓글 수정 실패:', error);
            });
    };

    // 댓글 삭제 함수
    const handleDeleteComment = async (reply_idx) => {
        const comment = comments.find(c => c.reply_idx === reply_idx);
        if (comment.reg_name !== reg_name) {
            alert("본인의 댓글만 삭제할 수 있습니다.");
            return;
        }
        await axios.delete(`/board/DeleteReply?idx=${reply_idx}`)
            .then(response => {
                console.log('댓글 삭제 성공:', response.data);
                setComments(prevComments => prevComments.filter(comment => comment.reply_idx !== reply_idx));
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
                    <li key={comment.reply_idx} className="comment-item">
                        {/!*<div className="comment-content">{comment.content}</div>
                            <div className="comment-info">
                                작성자: {comment.reg_name} | 작성 시간: {comment.w_date}
                            </div>*!/}
                        {editCommentId === comment.reply_idx ? (
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
                                            setEditCommentId(comment.reply_idx);
                                            {/!*setEditCommentId(comment.idx);*!/}
                                            setEditCommentCont(comment.content);
                                        }}>수정
                                        </button>
                                        <button onClick={() => handleDeleteComment(comment.reply_idx)}>삭제</button>
                                    </>
                                )}
                                <button onClick={() => setReplyId(comment.reply_idx)}>대댓글 달기</button>
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
                {/!*<input type="hidden" name={reply_idx}></input>*!/}
                <input type="hidden" name={replyId}></input>
                <button onClick={handleComment}>댓글 작성</button>
            </div>
        </div>
    );
}

export default ReadContent;

*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './readBoard.css';
import Menu from "../Menu";


function ReadContent() {
    const navigate = useNavigate();
    const { idx } = useParams();
    const [board, setBoard] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [editCommentId, setEditCommentId] = useState(null); // 수정 중인 댓글의 id를 저장
    const [editCommentCont, setEditCommentCont] = useState(''); // 수정할 댓글의 내용을 저장
    const [replyId, setReplyId] = useState(null); // 대댓글 작성 대상 댓글의 id를 저장

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
            })
            .catch(error => {
                console.error("There was an error retrieving the board: ", error);
            });
    }, [idx]);

    const handleComment = async () => {
        const cmtData = {
            reply_idx: 0,
            board_idx: idx, // 서버와 데이터 필드 이름 일치
            content: newComment,
            reg_name: reg_name,
            step: 1,
            depth: 1,
            w_date: currentTime,
            u_date: currentTime,
        };

        if (replyId != null) {
            // 대댓글 작성
            const parentCmt = comments.find(comment => comment.reply_idx === replyId);
            cmtData.step = parentCmt.step + 1;
            cmtData.depth = parentCmt.depth + 1;
            cmtData.reply_idx = replyId;
        }

        console.log('Submitting comment:', cmtData); // 디버깅을 위해 데이터 구조 출력

        try {
            const response = await axios.post(`/board/WriteReply`, cmtData);
            console.log('댓글 작성 성공:', response.data);
            setComments(prevComments => [...prevComments, { ...cmtData, reply_idx: response.data.reply_idx }]);
            setNewComment('');
            setReplyId(null);
        } catch (error) {
            console.error('댓글 작성 실패:', error.response ? error.response.data : error.message);
        }
    };

    const handleEditComment = async (comment) => {
        if (comment.reg_name !== reg_name) {
            alert("본인의 댓글만 수정할 수 있습니다.");
            return;
        }

        try {
            const response = await axios.put(`/board/UpdateReply`, {
                ...comment,
                content: editCommentCont,
                u_date: currentTime,
            });
            console.log('댓글 수정 성공:', response.data);
            setComments(prevComments => prevComments.map(c => c.reply_idx === comment.reply_idx ? { ...c, content: editCommentCont, u_date: currentTime } : c));
            setEditCommentId(null);
            setEditCommentCont('');
        } catch (error) {
            console.error('댓글 수정 실패:', error.response ? error.response.data : error.message);
        }
    };

    const handleDeleteComment = async (reply_idx) => {
        const comment = comments.find(c => c.reply_idx === reply_idx);
        if (comment.reg_name !== reg_name) {
            alert("본인의 댓글만 삭제할 수 있습니다.");
            return;
        }

        try {
            const response = await axios.delete(`/board/DeleteReply?idx=${reply_idx}`);
            console.log('댓글 삭제 성공:', response.data);
            setComments(prevComments => prevComments.filter(comment => comment.reply_idx !== reply_idx));
        } catch (error) {
            console.error('댓글 삭제 실패:', error.response ? error.response.data : error.message);
        }
    };

    const handleDelete = async () => {
        if (board.reg_name !== reg_name) {
            alert("본인의 글만 삭제할 수 있습니다.");
            return;
        }

        try {
            const response = await axios.delete(`/board/DeleteBoard?idx=${idx}`);
            console.log('게시글 삭제 성공:', response.data);
            navigate('/board/list');
        } catch (error) {
            console.error('게시글 삭제 실패:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <Menu/>
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
                        <li key={comment.reply_idx} className="comment-item">
                            {editCommentId === comment.reply_idx ? (
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
                                                setEditCommentId(comment.reply_idx);
                                                setEditCommentCont(comment.content);
                                            }}>수정
                                            </button>
                                            <button onClick={() => handleDeleteComment(comment.reply_idx)}>삭제</button>
                                        </>
                                    )}
                                    <button onClick={() => setReplyId(comment.reply_idx)}>대댓글 달기</button>
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
                    <input type="hidden" name={replyId}></input>
                    <button onClick={handleComment}>댓글 작성</button>
                </div>
            </div>
        </div>
    );
}

export default ReadContent;












