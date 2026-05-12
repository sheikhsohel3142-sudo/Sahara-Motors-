import { Component } from '@angular/core';
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
  IonGrid,
  IonRow,
  IonCol,
  IonSelectOption,
  IonInput,
  IonToggle,

  IonSelect,

} from '@ionic/angular/standalone';

@Component({
  selector: 'app-configration',
  templateUrl: './configration.page.html',
  styleUrls: ['./configration.page.scss'],
  standalone: true,
  imports: [
  
    IonToggle,
    IonInput,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    CommonModule,
    FormsModule,
    IonSelectOption,
    ReactiveFormsModule,
    IonSelect,
  ],
})
export class ConfigrationPage {
  settingsForm!: FormGroup;
  presentingElement!: any;

  isAlertOpen = false;

  alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Save',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.settingsForm = this.fb.group({
      // Operational
      midMonthEnrollment: ['Yes'],
      autoDeactivateDropouts: ['Yes'],
      allowMultipleRoutes: ['Yes'],
      enableSchoolOperations: ['Yes'],

      fareCalculationMethod: ['Stop Based Fare', Validators.required],
      billingCycle: ['Monthly'],
      paymentDueGracePeriod: [5],
      lateFeeApplicable: ['Yes'],

      // Payment
      allowPartialPayments: ['Yes'],
      showOutstandingDues: ['Yes'],
      autoGenerateInvoices: ['Yes'],

      // Driver
      driverRouteVisibility: ['Assigned Routes Only'],
      allowDriverAttendance: ['Yes'],
      allowRouteChangeRequests: ['Yes'],

      paymentDueAlerts: ['Yes'],
      overduePaymentAlerts: ['Yes'],
      routeChangeNotifications: ['Yes'],
      maintenanceAlerts: ['Yes'],
    });
    this.presentingElement = document.querySelector(
      'ion-router-outlet',
    ) as HTMLElement;
  }

  // Toggle YES / NO convert
  toggleChange(event: any, control: string) {
    this.settingsForm.patchValue({
      [control]: event.detail.checked ? 'Yes' : 'No',
    });
  }

  // Toggle checked condition
  isChecked(control: string) {
    return this.settingsForm.get(control)?.value === 'Yes';
  }

  onFareChange(event: any) {
    this.settingsForm.patchValue({
      fareCalculationMethod: event.detail.value,
    });
  }
  submitForm() {
    this.isAlertOpen = true;
    console.log(this.settingsForm.value);
  }

  showUnsavedModal = false;

  openModal() {
    this.showUnsavedModal = true;
  }

  closeModal() {
    this.showUnsavedModal = false;
  }

  discardChanges() {
    console.log('Discard clicked');
    this.closeModal();
  }

  updateAndLeave() {
    console.log('Update clicked');
    this.closeModal();
  }
}
