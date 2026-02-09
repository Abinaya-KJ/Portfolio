import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section id="home" className="section-wrapper hero-section d-flex align-items-center min-vh-100">
            <Container>
                <Row className="align-items-center">
                    <Col lg={8} className="mx-auto text-center">
                        <h1 className="display-3 mb-4 text-balance fw-bold" style={{ fontSize: '4.5rem', lineHeight: '1.2' }}>
                            Hi! <br />
                            I'm Abinaya.
                        </h1>
                        <p className="lead mb-5 mx-auto text-muted fw-medium" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: '1.6' }}>
                            CSE fresher with a strong foundation in programming and web technologies, eager to learn and contribute to real-world projects.
                        </p>
                        <div className="d-flex gap-3 justify-content-center">
                            <Button variant="primary" size="lg" as={Link} to="/work">
                                Discover my projects
                            </Button>
                            <Button variant="outline-dark" size="lg" as={Link} to="/about">
                                Who am I?
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
