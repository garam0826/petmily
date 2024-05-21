import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from "../Menu";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/search.css";
import buttonsytle from "../css/member.css";
import "../css/menu.css"
import styles from "../css/recommend.css"
import store from "../member/Store";

const formatDate = (dateString) => {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${year}년 ${month}월 ${day}일`;
};

const AnimalInfo = () => {
    const [animalInfos, setAnimalInfos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [analysisloading, setAnalysisloading] = useState(false);
    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [kind, setKind] = useState('');
    const [uprCd, setUprCd] = useState('');
    const [orgCd, setOrgCd] = useState('');
    const [analysisResults, setAnalysisResults] = useState([]);

    const addAnalysisResult = (newResult) => {
        setAnalysisResults(prevAnalysisResults => [...prevAnalysisResults, newResult]);
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(`/api/animal/info?startDate=${startDate}&endDate=${endDate}&kind=${kind}&uprCd=${uprCd}&orgCd=${orgCd}`);
            setAnimalInfos(response.data);
            for (const animalInfo of response.data) {
                await handleAnalysis(animalInfo.desertionNo, animalInfo.popfile);
            }
        } catch (error) {
            console.error('Error fetching animal info:', error);
            setError(error);
        }
        setLoading(false);
    };

    const handleAnalysis = async (desertionNo, imageUrl) => {
        try {
            setAnalysisloading(true);
            const response = await axios.get(`/api/animal/analyze?desertionNo=${desertionNo}&popfile=${imageUrl}`);
            addAnalysisResult(response.data);
            setError(null);
        } catch (error) {
            console.error('Error analyzing image:', error);
            setError('An error occurred while analyzing the image.');
            addAnalysisResult('error');
        }
        setAnalysisloading(false);
    };

    const state = store.getState();
    const navigate = useNavigate();

    const userId = state.isLoggedIn ? state.userData.mem_id : null;
    const currentTime = new Date().toISOString();
    const { idx } = useParams();

    const addFavorite = (desertionNo) => {
        axios.post(`/favorites/add?memId=${userId}&desertionNo=${desertionNo}`, {
            mem_id: userId,
            desertionNo: desertionNo,
            created_at: currentTime,
        })
            .then(response => {
                console.log("Favorite added successfully");
            })
            .catch(error => {
                console.error("Error adding favorite: ", error);
            });
    };

    return (
        <div>
            <header>
                <Menu />
            </header>
            <main>
                <div data-case="text79" className="userEL15637124">
                    <div style={styles.container}>
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
                                        style={{fontFamily: "'Seoul Namsan'", fontSize: '30px'}}>유기견 검색</span>
                                    </div>
                                    <div><span className="fsize13"><span style={{
                                        color: 'rgb(138, 139, 142)',
                                        fontFamily: "'Nanum Barun Gothic'"
                                    }}>​</span></span></div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}>공고 시작일, 종료일, 종료, 지역(도/특별시), (시/군)으로 옵션을 선택하여 검색하실 수 있습니다.</span></span>
                                    </div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}>(사진 위에 마우스를 올리면, 더 자세한 정보를 보실 수 있습니다.)<br/><br/></span></span>
                                    </div>
                                    <hr className="fr-hr"
                                        style={{borderBottom: '2px solid #d6d7d8', width: '35px', margin: '0 auto'}}
                                        align="center"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {state.isLoggedIn ? (
                    <div>
                        <div className="container">
                            <div className="contentContainer">
                                <label>공고 시작일: </label>
                                <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                            </div>
                            <div className="contentContainer">
                                <label>공고 종료일: </label>
                                <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                            </div>
                            <div className="contentContainer">
                                <label>품종: </label>
                                <input type="text" value={kind} onChange={(e) => setKind(e.target.value)}/>
                            </div>
                            <div className="contentContainer">
                                <label>지역(도/특별시): </label>
                                <input type="text" value={uprCd} onChange={(e) => setUprCd(e.target.value)}/>
                            </div>
                            <div className="contentContainer">
                                <label>지역(시/군): </label>
                                <input type="text" value={orgCd} onChange={(e) => setOrgCd(e.target.value)}/>
                            </div>
                            <button onClick={fetchData} style={{width: '350px'}}>Fetch Animal Info</button>
                        </div>
                        {animalInfos.length === 0 && !loading && !error && <div>No data available</div>}
                        <div className="grid-container">
                            {animalInfos.map((animalInfo, index) => (
                                <div className="card" key={index}>
                                    <div className="card-image">
                                        <img src={animalInfo.popfile} alt="Animal"/>
                                    </div>
                                    <div className="card-content">
                                    </div>
                                    {analysisResults.map((analysisresult, index) => (
                                        <div key={index}
                                             className={analysisresult.desertionNo === animalInfo.desertionNo ? "analysis-info" : ""}>
                                            {analysisresult.desertionNo === animalInfo.desertionNo && (
                                                <div>
                                                    <p>[ 품종 비율 1순위
                                                        ]<br/>{analysisresult.className1} ({analysisresult.probability1.toFixed(2)}%)
                                                    </p>
                                                    <p>[ 품종 비율 2순위
                                                        ]<br/>{analysisresult.className2} ({analysisresult.probability2.toFixed(2)}%)
                                                    </p>
                                                    <p>[ 품종 비율 3순위
                                                        ]<br/>{analysisresult.className3} ({analysisresult.probability3.toFixed(2)}%)
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <button onClick={() => addFavorite(animalInfo.desertionNo)}
                                            style={{width: '100%'}}>찜 추가
                                    </button>
                                    <div className="analysis-results">
                                        <br/>
                                        {/* 확인용 <p>유기 번호: {animalInfos[match.desertionNo].desertionNo}</p>*/}
                                        <p>발견 날짜: {formatDate(animalInfo.happenDt)}</p>
                                        <p>발견 장소: {animalInfo.happenPlace}</p>
                                        <p>나이: {animalInfo.age}</p>
                                        <p>무게: {animalInfo.weight}</p>
                                        <p>공고 시작 날짜: {formatDate(animalInfo.noticeSdt)}</p>
                                        <p>공고 종료 날짜: {formatDate(animalInfo.noticeEdt)}</p>
                                        <p>성별: {animalInfo.sexCd}</p>
                                        <p>중성화 여부: {animalInfo.neuterYn}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {loading && <div>Loading...</div>}
                        {error && <div>Error: {error.message}</div>}
                    </div>
                ) : (
                    <div>
                        <h2>(현재 찜 기능으로 인해) 해당 화면은 로그인이 필요한 화면입니다.</h2>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <button className="custom-button" onClick={() => navigate("/member/SignUp")}>회원가입 >
                            </button>
                            <button className="custom-button" onClick={() => navigate("/member/login")}>로그인 >
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AnimalInfo;
