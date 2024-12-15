import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, CommonModule } from '@angular/common';
import { NavBarComponent } from '../../../components/nav-bar/nav-bar.component';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sigin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgClass,
    NavBarComponent// Importa el componente NavBar si es standalone.
  ],
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css'],
})
export class SiginComponent {
  siginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router ) {
    this.siginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.auth.register(this.siginForm.value) // Llama al método `login`.
      .then(() => this.router.navigate(['/login']))
      .catch((error) => console.error('Error en el inicio de sesión', error));
  }
}
