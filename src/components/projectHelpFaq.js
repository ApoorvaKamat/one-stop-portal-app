import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TaskTable } from "./task-table";
import NewsCard from "./card"
import { Calendar } from "./calendar";
import { LearningModules } from "./learning-modules";
import { Conversations } from "./conversations";
import { faq } from "../assets/faq";
import { ContactCard } from "./contactCard";
import "../style/projectHelpFaq.css";


export function Faq(props) {

  console.log("isFethched",props.displayData);
  return (
    <div className={`d-flex flex-row justify-content-around`}>
        <div className={`d-flex flex-column border-end border-dark w-25 ${props.fetched?"min-width-15":""}`}>
            <h4 className="bg-subhead py-2 text-white m-0 mh-10">FILTERS</h4>
            <div>Call filters component here / create filter </div>
        </div>
        <div className={`d-flex flex-column border-end border-dark ${props.fetched?"mw-60":"w-75"}`}>
            <h4 className=" bg-subhead py-2 text-white mh-10">{props.fetched?"DISCUSSIONS":"FREQUENTLY ASKED QUESTIONS (FAQ)"}</h4>
            <NewsCard data={props.displayData}/>
        </div>
        {props.fetched?
            <div className={`d-flex flex-column border-end border-dark mw-40}`}>
              <h4 className=" bg-subhead py-2 text-white mh-10">MEET THE EXPERTS</h4>
              <ContactCard data={props.displayData} />
            </div>
          : 
          <></>}
    </div>
  );
}