import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DirectiveFormComponent } from './Components/directive-form/directive-form.component';

//para rutas y forms
import { APP_ROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AutoCompleteDecimalDirective } from './Directives/auto-complete-decimal.directive';
import { JumbotronComponent } from './Components/jumbotron/jumbotron.component';
import { HomeComponent } from './Components/home/home.component';
import { PipeFormComponent } from './Components/pipe-form/pipe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DirectiveFormComponent,
    AutoCompleteDecimalDirective,
    JumbotronComponent,
    HomeComponent,
    PipeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
