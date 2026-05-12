import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf} from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent,  IonCard, IonGrid, IonRow, IonCol, IonLabel, IonItem, IonButton, IonInput, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonCard, IonGrid, IonRow, IonCol, IonLabel, IonItem, IonButton, IonInput, IonList, ReactiveFormsModule, NgIf]
})
export class ProfilePage implements OnInit {
isInvalid(arg0: string): any {
throw new Error('Method not implemented.');
}

 profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bankDetails: ['', Validators.required],
      currency: ['', Validators.required],

      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      primaryContact: ['', Validators.required],
      gst: ['', [Validators.required, Validators.minLength(10)]],
      timeZone: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });  
  

    
  }

  submitForm() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    console.log('Form Data:', this.profileForm.value);
  }


}



