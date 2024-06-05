import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import store from './Store';
import Menu from "../Menu";
import "../css/recommend.css"
import "../css/member.css"


function MyInfo() {
    const [memberInfo, setMemberInfo] = useState(null);
    const [error, setError] = useState(null);
    const [newMemberInfo, setNewMemberInfo] = useState({
        mem_id: '',
        mem_pw: '',
        nickname: '',
        email: '',
        region: '',
        country_district: '',
        reg_date: '',
        edit_date: ''
    });

    const navigate = useNavigate();

    // 세션에서 사용자 아이디 가져오기
    const state = store.getState();
    const id = state.isLoggedIn ? state.userData.mem_id : null;

    // 회원 정보 가져오기
    const fetchMemberInfo = async () => {
        console.log(state);
        try {
            const response = await axios.get(`/member/MyPage?mem_id=${id}`);
            setMemberInfo(response.data);
            setNewMemberInfo(response.data);
            setError(null);
        } catch (error) {
            setError('사용자 정보를 가져오는 중에 오류가 발생했습니다.');
            setMemberInfo(null);
        }
    };

    // 컴포넌트가 마운트될 때 회원 정보 가져오기
    useEffect(() => {
        fetchMemberInfo();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

    return (
        <React.Fragment>
            <header>
                <Menu />
            </header>
            <main>
                <div>
                    <div data-case="text79" className="userEL15637124">
                        <div className="container_result">
                            <div className="row" data-matrix-loop="true" data-matrix-column="1">
                                <div className="col-xs-12 col-sm-12 col-md-12 item">
                                    <div className="cl_caption" data-edit="true" data-selector=".cl_caption">
                                        <hr className="fr-hr"
                                            style={{borderBottom: '2px solid #d6d7d8', width: '35px', margin: '0 auto'}}
                                            align="center"/>
                                        <br/><br/>
                                        <div><span
                                            style={{
                                                fontFamily: "'Seoul Namsan'",
                                                fontSize: '30px'
                                            }}> 회원 정보 </span>
                                        </div>
                                        <br/><br/>
                                        <hr className="fr-hr"
                                            style={{borderBottom: '2px solid #d6d7d8', width: '35px', margin: '0 auto'}}
                                            align="center"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {memberInfo ? (
                        <form className="form">
                            <p className="contentContainer">ID: {memberInfo.mem_id}</p><br/>
                            <p className="contentContainer">PW: {memberInfo.mem_pw}</p><br/>
                            <p className="contentContainer">Name: {memberInfo.nickname}</p><br/>
                            <p className="contentContainer">도/특별시: {memberInfo.region}</p><br/>
                            <p className="contentContainer">시/군: {memberInfo.county_district}</p>
                        </form>
                    ) : (
                        <p>Please log in to view your information</p>
                    )}
                    <button className="custom-button" type="button" onClick={() => navigate("/member/mypage")}>마이페이지 화면으로 →</button>
                </div>
            </main>
        </React.Fragment>
    );
}

export default MyInfo;
