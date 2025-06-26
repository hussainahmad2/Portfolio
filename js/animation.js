// Advanced Animations

// GSAP-like animation utility
class AnimationController {
    constructor() {
        this.animations = [];
        this.init();
    }
    
    init() {
        this.observeElements();
        this.initializeTextAnimations();
        this.initializeHoverEffects();
        this.initializeScrollAnimations();
    }
    
    // Observe elements for animation triggers
    observeElements() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, options);
        
        // Observe different animation types
        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });
    }
    
    animateElement(element) {
        const animationType = element.getAttribute('data-animate');
        const delay = element.getAttribute('data-delay') || 0;
        
        setTimeout(() => {
            switch(animationType) {
                case 'fade-up':
                    this.fadeUp(element);
                    break;
                case 'fade-in':
                    this.fadeIn(element);
                    break;
                case 'slide-in':
                    this.slideIn(element);
                    break;
                case 'scale':
                    this.scale(element);
                    break;
                case 'rotate':
                    this.rotate(element);
                    break;
                default:
                    this.fadeIn(element);
            }
        }, delay);
    }
    
    fadeUp(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }
    
    fadeIn(element) {
        element.style.opacity = '0';
        element.style.transition = 'opacity 0.6s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
        });
    }
    
    slideIn(element) {
        const direction = element.getAttribute('data-direction') || 'left';
        const distance = '50px';
        
        element.style.opacity = '0';
        element.style.transform = direction === 'left' 
            ? `translateX(-${distance})` 
            : `translateX(${distance})`;
        element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }
    
    scale(element) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        });
    }
    
    rotate(element) {
        element.style.opacity = '0';
        element.style.transform = 'rotate(-10deg)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'rotate(0)';
        });
    }
    
    // Text animations
    initializeTextAnimations() {
        // Typewriter effect for hero subtitle
        const typewriterElements = document.querySelectorAll('.typewriter-text');
        typewriterElements.forEach(el => {
            this.typewriter(el);
        });
        
        // Split text animations
        const splitTextElements = document.querySelectorAll('.split-text');
        splitTextElements.forEach(el => {
            this.splitText(el);
        });
    }
    
    typewriter(element) {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        };
        
        type();
    }
    
    splitText(element) {
        const text = element.textContent;
        element.innerHTML = text
            .split('')
            .map((char, i) => `<span style="animation-delay: ${i * 0.05}s">${char}</span>`)
            .join('');
    }
    
    // Hover effects
    initializeHoverEffects() {
        // Magnetic buttons
        document.querySelectorAll('.btn').forEach(btn => {
            this.magneticEffect(btn);
        });
        
        // 3D tilt effect
        document.querySelectorAll('.tilt').forEach(el => {
            this.tiltEffect(el);
        });
    }
    
    magneticEffect(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    }
    
    tiltEffect(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const tiltX = (y - 0.5) * 20;
            const tiltY = (x - 0.5) * -20;
            
            element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
    
    // Scroll animations
    initializeScrollAnimations() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
            
            // Parallax effects
            this.handleParallax(currentScrollY);
            
            // Reveal animations
            this.handleRevealAnimations(currentScrollY, scrollDirection);
            
            lastScrollY = currentScrollY;
        });
    }
    
    handleParallax(scrollY) {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-parallax') || 0.5;
            const yPos = -(scrollY * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    handleRevealAnimations(scrollY, direction) {
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !el.classList.contains('revealed')) {
                el.classList.add('revealed');
                this.animateElement(el);
            }
        });
    }
}

// Cursor animation
class CustomCursor {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursorFollower = document.createElement('div');
        this.cursorFollower.className = 'cursor-follower';
        
        document.body.appendChild(this.cursor);
        document.body.appendChild(this.cursorFollower);
        
        this.init();
    }
    
    init() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                this.cursorFollower.style.left = e.clientX + 'px';
                this.cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .clickable');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('hover');
                this.cursorFollower.classList.add('hover');
            });
            
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('hover');
                this.cursorFollower.classList.remove('hover');
            });
        });
    }
}

// Smooth scroll with Lenis-like effect
class SmoothScroll {
    constructor() {
        this.currentY = 0;
        this.targetY = 0;
        this.ease = 0.1;
        this.init();
    }
    
    init() {
        if (window.innerWidth > 768) {
            this.setupSmoothScroll();
        }
    }
    
    setupSmoothScroll() {
        document.body.style.position = 'fixed';
        document.body.style.top = '0';
        document.body.style.left = '0';
        document.body.style.width = '100%';
        
        const scrollContainer = document.createElement('div');
        scrollContainer.style.height = `${document.body.scrollHeight}px`;
        document.body.appendChild(scrollContainer);
        
        this.animate();
    }
    
    animate() {
        this.currentY += (this.targetY - this.currentY) * this.ease;
        document.body.style.transform = `translateY(-${this.currentY}px)`;
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animation controller
    const animationController = new AnimationController();
    
    // Initialize custom cursor on desktop
    if (window.innerWidth > 768 && !('ontouchstart' in window)) {
        // const customCursor = new CustomCursor();
    }
    
    // Initialize smooth scroll on desktop
    // const smoothScroll = new SmoothScroll();
    
    // Add CSS for cursor
    const cursorStyles = `
        .custom-cursor {
            width: 10px;
            height: 10px;
            background: var(--primary);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s;
        }
        
        .cursor-follower {
            width: 30px;
            height: 30px;
            border: 2px solid var(--primary);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            transform: translate(-50%, -50%);
            transition: all 0.1s;
        }
        
        .custom-cursor.hover {
            width: 20px;
            height: 20px;
        }
        
        .cursor-follower.hover {
            width: 50px;
            height: 50px;
            border-color: var(--primary-light);
        }
        
        .reveal-on-scroll {
            opacity: 0;
        }
        
        .revealed {
            opacity: 1;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = cursorStyles;
    document.head.appendChild(styleSheet);
});