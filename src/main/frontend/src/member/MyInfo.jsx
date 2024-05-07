import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import store from './Store';
import Menu from "../Menu";

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
        <div>
            <Menu />
            {memberInfo ? (
                <div>
                    <h2>사용자 정보</h2>
                    <p>ID: {memberInfo.mem_id}</p>
                    <p>PW: {memberInfo.mem_pw}</p>
                    <p>Name: {memberInfo.nickname}</p>
                </div>
            ) : (
                <p>Please log in to view your information</p>
            )}
            <hr/>
            <button type="button" onClick={() => navigate("/member/mypage")}>마이페이지 화면으로</button>
        </div>
    );
}

export default MyInfo;
