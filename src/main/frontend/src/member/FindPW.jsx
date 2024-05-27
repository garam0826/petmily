import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Menu from "../Menu";
import styles from "../css/base.css";

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
                <h1>비밀번호 찾기</h1>
                <form>
                    <label style={styles.contentContainer}>
                        ID:
                        <input type="text" placeholder="mem_id" value={mem_id}
                               onChange={(e) => setMem_id(e.target.value)}/>
                    </label>
                    <label style={styles.contentContainer}>
                        이메일:
                        <input type="text" placeholder="e-mail" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <button onClick={handleFindId}>조회</button>
                    {searchResult ? (
                        <div>
                            <hr/>
                            <p>찾은 비밀번호: {searchResult}</p>
                            <button onClick={() => navigate("/member/login")}> 로그인 화면 >></button>
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
