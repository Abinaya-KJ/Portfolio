import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: "Image-Based Classification of Fruit Ripening Stages",
        category: "Machine Learning",
        description: "An automated system leveraging machine learning and computer vision to classify different stages of fruit ripening based on image analysis.",
        image: "https://personalbobby55.s3.us-east-1.amazonaws.com/fruit-ripening-stages.png",
        githubUrl: "https://github.com/Abinaya-KJ",
        demoUrl: "", // Add if you have a live demo
        technologies: ['Python', 'CNN', 'YOLOv8', 'PyTorch', 'TensorFlow', 'OpenCV']
    },
    {
        id: 2,
        title: "Market Basket Analysis",
        category: "Data Analytics",
        description: "A robust data analytics solution utilizing the Apriori algorithm to uncover hidden purchasing patterns and frequent itemsets in transactional data.",
        image: "https://personalbobby55.s3.us-east-1.amazonaws.com/market-basket-analysis.png",
        githubUrl: "https://github.com/Abinaya-KJ",
        demoUrl: "",
        technologies: ['Python', 'Pandas', 'Apriori Algorithm', 'Data Analytics']
    }
];

const Work = () => {
    return (
        <section id="work" className="section-wrapper work-section">
            <Container>
                {/* Header Section */}
                <Row className="mb-5">
                    <Col className="text-center">
                        <h6 className="text-uppercase tracking-wide animate-in" style={{ opacity: 0.7 }}>Portfolio</h6>
                        <h2 className="display-5 fw-bold animate-in delay-1">My Projects</h2>
                        <p className="text-muted mt-3 mx-auto animate-in delay-2" style={{ maxWidth: '600px' }}>
                            A selection of my recent work focusing on machine learning, data analytics, and software engineering.
                        </p>
                    </Col>
                </Row>

                {/* Projects Grid */}
                <Row className="g-4 justify-content-center">
                    {projects.map((project, index) => (
                        <Col lg={6} md={12} key={project.id} className={`animate-in delay-${(index % 4) + 1}`}>
                            <div className="modern-project-card">
                                {/* Thumbnail Header */}
                                <div className="project-img-container">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-thumbnail"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-100 h-100 d-flex align-items-center justify-content-center bg-dark" style={{ opacity: 0.1 }}>
                                            <span className="text-white opacity-50 fw-bold small">NO IMAGE</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Body */}
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="tech-stack">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="tech-pill">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="project-links">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-project btn-github"
                                                aria-label={`View ${project.title} source code on GitHub`}
                                            >
                                                <FaGithub /> GitHub
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-project btn-demo"
                                                aria-label={`View live demo of ${project.title}`}
                                            >
                                                <FaExternalLinkAlt size={14} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Work;
