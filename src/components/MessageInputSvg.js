import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
} from "@chatscope/chat-ui-kit-react";
import * as Icon from 'react-bootstrap-icons';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {nanoid} from "nanoid";
import {
  BasicStorage,
  ChatProvider,
  ExampleChatService,
  AutoDraft
} from "@chatscope/use-chat";
import { MeetingSchedule } from '../modules/task-schedule';
import { MeetingScheduler } from './meeting-scheduler';

const messageIdGenerator = () => nanoid();
const groupIdGenerator = () => nanoid();

// Create serviceFactory
const serviceFactory = (storage, updateState) => {
  return new ExampleChatService(storage, updateState);
};

const chatStorage = new BasicStorage({groupIdGenerator, messageIdGenerator});

export function MessageInputSvg(props) {
    const msgArray = ['Hi','Oh I see, can we discuss this over a call', 'Thank you','Bye']
    const [newmsg, setnewmsg] = useState([]);
    const [isHover, setIsHover]= useState('');
    const [showSchedular, setShowSchedular]= useState(false);
    const [indexCounter, setIndexCounter]= useState(0);

    const handlemouseenter = () => setIsHover('Green');
    const handleMouseLeave = () => setIsHover('Blue');
    const handleMeetingSchedule = () => {
        setShowSchedular(true);
    }
    const handleBackClick = () => {
        setShowSchedular(false);
    }

    const onmsgsend = () => {
        let input = document.getElementById("id");
        let index = indexCounter;
        if(input.value !== ""){
            setnewmsg([...newmsg, input.value,msgArray[index]]);
            index += 1;
            setIndexCounter(index);
            input.value='';}
        else{
            setIsHover('Red');
        }
        }
        

    return (
        <>
            <Modal show={props.show} onHide={props.hide} centered size='lg'
        aria-labelledby="example-custom-modal-styling-title"
>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='d-flex flex-row justify-content-evenly'>
                            <img src={props.image} className="contact-width" width={150} height={150} alt="..."></img>
                            <div className='d-flex flex-column mx-3'>
                                <div>{props.name}</div>
                                {!showSchedular?<Button variant='primary' className='d-flex flex-row justify-content-between' onClick={handleMeetingSchedule}>
                                   <Icon.CalendarPlus size={20}></Icon.CalendarPlus>
                                   <div>New Meeting</div>
                                </Button>
                                :<Button variant='primary' className='d-flex flex-row justify-content-between' onClick={handleBackClick}>
                                   <Icon.ArrowLeft size={20}></Icon.ArrowLeft>
                                   <div>Back</div>
                                </Button>}
                                {/* <div className='fs-6 fw-light'>Schedule Meeting</div> */}
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {showSchedular
                ?<MeetingScheduler />
                :<>
                <MainContainer>
                <ChatContainer style={{minHeight: "25rem",}}>
                            <MessageList>
                                <Message
                                    model={{
                                        message: props.msg,
                                        sentTime: "just now",
                                        sender: "Joe",
                                        direction: "incoming"

                                    }}
                                /> 
                                {
                                newmsg.map((i,index)=>(
                                        <Message key={index}
                                        model={{
                                            message: i,
                                            sentTime: "just now",
                                            sender: "Joe",
                                            direction: `${index%2 ==0 ? "outgoing":"incoming"}`
    
                                        }}
                                    />  
                                ))
                            }
                            </MessageList>
                            
                        </ChatContainer>
                    </MainContainer>
                    <div className='d-flex flex-row pt-3'>
                    <input
                                id='id'
                                type="text" 
                                className={`form-control w-75 text-start`} 
                                placeholder="Type you message here" 
                                aria-label="message"
                                
                            />
                    <Icon.Send 
                        color={isHover} 
                        size={30} 
                        onClick={onmsgsend} 
                        onMouseEnter={handlemouseenter} 
                        onMouseLeave={handleMouseLeave} 
                        className="m-2">
                            Send
                    </Icon.Send >
                    </div>
                </>
                }
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.hide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
