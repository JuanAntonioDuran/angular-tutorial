import { Component,EventEmitter ,Input, Output } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../../models/task.model';
import { CommonModule } from '@angular/common';
import { TaskEvent } from '../../../models/taskEvent.model';


@Component({
  selector: 'app-task-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-resume.component.html',
  styleUrl: './task-resume.component.css'
})
export class TaskResumeComponent {

  @Input()
  task:Task = new Task (1,"Tarea 1", "Descripción Tarea 1",TaskPriority.LOW,TaskStatus.PENDING,new Date("11/1/2024"),new Date("11/18/2024"),false);

  @Output()
  eventTaskModify = new EventEmitter<TaskEvent>();


  raiseTaskPriority(taskId:number){
    
    this.eventTaskModify.emit(new TaskEvent("raiseTaskPriority", taskId))
  }

  lowerTaskPriority(taskId:number){
    this.eventTaskModify.emit(new TaskEvent("lowerTaskPriority", taskId))
  }
  changeTaskStatus(taskId:number){
    this.eventTaskModify.emit(new TaskEvent("changeTaskStatus", taskId))
  }
  editTask(taskId:number){
    this.eventTaskModify.emit(new TaskEvent("editTask", taskId))
  }
  deleteTask(taskId:number){
    this.eventTaskModify.emit(new TaskEvent("deleteTask", taskId))
  
  }
  
}
