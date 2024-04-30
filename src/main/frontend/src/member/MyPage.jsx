import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './Reducer'; // Assuming the path to your sessionReducer file
import {useNavigate} from "react-router-dom";
import store from './Store';
import axios from "axios";

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
            if (response.status === 200) {
                alert('회원 탈퇴 성공!');
                dispatch(logout());
                navigate(("/main"));
            } else {
                alert('회원 탈퇴에 실패했습니다.');
            }
        } catch (error) {
            alert('회원 탈퇴에 실패했습니다.');
        }
    };

    return (
        <div>
            <h1>My Page</h1>
            <p>Welcome, {userId}님!</p>
            <hr/>
            <div>
                <form onSubmit={() => navigate("/member/mypage/myinfo")}>
                    <h2>내 정보 확인하기</h2>
                    <button type="submit">정보 확인</button>
                </form>
            </div>
            <hr/>
            <div>
                <h2>회원정보 수정하기</h2>
                <button onClick={() => navigate("/member/mypage/myedit")}>edit</button>
            </div>
            <hr/>
            <div>
                <h2>회원정보 탈퇴하기</h2>
                <button onClick={handleResign}>resign</button>
            </div>
            <hr/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default MyPage;
