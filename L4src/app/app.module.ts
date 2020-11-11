import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './person.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
