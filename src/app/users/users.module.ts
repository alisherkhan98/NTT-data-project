import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
// modules
import { UsersRoutingModule } from './users-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatPaginatorModule

  ]
})
export class UsersModule { }
