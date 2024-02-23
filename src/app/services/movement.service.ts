import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movement } from '../models/movement.model';


@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private apiUrl = 'http://localhost:8080/movements'; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  getAllMovements(): Observable<Movement[]> {
    return this.http.get<Movement[]>(`${this.apiUrl}/all`);
  }

  getMovementById(id: number): Observable<Movement> {
    return this.http.get<Movement>(`${this.apiUrl}/${id}`);
  }

  createMovement(movement: Movement): Observable<Movement> {
    return this.http.post<Movement>(`${this.apiUrl}/create`, movement);
  }

  updateMovement(id: number, movement: Movement): Observable<Movement> {
    return this.http.put<Movement>(`${this.apiUrl}/update/${id}`, movement);
  }

  deleteMovement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
