import React, { useState, useEffect } from 'react';
import axios from 'axios';
import store from "../member/Store";
import Menu from "../Menu";
import "../css/recommend.css"

import '../css/menu.css';
import '../css/result.css';

const Recommend_Result = ({ matches, loading, error }) => {
    const state = store.getState();
    const userId = state.isLoggedIn ? state.userData.mem_id : null;

    //const [matches, setMatches] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);

    const [animalInfos, setAnimalInfos] = useState({});
    const [analysisResults, setAnalysisResults] = useState({});
    const [fetchDataError, setFetchDataError] = useState(null);

    // 매치된 반려동물 정보를 가져오는 useEffect
    useEffect(() => {
        const fetchData = async (desertionNo) => {
            try {
                const response = await axios.get(`/api/animal/${desertionNo}`);
                setAnimalInfos(prevState => ({
                    ...prevState,
                    [desertionNo]: response.data
                }));
                await handleAnalysis(desertionNo, response.data.popfile);
            } catch (error) {
                console.error('Error fetching animal info:', error);
                setFetchDataError('Error fetching animal info');
            }
        };

        matches.forEach(match => {
            if (!animalInfos[match.desertionNo]) {
                fetchData(match.desertionNo);
            }
        });
    }, [matches]);

    const handleAnalysis = async (desertionNo, imageUrl) => {
        try {
            const response = await axios.get(`/api/animal/analyze?desertionNo=${desertionNo}&popfile=${imageUrl}`);
            setAnalysisResults(prevState => ({
                ...prevState,
                [desertionNo]: response.data
            }));
        } catch (error) {
            console.error('Error analyzing image:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (fetchDataError) {
        return <div>{fetchDataError}</div>;
    }

    const formatDate = (dateStr) => {
        if (!dateStr) return '날짜 정보 없음'; // dateStr이 정의되지 않은 경우 대체 문자열 반환
        const year = dateStr.substring(0, 4);
        const month = dateStr.substring(4, 6);
        const day = dateStr.substring(6, 8);
        return `${year}년 ${parseInt(month, 10)}월 ${parseInt(day, 10)}일`;
    };

    return (
        <div>
            <main className="container">
                <div data-case="text79" className="userEL15637124">
                    <div className="container">
                        <div className="row" data-matrix-loop="true" data-matrix-column="1">
                            <div className="col-xs-12 col-sm-12 col-md-12 item">
                                <div className="cl_caption" data-edit="true" data-selector=".cl_caption">
                                    <hr className="fr-hr"
                                        style={{borderBottom: '2px solid #d6d7d8', width: '35px', margin: '0 auto'}}
                                        align="center"/>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}><br/></span></span>
                                    </div>
                                    <div><span
                                        style={{fontFamily: "'Seoul Namsan'", fontSize: '30px'}}>유기견 추천 결과</span>
                                    </div>
                                    <div><span className="fsize13"><span style={{
                                        color: 'rgb(138, 139, 142)',
                                        fontFamily: "'Nanum Barun Gothic'"
                                    }}>​</span></span></div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}>사용자의 취향에 맞는 유기견 5마리입니다.</span></span>
                                    </div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}>(사진 위에 마우스를 올리면, 더 자세한 정보를 보실 수 있습니다.)<br/><br/></span></span>
                                    </div>
                                    <hr className="fr-hr"
                                        style={{borderBottom: '2px solid #d6d7d8', width: '35px', margin: '0 auto'}}
                                        align="center"/>
                                    <div><br/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {matches.length === 0 ? (
                    <div>No matches found</div>
                ) : (
                    <div className="grid-container">
                        {matches.map((match, index) => (
                            <div className="card" key={match.desertionNo}>
                                {animalInfos[match.desertionNo] && (
                                    <div>
                                        <img src={animalInfos[match.desertionNo].popfile} alt="Animal"/>
                                        {analysisResults[match.desertionNo] && (
                                            <div>
                                                <hr/>
                                                <p>[ 품종 비율 1순위 ]<br/>{analysisResults[match.desertionNo].className1}<br/>({analysisResults[match.desertionNo].probability1}%)</p>
                                                <p>[ 품종 비율 2순위 ]<br/>{analysisResults[match.desertionNo].className2}<br/>({analysisResults[match.desertionNo].probability2}%)</p>
                                                <p>[ 품종 비율 3순위 ]<br/>{analysisResults[match.desertionNo].className3}<br/>({analysisResults[match.desertionNo].probability3}%)</p>
                                            </div>
                                        )}
                                        <div className="analysis-results">
                                            <br/>
                                            {/* 확인용 <p>유기 번호: {animalInfos[match.desertionNo].desertionNo}</p>*/}
                                            <p>나이: {animalInfos[match.desertionNo].age}</p>
                                            <p>무게: {animalInfos[match.desertionNo].weight}</p>
                                            <p>공고 시작 날짜: {formatDate(animalInfos[match.desertionNo].noticeSdt)}</p>
                                            <p>공고 종료 날짜: {formatDate(animalInfos[match.desertionNo].noticeEdt)}</p>
                                            <p>성별: {animalInfos[match.desertionNo].sexCd}</p>
                                            <p>중성화 여부: {animalInfos[match.desertionNo].neuterYn}</p>
                                            <p>특징: {animalInfos[match.desertionNo].specialMark}</p>
                                            <p>보호소 이름: {animalInfos[match.desertionNo].careNm}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Recommend_Result;
