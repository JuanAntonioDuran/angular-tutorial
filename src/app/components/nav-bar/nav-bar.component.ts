import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isAuthenticated: boolean = false; // Para manejar el estado autenticado del usuario

  constructor(private router: Router, private auth: AuthService) {
    // Suscribirse al observable del estado de autenticación
    this.auth.user$.subscribe(user => {
      // Actualizar el estado basado en la autenticación
      this.isAuthenticated = !!user;
      console.log('Usuario autenticado:', user); // Debug
    });
  }

  onClick(): void {
    this.auth.logout().then(()=>this.router.navigate(['/login'])).catch(error => console.log(error));
  }


}
