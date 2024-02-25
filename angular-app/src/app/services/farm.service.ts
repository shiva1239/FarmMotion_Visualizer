import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Farm } from '../models/farm.model';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  private apiUrl = 'http://localhost:8080/farms'; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  getAllFarms(): Observable<Farm[]> {
    return this.http.get<Farm[]>(`${this.apiUrl}/all`);
  }

  getFarmById(id: number): Observable<Farm> {
    return this.http.get<Farm>(`${this.apiUrl}/${id}`);
  }

  createFarm(farm: Farm): Observable<Farm> {
    return this.http.post<Farm>(`${this.apiUrl}/create`, farm);
  }

  updateFarm(id: number, farm: Farm): Observable<Farm> {
    return this.http.put<Farm>(`${this.apiUrl}/update/${id}`, farm);
  }

  deleteFarm(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
