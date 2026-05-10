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
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonIcon,
  IonCard,
  IonCol,
  IonRow,
  IonGrid,
  IonSelectOption,
  IonSelect,
  IonItem,
  IonLabel,
  IonText,
  IonToggle,
  IonModal,
  IonDatetime,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-bill-profile',
  templateUrl: './bill-profile.page.html',
  styleUrls: ['./bill-profile.page.scss'],
  standalone: true,
  imports: [
    IonDatetime,
    IonModal,
    IonToggle,
    IonText,
    IonLabel,
    IonItem,
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
    RouterLink,
    IonSelect,
  ],
})
export class BillProfilePage implements OnInit {
  billDetailsForm!: FormGroup;
  selectedFile: any;
  billingForm!: FormGroup;
  paymentForm!: FormGroup;
  paymentRec!: FormGroup;
  dueForm!: FormGroup;
  isPaymentRecorded = false;

  fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Electric'];

  school2s = ['SRV', 'ARLM', 'DAV', 'Public School'];
  advanceList = [
    {
      date: '22/10/2025',
      reason: 1500,
      amount: 'UPI',
      status: 'TXN12345',
    },
    {
      date: '21/09/2025',
      reason: 500,
      amount: 'UPI',
      status: '',
    },
    {
      date: '12/08/2025',
      reason: 400,
      amount: 'UPI',
      status: 'TXN12345',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.billDetailsForm = this.fb.group({
      studentName: ['', Validators.required],
      parentsName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      billingMonth: ['', Validators.required],
      school: ['', Validators.required],
    });

    this.billingForm = this.fb.group({
      transportFare: [
        1000,
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern(/^\d+(\.\d{1,2})?$/),
        ],
      ],
      previousDue: [
        0,
        [Validators.min(0), Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
      lateFee: [
        0,
        [Validators.min(0), Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
      totalAmount: [
        1000,
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern(/^\d+(\.\d{1,2})?$/),
        ],
      ],
    });

    this.billingForm.valueChanges.subscribe((val) => {
      const total =
        Number(val.transportFare || 0) +
        Number(val.previousDue || 0) +
        Number(val.lateFee || 0);

      this.billingForm.patchValue({ totalAmount: total }, { emitEvent: false });
    });

    this.paymentForm = this.fb.group({
      amount: [1000, [Validators.required, Validators.min(1)]],

      mode: ['upi', [Validators.required]],

      date: ['2026-01-01', [Validators.required]],

      reference: [
        'aravin@axi123',
        [Validators.required, Validators.minLength(3)],
      ],

      notes: ['parent', [Validators.maxLength(100)]],

      totalBill: [1500, [Validators.required, Validators.min(1)]],

      paid: [1000, [Validators.required, Validators.min(0)]],

      balance: [500, [Validators.required, Validators.min(0)]],
    });

    this.dueForm = this.fb.group({
      currentDue: ['', [Validators.required, Validators.min(0)]],

      dueSince: ['', [Validators.required]],
    });
  }

  recordPayment() {
    if (this.paymentForm.valid) {
      const data = this.paymentForm.value;

      console.log('Payment Recorded', data);

      // API call yaha hota hai
      // this.paymentService.record(data)

      this.isPaymentRecorded = true;
    }
  }

  addNewRecord() {
    this.paymentForm.reset({
      amount: 1000,
      mode: 'upi',
      date: '2026-01-01',
      reference: 'aravin@axi123',
      notes: 'parent',
      totalBill: 1500,
      paid: 1000,
      balance: 500,
    });

    this.isPaymentRecorded = false;
  }

  submitForm() {
    if (this.billDetailsForm.valid) {
      console.log(this.billDetailsForm.value);
    } else {
      this.billDetailsForm.markAllAsTouched();
    }
  }

  sendReceiptWhatsapp() {
    const currentDue = this.dueForm.value.currentDue;
    const dueSince = this.dueForm.value.dueSince;

    const message = `Payment Receipt\n\nCurrent Due: ${currentDue}\nDue Since: ${dueSince}`;

    const phone = '917987298328'; // customer phone number

    const url =
      'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);

    window.open(url, '_blank');
  }

  // Send Payment Reminder
  sendPaymentReminder() {
    const currentDue = this.dueForm.value.currentDue;
    const dueSince = this.dueForm.value.dueSince;

    const message = `Reminder!\n\nYour pending due is ₹${currentDue} since ${dueSince}. Please clear the payment.`;

    const phone = '917987298328';

    const url =
      'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);

    window.open(url, '_blank');
  }

  sendWhatsapp() {
    const data = this.paymentForm.value;

    const message = `
Payment Receipt

Payment Amount : ${data.paymentAmount}
Payment Mode : ${data.paymentMode}
Payment Date : ${data.paymentDate}
Reference ID : ${data.referenceId}

Total Bill : ${data.totalBill}
Paid So Far : ${data.paidSoFar}
Outstanding Balance : ${data.outstandingBalance}

Notes : ${data.notes}
`;

    const encodedMessage = encodeURIComponent(message);

    // phone number change karo
    const phone = '917987298328';

    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  }

  downloadReceipt() {
    const data = this.paymentForm.value;

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Payment Receipt', 20, 20);

    doc.setFontSize(12);

    doc.text(`Payment Amount : ${data.paymentAmount}`, 20, 40);
    doc.text(`Payment Mode : ${data.paymentMode}`, 20, 50);
    doc.text(`Payment Date : ${data.paymentDate}`, 20, 60);
    doc.text(`Reference ID : ${data.referenceId}`, 20, 70);

    doc.text(`Total Bill : ${data.totalBill}`, 20, 90);
    doc.text(`Paid So Far : ${data.paidSoFar}`, 20, 100);
    doc.text(`Outstanding Balance : ${data.outstandingBalance}`, 20, 110);

    doc.text(`Notes : ${data.notes}`, 20, 130);

    doc.save('payment-receipt.pdf');
  }

  isOpen = false;

  openPicker() {
    this.isOpen = true;
  }

  selectDate(event: any) {
    const value = event.detail.value;

    // 🔥 IMPORTANT
    console.log(value);
    this.paymentForm.get('date')?.setValue(value);
    this.paymentForm.get('date')?.markAsTouched();

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
    this.dueForm.get('dueSince')?.setValue(value);
    this.dueForm.get('dueSince')?.markAsTouched();

    this.isOpen = false;
  }
}
