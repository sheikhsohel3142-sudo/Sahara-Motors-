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
  IonCol,
  IonRow,
  IonLabel,
  IonSelectOption,
  IonButton,
  IonIcon,
  IonSelect,
  IonInput,
  IonText,
  IonModal,
  IonDatetime,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-new-driver',
  templateUrl: './add-new-driver.page.html',
  styleUrls: ['./add-new-driver.page.scss'],
  standalone: true,
  imports: [
    IonDatetime,
    IonModal,
    IonButton,
    IonLabel,
    IonText,

    IonInput,
    IonCard,
    IonGrid,
    IonRow,
    IonIcon,
    IonCol,
    IonButton,
    IonContent,
    CommonModule,
    FormsModule,
    IonSelectOption,
    ReactiveFormsModule,
    IonSelect,
    RouterLink,
  ],
})
export class AddNewDriverPage implements OnInit {
  driverForm!: FormGroup;

  selectedFiles: { [key: string]: File[] } = {};
  constructor(private fb: FormBuilder) {
;
  }
  //  Validators.pattern('^[0-9]{10}$')
  //  Validators.pattern('^[0-9]{10}$')

  ngOnInit() {
    this.driverForm = this.fb.group({
      driverName: ['', Validators.required],
      phoneNumber: ['', [Validators.required]],
      emergencyContact: ['', [Validators.required]],
      address: ['', Validators.required],
      license: ['', Validators.required],
      aadhaar: ['', Validators.required],
      policeVerification: ['', Validators.required],
      medicalCertificate: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      employmentType: ['', Validators.required],
      assignBus: [''],
      assignRoute: [''],
      monthlySalary: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.driverForm.valid) {
      console.log(this.driverForm.value);
    } else {
      this.driverForm.markAllAsTouched();
    }
  }

  // onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.selectedFile1 = file;
  //     this.selectedFile2 = file;
  //     this.selectedFile3 = file;
  //     this.selectedFile4 = file;

  //   }
  // }

  // removeFile(event: Event) {
  //   event.stopPropagation();
  //   this.selectedFile1 = null;
  //   this.selectedFile2 = null;
  //   this.selectedFile3 = null;
  //   this.selectedFile4 = null;
  // }

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
  isOpen = false;

  openPicker() {
    this.isOpen = true;
  }

  selectDate(event: any) {
    const value = event.detail.value;

    // 🔥 IMPORTANT
    console.log(value);
    this.driverForm.get('dateOfJoining')?.setValue(value);
    this.driverForm.get('dateOfJoining')?.markAsTouched();

    this.isOpen = false;
  }
}
