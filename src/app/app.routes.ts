import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MebersComponent } from './components/mebers/mebers.component';
import { CoreCaluesComponent } from './components/core-calues/core-calues.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'members', component: MebersComponent },
  { path: 'core-calues', component: CoreCaluesComponent },
  { path: 'contact', component: ContactComponent },
];
