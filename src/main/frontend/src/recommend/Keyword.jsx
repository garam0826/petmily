import React, { useState } from 'react';
import axios from 'axios';
import '../css/keywordRec.css';
/*
const keywords = [
    '강아지', '고양이', '토끼', '새', '햄스터', '거북이', '물고기', '도마뱀', '말', '소'
];

function Keyword() {
    const [selectedKeywords, setSelectedKeywords] = useState([]);

    const handleKeywordClick = (keyword) => {
        if (selectedKeywords.includes(keyword)) {
            setSelectedKeywords(selectedKeywords.filter(k => k !== keyword));
        } else if (selectedKeywords.length < 3) {
            setSelectedKeywords([...selectedKeywords, keyword]);
        }
    };

    const handleSubmit = () => {
        if (selectedKeywords.length === 3) {
            axios.post('/api/submitKeywords', { keywords: selectedKeywords })
                .then(response => {
                    console.log('Keywords submitted successfully:', response.data);
                    // 추가적인 작업을 여기에 수행
                })
                .catch(error => {
                    console.error('Error submitting keywords:', error);
                });
        } else {
            alert('Please select exactly 3 keywords.');
        }
    };

    return (
        <div className="keyword-selector">
            <img src="https://cdn.manzlab.com/news/photo/201911/4027_8640_5532.jpg" alt="Background" className="background-image" />
            <div className="keywords-container">
                {keywords.map((keyword, index) => (
                    <div
                        key={index}
                        className={`keyword ${selectedKeywords.includes(keyword) ? 'selected' : ''}`}
                        onClick={() => handleKeywordClick(keyword)}
                    >
                        {keyword}
                    </div>
                ))}
            </div>
            <button className="submit-button" onClick={handleSubmit}>제출</button>
        </div>
    );
}
*/

const images = [
    { src: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/watchful-dog-patricia-hofmeester.jpg', label: '경계하는' },
    { src: 'https://dogfriendlyplaces.eu/images/images/2048x2048/153844600155f2d0201e490.jpg', label: '긍정적인' },
    { src: 'https://hips.hearstapps.com/hmg-prod/images/friendliest-dog-breeds-golden-1578596627.jpg', label: '다정한/친근한' },
    { src: 'https://www.setarehfirm.com/wp-content/uploads/2023/09/vizsla-dog-1040x675.jpg', label: '단호한' },
    { src: 'https://t4.ftcdn.net/jpg/02/84/19/11/360_F_284191199_435Z2Ghq693dvFQRxIAB0pmJ4KrRJuDD.jpg', label: '똑똑한' },
    { src: 'https://example.com/image6.jpg', label: '모험적인' },
    { src: 'https://example.com/image7.jpg', label: '민감한' },
    { src: 'https://example.com/image8.jpg', label: '민첩한' },
    { src: 'https://d3544la1u8djza.cloudfront.net/HPI/resource-center/articles/2021/04-15/happy+golden+retriever+playing+with+a+stick+outside-min.jpg', label: '밝은' },
    { src: 'https://example.com/image10.jpg', label: '뻔뻔한' },
    { src: 'https://example.com/image10.jpg', label: '사교적인' },
    { src: 'https://example.com/image10.jpg', label: '성실한' },
    { src: 'https://example.com/image10.jpg', label: '순응하는' },
    { src: 'https://example.com/image10.jpg', label: '용감한' },
    { src: 'https://example.com/image10.jpg', label: '위엄 있는' },
    { src: 'https://example.com/image10.jpg', label: '인내심 있는' },
    { src: 'https://example.com/image10.jpg', label: '자기 주장이 강한' },
    { src: 'https://example.com/image10.jpg', label: '자부심 있는' },
    { src: 'https://example.com/image10.jpg', label: '자신감 있는' },
    { src: 'https://example.com/image10.jpg', label: '자연스러운' },
    { src: 'https://example.com/image10.jpg', label: '자유분방한' },
    { src: 'https://example.com/image10.jpg', label: '재미있는' },
    { src: 'https://example.com/image10.jpg', label: '적극적인' },
    { src: 'https://example.com/image10.jpg', label: '적응성 있는' },
    { src: 'https://example.com/image10.jpg', label: '정중한' },
    { src: 'https://example.com/image10.jpg', label: '주의 깊은' },
    { src: 'https://example.com/image10.jpg', label: '차분한' },
    { src: 'https://example.com/image10.jpg', label: '책임감 있는' },
    { src: 'https://example.com/image10.jpg', label: '충성스러운' },
    { src: 'https://example.com/image10.jpg', label: '친절한' },
    { src: 'https://example.com/image10.jpg', label: '카리스마 있는' },
    { src: 'https://example.com/image10.jpg', label: '협조적인' },
    { src: 'https://example.com/image10.jpg', label: '호기심 많은' },
    { src: 'https://example.com/image10.jpg', label: '활기찬' },
    { src: 'https://example.com/image10.jpg', label: '활동적인' }
];

function Keyword() {
    const [selectedKeywords, setSelectedKeywords] = useState([]);

    const handleImageClick = (label) => {
        setSelectedKeywords((prev) => {
            if (prev.includes(label)) {
                return prev.filter((keyword) => keyword !== label);
            } else {
                if (prev.length < 3) {
                    return [...prev, label];
                } else {
                    alert('You can only select up to 3 keywords.');
                    return prev;
                }
            }
        });
    };

    const handleSubmit = () => {
        if (selectedKeywords.length !== 3) {
            alert('You must select exactly 3 keywords.');
            return;
        }

        axios.post('/api/submit-keywords', { keywords: selectedKeywords })
            .then(response => {
                console.log('Keywords submitted successfully:', response.data);
                // 추가로 필요한 작업 수행 (예: 알림 표시, 페이지 이동 등)
            })
            .catch(error => {
                console.error('Error submitting keywords:', error);
            });
    };

    return (
        <div className="image-grid-container">
            <div className="image-grid">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`image-item ${selectedKeywords.includes(image.label) ? 'selected' : ''}`}
                        onClick={() => handleImageClick(image.label)}
                    >
                        <img src={image.src} alt={image.label} />
                        <div className="label">{image.label}</div>
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit} className="submit-button">Submit Keywords</button>
        </div>
    );
}

export default Keyword;
