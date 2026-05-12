import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonButton } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent,CommonModule, FormsModule, RouterLink]
})
export class DriverPage implements OnInit {
 schools = [
    {
      id: 1,
      name: 'Micheal',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: '$ 120.00',
      status: 'Active',
      board: 'CBSE',
      address: 'Triplicane, Chennai',
      state: 'Jharkhand',
      contact: 'Russel',
      email: 'srvm@school.com',
      timing: '09:00 - 16:30',
    },
    {
      id: 1,
      name: 'Micheal',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: '$ 120.00',
      
      status: 'Active',
      board: 'CBSE',
      address: 'Triplicane, Chennai',
      state: 'Jharkhand',
      contact: 'Russel',
      email: 'srvm@school.com',
      timing: '09:00 - 16:30',
    },
    {
      id: 1,
      name: 'Micheal',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: '$ 120.00',
      status: 'Active',
      board: 'CBSE',
      address: 'Triplicane, Chennai',
      state: 'Jharkhand',
      contact: 'Russel',
      email: 'srvm@school.com',
      timing: '09:00 - 16:30',
    },
    {
      id: 1,
      name: 'Micheal',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: '$ 120.00',
      status: 'Active',
      board: 'CBSE',
      address: 'Triplicane, Chennai',
      state: 'Jharkhand',
      contact: 'Russel',
      email: 'srvm@school.com',
      timing: '09:00 - 16:30',
    },
    {
      id: 1,
      name: 'Micheal',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: '$ 120.00',
      status: 'Active',
      board: 'CBSE',
      address: 'Triplicane, Chennai',
      state: 'Jharkhand',
      contact: 'Russel',
      email: 'srvm@school.com',
      timing: '09:00 - 16:30',
    },
    {
      id: 1,
      name: 'Micheal',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: '$ 120.00',
      status: 'Active',
      board: 'CBSE',
      address: 'Triplicane, Chennai',
      state: 'Jharkhand',
      contact: 'Russel',
      email: 'srvm@school.com',
      timing: '09:00 - 16:30',
    },
    {
      id: 1,
      name: 'Micheal',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: '$ 120.00',
      status: 'Active',
      board: 'CBSE',
      address: 'Triplicane, Chennai',
      state: 'Jharkhand',
      contact: 'Russel',
      email: 'srvm@school.com',
      timing: '09:00 - 16:30',
    },
    {
      id: 1,
      name: 'Micheal',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: '$ 120.00',
      status: 'Active',
      board: 'CBSE',
      address: 'Triplicane, Chennai',
      state: 'Jharkhand',
      contact: 'Russel',
      email: 'srvm@school.com',
      timing: '09:00 - 16:30',
    },
    {
      id: 1,
      name: 'Micheal',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: '$ 120.00',
      status: 'Active',
      board: 'CBSE',
      address: 'Triplicane, Chennai',
      state: 'Jharkhand',
      contact: 'Russel',
      email: 'srvm@school.com',
      timing: '09:00 - 16:30',
    },
  ];

  selectedSchool: any = null;

  constructor(private router: Router) {}
  addNewSchool() {
    this.router.navigate(['/', 'admin', 'driver', 'add-new-driver']);
    console.log('view');
  }

  ngOnInit() {}

  viewSchool(school: any) {
    this.selectedSchool = school;
  }

  closeDetail() {
    this.selectedSchool = null;
  }
  schoolDetail() {
    this.router.navigate(['/', 'admin', 'schools', 'school-detail']);
  }

}
