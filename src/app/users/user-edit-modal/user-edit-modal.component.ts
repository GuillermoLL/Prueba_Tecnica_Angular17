import { Component, effect, ElementRef, input, viewChild } from '@angular/core'
import { UserEditModalService } from './user-edit-modal.service'
import { AddUser, User } from '../interface/User'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-edit-modal',
  standalone: true,
  imports: [],
  templateUrl: './user-edit-modal.component.html'
})
export class UserEditModalComponent {
  modal = viewChild.required<ElementRef>('modal')

  user: AddUser
  id: number
  editMode = input<boolean>(false)

  constructor (private readonly modalService: UserEditModalService, private readonly usersService: UsersService) {
    this.user = modalService.user()
    this.id = 0

    if (this.editMode()) {
      this.id = (modalService.user() as User).id
    }

    effect(() => {
      if (this.modalService.show()) { this.showAnimation() }
    })
  }

  createEditUser (): void {
    if (this.editMode()) { this.usersService.putUser(this.id, this.user) }
    this.usersService.postUser(this.user)

    this.hideAnimation()
  }

  private showAnimation (): void {
    this.modal().nativeElement.classList.remove('hidden')
    setTimeout(() => {
      this.modal().nativeElement.classList.remove('opacity-0')
    }, 20)
  }

  hideAnimation (): void {
    this.modal().nativeElement.classList.add('opacity-0')
    setTimeout(() => {
      this.modal().nativeElement.classList.add('hidden')
      this.modalService.toggleModal()
    }, 150)
  }
}
