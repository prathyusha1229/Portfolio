// ============================================================
// 🎯  EDIT THIS FILE to personalise your entire portfolio.
//     Every component reads from here — no other file to touch.
// ============================================================

/** Social / contact links */
export const socials = {
  github: "https://github.com/prathyusha1229",
  linkedin: "https://www.linkedin.com/in/sai-prathyusha-p-2a057517b/",
  email: "saiprathyusha010220@gmail.com",
};

/** Resume download link (place your PDF in /public) */
export const resumeUrl = "/Saiprathyusha.pdf";

/** Hero section */
export const hero = {
  greeting: "Hi, I'm",
  name: "Sai Prathyusha",
  roles: [
    "Full-Stack Developer",
    "AI/ML Specialist",
    "React Developer",
    "Problem Solver",
  ], 
  tagline:
    "I build scalable, high-performance applications that drive results.",
};

/** About section */
export const about = {
  bio: [
    "I am a results-driven Developer with 2+ years of experience specializing in building robust web architectures and integrating intelligent AI solutions. My approach combines clean code principles with a deep understanding of user psychology.",
    "I thrive in fast-paced environments where I can leverage my expertise in Python, React, and Cloud infrastructure to build products that are both technically sophisticated and commercially viable.",
  ],
  /** Replace with your actual image in src/assets/ */
  image: "C:/Users/prath/portfolio/src/assets/pic",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "15+" },
   
  ],
};

/** Skills grouped by category */
export interface Skill {
  name: string;
  icon: string; // react-icons identifier
  level: number; // 0-100 proficiency
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "SiReact", level: 95 },
      { name: "TypeScript", icon: "SiTypescript", level: 90 },
      { name: "Next.js", icon: "SiNextdotjs", level: 85 },
      { name: "Tailwind CSS", icon: "SiTailwindcss", level: 92 },
      { name: "JavaScript", icon: "SiJavascript", level: 95 },
      { name: "HTML5", icon: "SiHtml5", level: 98 },
      { name: "CSS3", icon: "SiCss", level: 90 },
     
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: "SiPython", level: 85 },
      { name: "Node.js", icon: "SiNodedotjs", level: 88 },
      { name: "Java", icon: "java", level: 75 },
      { name: "Flask", icon: "flask", level: 85 },
      { name: "Django", icon: "django", level: 85 },
      
      { name: "SpringBoot", icon: "springboot", level: 82 },
      { name: "REST APIs", icon: "restapi", level: 90 },
    ],
  },
  {
    title: "Tools, Testing & DevOps",
    skills: [
      { name: "Git", icon: "SiGit", level: 92 },
      { name: "Maven", icon: "maven", level: 85 },
      { name: "Jenkins", icon: "jenkins", level: 82 },
      //{ name: "Docker", icon: "SiDocker", level: 78 },
      //{ name: "AWS", icon: "FaAws", level: 70 },
      { name: "GitHub Actions", icon: "SiGithubactions", level: 75 },
      { name: "VS Code", icon: "SiVscodium", level: 95 },
       { name: "IntelliJ IDEA", icon: "intellij", level: 80 },
      { name: "Jupyter Notebook", icon: "jupyter", level: 90 },
      
      { name: "Jest", icon: "jest", level: 80 },
      { name: "PyTest", icon: "pytest", level: 80 },
       
    ],
  },
  {
    title: "Infrastucture, Monioring & Cloud",
    skills: [
      
      { name: "Docker", icon: "SiDocker", level: 78 },
      { name: "AWS", icon: "FaAws", level: 85 },
     
      
      { name: "Kubernetes", icon: "kubernetes", level: 80 },
      { name: "Datadog", icon: "datadog", level: 80 },
       
    ],
  },
   {
    title: "Databases & Caching",
    skills: [
    
      
      { name: "PostgreSQL", icon: "SiPostgresql", level: 90 },
      { name: "MySQL", icon: "mysql", level: 80 },
      { name: "Redis", icon: "redis", level: 80 },
       
    ],
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
    
      
      { name: "scikit-learn", icon: "scikitlearn", level: 80 },
      { name: "TensorFlow", icon: "tensorflow", level: 75 },
      { name: "PyTorch", icon: "pytorch", level: 85 },
      { name: "Pandas", icon: "pandas", level: 80 },
      { name: "NumPy", icon: "numpy", level: 85 },
       
    ],
  },
  {
    title: "Certifications",
    skills: [
    
      
      { name: "Microsoft Azure Administrator (AZ-104)", icon: "azure", level: 80 },
      { name: "Java SE 8 Programmer (1Z0-808)", icon: "java", level: 70 },
    ],
  },
  
];

