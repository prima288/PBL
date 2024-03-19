import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { useNavigate } from 'react-router-dom'; // Menggunakan useNavigate
import axios from 'axios'; // Impor axios

function BuyerRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const saveBuyer = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/Buyer/register', {
        username: username,
        email: email,
        password: password,
      });

      // Handle successful response
      console.log('Data Inserted', response.data);

      // Show success alert
      window.alert('Buyer registration successful!');

      // Redirect to "/buyer/login" after successful registration
      navigate('/buyer/login');
    } catch (error) {
      // Handle error
      console.error('Error inserting data', error);
    }
  };

  return (
    <div>
      <Navbar />
      <Container className="mt-5">
        <Row>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div className="register-box p-4 shadow">
              <h2 className="text-center mb-4">Register</h2>
              <Form onSubmit={saveBuyer}>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Register
                </Button>
              </Form>
              <p className="mt-3 text-center">Already have an account? <Button variant="link" onClick={() => navigate('/buyer/login')}>Login now!</Button></p>
            </div>
          </Col>
          <Col md={6} className="d-none d-md-flex justify-content-center align-items-center">
            <div className="text-center">
              <h1 className="mb-4">BERASIN</h1>
              <p>Short description about BERASIN</p>
              <p>Login</p>
              <p>Sign Up</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default BuyerRegister;
