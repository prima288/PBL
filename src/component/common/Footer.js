import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <Container>
        <Row>
          <Col md={12}>
            <Row>
              <Col md={4}>
                <h5>BERASIN STORE</h5>
                <p>
                  Beras sehat adalah varietas beras yang diproses tanpa bahan kimia sintetis seperti pestisida atau pupuk buatan, menjaga kualitas alami dan kebersihan. Ini umumnya dihasilkan melalui pertanian organik, menawarkan nutrisi lebih tinggi dan lebih baik untuk kesehatan karena tidak terkontaminasi oleh residu kimia.
                </p>
              </Col>
              <Col md={4}>
                <h5>Top Categories</h5>
                <ul>
                  <li><a href="#">Pupuk</a></li>
                  <li><a href="#">Beras</a></li>
                  {/* Tambahkan kategori-kategori lainnya */}
                </ul>
              </Col>
              <Col md={4}>
                <h5>Useful Links</h5>
                <ul>
                  <li><a href="#">Link 1</a></li>
                  <li><a href="#">Link 2</a></li>
                  <li><a href="#">Link 3</a></li>
                  <li><a href="#">Link 4</a></li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mt-3">
                <p>Contact Us: your@email.com</p>
                <p>Address: Your Address</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
