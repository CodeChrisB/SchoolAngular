import { Component, Input } from '@angular/core';
import { Person} from '../app/person'
import { PersonService } from './person.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //data
  @Input() person : Person;
  title : String = 'Bookless';
  search : string = '';
  fname: string = 'Chris'
  lname: string = 'Buch'
  country: string = 'Austria'
  email: string = "c.buchberger01@gmail.com"
  actCountry : string = ''
  
  //create variable for service
  public ps;
  public persons = []
  //set data into variable from service
  constructor(ps:PersonService){
     this.ps = ps;
     console.log(ps.getData())
  }

  ngOnInit(){
    this.persons = this.ps.getData();
  }

  //matches last name
  public match(name: string) : boolean{
    if(this.search=='') return true
    return name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0;
  }

  // filter list by firstname
  public sortByFirstname() {
   this.persons.sort((a,b) => a.firstname.localeCompare(b.firstname))
  }
  public sortByLastname() {
    this.persons.sort((a,b) => a.lastname.localeCompare(b.lastname))
   }
  public sortByCountry() {
    this.persons.sort((a,b) => a.country.localeCompare(b.country))
  }

  //get Color
  public getColor(country : string){
    if(country == this.actCountry)
    return '#ABABAB'
  }

  
  //add a new Customer
  public addCustomer() {
    var lastId =-1;
    this.persons.forEach(p =>{
      lastId = p.id>lastId ? p.id : lastId;
    })
    lastId++;

   var c =
   {"firstname" : this.fname,
   "lastname": this.lname, 
   "id":lastId,
   "gender":"M",
   "email":this.email,
   "country": this.country,
   "age":-1,
   "registered":false}

   this.persons.push(c)
   alert('Added ' +this.lname +" "+this.fname)
  }

  public deleteCustomer(index:number){
    this.persons.splice(index,1)
  }


  onDeleteMe(i:number){
    this.deleteCustomer(i);
  }



}
