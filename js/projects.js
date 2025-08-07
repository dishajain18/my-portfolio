// Projects Section Component
function createProjectsSection() {
    const projectsData = [
        {
            title: "CodeGenue",
            description: "A retrieval-augmented chatbot integrated into VSCode with complete understanding of the company database structure.",
            technologies: ["Python", "Qdrant", "Llama3.1-8B", "gpt-4o", "Flask", "FastAPI", "TypeScript", "JavaScript", "CSS"],
            image: "images/project1.jpg",
            github: "",
            demo: "",
            status: "Completed"
        },
        {
            title: "Django School Quiz App",
            description: "A full-stack web application for schools to create, conduct, and evaluate quizzes across subjects, with secure user authentication and performance analytics.",
            technologies: ["Django", "HTML", "CSS"],
            image: "images/project2.jpg",
            github: "https://github.com/dishajain18/Django-School-Quizapp",
            demo: "",  
            status: "Completed"
        },
        {
            title: "Tours and Travels Management System",
            description: "A trip management software with multi-role access, supporting flight booking, hotel reservations, and itinerary planning.",
            technologies: ["C#", "SQLPlus"],
            image: "images/project3.jpg",
            github: "https://github.com/dishajain18/Tours-and-Travel-Management-System",
            demo: "",  
            status: "Completed"
        },
        {
            title: "My Portfolio Website",
            description: "A modern portfolio website showcasing projects and skills. The design reflects my approach to web aesthetics, clean and simple.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            image: "images/project4.jpg",
            github: "https://github.com/dishajain18/my-portfolio",
            demo: "https://dishajain-portfolio.vercel.app/",
            status: "Completed"
        }
    ];

    const projectsHTML = `
        <div class="section-content fade-in">
            <h2 class="section-title">My Projects</h2>
            <div class="grid grid-2">
                ${projectsData.map((project, index) => `
                    <div class="card project-card">
                        <div class="project-image">
                            <img src="${project.image}" alt="${project.title}" 
                                 onerror="this.style.display='none';">
                            <div class="project-overlay">
                                <span class="status-badge ${project.status === 'Completed' ? 'status-completed' : 'status-progress'}">
                                    ${project.status}
                                </span>
                            </div>
                        </div>
                        
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        
                        <div class="project-technologies">
                            <div class="tech-tags">
                                ${project.technologies.map(tech => `
                                    <span class="tech-tag">${tech}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="project-links">
                            ${project.github ? `
                                <a href="${project.github}" target="_blank" class="project-link project-link-github">
                                    <i class="fab fa-github" style="margin-right: 0.5rem;"></i>Code
                                </a>
                            ` : ''}
                            ${project.demo ? `
                                <a href="${project.demo}" target="_blank" class="project-link project-link-demo">
                                    <i class="fas fa-external-link-alt" style="margin-right: 0.5rem;"></i>Demo
                                </a>
                            ` : ''}
                        </div>

                    </div>
                `).join('')}
            </div>
            
            <div class="section-cta">
                <p class="cta-text">Want to see more of my work?</p>
                <a href="https://github.com/yourusername" target="_blank" class="btn btn-secondary">
                    <i class="fab fa-github" style="margin-right: 0.5rem;"></i>
                    View All Projects on GitHub
                </a>
            </div>
        </div>
    `;

    document.getElementById('projects-content').innerHTML = projectsHTML;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', createProjectsSection);
