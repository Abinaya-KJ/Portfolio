import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = {
            name: form.current.user_name.value,
            email: form.current.user_email.value,
            message: form.current.message.value
        };

        const apiUrl = import.meta.env.VITE_API_URL || 'https://portfolio-f591.onrender.com';
        fetch(`${apiUrl}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setStatus('success');
                    e.target.reset();
                } else {
                    setStatus('error');
                    console.error('Error:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="section-wrapper contact-section">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={8}>
                        <h6 className="text-uppercase tracking-wide mb-3" style={{ opacity: 0.7 }}>Get In Touch</h6>
                        <h2 className="display-5 fw-bold mb-4">Let's Work Together</h2>
                        <p className="lead mb-5" style={{ opacity: 0.9 }}>
                            I'm currently available for freelance work and open to new opportunities.
                            If you have a project in mind or just want to say hi, feel free to reach out.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={6}>
                        {status === 'success' && <Alert variant="success">Thank you! Your message has been sent successfully.</Alert>}
                        {status === 'error' && <Alert variant="danger">Something went wrong. Please try again.</Alert>}

                        <div className="p-4 p-md-5 bg-white bg-opacity-50 rounded-4">
                            <Form ref={form} onSubmit={sendEmail} className="mb-5 text-start">
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-bold">Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="user_name"
                                        required
                                        placeholder="Your Name"
                                        className="border-0 shadow-sm p-3"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-bold">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="user_email"
                                        required
                                        placeholder="name@example.com"
                                        className="border-0 shadow-sm p-3"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-bold">Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="message"
                                        required
                                        placeholder="Tell me about your project..."
                                        className="border-0 shadow-sm p-3"
                                    />
                                </Form.Group>
                                <div className="d-grid">
                                    <Button variant="primary" size="lg" type="submit" disabled={status === 'sending'}>
                                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </div>
                            </Form>

                            <div className="d-flex justify-content-center gap-4 border-top pt-4 border-dark border-opacity-10">
                                <a href="mailto:jabinaya034@gmail.com" className="fs-3 icon-link text-reset">
                                    <FaEnvelope />
                                </a>
                                <a href="https://github.com/Abinaya-KJ" target="_blank" rel="noreferrer" className="fs-3 icon-link text-reset">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/abinaya-kj-0b3982302/" target="_blank" rel="noreferrer" className="fs-3 icon-link text-reset">
                                    <FaLinkedin />
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
