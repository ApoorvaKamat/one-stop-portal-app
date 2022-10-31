import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/update-carousal.css';
//import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Carousel, CarouselItem } from 'react-round-carousel';


export function UpdateCarousel() {
  const items = Array(10)
  .fill('')
  .map((_, index) => ({
    alt: 'A random photo',
    image: `https://picsum.photos/${210 + index}`,
    content: (
      <div>
        <strong>Round Carousel</strong>
        <span>Slide number {index + 1}</span>
      </div>
    )
  }));

  return (
    <>
        <Container fluid className="bg-subhead">
            <Row>
                <Col><h4 className="pt-2 text-white">UPDATES</h4></Col>
            </Row>
        </Container>
       <div className="position-relative">
          <Carousel items={items} itemWidth={410} />
       </div>
        
    </>
  );
}