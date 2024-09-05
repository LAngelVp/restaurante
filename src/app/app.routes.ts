import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'menu-de-alimentos',
        component: MenuComponent
    },
    {
        path:'informacion-de-contacto',
        component: ContactComponent
    }
];
