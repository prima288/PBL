import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Jika Anda menggunakan React Router

const SellerLogin = () => {
  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="login-box shadow p-4">
            <Row>
              <Col md={6}>
                <img src="petani.jpg" alt="Petani" className="img-fluid" />
              </Col>
              <Col md={6} className="text-center align-self-center">
                <h2>BERASIN</h2>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="btn-block">
                    Sign In
                  </Button>
                </Form>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <p>Belum punya akun? <Link to="/register">Daftar sekarang!</Link></p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SellerLogin;
