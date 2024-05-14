/*import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Favorite() {
    const userData = useSelector(state => state.userData); // 사용자 데이터를 스토어에서 가져옵니다.
    const userId = userData.mem_id; // 사용자 아이디를 추출합니다.
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (userId) {
            getFavorites(userId); // 사용자 아이디가 있을 때에만 찜 목록을 가져옵니다.
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

    // 찜 추가 함수
    const addFavorite = (desertionNo) => {
        axios.post(`/favorites/add?memId=${userId}&desertionNo=${desertionNo}`)
            .then(response => {
                console.log("Favorite added successfully");
                // 찜 추가 후 찜 목록 다시 불러오기
                getFavorites(userId);
            })
            .catch(error => {
                console.error("Error adding favorite: ", error);
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
            <h2>찜 목록</h2>
            <ul>
                {favorites.map(favorite => (
                    <li key={favorite.mem_id}>
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
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Favorite() {
    const userData = useSelector(state => state.userData); // 사용자 데이터를 스토어에서 가져옵니다.
    const userId = userData.mem_id; // 사용자 아이디를 추출합니다.
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (userId) {
            getFavorites(userId); // 사용자 아이디가 있을 때에만 찜 목록을 가져옵니다.
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
