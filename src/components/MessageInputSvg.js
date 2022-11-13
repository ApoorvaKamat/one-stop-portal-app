import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
} from "@chatscope/chat-ui-kit-react";
import * as Icon from 'react-bootstrap-icons';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useChat, ChatMessage, MessageStatus, MessageContentType, } from '@chatscope/use-chat';
import {nanoid} from "nanoid";
import {
  BasicStorage,
  ChatProvider,
  ExampleChatService,
  AutoDraft
} from "@chatscope/use-chat";
import { Chat } from './chat';

const messageIdGenerator = () => nanoid();
const groupIdGenerator = () => nanoid();

// Create serviceFactory
const serviceFactory = (storage, updateState) => {
  return new ExampleChatService(storage, updateState);
};

const chatStorage = new BasicStorage({groupIdGenerator, messageIdGenerator});

export function MessageInputSvg(props) {
    const [newmsg, setnewmsg] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onmsgsend = () => setnewmsg([...newmsg, document.getElementById("id").value]); 


    return (
        <>
            <Icon.Chat className="mx-2" size={20} onClick={handleShow}></Icon.Chat>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ position: "relative", height: "500px" }}>
                <MainContainer>
                        <ChatContainer>
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
                                     newmsg.map(i => {
                                        return <Message
                                        model={{
                                            message: i,
                                            sentTime: "just now",
                                            sender: "Joe",
                                            direction: "outgoing"
    
                                        }}
                                    /> 
                                    })

                                }
                            </MessageList>
                            
                        </ChatContainer>
                    </MainContainer>
                    <div style={{ width: "100%" }}>
                    <input
                                id='id'
                                placeholder="Type message here"
                            />
                           <button onClick={onmsgsend}>Send</button>
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
