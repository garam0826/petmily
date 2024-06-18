import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/slidebanner.css';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', right: '10px' }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
            onClick={onClick}
        />
    );
};

const SlideBanner = () => {
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };

    const recommendations = [
        {
            image: 'https://cdn.vectorstock.com/i/2000v/61/88/group-of-dog-breeds-vector-20466188.avif',
            title: '개인 선호도 프로필을 통한 추천 기능',
            description: '질문을 통해 사용자에게 추천해 드립니다.',
            link: "/recommend/question", // 추천 페이지로의 링크
        },
        {
            image: 'https://cdn.vectorstock.com/i/1000x1000/70/70/people-training-playing-pet-on-walk-at-playground-vector-34167070.webp',
            title: '키워드 선택을 통한 추천 기능',
            description: '사용자가 선택한 키워드를 기반으로 추천해 드립니다.',
            link: "/recommend/keyword", // 추천 페이지로의 링크
        },
        {
            image: 'https://cdn.vectorstock.com/i/2000v/88/14/cat-or-dog-paw-pet-foot-trail-print-vector-27948814.avif',
            title: '보호 중인 동물 탐색',
            description: '현재 보호 중인 유기견들을 보실 수 있습니다.',
            link: "/animal",
        },
    ];

    console.log('slider rendered', recommendations);

    return (
        <div className="recommend-slide">
            <Slider {...settings}>
                {recommendations.map((item, index) => (
                    <div key={index} className="slide-item">
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <button
                            className="slide-banner-button"
                            onClick={() => navigate(item.link)}
                        >
                            자세히 보기
                        </button>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlideBanner;
