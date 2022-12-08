import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { contacts } from "../assets/contacts";
import * as Icon from 'react-bootstrap-icons';
import "../style/card.css"
import { MessageInputSvg } from "./MessageInputSvg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";


export function ContactCard(props) {
   
    const [show, setShow] = useState(false);
    const [cName,setCname] = useState('');
    const [cImg,setCImg] = useState('');
    const [showCall,setShowCall] = useState(false)
    const handleShowChat = (contact) => {
        setCname(contact.name);
        setCImg(contact.imageSrc)
       }

    const chatTootip = (
        <Tooltip id={`chatTootip`}>
            <strong>Check with the Expert</strong>
        </Tooltip>
    )
    const callTooltip = (
        <Tooltip id={`callTooltip`}>
            <strong>Schedule a Meeting</strong> 
        </Tooltip>
    )
    const linkedintooltip = (
        <Tooltip id={`linkedintooltip`}>
            <strong>View LinkedIn Profile</strong>
        </Tooltip>
    )
       
    console.log("=============p==========",props.data);
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between" >
        {props.data.map((c,index) =>(
            <div className="m-2" key={index}>
            <div className="d-flex flex-column">
            <img src={c.imageSrc} className="contact-width" width={150} height={150} alt="..."></img>
            <div>{c.name}</div>
            <div className="d-flex flex-row justify-content-center">
            <OverlayTrigger placement="bottom" overlay={chatTootip}>
                <Icon.Chat className="mx-2" size={20} onClick={()=>{setShowCall(false);setShow(true); handleShowChat(c)}}></Icon.Chat>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={callTooltip}>
                <Icon.CalendarPlus className="mx-2" size={20} onClick={()=>{setShowCall(true);setShow(true);handleShowChat(c)}}></Icon.CalendarPlus>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={linkedintooltip}>
                <a href={c.linkedin} target='_blank' rel="noreferrer">
                    <Icon.Linkedin className="mx-2" size={20} color={"blue"}></Icon.Linkedin>
                </a>  
            </OverlayTrigger>
              
            </div>
        </div>
        </div>
            
        ))}
        {show && <MessageInputSvg 
                    name = {cName}
                    image = {cImg}
                    show ={show}
                    hide = {()=>setShow(false)}
                    msg = "Welcome to the chat with expert. Please send you first message here!"
                    showCall={showCall}
                />}
    </div>
  );
}