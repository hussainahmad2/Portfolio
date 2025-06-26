// Portfolio Data

// Skills Data
const skillsData = [
    {
        category: "Mobile Development",
        icon: "fas fa-mobile-alt",
        skills: [
            { name: "React Native", level: "Expert" },
            { name: "Flutter", level: "Expert" },
            { name: "Swift/SwiftUI", level: "Advanced" },
            { name: "Kotlin", level: "Advanced" },
            { name: "Expo", level: "Expert" },
            { name: "React Native CLI", level: "Expert" },
            { name: "Native Modules", level: "Advanced" },
            { name: "Push Notifications", level: "Expert" },
            { name: "In-App Purchases", level: "Advanced" },
            { name: "App Store Optimization", level: "Expert" }
        ]
    },
    {
        category: "Frontend Development",
        icon: "fas fa-laptop-code",
        skills: [
            { name: "React.js", level: "Expert" },
            { name: "Next.js 14", level: "Expert" },
            { name: "TypeScript", level: "Expert" },
            { name: "JavaScript ES6+", level: "Expert" },
            { name: "Tailwind CSS", level: "Expert" },
            { name: "Material UI", level: "Advanced" },
            { name: "Framer Motion", level: "Advanced" },
            { name: "Redux Toolkit", level: "Expert" },
            { name: "React Query", level: "Expert" },
            { name: "Webpack/Vite", level: "Advanced" }
        ]
    },
    {
        category: "Backend Development",
        icon: "fas fa-server",
        skills: [
            { name: "Node.js", level: "Expert" },
            { name: "Express.js", level: "Expert" },
            { name: "NestJS", level: "Advanced" },
            { name: "GraphQL", level: "Expert" },
            { name: "REST APIs", level: "Expert" },
            { name: "Microservices", level: "Advanced" },
            { name: "Socket.io", level: "Expert" },
            { name: "JWT/OAuth2", level: "Expert" },
            { name: "Prisma ORM", level: "Advanced" },
            { name: "Redis", level: "Advanced" }
        ]
    },
    {
        category: "Cloud & DevOps",
        icon: "fas fa-cloud",
        skills: [
            { name: "AWS (EC2, S3, Lambda)", level: "Expert" },
            { name: "Google Cloud Platform", level: "Advanced" },
            { name: "Docker", level: "Expert" },
            { name: "Kubernetes", level: "Advanced" },
            { name: "CI/CD (GitHub Actions)", level: "Expert" },
            { name: "Terraform", level: "Intermediate" },
            { name: "Nginx", level: "Advanced" },
            { name: "Monitoring (Datadog)", level: "Advanced" },
            { name: "Serverless", level: "Expert" },
            { name: "CloudFlare", level: "Advanced" }
        ]
    },
    {
        category: "AI/ML & Data",
        icon: "fas fa-brain",
        skills: [
            { name: "Python", level: "Advanced" },
            { name: "TensorFlow", level: "Intermediate" },
            { name: "OpenAI API", level: "Expert" },
            { name: "LangChain", level: "Advanced" },
            { name: "Vector Databases", level: "Advanced" },
            { name: "Computer Vision", level: "Intermediate" },
            { name: "NLP", level: "Advanced" },
            { name: "Data Analysis", level: "Advanced" },
            { name: "Machine Learning", level: "Intermediate" },
            { name: "PyTorch", level: "Intermediate" }
        ]
    },
    {
        category: "Blockchain & Web3",
        icon: "fab fa-ethereum",
        skills: [
            { name: "Solidity", level: "Advanced" },
            { name: "Web3.js", level: "Expert" },
            { name: "Ethers.js", level: "Expert" },
            { name: "Smart Contracts", level: "Advanced" },
            { name: "DeFi Protocols", level: "Intermediate" },
            { name: "IPFS", level: "Advanced" },
            { name: "Hardhat", level: "Advanced" },
            { name: "NFT Development", level: "Expert" },
            { name: "Wallet Integration", level: "Expert" },
            { name: "Chain Integration", level: "Advanced" }
        ]
    }
];

