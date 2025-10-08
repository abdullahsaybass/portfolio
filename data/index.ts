import { links } from "@/config";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
] as const;


export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I&apos;m very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;
export const projectsData = [
  {
    id: 1,
    header: {
      title: "Collaborative Design at Your Fingertips",
      desc: "Figma Clone provides a seamless interface for designers to collaborate, prototype, and bring ideas to life effortlessly.",
    },
    sidebar: {
      concept: "Design Collaboration Tool",
      role: "UI/UX Design",
      designer: "Your Name",
    },
    images: [
      "/images/figma1.png",
      "/images/figma2.png",
      "/images/figma3.png",
      "/images/figma4.png",
      "/images/figma5.png",
    ],
    features: [
      {
        title: "Real-Time Collaboration",
        description: "Collaborate with your team in real-time and instantly see updates as everyone works together.",
        tags: ["Collaboration", "Prototyping"],
        badge: "Assist",
      },
      {
        title: "Intuitive Design Tools",
        description: "Simplify even complex designs with user-friendly tools that speed up your workflow.",
        tags: ["UI/UX", "Efficiency"],
        badge: "Guide",
      },
      {
        title: "Scalable Workspace",
        description: "Easily organize multiple projects, components, and libraries in one centralized workspace.",
        tags: ["Growth", "Scalability"],
        badge: "Resolve",
        hasButton: true,
      },
    ],
  },
  {
    id: 2,
    header: {
      title: "Connecting Teams, Anytime, Anywhere",
      desc: "Voom Call Clone delivers a modern video conferencing experience for smooth meetings and collaboration.",
    },
    sidebar: {
      concept: "Video Conferencing App",
      role: "UI/UX & Frontend",
      designer: "Your Name",
    },
    images: [
      "/images/voom1.png",
      "/images/voom2.png",
      "/images/voom3.png",
      "/images/voom4.png",
      "/images/voom5.png",
    ],
    features: [
      {
        title: "HD Video & Audio",
        description: "Enjoy crisp, high-definition video and audio calls that feel as if everyone is in the same room.",
        tags: ["Video", "Audio"],
        badge: "Assist",
      },
      {
        title: "Screen Sharing & Recording",
        description: "Present ideas, share your screen, and record meetings easily for later review or collaboration.",
        tags: ["Presentation", "Recording"],
        badge: "Guide",
      },
      {
        title: "Cross-Platform Support",
        description: "Access your meetings seamlessly across web, desktop, and mobile devices without interruption.",
        tags: ["Accessibility", "Flexibility"],
        badge: "Resolve",
        hasButton: true,
      },
    ],
  },
  {
    id: 3,
    header: {
      title: "Smarter Workflows with AI Assistance",
      desc: "Gemini AI Clone boosts productivity with AI-powered insights and task automation.",
    },
    sidebar: {
      concept: "AI Productivity Tool",
      role: "UI/UX & AI Integration",
      designer: "Your Name",
    },
    images: [
      "/images/gemini1.png",
      "/images/gemini2.png",
      "/images/gemini3.png",
      "/images/gemini4.png",
      "/images/gemini5.png",
    ],
    features: [
      {
        title: "AI-Powered Suggestions",
        description: "Get actionable insights and intelligent recommendations to streamline your daily workflow.",
        tags: ["AI", "Productivity"],
        badge: "Assist",
      },
      {
        title: "Task Automation",
        description: "Automate repetitive and time-consuming tasks so your team can focus on high-value work.",
        tags: ["Efficiency", "Automation"],
        badge: "Guide",
      },
      {
        title: "Scalable Analytics",
        description: "Monitor progress and performance with AI-driven analytics and detailed visual reports.",
        tags: ["Analytics", "Growth"],
        badge: "Resolve",
        hasButton: true,
      },
    ],
  },
  {
    id: 4,
    header: {
      title: "Delicious Meals Delivered Fast",
      desc: "Food App lets users order meals online and get fast delivery with a smooth interface.",
    },
    sidebar: {
      concept: "Food Ordering App",
      role: "UI/UX & Mobile Design",
      designer: "Your Name",
    },
    images: [
      "/images/food1.png",
      "/images/food2.png",
      "/images/food3.png",
      "/images/food4.png",
      "/images/food5.png",
    ],
    features: [
      {
        title: "Easy Menu Navigation",
        description: "Quickly browse restaurants and menus with a smooth interface that makes ordering effortless.",
        tags: ["Navigation", "UI/UX"],
        badge: "Assist",
      },
      {
        title: "Seamless Ordering",
        description: "Add meals to the cart and checkout securely in just a few taps without any hassle.",
        tags: ["Ordering", "Payment"],
        badge: "Guide",
      },
      {
        title: "Real-Time Delivery Tracking",
        description: "Track your order live from preparation to doorstep for a transparent delivery experience.",
        tags: ["Tracking", "Delivery"],
        badge: "Resolve",
        hasButton: true,
      },
    ],
  },
  {
    id: 5,
    header: {
      title: "Smart Hiring with AI Resume Analysis",
      desc: "AI Resume Analyzer helps recruiters quickly evaluate and rank candidates using intelligent algorithms.",
    },
    sidebar: {
      concept: "AI Recruitment Tool",
      role: "UI/UX & AI Integration",
      designer: "Your Name",
    },
    images: [
      "/images/resume1.png",
      "/images/resume2.png",
      "/images/resume3.png",
      "/images/resume4.png",
      "/images/resume5.png",
    ],
    features: [
      {
        title: "Automated Resume Scoring",
        description: "Quickly score candidates based on skills, experience, and relevance to job requirements.",
        tags: ["AI", "Scoring"],
        badge: "Assist",
      },
      {
        title: "Candidate Comparison",
        description: "Easily compare multiple applicants side-by-side to make informed hiring decisions.",
        tags: ["Comparison", "Insights"],
        badge: "Guide",
      },
      {
        title: "Faster Hiring Decisions",
        description: "Leverage AI insights to streamline recruitment and make faster, data-driven choices.",
        tags: ["Efficiency", "Hiring"],
        badge: "Resolve",
        hasButton: true,
      },
    ],
  },
  {
    id: 6,
    header: {
      title: "Fashion E-commerce Made Effortless",
      desc: "Fashion E-commerce platform provides users a smooth and elegant shopping experience.",
    },
    sidebar: {
      concept: "Online Fashion Store",
      role: "UI/UX & Web Design",
      designer: "Your Name",
    },
    images: [
      "/images/fashion1.png",
      "/images/fashion2.png",
      "/images/fashion3.png",
      "/images/fashion4.png",
      "/images/fashion5.png",
    ],
    features: [
      {
        title: "Elegant Product Showcase",
        description: "Display products in a clean, visually appealing layout that attracts shoppers effortlessly.",
        tags: ["Design", "E-commerce"],
        badge: "Assist",
      },
      {
        title: "Smooth Checkout Process",
        description: "Enable users to pay quickly and securely with minimal steps and friction.",
        tags: ["Checkout", "Payment"],
        badge: "Guide",
      },
      {
        title: "Personalized Recommendations",
        description: "Offer AI-based product suggestions tailored to user preferences and browsing behavior.",
        tags: ["AI", "Personalization"],
        badge: "Resolve",
        hasButton: true,
      },
    ],
  },
  {
    id: 7,
    header: {
      title: "Simplifying Money Transfers Everywhere",
      desc: "IME Pay (Flight Booking System) makes transactions simple and secure through mobile wallets.",
    },
    sidebar: {
      concept: "Flight Booking System",
      role: "UI/UX Design",
      designer: "Sagar Shrestha",
    },
    images: [
      "/images/project1.png",
      "/images/project2.png",
      "/images/project3.png",
      "/images/project4.png",
      "/images/project5.png",
    ],
    features: [
      {
        title: "Hassle-Free Wallet Management",
        description: "Transfer and manage funds easily with a secure and intuitive mobile wallet interface.",
        tags: ["Finance", "Wallet"],
        badge: "Assist",
      },
      {
        title: "Flight Booking Integration",
        description: "Book flights and pay directly through your wallet with a seamless experience.",
        tags: ["Booking", "Payment"],
        badge: "Guide",
      },
      {
        title: "Secure Transactions",
        description: "All transfers and payments are protected, ensuring reliable and safe transactions every time.",
        tags: ["Security", "Reliability"],
        badge: "Resolve",
        hasButton: true,
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "FigPro - Collaborative Design Tool",
    des: "A collaborative design tool with real-time collaboration, vector editing, and a responsive UI.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://clone-figmaa.netlify.app",
    sourceCode: "https://github.com/sanidhyy/figma-clone",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://clone-yoom.netlify.app",
    sourceCode: "https://github.com/sanidhyy/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://ai-imaginify.netlify.app",
    sourceCode: "https://github.com/sanidhyy/imaginify",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://app-iphone.netlify.app",
    sourceCode: "https://github.com/sanidhyy/apple-clone",
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/sanidhyy",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sanidhyy",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
