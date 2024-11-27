import { Component, OnInit } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../../models/task.model';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';
import { TaskResumeComponent } from '../task-resume/task-resume.component';
import { TaskEvent } from '../../../models/taskEvent.model';
import { TaskformComponent } from '../taskform/taskform.component';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule,TaskResumeComponent,TaskformComponent],
  templateUrl:'./tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit{
  taskList:Task[] = [];
  taskToEdit?: Task;
modifyTask(taskEvent:TaskEvent){
  switch(taskEvent.action){
    case"raiseTaskPriority":this.raiseTaskPriority(taskEvent.taskId);break;
    case"lowerTaskPriority":this.lowerTaskPriority(taskEvent.taskId);break;
    case"changeTaskStatus":this.changeTaskStatus(taskEvent.taskId);break;
    case"editTask":this.editTask(taskEvent.taskId);break;
    case"deleteTask":this.deleteTask(taskEvent.taskId);break;
  }
}

  ngOnInit(): void {
    let task1:Task = new Task (1,"Tarea 1", "Descripción Tarea 1",TaskPriority.LOW,TaskStatus.PENDING,new Date("11/1/2024"),new Date("11/18/2024"),false);
    let task2:Task = new Task (2,"Tarea 2", "Descripción Tarea 2",TaskPriority.HIGH,TaskStatus.IN_PROGRESS,new Date("11/5/2024"),new Date("11/16/2024"),false);
    let task3:Task = new Task (3,"Tarea 3", "Descripción Tarea 3",TaskPriority.LOW,TaskStatus.IN_PROGRESS,new Date("11/21/2024"),new Date("11/30/2024"),false);
    let task4:Task = new Task (4,"Tarea 4", "Descripción Tarea 4",TaskPriority.HIGH,TaskStatus.COMPLETED,new Date("11/8/2024"),new Date("11/21/2024"),false);
    let task5:Task = new Task (5,"Tarea 5", "Descripción Tarea 5",TaskPriority.MEDIUM,TaskStatus.PENDING,new Date("11/10/2024"),new Date("11/30/2024"),false);
    this.taskList = [task1,task2,task3,task4,task5];
  }
  getTask(taskId:number):Task[]{
    return this.taskList.filter((tarea:Task)=>{
      return tarea.id == taskId;
    });
  }

  raiseTaskPriority(taskId:number){
    let tarea:Task = this.getTask(taskId)[0];
    tarea.raisePriority();
  }

  lowerTaskPriority(taskId:number){
    let tarea:Task = this.getTask(taskId)[0];
    tarea.lowerPriority();
  }
  changeTaskStatus(taskId:number){
    let tarea:Task = this.getTask(taskId)[0];
    tarea.changeStatus();
  }
  deleteTask(taskId:number){
    this.taskList = this.taskList.filter((tarea:Task)=>{
      return tarea.id != taskId;
    });
  }
  
  editTask(taskId: number): void {
    const taskToEdit = this.taskList.find(task => task.id == taskId);
  
      this.taskToEdit = taskToEdit; // Asignamos la tarea a editar
    
  }

  saveTask(newTask: Task): void {
    if (this.taskToEdit!=null) {
      // Editar tarea existente
      const index = this.taskList.findIndex((task) => task.id == this.taskToEdit?.id);
     
        this.taskList[index] = newTask;
      
      this.taskToEdit = undefined; // Limpiar la tarea en edición
    }
    }

  }
