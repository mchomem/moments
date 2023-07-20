import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MomentDetailComponent } from './components/pages/moment-detail/moment-detail.component';
import { MomentEditComponent } from './components/pages/moment-edit/moment-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'moment/new', component: NewMomentComponent },
  { path: 'moment/detail/:id', component: MomentDetailComponent },
  { path: 'moment/edit/:id', component: MomentEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
