import { Component, input } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'todo-project';
  selectedUserID: string = '';
  addTask = input.required<string>();
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserID)!;
  }
  onSelected(id: string) {
    this.selectedUserID = id;
  }
}
