import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, CommonModule } from '@angular/common';
import { NavBarComponent } from '../../../components/nav-bar/nav-bar.component';
import { AuthService } from '../../../services/auth.service';
import { PersonService } from '../../../services/person.service';
import { Router } from '@angular/router';
import { Person } from '../../../models/person.model';

@Component({
  selector: 'app-sigin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgClass,
    NavBarComponent
  ],
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css'],
})
export class SiginComponent {
  siginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private personService: PersonService,
    private router: Router
  ) {
    this.siginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      admin: [false] // Campo booleano para rol
    });
  }

  async register() {
    if (this.siginForm.valid) {
      const { email, password, name, surname, admin } = this.siginForm.value;

      try {
        // Registro del usuario en Firebase Authentication
        const userCredential = await this.auth.register({ email, password });
        const uid = userCredential.user.uid;

        // Crear objeto Person
        const person: Person = {
          uid,
          name,
          surname,
          email,
          role: admin ? 'admin' : 'user',
          createdAt: new Date().toISOString(),
        };

        // Guardar en Realtime Database
        await this.personService.savePerson(person);

        console.log('Usuario registrado y guardado:', person);
        this.router.navigate(['/login']);
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
    } else {
      console.error('Formulario inválido');
    }
  }

  onSubmit() {
    this.register();
  }
}


