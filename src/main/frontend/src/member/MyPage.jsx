import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { logout } from './Reducer'; // Assuming the path to your sessionReducer file
import {logout} from "./store";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function MyPage() {
    const dispatch = useDispatch();
    const userid = useSelector(state => state.session.userData.mem_id); // Accessing username from Redux store

    const [memberInfo, setMemberInfo] = useState(null);
    const [error, setError] = useState(null);
    const [newMemberInfo, setNewMemberInfo] = useState({
        mem_id: '',
        mem_pw: '',
        nickname: '',
        //birth: '',
        //phone: '',
        email: '',
        region: '',
        county_district: ''
    });
    const [updateMessage, setUpdateMessage] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/member/login");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Update the new member info state based on input changes
        setNewMemberInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    // api - 회원 정보 가져오기
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get(`/member/MyPage/${userid}`);
            setMemberInfo(response.data);
            setNewMemberInfo(response.data);
            setError(null);
        } catch (error) {
            setError('사용자 정보를 가져오는 중에 오류가 발생했습니다.');
            setMemberInfo(null);
        }
    };

    // api - 회원 정보 수정
    const handleUpdateMember = async () => {
        try {
            const response = await axios.put('/member/MyPage/Update', newMemberInfo);
            setUpdateMessage(response.data);
            alert('회원정보 수정 성공!');
            setMemberInfo(newMemberInfo);
        } catch (error) {
            console.error('Error updating member info:', error);
            alert(error);
            setUpdateMessage('회원정보 수정 실패');
        }
    };

    // api - 회원 탈퇴
    const handleResign = async () => {
        try {
            const response = await axios.post('/member/MyPage/Resign', { mem_id: userid });
            if (response.status === 200) {
                alert('회원 탈퇴 성공!');
                setMemberInfo(null);
                setNewMemberInfo({
                    mem_id: '',
                    mem_pw: '',
                    nickname: '',
                    //birth: '',
                    //phone: '',
                    email: '',
                    region: '',
                    county_district: ''
                });
                navigate(("/main"));
            } else {
                setMessage('회원 탈퇴에 실패했습니다.');
            }
        } catch (error) {
            setMessage('회원 탈퇴에 실패했습니다.');
        }
    };

    /*const handleMyBoardComment = async () => {
        try {
            const response = await axios.get(  );
            console.log(response.data);
        } catch (error) {
            console.error('내가 작성한 글과 댓글 불러오기 실패:', error);
        }
    };*/

    return (
        <div>
            <h2>My Page</h2>
            <p>Welcome, {userid}님!</p>
            <hr/>
            <div>
                <form onSubmit={handleSubmit}>
                    <button type="submit">{userid}님 정보 가져오기</button>
                </form>
                {error && <p>{error}</p>}

                {memberInfo && (
                    <div>
                        <h2>사용자 정보</h2>
                        <p>ID: {memberInfo.mem_id}</p>
                        <p>PW: {memberInfo.mem_pw}</p>
                        <p>Name: {memberInfo.name}</p>
                        <p>Email: {memberInfo.email}</p>
                        <p>Region: {memberInfo.region}</p>
                        <p>County_district: {memberInfo.county_district}</p>

                        <form>
                            <h2>회원 정보 수정</h2>
                            <label>
                                PW:
                                <input type="text" placeholder="새 비번" name="mem_pw" value={newMemberInfo.mem_pw}
                                       onChange={handleInputChange}/>
                            </label>
                            <label>
                                Name:
                                <input type="text" placeholder="새 이름" name="nickname" value={newMemberInfo.name}
                                       onChange={handleInputChange}/>
                            </label>
                            <label>
                                Email:
                                <input type="text" placeholder="새 이메일" name="email" value={newMemberInfo.email}
                                       onChange={handleInputChange}/>
                            </label>
                            <label>
                                Region:
                                <input type="text" placeholder="새 주소(시/군)" name="region" value={newMemberInfo.region}
                                       onChange={handleInputChange}/>
                            </label>
                            <label>
                                County District:
                                <input type="text" placeholder="새 주소(구)" name="countyDistrict"
                                       value={newMemberInfo.county_district}
                                       onChange={handleInputChange}/>
                            </label>
                            <button onClick={handleUpdateMember}>수정</button>
                            {updateMessage && <p>{updateMessage}</p>}
                        </form>
                        <hr/>
                        <form>
                            <h2>회원 탈퇴</h2>
                            <button type="button" onClick={handleResign}>회원 탈퇴</button>
                            {message && <p>{message}</p>}
                            {error && <p>{error}</p>}
                        </form>
                        {/*<form>
                            <button onClick={handleMyBoardComment}>내가 작성한 글과 댓글</button>
                        </form>*/}
                    </div>
                )}
            </div>
            <hr/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default MyPage;
