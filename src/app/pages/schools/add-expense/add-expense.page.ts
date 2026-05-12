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
  IonCol,
  IonSelectOption,
  IonIcon,
  IonGrid,
  IonRow,
  IonCard,
  IonInput,
  IonSelect,
  IonText,
  IonLabel,
  IonModal,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
  standalone: true,
  imports: [
    IonModal,
    IonLabel,
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
    IonText,
  ],
})
export class AddExpensePage implements OnInit {
  addExpense!: FormGroup;
  selectedFile: any;

  fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Electric'];

  school2s = ['SRV', 'ARLM', 'DAV', 'Public School'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addExpense = this.fb.group({
      expenseCategory: ['', Validators.required],
      expenseDate: ['', Validators.required],
      amount: ['', Validators.required],
      paidBy: ['', Validators.required],
      uploadInvoice: ['', Validators.required],
      notesOptional: ['', Validators.required],
    });
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  submitForm() {
    if (this.addExpense.valid) {
      console.log(this.addExpense.value);
    } else {
      this.addExpense.markAllAsTouched();
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
    this.addExpense.get('expenseDate')?.setValue(value);
    this.addExpense.get('expenseDate')?.markAsTouched();

    this.isOpen = false;
  }
}
