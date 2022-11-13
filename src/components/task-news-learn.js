import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TaskTable } from "./task-table";
import NewsCard from "./card"
import { Calendar } from "./calendar";
import { LearningModules } from "./learning-modules";
import { Conversations } from "./conversations";
import { news } from "../assets/news";

export function TaskNewsLearn() {
  return (
    <>
         <Row className="w-100 h-50 mx-0">
                <Col sm={4} id="task-caleder" className="border-end border-dark h-100">
                    <Row>
                        <Col className="bg-subhead"><h4 className="pt-2 text-white">TODAY'S TASKS</h4></Col>
                    </Row>
                    <Row className="h-25 overflow-auto" style={{ maxHeight: '225px'}}>
                        <TaskTable />
                    </Row>
                    <Row>
                        <Col className="bg-subhead"><h4 className="pt-2 text-white">CALENDAR</h4></Col>
                    </Row>
                    <Row className="h-100 overflow-auto">
                        <Calendar />{/*Add calender here*/}
                    </Row>
                </Col>
                <Col sm={5} id="news" className="border-end border-dark">
                    <Row>
                        <Col className="bg-subhead"><h4 className="pt-2 text-white">NEWS AND SOCIAL MEDIA</h4></Col>
                    </Row>
                    <Row>
                        <NewsCard data={news}></NewsCard>
                    </Row>
                </Col>
                <Col sm={3}id="learning" className="border-end border-dark">
                    <Row>
                        <Col className="bg-subhead"><h4 className="pt-2 text-white">LEARNING MODULES</h4></Col>
                    </Row>
                    <Row>
                        <LearningModules />
                    </Row>
                    <Row>
                        <Col className="bg-subhead"><h4 className="pt-2 text-white">CONVERSATIONS</h4></Col>
                    </Row>
                    <Row>
                        <Conversations />
                    </Row>
                </Col>
        </Row>
    </>
  );
}