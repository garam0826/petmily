import React, { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import axios from 'axios';
import store from "../member/Store";
import Menu from "../Menu";

import '../css/menu.css';
import '../css/result.css';
import Recommend_Result from "./Recommend_Result";

const KeywordResult = () => {
    const location = useLocation();
    const state = store.getState();
    const userId = state.isLoggedIn ? state.userData.mem_id : null;
    const {desertionNos} = location.state || { desertionNos: [] };

    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //const [keywords, setKeywords] = useState("");

    // 키워드 매치 데이터를 가져오는 useEffect
    useEffect(() => {
        const fetchMatches = async () => {
            try {
                // keyword 추천 결과로 api 바꿔야함
                setLoading(true);
                setError(null);
                console.log('Sending desertionNos:', desertionNos);
                //console.log('Result:', desertionNos);
                setMatches(desertionNos);
                console.log(setMatches(desertionNos));
            } catch (err) {
                setError('Failed to fetch matches');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (userId && desertionNos.length > 0) {
            fetchMatches();
        }
    }, [userId, desertionNos]);

    return (
        <div>
            <header>
                <Menu />
            </header>
            <main>
                <Recommend_Result matches={matches} loading={loading} error={error} title={"키워드"}/>
            </main>
        </div>
    );
};

export default KeywordResult;
