/*
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Menu from "../Menu";
import '../css/mycontent.css';

function MyContent() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    // 스토어에서 사용자 ID 가져오기
    const userData = useSelector((state) => state.userData);
    const userId = userData ? userData.mem_id : '';

    // 사용자 ID를 기반으로 필터링된 글 목록을 가져오는 함수
    const MyContents = async (userId) => {
        try {
            const response = await axios.get(`/board/List?userId=${userId}`);
            console.log('User Contents: ', response.data);
            return response.data.b_List;
        } catch (error) {
            console.error('Error fetching user posts:', error);
            throw error;
        }
    };

// 사용자 ID를 기반으로 필터링된 댓글 목록을 가져오는 함수
    const MyReply = async (postId) => {
        try {
            const response = await axios.get(`/board/Content?idx=${postId}`);
            console.log('')
            return response.data.b_Cnt;
        } catch (error) {
            console.error('Error fetching user comments:', error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userPosts = await MyContents(userId);
                const userComments = await MyReply(userId);

                setPosts(userPosts);
                setComments(userComments);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Menu/>
            <div className="user-content-container">
                <h2>{userData.username}의 작성 글</h2>
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

                <h2>{userData.username}의 작성 댓글</h2>
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

export default MyContent;*/
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Menu from "../Menu";
import '../css/mycontent.css';

function MyContent() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    // 스토어에서 사용자 ID 가져오기
    const userData = useSelector((state) => state.userData);

    useEffect(() => {
        console.log("userData:", userData);  // 콘솔에 userData 출력
    }, [userData]);

    const userId = userData ? userData.mem_id : '';

    // 서버에서 게시글과 댓글 데이터를 가져오는 함수
    const fetchData = async () => {
        try {
            const response = await axios.get(`/board/List`);
            const data = response.data;

            console.log("API Response:", data);

            // 응답 데이터가 정의되어 있는지 확인
            if (data && Array.isArray(data.b_List)) {
                // 사용자 ID로 게시글 필터링
                const userPosts = data.b_List.filter(post => post.reg_name === userId);

                // 모든 게시글에서 댓글 추출
                const allComments = data.b_List.flatMap(post => post.r_List || []);

                // 사용자 ID로 댓글 필터링
                const userComments = allComments.filter(comment => comment.reg_name === userId);

                setPosts(userPosts);
                setComments(userComments);

                console.log("Filtered User Posts:", userPosts);
                console.log("Filtered User Comments:", userComments);
            } else {
                console.error('Unexpected response data:', data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
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



