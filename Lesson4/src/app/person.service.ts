import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  http: HttpClient;
  constructor(http: HttpClient) { 
    this.http = http;
  }
  persons : Person[] = [];

  public getData(){
    return this.http.get<Person[]>('../assets/persons.json').subscribe(data => this.persons = data)
  }


 

}
