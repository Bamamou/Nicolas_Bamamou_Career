import { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { ChevronDown, ChevronUp, Code, ExternalLink } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: "Circuit Design", percentage: 95 },
    { name: "PCB Layout", percentage: 90 },
    { name: "Battery Systems", percentage: 92 },
    { name: "CAD", percentage: 85 },
    { name: "Embedded C/C++", percentage: 88 },
    { name: "Embedded Micropython", percentage: 89 },
    { name: "Version Control Git", percentage: 93 },
    { name: "Python", percentage: 90 },
    { name: "Octave", percentage: 88 },
    { name: "RTOS", percentage: 82 },
    { name: "React", percentage: 80 },
    { name: "HTML/CSS/JS", percentage: 85 },
  ];
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };


  const engineeringSkills = [
    {
      category: "Electrical & Electronics",
      url: "https://wokwi.com/dashboard/projects",  // Update with your actual URL
      items: [
        "Circuit Design & Analysis",
        "PCB Layout & Fabrication",
        "Signal Integrity",
        "Power converters Design",
        "MCU Simulation",
        "Oscilloscope & DMM Proficiency",
        "Analog & Digital Circuit Design",
        "RF Design & Simulation",
        "Sensor Integration",
        "Solar Energy Systems sizing and integration",
        "Electric grid frequency & voltage control",
        "Power System Protection & Quality Analysis",
      ]
    },
    {
      category: "Battery Engineering",
      url: "https://grabcad.com/nicolas.bamamou-2/models",  // Update with your actual URL
      items: [
        "Cell Selection & Testing",
        "Cell Contact System CCS Design & laser welding",
        "Battery Pack Assembly, CTP, CTM, CTB, CTC",
        "Battery Chemistry Knowledge",
        "Battery Pack Design & Testing",
        "Battery Manufacturing Processes",
        "Battery Thermal & Lifecycle Management",
        "BMS Architecture, Functionality & Algorithms Design",
        "Battery Management Systems",
        "Battery Testing & Validation",
        "Battery Modeling & Simulation",
        "Battery Performance Optimization",
        "Battery Protection & Safety Standards",
      ]
    },
    {
      category: "Embedded Systems",
      url: "https://github.com/Bamamou",  // Update with your actual URL
      items: [
        "Microcontroller Programming",
        "RTOS Implementation",
        "Embedded C/C++ & Python Programming",
        "Firmware Development",
        "Sensor Integration",
        "Communication Protocols( CAN, RS485, UART, SPI, I2C)",
        "Low Power Optimization",
        "Embedded Systems Testing & Debugging",
        "Embedded Systems Prototyping, Integration & Validation",

      ]
    },
    {
      category: "Mechanical Engineering",
      url: "https://grabcad.com/nicolas.bamamou-2/models",
      items: [
        "Sketching & 3D Modeling",
        "Mechanical Design & Analysis",
        "Rendering & Animation",
        "Technical Drawing & Documentation",
        "Sheet Metal Design",
        "Manufacturing Processes",
        "Tolerance Analysis",
        "Metric & Imperial Standards",
        "Geometric Dimensioning & Tolerancing (GD&T)",
        "Mechanical Assembly & Prototyping", 

      ]
    },
    {
      category: "Web Development",
      url: "https://github.com/CecedeKP/Bamamou_Nicolas_Career",  // Update with your actual URL
      items: [
        "Frontend Design",
        "Responsive Web Apps",
        "React/Next.js",
        "RESTful APIs",
        "UI/UX Principles",
        "Performance Optimization"
      ]
    },
  ];

  const softSkills = [
    {
      category: "Leadership & Management",
      url: "/communication", // Here I should add a link to my blogging skills
      items: [
        "Project Leadership",
        "Team Management",
        "Strategic Planning",
        "Risk Management",
        "Resource Allocation",
        "Performance Optimization"
      ]
    },
    {
      category: "Communication",
      url: "/communication", // Here I should add a link to my blogging skills
      items: [
        "Technical Documentation",
        "Cross-functional Collaboration",
        "Stakeholder Management",
        "Presentation Skills",
        "Client Relations",
        "Knowledge Transfer"
      ]
    },
    {
      category: "Problem Solving",
      url: "/problem-solving",
      items: [
        "Analytical Thinking",
        "Root Cause Analysis",
        "Decision Making",
        "Innovation",
        "Quality Focus",
        "Process Improvement"
      ]
    },
    {
      category: "Organizational",
      url: "/organizational",
      items: [
        "Project Planning",
        "Time Management",
        "Budget Control",
        "Resource Optimization",
        "Quality Assurance",
        "Documentation"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technical expertise across multiple engineering disciplines</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8">Engineering Disciplines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {engineeringSkills.map((category, index) => (
                <div key={index} className="bg-secondary/50 p-6 rounded-lg">
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">{category.category}</span>
                      <button 
                        onClick={() => toggleCategory(category.category)}
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {expandedCategories.includes(category.category) 
                          ? <ChevronUp className="h-5 w-5" />
                          : <ChevronDown className="h-5 w-5" />
                        }
                      </button>
                    </div>
                    {category.url && (
                      <a 
                        href={category.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group w-fit"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>View Details</span>
                      </a>
                    )}
                  </div>
                  <ul className={`space-y-2 overflow-hidden transition-all duration-300 ${
                    expandedCategories.includes(category.category) 
                      ? 'max-h-[500px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t">
          <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "Altium Designer", "Autodesk Fusion 360", "KiCad", "SolidWorks", 
              "EasyEDA", "Arduino", "STM32", "ESP32", "FreeRTOS", "MATLAB/Simulink",
              "VS Code", "IntelliJ IDEA", "Autodesk AutoCad", "Microsoft", "STM32CubeIDE",
              "STM32CubeMX", "Arduino IDE", "Jupiter Notebook", "Anaconda", 
              "Python", "C/C++", "React", "Tailwind CSS", "Git/GitHub", 
              "Thinkercad", "LabVIEW", "Keill uVision", "Wokwi", "HTML/CSS/JS", "Fritzing",
            ].map((tool, index) => (
              <span key={index} className="bg-secondary px-4 py-2 rounded-full text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t">
          <h3 className="text-2xl font-bold mb-8">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkills.map((category, index) => (
              <div key={index} className="bg-secondary/50 p-6 rounded-lg">
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{category.category}</span>
                    <button 
                      onClick={() => toggleCategory(category.category)}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {expandedCategories.includes(category.category) 
                        ? <ChevronUp className="h-5 w-5" />
                        : <ChevronDown className="h-5 w-5" />
                      }
                    </button>
                  </div>
                  {category.url && (
                    <a 
                      href={category.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group w-fit"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Details</span>
                    </a>
                  )}
                </div>
                
                <ul className={`space-y-2 overflow-hidden transition-all duration-300 ${
                  expandedCategories.includes(category.category) 
                    ? 'max-h-[500px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
