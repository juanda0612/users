import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  id:string | null = null
  userForm:FormGroup

  constructor(private userService:UserService, private route:ActivatedRoute, private formBuilder:FormBuilder){
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id){
      this.getUser()
    }
  }

  getUser(){
    this.userService.getUser(this.id).subscribe({
      next: response=>{
        console.log("Get request successful", response)
        this.userForm.patchValue(response)
      },
      error: error=>{
        console.error("There was an error with the Get request!",error)
      }
    })
  }

  updateUser(){
    const body = this.userForm.value
    this.userService.updateUser(this.id,body).subscribe({
      next: response=>{
        console.log('Patch request successful!', response)
      },
      error: error=>{
        console.error('There was an error with the Patch request',error)
      }
    })
  }

  createUser(){
    const body = this.userForm.value

    this.userService.createUser(body).subscribe({
      next: response => {
        console.log('Post request successful', response)
      },
      error: error => {
        console.error("There was an error with the Post request!", error)
      }
    })
  }

  onSubmit(){
    if(this.id){
      this.updateUser()
    }else{
      this.createUser()
    }
  }

  deleteUser(){
    this.userService.deleteUser(this.id).subscribe({
      next: response => {
        console.log('Delete request successful', response)
      },
      error: error => {
        console.error('There was an error with the Delete request', error)
      }
    })
  }
}