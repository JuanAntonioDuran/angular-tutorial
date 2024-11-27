import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthComponent } from './components/auth/auth.component';
import { SiginComponent } from './components/auth/sigin/sigin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TaskformComponent } from './components/task/taskform/taskform.component';
import { TasklistComponent } from './components/task/tasklist/tasklist.component';
import { ImgAleatoriaComponent } from './components/task/img-aleatoria/img-aleatoria.component';
import { FormsModule } from '@angular/forms';
import { TaskResumeComponent } from './components/task/task-resume/task-resume.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AuthComponent, SiginComponent, LoginComponent, TaskformComponent, TasklistComponent,ImgAleatoriaComponent,RouterLink,FormsModule,TaskResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '@jdufer0405';

  randomInt():number{
    return Math.random()*10;
  }
}
