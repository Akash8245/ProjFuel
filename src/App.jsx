import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Import images with explicit dimensions
import logo from './assets/logo.jpeg';
import heroTech from './assets/hero-bg.jpg';
import aiIcon from './assets/ai-icon.svg';
import cloudIcon from './assets/cloud-icon.svg';
import securityIcon from './assets/security-icon.svg';
import consultingIcon from './assets/consulting-icon.svg';
import developmentIcon from './assets/development-icon.svg';
import supportIcon from './assets/support-icon.svg';
import teamImage from './assets/team.jpg';
import officeImage from './assets/office.jpg';
import techImage from './assets/tech.jpg';
import aiTechImage from './assets/ai-tech.jpg';
import cloudTechImage from './assets/cloud-tech.jpg';
import devTechImage from './assets/dev-tech.jpg';
import proj1 from './assets/proj1.png';
import proj2 from './assets/proj2.png';
import proj3 from './assets/proj3.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logo} alt="ProjFuel" className="navbar-logo" width="54" height="54" />
          <span className="navbar-title">ProjFuel</span>
        </div>
        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#footer-contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Preload hero image
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = heroTech;
  }, []);

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        style={{ opacity }}
      >
        <div className="hero-grid">
          <div className="hero-image">
            <div className="image-stack">
              <img 
                src={heroTech} 
                alt="Modern Technology" 
                className="main-image"
                width="800"
                height="600"
                loading="eager"
              />
              <div className="floating-card card-1">
                <img 
                  src={aiIcon} 
                  alt="AI" 
                  className="card-icon"
                  width="40"
                  height="40"
                  loading="lazy"
                />
                <span>AI Solutions</span>
              </div>
              <div className="floating-card card-2">
                <img 
                  src={developmentIcon} 
                  alt="Development" 
                  className="card-icon"
                  width="40"
                  height="40"
                  loading="lazy"
                />
                <span>App Development</span>
              </div>
              <div className="floating-card card-3">
                <img 
                  src={consultingIcon} 
                  alt="Consulting" 
                  className="card-icon"
                  width="40"
                  height="40"
                  loading="lazy"
                />
                <span>Project Guidance</span>
              </div>
            </div>
          </div>
          <div className="hero-text">
            <h1>
              Your Trusted IT Solutions Partner
            </h1>
            <p>
              We are a full-service IT solutions agency specializing in AI, Web & App Development, 
              and Project Guidance. From concept to deployment, we transform your ideas into 
              powerful digital solutions that drive business growth.
            </p>
            <div className="hero-cta">
              <a 
                href="https://instagram.com/projfuel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-btn"
              >
                Get Started
              </a>
              <a 
                href="#services"
                className="cta-btn secondary"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
        <div 
          className="hero-stats"
          ref={ref}
        >
          <div className="stat">
            <span>10+</span>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <span>15K+</span>
            <p>Revenue Generated</p>
          </div>
          <div className="stat">
            <span>98%</span>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// --- Testimonials Section ---
function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-list">
        {/* Replace these with real Google reviews! */}
        <div className="testimonial-card">
          <p>"Has a Project deadline ProjFuel completed in juts a few hours and delivered !"</p>
          <span>- Gautham D.</span>
        </div>
        <div className="testimonial-card">
          <p>"Professional design and good response form the team ! They did changed till i was satisfied."</p>
          <span>- Priya S.</span>
        </div>
        <div className="testimonial-card">
          <p>"A really good and quick response from ProjFuel and are always ready to make chnages even after project submition "</p>
          <span>- Ankith K.</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: aiIcon,
      title: "AI & Automation",
      description: "Leverage the power of AI agents and agentic AI to automate complex tasks, enhance decision-making, and drive innovation in your business processes.",
      features: ["AI Agents Development", "Process Automation", "Intelligent Decision Systems", "Custom AI Solutions"]
    },
    {
      icon: cloudIcon,
      title: "Web Development",
      description: "Create stunning, high-performance websites and e-commerce platforms that drive conversions and deliver exceptional user experiences.",
      features: ["E-commerce Development", "Landing Pages", "Custom Websites", "Web Applications"]
    },
    {
      icon: developmentIcon,
      title: "App Development",
      description: "Build powerful, scalable mobile and desktop applications that meet your specific business needs and user requirements.",
      features: ["Mobile Apps", "Desktop Applications", "Cross-platform Solutions", "Custom Software"]
    },
    {
      icon: consultingIcon,
      title: "Project Guidance",
      description: "Expert guidance and mentorship for students working on academic and professional projects, helping them achieve excellence.",
      features: ["Academic Projects", "Technical Mentorship", "Code Review", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="services" ref={ref}>
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={service.icon} alt={service.title} className="service-icon" width="64" height="64" loading="lazy" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="achievements" ref={ref}>
      <h2>Our Impact</h2>
      <div className="achievements-list">
        <motion.div
          className="achievement"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h3>
            <CountUp 
              end={10} 
              duration={2.5} 
              suffix="+" 
              enableScrollSpy
              scrollSpyOnce
              scrollSpyDelay={200}
            />
          </h3>
          <p>Projects Completed</p>
        </motion.div>
        <motion.div
          className="achievement"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>
            <CountUp 
              end={15} 
              duration={2.5} 
              suffix="K+" 
              enableScrollSpy
              scrollSpyOnce
              scrollSpyDelay={200}
            />
          </h3>
          <p>Revenue Generated</p>
        </motion.div>
        <motion.div
          className="achievement"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>
            <CountUp 
              end={98} 
              duration={2.5} 
              suffix="%" 
              enableScrollSpy
              scrollSpyOnce
              scrollSpyDelay={200}
            />
          </h3>
          <p>Client Satisfaction Rate</p>
        </motion.div>
      </div>
    </section>
  );
}

// --- Projects Section ---
function Projects() {
  const dummyProjects = [
    {
      title: 'DocConnect',
      image: proj1,
      description: 'A MERN Stack app Built to connect doctors and patients with feature like video calling, appointment booking, and more.'
    },
    {
      title: 'Stock Market APP',
      image: proj2,
      description: 'A stock market web app built with Java and JSP, Has features like real time stock price, buy and sell stocks, and more.'
    },
    {
      title: 'MediCrae',
      image: proj3,
      description: 'A E-commerce app built with Java and HTML,CSS, Has features like product listing, cart, checkout, and more.'
    },
  ];
  return (
    <section id="projects" className="projects">
      <h2>Our Projects</h2>
      <div className="projects-list">
        {dummyProjects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <img src={proj.image} alt={proj.title} className="project-image" width="320" height="200" loading="lazy" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo-container">
            <img src={logo} alt="ProjFuel" className="footer-logo" />
            <span className="footer-title">ProjFuel</span>
          </div>
          <p>
            Leading the digital transformation journey for enterprises worldwide with 
            innovative IT solutions and cutting-edge technology.
          </p>
        </div>
        <div className="footer-links">
          <h3>Services</h3>
          <ul>
            <li><a href="#ai">AI & Automation</a></li>
            <li><a href="#web">Web Development</a></li>
            <li><a href="#app">App Development</a></li>
            <li><a href="#guidance">Project Guidance</a></li>
          </ul>
        </div>
        <div className="footer-contact" id="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159998 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>Bangalore, India</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:projfuel@gmail.com">projfuel@gmail.com</a>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="https://instagram.com/projfuel" target="_blank" rel="noopener noreferrer">@projfuel</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 ProjFuel. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Testimonials />
      <Services />
      <Achievements />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
