import { Injectable } from '@angular/core';
import { Person } from './app.person';
import {HttpClient}from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  http: HttpClient;
  public persons;

  constructor(http: HttpClient) {
    this.http = http;
  }

  // GET-Request: Liefert Respnse als Observable
  getData():void {
    this.http.get<Person[]>('assets/persons.json').subscribe(data => this.persons=data);
  }

}
