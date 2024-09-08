import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { QuejasComponent } from './pages/quejas/quejas.component';

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
    },
    {
        path: 'buzon-de-quejas-y-sugerencias',
        component: QuejasComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];
