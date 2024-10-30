import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { UserService } from './servicios/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'RenewableEnergies';
  userIde: string|null = null

  constructor(public userService: UserService, private router: Router){}
  
  ngOnInit(){
    this.userIde = this.userService.getUserIde()
  }

  logout(){
    this.userService.logout()
    this.router.navigate(['user/logout'])
  }

  isLoggedIn():boolean{
    return this.userService.isLoggedIn()
  }
}
