import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import store from './Store';
import Menu from "../Menu";
import styles from '../css/base.css'

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
                <h1>사용자 정보</h1>
                {memberInfo ? (
                    <form>
                        <p style={styles.contentContainer}>ID: {memberInfo.mem_id}</p>
                        <p style={styles.contentContainer}>PW: {memberInfo.mem_pw}</p>
                        <p style={styles.contentContainer}>Name: {memberInfo.nickname}</p>
                        <p style={styles.contentContainer}>도/특별시: {memberInfo.region}</p>
                        <p style={styles.contentContainer}>시/군: {memberInfo.county_district}</p>
                    </form>
                ) : (
                    <p>Please log in to view your information</p>
                )}
                <hr/>
                <button type="button" onClick={() => navigate("/member/mypage")}>마이페이지 화면으로</button>
            </main>
        </React.Fragment>
    );
}

export default MyInfo;
