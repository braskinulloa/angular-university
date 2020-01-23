import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DirectiveFormComponent } from './Components/directive-form/directive-form.component';

//para rutas y forms
import { APP_ROUTING } from './app.routes';
import { HttpClientModule, HttpClientXsrfModule, HttpClientJsonpModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AutoCompleteDecimalDirective } from './Directives/auto-complete-decimal.directive';
import { JumbotronComponent } from './Components/jumbotron/jumbotron.component';
import { HomeComponent } from './Components/home/home.component';
import { PipeFormComponent } from './Components/pipe-form/pipe-form.component';
import { AutoCompleteDecimalPipe } from './Pipes/auto-complete-decimal.pipe';
import { AutoCompleteDateDirective } from './Directives/auto-complete-date.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormParaComponentsComponent } from './Components/form-para-components/form-para-components.component';
import { DazaGenericosModule } from './Modules/dazgenericos/daza-genericos.module';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { AdfRestTestComponent } from './Components/adf-rest-test/adf-rest-test.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DazaChartsTestComponent } from './Components/daza-charts-test/daza-charts-test.component';
import { ApiUseComponent } from './Components/api-use/api-use.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DirectiveFormComponent,
    AutoCompleteDecimalDirective,
    JumbotronComponent,
    HomeComponent,
    PipeFormComponent,
    AutoCompleteDecimalPipe,
    AutoCompleteDateDirective,
    FormParaComponentsComponent,
    AdfRestTestComponent,
    DazaChartsTestComponent,
    ApiUseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ScrollDispatchModule,
    DazaGenericosModule,
    NgxEchartsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
