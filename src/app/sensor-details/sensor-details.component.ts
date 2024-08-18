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
  ];

  getIcon(sensorName: string): string {
    switch (sensorName) {
      case 'pH Level':
        return 'fas fa-tachometer-alt';
      case 'Oxygen Level':
        return 'fas fa-tint';
      case 'Rainfall':
        return 'fas fa-cloud-showers-heavy';
      case 'Water Level':
        return 'fas fa-water';
      default:
        return 'fas fa-cogs';
    }
  }
}
