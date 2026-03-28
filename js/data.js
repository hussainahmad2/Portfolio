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
        description: "Developing advanced medical technology solutions including camera-based dermatological applications and the eVitals Remote Patient Monitoring (RPM) system.",
        achievements: [
            "Architected and developed camera-based medical applications for dermatological analysis",
            "Built the eVitals RPM system to improve patient care through real-time vital monitoring",
            "Implemented highly secure and performant backend services for healthcare data management",
            "Collaborated with clinical experts to translate medical requirements into technical solutions"
        ],
        technologies: ["React", "Node.js", "Python", "Flutter", "AWS", "PostgreSQL", "Socket.io"]
    },
    {
        date: "2024 - 2025",
        title: "Associate Software Engineer",
        company: "WORK",
        location: "Islamabad, Pakistan",
        description: "Engineered full-stack solutions for retention-focused applications, specializing in customer engagement and automated notification workflows.",
        achievements: [
            "Designed and developed a Retention-Focused Application to improve customer engagement and reduce churn",
            "Collaborated with product managers and designers to define core features and user experience",
            "Implemented scalable backend services and APIs for user segmentation and engagement tracking",
            "Optimized application performance and database architecture for high-concurrency environments"
        ],
        technologies: ["React Native", "Flutter", "Node.js", "JavaScript", "PostgreSQL", "MongoDB"]
    },
    {
        date: "2022 - 2023",
        title: "Intern Software Engineer (Android & C++)",
        company: "RWR Pvt Ltd",
        location: "Islamabad, Pakistan",
        description: "Gained comprehensive experience in desktop and mobile development, delivering production-ready applications.",
        achievements: [
            "Created a Desktop Chat Application using Qt C++ with a focus on real-time communication",
            "Developed a full-fledged Restaurant Management System currently in use in 3 locations",
            "Built an Android application utilizing Google Maps API for shortest-path optimization",
            "Mastered Kotlin and C++ fundamentals by solving complex real-world algorithmic problems"
        ],
        technologies: ["C++", "Qt", "Kotlin", "Android Studio", "Google Maps API", "MySQL"]
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

// Projects Data - 4 Main Projects based on your portfolio folders
const projectsData = [
    // Project 1: eVitals (Stack Conversion)
    {
        id: 1,
        title: "E-Vitals - Stack Conversion",
        category: "web",
        description: "Led the architectural shift of a legacy Laravel system to a modern React-Redux and Node.js stack. My core contributions included designing the real-time synchronization engine using Socket.io and optimizing the SQL database schema for high-frequency healthcare data, resulting in a 40% performance gain.",
        image: "images/evitals/1.png",
        images: ["images/evitals/1.png", "images/evitals/2.png", "images/evitals/3.png", "images/evitals/4.png", "images/evitals/5.png"],
        technologies: ["React", "Redux Toolkit", "Node.js", "Socket.io", "MySQL"],
        features: ["Real-time Monitoring", "Automated Reporting", "Stack Conversion", "Health Analytics"],
        metrics: { performance: "40% Faster", users: "500+", uptime: "99.9%" },
        links: { demo: "#", github: "#" }
    },
    
    // Project 2: Khata (Financial/Accounting)
    {
        id: 2,
        title: "Khata - Financial Management System",
        category: "web",
        description: "Engineered a robust financial management system from the ground up. I focused on developing the automated bookkeeping logic and the secure invoicing module, ensuring 99.9% data accuracy across thousands of monthly transactions for small to medium enterprises.",
        image: "images/khata/1.png",
        images: ["images/khata/1.png", "images/khata/2.png", "images/khata/3.png", "images/khata/4.png", "images/khata/5.png"],
        technologies: ["React", "Node.js", "PostgreSQL", "AWS EC2", "AWS S3"],
        features: ["Expense Tracking", "Invoicing System", "Financial Reports", "Automated Bookkeeping"],
        metrics: { users: "200+", transactions: "10K+", accuracy: "99.9%" },
        links: { demo: "#", github: "#" }
    },
    
    // Project 3: Mabel (E-commerce/Retail)
    {
        id: 3,
        title: "Mabel - E-commerce Platform",
        category: "web",
        description: "Developed a scalable e-commerce solution where I spearheaded the implementation of the checkout pipeline and integrated Stripe for secure payments. I also designed the inventory management microservice which now handles over 500+ daily product updates.",
        image: "images/mabel/1.png",
        images: ["images/mabel/1.png", "images/mabel/2.png", "images/mabel/3.png", "images/mabel/4.png"],
        technologies: ["React", "Node.js", "MongoDB", "Redis", "Stripe API", "AWS S3"],
        features: ["Product Management", "Inventory Tracking", "Order Processing", "Payment Integration"],
        metrics: { products: "500+", orders: "2K+", revenue: "$100K+" },
        links: { demo: "#", github: "#" }
    },
    
    // Project 4: Velo (Transportation/Cycling)
    {
        id: 4,
        title: "Velo - Cycling & Transportation App",
        category: "web",
        description: "Architected a community-driven cycling application. My primary focus was the integration of the Google Maps API for optimized route planning and the development of the real-time GPS tracking module using WebSockets to ensure precision and low latency for active riders.",
        image: "images/velo/1.png",
        images: ["images/velo/1.png", "images/velo/2.png", "images/velo/3.png", "images/velo/4.png", "images/velo/5.png"],
        technologies: ["React", "Node.js", "MongoDB", "Google Maps API", "WebSocket"],
        features: ["Route Planning", "GPS Tracking", "Fitness Analytics", "Social Features"],
        metrics: { users: "1K+", routes: "5K+", distance: "100K+ km" },
        links: { demo: "#", github: "#" }
    }
    
    // Project 5: OBE (Education/University) - Commented out for now
    /*
    {
        id: 5,
        title: "OBE - Outcome Based Education System",
        category: "web",
        description: "An advanced education management system implementing Outcome-Based Education methodology.",
        image: "images/obe/1.png",
        images: ["images/obe/1.png", "images/obe/2.png", "images/obe/3.png", "images/obe/4.png"],
        technologies: ["React", "Python", "Django", "PostgreSQL", "Docker"],
        features: ["Course Management", "Assessment Tracking", "Performance Analytics"],
        metrics: { institutions: "5+", students: "5K+" },
        links: { demo: "#", github: "#" }
    }
    */
];

// Export all data
window.portfolioData = {
    skills: skillsData,
    experience: experienceData,
    projects: projectsData,
    services: servicesData
};