import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from "../Menu";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import styles from "../css/search.css";
import buttonsytle from "../css/member.css"
import store from "../member/Store";

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

    //const [desertionNo, setDesertionNo] = useState('');
    //const [imageUrl, setImageUrl] = useState('');
    const [analysisResults, setAnalysisResults] = useState([]);

    // 이전 상태를 가져와서 새로운 값을 추가하는 함수
    const addAnalysisResult = (newResult) => {
        setAnalysisResults(prevAnalysisResults => [...prevAnalysisResults, newResult]);
    }

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
            console.log(desertionNo, true);
            console.log(desertionNo, imageUrl);
            const response = await axios.get(`/api/animal/analyze?desertionNo=${desertionNo}&popfile=${imageUrl}`);
            // 새로운 값을 analysisResults에 추가
            addAnalysisResult(response.data);
            console.log(response.data);
            setError(null);
        } catch (error) {
            console.error('Error analyzing image:', error);
            setError('An error occurred while analyzing the image.');

            addAnalysisResult('error');
        }
        setAnalysisloading(false);
        console.log(desertionNo, false);
    };

    //찜 기능
    const state = store.getState();
    const navigate = useNavigate();
    

    // 오류로 인행, store 기능으로 수정함
    const userId = state.isLoggedIn ? state.userData.mem_id : null;  //store 이용
    /*
    const userData = useSelector(state => state.userData); // 사용자 데이터를 스토어에서 가져옵니다.
    const userId = userData.mem_id; // 사용자 아이디를 추출합니다.
    */
    
    const currentTime = new Date().toISOString();
    const { idx } = useParams();

    // 로그인 유무에 따라 다르게 나오도록 만들어야함.
    const addFavorite = (desertionNo) => {
        axios.post(`/favorites/add?memId=${userId}&desertionNo=${desertionNo}`, {
            mem_id: userId,
            desertionNo: desertionNo,
            created_at: currentTime,
        })
            .then(response => {
                console.log("Favorite added successfully");
                // 찜 추가 후 찜 목록 다시 불러오기
                //getFavorites(userId);
            })
            .catch(error => {
                console.error("Error adding favorite: ", error);
            });
    };

    return (
        <React.Fragment>
            <header>
                <Menu />
            </header>
            <main>
                <h1> 유기견 검색 </h1>
                {state.isLoggedIn ? (
                    <div>
                        {loading && <div>Loading...</div>}
                        {error && <div>Error: {error.message}</div>}
                        <div className="container">
                            <div className="contentContainer">
                                <label>Start Date:</label>
                                <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                            </div>
                            <div className="contentContainer">
                                <label>End Date:</label>
                                <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                            </div>
                            <div className="contentContainer">
                                <label>Kind:</label>
                                <input type="text" value={kind} onChange={(e) => setKind(e.target.value)}/>
                            </div>
                            <div className="contentContainer">
                                <label>UprCd:</label>
                                <input type="text" value={uprCd} onChange={(e) => setUprCd(e.target.value)}/>
                            </div>
                            <div className="contentContainer">
                                <label>OrgCd:</label>
                                <input type="text" value={orgCd} onChange={(e) => setOrgCd(e.target.value)}/>
                            </div>
                            <button onClick={fetchData}>Fetch Animal Info</button>
                        </div>
                        {animalInfos.length === 0 && !loading && !error && <div>No data available</div>}
                        <ul>
                            {animalInfos.map((animalInfo, index) => (
                                <li key={index}>
                                    <hr/>
                                    <p>Desertion No: {animalInfo.desertionNo}</p>
                                    <p>File Name: <img src={animalInfo.filename} alt="Animal"/></p>
                                    <p>Happen Date: {animalInfo.happenDt}</p>
                                    <p>Happen Place: {animalInfo.happenPlace}</p>
                                    <p>KindCd: {animalInfo.kindCd}</p>
                                    <p>ColorCd: {animalInfo.colorCd}</p>
                                    <p>Age: {animalInfo.age}</p>
                                    <p>Weight: {animalInfo.weight}</p>
                                    <p>Notice No: {animalInfo.noticeNo}</p>
                                    <p>Notice Start Date: {animalInfo.noticeSdt}</p>
                                    <p>Notice End Date: {animalInfo.noticeEdt}</p>
                                    <p>Popfile: <img src={animalInfo.popfile} alt="Animal"/></p>
                                    <p>Popfile 경로: {animalInfo.popfile}</p>
                                    <p>Process State: {animalInfo.processState}</p>
                                    <p>SexCd: {animalInfo.sexCd}</p>
                                    <p>NeuterYn: {animalInfo.neuterYn}</p>
                                    <p>Special Mark: {animalInfo.specialMark}</p>
                                    <p>Care Name: {animalInfo.careNm}</p>
                                    <p>Care Tel: {animalInfo.careTel}</p>
                                    <p>Care Address: {animalInfo.careAddr}</p>
                                    <p>Org Name: {animalInfo.orgNm}</p>
                                    <p>Charge Name: {animalInfo.chargeNm}</p>
                                    <p>Office Tel: {animalInfo.officetel}</p>
                                    <button onClick={() => addFavorite(animalInfo.desertionNo)}>찜 추가</button>
                                    <hr/>
                                    {analysisResults.map((analysisresult, index) => (
                                        <div>
                                            {analysisresult.desertionNo === animalInfo.desertionNo && (
                                                <div>
                                                    <p>[1] ClassName: {analysisresult.className1} /
                                                        Probability: {analysisresult.probability1}</p>
                                                    <p>[2] ClassName: {analysisresult.className2} /
                                                        Probability: {analysisresult.probability2}</p>
                                                    <p>[3] ClassName: {analysisresult.className3} /
                                                        Probability: {analysisresult.probability3}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div>
                        <h2>(현재 찜 기능으로 인해) 해당 화면은 로그인이 필요한 화면입니다.</h2>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <button className="signup custom-button" onClick={() => navigate("/member/SignUp")}>회원가입 >
                            </button>
                            <button className="login custom-button" onClick={() => navigate("/member/login")}>로그인 >
                            </button>

                        </div>

                    </div>
                )}
            </main>
        </React.Fragment>
    );
};

export default AnimalInfo;

/*

                        <div>
                            <button onClick={() => addFavorite(desertionNo)}>찜 추가</button>
                        </div>

 */