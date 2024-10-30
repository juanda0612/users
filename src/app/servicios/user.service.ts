import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../clases/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string='http://localhost:8080/user'
  private userIde: string|null = null

  constructor(private http:HttpClient) { }

  getUserList():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

  getUser(id:string | null): Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`)
  }

  validateUser(id:string|null,pass:string|null): Observable<{'valid':boolean}>{
    const headers = new HttpHeaders({
      'Content-Type':'text/plain'
    })
    return this.http.post<{'valid':boolean}>(`${this.url}/validate/${id}`, pass, { headers })
  }

  getUserProfile(id:string|null): Observable<User>{
    return this.http.get<User>(`${this.url}/profile/${id}`)
  }
/*
  getLoginUser(id:string | null, pass:string|null): Observable<User>{
    const headers = new HttpHeaders({
      'Content-Type':'text/plain'
    })
    const params = new HttpParams()
      .set('password',pass ? pass : '')
    return this.http.get<User>(`${this.url}/profile/${id}`,{headers,params})
  }
*/
  createUser(data:User):Observable<User>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    })
    return this.http.post<User>(this.url,data,{headers})
  }

  updateUser(id: string|null, data: User): Observable<User>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    })
    return this.http.put<User>(`${this.url}/${id}`,data,{headers})
  }

  deleteUser(id: string|null): Observable<void>{
    this.logout()
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  login(userIde: string):void {
    this.userIde = userIde
    localStorage.setItem('userIde',userIde)
  }

  logout(): void{
    this.userIde = null
    localStorage.removeItem('userIde')
  }

  getUserIde(): string|null {
    if(!this.userIde){
      this.userIde = localStorage.getItem('userIde')
    }
    return this.userIde
  }

  isLoggedIn(): boolean {
    return this.userIde != null
  }
}
