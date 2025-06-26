// Main JavaScript File

// DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const backToTop = document.getElementById('backToTop');
const preloader = document.getElementById('preloader');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeNavigation();
    initializeAnimations();
    loadSkills();
    loadExperience();
    loadProjects();
    loadServices();
    initializeParticles();
    initializeCounters();
    hidePreloader();
});

// Hide Preloader
function hidePreloader() {
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }, 1000);
}

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-theme', savedTheme === 'light');
    updateThemeIcon(savedTheme === 'light');
    
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon(isLight);
}

function updateThemeIcon(isLight) {
    themeIcon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
}

// Navigation
function initializeNavigation() {
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        menuToggle.classList.add('active');
    });
    
    closeMenu.addEventListener('click', closeMobileMenu);
    
    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleScroll);
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
    
    // Active navigation
    observeSections();
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
}

function handleScroll() {
    const scrollY = window.scrollY;
    
    // Navbar background
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button
    if (scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

function handleSmoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Active Section Observer
function observeSections() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        rootMargin: '-100px 0px -70% 0px'
    };
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// Load Skills
function loadSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    if (!skillsContainer) return;
    
    const skillsHTML = portfolioData.skills.map(category => `
        <div class="skill-category fade-in">
            <div class="skill-header">
                <div class="skill-icon">
                    <i class="${category.icon}"></i>
                </div>
                <h3>${category.category}</h3>
            </div>
            <div class="skill-items">
                ${category.skills.map(skill => `
                    <div class="skill-item">
                        <span>${skill.name}</span>
                        <span class="skill-level">${skill.level}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    skillsContainer.innerHTML = skillsHTML;
}

// Load Experience
function loadExperience() {
    const timeline = document.getElementById('experienceTimeline');
    if (!timeline) return;
    
    const experienceHTML = portfolioData.experience.map((exp, index) => `
        <div class="timeline-item fade-in delay-${index + 1}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">${exp.date}</div>
                <h3>${exp.title}</h3>
                <h4>${exp.company} - ${exp.location}</h4>
                <p>${exp.description}</p>
                <ul>
                    ${exp.achievements.map(achievement => `
                        <li>${achievement}</li>
                    `).join('')}
                </ul>
                <div class="timeline-tech">
                    ${exp.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    timeline.innerHTML = experienceHTML;
}

// Load Projects
let currentProjectIndex = 9;
const projectsPerLoad = 9;

function loadProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    let filteredProjects = portfolioData.projects;
    if (filter !== 'all') {
        filteredProjects = portfolioData.projects.filter(project => project.category === filter);
    }
    
    const projectsToShow = filteredProjects.slice(0, currentProjectIndex);
    
    const projectsHTML = projectsToShow.map(project => `
        <div class="project-card fade-in" data-category="${project.category}">
            <div class="project-image">
                <i class="${project.image}"></i>
                <div class="project-badges">
                    ${project.metrics.rating ? `<span class="project-badge">${project.metrics.rating} ★</span>` : ''}
                    ${project.metrics.users ? `<span class="project-badge">${project.metrics.users}</span>` : ''}
                </div>
                <div class="project-overlay">
                    ${project.links.demo ? `<a href="${project.links.demo}" class="project-link" target="_blank"><i class="fas fa-eye"></i></a>` : ''}
                    ${project.links.github ? `<a href="${project.links.github}" class="project-link" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                    ${project.links.appStore ? `<a href="${project.links.appStore}" class="project-link" target="_blank"><i class="fab fa-app-store"></i></a>` : ''}
                    ${project.links.playStore ? `<a href="${project.links.playStore}" class="project-link" target="_blank"><i class="fab fa-google-play"></i></a>` : ''}
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
                ${project.metrics ? `
                    <div class="project-metrics">
                        ${Object.entries(project.metrics).slice(0, 3).map(([key, value]) => `
                            <div class="metric">
                                <i class="fas fa-chart-line"></i>
                                <span>${value}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    projectsGrid.innerHTML = projectsHTML;
    
    // Update load more button visibility
    const loadMoreBtn = document.getElementById('loadMoreProjects');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = currentProjectIndex >= filteredProjects.length ? 'none' : 'inline-flex';
    }
}

// Project Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        currentProjectIndex = 9; // Reset to initial load
        loadProjects(filter);
    });
});

// Load More Projects
const loadMoreBtn = document.getElementById('loadMoreProjects');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        currentProjectIndex += projectsPerLoad;
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        loadProjects(activeFilter);
    });
}

// Load Services
function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;
    
    const servicesHTML = portfolioData.services.map(service => `
        <div class="service-card fade-in">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `
                    <li><i class="fas fa-check"></i> ${feature}</li>
                `).join('')}
            </ul>
        </div>
    `).join('');
    
    servicesGrid.innerHTML = servicesHTML;
}

// Initialize Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize Particle Animation
function initializeParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1,
            opacity: Math.random() * 0.5 + 0.2
        };
    }
    
    function initParticles() {
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }
    }
    
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, index) => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
            ctx.fill();
            
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Connect nearby particles
            particles.slice(index + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 100)})`;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(drawParticles);
    }
    
    resizeCanvas();
    initParticles();
    drawParticles();
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
}

// Initialize Counter Animation
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let count = 0;
                const increment = target / 50;
                
                const updateCounter = () => {
                    count += increment;
                    if (count < target) {
                        counter.textContent = Math.ceil(count) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + '+';
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// Utility function for showing toast notifications
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="toast-icon fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}