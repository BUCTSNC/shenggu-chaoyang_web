import { Fire, UpdateRotation } from "@icon-park/react";
import { Carousel } from "antd";
import { climbTree } from "octa/lib/ClimbTree";
import React, { useContext, useEffect } from "react";
import { CateTree } from "../App";
import { ContainerNG } from "../components/Container";
import "./homePage.css";
import Links from "./Links";
import Navigation from "./Navigation";
import PostList from "./PostList";
import YHSY from "/carouseImg/Yhsy.jpg";
import internetWeek from "/carouseImg/internetWork.jpg";
import JXL from "/carouseImg/JXUl.png";
import { useHistory } from "react-router-dom";
import CaroselCard from "./CarouselCard";
import { getVisitedCount } from "../dm/hotList";
import httpUrl from "../utils/httpUrl";

export const HomePage = () => {
    const tree = useContext(CateTree);
    const { posts } = climbTree(tree);
    useEffect(() => {
        document.title = "首页 - 胜古朝阳";
    }, []);
    const history = useHistory();
    const carouselCards: {
        backgroundImage?: string;
        content: JSX.Element | string;
    }[] = [
        {
            backgroundImage: JXL,
            content: (
                <div
                    onClick={() => history.push("/")}
                    style={{ width: "100%", height: "100%", cursor: "pointer" }}
                >
                    {/* <h1>胜古朝阳</h1> */}
                </div>
            ),
        },
        {
            backgroundImage: YHSY,
            content: (
                <div
                    onClick={() =>
                        window.open(httpUrl("http://2022.yhsy.buctsnc.cn/"))
                    }
                    style={{ width: "100%", height: "100%", cursor: "pointer" }}
                >
                    {/* <h1>胜古朝阳</h1> */}
                </div>
            ),
        },
        {
            backgroundImage: internetWeek,
            content: (
                <div
                    onClick={() => history.push("/")}
                    style={{ width: "100%", height: "100%", cursor: "pointer" }}
                >
                    {/* <h1>胜古朝阳</h1> */}
                </div>
            ),
        },
    ];
    return (
        // <div id="homepage-bg" style={{ width: "100vw" }}>
        <div id="homepage">
            <ContainerNG>
                <Carousel autoplay>
                    {carouselCards.map(
                        ({ backgroundImage, content }, index) => (
                            <CaroselCard
                                key={index}
                                backgroundImage={backgroundImage}
                                content={content}
                            />
                        )
                    )}
                </Carousel>
                <Navigation />

                <PostList
                    firstColor="#ed5c5c"
                    secondColor="#6488f2"
                    titleColor="#FF6348"
                    title="最近更新"
                    icon={
                        <UpdateRotation theme="outline" size="24" fill="#ddd" />
                    }
                    iconpath="/refreshIcon"
                    postList={posts
                        .sort((a, b) => b.lastModified - a.lastModified)
                        .slice(0, 9)}
                    tagAttr="lastModified"
                />
                <PostList
                    firstColor="#ff6348"
                    titleColor="#FF6348"
                    secondColor="#2591fb"
                    title="浏览榜单"
                    icon={<Fire theme="outline" size="24" fill="#ddd" />}
                    iconpath="/hotIcon"
                    postList={posts
                        .map((post) => {
                            return {
                                ...post,
                                visited: getVisitedCount(`post/${post.path}`),
                            };
                        })
                        .sort((a, b) => b.visited - a.visited)
                        .slice(0, 9)}
                    tagAttr="visited"
                />
                <Links />
            </ContainerNG>
        </div>
        // </div>
    );
};

export default HomePage;
