import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
// modules
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
// material angular
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [UsersListComponent, UserDetailComponent, UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
})
export class UsersModule {}
