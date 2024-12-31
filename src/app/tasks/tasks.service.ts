import { Injectable } from "@angular/core";
import {type NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService{
 private tasks = [
    {
      id: 't1',
      userID: 'u1',
      title: 'Buy groceries',
      summary: 'Milk, Cheese, Pizza, Fruit, Tylenol',
      dueDate: '2021-07-02',
    },
    {
      id: 't2',
      userID: 'u2',
      title: 'Buy groceries',
      summary: 'Milk, Cheese, Pizza, Fruit, Tylenol',
      dueDate: '2021-07-02',
    },
    {
      id: 't3',
      userID: 'u3',
      title: 'Buy groceries',
      summary: 'Milk, Cheese, Pizza, Fruit, Tylenol',
      dueDate: '2021-07-02',
    }
  ];
  getUserTasks(userID: string){
    return this.tasks.filter(task => task.userID === userID);
  }
  addTask(taskData: NewTaskData, id: string){
    this.tasks.push({
        id: Math.random().toString(),
        userID: id,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate
     });
  }
  removeTask(id: string){
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}