import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
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
    'Oxygen Sensor'
  ];

  teamMembers = [
    { name: 'KUNCHALA CHAITANYA', role: 'Project Manager', image: 'assets/team/chaitanya.jpg' },
    { name: 'BATTULA MOUNIKA', role: 'Backend Developer', image: 'assets/team/mounika.jpg' },
    { name: 'KOLA BHARGAV', role: 'Frontend Developer', image: 'assets/team/bhargav.jpg' },
    { name: 'KONCHADA PRANATHI', role: 'UI/UX Designer', image: 'assets/team/pranathi.jpg' },
    { name: 'GURUGUBELLI SRAVANTHI', role: 'Database Administrator', image: 'assets/team/sravanthi.jpg' },
    { name: 'BALLA KAVYA', role: 'QA Engineer', image: 'assets/team/kavya.jpg' },
    { name: 'KOTLA HARSHITHA', role: 'DevOps Engineer', image: 'assets/team/harshitha.jpg' },
    { name: 'GOLLA NIHARIKA', role: 'IoT Specialist', image: 'assets/team/niharika.jpg' },
    { name: 'KOTA MINNU MADAN', role: 'Full Stack Developer', image: 'assets/team/madan.jpg' }
  ];
}
