import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DishesModule } from './dishes/dishes.module';
import { AdvertisingComponent } from './layout/advertising/advertising.component';
import { DishesComponent } from './dishes/dishes.component';

import { DishesListComponent } from './dishes/dishes-list/dishes-list.component';
import { DishDetailsComponent } from './dishes/dish-details/dish-details.component';
import { AddDishComponent } from './dishes/add-dish/add-dish.component';

import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './layout/404/page404.component';
import { AboutusComponent } from './layout/aboutus/aboutus.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const appRoutes: Routes =[
  { 
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    component: AdvertisingComponent
  },
  { 
    path: 'menu',
    component: DishesListComponent,
    children: [
      {
        path: 'list',
        component: DishesListComponent
      },
      {
        path: 'details',
        component: DishDetailsComponent
      },
      {
        path: 'add-dish',
        component: AddDishComponent
      },
    ],
  },
  {
    path: 'login',
    component: SignInComponent
  },
  // {
  //   path: 'signup',
  //   component: SignUpComponent
  // },
  { 
    path: '**', 
    redirectTo: "home",
    pathMatch: "full"
  }
];


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    AdvertisingComponent,
    DishesComponent,
    Page404Component,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DishesModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
