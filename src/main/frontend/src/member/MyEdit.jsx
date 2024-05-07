import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import store from "./Store";
import Menu from "../Menu";

function MyEdit() {
    const [error, setError] = useState(null);
    const [newMemberInfo, setNewMemberInfo] = useState({
        mem_id: '',
        mem_pw: '',
        nickname: '',
        email: '',
        region: '',
        county_district: '',
        reg_date: '',
        edit_date: ''
    });
    const [updateMessage, setUpdateMessage] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const state = store.getState();
    const userId = state.isLoggedIn ? state.userData.mem_id : null;

    const styles = {
        wrapper: {
            margin: 8,
            padding: 8,
            display: "flex",
            flexDirection: "row",
            border: "1px solid grey",
            borderRadius: 16,
        },
        contentContainer: {
            marginLeft: 8,
            display: "flex",
            flexDirection: "colum",
            justifyContent: "center",
        }
    };

    // 입력받은 수정 정보 처리
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Update the new member info state based on input changes
        setNewMemberInfo(prevState => ({
            ...prevState,
            [name]: value
        }));

        console.log(newMemberInfo);
    };

    // 회원 정보 가져오기
    const fetchMemberInfo = async () => {
        try {
            const response = await axios.get(`/member/MyPage?mem_id=${userId}`);
            setNewMemberInfo(response.data);
            console.log(userId);
            setError(null);
        } catch (error) {
            setError('사용자 정보를 가져오는 중에 오류가 발생했습니다.');
        }
    };

    // 컴포넌트가 마운트될 때 회원 정보 가져오기
    useEffect(() => {
        fetchMemberInfo();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

    // 회원 정보 수정
    const handleUpdateMember = async () => {
        console.log(newMemberInfo);
        try {
            const response = await axios.put('/member/MyPage/Update', newMemberInfo);
            alert('회원정보 수정 성공!');
        } catch (error) {
            console.
            error('Error updating member info:', error);
            alert(error);
            setUpdateMessage('회원정보 수정 실패');
        }
    };

    return (
        <div>
            <Menu />
            <form>
                <h2>회원 정보 수정</h2>
                <div style={styles.wrapper}>
                    <label style={styles.contentContainer}>
                        PW:
                        <input type="text" placeholder="새 비번" name="mem_pw" value={newMemberInfo.mem_pw}
                               onChange={handleInputChange}/>
                    </label>
                </div>
                <div style={styles.wrapper}>
                    <label style={styles.contentContainer}>
                        Nick Name:
                        <input type="text" placeholder="새 닉네임" name="nickname" value={newMemberInfo.nickname}
                               onChange={handleInputChange}/>
                    </label>
                </div>
                <div style={styles.wrapper}>
                    <label style={styles.contentContainer}>
                        Email:
                        <input type="text" placeholder="새 이메일" name="email" value={newMemberInfo.email}
                               onChange={handleInputChange}/>
                    </label>
                </div>
                <div style={styles.wrapper}>
                    <label style={styles.contentContainer}>
                        Region:
                        <input type="text" placeholder="새 주소(도)" name="region" value={newMemberInfo.region}
                               onChange={handleInputChange}/>
                    </label>
                </div>
                <div style={styles.wrapper}>
                    <label style={styles.contentContainer}>
                        county_district:
                        <input type="text" placeholder="새 주소(도)" name="county_district" value={newMemberInfo.county_district}
                               onChange={handleInputChange}/>
                    </label>
                </div>
                <button onClick={handleUpdateMember}>수정</button>
                {updateMessage && <p>{updateMessage}</p>}

            </form>
            <form>
                {message && <p>{message}</p>}
                {error && <p>{error}</p>}
            </form>
            <hr/>
            <button type="button" onClick={() => navigate("/member/mypage")}>mypage로</button>
        </div>
    );
}

export default MyEdit;
