import { Component, effect, ElementRef, inject, viewChild } from '@angular/core'
import { UserEditModalService } from './user-edit-modal.service'
import { AddUser, User } from '../interface/User'
import { UsersService } from '../users.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-user-edit-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-edit-modal.component.html'
})
export class UserEditModalComponent {
  private readonly modalService = inject(UserEditModalService)
  private readonly usersService = inject(UsersService)

  modal = viewChild.required<ElementRef>('modal')

  user: AddUser | User
  id: number
  editMode: boolean = false
  saving: boolean = false

  constructor () {
    this.user = {}
    this.id = 0

    effect(() => {
      if (this.modalService.show()) { this.showAnimation() }
    })
    effect(() => {
      this.user = this.modalService.user()
      if (Object.keys(this.user).length > 0) {
        this.editMode = true
        this.id = (this.modalService.user() as User).id
      } else {
        this.editMode = false
      }
    })
  }

  createEditUser (): void {
    this.saving = true
    const send = this.editMode
      ? this.usersService.putUser(this.id, this.user)
      : this.usersService.postUser(this.user)

    send.subscribe((resp) => {
      const userInList = this.usersService.UsersList.findIndex((user) => user.id === resp.id)
      userInList > -1
        ? this.usersService.UsersList[userInList] = resp
        : this.usersService.UsersList.push(resp)

      this.usersService.$Users.next(this.usersService.UsersList)
      this.saving = false
      this.hideAnimation()
    })
  }

  private showAnimation (): void {
    this.modal().nativeElement.classList.remove('hidden')
    this.modal().nativeElement.classList.add('flex')
    setTimeout(() => {
      this.modal().nativeElement.classList.remove('opacity-0')
    }, 20)
  }

  hideAnimation (): void {
    this.modal().nativeElement.classList.add('opacity-0')
    setTimeout(() => {
      this.modal().nativeElement.classList.add('hidden')
      this.modal().nativeElement.classList.remove('flex')
      this.modalService.toggleModal()
    }, 150)
  }
}
