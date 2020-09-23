import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : String  = '#ABCDEF';
  public visible : boolean = true;

    
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
    let str = this.title;
    var newString = '';
      for (var i = str.length - 1; i >= 0; i--) {
          newString += str[i];
      }
    return newString;
  } 

}
