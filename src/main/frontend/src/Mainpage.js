import React, {useState} from 'react';
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom";
import store from "./member/Store";
import "./css/menu.css"
import './App.css';
import "../src/css/main.css"
import {logout} from "./member/Reducer";
import { useDispatch } from 'react-redux';
import SlideBanner from "./MainPage/SlideBanner";
import MainAnimal from "./MainPage/mainpage_animal";
import Menu from "./Menu";

const Mainpage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const state = store.getState();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/main");
    };

    return (
        <div>
            <header>
                <Menu/>
            </header>
            <div className="info-header">
                <h1>나에게 맞는 강아지를 추천받다</h1>
                <p>어떤 유기견을 입양해야 할지 고민 중이신가요</p>
                <p>저희 서비스만의 추천 기능을 통해 유기견 친구들을 찾아보세요!</p>
            </div>
            <div className="banner-content">
                <SlideBanner/>
            </div>
            <div className="main_animal">
                <h1>보호 중인 유기견</h1>
                <button className="more-button" onClick={() => navigate("/animal")}>더보기</button>
            </div>
            <hr/>
            <MainAnimal/>
        </div>
    );
};
export default Mainpage;