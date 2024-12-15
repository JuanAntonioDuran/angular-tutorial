import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import {NavBarComponent} from '../../../components/nav-bar/nav-bar.component';
import {response} from 'express';
import {Router} from '@angular/router';
import {routes} from '../../../app.routes'; // Asegúrate de importar correctamente el componente de la barra de navegación.

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgClass,
    NavBarComponent, // Incluye el componente de la barra de navegación.
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.auth.login(this.loginForm.value).then().catch((error) => console.log(error));
  }

  onClick(
  ){
    this.auth.loginWithGoogle().then(()=>this.router.navigate(["/home"])).catch((error) => console.log(error));
  }
}
