import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { MomentNewComponent } from './components/pages/moment-new/moment-new.component';
import { MomentDetailComponent } from './components/pages/moment-detail/moment-detail.component';
import { MomentEditComponent } from './components/pages/moment-edit/moment-edit.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { UserDeleteComponent } from './components/pages/user-delete/user-delete.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'moment/new', component: MomentNewComponent },
  { path: 'moment/detail/:id', component: MomentDetailComponent },
  { path: 'moment/edit/:id', component: MomentEditComponent },
  { path: 'user-profile/:id', component: UserProfileComponent },
  { path: 'user-profile-delete/:id', component: UserDeleteComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
