import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonCol, IonRow, IonGrid, IonIcon, IonToggle, IonSelect, IonInput, IonText, IonLabel, IonModal, IonDatetime } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-enroll-new-student',
  templateUrl: './enroll-new-student.page.html',
  styleUrls: ['./enroll-new-student.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonModal, IonLabel, IonText, IonInput, IonToggle, IonIcon, IonGrid, IonRow, IonCol, IonButton, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonSelect,RouterLink]
})
export class EnrollNewStudentPage implements OnInit {
 enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: ['', Validators.required],
      admissionNumber: [''],

      gradeClass: ['', Validators.required],
      section: [''],

      school: ['', Validators.required],
      route: ['',Validators.required],

      pickupStop: ['',Validators.required],
      assignBus: ['',Validators.required],

      parentName: ['', Validators.required],
      relationship: ['', Validators.required],

      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', Validators.email],

      billingStartDate: ['',Validators.required],

      receiveNotice: ['Yes'],
      disableNotice: ['Yes'],
      complimentaryStudent: ['Yes']

    });

  }

  saveStudent() {

    if (this.enrollForm.invalid) {
      this.enrollForm.markAllAsTouched();
      return;
    }

    const formData = this.enrollForm.value;

    console.log("Student Data :", formData);

    /**
     Example Output
     {
       studentName: "",
       admissionNumber: "",
       gradeClass: "",
       section: "",
       school: "",
       route: "",
       pickupStop: "",
       assignBus: "",
       parentName: "",
       relationship: "",
       phoneNumber: "",
       email: "",
       billingStartDate: "",
       receiveNotice: true,
       disableNotice: false,
       complimentaryStudent: false
     }
    */

  }

  toggleChange(event: any, control: string) {
    this.enrollForm.patchValue({
      [control]: event.detail.checked ? 'Yes' : 'No',
    });
  }

  // Toggle checked condition
  isChecked(control: string) {
    return this.enrollForm.get(control)?.value === 'Yes';
  }

    isOpen = false;

openPicker() {
  this.isOpen = true;
}

selectDate(event: any) {
  const value = event.detail.value;

  // 🔥 IMPORTANT
  console.log(value);
  this.enrollForm.get('billingStartDate')?.setValue(value);
  this.enrollForm.get('billingStartDate')?.markAsTouched();

  this.isOpen = false;
}





}



