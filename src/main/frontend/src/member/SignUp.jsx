import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import styles from '../css/base.css'

import Menu from "../Menu";
function Signup() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [select_region, setRegion] = useState('');
    const [country_district, setCountry_district] = useState('');

    const [regionList, setRegionList] = useState([]);
    const [districtList, setDistrictList] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        // 페이지가 처음 로드될 때 지역 목록을 가져오는 함수
        const fetchRegionList = async () => {
            try {
                const response = await axios.get('/member/SignUp'); // 백엔드 SignUp 엔드포인트 호출
                setRegionList(response.data); // 가져온 데이터를 상태에 설정
            } catch (error) {
                console.error('Error fetching region list:', error);
            }
        };

        fetchRegionList(); // 함수 호출
    }, []); // 빈 배열을 전달하여 페이지가 처음 로드될 때만 실행되도록 설정

    const handleRegionChange = async (event) => {
        const selectedRegion = event.target.value; // 선택된 지역 이름 가져오기
        setSelectedRegion(selectedRegion); // 선택된 지역을 상태에 설정
        setRegion(selectedRegion);
        try {
            const response = await axios.get(`/member/SearchDistrict?reg_name=${selectedRegion}`); // 백엔드 searchDistrict 엔드포인트 호출
            setDistrictList(response.data); // 가져온 데이터를 상태에 설정
        } catch (error) {
            console.error('Error fetching district list:', error);
        }
    };

    const handleDistrictChange = async (event) => {
        const selectedDistrict = event.target.value; // 선택된 지역 이름 가져오기
        setCountry_district(selectedDistrict);
    };
    const handleSignUp = async () => {
        // 회원 정보 객체 생성
        const memberData = {
            mem_id: id,
            mem_pw: password,
            nickname: name,
            email: email,
            region: select_region,
            county_district: country_district
        };

        console.log(memberData);
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
        <React.Fragment>
            <header>
                <Menu />
            </header>
            <main>
                <h1>회원 가입</h1>
                <form>
                    <h2>회원 정보</h2>
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
                        <label htmlFor="region">Region:</label>
                        <select id="region" onChange={handleRegionChange}>
                            <option value="">Select Region</option>
                            {regionList.map((region) => (
                                <option key={select_region} value={region}>{region}</option>
                            ))}
                        </select>
                    </div>
                    <div style={styles.wrapper}>
                        <label htmlFor="district">District:</label>
                        <select id="district" onChange={handleDistrictChange}>
                            <option value="">Select District</option>
                            {districtList.map((district) => (
                                <option key={country_district}
                                        value={district.dist_name}>{district.dist_name}</option>
                            ))}
                        </select>
                    </div>
                </form>
                <button onClick={handleSignUp}>Signup</button>
            </main>
        </React.Fragment>
    );
}

export default Signup;