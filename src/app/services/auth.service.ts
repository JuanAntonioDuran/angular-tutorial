import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, User } from '@angular/fire/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null>;

  constructor(private auth: Auth, private router: Router) {
    // Suscribirse al estado del usuario y actualizar el BehaviorSubject
    this.auth.onAuthStateChanged((user) => {
      this.currentUserSubject.next(user);
    });

    // Hacer el BehaviorSubject observable
    this.user$ = this.currentUserSubject.asObservable();
  }

  // Registrar un usuario con email y contraseña
  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Iniciar sesión con email y contraseña
  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Iniciar sesión con Google
  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  // Cerrar sesión
  logout() {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/login']); // Redirigir al login después de cerrar sesión
    });
  }
}
