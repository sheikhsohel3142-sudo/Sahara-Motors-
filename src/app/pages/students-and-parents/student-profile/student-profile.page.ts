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
  IonButton,
  IonCol,
  IonLabel,
  IonSelectOption,
  IonRow,
  IonGrid,
  IonIcon,
  IonToggle,
  IonInput,
  IonSelect,
  IonText,
  IonModal, IonDatetime } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.page.html',
  styleUrls: ['./student-profile.page.scss'],
  standalone: true,
  imports: [IonDatetime, 
    IonModal,
    IonText,
    IonInput,
    IonToggle,
    IonIcon,
    IonGrid,
    IonRow,
    IonLabel,
    IonCol,
    IonButton,
    IonCard,
    IonContent,
    CommonModule,
    FormsModule,
    IonSelectOption,
    ReactiveFormsModule,
    IonSelect,
    RouterLink,
    FormsModule,
  ],
})
export class StudentProfilePage implements OnInit {
  isActive: boolean = true;
  studentForm!: FormGroup;
  billingForm!: FormGroup;
  activityLog = [
    { date: '01 Sep 2024', message: 'Student enrolled' },
    { date: '10 Oct 2024', message: 'Status changed to Paused' },
    { date: '05 Nov 2024', message: 'Billing resumed' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.studentForm = this.fb.group({
      studentName: ['', Validators.required],
      admissionNumber: [''],

      grade: ['', Validators.required],
      section: [''],

      school: ['', Validators.required],
      route: ['', Validators.required],

      pickupStop: ['', Validators.required],
      assignedBus: ['', Validators.required],

      parentName: ['', Validators.required],
      relationship: ['', Validators.required],

      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
      ],
      email: ['', Validators.email],

      billingStartDate: ['', Validators.required],

      receiveNotice: ['Yes'],
      complimentaryStudent: ['Yes'],
      billingType: ['Billable'],
      studentStatus: ['Pause'],
      disableNotice: ['Yes'],

      active: [true],
    });
    this.billingForm = this.fb.group({
      monthlyFare: [
        '',
        [
          Validators.required,
          Validators.min(1), // minimum amount
          Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$'), // decimal allowed
        ],
      ],

      billingStartDate: ['', [Validators.required]],

      outstandingDues: [
        '',
        [Validators.min(0), Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')],
      ],
    });
  }
  get f() {
    return this.billingForm.controls;
  }

  updateStudent() {
    console.log(this.studentForm.value);
  }

  toggleChange(event: any, control: string) {
    this.studentForm.patchValue({
      [control]: event.detail.checked ? 'Yes' : 'No',
    });
  }

  // Toggle checked condition
  isChecked(control: string) {
    return this.studentForm.get(control)?.value === 'Yes';
  }
  isOpen = false;

  openPicker() {
    this.isOpen = true;
  }

  selectDate(event: any) {
    const value = event.detail.value;

    // 🔥 IMPORTANT
    console.log(value);
    this.studentForm.get('billingStartDate')?.setValue(value);
    this.studentForm.get('billingStartDate')?.markAsTouched();

    this.billingForm.get('billingStartDate')?.setValue(value);
    this.billingForm.get('billingStartDate')?.markAsTouched();

    this.isOpen = false;
  }
}
