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
    { name: 'KUNCHALA CHAITANYA', role: 'Project Manager' },
    { name: 'BATTULA MOUNIKA', role: 'Backend Developer' },
    { name: 'KOLA BHARGAV', role: 'Frontend Developer' },
    { name: 'KONCHADA PRANATHI', role: 'UI/UX Designer' },
    { name: 'GURUGUBELLI SRAVANTHI', role: 'Database Administrator' },
    { name: 'BALLA KAVYA', role: 'QA Engineer' },
    { name: 'KOTLA HARSHITHA', role: 'DevOps Engineer' },
    { name: 'GOLLA NIHARIKA', role: 'IoT Specialist' },
    { name: 'KOTA MINNU MADAN', role: 'Full Stack Developer' }
  ];
}
