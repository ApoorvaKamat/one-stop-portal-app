import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { news } from '../assets/news';
import * as Icon from 'react-bootstrap-icons';
import React, { useState } from 'react';
import "../style/card.css"
import { Button } from 'react-bootstrap';
import { tr } from 'date-fns/locale';

export default function NewsCard(props) {
    const [readMoreText, setReadMoreText] = useState({});
    const [showallList, setShowAllList] = useState(true);
    const handleClick = (item) => {
        setReadMoreText(item);
        setShowAllList(false);
    }
    console.log("==News==", props.data)
  return (
    <div style={{ maxHeight: '650px',overflow:'auto' }}>
        <ListGroup variant='flush'>
            {showallList ? props.data.map(item => (
                <ListGroup.Item key={item.id}>
                    <div className='d-flex flex-row '>
                        <img src={item.imageSrc} className="contact-width" width={150} height={150} alt="..." />
                            <div className='d-flex flex-column px-4'>
                            {item.title && <div className='text-start fs-4'>{item.title}</div>}
                                <div className='text-start'>{item.description}</div>
                                <div className='d-flex flex-row mt-2'>
                                     <Icon.HandThumbsUp className='mx-2' size={25} />
                                     <Icon.ChatLeft className='mx-2' size={25} />
                                     <Icon.Share className='mx-2' size={25} />
                                </div>
                                {item.title &&<div className='w-30 mt-2'>
                                 <Button variant='primary' className='d-flex flex-row justify-content-evenly' onClick={()=>handleClick(item)}>
                                        <Icon.CardText size={25} className='mr-1'></Icon.CardText>
                                        <div>Read More</div>
                                </Button>
                                </div>}
                            </div>
                    </div>
                </ListGroup.Item>
            )):<ListGroup.Item>
            <div className='d-flex flex-row '>
                <img src={readMoreText.imageSrc} className="contact-width" width={150} height={150} alt="..." />
                    <div className='d-flex flex-column px-4'>
                    {readMoreText.title && <div className='text-start fs-4'>{readMoreText.title}</div>}
                        <div className='text-start'>{readMoreText.description}</div>
                        <div className='text-start'>{readMoreText.readmore}</div>
                        <div className='d-flex flex-row mt-2'>
                             <Icon.HandThumbsUp className='mx-2' size={25} />
                             <Icon.ChatLeft className='mx-2' size={25} />
                             <Icon.Share className='mx-2' size={25} />
                        </div>
                        {readMoreText.title && <div className='w-30 mt-2'>
                        <Button variant='primary' className='d-flex flex-row justify-content-evenly' onClick={()=>setShowAllList(true)}>
                                <Icon.CardText size={25} className='mr-1'></Icon.CardText>
                                <div>Read Less</div>
                        </Button>
                        </div>}
                    </div>
            </div>
        </ListGroup.Item>}
        </ListGroup>
    </div>
  );
};