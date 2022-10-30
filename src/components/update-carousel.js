import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/update-carousal.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export function UpdateCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
    <>
        <Container fluid className="bg-subhead">
            <Row>
                <Col><h4 className="pt-2 text-white">UPDATES</h4></Col>
            </Row>
        </Container>
        <Container fluid className="py-4 h-25">
          <Carousel responsive={responsive}>
              <Col>
                  <img src="/up1.jpeg" class="img-reponsive img-thumbnail" alt="update1"/>
              </Col>
              <Col>
                  <img src="/up2.jpeg" class="img-reponsive img-thumbnail" alt="update2"/>
              </Col>
              <Col>
                  <img src="calender.jpeg" class="img-reponsive img-thumbnail" alt="update3"/>
              </Col>
              <Col>
                  <img src="cloud.jpg" class="img-reponsive img-thumbnail" alt="update4"/>
              </Col>
          </Carousel>
        </Container>
        
    </>
  );
}