import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosApiURL = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
  constructor( private http: HttpClient) { }

  getTodos(): Observable<any[]>{
    // Let's connect with rest api backend 
    // What's the REST API Endpoint? https://jsonplaceholder.typicode.com/todos?_limit=5
    // What's the HTTP MEthod? GET
    // What's the REST API Client tool? HttpClient 

    return this.http.get<any[]>(this.todosApiURL)
  }
}
