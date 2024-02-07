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
import { register } from 'swiper/element/bundle';
import { ContactComponent } from './contact/contact.component';
import { PlombierComponent } from './plombier/plombier.component';
import { BrasseurComponent } from './brasseur/brasseur.component';
import { ElectricienComponent } from './electricien/electricien.component';


const appRoutes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'batiment', component:BatimentComponent },
  { path: 'alimentation', component:AlimentationComponent },
  { path: 'fabrication', component:FabricationComponent },
  { path: 'services', component:ServicesComponent },
  { path: 'Home', component:AppComponent},
  { path: 'about/electricien', component:ElectricienComponent},
  { path: 'about/brasseur', component:BrasseurComponent},
  { path: 'about/plombier', component:PlombierComponent},
  { path: '**', component:Error404Component },
];

register();


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
    ContactComponent,
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
