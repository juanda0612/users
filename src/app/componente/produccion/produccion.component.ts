import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-produccion',
  standalone: true,
  imports: [],
  templateUrl: './produccion.component.html',
  styleUrl: './produccion.component.css'
})
export class ProduccionComponent implements OnInit {
  userIde: string|null = null

  constructor(private userService: UserService){}
  
  ngOnInit(){
    this.userIde = this.userService.getUserIde()
  }

}
