import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styles from '../css/base.css';
import Menu from "../Menu";

function Signup() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [select_region, setRegion] = useState('');
    const [country_district, setCountry_district] = useState('');

    const [regionList, setRegionList] = useState([]);
    const [districtList, setDistrictList] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchRegionList = async () => {
            try {
                const response = await axios.get('/member/SignUp');
                setRegionList(response.data);
            } catch (error) {
                console.error('Error fetching region list:', error);
            }
        };

        fetchRegionList();
    }, []);

    const handleRegionChange = async (event) => {
        const selectedRegion = event.target.value;
        setSelectedRegion(selectedRegion);
        setRegion(selectedRegion);
        try {
            const response = await axios.get(`/member/SearchDistrict?reg_name=${selectedRegion}`);
            setDistrictList(response.data);
        } catch (error) {
            console.error('Error fetching district list:', error);
        }
    };

    const handleDistrictChange = (event) => {
        const selectedDistrict = event.target.value;
        setCountry_district(selectedDistrict);
    };

    const handleSignUp = async () => {
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
                            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                        </label>
                    </div>
                    <div style={styles.wrapper}>
                        <label style={styles.contentContainer}>
                            Password:
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <div style={styles.wrapper}>
                        <label style={styles.contentContainer}>
                            nickname:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                    </div>
                    <div style={styles.wrapper}>
                        <label style={styles.contentContainer}>
                            email:
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div style={styles.wrapper}>
                        <label htmlFor="region">Region:</label>
                        <select id="region" onChange={handleRegionChange}>
                            <option value="">Select Region</option>
                            {regionList.map((region) => (
                                <option key={region.reg_code} value={region.reg_name}>{region.reg_name}</option>
                            ))}
                        </select>
                    </div>
                    <div style={styles.wrapper}>
                        <label htmlFor="district">District:</label>
                        <select id="district" onChange={handleDistrictChange}>
                            <option value="">Select District</option>
                            {districtList.map((district) => (
                                <option key={district.dist_code} value={district.dist_name}>{district.dist_name}</option>
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
