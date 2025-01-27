class PortfolioContent {
    constructor() {
        this.data = null;
        this.init();
    }

    async init() {
        try {
            await this.loadData();
            this.renderContent();
            this.initializeInteractions();
        } catch (error) {
            console.error('Error initializing portfolio:', error);
        }
    }

    async loadData() {
        try {
            // Datos incrustados directamente para evitar problemas CORS
            this.data = {
                "meta": {
                    "title": "Sergio Forés - Front-End Developer & Rapid Prototyping Specialist",
                    "description": "Front-End Developer and Rapid Prototyping Specialist with over 20 years of experience"
                },
                "hero": {
                    "name": "Sergio Forés",
                    "title": "Holistic Developer & Rapid Prototyping Specialist",
                    "tagline": "Turning ideas into functional MVPs at record speed",
                    "backgroundImage": "./images/bg2.jpg",
                    "cta": [
                        {
                            "text": "Ver mis proyectos",
                            "url": "#projects",
                            "type": "primary"
                        },
                        {
                            "text": "Contáctame",
                            "url": "#contact",
                            "type": "secondary"
                        }
                    ]
                },
                "about": {
                    "title": "Sobre Mí",
                    "intro": "¡Hola! Soy Sergio, desarrollador front-end con +20 años de experiencia especializado en prototipado rápido y creación de MVPs.",
                    "description": "Combino diseño UI/UX con desarrollo ágil para materializar conceptos en productos funcionales, potenciado por programación asistida con IA.",
                    "focus": [
                        {
                            "title": "Prototipado Rápido",
                            "description": "Especializado en crear prototipos funcionales y MVPs que permiten validar ideas de negocio rápidamente."
                        },
                        {
                            "title": "Desarrollo Front-End",
                            "description": "Experiencia en frameworks modernos y metodologías ágiles para crear interfaces robustas y escalables."
                        }
                    ],
                    "sections": [
                        {
                            "title": "Habilidades",
                            "items": [
                                "Diseño UI/UX",
                                "Desarrollo Front-End",
                                "Prototipado Rápido",
                                "Programación asistida con IA"
                            ]
                        },
                        {
                            "title": "Experiencia",
                            "items": [
                                "20+ años de experiencia en desarrollo front-end",
                                "Especializado en prototipado rápido y creación de MVPs",
                                "Experiencia en frameworks modernos y metodologías ágiles"
                            ]
                        }
                    ]
                },
                "skills": {
                    "title": "Habilidades Técnicas",
                    "categories": [
                        {
                            "name": "Especialización",
                            "skills": [
                                { "name": "React", "level": "expert" },
                                { "name": "Vue.js", "level": "expert" },
                                { "name": "TypeScript", "level": "expert" },
                                { "name": "UI/UX Design", "level": "expert" }
                            ]
                        },
                        {
                            "name": "Desarrollo",
                            "skills": [
                                { "name": "JavaScript", "level": "expert" },
                                { "name": "HTML5", "level": "expert" },
                                { "name": "CSS3", "level": "expert" },
                                { "name": "Node.js", "level": "advanced" }
                            ]
                        }
                    ]
                },
                "projects": {
                    "title": "Proyectos Destacados",
                    "items": [
                        {
                            "title": "AI-Powered Dashboard",
                            "description": "Dashboard interactivo con integración de IA para análisis predictivo",
                            "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
                            "stats": {
                                "users": "10K+",
                                "queries": "1M+"
                            },
                            "tech": ["React", "TypeScript", "OpenAI", "D3.js"]
                        },
                        {
                            "title": "E-commerce Platform",
                            "description": "Plataforma de comercio electrónico con gestión de inventario en tiempo real",
                            "image": "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
                            "stats": {
                                "transactions": "50K+",
                                "products": "5K+"
                            },
                            "tech": ["Vue.js", "Node.js", "MongoDB", "Redis"]
                        }
                    ]
                },
                "experience": {
                    "title": "Experiencia",
                    "items": [
                        {
                            "role": "Lead Front-End Developer",
                            "company": "Tech Innovators",
                            "period": "2020 - Presente",
                            "achievements": [
                                "Liderando equipo de desarrollo front-end",
                                "Implementando arquitecturas escalables",
                                "Mentorizando desarrolladores junior"
                            ]
                        },
                        {
                            "role": "Senior UI/UX Developer",
                            "company": "Digital Solutions",
                            "period": "2015 - 2020",
                            "achievements": [
                                "Diseño e implementación de interfaces de usuario",
                                "Optimización de rendimiento y experiencia de usuario"
                            ]
                        }
                    ]
                },
                "contact": {
                    "title": "Contact",
                    "intro": "Ready to turn your idea into a functional prototype?",
                    "email": "contacto@sergiofores.dev",
                    "form": {
                        "action": "#",
                        "fields": [
                            {
                                "name": "name",
                                "type": "text",
                                "placeholder": "Nombre",
                                "required": true
                            },
                            {
                                "name": "email",
                                "type": "email",
                                "placeholder": "Correo electrónico",
                                "required": true
                            },
                            {
                                "name": "message",
                                "type": "textarea",
                                "placeholder": "Mensaje",
                                "required": true
                            }
                        ]
                    },
                    "social": [
                        {
                            "platform": "LinkedIn",
                            "url": "https://linkedin.com/in/sergiofores",
                            "icon": "ri-linkedin-line"
                        },
                        {
                            "platform": "GitHub",
                            "url": "https://github.com/t0t",
                            "icon": "ri-github-line"
                        },
                    ]
                }
            };
        } catch (error) {
            console.error('Error loading data:', error);
            throw error;
        }
    }

    renderContent() {
        // Render meta information
        document.title = this.data.meta.title;
        document.querySelector('meta[name="description"]').content = this.data.meta.description;

        // Render content elements
        document.querySelectorAll('[data-content]').forEach(element => {
            const path = element.getAttribute('data-content').split('.');
            let content = this.data;
            
            for (const key of path) {
                if (content && content[key]) {
                    content = content[key];
                } else {
                    console.warn(`Content not found for path: ${path.join('.')}`);
                    return;
                }
            }

            if (element.tagName === 'IMG') {
                element.src = content;
            } else {
                element.textContent = content;
            }
        });

        // Render templates - Solo para elementos con data-template
        document.querySelectorAll('[data-template]').forEach(element => {
            const templateName = element.getAttribute('data-template');
            // Si el elemento no tiene data-template, mantener el contenido HTML existente
            if (!templateName) return;

            const path = templateName.split('.');
            let content = this.data;
            
            for (const key of path) {
                if (content && content[key]) {
                    content = content[key];
                } else {
                    console.warn(`Template not found for path: ${path.join('.')}`);
                    return;
                }
            }

            if (Array.isArray(content)) {
                this.renderArray(element, content);
            } else {
                console.warn('Template content is not an array:', content);
            }
        });
    }

    renderArray(element, content) {
        const template = {
            'hero.cta': this.renderHeroCTA,
            'about.sections': this.renderAboutSections,
            'skills.categories': this.renderSkills,
            'projects.items': this.renderProjects,
            'experience.items': this.renderExperience,
            'contact.form': this.renderContactForm,
            'contact.social': this.renderSocialLinks,
        };

        if (template[element.getAttribute('data-template')]) {
            template[element.getAttribute('data-template')](element, content);
        } else {
            console.warn('Template function not found:', element.getAttribute('data-template'));
        }
    }

    renderHeroCTA(element, content) {
        element.innerHTML = content.map(button => `
            <a href="${button.url}" class="btn btn-${button.type}">${button.text}</a>
        `).join('');
    }

    renderAboutSections(element, content) {
        element.innerHTML = content.map(section => `
            <div class="about-card">
                <h3>${section.title}</h3>
                <ul>
                    ${section.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    renderSkills(element, content) {
        element.innerHTML = content.map(category => `
            <div class="skill-category">
                <h3>${category.name}</h3>
                <div class="badges">
                    ${category.skills.map(skill => `
                        <span class="badge ${skill.level}">${skill.name}</span>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    renderProjects(element, content) {
        element.innerHTML = content.map(project => `
            <article class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-stats">
                    <div class="stat">
                        <span class="stat-number">${project.stats.users}</span>
                        <span class="stat-label">${project.stats.queries}</span>
                    </div>
                </div>
                <div class="tech-stack">
                    ${project.tech.map(tech => `
                        <span class="tech">${tech}</span>
                    `).join('')}
                </div>
            </article>
        `).join('');
    }

    renderExperience(element, content) {
        element.innerHTML = content.map(item => `
            <div class="timeline-item">
                <h3>${item.role}</h3>
                <span class="timeline-date">${item.period}</span>
                <ul>
                    ${item.achievements.map(achievement => `
                        <li>${achievement}</li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    renderContactForm(element, content) {
        const formData = content;
        
        element.setAttribute('action', formData.action);
        element.innerHTML = formData.fields.map(field => `
            <div class="form-group">
                ${field.type === 'textarea' 
                    ? `<textarea name="${field.name}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''}></textarea>`
                    : `<input type="${field.type}" name="${field.name}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''}>`
                }
            </div>
        `).join('') + '<button type="submit" class="btn btn-primary">Enviar mensaje</button>';
    }

    renderSocialLinks(element, content) {
        element.innerHTML = content.map(link => `
            <a href="${link.url}" class="social-link">
                ${link.text || link.platform}
            </a>
        `).join('');
    }

    initializeInteractions() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Back to top functionality
        const backToTop = document.querySelector('.back-to-top');
        const showBackToTop = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            backToTop.classList.toggle('visible', scrollTop > window.innerHeight / 2);
        };

        window.addEventListener('scroll', () => {
            requestAnimationFrame(showBackToTop);
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Form submission handling
        const form = document.querySelector('.contact-form');
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const submitButton = form.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                try {
                    submitButton.textContent = 'Enviando...';
                    const formData = new FormData(form);
                    const response = await fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        submitButton.textContent = '¡Mensaje enviado!';
                        form.reset();
                        setTimeout(() => {
                            submitButton.textContent = originalText;
                        }, 3000);
                    } else {
                        throw new Error('Error en el envío');
                    }
                } catch (error) {
                    submitButton.textContent = 'Error - Intenta de nuevo';
                    setTimeout(() => {
                        submitButton.textContent = originalText;
                    }, 3000);
                }
            });
        }

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('fade-in');
            observer.observe(section);
        });
    }
}

// Initialize the portfolio when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioContent();

    // Add dynamic cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor animation
    function animate() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});
