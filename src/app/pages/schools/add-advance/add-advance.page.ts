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
  IonIcon,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonInput, IonModal, IonText, IonDatetime } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-advance',
  templateUrl: './add-advance.page.html',
  styleUrls: ['./add-advance.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonText, IonModal, 
    IonButton,
    IonCol,
    IonRow,
    IonGrid,
    IonCard,
    IonIcon,
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
    RouterLink
  ],
})
export class AddAdvancePage implements OnInit {
  busForm!: FormGroup;
  selectedFile: any;

  fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Electric'];

  school2s = ['SRV', 'ARLM', 'DAV', 'Public School'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.busForm = this.fb.group({
      expenseCategory: ['', Validators.required],
      expenseDate: ['', Validators.required],
      amount: ['', Validators.required],
    
      notesOptional: ['', Validators.required],
    });
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
   isInvalid(controlName: string) {
    const control = this.busForm.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }

  submitForm() {
    if (this.busForm.valid) {
      console.log(this.busForm.value);
    } else {
      this.busForm.markAllAsTouched();
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  removeFile(event: Event) {
    event.stopPropagation();
    this.selectedFile = null;
  }
  isOpen = false;

openPicker() {
  this.isOpen = true;
}

selectDate(event: any) {
  const value = event.detail.value;

  // 🔥 IMPORTANT
  console.log(value);
  this.busForm.get('expenseDate')?.setValue(value);
  this.busForm.get('expenseDate')?.markAsTouched();

  this.isOpen = false;
}
}
