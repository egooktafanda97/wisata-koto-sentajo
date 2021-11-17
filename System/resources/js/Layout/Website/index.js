import React, { Children } from "react";
import "../style/style.scss";
import BannerHome from "../../page/Home/Views/BannerHome";
import Nav from "./NavBar";
export default function index(props) {
    return (
        <>
            <Nav />
            <article id="wrapper">{props.components}</article>
        </>
    );
}
