import React, {useState} from "react";
import { Calendar } from "./calendar";
import "../style/projectHelpFaq.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';


export function meetingscheuler(props) {
  return (
    <>
         <Row className="w-100 h-50 mx-0">
                <Col sm={5} id="Calendar" className="border-end border-dark">
                    <Row>
                        <Col className="bg-subhead"><h4 className="pt-2 text-white">CALENDAR</h4></Col>
                    </Row>
                    <Row className="h-100 overflow-auto">
                        <Calendar />
                    </Row>
                    <Row>
                    <button type="button" class="btn btn-light">Submit meeting request</button>
                    </Row>
                    
                </Col>
                <Col sm={3}id="timings" className="border-end border-dark">
                <Row>
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
                    </Row>
                </Col>
        </Row>
    </>
  );
}