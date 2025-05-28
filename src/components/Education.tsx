
import { BookOpen, Award, GraduationCap, CheckCircle, ExternalLink } from "lucide-react";
import { useState } from 'react';

const Education = () => {
  // State to manage the visibility of all courses
  const [showAllCourses, setShowAllCourses] = useState(false);
  const coursesToShow = 6;  // Number of courses to show initially
  
  
  const formalEducation = [
    {
      degree: "M.S. in Electrical Engineering",
      institution: " Beijing Jiaotong University's Institute of Renewable Energy",
      institutionUrl: "https://en.bjtu.edu.cn/",
      year: "2019 - 2022",
      description: "This program focuses on advancing renewable energy integration through cutting-edge battery energy storage technologies. It emphasizes stationary applications (microgrids, smart grids, and grid-scale storage) and mobile applications (battery electric vehicles (BEVs), plug-in hybrids (PHEVs), renewable energy vehicles (REVs), e-bikes, and consumer electronics like smartphones and laptops). I explored interdisciplinary topics such as lithium-ion/solid-state battery design, energy management systems (BMS), power electronics, and grid integration. "
    },
    {
      degree: "B.Eng. in Industrial Engineering and Maintenance",
      institution: "Gamal Abdel Nasser University of Conakry",
      institutionUrl: "https://uganc.edu.gn/",
      year: "2013 - 2017",
      description: "My bachelor's degree program integrates principles of industrial engineering with advanced maintenance strategies to optimize complex systems and ensure operational reliability. It emphasizes operational efficiency (process optimization, supply chain management, and lean manufacturing) and maintenance engineering (predictive/ preventive maintenance, asset lifecycle management, and reliability-centered design). I gained expertise in industrial automation, quality control, data-driven decision-making, and sustainable resource management."
    },

    {
      degree: "A. Level in STEM & Social Sciences",
      institution: "St. Jean Complex School",
      institutionUrl: "https://www.facebook.com/people/Groupe-Scolaire-Saint-Jean-NZ%C3%A9r%C3%A9kor%C3%A9/61567925286717/",
      year: "2011 - 2013",
      description: " At St. Jean, STEM & Social Sciences program offers a rigorous interdisciplinary curriculum blending STEM disciplines (Mathematics, Physics, Chemistry) with social sciences and humanities (Economics, History, Literature, English) to foster analytical, critical, and creative thinking. I developped strong quantitative skills through advanced math and science coursework while exploring economic systems, historical contexts, literary analysis, and global cultures. Supplementary subjects like Philosophy, Geography, and Geology deepen critical reasoning, environmental awareness, and interdisciplinary problem-solving. The program emphasizes logical reasoning, scientific inquiry, effective communication, and ethical reflection, equipping students to excel in diverse fields such as engineering, economics, environmental science, law, or the arts."
    }
  ];

  const certifications = [
    {
      title: "Algorithm for Battery Management Systems (ABSMS)",
      provider: "University of Colorado Boulder",
      year: "2020",
      credential: "J7E4BFPSJHRP"
    },
    {
      title: "Project Management Professional (PMP) and Other Tools for Career Development",
      provider: "University of California, Irvine",
      year: "2011",
      credential: "3VP43BKLJEFA"
    },
    {
      title: "Professional Skills for Workspace",
      provider: "University of California, Davis",
      year: "2021",
      credential: "XQWJX8Y3EFE7"
    },
    {
      title: "Programming in C++",
      provider: "Codio",
      year: "2022",
      credential: "AYBGHUTPLJAN"
    }
  ];

  const onlineCourses = [
    {
      title: "Battery State-of-Charge (SOC) Estimation",
      platform: "Coursera",
      institution: "University of Colorado Boulder & University of Colorado System",
      completed: "2021",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/GQZXKQQDJ7S6"
    },
    {
      title: "Battery State-of-Health (SOH) Estimation",
      platform: "Coursera",
      institution: "University of Colorado Boulder & University of Colorado System",
      completed: "2022",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/FADNC5QCW3G6"
    },
    {
      title: "Battery Pack Balancing and Power Estimation",
      platform: "Coursera",
      institution: "University of Colorado Boulder & University of Colorado System",
      completed: "2022",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/39Y5R9GMJZWN"
    },
    {
      title: "Solar Energy: Integration of Photovoltaic Systems in Microgrids",
      platform: "EdX",
      institution: "TU Delft",
      completed: "2020",
      courseUrl: "https://courses.edx.org/certificates/c46c49f64644496ab122368e6b2e9721"
    },
    {
      title: "Creating EV Charging Hubs",
      platform: "Coursera",
      institution: "Coursera Instructor Network",
      completed: "2024",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/438AJKGRDBPZ"
    },
    {
      title: "Managing Project Risks and Changes",
      platform: "Coursera",
      institution: "University of California, Irvine",
      completed: "2021",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/HRL8RTUUL85H"
    },
    {
      title: "Solar Energy Systems",
      platform: "Coursera",
      institution: "Univeristy at Buffalo",
      completed: "2020",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/SEL3R8LKZ693"
    },
    {
      title: "Solar Energy",
      platform: "Coursera",
      institution: "The state University of New York",
      completed: "2020",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/6Q7LEK4HR39Y"
    
    },
    {
      title: "Exploring Renewable Energy Schemes",
      platform: "Coursera",
      institution: "University of pennsylvania",
      completed: "2021",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/2RMFJR746MR3s"
    },
    {
      title: "Equivalent Circuit Cell Model Simulation",
      platform: "Coursera",
      institution: "University of Colorado Boulder & University of Colorado System",
      completed: "2021",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/YL97DKPJ8L5X"
    },
    {
      title: "Introduction to battery-management systems",
      platform: "Coursera",
      institution: "University of Colorado Boulder & University of Colorado System",
      completed: "2021",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/3ZUYPCNDQQ6Y"
    },
    {
      title: "Electric Power Systems",
      platform: "Coursera",
      institution: "University at Buffalo",
      completed: "2019",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/5S56AWX4RGLT"
    },
    {
      title: "The Sustainable Development Goals – A global, transdisciplinary vision for the future",
      platform: "Coursera",
      institution: "University of Copenhagen",
      completed: "2020",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/CH89JZCMVX9E"
    },
   
    {
      title: "Effective Problem-Solving and Decision-Making",
      platform: "Coursera",
      institution: "University of California, Irvine",
      completed: "2021",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/28NAKMH4KHG2"
    },
    {
      title: "Adaptability and Resiliency",
      platform: "Coursera",
      institution: "University of California, Davis",
      completed: "2021",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/28NAKMH4KHG2"
    },
    {
      title: "Emotional and Social Intelligence",
      platform: "Coursera",
      institution: "University of California, Davis",
      completed: "2021",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/HLCRVQEX2PJV"
    },
    
    {
      title: "Mastering EV Cooling: Advanced Thermal Management",
      platform: "Coursera",
      institution: "Coursera Instructor Network",
      completed: "2024",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/S7A95V8YUKCY"
    },
    {
      title: "Demystifying EV Batteries: Tech & Management",
      platform: "Coursera",
      institution: "Coursera Instructor Network",
      completed: "2024",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/GUNZNG82TQE7"
    },

    {
      title: "Powering the Drive: Unveiling EV Electronics",
      platform: "Coursera",
      institution: "Coursera Instructor Network",
      completed: "2024",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/4NWWNQ7CZYDM"
    },
        // I need to add the course URL for this one 
    {
      title: "Electric Vehicle Sensors",
      platform: "Coursera",
      institution: "University of Colorado Boulder",
      completed: "2024",
      courseUrl: "https://www.coursera.org/learn/electric-vehicle-sensors/home/welcome"
    },
    {
      title: "Budgeting and Scheduling Projects",
      platform: "Coursera",
      institution: "University of California, Irvine",
      completed: "2021",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/V8WQE66DA4AW"
    },
    {
      title: "Outsmarting intermittency",
      platform: "Coursera",
      institution: "École Polytechnique",
      completed: "2021",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/WANU26JM9RK9"
    },
    {
      title: "Project Initiation: Starting a Successful Project",
      platform: "Coursera",
      institution: "Google",
      completed: "2021",
      courseUrl: "https://www.coursera.org/account/accomplishments/verify/S3DLV2LWQ45U"
    },
  
    {
      title: "Energy Principles and Renewable Energy",
      platform: "EdX",
      institution: "The University of Queensland, Australia",
      completed: "2021",
      courseUrl: "https://courses.edx.org/certificates/c46c49f64644496ab122368e6b2e9721"
    },
  


  ];
  // Create a filtered courses list based on state
  const displayedCourses = showAllCourses 
    ? onlineCourses 
    : onlineCourses.slice(0, coursesToShow);

  return (
    <section id="education" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education & Learning</h2>
        <p className="section-subtitle">A lifetime of continuous learning and professional development</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formal Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Formal Education</h3>
            </div>
            
                <div className="space-y-8">
                {formalEducation.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">{edu.year}</div>
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <a 
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                    >
                      {edu.institution}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <p className="text-muted-foreground mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
          </div>
          
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-accent/10">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Professional Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <div>
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {cert.provider} · {cert.year} · {cert.credential}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Online Courses */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Online Learning</h3>
              </div>
              
              <div className="space-y-4">
                {displayedCourses.map((course, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <a 
                      href={course.courseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                    >
                      <h4 className="font-semibold">{course.title}</h4>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <p className="text-sm text-primary">
                      {course.platform} · {course.institution}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Completed: {course.completed}
                    </p>
                  </div>
                ))}
                
                {onlineCourses.length > coursesToShow && (
                  <button
                    onClick={() => setShowAllCourses(!showAllCourses)}
                    className="w-full mt-4 py-2 px-4 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors"
                  >
                    {showAllCourses ? 'Show Less' : `Show All (${onlineCourses.length})`}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
