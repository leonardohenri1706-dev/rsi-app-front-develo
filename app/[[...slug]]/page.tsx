"use client";

import dynamic from "next/dynamic";

const HomeWithNoSSR = dynamic(() => import("@/app/home"), { ssr: false });

const Home = () => <HomeWithNoSSR />;

export default Home;
