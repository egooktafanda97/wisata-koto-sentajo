import React from "react";
import BackgroundSlider from "react-background-slider";
export default function BannerHome() {
    const images = [
        "http://localhost/wisata-project/public/img/bg/bg1.jpg",
        "http://localhost/wisata-project/public/img/bg/bg2.jpg",
    ];
    return <BackgroundSlider images={images} duration={5} transition={2} />;
}
