import { Component } from '@angular/core';

@Component({
  selector: 'app-sensor-details',
  templateUrl: './sensor-details.component.html',
  styleUrls: ['./sensor-details.component.css']
})
export class SensorDetailsComponent {
  sensors = [
    { name: 'pH Level', value: '7.5' },
    { name: 'Oxygen Level', value: '5.2 mg/L' },
    { name: 'Rainfall', value: '12 mm' },
    { name: 'Water Level', value: '1.2 meters' },
    // Add more sensors as needed
  ];

  getIcon(sensorName: string): string {
    switch (sensorName) {
      case 'pH Level':
        return 'fas fa-tachometer-alt'; // Example icon for pH level
      case 'Oxygen Level':
        return 'fas fa-tint'; // Example icon for oxygen level
      case 'Rainfall':
        return 'fas fa-cloud-showers-heavy'; // Example icon for rainfall
      case 'Water Level':
        return 'fas fa-water'; // Example icon for water level
      default:
        return 'fas fa-cogs'; // Default icon
    }
  }
}
