import { Component } from '@angular/core';

@Component({
  selector: 'app-pond-management',
  templateUrl: './pond-management.component.html',
  styleUrls: ['./pond-management.component.css']
})
export class PondManagementComponent {
  ponds = [
    { id: 1, name: 'Pond 1', description: 'This is Pond 1' },
    { id: 2, name: 'Pond 2', description: 'This is Pond 2' },
    // Add more ponds as needed
  ];
}
