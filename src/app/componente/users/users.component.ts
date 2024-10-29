import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../clases/user';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  user:User[]=[]
  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.listaUser()
  }

  listaUser(){
    this.userService.getUserList().subscribe({
      next:(data: User[])=>{
        this.user=data
        console.log(this.user)
      }
    })
  }
}
