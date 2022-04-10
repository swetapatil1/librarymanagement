import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  currentUser: User = {
    name: '',
    userId: '',
    emailId: ''
  };
  message = '';
  constructor(
    private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.message = '';
    this.getUser(this.route.snapshot.params['id']);
  }
  getUser(id: string): void {
    this.UserService.get(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updateUser(): void {
    this.message = '';
    this.UserService.update(this.currentUser.id, this.currentUser)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This User was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  deleteUser(): void {
    this.UserService.delete(this.currentUser.userId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/Users']);
        },
        error => {
          console.log(error);
        });
  }

}
