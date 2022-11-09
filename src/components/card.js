import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { news } from '../assets/news';
import * as Icon from 'react-bootstrap-icons';
import React from 'react';

export default function NewsCard() {
  return (
    <Container style={{ maxHeight: '650px',overflow:'auto' }}>
        <ListGroup variant='flush'>
            {news.map(item => (
                <ListGroup.Item key={item.id}>
                    <Row>
                        <Col sm={4}>
                            <img src={item.imageSrc} className="img-reponsive img-thumbnail" alt="..." />
                        </Col>
                        <Col sm={8}>
                            <Row>{item.discription}</Row>
                            <Row className='pt-4'>
                                <Col sm={1}>
                                    <Icon.HandThumbsUp size={25} />
                                </Col>
                                <Col sm={1}>
                                    <Icon.ChatLeft size={25} />
                                </Col>
                                <Col sm={1}>
                                    <Icon.Share size={25} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </Container>
  );
};