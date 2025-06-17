import { inject, Injectable } from '@angular/core'
import { map, Observable, ReplaySubject } from 'rxjs'
import { EditResponse, User, UserResponse, Response, AddUser } from './interface/User'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = 'https://reqres.in/api/users'

  UsersList: User[] = []
  $Users = new ReplaySubject<User[]>()
  total: number = 0
  page: number = 0
  totalPages: number = 0

  getAllUser (page: number = 1, perPage: number = 3): Observable<User[]> {
    if (page <= 0) { page = 1 }

    this.http.get<Response<User[]>>(this.apiUrl + `?per_page=${perPage}&page=${page}`).subscribe(resp => {
      this.UsersList = resp.data
      this.total = resp.total
      this.page = resp.page
      this.totalPages = resp.total_pages
      this.$Users.next(this.UsersList)
    })
    return this.$Users
  }

  getUser (id: number): Observable<User> {
    return this.http.get<UserResponse>(this.apiUrl + `/${id}`).pipe(map(resp => resp.data))
  }

  postUser (user: AddUser): Observable<EditResponse> {
    return this.http.post<EditResponse>(this.apiUrl, user)
  }

  putUser (id: number, user: AddUser): Observable<EditResponse> {
    return this.http.put<EditResponse>(this.apiUrl + `/${id}`, user)
  }

  patchUser (id: number, user: AddUser): Observable<EditResponse> {
    return this.http.patch<EditResponse>(this.apiUrl + `/${id}`, user)
  }

  deleteUser (id: number): Observable<{}> {
    return this.http.delete<{}>(this.apiUrl + `/${id}`)
  }
}
