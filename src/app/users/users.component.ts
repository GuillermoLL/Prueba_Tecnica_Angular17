import { CommonModule } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { UserCardComponent } from './user-card/user-card.component'
import { UserEditModalComponent } from './user-edit-modal/user-edit-modal.component'
import { UsersService } from './users.service'
import { User } from './interface/User'
import { Subscription } from 'rxjs'
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserCardComponent, UserEditModalComponent, HttpClientModule],
  providers: [UsersService],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit, OnDestroy {
  usersList: User[] = []
  $subscriptions: Subscription[] = []
  loading = true

  constructor (private readonly usersService: UsersService) { }

  ngOnInit (): void {
    this.usersService.getUser(1).subscribe()
    this.usersService.postUser({
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://reqres.in/img/faces/2-image.jpg'
    }).subscribe()
    this.usersService.putUser(2, {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://reqres.in/img/faces/2-image.jpg'
    }).subscribe()
    this.usersService.patchUser(2, {
      last_name: 'Weaver',
      email: 'janet.weaver@reqres.in'
    }).subscribe()
    this.usersService.deleteUser(2).subscribe()

    this.$subscriptions.push(
      this.usersService.getAllUser().subscribe((users) => { this.usersList = users; this.loading = false })
    )
  }

  ngOnDestroy (): void {
    this.$subscriptions.forEach((sub) => sub.unsubscribe())
  }
}
