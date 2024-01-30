import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes,RouterModule } from '@angular/router';
import { ListofartisanComponent } from './listofartisan/listofartisan.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component:AppComponent},
  { path: 'listofartisan', component:ListofartisanComponent},
  { path: '', component:AppComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListofartisanComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
