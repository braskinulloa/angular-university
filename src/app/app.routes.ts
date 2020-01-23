import { RouterModule, Routes } from '@angular/router';
import { DirectiveFormComponent } from './Components/directive-form/directive-form.component';
import { HomeComponent } from './Components/home/home.component';
import { PipeFormComponent } from './Components/pipe-form/pipe-form.component';
import { FormParaComponentsComponent } from './Components/form-para-components/form-para-components.component';
import { AdfRestTestComponent } from './Components/adf-rest-test/adf-rest-test.component';
import { DazaChartsTestComponent } from './Components/daza-charts-test/daza-charts-test.component';
import { ApiUseComponent } from './Components/api-use/api-use.component';


const APP_ROUTES: Routes = [
  //{ path: '', component:},
  { path: '', component: HomeComponent},
  { path: 'directive-form', component: DirectiveFormComponent},
  { path: 'pipe-form', component: PipeFormComponent},
  { path: 'components-form', component: FormParaComponentsComponent},
  { path: 'adf_rest_test', component: AdfRestTestComponent},
  { path: 'daza-charts', component: DazaChartsTestComponent},
  { path: 'api-use', component: ApiUseComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
