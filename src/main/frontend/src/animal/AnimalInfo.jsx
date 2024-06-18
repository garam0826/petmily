import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from "../Menu";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/search.css";
import buttonsytle from "../css/member.css";
import "../css/menu.css"
import styles from "../css/recommend.css" //멘트
import store from "../member/Store";
import Pagination from "../animal/Pagination"

const formatDate = (dateString) => {
    if (!dateString) return '';
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
    const [regionList, setRegionList] = useState([]);
    const [districtList, setDistrictList] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');

    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

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

    const fetchRandomAnimals = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get('/api/animal/random-desertionNos');
            const desertionNos = response.data;
            const animalInfoPromises = desertionNos.map(desertionNo => axios.get(`/api/animal/${desertionNo}`));
            const animalInfoResponses = await Promise.all(animalInfoPromises);
            const animalInfos = animalInfoResponses.map(res => res.data);
            setAnimalInfos(animalInfos);
            for (const animalInfo of animalInfos) {
                await handleAnalysis(animalInfo.desertionNo, animalInfo.popfile);
            }
        } catch (error) {
            console.error('Error fetching random animals:', error);
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchRandomAnimals();

        const fetchRegionList = async () => {
            try {
                const response = await axios.get('/api/animal/SlctReg_code');
                setRegionList(response.data);
            } catch (error) {
                console.error('Error fetching region list:', error);
            }
        };

        fetchRegionList();
    }, []);

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

    const handleRegionChange = async (event) => {
        const selectedRegion = event.target.value;
        setSelectedRegion(selectedRegion);
        setUprCd(selectedRegion);
        try {
            const response = await axios.get(`/api/animal/SlctDist_code?reg_name=${selectedRegion}`);
            setDistrictList(response.data);
        } catch (error) {
            console.error('Error fetching district list:', error);
        }
    };

    const handleDistrictChange = (event) => {
        const selectedDistrict = event.target.value;
        setOrgCd(selectedDistrict);
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
                alert("찜 목록에 담겼습니다!");
            })
            .catch(error => {
                console.error("Error adding favorite: ", error);
            });
    };

    const handleDetailAnimal = (animalInfo) => {
        const state = {
            url: '/animal/info',
            desertionNo: animalInfo.desertionNo,
            test: animalInfo.desertionNo,
        };
        navigate('/animal/detail', { state });
    };

    const getNeuterYnText = (neuterYn) => {
        switch (neuterYn) {
            case 'Y':
                return 'O';
            case 'N':
                return 'X';
            case 'U':
                return '모름';
            default:
                return '';
        }
    };

    const getSexCdText = (sexCd) => {
        switch (sexCd) {
            case 'M':
                return '수컷';
            case 'F':
                return '암컷';
            case 'Q':
                return '미상';
            default:
                return '';
        }
    };

    return (
        <div>
            <header>
                <Menu/>
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
                                    <br/>
                                    <div><span
                                        style={{fontFamily: "'Seoul Namsan'", fontSize: '30px'}}>유기견 검색</span>
                                    </div>
                                    <div><span className="fsize13"><span style={{
                                        color: 'rgb(138, 139, 142)',
                                        fontFamily: "'Nanum Barun Gothic'"
                                    }}>​</span></span></div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}><br/>공고 시작일, 종료일, 종료, 지역(도/특별시), (시/군)으로 옵션을 선택하여 검색하실 수 있습니다.</span></span>
                                    </div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}><br/>-사진 위에 마우스를 올리면, 더 자세한 정보를 보실 수 있습니다.<br/>-사진을 클릴하시면, 향후 성장시 특성&보호소 등 더 자세한 정보를 보실 수 있습니다.<br/><br/><br/></span></span>
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
                        <div className="container_search">
                            <div className="contentContainer">
                                <label className="label">공고 시작일: </label>
                                <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                                (ex. 20240216)
                            </div>
                            <div className="contentContainer">
                                <label className="label">공고 종료일: </label>
                                <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                                (ex. 20240216)
                            </div>
                            <div className="contentContainer">
                                <label className="label">품종: </label>
                                <input type="text" value={kind} onChange={(e) => setKind(e.target.value)}/>
                            </div>
                            <div className="contentContainer">
                                <label className="label" htmlFor="region">지역(도/특별시):</label>
                                <select id="region" onChange={handleRegionChange}>
                                    <option value="">지역(도/특별시)</option>
                                    {regionList.map((region) => (
                                        <option key={region.reg_code} value={region.reg_name}>{region.reg_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div  style={{marginBottom: '20px'}} className="contentContainer">
                                <label className="label" htmlFor="district">지역(시/군):</label>
                                <select id="district" onChange={handleDistrictChange}>
                                    <option value="">지역(시/군)</option>
                                    {districtList.map((district) => (
                                        <option key={district.dist_code}
                                                value={district.dist_name}>{district.dist_name}</option>
                                    ))}
                                </select>
                            </div>
                            <button className="button" onClick={fetchData} style={{width: '350px'}}>검색하기</button>
                        </div>
                        {animalInfos.length === 0 && !loading && !error && <div>No data available</div>}
                        <div className="grid-container">
                            {animalInfos.slice(offset, offset + limit).map((animalInfo, index) => (
                                <div className="card" key={index}>
                                    <div className="card-image">
                                        <img src={animalInfo.popfile} alt="Animal"/>
                                    </div>
                                    <div className="card-content">
                                    </div>
                                    {analysisloading ? (
                                        <div>Analysis Loading...</div>
                                    ) : (
                                        analysisResults.map((analysisresult, index) => (
                                            <div key={index}
                                                 className={analysisresult.desertionNo === animalInfo.desertionNo ? "analysis-info" : ""}>
                                                {analysisresult.desertionNo === animalInfo.desertionNo && (
                                                    <div>
                                                        <p>[ 품종 비율 1순위
                                                            ]<br/>{analysisresult.className1} ({(analysisresult.probability1 * 100).toFixed(2)}%)
                                                        </p>
                                                        <p>[ 품종 비율 2순위
                                                            ]<br/>{analysisresult.className2} ({(analysisresult.probability2 * 100).toFixed(2)}%)
                                                        </p>
                                                        <p>[ 품종 비율 3순위
                                                            ]<br/>{analysisresult.className3} ({(analysisresult.probability3 * 100).toFixed(2)}%)
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        ))
                                    )}
                                    <button className="button" onClick={() => addFavorite(animalInfo.desertionNo)}
                                            style={{width: '100%'}}>찜 추가
                                    </button>
                                    <div className="analysis" onClick={() => handleDetailAnimal(animalInfo)}>
                                        <br/>
                                        <p>발견 날짜: {formatDate(animalInfo.happenDt)}</p>
                                        <p>발견 장소: {animalInfo.happenPlace}</p>
                                        <p>나이: {animalInfo.age}</p>
                                        <p>무게: {animalInfo.weight}</p>
                                        <p>공고 시작 날짜: {formatDate(animalInfo.noticeSdt)}</p>
                                        <p>공고 종료 날짜: {formatDate(animalInfo.noticeEdt)}</p>
                                        <p>성별: {getSexCdText(animalInfo.sexCd)}</p>
                                        <p>중성화 여부: {getNeuterYnText(animalInfo.neuterYn)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {loading && <div>Loading...</div>}
                        {error && <div>Error: {error.message}</div>}
                        <footer>
                            <Pagination
                                total={animalInfos.length}
                                limit={limit}
                                page={page}
                                setPage={setPage}
                            />
                        </footer>
                    </div>
                ) : (
                    <div>
                        <h2 className="h2">(현재 찜 기능으로 인해) 해당 화면은 로그인이 필요한 화면입니다.</h2>
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
