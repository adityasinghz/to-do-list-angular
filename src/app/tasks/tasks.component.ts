import { Component, inject, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData} from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  id = input.required<string>();
  name = input.required<string>();
  isAddTask = false;
  private tasksService = inject(TasksService);
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.id());
  }
  onAddNewTask(){
      this.isAddTask = true;
  }
  onCloseAddTask(){
    this.isAddTask = false;
  }
  onCompleteTask(id: string){
    this.tasksService.removeTask(id);
  }
  // onAddTask(taskData:NewTaskData){
  //   this.tasksService.addTask(taskData, this.id());
  //    this.isAddTask = false;
  // }
}
