import { Battery } from 'lucide-react';
import type { Project } from './types';

export const batteryManagement: Project = {
  id: 2,
  title: 'Electric Vehicle Battery Management System',
  category: 'battery',  image: './images/BMS/BMS.jpg',
  images: [
    '../images/BMS/BMS.jpg',
    '../images/BMS/BMS2.jpg',
    '../images/BMS/BMS3.jpg',
    '../images/BMS/BMS1.jpg'
  ],
  description: 'Test and integrate a 40S (600A) BMS for electric vehicles, focusing on real-time monitoring, cell balancing, State estimation, communication protocol, data logging, and advanced protection features',
  fullDescription: 'Development of a comprehensive Battery Management System (BMS) testing steps for electric vehicles, with a focus on maximizing battery life while ensuring safety and reliability. The system includes real-time monitoring, cell balancing, State estimation, communication protocol, data logging, and advanced protection features.',
  tags: ['BMS', 'EV', 'PHEV', 'Battery', 'Safety', 'Testing', 'Integration', 'Electrical', 'Electronics', 'Electrochemical'],
  icon: Battery,
  startDate: 'January 2023',
  duration: '8 months',
  scope: 'Full BMS Development',
  role: 'Senior Battery Systems Engineer',
  responsibilities: [
    'Implemented cell balancing algorithms',
    'Developed safety protocols and protection features',
    'Conducted extensive testing and validation',
    'Integrated BMS with vehicle control systems',
    'Created data logging and analysis tools',
    'Developed communication protocols (CAN, RS485, UART)',  
    'Created user interface for system monitoring',
    'Conducted system integration testing',
    'Developed wire harness and interface PCB design',
    'Created comprehensive documentation'
  ],
  outcomes: [
    'Increased battery life by 25%',
    'Achieved 99.9% system reliability',
    'Reduced charging time by 30%',
    'Successfully implemented in 5 EV prototypes',

  ],
  technologies: ['Altium Designer', 'Version Control', 'FreeRTOS-Embedded C/C++', 'BMS tester', 'Python', 'CAN-RS485-UART-I2C-SPI'],
};
