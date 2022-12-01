import React, {useState} from "react";
import { SchedulingCalendar } from "./scheduling-calendar";
import "../style/projectHelpFaq.css";
import "../style/rounded-button.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from "react-bootstrap";
import { format } from 'date-fns'


export function MeetingScheduler(props) {
    const  timeArrr = ['9:15 AM - 9:45 AM CDT','11:00 AM - 12:30 PM CDT','02:30 AM - 03:00 PM CDT']
    const [meetingtime, setMeetingTime] = useState('');
    const [date, setDate] = useState(new Date());
    const [isTimeSeleted, setIsTimeSelected] = useState(false);
    const [isDateSeleted, setIsDateSelected] = useState(false);
    var now = new Date();
    now.setHours(0,0,0,0);

    const handleSetMeeting = (time) => {
        setMeetingTime(time);
    }
    const handleSubmit = () => {
        setIsTimeSelected(meetingtime!=='')
        if (date < now){
            alert("Please select valid date and time!")
        } else {
            setIsDateSelected(true)
            alert("Selected date is "+ date.toDateString() + " and time "+ meetingtime)
        }
        
        // if(isDateSeleted && isTimeSeleted){
        //     alert("Selected date is "+ + format(date,'dd/11/yyyy') + " and time "+ meetingtime)
        // } 
        // else
        // {
        //     alert("Please select valid date and time!")
        // }

    };
  return (
    <>
        <Row>
            <Col sm={5} id="Calendar">
                <div className="col-md-offset-3">
                    <SchedulingCalendar text={(e)=>setDate(e)} />
                </div>
                    
            </Col>
            <Col sm={5} id="Timings" className="col-md-offset-3">   
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Available time slots based on your availability
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {timeArrr.map((i,idx)=>(
                            <Dropdown.Item href="#/time-1" key={idx} onClick={()=>handleSetMeeting(i)}>{i}</Dropdown.Item>

                        ))}
                        </Dropdown.Menu>
                </Dropdown>
                {(isTimeSeleted) && (isDateSeleted) && <div className="mt-3">{
                "Meeting Scheduled at " + meetingtime + " on " + format(date,'dd/11/yyyy')
                }
                </div>} 
            </Col>
        <Row>
            <Button className="btn btn-success w-25 m-2" onClick={handleSubmit}>Submit Meeting Request</Button>
        </Row>
    </Row>
    </>
  );
}