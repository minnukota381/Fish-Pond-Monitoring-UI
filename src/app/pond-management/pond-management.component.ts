import { Component } from '@angular/core';

@Component({
  selector: 'app-pond-management',
  templateUrl: './pond-management.component.html',
  styleUrls: ['./pond-management.component.css']
})
export class PondManagementComponent {
  ponds = [
    { id: 1, name: 'Pond 1', description: 'A tranquil pond with clear water and a variety of aquatic plants.' },
    { id: 2, name: 'Pond 2', description: 'A large pond known for its vibrant fish and serene surroundings.' },
    { id: 3, name: 'Pond 3', description: 'A small pond, ideal for monitoring rainfall and water level changes.' },
  ];
}
