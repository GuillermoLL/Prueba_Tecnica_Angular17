import { Injectable, signal } from '@angular/core'
import { AddUser, User } from '../interface/User'

@Injectable({
  providedIn: 'root'
})
export class UserEditModalService {
  public show = signal<boolean>(false)
  public user = signal<AddUser | User>({})

  public toggleModal (): void {
    this.show.update((status) => !status)
    console.log(this.show(), this.user())
  }
}
