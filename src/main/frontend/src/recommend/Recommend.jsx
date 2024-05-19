import React from 'react';
import Menu from "../Menu";
import {useNavigate} from "react-router-dom";
import styles from "../css/recommend.css";
function Recommend() {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Menu />
            <main>
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
                                        style={{fontFamily: "'Seoul Namsan'", fontSize: '30px'}}>취향에 맞는 유기견 찾기</span>
                                    </div>
                                    <div><span className="fsize13"><span style={{
                                        color: 'rgb(138, 139, 142)',
                                        fontFamily: "'Nanum Barun Gothic'"
                                    }}>​</span></span><br/></div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}>추천 방식에는 질문 / 키워드 추천 2 종류가 있습니다.</span></span>
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
                <div data-case="contents130" className="userEL15637155 rescript">
                    <div className="container full-width">
                        <div className="row" data-matrix-loop="true" data-matrix-column="2" data-child="14"
                             data-matrix-list="false" data-matrix-copy="true">

                            <div className="col-xs-12 col-sm-12 col-md-12 con_wrap" data-background="true"
                                 data-selector=".con_wrap" data-title="배경이미지">
                                <div className="con multi-columns-row clearfix" data-clone-loop="true"
                                     data-clone-min="3" data-clone-max="4">

                                    <div className="content-block" >
                                        <div className="outer-div">
                                            <div className="col-xs-12 col-sm-6 col-md-6 clearfix item">
                                                <div className="text-box">
                                                    <div data-edit="true" data-selector="div.text" className="text">
                                                        <div><span style={{
                                                            fontSize: '23px',
                                                            color: 'rgb(255, 255, 255)'
                                                        }}><span
                                                            className="fsize24"><span
                                                            style={{fontFamily: "'Noto Sans KR'"}}>질문 추천</span></span></span>
                                                        </div>
                                                        <div style={{lineHeight: '1'}}><span className="fsize13"><span
                                                            style={{fontFamily: "'Nanum Barun Gothic'"}}><span
                                                            style={{color: 'rgb(219, 219, 219)'}}><br/></span></span></span>
                                                        </div>
                                                        <div><span className="fsize13"><span
                                                            style={{fontFamily: "'Nanum Barun Gothic'"}}><span
                                                            style={{color: 'rgb(219, 219, 219)'}}>강아지에 대한&nbsp;</span></span></span><span
                                                            className="fsize13"><span
                                                            style={{fontFamily: "'Nanum Barun Gothic'"}}><span
                                                            style={{color: 'rgb(219, 219, 219)'}}>취향에 관한&nbsp;</span></span></span><span
                                                            className="fsize13"><span
                                                            style={{fontFamily: "'Nanum Barun Gothic'"}}><span
                                                            style={{color: 'rgb(219, 219, 219)'}}>질문에 답한 결과를 바탕으로 추천합니다.</span></span></span>
                                                        </div>
                                                        <div><span className="fsize13"><span
                                                            style={{fontFamily: "'Nanum Barun Gothic'"}}><span
                                                            style={{color: 'rgb(219, 219, 219)'}}>(기존에 이미 질문에 답하신 분들은 그 결과와 관련된 결과도 보실 수 있습니다.)</span></span></span>
                                                        </div>
                                                        <div><br/></div>
                                                        <div><span style={{color: 'rgb(255, 255, 255)'}}><span
                                                            style={{fontFamily: "'Nanum Barun Gothic'"}}><span
                                                            className="fsize13"><a onClick={()=>navigate("/recommend/question")}><u>더보기</u></a></span></span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="outer-div">
                                            <div className="col-xs-12 col-sm-6 col-md-6 clearfix item">
                                                <div className="text-box">
                                                    <div data-edit="true" data-selector="div.text" className="text">
                                                        <div><span style={{
                                                            fontSize: '23px',
                                                            color: 'rgb(255, 255, 255)'
                                                        }}><span
                                                            className="fsize24"><span
                                                            style={{fontFamily: "'Noto Sans KR'"}}>키워드 추천</span></span></span>
                                                        </div>
                                                        <div style={{lineHeight: '1'}}>
                                                            <span className="fsize13" style={{
                                                                fontFamily: 'Nanum Barun Gothic',
                                                                color: 'rgb(219, 219, 219)'
                                                            }}><br/></span>
                                                        </div>
                                                        <div>
                                                            <span style={{color: 'rgb(219, 219, 219)'}}>강아지 특성과 관련된 키워드 선택으로</span>
                                                        </div>
                                                        <div>
                                                            <span
                                                                style={{color: 'rgb(219, 219, 219)'}}>관련 강아지를 추천합니다.</span>
                                                        </div>
                                                        <div>
                                                            <span className="fsize13"
                                                                  style={{fontFamily: 'Nanum Barun Gothic'}}>
                                                                <span style={{color: 'rgb(219, 219, 219)'}}><br/></span>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="fsize13"
                                                                  style={{fontFamily: 'Nanum Barun Gothic'}}>
                                                                <span style={{color: 'rgb(219, 219, 219)'}}><br/></span>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span style={{color: 'rgb(255, 255, 255)'}}>
                                                                <span
                                                                    style={{fontFamily: 'Nanum Barun Gothic'}}
                                                                    className="fsize13">
                                                                    <a onClick={()=>navigate("/recommend/keyword")}><u>더보기</u></a>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="line-area col-xs-12 col-sm-12 col-md-12 no-padding"
                                         data-line-copy="true" data-border="true" data-selector=".line-area i"
                                         data-title="선 컬러">
                                        <i className="col-xs-12 col-sm-6 col-md-6" data-selector=".line-area .bg_hover"
                                           data-rollover="true" data-title="롤오버" style={{height: '100%'}}></i>
                                        <i className="col-xs-12 col-sm-6 col-md-6 border0 bg_hover"
                                           style={{height: '100%'}}></i>
                                        <i className="col-xs-12 col-sm-6 col-md-6  hide" style={{height: '100%'}}></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
        ;
}

export default Recommend;
