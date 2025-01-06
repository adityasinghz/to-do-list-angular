import { Component, input, Output, output } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';
import { inject } from '@angular/core';
@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.removeTask(this.task().id);
  }
}
