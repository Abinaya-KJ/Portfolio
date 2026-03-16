import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaArrowRight, FaPlayCircle } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: "Image-Based Classification of Fruit Ripening Stages",
        category: "MACHINE LEARNING",
        description: "An automated system leveraging machine learning and computer vision to classify different stages of fruit ripening based on image analysis. Accurately predicts freshness states from raw image feeds.",
        image: "/fruit-ripening-stages.png",
        githubUrl: "https://github.com/Abinaya-KJ/Fruit-ripeness-project",
        demoUrl: "", // Add if you have a live demo
        videoUrl: "https://youtu.be/e4FqQgpxgZo", //my youtube video 
        technologies: "Python, CNN, YOLOv8, PyTorch, TensorFlow, OpenCV"
    },
    {
        id: 2,
        title: "Market Basket Analysis",
        category: "DATA ANALYTICS",
        description: "A robust data analytics solution utilizing the Apriori algorithm to uncover hidden purchasing patterns and frequent itemsets from large-scale transactional datasets.",
        image: "/market-basket-analysis.png",
        githubUrl: "https://github.com/Abinaya-KJ/market-basket-analysis-project",
        demoUrl: "",
        videoUrl: "",
        technologies: "Python, Pandas, Apriori Algorithm, Data Analytics"
    },
    {
        id: 3,
        title: "Personal Portfolio Website",
        category: "WEB DEVELOPMENT",
        description: "A responsive personal portfolio website developed to showcase my projects, skills, and resume. Built with a modern dark-themed UI and optimized for both desktop and mobile devices.",
        image: "/portfolio.png",
        githubUrl: "https://github.com/Abinaya-KJ/portfolio",
        demoUrl: "",
        videoUrl: "",
        technologies: "React.js, HTML, CSS"
    }
];

const Work = () => {
    return (
        <section id="work" className="section-wrapper work-section">
            <Container>
                {/* Custom Decorative Header Section */}
                <div className="d-flex justify-content-between align-items-center mb-5 w-100 position-relative animate-in" style={{ minHeight: '120px' }}>
                    <div className="d-flex align-items-center position-relative">
                        {/* Decorative Dots SVG (Left) */}
                        <svg width="80" height="100" style={{ position: 'absolute', left: '-20px', top: '10px', zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="dotPattern2" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                                    <circle cx="3" cy="3" r="3" fill="var(--primary)" opacity="0.6" />
                                </pattern>
                            </defs>
                            <rect width="80" height="100" fill="url(#dotPattern2)" />
                        </svg>
                        <h2 className="display-3 fw-bold m-0" style={{ fontFamily: "'Poppins', sans-serif", color: "var(--text-main)", position: "relative", zIndex: 2, paddingLeft: '30px', letterSpacing: '-0.02em' }}>
                            Projects<span style={{ color: "var(--primary)" }}>.</span>
                        </h2>
                    </div>

                    {/* Right Decorative Geometric SVG */}
                    <div className="d-none d-md-block" style={{ marginRight: '10px' }}>
                        <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                            {/* Pink geometric L-shape */}
                            <path d="M 60 40 H 100 V 100 H 40 V 60 H 60 Z" fill="var(--primary)" opacity="0.7" />
                            {/* Outline offset square */}
                            <rect x="20" y="20" width="60" height="60" fill="none" stroke="var(--text-main)" strokeWidth="2" />
                            {/* Decorative vertical lines group */}
                            <g stroke="var(--text-main)" strokeWidth="2">
                                <line x1="10" y1="80" x2="10" y2="110" />
                                <line x1="16" y1="80" x2="16" y2="110" />
                                <line x1="22" y1="80" x2="22" y2="110" />
                                <line x1="28" y1="80" x2="28" y2="110" />
                                <line x1="34" y1="80" x2="34" y2="110" />
                            </g>
                        </svg>
                    </div>
                </div>

                {/* Projects Rendering */}
                <div className="mt-5">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-row animate-in"
                        >
                            {/* Left: Image Content */}
                            <div className="project-image-wrapper">
                                <div className="project-image-glow"></div>
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-linear-img"
                                        loading="lazy"
                                    />
                                )}
                            </div>

                            {/* Right: Text Content */}
                            <div className="project-text-wrapper">
                                <span className="project-linear-category">{project.category}</span>
                                <h3 className="project-linear-title">{project.title}</h3>
                                <p className="project-linear-desc">{project.description}</p>

                                <p className="project-linear-tools">
                                    <strong>Tools Used:</strong> <span className="highlight-text">{project.technologies}</span>
                                </p>

                                <div className="d-flex flex-column align-items-start gap-3 mt-4">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-inline-btn"
                                        >
                                            <FaGithub /> GitHub Source
                                        </a>
                                    )}
                                    {project.videoUrl && (
                                        <a
                                            href={project.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-inline-btn"
                                        >
                                            <FaPlayCircle /> Live Demo
                                        </a>
                                    )}
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-inline-btn"
                                        >
                                            Live Demo <FaArrowRight style={{ fontSize: '0.9em' }} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Work;
