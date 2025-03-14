import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import './Avisos.scss'
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function Avisos() {
      const alertClicked = () => {
        alert("You clicked the third ListGroupItem");
      };
  return (
    <Container>
      <Row className="Linha">
        <Col className="ColunaAvisos" sm={5}>
          <Stack>
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item action onClick={alertClicked}>Aviso 1</ListGroup.Item>
              <ListGroup.Item action onClick={alertClicked}>Aviso 2</ListGroup.Item>
              <ListGroup.Item action onClick={alertClicked}>Aviso 3</ListGroup.Item>
              <ListGroup.Item action onClick={alertClicked}>Aviso 4</ListGroup.Item>
              <ListGroup.Item action onClick={alertClicked}>Aviso 5</ListGroup.Item>
              <ListGroup.Item action onClick={alertClicked}>Aviso 6</ListGroup.Item>
              <ListGroup.Item action onClick={alertClicked}>Aviso 7</ListGroup.Item>
              <ListGroup.Item action onClick={alertClicked}>Aviso 8</ListGroup.Item>
            </ListGroup>
          </Stack>
        </Col>
        <Col className="ColunaAviso" sm={7}>
          <Card className="text-center">
      <Card.Header><Card.Title>TITULO DO AVISO</Card.Title></Card.Header>
      <Card.Body>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Avisos;
