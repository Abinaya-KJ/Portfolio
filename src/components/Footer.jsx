import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="py-4 bg-white border-top">
            <Container>
                <Row>
                    <Col className="text-center text-muted">
                        <small>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
