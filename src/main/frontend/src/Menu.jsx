import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import store from "./member/Store";
import {logout} from "./member/Reducer";
import menustyle from "./css/menu.css"

import logo from "./logo/simple.png"; //logo
import Button from '@mui/material/Button';
function Memu() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const state = store.getState();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/main");
    };
    return(
        <div className="menubar">
            {state.isLoggedIn ? (
                <button className="login" onClick={handleLogout}>로그아웃</button>
            ) : (
                <button className="login" onClick={() => navigate("/member/login")}>로그인</button>
            )}

            <ul>
                {/* <li onClick={() => navigate("/main")}>홈</li> */}
                <li onClick={() => navigate("/main")}>
                    <img src={logo} style={{width: '150px', height: 'auto', marginTop: '-20px', marginLeft: '10px'}}/>
                </li>
                <li onClick={() => navigate("/animal")}>보호 중인 동물</li>
                <li onClick={() => navigate("/recommend")}>반려견 추천</li>
                <li onClick={() => navigate("/board/list")}>게시판</li>
                <li className="dropdown">
                    <span>회원 정보</span>
                    <div className="dropdown-content">
                        <Link to="/member/mypage">정보 확인 및 수정</Link>
                        <Link to="/member/mypage/mycart">찜 목록</Link>
                        <Link to="/member/mypage/mycontent">내가 작성한 글과 댓글</Link>
                        <Link to="/member/mypage/imgUpload">이미지 업로드</Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Memu;