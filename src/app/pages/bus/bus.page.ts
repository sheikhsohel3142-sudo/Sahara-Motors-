import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.page.html',
  styleUrls: ['./bus.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, CommonModule, FormsModule, RouterLink],
})
export class BusPage implements OnInit {
  schools = [
    {
      id: 1,
      name: 'SRV Matriculation',
      buses: 5,
      location: 'New York',
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
      name: 'SRV Matriculation',
      buses: 5,
      location: 'New York',
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
      name: 'SRV Matriculation',
      buses: 5,
      location: 'New York',
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
      name: 'SRV Matriculation',
      buses: 5,
      location: 'New York',
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
    this.router.navigate(['/', 'admin', 'bus', 'add-new-bus']);
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
