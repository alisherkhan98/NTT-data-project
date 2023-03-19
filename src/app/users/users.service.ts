import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// interfaces
import { User } from '../models';
// rxjs
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  token = '00433d1f956cfc74f9a7ad1464083a802811c89f1d23d109c5ff2fae24d2228e';
  userUrl = "https://gorest.co.in/public/v2/users"
  constructor(private http: HttpClient) {}

  // function to fetch user specifying page number and how many items per page you want
  getUsers(page: number, perPage: number, searchText:string|null = null) :Observable<HttpResponse<User[]>> {
  let query = ''
     if(searchText){
      query=`&name=${searchText}`
    }
    return this.http.get<User[]>(
      this.userUrl + `?page=${page}&per_page=${perPage}${query}`,
      {
        observe:"response",
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
  }
}
