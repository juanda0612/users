import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  userIde: string|null = null

  constructor(private userService: UserService){}
  
  ngOnInit(){
    this.userIde = this.userService.getUserIde()
  }

}
