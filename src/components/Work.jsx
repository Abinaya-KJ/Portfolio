import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: "Image-Based Classification of Fruit Ripening Stages",
        category: "Machine Learning",
        description: "This project uses machine learning and image processing to classify different stages of fruit ripening based on images.",
        color: "#ffe5ec",
        isInteractive: true,
        image: "https://personalbobby55.s3.us-east-1.amazonaws.com/fruit-ripening-stages.png",
        githubUrl: "https://github.com/Abinaya-KJ",
        technologies: ['Python', 'Machine Learning', 'Image Processing', 'PyTorch', 'CNN', 'YOLOv8', 'TensorFlow', 'NumPy', 'Pandas']
    },
    {
        id: 2,
        title: "Market Basket Analysis",
        category: "DATA ANALYTICS",
        description: "Market Basket Analysis using the Apriori algorithm to identify frequent itemsets and purchasing patterns.",
        color: "#e0c3fc",
        isInteractive: true,
        image: "https://personalbobby55.s3.us-east-1.amazonaws.com/market-basket-analysis.png",
        githubUrl: "https://github.com/Abinaya-KJ",
        technologies: ['Python', 'Data Analytics', 'Apriori Algorithm', 'Association Rule Mining', 'Pandas', 'NumPy', 'Mlxtend']
    }
];

const Work = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
        if (project.isInteractive) {
            setSelectedProject(project);
            setShowModal(true);
        }
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <section id="work" className="section-wrapper work-section">
            <Container>
                <Row className="mb-5">
                    <Col className="text-center">
                        <h6 className="text-uppercase tracking-wide" style={{ opacity: 0.7 }}>Portfolio</h6>
                        <h2 className="display-5 fw-bold">My Projects</h2>
                    </Col>
                </Row>
                <Row className="g-4 justify-content-center">
                    {projects.map((project) => (
                        <Col md={4} key={project.id}>
                            <Card className="project-card h-100">
                                <div
                                    className={`card-img-top d-flex align-items-center justify-content-center ${project.isInteractive ? 'interactive-card' : ''}`}
                                    style={{
                                        height: '240px',
                                        backgroundColor: project.color,
                                        cursor: project.isInteractive ? 'pointer' : 'default',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onClick={() => handleCardClick(project)}
                                >
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <span className="text-dark opacity-50 fw-bold">PROJECT PREVIEW</span>
                                    )}
                                </div>
                                <Card.Body className="p-4">
                                    <small className="text-uppercase fw-bold text-primary" style={{ fontSize: '0.75rem' }}>
                                        {project.category}
                                    </small>
                                    <Card.Title as="h4" className="mt-2 mb-3">{project.title}</Card.Title>
                                    <Card.Text style={{ opacity: 0.8 }}>
                                        {project.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Project Details Modal */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
                <Modal.Header closeButton style={{ borderBottom: 'none' }}>
                    <Modal.Title className="fw-bold">{selectedProject?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProject?.image && (
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="img-fluid rounded mb-4 w-100"
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    )}
                    <h5 className="fw-bold mb-3">Project Description</h5>
                    <p className="text-muted mb-4">{selectedProject?.description}</p>

                    <h5 className="fw-bold mb-3">Technologies Used</h5>
                    <div className="d-flex gap-2 flex-wrap mb-4">
                        {(selectedProject?.technologies || []).map((tech, index) => (
                            <span key={index} className="badge bg-light text-dark border p-2">{tech}</span>
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ borderTop: 'none' }}>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    {selectedProject?.githubUrl && (
                        <Button variant="dark" href={selectedProject.githubUrl} target="_blank">
                            <FaGithub className="me-2" /> View on GitHub
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </section>
    );

};

export default Work;
