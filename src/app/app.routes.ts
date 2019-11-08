import { RouterModule, Routes } from '@angular/router';
import { DirectiveFormComponent } from './Components/directive-form/directive-form.component';
import { HomeComponent } from './Components/home/home.component';
import { PipeFormComponent } from './Components/pipe-form/pipe-form.component';
import { FormParaComponentsComponent } from './Components/form-para-components/form-para-components.component';



const APP_ROUTES: Routes = [
  //{ path: '', component:},
  { path: '', component: HomeComponent},
  { path: 'directive-form', component: DirectiveFormComponent},
  { path: 'pipe-form', component: PipeFormComponent},
  { path: 'components-form', component: FormParaComponentsComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
