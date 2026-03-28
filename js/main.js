// Main JavaScript File

// DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const preloader = document.getElementById('preloader');

// Modal Elements
const projectModal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');
const modalMainImage = document.getElementById('modalMainImage');
const modalThumbnails = document.getElementById('modalThumbnails');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const modalTech = document.getElementById('modalTech');
const modalFeatures = document.getElementById('modalFeatures');
const modalMetrics = document.getElementById('modalMetrics');
const modalDemoLink = document.getElementById('modalDemoLink');
const modalGithubLink = document.getElementById('modalGithubLink');
const navPrev = document.querySelector('.nav-prev');
const navNext = document.querySelector('.nav-next');

let currentProjectImages = [];
let currentImageIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeNavigation();
    
    // Check if portfolioData is available
    if (typeof window.portfolioData !== 'undefined') {
        loadSkills();
        loadExperience();
        loadProjects();
        loadServices();
    } else {
        console.error('Portfolio data not loaded. Check if data.js is included before main.js');
    }
    
    initializeAnimations();
    initializeParticles();
    initializeCounters();
    initializeModal();
    hidePreloader();
});

// Hide Preloader
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }, 1000);
    }
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
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
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
                        <i class="${getSkillIcon(skill.name)}"></i>
                        <span>${skill.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    skillsContainer.innerHTML = skillsHTML;
}

function getSkillIcon(name) {
    const icons = {
        'React': 'fab fa-react',
        'React Native': 'fab fa-react',
        'Flutter': 'fas fa-mobile-alt',
        'Node.js': 'fab fa-node-js',
        'JavaScript/ES6+': 'fab fa-js',
        'TypeScript': 'fas fa-code',
        'Python': 'fab fa-python',
        'AWS EC2': 'fab fa-aws',
        'AWS S3': 'fab fa-aws',
        'PostgreSQL': 'fas fa-database',
        'MongoDB': 'fas fa-leaf',
        'MySQL': 'fas fa-database',
        'HTML5/CSS3': 'fab fa-html5',
        'Git/GitHub': 'fab fa-github',
        'C++': 'fas fa-code',
        'Kotlin': 'fas fa-mobile-alt'
    };
    return icons[name] || 'fas fa-check-circle';
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
                    ${exp.technologies.slice(0, 5).map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    timeline.innerHTML = experienceHTML;
}

// Load Projects
let currentProjectIndex = 4;
const projectsPerLoad = 4;

function loadProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    let filteredProjects = portfolioData.projects;
    if (filter !== 'all') {
        filteredProjects = portfolioData.projects.filter(project => project.category === filter);
    }
    
    const projectsToShow = filteredProjects.slice(0, currentProjectIndex);
    
    const projectsHTML = projectsToShow.map(project => `
        <div class="project-card fade-in" onclick="openProjectDetails(${project.id})">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div style="display:none;align-items:center;justify-content:center;height:100%;color:var(--text-secondary);">
                    <i class="fas fa-image" style="font-size:3rem;"></i>
                </div>
                <div class="project-overlay">
                    <div class="project-link"><i class="fas fa-eye"></i></div>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description.length > 100 ? project.description.substring(0, 100) + '...' : project.description}</p>
                <div class="project-tech">
                    ${project.technologies.slice(0, 3).map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    projectsGrid.innerHTML = projectsHTML;
    
    const loadMoreBtn = document.getElementById('loadMoreProjects');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = currentProjectIndex >= filteredProjects.length ? 'none' : 'inline-flex';
    }
}

// Modal Logic
function initializeModal() {
    closeModal.addEventListener('click', closeProjectModal);
    projectModal.querySelector('.modal-overlay').addEventListener('click', closeProjectModal);
    
    navPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateImage(-1);
    });
    
    navNext.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateImage(1);
    });
    
    document.addEventListener('keydown', (e) => {
        if (!projectModal.classList.contains('active')) return;
        if (e.key === 'Escape') closeProjectModal();
        if (e.key === 'ArrowLeft') navigateImage(-1);
        if (e.key === 'ArrowRight') navigateImage(1);
    });
}

window.openProjectDetails = function(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;
    
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalDescription.textContent = project.description;
    
    // Tech tags
    modalTech.innerHTML = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    // Features list
    modalFeatures.innerHTML = project.features.map(feat => `<li>${feat}</li>`).join('');
    
    // Metrics
    modalMetrics.innerHTML = Object.entries(project.metrics).map(([key, value]) => `
        <div class="metric">
            <i class="fas fa-chart-line"></i>
            <strong>${key}:</strong> ${value}
        </div>
    `).join('');
    
    // Links
    modalDemoLink.href = project.links.demo || '#';
    modalDemoLink.style.display = project.links.demo && project.links.demo !== '#' ? 'inline-flex' : 'none';
    modalGithubLink.href = project.links.github || '#';
    modalGithubLink.style.display = project.links.github && project.links.github !== '#' ? 'inline-flex' : 'none';
    
    // Gallery
    currentProjectImages = project.images || [project.image];
    currentImageIndex = 0;
    updateModalImage();
    
    // Thumbnails
    modalThumbnails.innerHTML = currentProjectImages.map((img, idx) => `
        <img src="${img}" class="${idx === 0 ? 'active' : ''}" onclick="setModalImage(${idx})" alt="Thumb">
    `).join('');
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateImage(direction) {
    currentImageIndex = (currentImageIndex + direction + currentProjectImages.length) % currentProjectImages.length;
    updateModalImage();
}

window.setModalImage = function(index) {
    currentImageIndex = index;
    updateModalImage();
};

function updateModalImage() {
    modalMainImage.src = currentProjectImages[currentImageIndex];
    document.querySelectorAll('.thumbnail-strip img').forEach((img, idx) => {
        img.classList.toggle('active', idx === currentImageIndex);
    });
}

// Project Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        currentProjectIndex = 4;
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
        for (let i = 0; i < particleCount; i++) particles.push(createParticle());
    }
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle, index) => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
            ctx.fill();
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            particles.slice(index + 1).forEach(other => {
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - d / 100)})`;
                    ctx.stroke();
                }
            });
        });
        requestAnimationFrame(drawParticles);
    }
    resizeCanvas();
    initParticles();
    drawParticles();
    window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });
}

// Initialize Counter Animation
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let count = 0;
                const increment = target / 50;
                const update = () => {
                    count += increment;
                    if (count < target) {
                        counter.textContent = Math.ceil(count) + '+';
                        requestAnimationFrame(update);
                    } else counter.textContent = target + '+';
                };
                update();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}

// Show Toast
function showToast(m, t = 'success') {
    const c = document.getElementById('toastContainer');
    const e = document.createElement('div');
    e.className = `toast ${t}`;
    e.innerHTML = `<i class="fas fa-${t === 'success' ? 'check-circle' : 'exclamation-circle'}"></i><span>${m}</span>`;
    c.appendChild(e);
    setTimeout(() => { e.style.opacity = '0'; setTimeout(() => e.remove(), 300); }, 3000);
}