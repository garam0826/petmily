import React, {useState} from 'react';
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom";
import store from "./member/Store";
import './App.css';
import {logout} from "./member/Reducer";
import { useDispatch } from 'react-redux';
import Menu from "./Menu";
/*

const Mainpage = () => {
    const navigate = useNavigate();
    return (
        //<h1>Main page</h1>
        <div>
            [ Login ]
            <button onClick={() => navigate("/login")}>로그인</button>
            <hr/>
            [ SignUp ]
            <button onClick={() => navigate("/signup")}>회원가입</button>
            <hr/>
            <hr/>
            [[ 게시판으로 이동 >> ]]
            <button onClick={() => navigate("/board")}>게시판 >></button>
            <hr/>
            [[ animal api 확인 ]]
            <button onClick={() => navigate("/animal")}>animal >> </button>
        </div>
    );
}
*/
/*const Mainpage = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/animal">보호 중인 동물</Link>
                </li>
                <li>
                    <Link to="">반려견 추천</Link>
                </li>
                <li>
                    <Link to="/board">게시판</Link>
                </li>
                <li>
                    <Link to="/">회원 정보</Link>
                    <li>
                        <Link to="/mypage">정보 확인 및 수정</Link>
                    </li>
                    <li>
                        <Link to="/">찜 목록</Link>
                    </li>
                    <li>
                        <Link to="/">내가 작성한 글과 댓글</Link>
                    </li>
                </li>
            </ul>
        </nav>
    )
}*/

const Mainpage = () => {

    return (
        <Menu />
    );
};
export default Mainpage;