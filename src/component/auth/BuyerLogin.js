import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Menggunakan useNavigate
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import axios from 'axios'; // Impor axios
import { useAuth } from '../../hooks/AuthContext';  // Import useAuth untuk mengatur state autentikasi

function BuyerLogin() {
  const { dispatch } = useAuth();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;

      const response = await axios.post('http://localhost:8080/buyer/login', { username, password });

      if (response.data.status === 'success') {
        // Simpan data session di localStorage atau gunakan cara sesuai kebutuhan aplikasi Anda
        localStorage.setItem('buyer_id', response.data.buyer_id);
        localStorage.setItem('buyer_username', response.data.buyer_username);
        localStorage.setItem('buyer_email', response.data.buyer_email);

        console.log('Login Successfull', response.data);

        // Show success alert
        window.alert('Welcome!');

        // Redirect ke dashboard buyer setelah login sukses
        navigate("/buyer");
      } else {
        setErrorMessage('Login failed. Username or password is incorrect.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setErrorMessage('An error occurred during login. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
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
                  <Form onSubmit={submitHandler}> {/* Tambahkan onSubmit handler */}
                    <Form.Group controlId="formBasicUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Enter username" ref={usernameRef} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" ref={passwordRef} />
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
      <Footer />
    </div>
  );
}

export default BuyerLogin;
