import React, {useEffect, useState} from 'react';
import Menu from "../Menu";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/recommend.css";
import style from "../css/detail.css"
import axios from "axios";

function AnimalDetail() {
    const navigate = useNavigate();
    const location = useLocation();
    const DesertionNo = location.state.desertionNo;

    const [animalInfos, setAnimalInfos] = useState({});
    const [analysisResults, setAnalysisResults] = useState({});
    const [spec, setSpec] = useState({});
    const [fetchDataError, setFetchDataError] = useState(null);

    const fetchData = async (desertionNo) => {
        try {
            const response = await axios.get(`/api/animal/${desertionNo}`);
            setAnimalInfos(response.data);
            console.log(response.data);
            console.log(animalInfos);
            await handleAnalysis(desertionNo, response.data.popfile);
            await handleSpec(desertionNo);
        } catch (error) {
            console.error('Error fetching animal info:', error);
            setFetchDataError('Error fetching animal info');
        }
    };

    const handleAnalysis = async (desertionNo, imageUrl) => {
        try {
            const response = await axios.get(`/api/animal/analyze?desertionNo=${desertionNo}&popfile=${imageUrl}`);
            setAnalysisResults(response.data);
        } catch (error) {
            console.error('Error analyzing image:', error);
        }
    };

    const handleSpec = async (desertionNo) => {
        try {
            const response = await axios.get(`/api/animal/calculateSpec?desertionNo=${desertionNo}`);
            setSpec(response.data);
        } catch (error) {
            console.error('Error analyzing image:', error);
        }
    };

    useEffect(() => {
        fetchData(DesertionNo);
    }, [DesertionNo]);

    const formatDate = (dateString) => {
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);
        return `${year}년 ${month}월 ${day}일`;
    };

    const inchesToCm = (inches) => {
        return inches * 2.54;
    };

    const lbsToKg = (lbs) => {
        return lbs * 0.453592;
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
        <React.Fragment>
            <Menu/>
            <main>
                <button className="back_button" onClick={() => navigate(-1)}> ← 뒤로 가기</button>
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
                                        style={{fontFamily: "'Seoul Namsan'", fontSize: '30px'}}>유기견 상세 페이지</span>
                                    </div>
                                    <div><span className="fsize13"><span style={{
                                        color: 'rgb(138, 139, 142)',
                                        fontFamily: "'Nanum Barun Gothic'"
                                    }}>​</span></span><br/></div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}>현재 유기견의 정보 및 향후 발전 특성을 확인해보실 수 있습니다.<br/>*향후 성장시 특성의 경우, 사진으로 판단한 품종을 기반으로 나온 결과입니다.</span></span>
                                    </div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}><br/></span></span>
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
                <div className="container_outer">
                    <div className="container_detail">
                        {/* 사진 옆에 상세 정보(보호소 자세한 정보) 그 아래 품종 비율 및 향후 발전 가능 특징*/}
                        <img src={animalInfos.popfile} alt="Animal"/>
                        <div className="text">
                            <h2 className="h2_detail"> 동물 정보 </h2>
                            {/* 확인용 <p>유기 번호: {animalInfos[match.desertionNo].desertionNo}</p>*/}
                            <p>나이: {animalInfos.age || 'N/A'}</p>
                            <p>무게: {animalInfos.weight || 'N/A'}</p>
                            <p>공고 시작 날짜: {animalInfos.noticeSdt ? formatDate(animalInfos.noticeSdt) : 'N/A'}</p>
                            <p>공고 종료 날짜: {animalInfos.noticeEdt ? formatDate(animalInfos.noticeEdt) : 'N/A'}</p>
                            <p>성별: {animalInfos.sexCd ? getSexCdText(animalInfos.sexCd) : 'N/A'}</p>
                            <p>중성화 여부: {animalInfos.neuterYn ? getNeuterYnText(animalInfos.neuterYn) : 'N/A'}</p>
                            <p>특징: {animalInfos.specialMark || 'N/A'}</p>
                            <p>상태: {animalInfos.processState || 'N/A'}</p>
                        </div>
                    </div>
                    <div className="spec_box">
                        <h2 className="h2_detail">품종 비율</h2>
                        {analysisResults && (
                            <div className="content">
                                <div className="box">
                                    <h3 className="h3_detail"> [ 1위 ] </h3>
                                    {analysisResults.className1} ({analysisResults.probability1 ? analysisResults.probability1.toFixed(2) : 'N/A'}%)
                                </div>
                                <div className="box">
                                    <h3 className="h3_detail"> [ 2위 ] </h3>
                                    {analysisResults.className2} ({analysisResults.probability2 ? analysisResults.probability2.toFixed(2) : 'N/A'}%)
                                </div>
                                <div className="box">
                                    <h3 className="h3_detail"> [ 3위 ] </h3>
                                    {analysisResults.className3} ({analysisResults.probability3 ? analysisResults.probability3.toFixed(2) : 'N/A'}%)
                                </div>
                            </div>
                        )}
                        <div>
                            <h2 className="h2_detail">향후 성장 가능 특징</h2>
                            <div className="content">
                                <div className="box">
                                    <h3 className="h3_detail"> [ 키 ] </h3>
                                    {spec.height1 ? inchesToCm(spec.height1).toFixed(2) : 'N/A'}~{spec.height2 ? inchesToCm(spec.height2).toFixed(2) : 'N/A'} cm
                                </div>
                                <div className="box">
                                    <h3 className="h3_detail"> [ 몸무게 ] </h3>
                                    {spec.weight1 ? lbsToKg(spec.weight1).toFixed(2) : 'N/A'}~{spec.weight2 ? lbsToKg(spec.weight2).toFixed(2) : 'N/A'} kg
                                </div>
                                <div className="box">
                                    <h3 className="h3_detail"> [ 수명 ] </h3>
                                    {spec.lifeExpectancy1 ? spec.lifeExpectancy1.toFixed(2) : 'N/A'}~{spec.lifeExpectancy2 ? spec.lifeExpectancy2.toFixed(2) : 'N/A'} 살
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info_box">
                        <h2 className="h2_detail"> 발견 당시 정보 </h2>
                        <p>발견 날짜: {animalInfos.happenDt ? formatDate(animalInfos.happenDt) : 'N/A'}</p>
                        <p>발견 장소: {animalInfos.happenPlace || 'N/A'}</p>
                    </div>
                    <div className="info_box">
                        <h2 className="h2_detail"> 보호소 정보 </h2>
                        <div className="content">
                            <div className="text">
                                <p>보호소: {animalInfos.careNm || 'N/A'}</p>
                                <p>보호소 전화: {animalInfos.careTel || 'N/A'}</p>
                                <p>보호소 주소: {animalInfos.careAddr || 'N/A'}</p>
                            </div>
                            <div className="text">
                                <p>담당자: {animalInfos.chargeNm || 'N/A'}</p>
                                <p>담당자 연락처: {animalInfos.officetel || 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

export default AnimalDetail;
