import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes,RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { BatimentComponent } from './batiment/batiment.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { SwiperModule } from 'swiper/types/shared';
import Swiper from 'swiper';


const appRoutes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'batiment', component:BatimentComponent },
  { path: 'alimentation', component:AlimentationComponent },
  { path: 'fabrication', component:FabricationComponent },
  { path: 'services', component:ServicesComponent },
  { path: '**', component:Error404Component },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    FabricationComponent,
    BatimentComponent,
    AlimentationComponent,
    HomeComponent,
    Error404Component,
    ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
