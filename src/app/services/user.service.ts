import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api'; // Adjust the URL based on your backend API endpoint

  constructor(private http: HttpClient) { }

  login(loginDto: any): Observable<any> {
    return this.http.post<string>(`${this.apiUrl}/login`, loginDto);
  }

  signup(signUpDto: any): Observable<any> {
    return this.http.post<string>(`${this.apiUrl}/signup`, signUpDto);
  }
}
