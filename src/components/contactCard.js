import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { contacts } from "../assets/contacts";
import * as Icon from 'react-bootstrap-icons';
import "../style/card.css"
import { MessageInputSvg } from "./MessageInputSvg";


export function ContactCard(props) {
   
    const [show, setShow] = useState(false);
    const [cName,setCname] = useState('');
    const [cImg,setCImg] = useState('');
    const handleShow = (contact) => {
        setCname(contact.name);
        setCImg(contact.imageSrc)
        setShow(true)
}
    console.log("=============p==========",props.data);
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between" >
        {props.data.map((c,index) =>(
            <div className="m-2" key={index}>
            <div className="d-flex flex-column">
            <img src={c.imageSrc} className="contact-width" width={150} height={150} alt="..."></img>
            <div>{c.name}</div>
            <div className="d-flex flex-row justify-content-center">
            <Icon.Chat className="mx-2" size={20} onClick={()=>handleShow(c)}></Icon.Chat>
            <Icon.Telephone className="mx-2" size={20}></Icon.Telephone>
            <a href={c.linkedin} target='_blank' rel="noreferrer">
                <Icon.Linkedin className="mx-2" size={20} color={"blue"}></Icon.Linkedin>
            </a>    
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
                />}
    </div>
  );
}