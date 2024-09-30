import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Menu from "../Menu";
import "../css/base.css";
import "../css/recommend.css"
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
function FindId() {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleFindId = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/member/SearchID', {
                nickname: nickname,
                email: email
            });
            setSearchResult(response.data);
        } catch (error) {
            setError('이름과 생년월일을 다시 확인해보세요');
            console.error(error);
        }
    };

    return (
        <React.Fragment>
            <header>
                <Menu/>
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
                                        }}> 아이디 찾기 </span>
                                    </div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}><br/>아이디를 잊으셨다면, 닉네임과 이메일로 아이디를 찾아보세요!</span></span>
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
                <form className="form">
                    <TextField id="standard-basic" label="닉네임" variant="standard" value={nickname} style={{width: '250px', height: 'auto'}} onChange={(e) => setNickname(e.target.value)}/> <br/>
                    <TextField id="standard-basic" label="이메일" variant="standard" value={email} style={{width: '250px', height: 'auto'}} onChange={(e) => setEmail(e.target.value)}/>
                    <Button variant="contained" style={{marginTop: '20px', width: '300px', marginBottom: '10px'}} onClick={handleFindId}>조회</Button>
                    {searchResult ? (
                        <div>
                            <hr/><br/>
                            <p>찾은 아이디: {searchResult}</p>
                            <Button variant="contained" style={{marginTop: '20px', width: '300px'}} onClick={() => navigate("/member/login")}>로그인 화면 >></Button>
                        </div>
                    ) : (
                        <div>
                            {error && <p>{error}</p>}
                        </div>
                    )}

                </form>
            </main>
        </React.Fragment>
    );
}

export default FindId;