/** Projects */

export interface Project {
  title: string;
  description: string;
  //image: string;
  tags: string[];
  //github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "IEEE Research Paper",
    description:
      "Nursery automation and monitoring in IoT using ThingView Free",
    //image: "https://via.placeholder.com/600x400?text=E-Commerce+Platform",
    tags: ["Python","Arduino"],
    
    
    live: "https://ieeexplore.ieee.org/document/9532906/keywords#keywords",
    featured: true,
  },
  {
    title: "Billboard Music Store Database",
    description:
      "Developed the database by utilizing normalization, triggers, and optimizations to enhance song management efficiency, showcasing practical database principles in a real-world application.",
    //image: "https://via.placeholder.com/600x400?text=AI+Chat+App",
    tags: ["PostgreSQL","Python","Flask","React"],
    //live: "https://your-ai-chat.vercel.app",

  },
  {
    title: "PixelPred ",
    description:
      "Achieved 89% test accuracy on the MNIST dataset by performing comprehensive exploratory data analysis and building a hybrid classification model combining Logistic Regression and Random Forest for handwritten digit classification.",
    //image: "https://via.placeholder.com/600x400?text=Task+Dashboard",
    tags: ["Python", "NumPy", "Pandas", "Matplotlib","Scikit-learn"],
    //live: "https://your-task-app.vercel.app",
    //featured: true,
  },
  {
    title: "Superstore Campaign",
    description:
      "Developed a predictive model using gradient boosting and data cleaning techniques on customer records, improving Superstore’s marketing strategy and increasing campaign response rate from 5% to 15% using customer behavior insights. ",
    //image: "https://via.placeholder.com/600x400?text=Weather+App",
    tags: ["Python", "HTML", "CSS ","Flask","Jupyter Notebook","React"],
    //live: "https://your-weather.vercel.app",
  },
  {
    title: "EventPulse",
    description:
      "Built FastAPI event ingestion service with Pydantic validation, JSONL raw logging, admin querying, cursor pagination, tests, and strict lint/type checks.",
    //: "https://via.placeholder.com/600x400?text=API+Boilerplate",
    tags: ["Python", "FastAPI", "Uvicorn", "JSONL", "PyTest","Mypy","Ruff","React"],
    
    //github: "https://github.com/yourusername/api-boilerplate",
  },
  {
    title: "Shopieasy E-Commerce Platform",
    description:
      "Built a full-stack e-commerce platform with admin/product management, secure authentication, cart operations, and guided checkout.",
    //: "https://via.placeholder.com/600x400?text=API+Boilerplate",
    tags: ["Java", "Spring MVC", "Spring Security", "Hibernate", "JSP","Bootstrap","H2 Database","Maven","Apache Tomcat"],
    
    //github: "https://github.com/yourusername/api-boilerplate",
  },
  
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

/** Experience / timeline */
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  
  {
    company: "AdventHealth",
    role: "Software Developer",
    period: "May 2024 – Present",
    description: [
      "Built full-stack features for a high-traffic personalization and analytics platform using Java, Spring Boot, Python, Django, React, and Tailwind. Focused on backend performance, reliable event processing, and responsive user experiences for large-scale usage.",
      "Highlights: Supported 10K+ peak concurrent users reliably, reduced 95% latency from 420 ms to 155 ms under load, cut API calls per session by 32% and improved page load time from 2.8s to 1.9s.",
    ],
    tech: ["Java","Python", "Spring Boot","Django", "React", "Tailwind CSS","Redis","AWS Lambda","GitHub Actions","Kubernetes","Docker","CI/CD","Jest","JUnit"],
  },
  {
    company: "Labster",
    role: "Software Developer",
    period: "Sept 2023 – April 2024",
    description: [
      "Improved the performance and scalability of Python services, React/Next.js applications, and cloud storage architecture for high-traffic workloads. Focused on faster frontend delivery, more efficient backend processing, and stronger engineering quality.",
      "Highlights: Reduced initial load time by 40%, increased funnel engagement by 59%, lowered storage costs by 20%, and reduced recurring regressions by 40% through expanded automated testing.",
    ],
    tech: ["Python", "React", "Next.js", "AWS S3", "Jest"],
  },
];

/** Navigation links */
export const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" },
];
