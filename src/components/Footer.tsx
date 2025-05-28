import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import { FaWhatsapp, FaWeixin } from 'react-icons/fa';
import { WeChatModal } from '@/components/ui/wechatmodal';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Nicolas Bamamou</h3>
            <p className="mb-4 max-w-md">
              A passionate engineer dedicated to solving complex problems and creating innovative solutions across multiple disciplines.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/bamamounicolas" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Bamamou" className="hover:text-accent transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@nicolasbamamou94" target="_blank" className="hover:text-accent transition-colors" aria-label="YouTube">
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

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#education" className="hover:text-accent transition-colors">Education</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>Beijing, CN</li>
              <li>bamamounicolas@gmail.com</li>
              <li>+86 188-107-991-28</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p>© {currentYear} Nicolas Bamamou | Engineer Portfolio. All rights reserved.</p>
        </div>
      </div>
      <WeChatModal 
        isOpen={isWeChatModalOpen} 
        onClose={() => setIsWeChatModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;
