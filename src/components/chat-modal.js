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
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

export function ChatModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            </MessageList>
                            <MessageInput
                                placeholder="Type message here"
                            />
                        </ChatContainer>
                    </MainContainer>
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