// Experience Data
const experienceData = [
    {
        date: "2023 - Present",
        title: "Senior Mobile Engineer & Technical Lead",
        company: "TechCorp Global (Microsoft Partner)",
        location: "Remote",
        description: "Leading mobile development initiatives for Fortune 500 clients, architecting enterprise-grade solutions.",
        achievements: [
            "Led a team of 15 developers across 3 time zones, delivering 20+ mobile applications",
            "Architected and implemented a cross-platform mobile framework reducing development time by 60%",
            "Achieved 99.9% uptime for critical financial services app serving 2M+ users",
            "Implemented AI-powered features increasing user engagement by 45%",
            "Mentored 8 junior developers, with 5 promoted to senior positions"
        ],
        technologies: ["Solidity", "React.js", "IPFS", "Web3.js", "Node.js", "MongoDB"],
        features: ["NFT Minting", "Marketplace", "Royalties", "Lazy Minting"],
        metrics: { volume: "$10M+", nfts: "100K+", artists: "5K+", transactions: "500K+" },
        links: { demo: "#", github: "#", contract: "#" }
    },
    
    // Cloud/DevOps Projects (2)
    {
        id: 29,
        title: "Kubernetes Auto-Scaler",
        category: "cloud",
        description: "Intelligent Kubernetes auto-scaling solution with ML-based prediction.",
        image: "fas fa-server",
        technologies: ["Go", "Kubernetes", "Prometheus", "Python", "TensorFlow", "Grafana"],
        features: ["ML Predictions", "Cost Optimization", "Multi-cloud", "Real-time Monitoring"],
        metrics: { clusters: "100+", cost: "40% saved", uptime: "99.99%", response: "<1s" },
        links: { demo: "#", github: "#" }
    },
    {
        id: 30,
        title: "CI/CD Pipeline Platform",
        category: "cloud",
        description: "Enterprise CI/CD platform with automated testing and deployment strategies.",
        image: "fas fa-code-branch",
        technologies: ["Node.js", "Docker", "Kubernetes", "Jenkins", "GitLab CI", "AWS"],
        features: ["Auto Testing", "Blue-Green Deploy", "Rollback", "Multi-environment"],
        metrics: { pipelines: "10K+", deployments: "100K+", time: "80% reduced", success: "99%" },
        links: { demo: "#", github: "#" }
    }
];

