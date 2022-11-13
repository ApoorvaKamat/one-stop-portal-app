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
import {
  BasicStorage,
  ChatProvider,
  ExampleChatService,
  AutoDraft
} from "@chatscope/use-chat";


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
                    
                    

                </Modal.Body>
                <Modal.Footer>
                <div style={{ width: "100%" }}>
                    <input style={{ width: "80%" }}
                                id='id'
                                placeholder="Type message here"
                            />
                           <button onClick={onmsgsend} style={{ width: "20%" }}>Send</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
