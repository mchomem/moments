import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MomentNewComponent } from './components/pages/moment-new/moment-new.component';
import { MomentFormComponent } from './components/moment-form/moment-form.component';
import { MessageComponent } from './components/message/message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentDetailComponent } from './components/pages/moment-detail/moment-detail.component';
import { MomentEditComponent } from './components/pages/moment-edit/moment-edit.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    MomentNewComponent,
    MomentFormComponent,
    MessageComponent,
    MomentDetailComponent,
    MomentEditComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
