// Skills Section Component
function createSkillsSection() {
    const skillsData = {
        technical: [
            { name: "C", level: 90, img: "images/C.svg" },
            { name: "C++", level: 50, img: "images/C++.svg" },
            { name: "Java", level: 50, icon: "fab fa-java" },
            { name: "Python", level: 50, icon: "fab fa-python" },
            { name: "HTML", level: 70, icon: "fab fa-html5" },
            { name: "CSS", level: 60, icon: "fab fa-css3-alt" },
            { name: "JavaScript", level: 50, icon: "fab fa-js-square" },
            { name: "Assembly", level: 80, icon: "fas fa-microchip" },
            { name: "GitHub", level: 70, icon: "fab fa-github" },
            { name: "Qdrant", level: 90, img: "images/qdrant.svg" },
            { name: "LLaMA", level: 80, img: "images/llama.svg" },
            { name: "FastAPI", level: 50, img: "images/fastapi.svg" },
            { name: "Hugging Face", level: 70, img: "images/hugging-face.svg" },
            { name: "GPT-4o", level: 75, img: "images/gpt.svg" },
            { name: "Figma", level: 40, img: "images/figma.svg" }
        ]
    };

    const skillsHTML = `
        <div class="section-content fade-in">
            <h2 class="section-title">Skills & Expertise</h2>
            <div style="margin-bottom: 4rem;">
                <h3 style="color: var(--primary-color); margin-bottom: 2rem; text-align: center; font-size: 1.5rem;">
                    <i class="fas fa-code" style="margin-right: 0.5rem; color: var(--secondary-color);"></i>
                    Technical Skills
                </h3>
                <div class="skills-wrapper">
                    ${skillsData.technical.map(skill => `
                        <div class="card skill-card">
                            ${
                                skill.icon
                                ? `<i class="${skill.icon} skill-icon"></i>`
                                : `<img src="${skill.img}" alt="${skill.name} logo" class="skill-icon-img">`
                            }
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-percentage">${skill.level}%</span>
                            <div class="skill-bar-container">
                                <div class="skill-bar" data-width="${skill.level}"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    document.getElementById('skills-content').innerHTML = skillsHTML;

    // Animate skill bars when section is visible
    setTimeout(() => {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }, 500);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', createSkillsSection);
