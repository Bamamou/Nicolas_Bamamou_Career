import { Battery, BatteryChargingIcon, FileText, FileSpreadsheet } from 'lucide-react';
import type { Project } from './types';

export const tricycle8kWbattery: Project = {
  id: 11,
  title: '7.8kW professional-grade LiFePO₄ E-mobility battery pack',
  category: 'battery',  image: './images/BESS/tricycle8kWbattery2.png',
  images: [
    '../images/BESS/tricycle8kWbattery1.png',
    '../images/BESS/tricycle8kWbattery3.png',
    '../images/BESS/tricycle8kWbattery4.png',  
  ],
  description: '7.8kW professional-grade LiFePO₄ battery pack designed to deliver exceptional performance with advanced safety features, making it ideal for demanding applications requiring reliable, long-lasting power storage.',
  fullDescription: 'Developed a high energy density with 7.84 kWh capacity with Superior cycle life exceeding 3,500 cycles capble of delivering 12kW or 2C continuous power output and a High discharge rates up to 3.5C peak. The battery pack is designed with advanced safety features, including thermal management and overcurrent protection, ensuring reliable performance in demanding applications.',
  tags: ['Battery Energy Storage System', 'Renewable Energy', ' IoT/Smart Home', 'Energy Management', 'Battery Pack Design', 'BMS', 'Smart Metering'],
  icon: Battery,
  startDate: 'May 2023',
  duration: '2 months',
  scope: 'Full System Design and Implementation of a 5.2kW',
  role: 'RBESS Engineer',
  responsibilities: [
    'Conducted feasibility studies for power requirement and battery pack design',
    'Analyzed battery performance and lifespan',
    'Selected cell chemistry and design battery pack and management system',
    'System design and integration of battery pack with the rest of the vehicle power train',
    'Designed and developed communication protocols for the (BMS), the changing station, and the vehicles HMI',
    'Developed a type 6 fast-charging station with bidirectional charging capabilities',
    'Developed power management algorithms',
    'Created user interface for system monitoring and remote monitoring and reporting',
    'Conducted efficiency and compliance with safety standards'
  ],
  outcomes: [
    'Enhanced range by 40% using regenerative braking, power management, and fast-charging capabilities',
    'Improved battery lifespan by 30% through advanced thermal management and BMS',
    'Enabled remote monitoring and control via mobile app',
    'Improved energy security by 60%',
    'Ensured compliance with automotive safety standards',
    'Enabled real-time energy usage analytics',
    'Successfully deployed in 150 fleet vehicles in the Philippines',
    'Achieved 99.9% uptime with robust system design and testing'
  ],
    links: [
  {
    title: 'Documentation',
    url: '../projects/BESS/higo_battery_docs.html',
    icon: FileText
  },
  {
    title: 'CAD Files',
    url: '#',
    icon: FileSpreadsheet
  },
],

  technologies: ['Autodesk Fusion 360 / SolidWorks', 'CAD/technical-Drawing', 'Battery Management System (BMS)', 'Fiber laser welding', 'Fast-Bidirectional DC Charging', 'Battery Pack Design', 'IoT Sensors and Smart power metering system', 'type 6 fast-charging station', 'Thermal Management Systems'],
};