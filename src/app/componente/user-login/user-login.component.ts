import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../servicios/user.service';
import { User } from '../../clases/user';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent /*implements OnInit*/ {
  id:string | null = null
  password:string | null = null
  loginError:string | null = null
  userForm:FormGroup

  constructor(private userService:UserService, private route:ActivatedRoute, private formBuilder:FormBuilder, private router:Router){
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
/*
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id){
      this.getUser()
    }
  }

  getLoginUser(){
    this.userService.getLoginUser(this.id, this.password).subscribe({
      next: (response: any) => {
        console.log(response)
      },
      error: (error: any) => {
        console.error("error",error)
        this.loginError = 'Usuario o contraseña incorrectos.'
      }
    })
  }

  getUser(){
    this.userService.getUser(this.id).subscribe({
      next: (response: any)=>{
        console.log("Get request successful", response)
        this.userForm.patchValue(response)
      },
      error: (error: any)=>{
        console.error("error",error)
      }
    })
  }
*/
onSubmit() {
  this.loginError = null; // Resetear el error antes de intentar el login
  this.id = this.userForm.value.userName
  this.password = this.userForm.value.password
  console.log(this.id,this.password)
  this.userService.validateUser(this.id, this.password).subscribe({
    next: (response) => {
      console.log(response)
      if (response.valid) {
        // Si la validación es exitosa, obtener el perfil del usuario
        this.userService.getUserProfile(this.id).subscribe({
          next: (user: User) => {
            console.log('Usuario logueado:', user);
            this.userService.login(user.userName);
            // Aquí puedes almacenar el usuario en un servicio o en el estado de tu aplicación
            this.router.navigate(['/home']); // Redirigir a la página deseada
          },
          error: (err) => {
            console.error('Error al obtener el perfil:', err);
            this.loginError = 'No se pudo obtener el perfil del usuario.';
          }
        });
      } else {
        this.loginError = 'Credenciales incorrectas. Intenta de nuevo.';
      }
    },
    error: (err) => {
      console.error('Error en la validación:', err);
      this.loginError = 'Ocurrió un error en la validación.';
    }
  });
}
}
