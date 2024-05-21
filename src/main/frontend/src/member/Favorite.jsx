import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Menu from "../Menu";

import '../css/menu.css';
import '../css/result.css';
import '../css/member.css';
import Favorite_Result from "./Favorite_Result";

function Favorite() {
    const userData = useSelector(state => state.userData); // 사용자 데이터를 스토어에서 가져옴.
    const userId = userData ? userData.mem_id : '';
    const [favorites, setFavorites] = useState([]);
    const [members, setMembers] = useState([]);
    const [selectedDesertionNo, setSelectedDesertionNo] = useState('');
    const [userFavorites, setUserFavorites] = useState({});

    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (userId) {
            getFavorites(userId); // 사용자 아이디가 있을 때에만 찜 목록을 가져옴.
        }
    }, [userId]);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await axios.get(`/favorites/list?memId=${userId}`);
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

    // 찜 목록 불러오기
    const getFavorites = (userId) => {
        axios.get(`/favorites/list?memId=${userId}`)
            .then(response => {
                setFavorites(response.data);
            })
            .catch(error => {
                console.error("Error fetching favorites: ", error);
            });
    };

    // 특정 고유번호를 찜 한 사용자 목록 불러오기
    const getMembersDesertionNo = (desertionNo) => {
        axios.get(`/favorites/members/${desertionNo}`)
            .then(response => {
                setMembers(response.data);
                setSelectedDesertionNo(desertionNo);
            })
            .catch(error => {
                console.error("Error fetching members: ", error);
            });
    };

    // 특정 사용자의 찜 목록 불러오기
    const getMemberFavorites = (memId) => {
        axios.get(`/favorites/list?memId=${memId}`)
            .then(response => {
                setUserFavorites(prevState => ({
                    ...prevState,
                    [memId]: response.data
                }));
            })
            .catch(error => {
                console.error("Error fetching member's favorites: ", error);
            });
    };

    // 찜 제거 함수
    const removeFavorite = (desertionNo) => {
        axios.delete(`/favorites/remove?memId=${userId}&desertionNo=${desertionNo}`)
            .then(response => {
                console.log("Favorite removed successfully");
                // 찜 제거 후 찜 목록 다시 불러오기
                getFavorites(userId);
            })
            .catch(error => {
                console.error("Error removing favorite: ", error);
            });
    };

    return (
        <div>
            <header>
                <Menu/>
            </header>
            <div>
                {favorites.map(favorite => (
                    <div key={favorite.id}>
                        <Favorite_Result matches={matches} loading={loading} error={error}
                                         removeFavorite={removeFavorite} getMembersDesertionNo={getMembersDesertionNo}/>
                    </div>
                ))}
            </div>
            {selectedDesertionNo && (
                <div>
                    <h3>찜한 다른 사용자 목록</h3>
                    <div>
                        {members.map(member => (
                            <div key={member}>
                                <div>
                                    <span>{member}</span>
                                    <button className="signup custom-button" onClick={() => getMemberFavorites(member)}>
                                        이 사용자의 찜 목록 보기
                                    </button>
                                </div>
                                {userFavorites[member] && (
                                    <div>
                                        {userFavorites[member].map(fav => (
                                            <div key={fav.id}><Favorite_Result matches={matches} loading={loading} error={error}/></div>
                                        ))}
                                    </div>
                                )}
                                {userFavorites[member] && userFavorites[member].length === 0 && (
                                    <div>찜 목록이 없습니다.</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Favorite;
