import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Menu from "../Menu";
import styles from "../css/base.css";

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
                <h1>아이디 찾기</h1>
                <form>
                    <label style={styles.contentContainer}>
                        닉네임:
                        <input type="text" placeholder="Nickname" value={nickname}
                               onChange={(e) => setNickname(e.target.value)}/>
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
                            <p>찾은 아이디: {searchResult}</p>
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

export default FindId;
