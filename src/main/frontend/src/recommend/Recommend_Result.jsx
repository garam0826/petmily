import React, { useState, useEffect } from 'react';
import axios from 'axios';
import store from "../member/Store";
import Menu from "../Menu";
import "../css/recommend.css"

import '../css/menu.css';
import '../css/result.css';
import {useNavigate} from "react-router-dom";

const Recommend_Result = ({ matches, loading, error, title }) => {
    const navigate = useNavigate();
    const state = store.getState();
    const userId = state.isLoggedIn ? state.userData.mem_id : null;

    //const [matches, setMatches] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);
    console.log(matches);

    const [animalInfos, setAnimalInfos] = useState({});
    const [analysisResults, setAnalysisResults] = useState({});
    const [fetchDataError, setFetchDataError] = useState(null);

    const [visibleCount, setVisibleCount] = useState(5); // 초기에는 5마리만 보이도록 설정


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

        matches.forEach(desertionNo => {
            if (!animalInfos[desertionNo]) {
                fetchData(desertionNo);
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

    const handleDetailAnimal = (DesertionNo) => {
        navigate('/animal/detail', {
            state: {
                desertionNo: DesertionNo,
            },
        });
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '날짜 정보 없음'; // dateStr이 정의되지 않은 경우 대체 문자열 반환
        const year = dateStr.substring(0, 4);
        const month = dateStr.substring(4, 6);
        const day = dateStr.substring(6, 8);
        return `${year}년 ${parseInt(month, 10)}월 ${parseInt(day, 10)}일`;
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

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 5); // 보여줄 강아지 수를 5마리씩 늘림
    };

    return (
        <div>
            <main className="container_result">
                <div data-case="text79" className="userEL15637124">
                    <div className="container_result">
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
                                        style={{
                                            fontFamily: "'Seoul Namsan'",
                                            fontSize: '30px'
                                        }}>유기견 {title} 추천 결과</span>
                                    </div>
                                    <div><span className="fsize13"><span style={{
                                        color: 'rgb(138, 139, 142)',
                                        fontFamily: "'Nanum Barun Gothic'"
                                    }}>​</span></span></div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}>사용자의 취향에 맞는 유기견 5마리입니다. 더 보고 싶으시면 아래 더보기 버튼을 눌러주세요. (최대 15마리까지 가능합니다.)</span></span>
                                    </div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}><br/>- 사진 위에 마우스를 올리면, 더 자세한 정보를 보실 수 있습니다.</span></span>
                                    </div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}>- 강아지를 클릭하면, 향후 성장시 특성&보호소 등 더 자세한 정보를 보실 수 있습니다.<br/><br/></span></span>
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
                    <div className="grid-container_result">
                        {matches.slice(0, visibleCount).map((desertionNo, index) => (
                            <div className="card_result" key={desertionNo} onClick={() => handleDetailAnimal(desertionNo)}>
                                {animalInfos && (
                                    <div>
                                        <h3 className="h3_result">{index+1}</h3>
                                        <img src={animalInfos[desertionNo]?.popfile} alt="Animal"/>
                                        {analysisResults[desertionNo] && (
                                            <div>
                                                <hr/>
                                                <p>[ 품종 비율 1순위 ]<br/>{analysisResults[desertionNo].className1}<br/>({(analysisResults[desertionNo].probability1 * 100).toFixed(2)}%)</p>
                                                <p>[ 품종 비율 2순위 ]<br/>{analysisResults[desertionNo].className2}<br/>({(analysisResults[desertionNo].probability2 * 100).toFixed(2)}%)</p>
                                                <p>[ 품종 비율 3순위 ]<br/>{analysisResults[desertionNo].className3}<br/>({(analysisResults[desertionNo].probability3 * 100).toFixed(2)}%)</p>
                                            </div>
                                        )}
                                        <div className="analysis-results">
                                            <br/>
                                            <p>발견 날짜: {formatDate(animalInfos[desertionNo]?.happenDt)}</p>
                                            <p>발견 장소: {animalInfos[desertionNo]?.happenPlace}</p>
                                            <p>나이: {animalInfos[desertionNo]?.age}</p>
                                            <p>무게: {animalInfos[desertionNo]?.weight}</p>
                                            <p>공고 시작 날짜: {animalInfos[desertionNo]?.noticeSdt}</p>
                                            <p>공고 종료 날짜: {animalInfos[desertionNo]?.noticeEdt}</p>
                                            <p>성별: {getSexCdText(animalInfos[desertionNo]?.sexCd)}</p>
                                            <p>중성화 여부: {getNeuterYnText(animalInfos[desertionNo]?.neuterYn)}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
                {visibleCount < matches.length && (
                    <button onClick={loadMore} className="more_button">더보기</button>
                )}
            </main>
        </div>
    );
};

export default Recommend_Result;
