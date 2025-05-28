import { Download, Calendar, MapPin, Mail, Linkedin, Github, Twitter, Youtube } from "lucide-react";
import { FaWhatsapp, FaWeixin } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import CV from '@/assets/documents/Nicolas_Bamamou_CV_012025.pdf';
import { useState } from 'react';
import { WeChatModal } from '@/components/ui/wechatmodal';

const About = () => {
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Nicolas_Bamamou_CV_012025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">My Professional Journey</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg">
              As a Senior Battery Engineer at Evoke Motorcycles (Beijing), 
              I bring a multidisciplinary expertise rooted in advanced academic training—a Master’s in Electrical Engineering from Beijing Jiaotong University and a Bachelor’s in Industrial Engineering from Gamal Abdel Nasser University.
              Specializing in HV lithium-ion battery systems integration, I merge research with practical innovation to develop solutions for EVs, grid storage, and renewable energy. 
              My work bridges theory and scalability, ensuring reliability across stationary and mobile platforms.
            </p>
            <p className="text-lg">
              With 4+ years of experience, I resolve hardware-software-firmware challenges through advanced battery design (BMS algorithms, thermal management, fast-charging), CAD tools (Fusion 360, Catia V5), PCB development (Altium, KiCad), and programming (C/C++, Python). 
              Starting in industrial engineering, I optimized equipment reliability via MTBF/MTTR strategies before transitioning to electrical engineering, where I mastered circuit design, microgrids, and energy storage (ESS/BESS). 
              My expertise now spans embedded programming and web development, enabling end-to-end energy solutions.
            </p>
            
            <p className="text-lg">
              I thrive in multicultural teams, leveraging fluency in French, English, Chinese, and Spanish to deliver global projects like Tarform’s 10.5kW battery pack, BYAHE’s 240kW electric bus system, and ROAM’s mass-transit design. 
              My focus on innovation, safety, and sustainability drives meticulous attention to detail—whether designing high-voltage EV systems, IoT firmware, or responsive web interfaces.
            </p>
            
            <p className="text-lg">
              Committed to sustainable technology, I prioritize continuous learning to stay ahead of industry trends. 
              Explore my portfolio for insights into advancing clean energy and collaborative engineering.
            </p>
            
            <div className="pt-4">
              <Button 
                className="bg-primary hover:bg-primary/90 flex items-center gap-2"
                onClick={handleDownload}
              >
                <Download size={18} /> 
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary min-w-5" size={20} />
                  <div>
                    <p className="font-medium">Date of Birth</p>
                    <p className="text-muted-foreground">April 15, 1994</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary min-w-5" size={20} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Beijing Daxing Yizhuang Economic Develipment Zone</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-primary min-w-5" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">bamamounicolas@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t flex items-center justify-between">
                <a href="https://linkedin.com/in/bamamounicolas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://github.com/Bamamou" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://x.com/NicolasBamamou" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://www.youtube.com/@nicolasbamamou94" className="hover:text-accent transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
                <a 
                href="https://wa.me/8618810799128" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="WhatsApp">
                  <FaWhatsapp size={20} />
                </a> 
                <a  href="#"  onClick={(e) => {e.preventDefault();setIsWeChatModalOpen(true);}} className="hover:text-accent transition-colors" aria-label="WeChat">
                  <FaWeixin size={20} />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-md text-center card-hover">
                <h4 className="text-4xl font-bold text-primary mb-1">4+</h4>
                <p className="text-sm font-medium">Years Experience</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center card-hover">
                <h4 className="text-4xl font-bold text-primary mb-1">50+</h4>
                <p className="text-sm font-medium">Projects Completed</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center card-hover">
                <h4 className="text-4xl font-bold text-primary mb-1">20+</h4>
                <p className="text-sm font-medium">Happy Clients</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center card-hover">
                <h4 className="text-4xl font-bold text-primary mb-1">15+</h4>
                <p className="text-sm font-medium">Awards Received</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WeChatModal 
        isOpen={isWeChatModalOpen} 
        onClose={() => setIsWeChatModalOpen(false)} 
      />
    </section>
  );
};

export default About;
