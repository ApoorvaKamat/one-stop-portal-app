import React from "react";
import {NavBar} from "../components/navbar";
import {UpdateCarousel} from "../components/update-carousel";
import {TaskNewsLearn} from "../components/task-news-learn"

export function Home() {
    return (
        <>
        <NavBar />
        <UpdateCarousel />
        <TaskNewsLearn />
        </>
    )
}