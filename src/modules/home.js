import React from "react";
import {NavBar} from "../components/navbar";
import {UpdateCarousel} from "../components/update-carousel";
import {TaskNewsLearn} from "../components/task-news-learn"
import { UserGuideModal } from "../components/user-guide-model";

export function Home() {
    const [modalShow, setModalShow] = React.useState(true);

    return (
        <>
        <NavBar />
        <UpdateCarousel />
        <TaskNewsLearn />
        <UserGuideModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    )
}