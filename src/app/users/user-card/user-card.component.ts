import { Component, input } from '@angular/core'
import { User } from '../interface/User'

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html'
})
export class UserCardComponent {
  user = input.required<User>()
}
