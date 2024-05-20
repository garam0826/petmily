/*
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Menu from "../Menu";

function Favorite() {
    const userData = useSelector(state => state.userData); // 사용자 데이터를 스토어에서 가져옴.
    const userId = userData.mem_id;
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (userId) {
            getFavorites(userId); // 사용자 아이디가 있을 때에만 찜 목록을 가져옴.
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
            <Menu />
            <h2>찜 목록</h2>
            <ul>
                {favorites.map(favorite => (
                    <li key={favorite.id}>
                        <span>{favorite.desertionNo}</span>
                        <button onClick={() => removeFavorite(favorite.desertionNo)}>찜 제거</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Favorite;
*/
/*import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Menu from "../Menu";

function Favorite() {
    const userData = useSelector(state => state.userData); // 사용자 데이터를 스토어에서 가져옴.
    const userId = userData ? userData.mem_id : '';
    const [favorites, setFavorites] = useState([]);
    const [members, setMembers] = useState([]);
    const [selectedDesertionNo, setSelectedDesertionNo] = useState('');

    useEffect(() => {
        if (userId) {
            getFavorites(userId); // 사용자 아이디가 있을 때에만 찜 목록을 가져옴.
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

    // 특정 유기번호에 대한 사용자 목록 불러오기
    const getMembersByDesertionNo = (desertionNo) => {
        axios.get(`/favorites/members/${desertionNo}`)
            .then(response => {
                setMembers(response.data);
                setSelectedDesertionNo(desertionNo);
            })
            .catch(error => {
                console.error("Error fetching members: ", error);
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
            <Menu />
            <h2>찜 목록</h2>
            <ul>
                {favorites.map(favorite => (
                    <li key={favorite.id}>
                        <span>{favorite.desertionNo}</span>
                        <button onClick={() => removeFavorite(favorite.desertionNo)}>찜 제거</button>
                        <button onClick={() => getMembersByDesertionNo(favorite.desertionNo)}>찜한 사용자 보기</button>
                    </li>
                ))}
            </ul>
            {selectedDesertionNo && (
                <div>
                    <h3>{selectedDesertionNo}을(를) 찜한 사용자 목록</h3>
                    <ul>
                        {members.map(member => (
                            <li key={member}>{member}</li>
                        ))}1
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Favorite;
*/
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Menu from "../Menu";

function Favorite() {
    const userData = useSelector(state => state.userData); // 사용자 데이터를 스토어에서 가져옴.
    const userId = userData ? userData.mem_id : '';
    const [favorites, setFavorites] = useState([]);
    const [members, setMembers] = useState([]);
    const [selectedDesertionNo, setSelectedDesertionNo] = useState('');
    const [selectedUserFavorites, setSelectedUserFavorites] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [userFavorites, setUserFavorites] = useState({});

    useEffect(() => {
        if (userId) {
            getFavorites(userId); // 사용자 아이디가 있을 때에만 찜 목록을 가져옴.
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

    // 특정 유기번호에 대한 사용자 목록 불러오기
    const getMembersByDesertionNo = (desertionNo) => {
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
    const getUserFavorites = (memId) => {
        axios.get(`/favorites/list?memId=${memId}`)
            .then(response => {
                setSelectedUserFavorites(response.data);
                setSelectedUserId(memId);
            })
            .catch(error => {
                console.error("Error fetching user favorites: ", error);
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

    /*return (
        <div>
            <Menu />
            <h2>찜 목록</h2>
            <ul>
                {favorites.map(favorite => (
                    <li key={favorite.id}>
                        <span>{favorite.desertionNo}</span>
                        <button onClick={() => removeFavorite(favorite.desertionNo)}>찜 제거</button>
                        <button onClick={() => getMembersByDesertionNo(favorite.desertionNo)}>찜한 사용자 보기</button>
                    </li>
                ))}
            </ul>
            {selectedDesertionNo && (
                <div>
                    <h3>{selectedDesertionNo}을(를) 찜한 사용자 목록</h3>
                    <ul>
                        {members.map(member => (
                            <li key={member}>
                                <span>{member}</span>
                                <button onClick={() => getUserFavorites(member)}>이 사용자의 찜 목록 보기</button>
                            </li>
                        ))}
                        {selectedUserId && (
                            <div>
                                <h3>{selectedUserId}의 찜 목록</h3>
                                <ul>
                                    {selectedUserFavorites.map(favorite => (
                                        <li key={favorite.id}>{favorite.desertionNo}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
     */
    return (
        <div>
            <Menu />
            <h2>찜 목록</h2>
            <ul>
                {favorites.map(favorite => (
                    <li key={favorite.id}>
                        <span>{favorite.desertionNo}</span>
                        <button onClick={() => removeFavorite(favorite.desertionNo)}>찜 제거</button>
                        <button onClick={() => getMembersByDesertionNo(favorite.desertionNo)}>찜한 사용자 보기</button>
                    </li>
                ))}
            </ul>
            {selectedDesertionNo && (
                <div>
                    <h3>{selectedDesertionNo}을(를) 찜한 사용자 목록</h3>
                    <ul>
                        {members.map(member => (
                            <li key={member}>
                                <div>
                                    <span>{member}</span>
                                    <button onClick={() => getUserFavorites(member)}>
                                        이 사용자의 찜 목록 보기
                                    </button>
                                </div>
                                {userFavorites[member] && userFavorites[member].length > 0 && (
                                    <ul>
                                        {userFavorites[member].map(fav => (
                                            <li key={fav.id}>{fav.desertionNo}</li>
                                        ))}
                                    </ul>
                                )}
                                {userFavorites[member] && userFavorites[member].length === 0 && (
                                    <div>찜 목록이 없습니다.</div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Favorite;
