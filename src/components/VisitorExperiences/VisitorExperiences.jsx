import React from "react";
import Slider from "react-slick";

export default function VisitorExperiences() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                <div className="text-center">
                    <video width="300" height="360" controls className="rounded-3 bg-black" loading='lazy'>
                        <source src="/huaweiSolar.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                    </video>
                </div>
                <div className="text-center">
                    <video width="300" height="360" controls className="rounded-3 bg-black" loading='lazy'>
                        <source src="/longiSolar.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                    </video>
                </div>
                <div className="text-center">
                    <video width="300" height="360" controls className="rounded-3 bg-black">
                        <source src="/WTS.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                    </video>
                </div>
                <div className="text-center">
                    <video width="300" height="360" controls className="rounded-3 bg-black">
                        <source src="/S-5.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                    </video>
                </div>
                <div className="text-center">
                    <video width="300" height="360" controls className="rounded-3 bg-black">
                        <source src="/enlight.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                    </video>
                </div>
                <div className="text-center">
                    <video width="300" height="360" controls className="rounded-3 bg-black">
                        <source src="/quartux.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                    </video>
                </div>
            </Slider>
        </div>
    );
}