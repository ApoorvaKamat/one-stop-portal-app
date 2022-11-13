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

export function ChatModal(props) {
    const [newmsg, setnewmsg] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onmsgsend = () => setnewmsg([...newmsg, document.getElementById("id").value]); 
    

    return (
        <>
            <li className="p-2 border-bottom">
                <div className="d-flex justify-content-between" onClick={handleShow}>
                    <div className="d-flex flex-row">
                        <img
                            src="/man1.png"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                        />
                        <div className="pt-1">
                            <p className="fw-bold m-0" style={{ textAlign: "left" }}>{props.name}</p>
                            <p className="small text-muted">
                                {props.msg}
                            </p>
                        </div>
                    </div>
                </div>
            </li>

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
