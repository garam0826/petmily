/*
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    /!*const [birth, setBirth] = useState('');
    const [phone, setPhone] = useState('');*!/
    const [email, setEmail] = useState("");
    const [region, setRegion] = useState('');
    const [county_district, setCounty_district] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const memberInfo = {
            mem_id: username,
            mem_pw: password,
            nickname: name,
            //birth : birth,
            //phone : phone,
            email : email,
            region: region,
            county_district: county_district,
            reg_date: '',
            edit_date: ''
        };

        axios.post('/member/SignUp', memberInfo)
            .then(response => {
                alert('회원가입 성공!');
                navigate("/member/login");
            })
            .catch(error => {
                console.error("Signup failed: ", error);
                alert('회원가입 실패');

            });
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <label>
                    name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                {/!*<label>
                    birth:
                    <input type="text" value={birth} onChange={(e) => setBirth(e.target.value)} />
                </label>
                <label>
                    phone:
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>*!/}
                <label>
                    email:
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    region:
                    <input type="text" value={region} onChange={(e) => setRegion(e.target.value)}/>
                </label>
                <label>
                    county_district:
                    <input type="text" value={region} onChange={(e) => setCounty_district(e.target.value)}/>
                </label>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;*/
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [region, setRegion] = useState('');
    const [countyDistrict, setCountyDistrict] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const memberInfo = {
            mem_id: username,
            mem_pw: password,
            nickname: name,
            email: email,
            region: region,
            county_district: countyDistrict,
            reg_date: new Date().toISOString(), // 현재 날짜와 시간을 문자열로 변환하여 저장
            edit_date: new Date().toISOString() // 현재 날짜와 시간을 문자열로 변환하여 저장
        };

        axios.post('/member/SignUp', memberInfo)
            .then(response => {
                alert('회원가입 성공!');
                navigate("/member/login");
            })
            .catch(error => {
                console.error("Signup failed: ", error);
                alert('회원가입 실패');
            });
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Region:
                    <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} />
                </label>
                <label>
                    County District:
                    <input type="text" value={countyDistrict} onChange={(e) => setCountyDistrict(e.target.value)} />
                </label>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;

