import { Container, Row, Col } from "react-bootstrap";

export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`H1 im web developer`} <span className="wrap">test</span>
            </h1>
            <p>QWEQWEQWEQE!@#@!#@#@!@#!#!</p>
            <button onClick={() => console.log("asdaad")}>Let's connect </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
