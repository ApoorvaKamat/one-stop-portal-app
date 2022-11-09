import React from "react";
import {NavBar} from "../components/navbar";
import {UpdateCarousel} from "../components/update-carousel";
import {TaskNewsLearn} from "../components/task-news-learn"
import { UserGuideModal } from "../components/user-guide-model";

export function Home(props) {
    const [modalShow, setModalShow] = React.useState(true);

    return (
        <>
        <UpdateCarousel />
        <TaskNewsLearn />
        {
        props.showModal?
        <UserGuideModal
        show={modalShow}
        onHide={() => setModalShow(false)}/> :<></>}
        </>
    )
}