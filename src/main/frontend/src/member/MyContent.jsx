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
            const listResponse = await axios.get(`/board/List`);
            const listData = listResponse.data;

            if (listData && Array.isArray(listData.b_List)) {
                // 사용자 ID로 게시글 필터링
                const userPosts = listData.b_List.filter(post => post.reg_name === userId);
                setPosts(userPosts);

                // 모든 게시글의 댓글을 가져오기
                const allComments = await Promise.all(
                    listData.b_List.map(async (post) => {
                        const contentResponse = await axios.get(`/board/Content`, { params: { idx: post.idx } });
                        const contentData = contentResponse.data;
                        if (contentData && Array.isArray(contentData.r_List)) {
                            // 사용자가 작성한 댓글만 필터링
                            return contentData.r_List
                                .filter(comment => comment.reg_name === userId)
                                .map(comment => ({
                                    ...comment,
                                    postTitle: post.title // 댓글에 해당하는 글의 제목 추가
                                }));
                        }
                        return [];
                    })
                );
                setComments(allComments.flat());

                console.log("Filtered User Posts:", userPosts);
                console.log("Filtered User Comments:", allComments.flat());
            } else {
                console.error('Unexpected response data:', listData);
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
                            <div
                                key={comment.idx || comment.reply_idx}
                                className={`comment-item ${comment.isReply ? 'reply' : ''}`}>
                                <p>작성한 댓글: {comment.content}</p>
                                <p>해당 글: {comment.postTitle}</p>
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