// Experience Section Component - Updated for vertical timeline
function createExperienceSection() {
    const experienceData = [
        {
            title: "AI Intern",
            company: "nGenue",
            location: "Hyderabad, India", 
            duration: "May 2025 - July 2025",
            description: "Built a retrieval-augmented chatbot with complete understanding of the company database structure.",
            achievements: [
                "Deployed as a VS Code extension to assist SQL and QA teams with instant database insights",
                "Reduced GPT usage costs by 75% per user through optimized design",
                "Improved team productivity by cutting down solution search time by 80%",
                "Integrated features like test case generation, dependency analysis, and code optimization"
            ],
            type: "work",
            icon: "fas fa-laptop-code"
        },
        {
            title: "Bachelor of Computer Science",
            company: "Manipal Institute of Technology",
            location: "Manipal, India",
            duration: "2022 - 2026",
            description: "Focused on all CSE core concepts. Completed projects in Web Development, DBMS, Software Engineering principles, and Embedded Systems.",
            achievements: ["CGPA: 9.74/10", "Achiever's Scholarship for 2 consecutive years", " Vice President'24-25 for thr Literary, Debate, and Quiz Club", "Maintained a team on Microsoft Teams for Handwritten Class Notes from 2nd year onwards"],
            type: "education",
            icon: "fas fa-graduation-cap"
        },
        {
            title: "Intermediate Education",
            company: "FIITJEE Junior College",
            location: "Hyderabad, India",
            duration: "2020 - 2022",
            description: "Specialized in Science stream with Mathematics, Physics, and Chemistry.",
            achievements: ["Secured 97.7% in Consolidated Result", "Scored 100 in Board Exams for Maths, Physics and Chemistry for two consecutive years"],
            type: "education",
            icon: "fas fa-school"
        },
        {
            title: "High School Education",
            company: "Gitanjali Devashray",
            location: "Hyderabad, India",
            duration: "2018 - 2020",
            description: "Central Board of Secondary Education",
            achievements: ["School topper with a score of 97%", "Student Editor in 10th Grade", "Part of the Student Office Bearers from 8th to 10th grade"],
            type: "education",
            icon: "fas fa-school"
        }
    ];

    const experienceHTML = `
        <div class="section-content fade-in">
            <h2 class="section-title">Experience & Education</h2>
            <div class="vertical-timeline">
                ${experienceData.map((exp, index) => `
                    <div class="timeline-item">
                        <div class="card timeline-card">
                            <div class="timeline-header">
                                <div>
                                    <h3 class="timeline-title">
                                        <i class="${exp.icon}" style="margin-right: 0.5rem;"></i>${exp.title}
                                    </h3>

                                    <h4 class="timeline-company">${exp.company}</h4>
                                </div>
                                <span class="timeline-duration">
                                    ${exp.duration}
                                </span>
                            </div>
                            
                            <p class="timeline-location">
                                <i class="fas fa-map-marker-alt" style="margin-right: 0.5rem;"></i>${exp.location}
                            </p>
                            <p class="timeline-description">${exp.description}</p>
                            
                            <div>
                                <h5 class="timeline-highlights">Key Highlights:</h5>
                                <ul class="timeline-achievements">
                                    ${exp.achievements.map(achievement => `
                                        <li class="timeline-achievement">
                                            <i class="fas fa-check ${exp.type === 'work' ? 'achievement-check-work' : 'achievement-check-education'}"></i>
                                            ${achievement}
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.getElementById('experience-content').innerHTML = experienceHTML;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', createExperienceSection);