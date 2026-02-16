import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section-wrapper contact-section">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={8}>
                        <h6 className="text-uppercase tracking-wide mb-3 text-muted">Get In Touch</h6>
                        <h2 className="display-5 fw-bold mb-5">Let's Connect</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={8} md={10}>
                        <div className="contact-card p-5 rounded-4 text-center">
                            <h5 className="mb-4 fw-normal text-muted">
                                Open to internships and full-time opportunities in Chennai & Bengaluru.
                            </h5>

                            <div className="d-flex flex-wrap justify-content-center gap-4 gap-md-5 mt-4">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jabinaya034@gmail.com"
                                    target="_blank" rel="noreferrer"
                                    className="contact-link d-flex flex-column align-items-center gap-2 text-decoration-none">
                                    <div className="icon-box">
                                        <FaEnvelope size={30} />
                                    </div>
                                    <span className="fw-medium">Email</span>
                                </a>

                                <a href="https://www.linkedin.com/in/abinaya-kj-0b3982302/" target="_blank" rel="noreferrer" className="contact-link d-flex flex-column align-items-center gap-2 text-decoration-none">
                                    <div className="icon-box">
                                        <FaLinkedin size={30} />
                                    </div>
                                    <span className="fw-medium">LinkedIn</span>
                                </a>

                                <a href="https://github.com/Abinaya-KJ" target="_blank" rel="noreferrer" className="contact-link d-flex flex-column align-items-center gap-2 text-decoration-none">
                                    <div className="icon-box">
                                        <FaGithub size={30} />
                                    </div>
                                    <span className="fw-medium">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
