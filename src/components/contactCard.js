import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { contacts } from "../assets/contacts";
import * as Icon from 'react-bootstrap-icons';
import "../style/card.css"
import { ChatModal } from "./chat-modal";
import { MessageInputSvg } from "./MessageInputSvg";


export function ContactCard(props) {
   // const [contactData, setContactData] = useState([]);
   const contactData =[];
    const checkContactData = (id) => {
        if(contactData.length<=0){
           contactData.push(id);
           return true;
        }
        else{
            if(!contactData.includes(id)){
                contactData.push(id);
                return true;
            }
        }
        console.log('=====id======', contactData);
        return false;
        
    }
       
    
  return (
    <div className="d-flex flex-row flex-wrap justify-content-evenly" >
        {props.data.map(item =>(
            <div className="m-2" key={item.id}>
                {item.contacts.map(c=>(
                    <div key={c.id}>
                    {checkContactData(c.id)?
                    <div key={c.id}>
                    <img src={c.imageSrc} className="contact-width" width={170} height={170} alt="..."></img>
                    <div>{c.name}</div>
                    <div className="d-flex flex-row justify-content-center">
                        <MessageInputSvg 
                            name = {c.name}
                            msg = "message"
                        />
                        
                        <Icon.Telephone className="mx-2" size={20}></Icon.Telephone>
                        <a href={c.linkedin} target='_blank' rel="noreferrer">
                            <Icon.Linkedin className="mx-2" size={20} color={"blue"}></Icon.Linkedin>
                        </a>     
                    </div>
                </div>:<></>}
                    </div>
                ))}
            </div>
        ))}
    </div>
  );
}