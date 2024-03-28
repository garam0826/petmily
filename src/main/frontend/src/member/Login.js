/*
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './Reducer'; // Assuming the path to your sessionReducer file
import { useNavigate } from 'react-router-dom';

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

        axios.post('/member/login', memberInfo)
            .then(response => {
                console.log(response.data);
                dispatch(login(memberInfo)); // Dispatching login action with user data
                alert('로그인 성공!');
                navigate('/member/mypage');
            })
            .catch(error => {
                console.error("Login failed: ", error);
                alert('로그인 실패!'+error);
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button type="submit">Login</button>
            </form>
            <hr/>
            <button onClick={() => navigate("/member/searchid")}> 아이디 찾기 >> </button>
        </div>
    );
}

export default Login;
*/
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './Reducer'; // Assuming the path to your sessionReducer file
import { useNavigate } from 'react-router-dom';

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

        axios.post('/member/login', memberInfo)
            .then(response => {
                console.log(response.data);
                // Dispatching actual user data received from the server
                dispatch(login(response.data));
                alert('로그인 성공!');
                // Redirect to the appropriate path after successful login
                navigate('/main'); // Change the redirect path if necessary
            })
            .catch(error => {
                console.error("Login failed: ", error);
                // Display user-friendly error message
                alert('로그인 실패! 아이디 또는 비밀번호가 잘못되었습니다.');
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button type="submit">Login</button>
            </form>
            <hr/>
            <button onClick={() => navigate("/member/searchid")}> 아이디 찾기 >> </button>
        </div>
    );
}

export default Login;

