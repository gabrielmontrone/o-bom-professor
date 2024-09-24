import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * ApiService é responsável por gerenciar as interações com a API externa utilizada no projeto.
 * Ele fornece métodos para enviar requisições e receber respostas, facilitando a comunicação entre o frontend e o backend.
 * Este serviço é fundamental para integrar funcionalidades como a geração de sugestões de adaptação de atividades com o modelo de IA.
 */


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