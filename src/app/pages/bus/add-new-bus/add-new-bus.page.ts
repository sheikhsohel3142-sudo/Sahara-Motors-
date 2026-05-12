import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonSelectOption,
  IonModal,
  IonButton,
  IonIcon,
  IonInput,
  IonSelect,
  IonText,
  IonDatetime, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-new-bus',
  templateUrl: './add-new-bus.page.html',
  styleUrls: ['./add-new-bus.page.scss'],
  standalone: true,
  imports: [IonLabel, 
    IonDatetime,
    IonText,
    IonInput,
    IonButton,
    IonIcon,
    IonCard,
    IonButton,
    IonCol,
    IonRow,
    IonContent,
    IonGrid,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonSelectOption,
    IonSelect,
    IonModal,
  ],
})
export class AddNewBusPage implements OnInit {
  isInvalid(controlName: string) {
    const control = this.busForm.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }
  busForm!: FormGroup;

  fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Electric'];

  school2s = ['SRV', 'ARLM', 'DAV', 'Public School'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.busForm = this.fb.group({
      busRegistrationNumber: ['', Validators.required],
      seatingCapacity: ['', Validators.required],
      fuelType: ['', Validators.required],
      assignSchool: ['', Validators.required],
      route: ['', Validators.required],
      serviceStartDate: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.busForm.valid) {
      console.log(this.busForm.value);
    } else {
      this.busForm.markAllAsTouched();
    }
  }

  
 
//   serviceStartDate: string = '';

//   openDatePicker() {
   
//     this.isDateOpen = true;
//   }

 
// onDateChange() {

//   this.isDateOpen = false;
// }

//   get f() {
//     return this.busForm.controls;
//   }

isOpen = false;

openPicker() {
  this.isOpen = true;
}

selectDate(event: any) {
  const value = event.detail.value;

  // 🔥 IMPORTANT
  console.log(value);
  this.busForm.get('serviceStartDate')?.setValue(value);
  this.busForm.get('serviceStartDate')?.markAsTouched();

  this.isOpen = false;
}

// submit check (example)
// submitForm() {
//   if (!this.selectedDate) {
//     this.showError = true;
//     return;
//   }

//   console.log('Date:', this.selectedDate);
// }
}
