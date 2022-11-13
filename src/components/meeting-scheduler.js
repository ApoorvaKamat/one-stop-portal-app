import React, {useState} from "react";
import { SchedulingCalendar } from "./scheduling-calendar";
import "../style/projectHelpFaq.css";
import "../style/rounded-button.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';


export function MeetingScheduler(props) {
  return (
    <>
        <Row>
            <Col className="bg-subhead"><h4 className="pt-2 text-white">SCHEDULING ASSISTANT</h4></Col>
        </Row>
        <Row>
            <Col sm={5} id="Calendar">
                <div className="col-md-offset-3">
                    <SchedulingCalendar />
                </div>
                    
            </Col>
            <Col sm={5} id="Timings" className="col-md-offset-3">   
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Available time slots based on your availability
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/time-1">9:15 AM - 9:45 AM CDT</Dropdown.Item>
                        <Dropdown.Item href="#/time-2">11:00 AM - 12:30 PM CDT</Dropdown.Item>
                        <Dropdown.Item href="#/time-3">02:30 AM - 03:00 PM CDT</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        <Row>
            <button type="button" id="meetingRequest">Submit Meeting Request</button>
        </Row>
    </Row>
    </>
  );
}