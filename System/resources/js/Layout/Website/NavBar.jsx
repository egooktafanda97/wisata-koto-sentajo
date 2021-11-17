import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import nav from "../../page/Router/index";
import { useLocation } from "react-router-dom";

export default function index() {
    const { pathname } = useLocation();
    useEffect(() => {
        $(document).ready(function () {
            var state = false,
                links = $(".navbar-responsive__link");
            $("#nav-icon3").click(function () {
                $(this).toggleClass("open");
                if (!state) {
                    $(".navbar-responsive").css(
                        "transform",
                        "translate3d(0,0,0)"
                    );
                    state = true;
                } else {
                    $(".navbar-responsive").css(
                        "transform",
                        "translate3d(-100%,0,0)"
                    );
                    state = false;
                }
            });
            $.each(links, function (index, value) {
                value.addEventListener("click", function () {
                    if (!state) {
                        $(".navbar-responsive").css(
                            "transform",
                            "translate3d(0,0,0)"
                        );
                        state = true;
                    } else {
                        $(".navbar-responsive").css(
                            "transform",
                            "translate3d(-100%,0,0)"
                        );
                        state = false;
                    }
                    $("#nav-icon3").removeClass("open");
                });
            });
        });
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 10) {
                $(".navbar").addClass("scroller");
            } else {
                $(".navbar").removeClass("scroller");
            }
        });
    });
    useEffect(() => {
        console.log(pathname);
    }, [pathname]);
    return (
        <div className="header">
            <div className="navbar">
                <div className="logo-header">
                    <img
                        style={{ width: "50%" }}
                        src="http://localhost/wisata-project/public/img/logo/header.png"
                    />
                </div>
                <div className="navbar__wrapper">
                    <nav className="navbar__menu">
                        <img
                            className="mobile-logo"
                            style={{ width: "50%" }}
                            src="http://localhost/wisata-project/public/img/logo/header.png"
                        />
                        <div id="nav-icon3">
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <ul className="navbar__nav">
                            {nav.map((navs, i) => (
                                <li className="navbar__link after-transform">
                                    <Link
                                        key={i}
                                        to={`${navs.path[0]}`}
                                        className={`${
                                            pathname == navs.path[0]
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <span
                                            className={`${
                                                pathname == navs.path[0]
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            {navs.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="navbar-responsive">
                <ul className="navbar-responsive__nav">
                    {nav.map((navs, i) => (
                        <li className="navbar-responsive__link after-transform">
                            <Link
                                key={i}
                                to={`${navs.path[0]}`}
                                className={`${
                                    pathname == navs.path[0] ? "active" : ""
                                }`}
                            >
                                {navs.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
