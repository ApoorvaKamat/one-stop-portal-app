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

export function MessageInputSvg(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
