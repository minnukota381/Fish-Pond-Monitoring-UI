import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  projectDescription = `
    The "IoT-Based Web Application for Smart Pond Monitoring" is designed to provide real-time monitoring and management of pond environments using advanced IoT sensors.
    The application enables users to monitor crucial parameters such as temperature, pH levels, water level, rainfall, and oxygen levels, helping to maintain a balanced and healthy ecosystem.
  `;

  sensors = [
    'Temperature Sensor',
    'pH Sensor',
    'Water Level Sensor',
    'Rainfall Sensor',
    'Oxygen Sensor',
  ];

  teamMembers = [
    {
      name: 'BALLA KAVYA',
      role: 'Database Management and Optimization',
      image: 'assets/team/Kavya.JPG',
    },
    {
      name: 'KOLA BHARGAV',
      role: 'Email Notification System & Hardware Connection',
      image: 'assets/team/bhargav.png',
    },
    {
      name: 'KUNCHALA CHAITANYA',
      role: 'Historical Data Analysis and Reporting',
      image: 'assets/team/CHAITU2.jpg',
    },
    {
      name: 'BATTULA MOUNIKA',
      role: 'Data Visualization Module',
      image: 'assets/team/mounika.jpg',
    },
    {
      name: 'KONCHADA PRANATHI',
      role: 'Login and Authentication Module',
      image: 'assets/team/pranathi.jpg',
    },
    {
      name: 'GURUGUBELLI SRAVANTHI',
      role: 'User Interface for Pond Details',
      image: 'assets/team/sravanthi.jpg',
    },
    {
      name: 'KOTLA HARSHITHA',
      role: 'Pond Management Module',
      image: 'assets/team/harshitha.jpg',
    },
    {
      name: 'GOLLA NIHARIKA',
      role: 'Sensor Management Module',
      image: 'assets/team/Niharika.jpg',
    },
    {
      name: 'KOTA MINNU MADAN',
      role: 'Arduino Integration, Data Handling & System Integration',
      image: 'assets/team/minnukota381.JPG',
    },
  ];

  projectGuides = [
    {
      name: 'Debendra Maharana',
      role: 'Complete Project Guide',
      image: 'assets/guides/Deb.png',
    },
    {
      name: 'Rajesh Kumar Mishra',
      role: 'IoT Integration',
      image: 'assets/guides/Rajesh.png',
    },
  ];
}
