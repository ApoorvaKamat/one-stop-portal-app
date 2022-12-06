import React, {useContext} from "react";
import {NavBar} from "../components/navbar";
import {UpdateCarousel} from "../components/update-carousel";
import {TaskNewsLearn} from "../components/task-news-learn"
import { UserGuideModal } from "../components/user-guide-model";
import { ScrumBoard } from "../components/scrumBoard";
import { TaskView } from "../components/taskView";
import LoginPage from "../components/login";
import { Button } from "react-bootstrap";
import { Context } from "../store";

export function HomeLoggedIn() {
    const [modalShow, setModalShow] = React.useState(true);
    const [state,dispatch] = useContext(Context);
    return (
        <>
        <div className={`d-flex flex-column border-end border-dark w-100 h-100`}>
            <UpdateCarousel />
            <TaskView />
            {/* <Button onClick={()=>onLogin('abc')}>test</Button> */}
            {/* <LoginPage /> */}
        </div>

        </>
    )
}