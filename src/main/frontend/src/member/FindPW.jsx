import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Menu from "../Menu";
import "../css/base.css";
import "../css/recommend.css"

function FindPW() {
    const [mem_id, setMem_id] = useState('');
    const [email, setEmail] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleFindId = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/member/SearchPW', {
                mem_id: mem_id,
                email: email
            });
            setSearchResult(response.data);
        } catch (error) {
            setError('아이디와 이메일을 다시 확인해보세요');
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
                                        }}> 비밀번호 찾기 </span>
                                    </div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}><br/>비밀번호를 잊으셨다면, 아이디와 이메일로 비밀번호를 찾아보세요!</span></span>
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
                    <label className="contentContainer">
                        ID:
                        <input className="input" type="text" placeholder="mem_id" value={mem_id}
                               onChange={(e) => setMem_id(e.target.value)}/>
                    </label>
                    <br/>
                    <label className="contentContainer">
                        이메일:
                        <input className="input" type="text" placeholder="e-mail" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <button className="button" onClick={handleFindId}>조회</button>
                    {searchResult ? (
                        <div>
                            <hr/>
                            <p>찾은 비밀번호: {searchResult}</p>
                            <button className="button" onClick={() => navigate("/member/login")}> 로그인 화면 >></button>
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

export default FindPW;
