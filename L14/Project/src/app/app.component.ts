/* Robert Freiseisen  30.9.2020
   HTBLA Leonding     4BHIF */

import {Component, OnInit} from '@angular/core';
import {Person} from 'src/app/app.person';
import {PersonService} from './app.person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'PersonManager';
  public searchString: string = '';
  public actCountry: string = '';
  public imgUrl: string = '';

  private findCurrentId() : number{
    return this.personSevice.persons[length - 1].id + 1;
  }
  public personSevice: PersonService;

  constructor(ps: PersonService) {
    this.personSevice = ps;
  }

  ngOnInit(): void {
    this.personSevice.findAll();
  }

  // Sort persons by country
  sortByCountry() {
    console.log("bin in country");

    this.personSevice.persons.sort((a, b) => a.country.localeCompare(b.country));
  }

  // Add Person
  onAdd(firstname: string, lastname:string ){
    this.personSevice.addPerson(new Person(this.findCurrentId(), 'M', firstname, lastname, 'Austria'));
  }

  // Sort persons by LastName
  sortByLastName() {
    console.log("bin in LastName");

    this.personSevice.persons.sort((a, b) => a.lastname.localeCompare(b.lastname));
  }

  // Sort persons by FirstName
  sortByFirstName() {
    console.log("bin in FirstName");

    this.personSevice.persons.sort((a, b) => a.firstname.localeCompare(b.lastname));
  }

  public matches(person): boolean {
    return person.country.toUpperCase().indexOf(this.actCountry.toLocaleUpperCase()) == 0;
  }

  public matchesSearch(person): boolean {
    return person.lastname.toUpperCase().indexOf(this.searchString.toUpperCase()) == 0;
  }

  public getColor(person): string {

    if (this.matches(person) == false) {
      return 'white';
    }

    return 'gray';

  }

  onDelete(id: number) {
    this.personSevice.delete(id);
    this.ngOnInit();
  }
}
