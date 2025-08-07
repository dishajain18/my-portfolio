// About Section Component
function createAboutSection() {
    const aboutData = {
        name: "Disha Jain",
        title: "Final Year Computer Science Student",
        description: "I'm a budding developer who loves creating innovative solutions and bringing ideas to life through code. I itch for a pleasing design and I thrive in unfamiliar territory, learning quickly is what I do best.",
        email: "dishajain1802@gmail.com",
        location: "Hyderabad, India",
        experience: "2 Months",
        image: "images/profile.jpg"
    };

    const aboutHTML = `
        <div class="section-content fade-in">
            <h2 class="section-title">About Me</h2>
            <div class="grid grid-2">
                <div class="about-text">
                    <div class="card">
                        <h3 class="timeline-title">${aboutData.name}</h3>
                        <h4 class="timeline-company">${aboutData.title}</h4>
                        <p class="timeline-description">${aboutData.description}</p>
                        
                        <div class="about-details">
                            <div class="about-detail-grid">
                                <div>
                                    <i class="fas fa-map-marker-alt" style="color: var(--secondary-color); margin-right: 0.5rem;"></i>
                                    <span>${aboutData.location}</span>
                                </div>
                                <div>
                                    <i class="fas fa-calendar-alt" style="color: var(--secondary-color); margin-right: 0.5rem;"></i>
                                    <span>${aboutData.experience}</span>
                                </div>
                            </div>
                        </div>
                        
                        <button onclick="contactMe('${aboutData.email}')" class="btn btn-primary">
                            <i class="fas fa-envelope" style="margin-right: 0.5rem;"></i>
                            Contact Me
                        </button>
                    </div>
                </div>
                
                <div class="about-image">
                    <div class="card about-gradient">
                        <div class="profile-placeholder">
                            <img src="${aboutData.image}" alt="Profile" class="profile-image" 
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <i class="fas fa-user" style="font-size: 4rem; opacity: 0.7; display: none;"></i>
                        </div>
                        <h4 style="margin-bottom: 0.5rem;">Ready to collaborate?</h4>
                        <p style="opacity: 0.9; margin-bottom: 1.5rem;">Here's my digital footprint just so you know what you're getting into.</p>
                        
                        <div class="social-icons">
                            <a href="https://www.linkedin.com/in/disha-jain-836224297" target="_blank" class="social-icon">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/dishajain18" target="_blank" class="social-icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="mailto:${aboutData.email}" class="social-icon">
                                <i class="fas fa-envelope"></i>
                            </a>
                            <a href="https://leetcode.com/disha_18" target="_blank" class="social-icon">
                                <i class="fas fa-code"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('about-content').innerHTML = aboutHTML;
}

// Contact function
function contactMe(email) {
    const subject = encodeURIComponent("Let's collaborate!");
    const body = encodeURIComponent("Hi there,\n\nI'd love to discuss a potential project with you.\n\nBest regards,");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', createAboutSection);