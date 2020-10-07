import { Component, EventEmitter, OnInit } from '@angular/core';
import  {Input, Output} from '@angular/core';
import { Person } from '../person';
@Component({
  selector: 'person-row',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  constructor() { }

  @Input() person : Person;
  @Output()  deleteMe : EventEmitter<Person> = new EventEmitter<Person>();
  //getGenderImage
  public getGenderImage(gender : string){
    if(gender == 'F')
      return '../assets/images/woman.png'

    return '../assets/images/man.png'
  }


 

  public onDelete() : void{
    this.deleteMe.emit();
  }

  ngOnInit(): void {
  }

}
