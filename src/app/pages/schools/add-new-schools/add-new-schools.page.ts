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
  IonGrid,
  IonContent,
  IonRow,
  IonCol,
  IonLabel,
  IonSelectOption,
  IonButton,
  IonCard,

  IonInput,
  IonSelect,
  IonIcon,
  IonText,
  IonModal, IonDatetime } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-new-schools',
  templateUrl: './add-new-schools.page.html',
  styleUrls: ['./add-new-schools.page.scss'],
  standalone: true,
  imports: [IonDatetime, 
    IonModal,
 
    IonText,
    IonIcon,
    IonInput,
    
    IonCard,
    IonButton,
    IonLabel,
    IonCol,
    IonRow,
  
    IonContent,
    IonGrid,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonSelectOption,
    IonSelect,
    RouterLink,
  ],
})
export class AddNewSchoolsPage {
  isInvalid(controlName: string) {
    const control = this.schoolForm.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }
  schoolForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.schoolForm = this.fb.group({
      schoolName: ['', Validators.required],
      schoolType: ['', Validators.required],
      affiliationBoard: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      primaryContactName: ['', Validators.required],
      contactPhone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      operatingDays: ['', Validators.required],
      schoolTimings: ['', Validators.required],
        startTime: ['', Validators.required],
  endTime: ['', Validators.required]
    });
  }

  submit() {
    if (this.schoolForm.invalid) {
      this.schoolForm.markAllAsTouched();
      return;
    }

    console.log(this.schoolForm.value);
    // API call yahan aayega
  }

isTimeOpen = false;

openTimePicker() {
  this.isTimeOpen = true;
}

selectTime(event: any) {
  const selectedTime = event.detail.value;


 const control = this.schoolForm.get('schoolTimings');

  // 🔥 अगर value नहीं है → validation trigger
   if (selectedTime) {
    // ✅ value set करो
    control?.setValue(selectedTime);

    // ✅ touched mark करो
    control?.markAsTouched();

    // ✅ validation update
    control?.updateValueAndValidity();
  }

  this.isTimeOpen = false;
}
onModalClose() {
  this.isTimeOpen = false;

  const control = this.schoolForm.get('schoolTimings');

  // 🔥 अगर user ने कुछ select नहीं किया
  if (!control?.value) {
    control?.markAsTouched();
    control?.updateValueAndValidity();
  }
    if (!this.schoolForm.value.startTime) {
    this.schoolForm.get('startTime')?.markAsTouched();
  }

  if (!this.schoolForm.value.endTime) {
    this.schoolForm.get('endTime')?.markAsTouched();
  }
}
formatTime(value: any): string {
  if (!value) return '';

  const date = new Date(value);

  let hours: any = date.getHours();
  let minutes: any = date.getMinutes();

  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${minutes} ${ampm}`;
}

selectStartTime(event: any) {
  const value = event.detail.value;
  this.schoolForm.get('startTime')?.setValue(value);
  this.schoolForm.get('startTime')?.markAsTouched();
}

// 👉 End Time
selectEndTime(event: any) {
  const value = event.detail.value;
  this.schoolForm.get('endTime')?.setValue(value);
  this.schoolForm.get('endTime')?.markAsTouched();
}
}
