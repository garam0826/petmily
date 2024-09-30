import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import store from "./Store";
import Menu from "../Menu";
import "../css/recommend.css"
import "../css/member.css"
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';

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

    const [select_region, setRegion] = useState('');
    const [country_district, setCountry_district] = useState('');
    const [regionList, setRegionList] = useState([]);
    const [districtList, setDistrictList] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');

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
        <React.Fragment>
            {/* <header>
                <Menu />
            </header> */}
            <main>
                {/*
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
                                        }}> 정보 수정 </span>
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
                */}
                <form className="form" style={{marginTop: '-15px'}}>
                    <h2>회원 정보 확인 및 수정</h2>
                    <TextField id="standard-basic" label="비밀번호" variant="standard" name="mem_pw"
                               value={newMemberInfo.mem_pw} style={{marginTop: '20px', width: '300px', height: 'auto'}}
                               onChange={handleInputChange}/>
                    <TextField id="standard-basic" label="닉네임" variant="standard" name="nickname"
                               value={newMemberInfo.nickname}
                               style={{marginTop: '20px', width: '300px', height: 'auto'}}
                               onChange={handleInputChange}/>
                    <TextField id="standard-basic" label="이메일" variant="standard" name="email"
                               value={newMemberInfo.email} style={{marginTop: '20px', width: '300px', height: 'auto'}}
                               onChange={handleInputChange}/>
                    <FormControl fullWidth style={{marginTop: '20px', width: '300px', height: 'auto'}}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            지역(도/특별시)
                        </InputLabel>
                        <NativeSelect
                            defaultValue={100}
                            onChange={handleRegionChange}
                        >
                            <option value={100}>{newMemberInfo.region}</option>
                            {regionList.map((region) => (
                                <option key={region.reg_code} value={region.reg_name}>{region.reg_name}</option>
                            ))}
                        </NativeSelect>
                    </FormControl>
                    <FormControl fullWidth style={{marginTop: '20px', width: '300px', height: 'auto'}}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            지역(시/군)
                        </InputLabel>
                        <NativeSelect
                            defaultValue={100}
                            onChange={handleDistrictChange}
                        >
                            <option value={100}>{newMemberInfo.county_district}</option>
                            {districtList.map((district) => (
                                <option key={district.dist_code}
                                        value={district.dist_name}>{district.dist_name}</option>
                            ))}
                        </NativeSelect>
                    </FormControl>
                    <Button variant="outlined" style={{marginTop: '20px', width: '300px'}} onClick={handleUpdateMember}>수정
                        완료하기</Button>
                </form>
                {updateMessage && <p>{updateMessage}</p>}

            </main>


        </React.Fragment>
    );
}

export default MyEdit;
