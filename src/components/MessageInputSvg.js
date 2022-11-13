import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    MessageGroup,
    MessageListContent,
    MessageSeparator,
} from "@chatscope/chat-ui-kit-react";
import * as Icon from 'react-bootstrap-icons';
import {nanoid} from "nanoid";
import {
  BasicStorage,
  ChatProvider,
  ExampleChatService,
  AutoDraft
} from "@chatscope/use-chat";

const messageIdGenerator = () => nanoid();
const groupIdGenerator = () => nanoid();

// Create serviceFactory
const serviceFactory = (storage, updateState) => {
  return new ExampleChatService(storage, updateState);
};

const chatStorage = new BasicStorage({groupIdGenerator, messageIdGenerator});

export function MessageInputSvg(props) {
    const msgArray = ['Hi','Oh I see, can we discuss this over a call', 'Thankyou','Bye']
    const [newmsg, setnewmsg] = useState([]);
    const [show, setShow] = useState(false);
    const [isHover, setIsHover]= useState('');
    const [returnMsg, setreturnMsg]= useState('');
    const [indexCounter, setIndexCounter]= useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlemouseenter = () => setIsHover('Green');
    const handleMouseLeave = () => setIsHover('Blue');

    const onmsgsend = () => {
        let value = document.getElementById("id").value;
        let index = indexCounter;
        if(value !== ""){
            setreturnMsg(msgArray[index]);
            setnewmsg([...newmsg, value,msgArray[index]]);
            index += 1;
            setIndexCounter(index);}

            else{
                setIsHover('Red');
            }
        }
        

    return (
        <>
            <Icon.Chat className="mx-2" size={20} onClick={handleShow}></Icon.Chat>

            <Modal show={show} onHide={handleClose} centered size='lg'
        aria-labelledby="example-custom-modal-styling-title"
>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
