import React, { useState, useEffect } from 'react';
import axios from 'axios';
import store from "../member/Store";
import Menu from "../Menu";

import '../css/menu.css';
import '../css/result.css';
import Recommend_Result from "./Recommend_Result";

const QuestionResult = () => {
    const state = store.getState();
    const userId = state.isLoggedIn ? state.userData.mem_id : null;

    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const [animals, setAnimals] = useState([]);

    // 추천 매치 데이터를 가져오는 useEffect
    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await axios.get(`/member/profile/recommend/${userId}`);
                setMatches(response.data);
            } catch (err) {
                setError('Failed to fetch matches');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchMatches();
        }
    }, [userId]);

    useEffect(() => {
        // Extract desertionNo from matches and set to animals state
        const desertionNos = matches.map(match => match.desertionNo);
        setAnimals(desertionNos);
    }, [matches]);

    return (
        <div>
            <header>
                <Menu />
            </header>
            <main>
                <Recommend_Result matches={animals} loading={loading} error={error} title={"질문"}/>
            </main>
        </div>
    );
};

export default QuestionResult;
