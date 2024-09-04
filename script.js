document.addEventListener('DOMContentLoaded', function() {
    // Sample projects data
    const projects = [
        { title: 'Automação de Tarefas', description: 'Developed a custom task automation system for a large corporation.' },
        { title: 'Automação de Marketing Digital', description: 'Created a predictive model for sales forecasting using machine learning.' },
        { title: 'Automação de logistica', description: 'Designed and developed a fully functional e-commerce website with advanced features.' },
        { title: 'Automação de Processos de Negócios', description: 'Developed a custom ad management system for a local newspaper.' },
        { title: 'Web Scraping e Análise de Dados', description: 'Developed a custom ad management system for a local newspaper.' },
        { title: 'Chatbots e Assistentes Virtuais', description: 'Developed a custom ad management system for a local newspaper.' },
    ];

    // Sample testimonials data
    const testimonials = [
        { name: 'John Doe', company: 'ABC Corp', text: 'Excellent service! The team delivered beyond our expectations.' },
        { name: 'Jane Smith', company: 'XYZ Inc', text: 'Their expertise in data intelligence has transformed our business processes.' },
        { name: 'John Doe', company: 'ABC Corp', text: 'Excellent service! The team delivered beyond our expectations.' },
        { name: 'Jane Smith', company: 'XYZ Inc', text: 'Their expertise in data intelligence has transformed our business processes.' },
        { name: 'John Doe', company: 'ABC Corp', text: 'Excellent service! The team delivered beyond our expectations.' },
        { name: 'Jane Smith', company: 'XYZ Inc', text: 'Their expertise in data intelligence has transformed our business processes.' },
        { name: 'John Doe', company: 'ABC Corp', text: 'Excellent service! The team delivered beyond our expectations.' },
        { name: 'Jane Smith', company: 'XYZ Inc', text: 'Their expertise in data intelligence has transformed our business processes.' },
        { name: 'John Doe', company: 'ABC Corp', text: 'Excellent service! The team delivered beyond our expectations.' },
        { name: 'Jane Smith', company: 'XYZ Inc', text: 'Their expertise in data intelligence has transformed our business processes.' },
    ];

    // Populate projects
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'col-md-4';
        projectElement.innerHTML = `
            <div class="card project-card">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });

    // Populate testimonials
    const testimonialsContainer = document.getElementById('testimonials-container');
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'col-md-6';
        testimonialElement.innerHTML = `
            <div class="card testimonial-card">
                <div class="card-body">
                    <p class="card-text">"${testimonial.text}"</p>
                    <p class="card-text"><strong>${testimonial.name}</strong>, ${testimonial.company}</p>
                </div>
            </div>
        `;
        testimonialsContainer.appendChild(testimonialElement);
    });

    // Handle form submission
    const budgetForm = document.getElementById('budget-form');
    budgetForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const jobDescription = document.getElementById('job-description').value;

        // Here you would typically send this data to your server
        console.log('Form submitted:', { name, email, jobDescription });
        alert('Thank you for your submission. We will get back to you soon!');
        budgetForm.reset();
    });
});