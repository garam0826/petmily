import React, {useState} from 'react';
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom";
import store from "./member/Store";
import "./css/menu.css"
import './App.css';
import {logout} from "./member/Reducer";
import { useDispatch } from 'react-redux';
import SlideBanner from "./MainPage/SlideBanner";
import MainAnimal from "./MainPage/mainpage_animal";
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
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const state = store.getState();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/main");
    };

    return (
        <div>
            <div className="menubar">
                {state.isLoggedIn ? (
                    <button className="login" onClick={handleLogout}>로그아웃</button>
                ) : (
                    <button className="login" onClick={() => navigate("/member/login")}>로그인</button>
                )}

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
                            <Link to="/member/mypage/mycart">찜 목록</Link>
                            <Link to="/member/mypage/mycontent">내가 작성한 글과 댓글</Link>
                            <Link to="/member/mypage/imgUpload">이미지 업로드</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="info-header">
                <h1>나에게 맞는 강아지를 추천받다</h1>
                <p>어떤 유기견을 입양해야 할지 고민 중이신가요</p>
                <p>저희 서비스만의 추천 기능을 통해 유기견 친구들을 찾아보세요!</p>
            </div>
            <div className="banner-content">
                <SlideBanner/>
            </div>
            <div className="main_animal">
                <h1>보호 중인 유기견</h1>
                <button className="more-button" onClick={() => navigate("/animal")}>더보기</button>
            </div>
            <hr/>
            <MainAnimal/>
        </div>
    );
};
export default Mainpage;