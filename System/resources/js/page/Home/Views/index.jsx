import React from "react";
import "../../style/style.scss";
import BannerHome from "./BannerHome";
export default function index() {
    return (
        <>
            <BannerHome />
            <div id="container-spa">
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                    }}
                ></div>
                <h2>ok</h2>
            </div>
        </>
    );
}
