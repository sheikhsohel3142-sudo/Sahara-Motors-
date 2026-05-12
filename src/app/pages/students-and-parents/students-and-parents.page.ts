import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-students-and-parents',
  templateUrl: './students-and-parents.page.html',
  styleUrls: ['./students-and-parents.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, CommonModule, FormsModule,RouterLink]
})
export class StudentsAndParentsPage implements OnInit {

 schools = [
    {
      id: 1,
      name: 'Luffy',
      school:'ARLM',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: 'Stop 5',
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
      name: 'Luffy',
      school:'ARLM',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: 'Stop 5',
      
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
      name: 'Luffy',
      school:'ARLM',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: 'Stop 5',
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
      name: 'Luffy',
      school:'ARLM',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: 'Stop 5',
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
      name: 'Luffy',
      school:'ARLM',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: 'Stop 5',
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
      name: 'Luffy',
      school:'ARLM',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: 'Stop 5',
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
      name: 'Luffy',
      school:'ARLM',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: 'Stop 5',
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
      name: 'Luffy',
      school:'ARLM',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: 'Stop 5',
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
      name: 'Luffy',
      school:'ARLM',
      buses: 'TN-09-AB-2345',
      route: 'Route 5 - Triplicane',
      outstandingAdvance: 'Stop 5',
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
    this.router.navigate(['/', 'admin', 'students-and-parents', 'enroll-new-student']);
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

