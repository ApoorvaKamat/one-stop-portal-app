import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/update-carousal.css';
//import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Carousel, CarouselItem } from 'react-round-carousel';
import { carouselUpdates } from "../assets/carouselUpdates";


export function UpdateCarousel() {
  const items = carouselUpdates.map((_, index) => ({
    alt: _.discription,
    image: _.imageSrc,
    content: (
      <div>
        <strong>{_.discription}</strong>
        {/* <span>Slide number {_.id}</span> */}
      </div>
    )
  }));

  return (
    <>
        {/* <Container fluid className="bg-subhead">
            <Row>
                <Col><h4 className="pt-2 text-white">UPDATES</h4></Col>
            </Row>
        </Container>
       <div className="position-relative overflow-hidden">
          <Carousel items={items} itemWidth={410} />
       </div> */}

       <div className={`d-flex flex-row`}>
        <div className={`d-flex flex-column border-end border-dark w-100`}>
            <h4 className="bg-subhead py-2 text-white m-0 mh-10">UPDATES</h4>
            <div className="position-relative overflow-hidden">
              <Carousel items={items} itemWidth={410} />
            </div>
        </div>
    </div>
        
    </>
  );
}