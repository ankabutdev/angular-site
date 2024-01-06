import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'navbar2', component: Navbar2Component },
    { path: 'home-navbar', component: HomeNavbarComponent },
    { path: '**', component: NotFoundComponent }
];
