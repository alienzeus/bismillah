// Sample projects data
const projects = [
    {
        title: "Project 1",
        description: "Description of project 1"
    },
    {
        title: "Project 2",
        description: "Description of project 2"
    },
    {
        title: "Project 3",
        description: "Description of project 3"
    }
];

// Load projects
function loadProjects() {
    const projectGrid = document.querySelector('.project-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        projectGrid.appendChild(projectCard);
    });
}

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});