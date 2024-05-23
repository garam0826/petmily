import React, { useState, useEffect } from 'react';
import axios from 'axios';
import store from "../member/Store";
import "../css/recommend.css";
import '../css/menu.css';
import '../css/result.css';

const Favorite_Result = ({ matches, loading, error, removeFavorite, getMemberDesertionNo }) => {
    const state = store.getState();
    const userId = state.isLoggedIn ? state.userData.mem_id : null;

    const [animalInfos, setAnimalInfos] = useState({});
    const [analysisResults, setAnalysisResults] = useState({});
    const [fetchDataError, setFetchDataError] = useState(null);

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
            const desertionNo = match.desertionNo || match; // match가 객체라면 desertionNo 속성을 사용
            if (!animalInfos[desertionNo]) {
                fetchData(desertionNo);
            }
        });
    }, [matches]);

    const handleAnalysis = async (desertionNo, imageUrl) => {
        try {
            const response = await axios.get(`/api/animal/analyze`, {
                params: {
                    desertionNo,
                    popfile: imageUrl
                }
            });
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
                                        style={{fontFamily: "'Seoul Namsan'", fontSize: '30px'}}>찜 목록</span>
                                    </div>
                                    <div><span className="fsize13"><span style={{
                                        color: 'rgb(138, 139, 142)',
                                        fontFamily: "'Nanum Barun Gothic'"
                                    }}>​</span></span></div>
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
                        {matches.map((match) => {
                            const desertionNo = match.desertionNo || match; // match가 객체라면 desertionNo 속성을 사용
                            return (
                                <div className="card" key={desertionNo}>
                                    {animalInfos[desertionNo] && (
                                        <div>
                                            <img src={animalInfos[desertionNo]?.popfile} alt="Animal"/>
                                            <div className="analysis-results">
                                                <br/>
                                                {/*<p>유기 번호: {desertionNo}</p>*/}
                                                <p>발견 날짜: {formatDate(animalInfos[desertionNo]?.happenDt)}</p>
                                                <p>발견 장소: {animalInfos[desertionNo]?.happenPlace}</p>
                                                <p>나이: {animalInfos[desertionNo]?.age}</p>
                                                <p>무게: {animalInfos[desertionNo]?.weight}</p>
                                                <p>공고 시작 날짜: {formatDate(animalInfos[desertionNo]?.noticeSdt)}</p>
                                                <p>공고 종료 날짜: {formatDate(animalInfos[desertionNo]?.noticeEdt)}</p>
                                                <p>성별: {animalInfos[desertionNo]?.sexCd}</p>
                                                <p>중성화 여부: {animalInfos[desertionNo]?.neuterYn}</p>
                                                <button onClick={() => removeFavorite(desertionNo)}>찜 제거</button>
                                                <button onClick={() => getMemberDesertionNo(desertionNo)}>찜한 사용자 보기</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Favorite_Result;
