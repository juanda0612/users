import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-consumo',
  standalone: true,
  imports: [],
  templateUrl: './consumo.component.html',
  styleUrl: './consumo.component.css'
})
export class ConsumoComponent implements OnInit {
  userIde: string|null = null

  constructor(private userService: UserService){}
  
  ngOnInit(){
    this.userIde = this.userService.getUserIde()
  }



}
