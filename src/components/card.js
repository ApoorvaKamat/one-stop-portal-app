import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { news } from '../assets/news';
import * as Icon from 'react-bootstrap-icons';
import React from 'react';
import "../style/card.css"

export default function NewsCard(props) {
    console.log("==News==", props.data)
  return (
    <Container style={{ maxHeight: '650px',overflow:'auto' }}>
        <ListGroup variant='flush'>
            {props.data.map(item => (
                <ListGroup.Item key={item.id}>
                    <div className='d-flex flex-row '>
                            <div className='img-wh'>
                                <img src={item.imageSrc} className="img-reponsive img-thumbnail" alt="..." />
                            </div>
                            <div className='d-flex flex-column px-4'>
                            {item.title?<div className='text-start fs-4'>{item.title}</div>:<></>}
                                <div className='text-start'>{item.description}</div>
                                <div className='d-flex flex-row'>
                                     <Icon.HandThumbsUp className='mx-2' size={25} />
                                     <Icon.ChatLeft className='mx-2' size={25} />
                                     <Icon.Share className='mx-2' size={25} />
                                </div>
                            </div>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </Container>
  );
};