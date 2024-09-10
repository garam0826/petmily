import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './Reducer'; // Assuming the path to your sessionReducer file
import { useNavigate } from 'react-router-dom';

import Menu from "../Menu";
import "../css/recommend.css"
import "../css/base.css"

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
                                        }}> 로그인 </span>
                                    </div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}><br/>"강아지를 사지 말고 입양합니다!"<br/>취향에 맞는 강아지를 만나고 싶으시다면 로그인 해주세요</span></span>
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
                <form style={{marginTop: '10px', marginBottom: '10px'}} className="form" onSubmit={handleSubmit}>
                    <label className="label">
                        Id:
                        <input className="input" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                    <br/>
                    <label className="label">
                        Password:
                        <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <button className="button_login" type="submit">Login</button>
                </form>
                <div style={{display: 'flex', justifyContent: 'center', gap: '0.1px'}}>
                    <button className="button_login" style={{marginRight: '15px'}}
                            onClick={() => navigate("/member/searchid")}> 아이디 찾기 >>
                    </button>
                    <button className="button_login" style={{marginLeft: '15px'}} onClick={() => navigate("/member/searchpw")}> 비밀번호 찾기 >>
                    </button>
                </div>
                <button className="button_login" onClick={() => navigate("/member/signup")}> 회원 가입 >></button>
            </main>
        </React.Fragment>
    );
}

export default Login;
