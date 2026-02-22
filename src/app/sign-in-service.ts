import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCredential } from './sign-in/user-credential.model';
import { User } from './sign-in/users.model';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(private http: HttpClient) {}

  signIn(credentials: UserCredential): Observable<User> {
    return this.http.post<User>('http://localhost:3000/sign-in', credentials);
  }

}
