import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Jika menggunakan React Router

const SellerRegister = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div className="register-box p-4 shadow">
            <h2 className="text-center mb-4">Register</h2>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPasswordConfirmation">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-3">
                Register
              </Button>
            </Form>
            <p className="mt-3 text-center">Sudah punya akun? <Link to="/login">Masuk sekarang!</Link></p>
          </div>
        </Col>
        <Col md={6} className="d-none d-md-flex justify-content-center align-items-center">
          <div className="text-center">
            <h1 className="mb-4">BERASIN</h1>
            <p>Deskripsi singkat tentang BERASIN</p>
            <p>Login</p>
            <p>Sign Up</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SellerRegister;
