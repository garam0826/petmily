import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './Reducer'; // Assuming the path to your sessionReducer file
import {useNavigate} from "react-router-dom";
import store from './Store';
import axios from "axios";
import Menu from "../Menu";

import style from "../css/member.css";
import "../css/recommend.css"

function MyPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = store.getState();


    const userId = state.isLoggedIn ? state.userData.mem_id : null;  //store 이용

    const handleLogout = () => {
        dispatch(logout());
        navigate("/main");
    };

    // api - 회원 탈퇴
    const handleResign = async () => {
        try {
            const memberData = {
                mem_id: userId
            };
            const response = await axios.delete('/member/MyPage/Resign',  { data: memberData });
            alert('회원 탈퇴 성공!');
            dispatch(logout());
            console.log(state);
            navigate(("/member/login"));
        } catch (error) {
            alert('회원 탈퇴에 실패했습니다.');
        }
    };

    return (
        <div>
            <header>
                <Menu />
            </header>
            <main>
                <div data-case="text79" className="userEL15637124">
                    <div className="container_result">
                        <div className="row" data-matrix-loop="true" data-matrix-column="1">
                            <div className="col-xs-12 col-sm-12 col-md-12 item">
                                <div className="cl_caption" data-edit="true" data-selector=".cl_caption">
                                    <hr className="fr-hr"
                                        style={{borderBottom: '2px solid #d6d7d8', width: '35px', margin: '0 auto'}}
                                        align="center"/><br/><br/>
                                    <div><span
                                        style={{
                                            fontFamily: "'Seoul Namsan'",
                                            fontSize: '30px'
                                        }}> My Page </span>
                                    </div>
                                    <div><span className="fsize13"><span style={{
                                        color: 'rgb(138, 139, 142)',
                                        fontFamily: "'Nanum Barun Gothic'"
                                    }}>​</span></span></div>
                                    {state.isLoggedIn && (<div><span className="fsize13"><span
                                        style={{
                                            color: 'rgb(138, 139, 142)',
                                            fontFamily: "'Nanum Barun Gothic'"
                                        }}>{userId}님!</span></span>
                                    </div>)}
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}><br/>회원님의 정보를 확인하거나 수정하실 수 있습니다.</span></span>
                                    </div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}>그리고 저희와 함께 하지 않기를 원하신다면, 탈퇴도 하실 수 있습니다.<br/><br/></span></span>
                                    </div>
                                    <hr className="fr-hr"
                                        style={{borderBottom: '2px solid #d6d7d8', width: '35px', margin: '0 auto'}}
                                        align="center"/>
                                    <div><br/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {state.isLoggedIn ? (
                    <div>
                        <div className="div_member">
                            <div className="form_member">
                                <h2 className="h2">내 정보 확인하기</h2>
                                <button style={{marginTop: '5px'}} className="custom-button" onClick={() => navigate("/member/mypage/myinfo")}>정보 확인 →
                                </button>
                            </div>
                            <div className="form_member">
                                <h2 className="h2">회원정보 수정하기</h2>
                                <button style={{marginTop: '5px'}} className="custom-button"
                                        onClick={() => navigate("/member/mypage/myedit")}>정보 수정하기 →
                                </button>
                            </div>
                        </div>
                        <div className="div_member">
                            <div className="form_member">
                                <h2 className="h2">회원정보 탈퇴하기</h2>
                                <button style={{marginTop: '5px'}} className="custom-button"
                                        onClick={handleResign}>탈퇴
                                </button>
                            </div>
                            <div className="form_member">
                                <h2 className="h2">로그아웃 하기</h2>
                                <button style={{marginTop: '5px'}} className="custom-button"
                                        onClick={handleLogout}> 로그아웃
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className="h2">해당 화면은 로그인이 필요한 화면입니다.</h2>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <button className="custom-button" onClick={() => navigate("/member/SignUp")}>회원가입 >
                            </button>
                            <button className="custom-button" onClick={() => navigate("/member/login")}>로그인 >
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default MyPage;
