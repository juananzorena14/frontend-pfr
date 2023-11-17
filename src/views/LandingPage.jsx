import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../css/landing.css"

const LandingPage = () => {
 return (
    <div className="landing-page">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1 className="title">Nuestras delicias comidas</h1>
            <p className="subtitle">
              Aprende a preparar nuestras deliciosas recetas.
            </p>
            <Button variant="primary" className="button">
              Empezar ahora
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <img src="https://via.placeholder.com/500" alt="Imagen" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
 );
};

export default LandingPage;