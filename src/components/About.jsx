import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const About = () => {
    return (
        <section className="about-section-custom">


            <Container>
                <Row className="align-items-center justify-content-between">
                    {/* Left: Text Content */}
                    <Col lg={5} className="mb-5 mb-lg-0">
                        <div className="about-text-content">
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <div className="decorative-dots"></div>
                                <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "var(--text-main)", position: "relative", zIndex: "2" }}>About Me<span style={{ color: "var(--primary)" }}>.</span></h2>
                            </div>
                            <p className="mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                                My name is <strong className="highlight-text">Abinaya J</strong>, a Computer Science Engineering fresher.
                            </p>
                            <p className="mb-4">
                                I have experience working on <strong className="highlight-text">Machine learning</strong> projects and frontend web development using <strong className="highlight-text">Python, Java, HTML, CSS, JavaScript, and React.js</strong>.
                            </p>
                            <p className="mb-3">
                                I enjoy solving real-world problems through <strong className="highlight-text">Machine learning</strong> and building clean, user-friendly web interfaces.
                            </p>

                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cv-link animate-in delay-2">
                                Download CV <FaArrowRight />
                            </a>
                        </div>
                    </Col>

                    {/* Right: Graphic & Socials */}
                    <Col lg={6} className="text-center">
                        <div className="profile-container">
                            {/* Circular Profile Image */}
                            <div className="profile-circle">
                                {/* Placeholder for user image - using a generic avatar for now */}
                                <img
                                    src="https://personalbobby55.s3.us-east-1.amazonaws.com/profile.png"
                                    alt="Profile"
                                    className="profile-img"
                                />
                            </div>

                            {/* Social Icons Bar */}
                            <div className="social-bar">
                                <a href="https://www.linkedin.com/in/abinaya-kj-0b3982302/" target="_blank" rel="noreferrer" className="social-icon">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/Abinaya-KJ" target="_blank" rel="noreferrer" className="social-icon">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
