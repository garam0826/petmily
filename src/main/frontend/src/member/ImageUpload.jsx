import React, {useState} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import '../css/imgupload.css';
import {useNavigate} from "react-router-dom";
import Menu from "../Menu";

function ImageUpload() {
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploadedImagePath, setUploadedImagePath] = useState('');

    // 스토어에서 사용자 데이터 가져오기
    const userData = useSelector(state => state.userData);
    const userId = userData ? userData.mem_id : '';

    // 파일 선택 핸들러
    const imgSelectHandler = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        // 미리보기 설정
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // 파일 업로드 핸들러
    const imgUploadHandler = () => {
        if (!selectedFile) {
            alert('이미지를 선택하세요.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('mem_id', userId); // 스토어에서 가져온 사용자 ID 사용

        console.log('FormData 확인:', formData); // formData 로그 추가
        console.log('mem_id:', userId); // userId 로그 추가

        axios.post('/member/PetImg', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                console.log(response.data);
                if (response.data) {
                    alert('이미지 업로드 성공');
                    // 이미지 경로 추정 (여기서는 예시로 경로를 만듦)
                    const uploadedImageName = selectedFile.name;
                    const uploadedImagePath = `/uploads/${userId}/${uploadedImageName}`;
                    setUploadedImagePath(uploadedImagePath);
                    navigate("/member/images/analyze", { state: { imageUrl: uploadedImagePath } });
                } else {
                    alert('이미지 업로드 실패');
                }
            })
            .catch(error => {
                console.error('이미지 업로드 중 오류 발생:', error);
                alert('이미지 업로드 중 오류 발생');
            });
    };

    return (
        <div>
            <Menu/>
            <div className="upload-container">
                <h2>이미지 업로드</h2>
                <input type="file" onChange={imgSelectHandler}/>
                {preview && <img src={preview} alt="미리보기" style={{width: '750px', height: '750px'}}/>}
                <button onClick={imgUploadHandler}>업로드</button>
            </div>
        </div>
    );
}

export default ImageUpload;
