import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Menu from "../Menu";

function Signup() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [region, setRegion] = useState('');
    const [country_district, setCountry_district] = useState('');


    const navigate = useNavigate();

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
    const handleSignUp = async () => {
        // 회원 정보 객체 생성
        const memberData = {
            mem_id: id,
            mem_pw: password,
            nickname: name,
            email: email,
            region: region,
            county_district: country_district
        };

        try {
            const response = await axios.post('/member/SignUp', memberData);
            if (response.status === 200) {
                alert('회원가입 성공!');
                navigate("/member/login");
            } else {
                alert('회원가입에 실패했습니다.');
            }
        } catch (error) {
            console.error('회원가입 오류:', error);
            alert('회원가입에 실패했습니다.');
        }
    };

    return (
        <div>
            <Menu />
            <h2>Signup</h2>
            <form>
                <div style={styles.wrapper}>
                    <label style={styles.contentContainer}>
                        Id:
                        <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
                    </label>
                </div>
                <div style={styles.wrapper}>
                    <label style={styles.contentContainer}>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                </div>
                <div style={styles.wrapper}>
                    <label style={styles.contentContainer}>
                        nickname:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                </div>
                <div style={styles.wrapper}>
                    <label style={styles.contentContainer}>
                        email:
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                </div>
                <div style={styles.wrapper}>
                    <label style={styles.contentContainer}>
                        Region (도/특별시):
                        <input type="text" value={region} onChange={(e) => setRegion(e.target.value)}/>
                    </label>
                </div>
                <div style={styles.wrapper}>
                    <label style={styles.contentContainer}>
                        Country_district (시/군):
                        <input type="text" value={country_district}
                               onChange={(e) => setCountry_district(e.target.value)}/>
                    </label>
                </div>
                <button onClick={handleSignUp}>Signup</button>
            </form>
        </div>
    );
}

export default Signup;