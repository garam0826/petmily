import React, {useState} from 'react';
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom";

import './App.css';

const Mainpage = () => {
    const navigate = useNavigate();
    return (
        <div className="menubar">
            <button className="login" onClick={() => navigate("/member/login")}>로그인</button>
            <button className="login" onClick={() => navigate("/member/signup")}>회원가입</button>
            <ul>
                <li onClick={() => navigate("/main")}>홈</li>
                <li onClick={() => navigate("/animal")}>보호 중인 동물</li>
                <li onClick={() => navigate("/recommend")}>반려견 추천</li>
                <li onClick={() => navigate("/board/list")}>게시판</li>
                <li onClick={() => navigate("/")}>유기견 입양 과정</li>
                <li className="dropdown">
                    <span>회원 정보</span>
                    <div className="dropdown-content">
                        <Link to="/member/mypage">정보 확인 및 수정</Link>
                        <Link to="/member/mypage">찜 목록</Link>
                        <Link to="/member/mypage">내가 작성한 글과 댓글</Link>
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default Mainpage;