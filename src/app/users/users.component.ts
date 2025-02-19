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

  constructor (private readonly usersService: UsersService) { }

  ngOnInit (): void {
    this.$subscriptions.push(
      this.usersService.getUsersObservable().subscribe((users) => { this.usersList = users })
    )
  }

  ngOnDestroy (): void {
    this.$subscriptions.forEach((sub) => sub.unsubscribe())
  }
}
