// Mock data for portfolio projects
export const skills = [
  { id: 'mobile', label: 'Mobile App', active: true },
  { id: 'dashboard', label: 'Dashboard', active: false },
  { id: 'website', label: 'Website', active: false },
  { id: 'webflow', label: 'Webflow', active: false },
  { id: 'uiux', label: 'UI/UX Design', active: false },
  { id: 'wordpress', label: 'WordPress', active: false },
  { id: 'htmlcss', label: 'Html/Css', active: false },
  { id: 'shopify', label: 'Shopify', active: false }
];

export const projects = [
  {
    id: 1,
    title: "Podcast Mobile iOS App UI Design",
    category: "mobile",
    type: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop&crop=center",
    description: "A modern podcast mobile application with intuitive navigation and beautiful UI components. Features include audio player, episode browsing, and user profiles.",
    technologies: ["React Native", "UI/UX", "Mobile Design", "Figma", "Prototyping"],
    client: "Nickerfox",
    duration: "3 months",
    year: "2024",
    challenges: "Creating an intuitive audio experience with seamless navigation while ensuring accessibility for users with different hearing abilities",
    solution: "Implemented gesture-based controls, visual audio indicators, haptic feedback, and comprehensive accessibility features including voice commands and visual transcriptions",
    results: "40% increase in user engagement, 25% longer session times, and 95% accessibility compliance rating",
    overview: "This project involved designing a comprehensive podcast discovery and listening platform for iOS. The app needed to stand out in a crowded market while providing an exceptional user experience for podcast enthusiasts.",
    targetAudience: "Podcast enthusiasts aged 25-45, commuters, and people who consume audio content regularly",
    designProcess: [
      {
        step: "Research & Discovery",
        description: "Conducted user interviews with 50+ podcast listeners to understand pain points",
        duration: "2 weeks"
      },
      {
        step: "Wireframing & Information Architecture",
        description: "Created low-fidelity wireframes and defined the app's navigation structure",
        duration: "1 week"
      },
      {
        step: "Visual Design & Prototyping",
        description: "Designed high-fidelity mockups and interactive prototypes",
        duration: "3 weeks"
      },
      {
        step: "Testing & Iteration",
        description: "Conducted usability testing and refined the design based on feedback",
        duration: "2 weeks"
      }
    ],
    keyFeatures: [
      "Smart podcast recommendations using AI",
      "Offline downloading with sync across devices",
      "Custom playlist creation and sharing",
      "Sleep timer and speed controls",
      "Social features for podcast discussions",
      "Chapter navigation and bookmarking"
    ],
    projectImages: [
      {
        url: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHx3aXJlZnJhbWV8ZW58MHx8fHwxNzU5NzMyNDk0fDA&ixlib=rb-4.1.0&q=85",
        caption: "Initial wireframes and user flow mapping"
      },
      {
        url: "https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHx3aXJlZnJhbWV8ZW58MHx8fHwxNzU5NzMyNDk0fDA&ixlib=rb-4.1.0&q=85",
        caption: "Hand-drawn concept sketches and ideation"
      },
      {
        url: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzfGVufDB8fHx8MTc1OTczMjUwNHww&ixlib=rb-4.1.0&q=85",
        caption: "Collaborative design sessions with the development team"
      }
    ],
    testimonial: {
      content: "The new podcast app design exceeded our expectations. User engagement increased significantly and the feedback has been overwhelmingly positive.",
      author: "Sarah Johnson",
      role: "Product Manager at Nickerfox",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=60&h=60&fit=crop&crop=face"
    }
  },
  {
    id: 2,
    title: "Furniture E-commerce Website",
    category: "website",
    type: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
    description: "Sustainable furniture e-commerce platform with modern design and smooth shopping experience. Features product catalog, shopping cart, and eco-friendly initiatives.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "WebGL", "AR.js"],
    client: "EcoFurniture Co.",
    duration: "4 months",
    year: "2024",
    challenges: "Showcasing large furniture pieces effectively online while maintaining fast loading times and providing customers confidence in their purchase decisions",
    solution: "Optimized image delivery pipeline, implemented 360° product views, AR preview functionality, and detailed sustainability information for each product",
    results: "60% increase in conversion rates, 40% reduction in return rates, and improved customer satisfaction score to 4.8/5",
    overview: "This comprehensive e-commerce platform was designed to revolutionize the online furniture shopping experience by combining sustainability messaging with cutting-edge visualization technology.",
    targetAudience: "Environmentally conscious consumers aged 28-50 looking for quality, sustainable furniture for their homes and offices",
    designProcess: [
      {
        step: "Market Research & Competitor Analysis",
        description: "Analyzed 15+ furniture e-commerce sites and surveyed 200+ potential customers",
        duration: "2 weeks"
      },
      {
        step: "User Journey Mapping",
        description: "Created detailed customer journey maps from discovery to post-purchase",
        duration: "1 week"
      },
      {
        step: "Design System Creation",
        description: "Established comprehensive design system with sustainability-focused branding",
        duration: "2 weeks"
      },
      {
        step: "Prototyping & Testing",
        description: "Built interactive prototypes and conducted A/B testing on key features",
        duration: "3 weeks"
      }
    ],
    keyFeatures: [
      "360° product visualization with zoom functionality",
      "AR preview to place furniture in your space",
      "Sustainability score for each product",
      "Room planning tools and virtual showroom",
      "Live chat with interior design consultants",
      "Flexible payment options and eco-friendly shipping"
    ],
    projectImages: [
      {
        url: "https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWV8ZW58MHx8fHwxNzU5NzMyNDk0fDA&ixlib=rb-4.1.0&q=85",
        caption: "Digital wireframes and responsive layout planning"
      },
      {
        url: "https://images.unsplash.com/photo-1603975711481-18b7aaca4caa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxkZXNpZ24lMjBwcm9jZXNzfGVufDB8fHx8MTc1OTczMjUwNHww&ixlib=rb-4.1.0&q=85",
        caption: "UI development and component design process"
      },
      {
        url: "https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxkZXNpZ24lMjBwcm9jZXNzfGVufDB8fHx8MTc1OTczMjUwNHww&ixlib=rb-4.1.0&q=85",
        caption: "Design inspiration and sustainability research"
      }
    ],
    testimonial: {
      content: "This website transformed our business. The AR features and sustainability focus resonated perfectly with our customers, leading to our best sales year ever.",
      author: "Michael Chen",
      role: "CEO at EcoFurniture Co.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    }
  },
  {
    id: 3,
    title: "FeelBetter Mental Health App",
    category: "mobile",
    type: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
    description: "Mental wellness application connecting users with therapists and providing mood tracking features. Focuses on accessibility and user privacy.",
    technologies: ["Flutter", "Firebase", "AI/ML", "Health APIs", "Encryption", "HIPAA Compliance"],
    client: "HealthTech Solutions",
    duration: "6 months",
    year: "2024",
    challenges: "Ensuring user privacy while providing personalized mental health insights, maintaining HIPAA compliance, and creating a non-stigmatizing user experience",
    solution: "Implemented end-to-end encryption, local data processing with AI recommendations, anonymous therapy matching, and evidence-based therapeutic tools",
    results: "Helped 10,000+ users improve their mental wellness with 4.8/5 app store rating, 92% user retention rate, and HIPAA certification",
    overview: "FeelBetter was designed as a comprehensive mental health companion that bridges the gap between professional therapy and daily wellness practices. The app prioritizes user privacy and provides accessible mental health resources.",
    targetAudience: "Adults aged 18-55 seeking mental health support, therapy clients, and individuals interested in daily wellness tracking",
    designProcess: [
      {
        step: "Mental Health Research & Expert Consultation",
        description: "Collaborated with licensed therapists and conducted extensive research on mental health UX best practices",
        duration: "3 weeks"
      },
      {
        step: "Privacy & Security Planning",
        description: "Developed comprehensive privacy framework and HIPAA compliance strategy",
        duration: "2 weeks"
      },
      {
        step: "Therapeutic Journey Mapping",
        description: "Created user journey maps for different mental health scenarios and crisis situations",
        duration: "2 weeks"
      },
      {
        step: "Accessibility & Inclusive Design",
        description: "Designed for various mental health conditions with accessibility-first approach",
        duration: "3 weeks"
      }
    ],
    keyFeatures: [
      "Anonymous therapy matching with licensed professionals",
      "Daily mood tracking with AI-powered insights",
      "Crisis support with immediate intervention options",
      "Guided meditation and breathing exercises",
      "Secure journaling with privacy controls",
      "Progress tracking and wellness goal setting"
    ],
    projectImages: [
      {
        url: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
        caption: "Initial research and therapeutic framework wireframes"
      },
      {
        url: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHw0fHxkZXNpZ24lMjBwcm9jZXNzfGVufDB8fHx8MTc1OTczMjUwNHww&ixlib=rb-4.1.0&q=85",
        caption: "User interface sketching and accessibility considerations"
      }
    ],
    testimonial: {
      content: "This app has been a game-changer for our clients. The privacy-first approach and intuitive design make mental health support more accessible than ever.",
      author: "Dr. Emily Rodriguez",
      role: "Clinical Psychologist at HealthTech Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  },
  {
    id: 4,
    title: "Goldmix Recipe Discovery App",
    category: "mobile",
    type: "Food & Recipe Platform",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=300&fit=crop&crop=center",
    description: "Recipe discovery and cooking assistant app with personalized recommendations and step-by-step cooking guidance.",
    technologies: ["React Native", "AI/ML", "Cloud Vision", "Firebase"],
    client: "FoodTech Innovations",
    duration: "5 months",
    year: "2024",
    challenges: "Creating an intuitive cooking experience with smart ingredient recognition",
    solution: "Integrated AI-powered ingredient recognition and voice-guided cooking instructions",
    results: "300% increase in user recipe completion rates and featured in App Store"
  },
  {
    id: 5,
    title: "Corporate Dashboard Analytics",
    category: "dashboard",
    type: "Data Visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    description: "Comprehensive analytics dashboard for corporate performance tracking with real-time data visualization and reporting capabilities.",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    client: "Enterprise Solutions Inc",
    duration: "4 months",
    year: "2024",
    challenges: "Processing large datasets while maintaining responsive user interface",
    solution: "Implemented data virtualization and progressive loading with smart caching",
    results: "50% reduction in decision-making time for executives"
  },
  {
    id: 6,
    title: "Creative Agency Portfolio",
    category: "website",
    type: "Creative Portfolio",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&crop=center",
    description: "Modern portfolio website for a creative agency showcasing their projects with stunning animations and interactive elements.",
    technologies: ["React", "Framer Motion", "GSAP", "Sanity CMS"],
    client: "Creative Studio XYZ",
    duration: "3 months",
    year: "2024",
    challenges: "Balancing visual impact with performance optimization",
    solution: "Created custom animation system with lazy loading and progressive enhancement",
    results: "200% increase in client inquiries and award-winning design recognition"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "Exceptional work! The mobile app design exceeded our expectations with intuitive user flows and beautiful interfaces.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=60&h=60&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO of StartupXYZ",
    content: "Professional, creative, and delivered on time. The website helped us increase conversions by 60%.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Marketing Director",
    content: "Amazing attention to detail and user experience. Highly recommend for any UI/UX project.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  }
];

export const skillsData = [
  {
    category: "Design",
    skills: [
      { name: "UI/UX Design", level: 95 },
      { name: "Prototyping", level: 90 },
      { name: "Figma", level: 95 },
      { name: "Adobe Creative Suite", level: 85 }
    ]
  },
  {
    category: "Development", 
    skills: [
      { name: "React", level: 90 },
      { name: "React Native", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "TypeScript", level: 85 }
    ]
  },
  {
    category: "Strategy",
    skills: [
      { name: "User Research", level: 90 },
      { name: "Information Architecture", level: 88 },
      { name: "Design Systems", level: 92 },
      { name: "Accessibility", level: 85 }
    ]
  }
];