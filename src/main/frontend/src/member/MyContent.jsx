import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Menu from "../Menu";
import '../css/mycontent.css';

function MyContent() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const userData = useSelector((state) => state.userData);
    const userId = userData ? userData.mem_id : '';

    // 서버에서 게시글과 댓글 데이터를 가져오는 함수
    const fetchData = async () => {
        try {
            const response = await axios.get(`/board/List`);
            const data = response.data;

            console.log("API Response:", data); // 서버 응답 데이터 전체 확인

            if (data && Array.isArray(data.b_List)) {
                // 사용자 ID로 게시글 필터링
                const userPosts = data.b_List.filter(post => post.reg_name === userId);

                // 모든 게시글에서 댓글과 대댓글 추출
                const userComments = data.b_List.flatMap(post => {
                    const allComments = [];
                    // 댓글이 존재하면 추가
                    if (Array.isArray(post.r_List)) {
                        post.r_List.forEach(comment => {
                            if (comment.reg_name === userId) {
                                allComments.push(comment);
                            }

                            //대댓글이 존재하면 추가
                            if (Array.isArray(comment.replies)) {
                                comment.replies.forEach(reply => {
                                    if (reply.reg_name === userId) {
                                        allComments.push(reply);
                                    }
                                });
                            }
                        });
                    }
                    return allComments;
                });

                setPosts(userPosts);
                setComments(userComments);

                console.log("Filtered User Posts:", userPosts);
                console.log("Filtered User Comments:", userComments);
            } else {
                console.error('Unexpected response data:', data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userId) {
            fetchData();
        } else {
            console.log("User ID is not available");
            setLoading(false);
        }
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Menu />
            <div className="user-content-container">
                <h2>{userData?.mem_id || '사용자'}의 작성 글</h2>
                <div className="user-posts">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.idx} className="post-item">
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                            </div>
                        ))
                    ) : (
                        <p>작성한 글이 없습니다.</p>
                    )}
                </div>

                <h2>{userData?.mem_id || '사용자'}의 작성 댓글</h2>
                <div className="user-comments">
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <div key={comment.reply_idx} className="comment-item">
                                <p>{comment.content}</p>
                            </div>
                        ))
                    ) : (
                        <p>작성한 댓글이 없습니다.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyContent;