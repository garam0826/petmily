import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import store from "../member/Store";
import Menu from "../Menu";
import "../css/Q_recommend.css"
import styles from "../css/recommend.css"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const QuestionRecommend = () => {
    const state = store.getState();
    const userId = state.isLoggedIn ? state.userData.mem_id : null;

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        memId: userId || "",
        affectionateWithFamily: 1,
        goodWithYoungChildren: 1,
        goodWithOtherDogs: 1,
        sheddingLevel: 1,
        coatGroomingFrequency: 1,
        droolingLevel: 1,
        opennessToStrangers: 1,
        watchdogProtectiveNature: 1,
        playfulnessLevel: 1,
        adaptabilityLevel: 1,
        trainabilityLevel: 1,
        barkingLevel: 1,
        energyLevel: 1,
        mentalStimulationNeeds: 1
    });

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            memId: userId
        }));
    }, [userId]);

    const handleClick = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            console.log(formData); // 요청 데이터 확인
            const response = await axios.post('/member/profile/save', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data); // 성공 시 메시지
            navigate("/recommend/question/result");
        } catch (error) {
            console.error('Error saving user characteristics:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data); // 서버로부터의 응답 데이터 확인
            }
        }
    };

    const renderToggleButtons = (name, value) => {
        let options = [];
        switch (name) {
            case "affectionateWithFamily":
                options = [
                    { value: 1, text: '거의' },
                    { value: 2, text: '가끔' },
                    { value: 3, text: '보통' },
                    { value: 4, text: '때때로' },
                    { value: 5, text: '대부분' }
                ];
                break;
            case "goodWithYoungChildren":
                options = [
                    { value: 1, text: '아이들과의 상호작용을 선호하지 않음' },
                    { value: 2, text: '아이들과는 거의 상호작용하지 않음' },
                    { value: 3, text: '조금은 조심스러워도 됨' },
                    { value: 4, text: '최소한의 상호작용이 있어야 함' },
                    { value: 5, text: '매우 친절하고 인내심이 있어야 함' },
                ];
                break;
            case "goodWithOtherDogs":
                options = [
                    { value: 1, text: '사교성이 부족함' },
                    { value: 2, text: '소극적인' },
                    { value: 3, text: '보통' },
                    { value: 4, text: '좋음' },
                    { value: 5, text: '매우 좋음' }
                ];
                break;
            case "sheddingLevel":
                options = [
                    { value: 1, text: '전혀 용인 못함' },
                    { value: 2, text: '드물게는 괜찮음' },
                    { value: 3, text: '보통' },
                    { value: 4, text: '자주는 괜찮으나 정기적인 청소 필요' },
                    { value: 5, text: '많이 묻어도 전혀 문제 없음' }
                ];
                break;
            case "coatGroomingFrequency":
                options = [
                    { value: 1, text: '전혀 관리할 필요 없음' },
                    { value: 2, text: '거의 관리할 필요 없음' },
                    { value: 3, text: '보통' },
                    { value: 4, text: '일주일에 몇 번' },
                    { value: 5, text: '매일' }
                ];
                break;
            case "droolingLevel":
                options = [
                    { value: 1, text: '전혀 용인 못함' },
                    { value: 2, text: '가끔은 괜찮음' },
                    { value: 3, text: '보통 수준이면 가능' },
                    { value: 4, text: '자주 닦아주면 문제 없음' },
                    { value: 5, text: '많이 흘려도 괜찮음' }
                ];
                break;
            case "opennessToStrangers":
                options = [
                    { value: 1, text: '낯선 사람에게 매우 경계함' },
                    { value: 2, text: '대부분 사람을 경계함' },
                    { value: 3, text: '조금은 조심스러워도 됨' },
                    { value: 4, text: '적당히 개방적' },
                    { value: 5, text: '매우 친절하고 모든 이에게 개방적' }
                ];
                break;
            case "watchdogProtectiveNature":
                options = [
                    { value: 1, text: '전혀 필요 없음' },
                    { value: 2, text: '약함' },
                    { value: 3, text: '보통' },
                    { value: 4, text: '상당함' },
                    { value: 5, text: '매우 강함' }
                ];
                break;
            case "playfulnessLevel":
                options = [
                    { value: 1, text: '매우 낮음' },
                    { value: 2, text: '낮음' },
                    { value: 3, text: '보통' },
                    { value: 4, text: '높음' },
                    { value: 5, text: '매우 높음' }
                ];
                break;
            case "adaptabilityLevel":
                options = [
                    { value: 1, text: '매우 낮음' },
                    { value: 2, text: '낮음' },
                    { value: 3, text: '보통' },
                    { value: 4, text: '높음' },
                    { value: 5, text: '매우 높음' }
                ];
                break;
            case "trainabilityLevel":
                options = [
                    { value: 1, text: '훈련에 따른 학습이 전혀 안됨' },
                    { value: 2, text: '학습이 잘 안됨' },
                    { value: 3, text: '보통' },
                    { value: 4, text: '대체로 잘됨' },
                    { value: 5, text: '훈련시간에 비례해 학습이 잘됨' }
                ];
                break;
            case "barkingLevel":
                options = [
                    { value: 1, text: '매우 자주 짖어도 괜찮음' },
                    { value: 2, text: '자주 듣는 것이 문제 없음' },
                    { value: 3, text: '보통' },
                    { value: 4, text: '드물게는 괜찮음' },
                    { value: 5, text: '전혀 용인 못함' }
                ];
                break;
            case "energyLevel":
                options = [
                    { value: 1, text: '2~3주에 한번' },
                    { value: 2, text: '일주일' },
                    { value: 3, text: '2~3일에 한 번' },
                    { value: 4, text: '매일' },
                    { value: 5, text: '하루 2번 이상' }
                ];
                break;
            case "mentalStimulationNeeds":
                options = [
                    { value: 1, text: '거의 시켜주지 못함' },
                    { value: 2, text: '월 1-2회 정도' },
                    { value: 3, text: '주 1회 정도' },
                    { value: 4, text: '주 3-4회 정도' },
                    { value: 5, text: '매일' }
                ];
                break;
            default:
                options = [1, 2, 3, 4, 5];
                break;
        }

        return (
            <ToggleButtonGroup
                color="primary"
                value={formData[name]}
                exclusive
                onChange={(e, newValue) => handleClick(name, newValue)}
                aria-label={name}
                style={{marginTop: '10px'}}
            >
                {options.map((option) => (
                    <ToggleButton key={option.value} value={option.value}
                                  style={{width: '280px', height: '40px'}}
                                  sx={{
                                      backgroundColor: formData[name] === option.value ? 'rgba(85, 107, 47, 0.5)' : '',
                                      color: formData[name] === option.value ? 'white' : 'black',
                                      '&.Mui-selected': {
                                          backgroundColor: 'rgba(85, 117, 47, 0.7)',
                                          color: 'white',
                                      },
                                      '&:hover': {
                                          backgroundColor: formData[name] === option.value ? 'darkolivegreen' : 'rgba(250, 256, 250, 0.6)',
                                          color: 'black',
                                      }
                                  }}>
                        {option.text}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        );
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
                                    <br/>
                                    <div><span
                                        style={{fontFamily: "'Seoul Namsan'", fontSize: '30px'}}>질문에 따른 취향 고르기</span>
                                    </div>
                                    <div><span className="fsize13"><span style={{
                                        color: 'rgb(138, 139, 142)',
                                        fontFamily: "'Nanum Barun Gothic'"
                                    }}>​</span></span><br/></div>
                                    <div><span className="fsize13"><span
                                        style={{color: 'rgb(138, 139, 142)', fontFamily: "'Nanum Barun Gothic'"}}><br/>각 질문(특성)당 선택하신 답을 기반으로 취향에 맞는 유기견을 추천해드립니다.<br/><br/><br/></span></span>
                                    </div>
                                    <hr className="fr-hr"
                                        style={{borderBottom: '2px solid #d6d7d8', width: '35px', margin: '0 auto'}}
                                        align="center"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="container_question">
                        <label className="label">Q1. 반려견의 가족에게 어느 정도의 애정을 보여주면 좋을 것 같다고 생각하시나요?</label>
                        {renderToggleButtons("affectionateWithFamily")}
                    </div>
                    <div className="container_question">
                        <label className="label">Q2. 어린 아이들과의 상호작용에서 당신이 기대하는 반려견의 특성은 무엇입니까? 혹은 미래의 자녀 계획을 고려하고 계십니까?</label>
                        {renderToggleButtons("goodWithYoungChildren")}
                    </div>
                    <div className="container_question">
                        <label className="label">Q3. 다른 강아지들과의 사회성 수준이 어느정도 되었으면 좋겠나요?</label>
                        {renderToggleButtons("goodWithOtherDogs")}
                    </div>
                    <div className="container_question">
                        <label className="label">Q4. 털 빠짐 정도는 어느 정도까지 보고 계신가요?</label>
                        {renderToggleButtons("sheddingLevel")}
                    </div>
                    <div className="container_question">
                        <label className="label">Q5. 반려견의 털을 얼마나 자주 관리해주실 수 있나요?</label>
                        {renderToggleButtons("coatGroomingFrequency")}
                    </div>
                    <div className="container_question">
                        <label className="label">Q6. 반려견의 침 흘림 정도를 어느 수준까지 용인할 수 있나요?</label>
                        {renderToggleButtons("droolingLevel")}
                    </div>
                    <div className="container_question">
                        <label className="label">Q7. 당신의 반려견이 낯선 사람들에게 얼마나 개방적이었으면 좋겠습니까? 주거 환경도 고려해 주세요</label>
                        {renderToggleButtons("opennessToStrangers")}
                    </div>
                    <div className="container_question">
                        <label className="label">Q8. 경계나 보호 본능이 강한 반려견을 선호하시나요?</label>
                        {renderToggleButtons("watchdogProtectiveNature")}
                    </div>
                    <div className="container_question">
                        <label className="label">Q9. 반려견의 장난기 수준은 어느 정도가 이상적인가요?</label>
                        {renderToggleButtons("playfulnessLevel")}
                    </div>
                    <div className="container_question">
                        <label className="label">Q10. 집의 변화나 거주지의 이동과 같은 낯선 상황에 대하여, 반려견의 적응력 수준은 어떠해야 한다고 생각하십니까?</label>
                        {renderToggleButtons("adaptabilityLevel")}
                    </div>
                    <div className="container_question">
                        <label className="label">Q11. 훈련 시간에 비해, 훈련이 잘 안되어도 어느 정도까지 용인이 가능한가요?</label>
                        {renderToggleButtons("trainabilityLevel")}
                    </div>
                    <div className="container_question">
                        <label className="label">Q12. 반려견의 짖는 행동을 어느 정도까지 용인할 수 있나요? 자신의 주거환경도 고려하여 답변해주세요.</label>
                        {renderToggleButtons("barkingLevel")}
                    </div>
                    <div className="container_question">
                        <label className="label">Q13. 반려견 산책 정도는 어느 정도가 괜찮은가요?</label>
                        {renderToggleButtons("energyLevel")}
                    </div>
                    <div className="container_question">
                        <label className="label">Q14. 만약 반려견이 있다면, 얼마나 많은 주기로 새로운 경험을 시켜줄 수 있습니까?</label>
                        {renderToggleButtons("mentalStimulationNeeds")}
                    </div>
                    <Box style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" style={{marginTop: '-5px', marginBottom: '20px', width: '300px'}} onClick={handleSave}>추천 결과 보기</Button>
                    </Box>
                </form>
            </main>
        </div>
    );
};

export default QuestionRecommend;
