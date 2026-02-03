// Portfolio Data

// Skills Data - Updated with actual skills
const skillsData = [
    {
        category: "Mobile Development",
        icon: "fas fa-mobile-alt",
        skills: [
            { name: "React Native", level: "Advanced" },
            { name: "Flutter", level: "Advanced" },
            { name: "Android Development", level: "Intermediate" },
            { name: "iOS Development", level: "Intermediate" },
            { name: "Mobile UI/UX", level: "Advanced" }
        ]
    },
    {
        category: "Frontend Development",
        icon: "fas fa-laptop-code",
        skills: [
            { name: "React", level: "Expert" },
            { name: "JavaScript/ES6+", level: "Expert" },
            { name: "TypeScript", level: "Advanced" },
            { name: "HTML5/CSS3", level: "Expert" },
            { name: "Responsive Design", level: "Expert" },
            { name: "Bootstrap", level: "Expert" }
        ]
    },
    {
        category: "Backend Development",
        icon: "fas fa-server",
        skills: [
            { name: "Node.js", level: "Expert" },
            { name: "Express.js", level: "Expert" },
            { name: "Python", level: "Advanced" },
            { name: "REST APIs", level: "Expert" },
            { name: "JWT Authentication", level: "Expert" }
        ]
    },
    {
        category: "Databases",
        icon: "fas fa-database",
        skills: [
            { name: "PostgreSQL", level: "Advanced" },
            { name: "MongoDB", level: "Advanced" },
            { name: "MySQL", level: "Expert" },
            { name: "Database Design", level: "Advanced" }
        ]
    },
    {
        category: "Cloud & DevOps",
        icon: "fas fa-cloud",
        skills: [
            { name: "AWS EC2", level: "Advanced" },
            { name: "AWS S3", level: "Advanced" },
            { name: "Cloud Architecture", level: "Advanced" },
            { name: "Git/GitHub", level: "Expert" }
        ]
    }
];

// Experience Data - Updated with actual work experience
const experienceData = [
    {
        date: "2025 - Present",
        title: "Software Engineer",
        company: "Revive Medical Technologies",
        location: "Rawalpindi, Pakistan",
        description: "Full Stack Software Engineer developing web applications, mobile apps, and medical technology solutions for healthcare industry.",
        achievements: [
            "Developing full-stack web and mobile applications for medical technology solutions",
            "Building responsive web applications using modern frameworks and best practices",
            "Creating mobile applications for healthcare and medical services",
            "Implementing database solutions and API integrations for medical systems",
            "Collaborating with healthcare professionals to develop user-friendly medical applications"
        ],
        technologies: ["React", "Node.js", "Python", "Flutter", "AWS", "PostgreSQL", "MongoDB"]
    },
    {
        date: "2024 - 2025",
        title: "Junior Software Engineer",
        company: "WORK",
        location: "Islamabad, Pakistan",
        description: "Full Stack Developer creating mobile applications and web solutions for customer management, sales, finance, and employee records systems.",
        achievements: [
            "Developed mobile applications for customer management and sales tracking",
            "Built financial management and record-keeping systems",
            "Created employee demographics and sales record management applications",
            "Developed web applications for company internal use",
            "Implemented database solutions for comprehensive business management"
        ],
        technologies: ["React Native", "Flutter", "Node.js", "JavaScript", "PostgreSQL", "MongoDB"]
    }
];

// Services Data - Updated for current offerings
const servicesData = [
    {
        icon: "fas fa-laptop-code",
        title: "Web Development",
        description: "Full-stack web application development using modern technologies like React, Node.js, and Python. From concept to deployment.",
        features: [
            "Responsive Web Design",
            "RESTful API Development",
            "Database Design & Integration",
            "Performance Optimization"
        ]
    },
    {
        icon: "fas fa-cloud",
        title: "Cloud Solutions",
        description: "AWS cloud infrastructure setup and management including EC2 instances, S3 storage, and scalable cloud architectures.",
        features: [
            "AWS EC2 & S3 Configuration",
            "Cloud Architecture Design",
            "Server Deployment & Management",
            "Scalable Infrastructure"
        ]
    },
    {
        icon: "fas fa-database",
        title: "Database Design",
        description: "Database architecture and optimization for both SQL and NoSQL databases with focus on performance and scalability.",
        features: [
            "Database Schema Design",
            "Query Optimization",
            "Data Migration",
            "Backup & Recovery"
        ]
    },
    {
        icon: "fas fa-code",
        title: "API Development",
        description: "RESTful and GraphQL API development with proper authentication, documentation, and integration capabilities.",
        features: [
            "REST/GraphQL APIs",
            "JWT Authentication",
            "API Documentation",
            "Third-party Integrations"
        ]
    }
];

