import React from 'react';
import { useLocation } from 'react-router-dom';
import Menu from "../Menu";
import '../css/result.css';
import '../css/recommend.css';
import '../css/menu.css'
import '../css/analysisResult.css';

const ImageAnalysis = () => {
    const location = useLocation();
    const { image, result } = location.state || {};

    // 서버에서 보내는 원본 결과 형식을 유지하고 클라이언트에서 가공
    const imgResult = (result) => {
        return result.split('\n').map(item => {
            const [breed, probability] = item.split(',');
            return { breed, probability: parseFloat(probability) };
        });
    };

    const analyzedResults = imgResult(result);

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
                                        style={{borderBottom: '2px solid #d6d7d8', width: '35px', margin: '0 auto'}}
                                        align="center"/>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}><br/></span></span>
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
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}>분석된 이미지를 기반으로 품종을 예측합니다. (최대 3개의 품종이 표시됩니다.)</span></span>
                                    </div>
                                    <div><br/></div>
                                    <hr className="fr-hr"
                                        style={{borderBottom: '2px solid #d6d7d8', width: '35px', margin: '0 auto'}}
                                        align="center"/>
                                    <div><br/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-analysis_result">
                    <div className="img_result">
                        <h3 className="uploadimg_result">분석 결과</h3>
                        {image && <img src={image} alt="분석 이미지" style={{width: '300px', height: '300px'}}/>}
                        {/* 조건부 렌더링을 통해 각 순위별로 결과를 출력 */}
                        {analyzedResults.length > 0 && (
                            <div>
                                <p>[ 품종 비율 1순위
                                    ]<br/>{analyzedResults[0].breed.replace(/_/g, ' ')}<br/>({(analyzedResults[0].probability * 100).toFixed(2)}%)
                                </p>
                                {analyzedResults.length > 1 && (
                                    <p>[ 품종 비율 2순위
                                        ]<br/>{analyzedResults[1].breed.replace(/_/g, ' ')}<br/>({(analyzedResults[1].probability * 100).toFixed(2)}%)
                                    </p>
                                )}
                                {analyzedResults.length > 2 && (
                                    <p>[ 품종 비율 3순위
                                        ]<br/>{analyzedResults[2].breed.replace(/_/g, ' ')}<br/>({(analyzedResults[2].probability * 100).toFixed(2)}%)
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ImageAnalysis;



