import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from '../../components/nav-bar/nav-bar.component';
import {TaskformComponent} from '../../components/task/taskform/taskform.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, NavBarComponent, NavBarComponent, TaskformComponent, FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private auth: AuthService, private router :Router ) {
  }

  onClick(){
    this.auth.logout().then(()=>this.router.navigate(['/login'])).catch(error => console.log(error));
  }
}
