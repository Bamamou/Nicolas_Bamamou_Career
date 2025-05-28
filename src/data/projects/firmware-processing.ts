import { Cpu, Zap, FileText, FileSpreadsheet, Code } from 'lucide-react';
import type { Project } from './types';

export const firmwareProcessing: Project = {
  id: 5,
  title: 'Real-time Sensor Data Processing Firmware',
  category: 'embedded',
  image: './images/FirmwareDev/ESP32 Relay3.PNG',
  description: 'Firmware for ESP32 microcontrollers enabling real-time processing of sensor data for industrial applications.',
  fullDescription: 'Developed sophisticated firmware for ESP32 microcontrollers to handle real-time processing of multiple sensor inputs in industrial monitoring applications. The system provides accurate, low-latency data processing with robust error handling.',
  tags: ['ESP32', 'Firmware', 'ESP-DASH', 'DHT11/ DS18B20', 'Sensors', 'FreeRTOS', 'Palatformio', 'Embedded C/C++'],
  icon: Cpu,
  startDate: 'May 2023',
  duration: '5 months',
  scope: 'Firmware Development',
  role: 'Embedded Systems Engineer',
    images: [
    '../images/FirmwareDev/ESP32 Relay1.jpg',
    '../images/FirmwareDev/Relay Sch.png',
    '../images/FirmwareDev/ESP32 Relay2.PNG',
    '../images/FirmwareDev/Relay Sch2.png',
  ],
  responsibilities: [
    'Designed and implemented RTOS-based firmware architecture',
    'Optimized sensor data processing algorithms',
    'Integrated multiple sensors (DHT11, DS18B20) for temperature and humidity monitoring',
    'Developed communication protocols (Wi-Fi, BLE) for data transmission',
    'Developed error handling and system recovery mechanisms between ESP32 and ESP-DASH',
    'Conducted extensive testing and validation of firmware',
    'Created comprehensive documentation'
  ],
  outcomes: [
    'Reduced processing latency by 40%',
    'Improved system reliability with 99.99% uptime',
    'Successfully deployed in 20+ industrial units'
  ],
  technologies: ['ESP32', 'Version Control', 'Embedded C/C+', 'ESP-DASH/DHT11-22/DS18B20 (Dallas)', 'FreeRTOS/Platformio', 'Arduino Framework', 'Wi-Fi-BLE-I2C-SPI-UART-GPIO'],
  githubUrl: 'https://github.com/Bamamou/ESP32_Relay_Board_BLE',
  links: [
  {
    title: 'Documentation',
    url: 'https://github.com/Bamamou/ESP32_Relay_Board_BLE/blob/main/README.md',
    icon: FileText
  },
  {
    title: 'Schematic',
    url: 'https://private-user-images.githubusercontent.com/99571735/368303251-31fe9561-9f4f-489f-ac1b-4b7d6bdbcb99.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgwNzQxNzYsIm5iZiI6MTc0ODA3Mzg3NiwicGF0aCI6Ii85OTU3MTczNS8zNjgzMDMyNTEtMzFmZTk1NjEtOWY0Zi00ODlmLWFjMWItNGI3ZDZiZGJjYjk5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI0VDA4MDQzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFjMTk4Y2VmYTIxZDZjYjY5NDM0MzBkZDEwMThmZjMzNGIwMWVhMmY0NzBiZmQ5ODA0ZjEyN2M4ZjA2ODc0Y2ImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.kxRZOcB5RJTeurcmVjZxdYKkN2imDBryk5Sxi7uDjEI',
    icon: FileSpreadsheet
  },
  {
    title: 'Code',
    url: 'https://github.com/Bamamou/ESP32_Relay_Board_BLE',
    icon: Code
  }
],
};
