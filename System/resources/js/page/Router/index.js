import React, { lazy } from "react";

export default [
    {
        exact: true,
        name: "home",
        path: ["/", "/home"],
        label: "Home",
        Component: lazy(() => import("../Home/Views/index")),
    },
    {
        exact: true,
        name: "Tentang",
        path: ["/tentang"],
        label: "Tentang",
        Component: lazy(() => import("../About/Views/index")),
    },
    {
        exact: true,
        name: "Panduan Wisata",
        path: ["/panduan-wisata"],
        label: "Panduan Wisata",
        Component: lazy(() => import("../About/Views/index")),
    },
    {
        exact: true,
        name: "Event",
        path: ["/event"],
        label: "Event",
        Component: lazy(() => import("../About/Views/index")),
    },
    {
        exact: true,
        name: "Artikel",
        path: ["/artikel"],
        label: "Artikel",
        Component: lazy(() => import("../About/Views/index")),
    },
    {
        exact: true,
        name: "Paket Wisata",
        path: ["/paket-wisata"],
        label: "Paket Wisata",
        Component: lazy(() => import("../About/Views/index")),
    },
    {
        exact: true,
        name: "Gallery",
        path: ["/gallery"],
        label: "Gallery",
        Component: lazy(() => import("../About/Views/index")),
    },
    {
        exact: true,
        name: "Kontak",
        path: ["/kontak"],
        label: "Kontak",
        Component: lazy(() => import("../About/Views/index")),
    },
];
