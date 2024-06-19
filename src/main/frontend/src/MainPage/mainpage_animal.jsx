import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/search.css";
import "../css/menu.css"
import store from "../member/Store";
import "../css/main.css"

const formatDate = (dateString) => {
    if (!dateString) return '';
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${year}년 ${month}월 ${day}일`;
};

const MainAnimal = () => {
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

    const limit = 4;

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
            <main>
                <div>
                    {animalInfos.length === 0 && !loading && !error && <div>No data available</div>}
                    <div className="grid-container_main">
                        {animalInfos.slice(0, limit).map((animalInfo, index) => (
                            <div className="card_main" key={index}>
                                <div className="card_main-image">
                                    <img src={animalInfo.popfile} alt="Animal"/>
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
                                <div className="analysis-main" onClick={() => handleDetailAnimal(animalInfo)}>
                                    <div className="analysis_info-main">
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
                            </div>
                        ))}
                    </div>
                </div>

            </main>

        </div>
    );
};

export default MainAnimal;
