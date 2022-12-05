import React, {useState} from "react";
import NewsCard from "./card"
import { ContactCard } from "./contactCard";
import "../style/projectHelpFaq.css";
import { ScrumBoard } from "./scrumBoard";


export function TaskView(props) {
  return (
    <div className={`d-flex flex-row`}>
        <div className={`d-flex flex-column border-end border-dark w-100`}>
            <h4 className="bg-subhead py-2 text-white m-0 mh-10">TASKS</h4>
            <div className="d-flex flex-column max-height-50vh" style={{ maxHeight: '50vh',overflow:'auto' }}>
              <ScrumBoard />
            </div>
        </div>
    </div>
  );
}