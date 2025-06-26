// Contact Form Handler with EmailJS Integration

// EmailJS Configuration
// You need to sign up at https://www.emailjs.com/ and get your own IDs
const EMAILJS_SERVICE_ID = 'service_a5onki6'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_9o1jlyx'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'Mk4hX0LhQP8FzldBr'; // Replace with your EmailJS public key

// Initialize EmailJS
(function() {
    // Load EmailJS SDK
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = function() {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    };
    document.head.appendChild(script);
})();

// Contact Form Handler
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.submitButton = this.form.querySelector('button[type="submit"]');
        this.originalButtonText = this.submitButton.innerHTML;
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.addValidation();
        this.addInputEffects();
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            return;
        }
        
        // Show loading state
        this.setLoadingState(true);
        
        try {
            // Get form data
            const formData = this.getFormData();
            
            // Send email using EmailJS
            if (EMAILJS_SERVICE_ID === 'service_a5onki6') {
                // If EmailJS is not configured, use alternative method
                await this.sendEmailAlternative(formData);
            } else {
                await this.sendEmailWithEmailJS(formData);
            }
            
            // Show success message
            this.showSuccess();
            
            // Reset form
            this.form.reset();
            
        } catch (error) {
            console.error('Error sending email:', error);
            this.showError();
        } finally {
            this.setLoadingState(false);
        }
    }
    
    async sendEmailWithEmailJS(data) {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
            to_email: 'hussainahmadbilal@gmail.com'
        };
        
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
    }
    
    async sendEmailAlternative(data) {
        // Alternative: Send to a backend endpoint
        // You can set up a simple backend using Node.js/Express or use a service like Formspree
        
        // Example using Formspree (sign up at https://formspree.io/)
        const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrbkonyk'; // Replace with your Formspree ID
        
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to send email');
        }
    }
    
    getFormData() {
        const formData = new FormData(this.form);
        return {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
    }
    
    validateForm() {
        const inputs = this.form.querySelectorAll('[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showFieldError(input, 'This field is required');
                isValid = false;
            } else if (input.type === 'email' && !this.isValidEmail(input.value)) {
                this.showFieldError(input, 'Please enter a valid email');
                isValid = false;
            } else {
                this.clearFieldError(input);
            }
        });
        
        return isValid;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    showFieldError(input, message) {
        const formGroup = input.closest('.form-group');
        const existingError = formGroup.querySelector('.error-message');
        
        if (existingError) {
            existingError.textContent = message;
        } else {
            const errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            errorElement.textContent = message;
            formGroup.appendChild(errorElement);
        }
        
        input.classList.add('error');
    }
    
    clearFieldError(input) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            errorElement.remove();
        }
        
        input.classList.remove('error');
    }
    
    addValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    this.showFieldError(input, 'This field is required');
                } else if (input.type === 'email' && input.value && !this.isValidEmail(input.value)) {
                    this.showFieldError(input, 'Please enter a valid email');
                } else {
                    this.clearFieldError(input);
                }
            });
            
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.clearFieldError(input);
                }
            });
        });
    }
    
    addInputEffects() {
        const inputs = this.form.querySelectorAll('.form-control');
        
        inputs.forEach(input => {
            // Add floating label effect
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
            
            // Check on load if input has value
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });
    }
    
    setLoadingState(isLoading) {
        if (isLoading) {
            this.submitButton.disabled = true;
            this.submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        } else {
            this.submitButton.disabled = false;
            this.submitButton.innerHTML = this.originalButtonText;
        }
    }
    
    showSuccess() {
        showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Also show inline success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thank you for your message! I'll respond within 24 hours.</p>
        `;
        
        this.form.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
    
    showError() {
        showToast('Failed to send message. Please try again or email directly.', 'error');
    }
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = new ContactForm();
    
    // Add additional styles for form
    const formStyles = `
        .form-group {
            position: relative;
            margin-bottom: 1.5rem;
        }
        
        .form-group.focused label {
            top: -10px;
            font-size: 0.75rem;
            color: var(--primary);
            background: var(--surface);
            padding: 0 0.5rem;
        }
        
        .form-control.error {
            border-color: var(--danger);
        }
        
        .error-message {
            display: block;
            color: var(--danger);
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }
        
        .form-success-message {
            background: var(--success);
            color: white;
            padding: 1rem;
            border-radius: var(--radius-md);
            margin-top: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideInUp 0.3s ease;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = formStyles;
    document.head.appendChild(styleSheet);
});

// Alternative: Direct email link fallback
function openEmailClient() {
    const email = 'hussainahmadbilal@gmail.com';
    const subject = 'Project Inquiry';
    const body = 'Hi Hussain,\n\nI would like to discuss a project with you.\n\n';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}