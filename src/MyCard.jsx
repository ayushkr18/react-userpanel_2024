import { Card, Col, Container, Row } from "react-bootstrap";
import book1 from "../public/book-1.jpg";
import book2 from "../public/book-2.jpg";

function MyCard() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img src={book1}></Card.Img>
            <Card.Body>
              <Card.Title>Horror Book</Card.Title>
              <Card.Text>This is horror book</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img src={book2}></Card.Img>
            <Card.Body>
              <Card.Title>Comedy Book</Card.Title>
              <Card.Text>This is Comedy book</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
export default MyCard;
