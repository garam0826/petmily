/*
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import '../css/imgupload.css';
import {useNavigate} from "react-router-dom";
import Menu from "../Menu";

function ImageAnalyze() {
    const [analysis, setAnalysis] = useState('');

    // 스토어에서 사용자 데이터 가져오기
    const userData = useSelector(state => state.userData);
    const userId = userData ? userData.mem_id : '';

    // 이미지 분석 요청 핸들러
    useEffect(() => {
        const analyzeResult = () => {
            if (!userId) {
                console.error("User ID is not available");
                return;
            }
            axios.get(`/member/images/analyze/${userId}`)
                .then(response => {
                    console.log('분석 결과:', response.data);
                    setAnalysis(response.data);
                })
                .catch(error => {
                    console.error('이미지 분석 중 오류 발생:', error);
                    alert('이미지 분석 중 오류 발생');
                });
        };
        analyzeResult();
    }, [userId]);

    return (
        <div>
            <Menu/>
            <div className="analyze-container">
                <h2>이미지 분석 결과</h2>
                {analysis && (
                    <div>
                        <h3>분석 결과:</h3>
                        <p>{analysis}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImageAnalyze;
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Menu from "../Menu";
import '../css/result.css';
import '../css/recommend.css';

function ImageAnalyze() {
    const [analysis, setAnalysis] = useState({});
    const location = useLocation();
    const imageUrl = location.state?.imageUrl || '';

    // 스토어에서 사용자 데이터 가져오기
    const userData = useSelector(state => state.userData);
    const userId = userData ? userData.mem_id : '';

    // 이미지 분석 요청 핸들러
    useEffect(() => {
        const analyzeResult = async () => {
            if (!userId) {
                console.error("User ID is not available");
                return;
            }
            try {
                const response = await axios.get(`/member/images/analyze/${userId}`);
                setAnalysis(response.data);
            } catch (error) {
                console.error('이미지 분석 중 오류 발생:', error);
                alert('이미지 분석 중 오류 발생');
            }
        };

        analyzeResult();
    }, [userId]);

    const formatProbability = (probability) => {
        return probability !== undefined ? (probability).toFixed(2) : 'N/A';
    };

    return (
        <div>
            <Menu />
            <main className="container_result">
                <div data-case="text79" className="userEL15637124">
                    <div className="container_result">
                        <div className="row" data-matrix-loop="true" data-matrix-column="1">
                            <div className="col-xs-12 col-sm-12 col-md-12 item">
                                <div className="cl_caption" data-edit="true" data-selector=".cl_caption">
                                    <hr className="fr-hr"
                                        style={{ borderBottom: '2px solid #d6d7d8', width: '35px', margin: '0 auto' }}
                                        align="center" />
                                    <div><span className="fsize13"><span
                                        style={{ color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'" }}><br /></span></span>
                                    </div>
                                    <div><span
                                        style={{
                                            fontFamily: "'Seoul Namsan'",
                                            fontSize: '30px'
                                        }}>이미지 분석 결과</span>
                                    </div>
                                    <div><span className="fsize13"><span style={{
                                        color: 'rgb(138, 139, 142)',
                                        fontFamily: "'Nanum Barun Gothic'"
                                    }}>​</span></span></div>
                                    <div><span className="fsize13"><span
                                        style={{ color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'" }}>분석된 이미지를 기반으로 품종을 예측합니다. (최대 3개의 품종이 표시됩니다.)</span></span>
                                    </div>
                                    <div><br /></div>
                                    <hr className="fr-hr"
                                        style={{ borderBottom: '2px solid #d6d7d8', width: '35px', margin: '0 auto' }}
                                        align="center" />
                                    <div><br /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*{imageUrl && <img src={imageUrl} alt="Analyzed" style={{ width: '750px', height: '750px' }} />}
                {analysis && (
                    <div className="card_result">
                        <h3 className="h3_result">분석 결과</h3>
                        <p>[ 품종 비율 1순위 ]<br/>{analysis.className1 || 'N/A'}<br/>({formatProbability(analysis.probability1)}%)</p>
                        <p>[ 품종 비율 2순위 ]<br/>{analysis.className2 || 'N/A'}<br/>({formatProbability(analysis.probability2)}%)</p>
                        <p>[ 품종 비율 3순위 ]<br/>{analysis.className3 || 'N/A'}<br/>({formatProbability(analysis.probability3)}%)</p>
                    </div>
                )}*/}
            </main>
        </div>
    );
}

export default ImageAnalyze;

