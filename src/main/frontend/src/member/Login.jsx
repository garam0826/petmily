import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './Reducer'; // Assuming the path to your sessionReducer file
import { useNavigate } from 'react-router-dom';
import styles from "../css/base.css"
import Menu from "../Menu";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const memberInfo = {
            mem_id: username,
            mem_pw: password
        };

        axios.post('/member/Login', memberInfo)
            .then(response => {
                console.log(response.data);
                dispatch(login(memberInfo)); // Dispatching login action with user data
                alert('로그인 성공!');
                navigate('/main');
            })
            .catch(error => {
                console.error("Login failed: ", error);
                alert('로그인 실패!'+error);
            });
    };

    return (
        <React.Fragment>
            <header>
                <Menu />
            </header>
            <main>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <button type="submit">Login</button>
                </form>
                <hr/>
                <button onClick={() => navigate("/member/searchid")}> 아이디 찾기 >></button>
                <button onClick={() => navigate("/member/signup")}> 회원 가입 >></button>
            </main>
        </React.Fragment>
    );
}

export default Login;
