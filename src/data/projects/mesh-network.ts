import { Cpu, Zap, FileText, FileSpreadsheet, Code } from 'lucide-react';
import type { Project } from './types';

export const meshNetwork: Project = {
  id: 6,
  title: 'ESP and Quectel EC800M-CN 4G Alibaba cloud IoT',
  category: 'embedded',
  image:  './images/FirmwareDev/ESP32 4G1.png',
  description: 'Developed a robust and Smart Agricultural Field Monitoring System using an ESP32 that collects environmental data from the field and send it over 4G using the Quectel module.',
  fullDescription: 'Developed a solar-powered remote monitoring system for agricultural fields using ESP32 and Quectel EC800M-CN 4G module to collect data such as soil moisture, temperature, humidity, and light intensity, then transmit the data to Alibaba Cloud IoT Platform in real time for monitoring and alerting.',
  tags: ['IoT', 'Quectel EC800M-CN', 'ESP32', 'BH1750', 'Alibaba Cloud IoT Platform', 'Industrial IoT', 'MQTT', 'FreeRTOS', 'Embedded C/C++'],
  icon: Cpu,
  startDate: 'January 2024',
  duration: '4 months',
  scope: 'Network Architecture and Implementation',
  role: 'IoT Systems Engineer',
    images: [
    '../images/FirmwareDev/ESP32 4G7.png',
    '../images/FirmwareDev/ESP32 4G4.png',
    '../images/FirmwareDev/ESP32 4G5.png',
    '../images/FirmwareDev/ESP32 4G9.png',
    '../images/FirmwareDev/ESP32 4G.png',
  ],
  responsibilities: [
    'Designed mesh network topology and protocols',
    'Implemented secure data transmission',
    'Developed network management system',
    'Created deployment and maintenance documentation',
    'Conducted field testing in industrial environments'
  ],
  outcomes: [
    'Achieved 99.9% network reliability',
    'Supported up to 100 nodes per network',
    'Successfully deployed in 3 manufacturing facilities'
  ],
    links: [
    {
      title: 'Documentation',
      url: 'https://github.com/Bamamou/ESP32S3_4G_DevBoard/blob/main/ESP32%20S3%E5%BC%80%E5%8F%91%E6%9D%BF%E5%8E%9F%E7%90%86%E5%9B%BE.pdf',
      icon: FileText
    },
    {
      title: 'Firmware',
      url: 'https://github.com/Bamamou/ESP32S3_4G_DevBoard/tree/main/PlatformIO%20code/Features/TCP',
      icon: FileSpreadsheet
    },
    {
      title: 'Code',
      url: 'https://github.com/Bamamou/ESP32S3_4G_DevBoard',
      icon: Code
    }
  ],
  githubUrl: 'https://github.com/Bamamou/ESP32S3_4G_DevBoard',
  technologies: ['MQQT', 'Version Control', 'FreeRTOS', 'Embedded C/C++', 'HTTPS ', 'Alibaba Cloud IoT Platform', 'ESP32', 'Quectel EC800M-CN', 'BH1750'],
};
