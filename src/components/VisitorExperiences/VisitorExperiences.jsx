import React from "react";
import Slider from "react-slick";

export default function VisitorExperiences() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="text-center px-3">
                    <lite-youtube
                        class='shadow-lg rounded-3 testimonios-video '
                        videoid='4yjpMxuDMTA'
                        videotitle='Quartux'
                    ></lite-youtube>
                </div>
                <div className="text-center px-3">
                    <lite-youtube
                        class='shadow-lg rounded-3 testimonios-video'
                        videoid='Ws9BBT7zILk'
                        videotitle='Huawei Solar'
                    ></lite-youtube>
                </div>
                <div className="text-center px-3">
                    <lite-youtube
                        class='shadow-lg rounded-3 testimonios-video'
                        videoid='Ca1D_cxJYbs'
                        videotitle='S-5'
                    ></lite-youtube>
                </div>
                <div className="text-center px-3">
                    <lite-youtube
                        class='shadow-lg rounded-3 testimonios-video'
                        videoid='JiP0kqlvXFw'
                        videotitle='Enlight'
                    ></lite-youtube>
                </div>
                <div className="text-center px-3">
                    <lite-youtube
                        class='shadow-lg rounded-3 testimonios-video'
                        videoid='4h8S2b3j_I4'
                        videotitle='Longi Solar'
                    ></lite-youtube>
                </div>
                <div className="text-center px-3">
                    <lite-youtube
                        class='shadow-lg rounded-3 testimonios-video'
                        videoid='470LAzxXxJs'
                        videotitle='WTS'
                    ></lite-youtube>
                </div>
            </Slider>
        </div>
    );
}