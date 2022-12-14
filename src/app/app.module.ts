import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { EditeducationComponent } from './components/education/editeducation.component';
import { NeweducationComponent } from './components/education/neweducation.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewexperienciaComponent } from './components/experiencia/newexperiencia.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditProjectsComponent } from './components/projects/edit-projects.component';
import { NewProjectsComponent } from './components/projects/new-projects.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    BannerComponent,
    EducationComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginComponent,
    EditeducationComponent,
    NeweducationComponent,
    NewexperienciaComponent,
    EditexperienciaComponent,
    FooterComponent,
    EditAboutComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    EditProjectsComponent,
    NewProjectsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    NgCircleProgressModule.forRoot({"backgroundGradient": true,
    "backgroundColor": "#0d84bf",
    "backgroundGradientStopColor": "#000000",
    "backgroundOpacity": 0.2,
    "backgroundPadding": 4,
    "radius": 78,
    "maxPercent": 100,
    "unitsFontSize": "28",
    "unitsFontWeight": "900",
    "unitsColor": "#ffffff",
    "outerStrokeGradient": true,
    "outerStrokeWidth": 10,
    "outerStrokeColor": "#9b64dd",
    "outerStrokeGradientStopColor": "#00ff91",
    "innerStrokeColor": "#95bee4",
    "innerStrokeWidth": 0,
    "titleColor": "#ffffff",
    "titleFontSize": "29",
    "titleFontWeight": "900",
    "subtitleColor": "#ffffff",
    "subtitleFontSize": "14",
    "subtitleFontWeight": "900",
    "animationDuration": 3600,
    "showInnerStroke": false,
    "responsive": true,
    "startFromZero": false
  }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),

  ],

  providers: [
    interceptorProvider,
    { provide: BUCKET, useValue: 'my-bucket-name' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
