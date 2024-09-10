import React, { useState } from 'react';
import axios from 'axios';
import '../css/keywordRec.css';
import Menu from "../Menu";
import {useNavigate} from "react-router-dom";

const personalityKeywords = [
    '경계하는', '긍정적인', '다정한/친근한', '단호한', '똑똑한', '모험적인', '민감한', '밝은', '뻔뻔한', '사교적인',
    '성실한', '순응하는', '용감한', '자유분방한', '재미있는', '적극적인', '적응성 있는', '주의 깊은', '차분한', '호기심 많은'
];

const behaviorKeywords = [
    '민첩한', '위엄 있는', '인내심 있는', '자기 주장이 강한', '자부심 있는', '자신감 있는', '자연스러운', '정중한', '책임감 있는',
    '충성스러운', '친절한', '카리스마 있는', '협조적인', '활기찬', '활동적인'
];

function Keyword() {
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    //const [DesertionNos, setDesertionNos] = useState([]);
    const navigate = useNavigate();

    const handleKeyword = (keyword) => {
        setSelectedKeywords((prev) => {
            if (prev.includes(keyword)) {
                return prev.filter((k) => k !== keyword);
            } else {
                if (prev.length < 3) {
                    return [...prev, keyword];
                } else {
                    alert('키워드 3개까지 선택 가능합니다.');
                    return prev;
                }
            }
        });
    };

    const handleSubmit = () => {
        if (selectedKeywords.length !== 3) {
            alert('키워드 3개를 선택하셔야 합니다.');
            return;
        }

        // 첫 번째 요청: 한국어 키워드를 영단어로 변환
        axios.post('/api/animal/translateKeywords', selectedKeywords)
            .then(response => {
                const engKeywords = response.data;
                // 두 번째 요청: 영단어 키워드로 desertionNo 5개 가져오기
                return axios.post('/api/animal/keyword', engKeywords);
            })
            .then(response => {
                const desertionNos = response.data;
                console.log('Desertion No:', desertionNos);
                navigate("/recommend/keyword/result", { state: { desertionNos }});
            })
            .catch(error => {
                console.error('Error processing keywords:', error);
            });
    };

    return (
        <div>
            <header>
                <Menu />
                <menu>
                    <div className="keyword-container">
                        <h2>키워드 추천</h2>
                        <div className="keyword-section">
                            <h3>성격</h3>
                            <div className="keyword-box">
                                {personalityKeywords.map((keyword, index) => (
                                    <button
                                        key={index}
                                        className={`keyword-button ${selectedKeywords.includes(keyword) ? 'selected' : ''}`}
                                        onClick={() => handleKeyword(keyword)}
                                    >
                                        {keyword}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <hr/>
                        <div className="keyword-section">
                            <h3>행동</h3>
                            <div className="keyword-box">
                                {behaviorKeywords.map((keyword, index) => (
                                    <button
                                        key={index}
                                        className={`keyword-button ${selectedKeywords.includes(keyword) ? 'selected' : ''}`}
                                        onClick={() => handleKeyword(keyword)}
                                    >
                                        {keyword}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button onClick={handleSubmit} className="submit-button">추천 결과 보기</button>
                    </div>
                </menu>
            </header>
        </div>
    );
}

export default Keyword;