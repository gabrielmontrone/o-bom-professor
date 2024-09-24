import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://backend-obomprofessor.vercel.app/generate';

  constructor(private http: HttpClient) {}

  generateFromApi(prompt: string): Observable<any> {
    return this.http.post(this.apiUrl, { prompt });
  }
}