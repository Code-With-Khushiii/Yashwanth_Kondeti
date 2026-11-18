import { useEffect, useState } from 'react';
import { ChevronDown, ExternalLink, Lightbulb, Linkedin, Mail, Menu, Phone, Rocket, Target, TrendingUp, Users, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const summary = "Data Analyst with 5+ years of experience in SQL analytics, data extraction, transformation, validation, business intelligence, and database management. Skilled in MySQL, IBM DB2, and PostgreSQL, with hands-on project experience in Python, machine learning, ETL, and Hadoop. I turn complex datasets into reliable reporting and actionable insights, and am building deeper expertise in data engineering and big data processing.";

  const experience = [
    {
      company: "Inture Software",
      role: "Data Analyst",
      location: "Hyderabad, India",
      dates: "Nov 2020 - Dec 2025",
      highlights: [
        "Executed complex MySQL and IBM DB2 queries to extract, join, filter, and aggregate business data for operational reporting and decision-making.",
        "Developed and maintained BI reports and dashboards to track KPIs, business trends, and operational metrics.",
        "Built SQL data extraction, transformation, and cleansing workflows; standardized formats and resolved inconsistencies across relational databases.",
        "Improved data quality through validation, reconciliation, duplicate detection, and accuracy checks, supporting reliable downstream reporting.",
        "Refined recurring SQL reports and collaborated with business and development teams to translate requirements into analysis and database enhancements."
      ]
    }
  ];

  const projects = [
    {
      title: "Multi-Agent Educational Orchestrator – CS 7280 AI Tutor",
      subtitle: "Python, LangGraph, ChromaDB, Redis",
      category: "AI & Machine Learning",
      introduction: "Engineered a multi-agent AI tutoring system with retrieval, hint generation, and answer verification workflows for a course serving more than 250 students.",
      problem: "Educational AI assistants need reliable retrieval and safeguards against unsupported answers.",
      objective: "Build an AI tutor that retrieves course material, guides students with hints, verifies answers, and escalates unresolved questions.",
      methodology: [
        "Implemented retrieval, hint generation, and answer verification as coordinated LangGraph workflows.",
        "Integrated SelfCheckGPT hallucination detection (PR-AUC 0.94) and human escalation for unresolved queries.",
        "Compared retrieval strategies, achieving top-5 scores of 0.98 for standard RAG and 0.93 for HyDE."
      ],
      results: [
        "Delivered an AI tutoring workflow designed for a course serving 250+ students.",
        "Measured hallucination detection at PR-AUC 0.94 and evaluated retrieval quality across approaches."
      ],
      conclusion: "The project demonstrates orchestration of retrieval-augmented AI agents with measurable verification and retrieval performance.",
      links: {
        demo: "",
        github: ""
      }
    },
    {
      title: "Event-Driven Payment Gateway",
      subtitle: "FastAPI, Kafka, Redis, PostgreSQL, Docker",
      category: "Data Engineering",
      introduction: "Designed an event-driven payment service with idempotent APIs, asynchronous processing, and resilient webhook delivery.",
      problem: "Payment systems must handle duplicate requests, asynchronous work, and transient delivery failures safely.",
      objective: "Build a reliable API and Kafka processing pipeline with transaction handling and retry mechanisms.",
      methodology: [
        "Built REST APIs with Redis idempotency keys, API-key authentication, and PostgreSQL transactions.",
        "Implemented Kafka asynchronous processing and webhook retries with exponential backoff and dead-letter handling.",
        "Validated flows with pytest-asyncio and Testcontainers integration tests; added Ruff, Black, and Mypy CI checks."
      ],
      results: [
        "Added duplicate request protection and clear HTTP 202/409 response handling.",
        "Created a tested asynchronous payment processing and webhook delivery workflow."
      ],
      conclusion: "The service combines API design, streaming, persistence, and fault-tolerant event processing.",
      links: null
    },
    {
      title: "Real-Time Recommender System",
      subtitle: "Apache Kafka, Apache Storm, Cassandra",
      category: "Streaming Data",
      introduction: "Engineered a distributed recommendation pipeline that processes user interaction events in real time.",
      problem: "Recommendation services need to process event streams with low latency and retain user activity for retrieval.",
      objective: "Connect event ingestion, stream processing, and distributed storage to support personalized recommendations.",
      methodology: [
        "Used Apache Kafka to ingest real-time user interaction events.",
        "Processed event streams with Apache Storm to generate recommendation outputs.",
        "Integrated Cassandra for distributed storage and retrieval of user activity data."
      ],
      results: [
        "Established a low-latency pipeline for personalized recommendations.",
        "Connected distributed event processing with scalable user activity storage."
      ],
      conclusion: "The project demonstrates streaming data processing and distributed storage for real-time personalization.",
      links: null
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Programming & Analysis',
      skills: ['Python', 'SQL', 'Java', 'C', 'C++', 'Pandas', 'NumPy']
    },
    {
      icon: TrendingUp,
      title: 'BI & Visualization',
      skills: ['Matplotlib', 'Seaborn', 'EDA', 'Data Visualization', 'BI Reporting', 'KPI Analysis']
    },
    {
      icon: Users,
      title: 'Machine Learning & AI',
      skills: ['Scikit-learn', 'Logistic Regression', 'Classification', 'Predictive Modeling', 'Feature Scaling', 'Model Evaluation']
    },
    {
      icon: Lightbulb,
      title: 'Databases & SQL',
      skills: ['MySQL', 'PostgreSQL', 'IBM DB2', 'CTEs', 'Window Functions', 'Query Optimization', 'SQL Joins']
    },
    {
      icon: Rocket,
      title: 'Data Engineering & Big Data',
      skills: ['ETL Concepts', 'Data Processing', 'Hadoop', 'HDFS', 'YARN', 'MapReduce', 'Docker']
    },
    {
      icon: Target,
      title: 'Tools & Technologies',
      skills: ['Git', 'Eclipse', 'DB2 Studio', 'pgAdmin', 'REST APIs', 'Spring MVC']
    }
  ];

  const education = [
    {
      school: "ECE Paris",
      degree: "Master of Science (MSc), Data Management & Artificial Intelligence",
      location: "Paris, France",
      dates: "Oct 2026 - Oct 2027",
      details: "Graduate study focused on data management and artificial intelligence."
    },
    {
      school: "Glocal University",
      degree: "Bachelor of Computer Applications (BCA)",
      location: "India",
      dates: "2020",
      details: "Undergraduate degree in computer applications."
    }
  ];

  const papers: Array<{ title: string; publication: string; year: string; link: string }> = [];

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="relative flex items-center justify-center">
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id ? "text-black font-medium" : "text-brown hover:text-black"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button className="absolute right-0 md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <div role="img" aria-label="YK profile initials" className="w-36 h-36 rounded-full mx-auto mb-6 flex items-center justify-center bg-black text-white font-display text-4xl border-4 border-brown/30 shadow-lg">YK</div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              YASHWANTH KONDETI
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              DATA ANALYST | SQL & PYTHON | DATA ENGINEERING & MACHINE LEARNING
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              FRANCE
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">{summary}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => scrollToSection('experience')} className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                VIEW EXPERIENCE
              </button>
              <button onClick={() => scrollToSection('contact')} className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300">
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'EXPERIENCE', value: '5+', detail: 'Years in Data Analytics' },
              { label: 'CORE DATABASES', value: '3', detail: 'MySQL · IBM DB2 · PostgreSQL' },
              { label: 'FOCUS', value: 'ETL', detail: 'Data Engineering & Big Data' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors" onClick={() => scrollToSection('summary')} />
          </div>
        </div>
      </section>

      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              SQL analytics, data quality, and business intelligence experience, supported by hands-on machine learning and data engineering projects.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Target, title: 'SQL Analytics', detail: 'Query, join, aggregate, and optimize relational data to create useful operational reporting and business insights.' },
              { icon: Rocket, title: 'Data Quality', detail: 'Prepare trustworthy datasets with validation, reconciliation, cleansing, duplicate detection, and consistent reporting workflows.' },
              { icon: Lightbulb, title: 'Data Engineering', detail: 'Apply Python, ETL concepts, Hadoop, and streaming technologies in projects focused on scalable data processing.' }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Five years of SQL analytics, reporting, data transformation, and database work at Inture Software.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">{role.location} | {role.dates}</div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Applied projects in AI tutoring, event-driven payments, real-time recommendations, and streaming product recommendations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1" onClick={() => setSelectedProject(index)}>
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">{project.category}</span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">{project.title}</h3>
                <p className="text-sm text-brown mb-4 font-light">{project.subtitle}</p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">{project.introduction}</p>
                {project.links && (project.links.demo || project.links.github) && (
                  <div className="flex gap-4 mt-4" onClick={e => e.stopPropagation()}>
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-black font-medium hover:text-brown transition-colors">
                        <ExternalLink className="w-3 h-3" /> Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-black font-medium hover:text-brown transition-colors">
                        <ExternalLink className="w-3 h-3" /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">{projects[selectedProject].title}</h2>
              <button onClick={() => setSelectedProject(null)} className="text-brown hover:text-black transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">{projects[selectedProject].category}</span>
                <p className="text-brown font-light mt-2">{projects[selectedProject].subtitle}</p>
                {projects[selectedProject].links && (projects[selectedProject].links.demo || projects[selectedProject].links.github) && (
                  <div className="flex gap-4 mt-3">
                    {projects[selectedProject].links.demo && (
                      <a href={projects[selectedProject].links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-black font-medium hover:text-brown transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    {projects[selectedProject].links.github && (
                      <a href={projects[selectedProject].links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-black font-medium hover:text-brown transition-colors">
                        <ExternalLink className="w-4 h-4" /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
              {[
                ['INTRODUCTION', projects[selectedProject].introduction],
                ['PROBLEM STATEMENT', projects[selectedProject].problem],
                ['OBJECTIVE', projects[selectedProject].objective],
                ['CONCLUSION', projects[selectedProject].conclusion]
              ].map(([title, body]) => (
                <div key={title}>
                  <h3 className="text-lg font-display text-black mb-3 tracking-wide">{title}</h3>
                  <p className="text-brown leading-relaxed font-light">{body}</p>
                </div>
              ))}
              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Programming, SQL, databases, visualization, machine learning, and data engineering capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">{edu.location} | {edu.dates}</div>
                </div>
                <p className="text-brown leading-relaxed font-light">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let’s discuss data analytics, SQL, data engineering, machine learning, or business intelligence opportunities.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a href="tel:+33752910516" className="text-white/80 font-light hover:text-white transition-colors">+33 7 52 91 05 16</a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a href="https://www.linkedin.com/in/yashwanth-kondeti-72b578445/" target="_blank" rel="noopener noreferrer" className="text-white/80 font-light hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a href="mailto:yashwanthkondeti.connect@gmail.com" className="text-white/80 font-light hover:text-white transition-colors">yashwanthkondeti.connect@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2026 Yashwanth Kondeti | Data Analyst · SQL & Python.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
