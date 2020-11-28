import {Injectable} from '@angular/core';
import {Person} from './app.person';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  http: HttpClient;
  public persons;
  url: string = 'http://localhost:8080/person';

  constructor(http: HttpClient) {
    this.http = http;
  }

  // GET-Request: Liefert Response als Observable
  findAll(): void {
    this.http.get<Person[]>(this.url + '/findAll').subscribe(data => this.persons = data);
  }

  addPerson(person:Person): void {
    this.persons.append(person)
    this.persons.push(person);
    const body = JSON.stringify(this.persons);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = {
      headers: headers
    }
    this.http.post<Person>(this.url + ('/add'), body, options).subscribe(data => this.persons = data);
  }

  delete(id : number):void{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = {
      headers: headers
    }

    this.http.delete<Person>(this.url + '/delete/' + id, options).subscribe(data => this.persons = data);
  }

}
