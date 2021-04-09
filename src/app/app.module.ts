import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { TitleImageComponent } from './title-image/title-image.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotographyComponent } from './photography/photography.component';
import { CameraComponent } from './camera/camera.component';
import { LinkShortenerComponent } from './link-shortener/link-shortener.component';
import { LinkShortenerNewComponent } from './link-shortener-new/link-shortener-new.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleImageComponent,
    ChangelogComponent,
    AccountsComponent,
    ProjectsComponent,
    LoginComponent,
    HomeComponent,
    PhotographyComponent,
    CameraComponent,
    LinkShortenerComponent,
    LinkShortenerNewComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      // @ts-ignore
      apiKey: process.env.FIREBASE_APIKEY,
      // @ts-ignore
      authDomain: process.env.FIREBASE_AUTHDOMAIN,
      // @ts-ignore
      projectId: process.env.FIREBASE_PROJECTID,
      // @ts-ignore
      storageBucket: process.env.FIREBASE_STORAGEBUCKET,
      // @ts-ignore
      messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
      // @ts-ignore
      appId: process.env.FIREBASE_APPID,
      // @ts-ignore
      measurementId: process.env.FIREBASE_MEASUREMENTID
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
