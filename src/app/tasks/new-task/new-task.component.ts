import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { inject } from '@angular/core';
import { type NewTaskData } from '../task/task.model';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
    @Input({required:true}) id!: string;
    @Output() close = new EventEmitter<void>();
    private tasksService = inject(TasksService);
    enteredTitle = '';
    enteredSummary = '';
    enteredDueDate = '';
    onClose(){
        this.close.emit();
    }
    onAddTask(){
      this.tasksService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate
      }, this.id);
      this.close.emit();
    }
 }
