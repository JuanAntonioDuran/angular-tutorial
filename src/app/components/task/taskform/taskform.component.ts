import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { dateValidator, prioridadValidator } from './taskform.validatos';
import { Task, TaskStatus } from '../../../models/task.model';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css'
})
export class TaskformComponent {
  formTaskEdit : FormGroup;


  @Input() 
  taskToEdit?: Task;
  @Output() 
  taskCreated = new EventEmitter<Task>()

  constructor(formBuilder: FormBuilder){
    this.formTaskEdit = formBuilder.group({
      'nombre' : ['',[Validators.required, Validators.maxLength(50)]],
      'descripcion' : ['',[Validators.required, Validators.maxLength(250)]],
      'prioridad': ['', [Validators.required, prioridadValidator()]],
      'fechaExpiracion' : ['',[Validators.required, dateValidator()]]
    });
  }

  onSubmit() : void {
    if (this.formTaskEdit.valid){
      const datos = this.formTaskEdit.value;

      const nuevaTarea = new Task (
        Math.floor(Math.random()*500),
        datos.nombre,
        datos.descripcion,
        datos.prioridad,
        TaskStatus.PENDING,
        datos.fechaExpiracion,
        new Date(datos.fechaExpiracion),
        false
      );
      
      this.taskCreated.emit(nuevaTarea);
      this.formTaskEdit.reset();//Limpia los imputs
    } else{
      console.log(`El formulario tiene errores: ${this.formTaskEdit.get('name')?.errors}`)
    }
  }

}