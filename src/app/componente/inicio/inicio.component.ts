import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicios/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
