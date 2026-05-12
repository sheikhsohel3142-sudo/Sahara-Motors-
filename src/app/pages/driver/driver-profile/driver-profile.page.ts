import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
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
  IonRow,
  IonCol,
  IonButton,
  IonGrid,

  IonLabel,
  IonIcon,
  IonSelectOption,
  
  IonSelect,
  IonInput,
  IonToggle,
  
  IonModal,
  IonText,
  IonDatetime,
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.page.html',
  styleUrls: ['./driver-profile.page.scss'],
  standalone: true,
  imports: [
    IonDatetime,
    IonText,
    IonModal,
    IonToggle,
    IonInput,
    IonIcon,
    IonLabel,
    IonGrid,
    IonButton,
    IonCol,
    IonRow,
    IonCard,
    IonContent,
    CommonModule,
    FormsModule,
    IonSelectOption,
    ReactiveFormsModule,
    NgFor,
    IonSelect,
    RouterLink,
  ],
})
export class DriverProfilePage implements OnInit {
  form!: FormGroup;
  salaryForm!: FormGroup;
  settlementForm!: FormGroup;

  selectedFiles: { [key: string]: File[] } = {};
  advanceList = [
    {
      date: '22/10/2025',
      reason: 'Personal',
      amount: 1500,
      status: 'Pending',
    },
    {
      date: '21/09/2025',
      reason: 'Medical',
      amount: 500,
      status: 'Pending',
    },
    {
      date: '12/08/2025',
      reason: 'Personal',
      amount: 400,
      status: 'Approved',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      driverName: ['', Validators.required],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
      ],
      emergencyContact: ['', Validators.pattern(/^[0-9]{10}$/)],
      address: ['',Validators.required],

      license: [null, Validators.required],

      aadhaar: [null, Validators.required],

      policeVerification: [null, Validators.required],

      medicalCertificate: [null, Validators.required],

      joiningDate: ['', Validators.required],
      employmentType: [''],
      assignBus: [''],
      assignRoute: [''],
    });

    this.salaryForm = this.fb.group({
      monthlySalary: ['', [Validators.required, Validators.min(1)]],
      advanceDate: ['', Validators.required],
      notesOptional: ['', Validators.required],
    });

    this.settlementForm = this.fb.group({
      monthlySalary: [1000],
      totalAdvances: [600],
      deductions: [1000],
      netPayable: [{ value: 0, disabled: false }],
    });

    this.calculateNetPayable();

    this.settlementForm.valueChanges.subscribe(() => {
      this.calculateNetPayable();
    });
  }

  calculateNetPayable() {
    const salary = this.settlementForm.get('monthlySalary')?.value || 0;
    const advances = this.settlementForm.get('totalAdvances')?.value || 0;
    const deductions = this.settlementForm.get('deductions')?.value || 0;

    const net = salary - advances - deductions;

    this.settlementForm.get('netPayable')?.setValue(net, { emitEvent: false });
  }

  addNewSchool() {
    this.router.navigate(['/', 'admin', 'schools', 'add-advance']);
  }
  onFileSelected(event: any, type: string) {
    const files: FileList = event.target.files;

    if (!files || files.length === 0) return;

    // Agar pehle se array nahi hai to initialize karo
    if (!this.selectedFiles[type]) {
      this.selectedFiles[type] = [];
    }

    // Saare selected files push karo
    for (let i = 0; i < files.length; i++) {
      this.selectedFiles[type].push(files[i]);
    }

    // Same file dobara select karne ke liye reset
    event.target.value = '';
  }

  removeFile(event: Event, type: string, index: number) {
    event.stopPropagation();

    if (this.selectedFiles[type]) {
      this.selectedFiles[type].splice(index, 1);

      // Agar empty ho jaye to delete bhi kar sakte ho
      if (this.selectedFiles[type].length === 0) {
        delete this.selectedFiles[type];
      }
    }
  }
  getStatusClass(status: string) {
    switch (status) {
      case 'Pending':
        return 'pending';
      case 'Approved':
        return 'approved';
      case 'Rejected':
        return 'rejected';
      default:
        return '';
    }
  }
  driverProfile() {}
  onSubmit() {
    if (this.salaryForm.valid) {
      console.log(this.salaryForm.value);
    }
  }
  isOpen = false;

  openPicker() {
    this.isOpen = true;
  }

  selectDate(event: any) {
    const value = event.detail.value;

    // 🔥 IMPORTANT
    console.log(value);
    this.form.get('joiningDate')?.setValue(value);
    this.form.get('joiningDate')?.markAsTouched();

    this.isOpen = false;
  }

    isOpen2 = false;

  openPicker2() {
    this.isOpen2 = true;
  }

  selectDate2(event: any) {
    const value = event.detail.value;

    // 🔥 IMPORTANT
    console.log(value);
    this.salaryForm.get('advanceDate')?.setValue(value);
    this.salaryForm.get('advanceDate')?.markAsTouched();

    this.isOpen = false;
  }
}