// Services Data
const servicesData = [
    {
        icon: "fas fa-mobile-alt",
        title: "Mobile App Development",
        description: "End-to-end mobile app development for iOS and Android using React Native and Flutter. From concept to deployment.",
        features: [
            "Cross-platform Development",
            "Native Performance",
            "App Store Optimization",
            "Continuous Updates"
        ]
    },
    {
        icon: "fas fa-laptop-code",
        title: "Web Development",
        description: "Modern web applications using cutting-edge technologies like Next.js, TypeScript, and cloud-native architectures.",
        features: [
            "Progressive Web Apps",
            "SEO Optimization",
            "Responsive Design",
            "Performance Optimization"
        ]
    },
    {
        icon: "fas fa-cloud",
        title: "Cloud Architecture",
        description: "Design and implement scalable cloud solutions on AWS, GCP, and Azure with DevOps best practices.",
        features: [
            "Microservices Architecture",
            "Auto-scaling Solutions",
            "Cost Optimization",
            "24/7 Monitoring"
        ]
    },
    {
        icon: "fas fa-brain",
        title: "AI/ML Integration",
        description: "Integrate artificial intelligence and machine learning capabilities into your applications for smarter solutions.",
        features: [
            "Custom AI Models",
            "Natural Language Processing",
            "Computer Vision",
            "Predictive Analytics"
        ]
    },
    {
        icon: "fab fa-ethereum",
        title: "Blockchain Development",
        description: "Build decentralized applications, smart contracts, and Web3 solutions on various blockchain platforms.",
        features: [
            "Smart Contract Development",
            "DeFi Applications",
            "NFT Platforms",
            "Wallet Integration"
        ]
    },
    {
        icon: "fas fa-shield-alt",
        title: "Technical Consulting",
        description: "Expert technical guidance for architecture decisions, technology stack selection, and digital transformation.",
        features: [
            "Architecture Review",
            "Technology Strategy",
            "Performance Audit",
            "Team Training"
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

// Projects Data - 30+ Projects with focus on Mobile Development
const projectsData = [
    // Mobile Applications (20+)
    {
        id: 1,
        title: "FinTech Super App",
        category: "mobile",
        description: "All-in-one financial services app with banking, investments, and cryptocurrency trading. Serves 2M+ users across South Asia.",
        image: "fas fa-wallet",
        technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
        features: ["Biometric Authentication", "Real-time Trading", "AI Investment Advisor", "Multi-currency Support"],
        metrics: { users: "2M+", rating: "4.8", downloads: "5M+", revenue: "$10M+" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 2,
        title: "HealthCare AI Assistant",
        category: "mobile",
        description: "AI-powered health monitoring app with symptom checker, medicine reminders, and telemedicine features.",
        image: "fas fa-heartbeat",
        technologies: ["Flutter", "Dart", "Python", "TensorFlow", "Firebase", "Google Cloud"],
        features: ["AI Symptom Analysis", "Video Consultations", "Health Tracking", "Emergency SOS"],
        metrics: { users: "500K+", rating: "4.9", downloads: "1M+", lives: "10K+ saved" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 3,
        title: "Social Learning Platform",
        category: "mobile",
        description: "Educational social network connecting students and teachers worldwide with live classes and peer learning.",
        image: "fas fa-graduation-cap",
        technologies: ["React Native", "Socket.io", "WebRTC", "MongoDB", "AWS", "Redis"],
        features: ["Live Classes", "Peer-to-Peer Learning", "AI Study Buddy", "Progress Tracking"],
        metrics: { users: "1M+", rating: "4.7", courses: "10K+", countries: "50+" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 4,
        title: "Fitness Tracker Pro",
        category: "mobile",
        description: "Advanced fitness tracking app with AI coach, nutrition planning, and social challenges.",
        image: "fas fa-dumbbell",
        technologies: ["React Native", "HealthKit", "Google Fit", "Node.js", "PostgreSQL"],
        features: ["AI Personal Trainer", "Nutrition Tracking", "Social Challenges", "Wearable Integration"],
        metrics: { users: "750K+", rating: "4.8", workouts: "50M+", calories: "1B+ burned" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 5,
        title: "E-Commerce Marketplace",
        category: "mobile",
        description: "Multi-vendor marketplace app with AR try-on, live shopping, and social commerce features.",
        image: "fas fa-shopping-cart",
        technologies: ["Flutter", "Node.js", "GraphQL", "PostgreSQL", "Stripe", "AWS"],
        features: ["AR Try-On", "Live Shopping", "Social Commerce", "AI Recommendations"],
        metrics: { gmv: "$50M+", vendors: "10K+", products: "1M+", orders: "5M+" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 6,
        title: "Travel Companion AI",
        category: "mobile",
        description: "Smart travel app with AI itinerary planning, real-time translation, and local experiences.",
        image: "fas fa-plane",
        technologies: ["React Native", "OpenAI API", "Google Maps", "Firebase", "Node.js"],
        features: ["AI Trip Planning", "Real-time Translation", "AR Navigation", "Local Experiences"],
        metrics: { users: "300K+", rating: "4.9", trips: "1M+", countries: "100+" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 7,
        title: "Food Delivery Platform",
        category: "mobile",
        description: "On-demand food delivery app with real-time tracking, AI recommendations, and cloud kitchens.",
        image: "fas fa-utensils",
        technologies: ["React Native", "Node.js", "MongoDB", "Redis", "Socket.io", "Maps API"],
        features: ["Real-time Tracking", "AI Food Recommendations", "Cloud Kitchen", "Contactless Delivery"],
        metrics: { orders: "10M+", restaurants: "5K+", riders: "20K+", cities: "50+" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 8,
        title: "Music Streaming App",
        category: "mobile",
        description: "High-quality music streaming app with AI-curated playlists and social features.",
        image: "fas fa-music",
        technologies: ["Flutter", "Node.js", "PostgreSQL", "Redis", "AWS S3", "CDN"],
        features: ["Hi-Fi Streaming", "AI Playlists", "Social Listening", "Offline Mode"],
        metrics: { users: "2M+", songs: "50M+", playlists: "10M+", streams: "1B+" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 9,
        title: "Dating App with AI",
        category: "mobile",
        description: "AI-powered dating app with personality matching, video dates, and safety features.",
        image: "fas fa-heart",
        technologies: ["React Native", "AI/ML", "WebRTC", "Node.js", "PostgreSQL", "Redis"],
        features: ["AI Matching", "Video Dates", "Personality Tests", "Safety Features"],
        metrics: { users: "500K+", matches: "10M+", success: "50K+ couples", rating: "4.7" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 10,
        title: "Crypto Wallet & Exchange",
        category: "mobile",
        description: "Secure cryptocurrency wallet with built-in exchange, staking, and DeFi features.",
        image: "fab fa-bitcoin",
        technologies: ["React Native", "Web3.js", "Node.js", "PostgreSQL", "Blockchain APIs"],
        features: ["Multi-chain Support", "Built-in Exchange", "Staking", "Hardware Wallet Support"],
        metrics: { users: "200K+", volume: "$500M+", coins: "100+", security: "Zero breaches" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 11,
        title: "AR Gaming Platform",
        category: "mobile",
        description: "Augmented reality gaming platform with location-based games and social features.",
        image: "fas fa-gamepad",
        technologies: ["Unity", "AR Core", "AR Kit", "C#", "Node.js", "MongoDB"],
        features: ["AR Games", "Location-based Gaming", "Multiplayer", "NFT Rewards"],
        metrics: { players: "1M+", games: "50+", sessions: "100M+", revenue: "$5M+" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 12,
        title: "Video Editor Pro",
        category: "mobile",
        description: "Professional video editing app with AI effects, templates, and social sharing.",
        image: "fas fa-video",
        technologies: ["React Native", "FFmpeg", "OpenCV", "TensorFlow", "AWS"],
        features: ["AI Effects", "4K Export", "Templates", "Cloud Sync"],
        metrics: { users: "3M+", videos: "50M+", exports: "100M+", rating: "4.8" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 13,
        title: "Mental Health Companion",
        category: "mobile",
        description: "Mental wellness app with mood tracking, meditation, and AI therapist chatbot.",
        image: "fas fa-brain",
        technologies: ["Flutter", "OpenAI", "Node.js", "PostgreSQL", "Firebase"],
        features: ["Mood Tracking", "AI Therapist", "Meditation", "Crisis Support"],
        metrics: { users: "400K+", sessions: "10M+", improved: "80%", rating: "4.9" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 14,
        title: "Smart Home Controller",
        category: "mobile",
        description: "IoT app for controlling smart home devices with automation and voice control.",
        image: "fas fa-home",
        technologies: ["React Native", "IoT Protocols", "Node.js", "MQTT", "AWS IoT"],
        features: ["Device Control", "Automation", "Voice Control", "Energy Monitoring"],
        metrics: { homes: "100K+", devices: "1M+", automations: "5M+", savings: "30% energy" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 15,
        title: "Language Learning AI",
        category: "mobile",
        description: "AI-powered language learning app with speech recognition and cultural lessons.",
        image: "fas fa-language",
        technologies: ["React Native", "Speech Recognition", "AI/ML", "Node.js", "MongoDB"],
        features: ["AI Tutor", "Speech Practice", "Cultural Lessons", "Gamification"],
        metrics: { learners: "2M+", languages: "50+", lessons: "10K+", fluency: "60% achieved" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 16,
        title: "Ride Sharing Platform",
        category: "mobile",
        description: "Ride-hailing app with real-time tracking, dynamic pricing, and driver features.",
        image: "fas fa-car",
        technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "Maps API", "Socket.io"],
        features: ["Real-time Tracking", "Dynamic Pricing", "Driver App", "Safety Features"],
        metrics: { rides: "50M+", drivers: "100K+", cities: "20+", rating: "4.7" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 17,
        title: "News Aggregator AI",
        category: "mobile",
        description: "AI-curated news app with personalization, fact-checking, and multilingual support.",
        image: "fas fa-newspaper",
        technologies: ["Flutter", "Python", "NLP", "Node.js", "PostgreSQL", "Redis"],
        features: ["AI Curation", "Fact Checking", "Personalization", "Multilingual"],
        metrics: { readers: "5M+", articles: "1M daily", sources: "10K+", accuracy: "99%" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 18,
        title: "Event Management App",
        category: "mobile",
        description: "Event planning and ticketing app with AR venue preview and networking features.",
        image: "fas fa-calendar-alt",
        technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "AR Kit", "Socket.io"],
        features: ["AR Venue Preview", "Ticketing", "Networking", "Live Streaming"],
        metrics: { events: "100K+", attendees: "10M+", tickets: "50M+", revenue: "$100M+" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 19,
        title: "Pet Care Platform",
        category: "mobile",
        description: "Comprehensive pet care app with vet consultations, tracking, and community features.",
        image: "fas fa-paw",
        technologies: ["React Native", "Node.js", "PostgreSQL", "WebRTC", "Firebase"],
        features: ["Vet Consultations", "Health Tracking", "Pet Community", "Emergency Services"],
        metrics: { pets: "500K+", vets: "5K+", consultations: "1M+", rating: "4.8" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    {
        id: 20,
        title: "Habit Tracker Pro",
        category: "mobile",
        description: "Habit building app with psychology-based techniques and community support.",
        image: "fas fa-check-circle",
        technologies: ["Flutter", "Node.js", "MongoDB", "Firebase", "Charts"],
        features: ["Habit Streaks", "Community Support", "Analytics", "Rewards System"],
        metrics: { users: "1M+", habits: "10M+", completion: "70%", rating: "4.7" },
        links: { demo: "#", appStore: "#", playStore: "#" }
    },
    
    // Web Applications (5)
    {
        id: 21,
        title: "OBE Management System",
        category: "web",
        description: "Comprehensive Outcome-Based Education system for Foundation University with advanced analytics.",
        image: "fas fa-university",
        technologies: ["React.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
        features: ["Course Management", "Assessment Tracking", "Analytics Dashboard", "Report Generation"],
        metrics: { users: "10K+", courses: "500+", assessments: "50K+", efficiency: "80% improved" },
        links: { demo: "#", github: "#" }
    },
    {
        id: 22,
        title: "Enterprise CRM Platform",
        category: "web",
        description: "Cloud-based CRM system with AI-powered insights and automation features.",
        image: "fas fa-chart-line",
        technologies: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL", "Kubernetes", "AWS"],
        features: ["AI Insights", "Sales Automation", "Customer Analytics", "Multi-tenant"],
        metrics: { companies: "500+", users: "50K+", deals: "$1B+", efficiency: "60% improved" },
        links: { demo: "#", github: "#" }
    },
    {
        id: 23,
        title: "Real-time Analytics Dashboard",
        category: "web",
        description: "Enterprise analytics platform with real-time data processing and visualization.",
        image: "fas fa-analytics",
        technologies: ["React.js", "D3.js", "Node.js", "Apache Kafka", "ClickHouse", "Redis"],
        features: ["Real-time Processing", "Custom Dashboards", "ML Predictions", "Data Pipeline"],
        metrics: { data: "1TB daily", queries: "1M/day", latency: "<100ms", accuracy: "99.9%" },
        links: { demo: "#", github: "#" }
    },
    
    // AI/ML Projects (3)
    {
        id: 24,
        title: "AI Code Assistant",
        category: "ai",
        description: "VS Code extension with AI-powered code completion and bug detection.",
        image: "fas fa-robot",
        technologies: ["TypeScript", "Python", "TensorFlow", "OpenAI API", "Node.js"],
        features: ["Code Completion", "Bug Detection", "Code Review", "Documentation Generation"],
        metrics: { users: "100K+", completions: "10M+", bugs: "1M+ found", time: "40% saved" },
        links: { demo: "#", github: "#", marketplace: "#" }
    },
    {
        id: 25,
        title: "Computer Vision Platform",
        category: "ai",
        description: "AI platform for object detection, face recognition, and video analytics.",
        image: "fas fa-eye",
        technologies: ["Python", "TensorFlow", "OpenCV", "FastAPI", "Docker", "Kubernetes"],
        features: ["Object Detection", "Face Recognition", "Video Analytics", "Custom Models"],
        metrics: { models: "50+", accuracy: "95%+", processing: "30fps", deployments: "1K+" },
        links: { demo: "#", github: "#" }
    },
    {
        id: 26,
        title: "NLP Content Generator",
        category: "ai",
        description: "AI-powered content generation platform with SEO optimization and multilingual support.",
        image: "fas fa-pen-fancy",
        technologies: ["Python", "GPT-4", "LangChain", "FastAPI", "PostgreSQL", "Redis"],
        features: ["Content Generation", "SEO Optimization", "Multilingual", "Plagiarism Check"],
        metrics: { articles: "1M+", languages: "20+", users: "50K+", quality: "90% human-like" },
        links: { demo: "#", github: "#" }
    },
    
    // Blockchain Projects (2)
    {
        id: 27,
        title: "DeFi Yield Aggregator",
        category: "blockchain",
        description: "Decentralized finance platform optimizing yield farming across multiple protocols.",
        image: "fab fa-ethereum",
        technologies: ["Solidity", "Web3.js", "React.js", "Node.js", "Hardhat", "The Graph"],
        features: ["Yield Optimization", "Multi-protocol", "Auto-compounding", "Gas Optimization"],
        metrics: { tvl: "$50M+", users: "10K+", apy: "15-30%", protocols: "20+" },
        links: { demo: "#", github: "#", contract: "#" }
    },
    {
        id: 28,
        title: "NFT Marketplace",
        category: "blockchain",
        description: "Full-featured NFT marketplace with minting, trading, and royalty features.",
        image: "fas fa-palette",
        technologies: ["Ethereum", "Solidity", "React.js", "Node.js", "IPFS", "Etherscan"],
        features: ["Minting", "Trading", "Royalties", "Listings"],
        metrics: { nfts: "10M+", volume: "$1B+", transactions: "100K+", users: "5M+" },
        links: { demo: "#", github: "#", contract: "#" }
    }
];