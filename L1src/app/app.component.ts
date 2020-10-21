import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : String  = '#ABCDEF';
  public match : string = ' ';
  public visible : boolean = true;
  public persons = ["Aigner", "Buchberger","Egger","Freiseisen"]; 

  public personsJSON = 
  [{name:"Elias",age:16},
  {name:"Christopher",age:19},
  {name:"Sebastian",age:16},
  {name:"Robert",age:17}];
    
  //Onclick handler
  public onClick() : void{
    //this.title= 'Button clicked'
    this.visible =!this.visible;
    console.log((this.visible ? 'Opend': 'Closed') + ' list' )
  };


  //getTitle
  public getTitle() : string {
    return this.title+""
  }

  //reverse title
  public reverseTitle() {
    let str = this.title
    var newString = '';
      for (var i = str.length - 1; i >= 0; i--) {
          newString += str[i];
      }
    return '#' + newString.substr(0,this.title.length-1);
  } 

  public matches(name : String) : boolean {
    return name.includes(this.match) //true
  }

}
