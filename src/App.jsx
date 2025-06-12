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
import DSLR from './assets/dslr.png'
import two from './assets/two.png'
import three from './assets/three.png'




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
                href="https://wa.me/6364059064?text=Hi%20ProjFuel%2C%20I'm%20interested%20in%20your%20services%20like%20Digital%20Marketing%2C%20Web%20%26%20App%20Development%2C%20or%20Social%20Media%20Management.%20Please%20share%20more%20details." 
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
            <span>20K+</span>
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
title: "Digital Marketing",
description: "Boost your online presence and drive business growth with data-driven digital marketing strategies, powered by the latest in AI and automation.",
features: [
  "SEO & Content Marketing",
  "Social Media Management",
  "AI-Powered Ad Campaigns",
  "Performance Analytics & Reporting"
]

    },
    {
icon: cloudIcon,
title: "Web & App Development",
description: "Design and develop high-performance websites and mobile apps tailored to your brand, delivering seamless experiences and driving business growth.",
features: [
  "Responsive Web Design",
  "Mobile App Development",
  "E-commerce Solutions",
  "Custom Web Applications"
]

    },
    {
icon: developmentIcon,
title: "Social Media Management",
description: "Effectively manage your brand's presence across all major social platforms with tailored strategies, engaging content, and data-driven insights.",
features: [
  "Content Creation & Scheduling",
  "Platform Strategy & Optimization",
  "Community Engagement",
  "Analytics & Performance Tracking"
]


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
              end={20} 
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

function Projects() {
  const dummyProjects = [
    {
      title: 'Book My DSLR',
      image: DSLR,
      description: 'A professional website for renting high-quality camera equipment, designed to provide photographers and videographers with easy access to premium gear.',
      link:'www.bookmydslr.com'
    },
    {
      title: 'Annapoornaa Interio',
      image: two,
      description: 'A sophisticated website for a leading interior design and architecture firm, showcasing innovative design solutions and exceptional craftsmanship.',
      link:'www.annapoornaainterio.com'

    },
    {
      title: 'Suyoginfra Solutions',
      image: three,
      description: 'A comprehensive website for a well-established infrastructure company, highlighting their expertise in delivering robust and sustainable solutions.',
      link:'www.suyoginfrasolutions.com'

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
            <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" className="project-visit-btn">Visit</a>
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
          <p>Transforming ideas into digital excellence</p>
        </div>
        <div className="footer-links">
          <h3>Services</h3>
          <ul>
            <li><a href="#ai">Digital Marketing</a></li>
            <li><a href="#web">Web & App Development</a></li>
            <li><a href="#app">Social Media Management</a></li>
            <li><a href="#guidance">Project Guidance</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <a href="https://maps.app.goo.gl/wdmqeNjpJRyqppRd8" target="_blank" rel="noopener noreferrer">Bangalore, India</a>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:projfuel@gmail.com">projfuel@gmail.com</a>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <a href="https://instagram.com/projfuel" target="_blank" rel="noopener noreferrer">@projfuel</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ProjFuel. All rights reserved.</p>
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
