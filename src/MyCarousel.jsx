import { Carousel, Container } from "react-bootstrap";
import nature1 from "../public/nature-1.jpg";
import nature2 from "../public/nature-2.jpg";
import nature3 from "../public/nature-3.jpg";

function myCarousel() {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item>
          <img src={nature1} className="d-block w-100"></img>
        </Carousel.Item>

        <Carousel.Item>
          <img src={nature2} className="d-block w-100"></img>
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>I am Ayush Kumar</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={nature3} className="d-block w-100"></img>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
export default myCarousel;

