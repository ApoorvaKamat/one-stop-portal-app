import React from "react";
import {NavBar} from "../components/navbar";
import {UpdateCarousel} from "../components/update-carousel";
import {TaskNewsLearn} from "../components/task-news-learn"
import { UserGuideModal } from "../components/user-guide-model";
import { ScrumBoard } from "../components/scrumBoard";
import { TaskView } from "../components/taskView";

export function Home(props) {
    const [modalShow, setModalShow] = React.useState(true);

    return (
        <>
        <div className={`d-flex flex-column border-end border-dark w-100 h-100`}>
            <UpdateCarousel />
            <TaskView />
        </div>
        
        {
        props.showModal?
        <UserGuideModal
        show={modalShow}
        onHide={() => setModalShow(false)}/> :<></>}
        </>
    )
}