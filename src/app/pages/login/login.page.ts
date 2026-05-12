import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent,  IonItem,  IonButton, IonInput } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton,  IonItem, IonContent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ser:AuthService,
    private router:Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // this.ser.islogin(this.loginForm.value).subscribe((res)=>{
      //   console.log('login Success', res)
        this.router.navigate(['admin'])
  //     } 
    
  // )
    }
  }


}
