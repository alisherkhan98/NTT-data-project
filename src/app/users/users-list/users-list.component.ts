import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'src/app/models';
// services
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: Array<User> = [];
  length = '';
  pageNumber = 1;
  perPage = 10;
  pageSizeOptions = [5, 10, 25];
  isFetching = false;

  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    // fetching first users to display on initialization
    this.displayUsers(this.pageNumber, this.perPage);
  }

  // function to fetch users from API
  displayUsers(page: number, perPage: number, searchText:string|null = null) {
    this.isFetching = true;
    this.usersService.getUsers(page, perPage, searchText).subscribe((data) => {
      this.users = data.body!;
      this.length = data.headers.get('X-Pagination-Total')!;
      this.isFetching= false
    });
  }

  // function that triggers on page change, fetching the users from the next page
  handlePageEvent(event: PageEvent) {
    console.log(event);
    this.perPage = event.pageSize;
    this.pageNumber = event.pageIndex + 1;
    this.displayUsers(this.pageNumber, this.perPage);
  }
}
