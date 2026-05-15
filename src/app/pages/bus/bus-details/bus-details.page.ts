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
  IonButton,
  IonCol,
  IonIcon,
  IonSelectOption,
  IonRow,
  IonGrid,
  IonCard,
  IonSelect,
  IonInput,
  IonLabel,
  IonText,
  IonToggle,
  IonModal, IonDatetime } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.page.html',
  styleUrls: ['./bus-details.page.scss'],
  standalone: true,
  imports: [IonDatetime, 
    IonModal,
    IonToggle,
    IonText,
    IonLabel,
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
    RouterLink
  ],
})
export class BusDetailsPage implements OnInit {
  isActive: boolean = true;
  addExpense() {}
  busForm!: FormGroup;
  selectedFile: File | null = null;

  fuelTypes: string[] = ['Petrol', 'Diesel', 'CNG', 'Electric'];
  schools: string[] = ['SRV', 'ARLM', 'ABC School'];

  revenues = [
    { year: 2025, month: 'December', amount: '$500.00', type: 'Vendor' },
    { year: 2025, month: 'November', amount: '$500.00', type: 'Vendor' },
    { year: 2025, month: 'October', amount: '$500.00', type: 'Vendor' },
    { year: 2025, month: 'September', amount: '$500.00', type: 'Vendor' },
    { year: 2025, month: 'August', amount: '$500.00', type: 'Vendor' },
    { year: 2025, month: 'July', amount: '$500.00', type: 'Vendor' },
  ];

  expenses = [
    {
      date: '22/10/2025',
      category: 'Maintenance',
      amount: '$8500',
      paidBy: 'Vendor',
    },
    {
      date: '22/10/2025',
      category: 'Maintenance',
      amount: '$8500',
      paidBy: 'Vendor',
    },
    {
      date: '22/10/2025',
      category: 'Maintenance',
      amount: '$8500',
      paidBy: 'Vendor',
    },
    {
      date: '22/10/2025',
      category: 'Maintenance',
      amount: '$8500',
      paidBy: 'Vendor',
    },
    {
      date: '22/10/2025',
      category: 'Maintenance',
      amount: '$8500',
      paidBy: 'Vendor',
    },
    {
      date: '22/10/2025',
      category: 'Maintenance',
      amount: '$8500',
      paidBy: 'Vendor',
    },
  ];

  profits = [
    {
      month: 'December',
      totalRevenue: '$127,500',
      totalExpenses: '$62,500',
      netProfit: '$65,000',
      status: 'profit',
    },
    {
      month: 'November',
      totalRevenue: '$128,500',
      totalExpenses: '$142,500',
      netProfit: '$0',
      status: 'Loss',
    },
    {
      month: 'Octobar',
      totalRevenue: '$128,500',
      totalExpenses: '$142,500',
      netProfit: '$65,000',
      status: 'Loss',
    },
    {
      month: 'September',
      totalRevenue: '$128,500',
      totalExpenses: '$142,500',
      netProfit: '$65,000',
      status: 'Loss',
    },
    {
      month: 'Augest',
      totalRevenue: '$128,500',
      totalExpenses: '$142,500',
      netProfit: '$65,000',
      status: 'Loss',
    },
  ];

  constructor(
    private fb: FormBuilder,
    // private http: HttpClient,
    // private toastCtrl: ToastController
    private router: Router,
  ) {}

  isInvalid(controlName: string) {
    const control = this.busForm.get(controlName);
    return control && control.invalid && (control.touched || control.dirty);
  }

  ngOnInit() {
    this.initForm();
    this.calculateProfit();
  }
  addNewSchool() {
    this.router.navigate(['/', 'admin', 'schools', 'add-expense']);
  }

  // ✅ Form Initialize
  initForm() {
    this.busForm = this.fb.group({
      busRegistrationNumber: ['', Validators.required],
      seatingCapacity: ['', [Validators.required, Validators.min(1)]],
      fuelType: ['', Validators.required],
      assignSchool: ['', Validators.required],
      route: ['', Validators.required],
      serviceStartDate: ['', Validators.required],
      activeStudents: ['', Validators.required],
      uploadInvoice: ['', Validators.required],
      monthlyRevenue: ['', Validators.required],
      monthlyExpenses: ['', Validators.required],
      netProfit: [{ value: '', disabled: false }],
    });
  }

  // ✅ Auto Calculate Net Profit
  calculateProfit() {
    this.busForm.valueChanges.subscribe((value) => {
      const revenue = Number(value.monthlyRevenue) || 0;
      const expenses = Number(value.monthlyExpenses) || 0;
      const profit = revenue - expenses;

      this.busForm.patchValue({ netProfit: profit }, { emitEvent: false });
    });
  }

  // ✅ File Upload
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
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

  // ✅ Submit Form
   submitForm() {
    // if (this.busForm.invalid) {
    //   this.showToast('Please fill all required fields');
    //   return;
    // }
    // const formData = new FormData();
    // const formValues = this.busForm.getRawValue();
    // // Append all form fields
    // Object.keys(formValues).forEach(key => {
    //   formData.append(key, formValues[key]);
    // });
    // Append file
    //   if (this.selectedFile) {
    //     formData.append('insuranceCertificate', this.selectedFile);
    //   }
    //   // 🔥 API CALL
    //   this.http.post('https://your-api-url.com/api/bus/create', formData)
    //     .subscribe({
    //       next: (res: any) => {
    //         console.log('Success:', res);
    //         this.showToast('Bus Registered Successfully');
    //         this.busForm.reset();
    //       },
    //       error: (err) => {
    //         console.error('Error:', err);
    //         this.showToast('Something went wrong');
    //       }
    //     });
    // }
    // ✅ Toast Message
    // async showToast(message: string) {
    //   const toast = await this.toastCtrl.create({
    //     message,
    //     duration: 2000,
    //     position: 'top',
    //     color: 'primary'
    //   });
    //   toast.present();
    // }
   }
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
}
