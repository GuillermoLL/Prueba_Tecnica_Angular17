import { Injectable } from '@angular/core'
import { Observable, ReplaySubject } from 'rxjs'
import { User, UserResponse } from './interface/User'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly url = 'https://reqres.in/api/users'
  private readonly $Users = new ReplaySubject<User[]>()

  constructor (private readonly http: HttpClient) {}

  getUsersObservable (): Observable<User[]> {
    this.http.get<UserResponse>(this.url).subscribe(elm => {
      this.$Users.next(elm.data)
    })

    return this.$Users
  }

  // getUser (): User {

  // }

  // putUser (): User {

  // }

  // postUser (): User {

  // }

  // patchUser (): User {

  // }

  // deleteUser (): User {

  // }
}
