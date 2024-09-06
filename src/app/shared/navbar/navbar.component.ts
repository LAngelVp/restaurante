import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
  lista_direcciones = [
    {
      nombre: 'Inicio',
      direccion: ''
    },
    {
      nombre: 'Menu',
      direccion: '/menu-de-alimentos'
    },
    {
      nombre: 'Contacto',
      direccion: '/informacion-de-contacto'
    }
  ];

}