// Export all data
window.portfolioData = {
    skills: skillsData,
    experience: experienceData,
    projects: projectsData,
    services: servicesData
};
[
    "React Native", "Flutter", "TypeScript", "AWS", "GraphQL", "Kubernetes", "AI/ML"]
    ,
    {
        date: "2022 - 2023",
        title: "Lead Mobile Developer",
        company: "InnovateTech Solutions",
        location: "Islamabad, Pakistan",
        description: "Spearheaded mobile development for Pakistan's leading fintech platform.",
        achievements: [
            "Built Pakistan's first AI-powered mobile banking assistant",
            "Reduced app crash rate from 2.3% to 0.1% through optimization",
            "Implemented biometric security features for 500K+ users",
            "Led migration from native to React Native, saving $200K annually",
            "Achieved 4.8★ rating on both App Store and Google Play"
        ],
        technologies: ["React Native", "Node.js", "MongoDB", "Redis", "Docker", "AWS"]
    },
    {
        date: "2021 - 2022",
        title: "Full Stack Developer",
        company: "Digital Dynamics",
        location: "Rawalpindi, Pakistan",
        description: "Developed full-stack solutions for international e-commerce clients.",
        achievements: [
            "Built 15+ e-commerce mobile apps generating $5M+ in revenue",
            "Implemented real-time inventory management system",
            "Reduced checkout abandonment by 35% through UX improvements",
            "Integrated 10+ payment gateways including Stripe, PayPal, and local solutions",
            "Automated deployment pipeline saving 20 hours/week"
        ],
        technologies: ["MERN Stack", "React Native", "PostgreSQL", "Stripe API", "CI/CD"]
    },
    {
        date: "2020 - 2021",
        title: "Mobile Developer",
        company: "StartupHub Accelerator",
        location: "Lahore, Pakistan",
        description: "Developed MVPs and mobile solutions for multiple startups in the accelerator program.",
        achievements: [
            "Delivered 25+ MVPs for startups across various industries",
            "Helped 3 startups secure funding with polished mobile apps",
            "Built social media app reaching 100K+ downloads in 3 months",
            "Implemented analytics dashboard reducing decision time by 70%",
            "Created reusable component library used across all projects"
        ],
        technologies: ["React Native", "Firebase", "Express.js", "Socket.io", "Analytics"]
    },
    {
        date: "2019 - 2020",
        title: "Junior Developer & Freelancer",
        company: "Self-Employed",
        location: "Remote",
        description: "Started career as a freelance developer, building mobile and web applications for global clients.",
        achievements: [
            "Completed 30+ projects with 100% client satisfaction",
            "Built fitness tracking app featured in health magazines",
            "Developed educational platform serving 5000+ students",
            "Maintained 5-star rating on Upwork and Fiverr",
            "Established long-term contracts with 5 international clients"
        ],
        technologies: ["JavaScript", "React", "Node.js", "MySQL", "Mobile Development"]
    }
;

// Projects Data - 4 Main Projects based on your portfolio folders
const projectsData = [
    // Project 1: Khata (Financial/Accounting)
    {
        id: 1,
        title: "Khata - Financial Management System",
        category: "web",
        description: "A comprehensive financial management and accounting system designed for businesses and individuals. Features include expense tracking, invoicing, financial reporting, and automated bookkeeping. Built with modern web technologies for seamless user experience.",
        image: "images/khata/1.png",
        technologies: ["React", "Node.js", "PostgreSQL", "AWS EC2", "AWS S3"],
        features: ["Expense Tracking", "Invoicing System", "Financial Reports", "Automated Bookkeeping", "Multi-user Access"],
        metrics: { users: "200+", transactions: "10K+", accuracy: "99.9%", uptime: "99.5%" },
        links: { demo: "#", github: "#" }
    },
    
    // Project 2: Mabel (E-commerce/Retail)
    {
        id: 2,
        title: "Mabel - E-commerce Platform",
        category: "web",
        description: "A modern e-commerce platform with advanced product management, inventory tracking, and customer relationship management. Features real-time inventory updates, order management, and integrated payment processing for seamless online shopping experience.",
        image: "images/mabel/1.png",
        technologies: ["React", "Node.js", "MongoDB", "Redis", "Stripe API", "AWS S3"],
        features: ["Product Management", "Inventory Tracking", "Order Processing", "Payment Integration", "Customer Dashboard"],
        metrics: { products: "500+", orders: "2K+", revenue: "$100K+", customers: "500+" },
        links: { demo: "#", github: "#" }
    },
    
    // Project 3: OBE (Education/University)
    {
        id: 3,
        title: "OBE - Outcome Based Education System",
        category: "web",
        description: "An advanced education management system implementing Outcome-Based Education methodology. Features course management, assessment tracking, student performance analytics, and comprehensive reporting for educational institutions.",
        image: "images/obe/1.png",
        technologies: ["React", "Python", "Django", "PostgreSQL", "Docker", "AWS EC2"],
        features: ["Course Management", "Assessment Tracking", "Performance Analytics", "Report Generation", "Multi-institution Support"],
        metrics: { institutions: "5+", courses: "200+", students: "5K+", assessments: "10K+" },
        links: { demo: "#", github: "#" }
    },
    
    // Project 4: Velo (Transportation/Cycling)
    {
        id: 4,
        title: "Velo - Cycling & Transportation App",
        category: "web",
        description: "A cycling and transportation management application with route planning, fitness tracking, and community features. Includes GPS tracking, performance analytics, social sharing, and integration with wearable devices for cycling enthusiasts.",
        image: "images/velo/1.png",
        technologies: ["React", "Node.js", "MongoDB", "Google Maps API", "WebSocket", "AWS S3"],
        features: ["Route Planning", "GPS Tracking", "Fitness Analytics", "Social Features", "Wearable Integration"],
        metrics: { users: "1K+", routes: "5K+", distance: "100K+ km", community: "Active" },
        links: { demo: "#", github: "#" }
    }
];