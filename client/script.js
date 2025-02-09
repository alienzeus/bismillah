
// Sample projects data
const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with real-time inventory management.",
        image: "https://via.placeholder.com/600x400",
        tags: ["React", "Node.js", "PostgreSQL"]
    },
    {
        title: "Health & Wellness App",
        description: "Mobile application for tracking fitness goals and nutritional intake.",
        image: "https://via.placeholder.com/600x400",
        tags: ["React Native", "Firebase", "UI/UX"]
    },
    {
        title: "Corporate Website Redesign",
        description: "Complete redesign and development of a corporate website with CMS integration.",
        image: "https://via.placeholder.com/600x400",
        tags: ["WordPress", "PHP", "SEO"]
    }
];

// Load projects
function loadProjects() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// Handle contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});
