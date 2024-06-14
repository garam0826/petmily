import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../css/base.css";
import Menu from "../Menu";
import "../css/recommend.css"

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
                                        }}> 회원가입 </span>
                                    </div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}><br/>저희는 회원님의 취향 정보를 바탕으로 강아지를 추천합니다.<br/>계정이 없으신 분은 회원가입 부탁드리겠습니다.</span></span>
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
                <form style={{marginTop: '10px'}} className="form">
                    <div style={{width: '75%'}} className="wrapper">
                        <label className="contentContainer_signup">
                            Id:
                            <input className="input" type="text" value={id} onChange={(e) => setId(e.target.value)}/>
                        </label>
                    </div>
                    <div style={{width: '75%'}} className="wrapper">
                        <label className="contentContainer_signup">
                            Password:
                            <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                    </div>
                    <div style={{width: '75%'}} className="wrapper">
                        <label className="contentContainer_signup">
                            nickname:
                            <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        </label>
                    </div>
                    <div style={{width: '75%'}} className="wrapper">
                        <label className="contentContainer_signup">
                            email:
                            <input className="input" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                    </div>
                    <div style={{width: '75%'}} className="wrapper">
                        <label className="contentContainer_signup" htmlFor="region">Region:
                            <select className="input" id="region" onChange={handleRegionChange}>
                                <option value="">Select Region</option>
                                {regionList.map((region) => (
                                    <option key={region.reg_code} value={region.reg_name}>{region.reg_name}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div style={{width: '75%'}} className="wrapper">
                        <label className="contentContainer_signup" htmlFor="district">District:
                            <select className="input" id="district" onChange={handleDistrictChange}>
                                <option value="">Select District</option>
                                {districtList.map((district) => (
                                    <option key={district.dist_code}
                                            value={district.dist_name}>{district.dist_name}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                </form>
                <button className="button" onClick={handleSignUp}>Signup</button>
            </main>
        </React.Fragment>
    );
}

export default Signup;
