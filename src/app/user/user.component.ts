import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input() avatar!: string;
  // @Input() name!: string;
  // selectedUser: signal(DUMMY_USERS[randomIndex]);
  //  @Output() select = new EventEmitter();
  user = input.required<User>();
  imagePath = computed(() => `assets/users/${this.user().avatar}`);
  select = output<string>();
  selected = input.required<boolean>();
  onClick() {
    this.select.emit(this.user().id);
  }
}
