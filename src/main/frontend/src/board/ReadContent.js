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
    const [editCommentId, setEditCommentId] = useState(null);
    const [editCommentCont, setEditCommentCont] = useState('');
    const [replyId, setReplyId] = useState(null); // 대댓글의 ID
    const [replyContent, setReplyContent] = useState(''); // 대댓글 내용

    const userData = useSelector(state => state.userData);
    const reg_name = userData ? userData.mem_id : '';

    const formDate = (dateString) => {
        if (!dateString) return '';
        const [datePart] = dateString.split('T');
        return datePart;
    };

    useEffect(() => {
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
            board_idx: idx,
            content: newComment,
            reg_name: reg_name,
            step: 1,
            depth: 1,
            w_date: new Date().toISOString(),
            u_date: new Date().toISOString(),
        };

        try {
            const response = await axios.post(`/board/WriteReply`, cmtData);
            console.log('댓글 작성 성공:', response.data);
            const newCommentData = { ...cmtData, reply_idx: response.data.reply_idx };

            setComments(prevComments => [...prevComments, newCommentData]);

            setNewComment('');
            setReplyId(null);
            setReplyContent('');
        } catch (error) {
            console.error('댓글 작성 실패:', error.response ? error.response.data : error.message);
        }
    };

    const handleReply = async () => {
        const parentCmt = comments.find(comment => comment.reply_idx === replyId);
        const cmtData = {
            reply_idx: replyId,
            board_idx: idx,
            content: replyContent,
            reg_name: reg_name,
            step: parentCmt.step + 1,
            depth: parentCmt.depth + 1,
            w_date: new Date().toISOString(),
            u_date: new Date().toISOString(),
        };

        try {
            const response = await axios.post(`/board/WriteReply`, cmtData);
            console.log('대댓글 작성 성공:', response.data);
            const newReplyData = { ...cmtData, reply_idx: response.data.reply_idx };

            setComments(prevComments => {
                const parentIdx = prevComments.findIndex(comment => comment.reply_idx === replyId);
                const updateComments = [...prevComments];
                const otherComments = updateComments.slice(parentIdx + 1).filter(comment => comment.depth > parentCmt.depth);
                const insertIdx = otherComments.length > 0
                    ? parentIdx + otherComments.length + 1
                    : parentIdx + 1;
                updateComments.splice(insertIdx, 0, newReplyData); // 순서대로 배치
                return updateComments;
            });

            setReplyId(null);
            setReplyContent('');
        } catch (error) {
            console.error('대댓글 작성 실패:', error.response ? error.response.data : error.message);
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
                u_date: new Date().toISOString(),
            });
            console.log('댓글 수정 성공:', response.data);

            setComments(prevComments => prevComments.map(c =>
                c.reply_idx === comment.reply_idx ? { ...c, content: editCommentCont, u_date: new Date().toISOString() } : c
            ));

            setEditCommentId(null);
            setEditCommentCont('');
        } catch (error) {
            console.error('댓글 수정 실패:', error.response ? error.response.data : error.message);
        }
    };

    // 댓글 삭제
    const handleDeleteComment = async (reply_idx) => {
        const comment = comments.find(c => c.reply_idx === reply_idx);
        if (comment.reg_name !== reg_name) {
            alert("본인의 댓글만 삭제할 수 있습니다.");
            return;
        }

        try {
            const response = await axios.delete(`/board/DeleteReply?idx=${reply_idx}`);
            console.log('댓글 삭제 성공:', response.data);

            // 댓글과 해당 댓글의 대댓글만 삭제
            setComments(prevComments => prevComments.filter(c =>
                !(c.reply_idx === reply_idx || (c.reply_idx !== reply_idx && c.depth > comment.depth && c.step > comment.step))
            ));
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
            <Menu />
            <div className="content-container">
                <div className="title">{board.title}</div>
                <div className="meta-info">
                    작성자: {board.reg_name} | 조회수: {board.hit} | 작성일: {formDate(board.w_date)} | 수정일: {formDate(board.u_date)}
                </div>
                <div className="content">{board.content}</div>
                <div className="content-buttons">
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
                                    }}>취소</button>
                                </>
                            ) : (
                                <>
                                    <div className="comment-content">
                                        {comment.depth > 1 && <span className="reply-indent">↳ </span>}
                                        {comment.content}
                                    </div>
                                    <div className="comment-info">
                                        작성자: {comment.reg_name} | 작성일: {formDate(comment.w_date)}
                                    </div>
                                    {comment.reg_name === reg_name && (
                                        <>
                                            <button onClick={() => {
                                                setEditCommentId(comment.reply_idx);
                                                setEditCommentCont(comment.content);
                                            }}>수정</button>
                                            <button onClick={() => handleDeleteComment(comment.reply_idx)}>삭제</button>
                                        </>
                                    )}
                                    <button onClick={() => setReplyId(comment.reply_idx)}>댓글 달기</button>

                                    {replyId === comment.reply_idx && (
                                        <div className="reply-input">
                                            <textarea
                                                value={replyContent}
                                                onChange={(e) => setReplyContent(e.target.value)}
                                                placeholder="댓글을 작성하세요"
                                            ></textarea>
                                            <button onClick={handleReply}>댓글 달기</button>
                                            <button onClick={() => {
                                                setReplyId(null);
                                                setReplyContent('');
                                            }}>취소</button>
                                        </div>
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
                        placeholder="댓글을 작성하세요"
                    ></textarea>
                    <button onClick={handleComment}>댓글 작성</button>
                </div>
            </div>
        </div>
    );
}

export default ReadContent;