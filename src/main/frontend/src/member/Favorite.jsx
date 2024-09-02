import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Menu from "../Menu";
import '../css/menu.css';
import '../css/result.css';
import '../css/member.css';
import Favorite_Result from "./Favorite_Result";
import Favorite_Result_Mem from "./Favorite_Result_Mem";

function Favorite() {
    const userData = useSelector(state => state.userData); // 사용자 데이터를 스토어에서 가져옴.
    const userId = userData ? userData.mem_id : '';
    const [favorites, setFavorites] = useState([]);
    const [members, setMembers] = useState([]);
    const [selectedDesertionNo, setSelectedDesertionNo] = useState('');
    const [selectedUserId, setSelectedUserId] = useState(''); // 선택된 사용자의 ID 상태 추가
    const [selectedUserFav, setSelectedUserFav] = useState([]); // 선택된 사용자의 찜 목록 상태 추가
    const [loadingUserFav, setLoadingUserFav] = useState(true); // 선택된 사용자의 찜 목록 로딩 상태 추가

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
    const getMemberDesertionNo = (desertionNo) => {
        axios.get(`/favorites/members/${desertionNo}`)
            .then(response => {
                const otherMembers = response.data.filter(member => member !== userId);
                setMembers(otherMembers);
                setSelectedDesertionNo(desertionNo);
            })
            .catch(error => {
                console.error("Error fetching members: ", error);
            });
    };

    // 선택된 사용자의 찜 목록을 불러오기
    const getSelectedUserFav = (memId) => {
        setLoadingUserFav(true); // 로딩 상태 설정
        axios.get(`/favorites/list?memId=${memId}`)
            .then(response => {
                setSelectedUserFav(response.data);
            })
            .catch(error => {
                console.error("Error fetching selected user's favorites: ", error);
            })
            .finally(() => {
                setLoadingUserFav(false); // 로딩 상태 해제
            });
    };

    // "이 사용자의 찜 목록 보기" 버튼 클릭 시 실행되는 함수
    const handleFavList = (memId) => {
        setSelectedUserId(memId); // 선택된 사용자의 ID 설정
        getSelectedUserFav(memId); // 선택된 사용자의 찜 목록 가져오기
    };

    // 찜 제거 함수
    const removeFavorite = (desertionNo) => {
        axios.delete(`/favorites/remove?memId=${userId}&desertionNo=${desertionNo}`)
            .then(response => {
                console.log("Favorite removed successfully");
                alert('찜 삭제되었습니다!');
                // 찜 제거 후 찜 목록 다시 불러오기
                getFavorites(userId);
                window.location.reload();
            })
            .catch(error => {
                console.error("Error removing favorite: ", error);
            });
    };

    return (
        <div>
            <header>
                <Menu />
            </header>
            <div>
                <Favorite_Result
                    matches={matches}
                    loading={loading}
                    error={error}
                    removeFavorite={removeFavorite}
                    getMemberDesertionNo={getMemberDesertionNo}
                />
            </div>
            {selectedDesertionNo && (
                <div>
                    <h3>찜한 다른 사용자 목록</h3>
                    <div>
                        {members.map(member => (
                            <div key={member}>
                                <div>
                                    <span>{member}</span>
                                    <button className="signup custom-button" onClick={() => handleFavList(member)}>
                                        이 사용자의 찜 목록 보기
                                    </button>
                                </div>
                                {selectedUserId === member && (
                                    <div>
                                        {loadingUserFav ? (
                                            <p>Loading...</p>
                                        ) : (
                                            <Favorite_Result_Mem
                                                matches={selectedUserFav}
                                                loading={loadingUserFav}
                                                error={error}
                                            />
                                        )}
                                    </div>
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