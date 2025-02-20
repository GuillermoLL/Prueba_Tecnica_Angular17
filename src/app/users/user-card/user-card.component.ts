import { Component, input } from '@angular/core'
import { User } from '../interface/User'
import { UserEditModalService } from '../user-edit-modal/user-edit-modal.service'

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html'
})
export class UserCardComponent {
  user = input.required<User>()

  constructor (private readonly editModalService: UserEditModalService) {}

  public showEditModal (): void {
    this.editModalService.user.set(this.user())
    this.editModalService.toggleModal()
  }
}
