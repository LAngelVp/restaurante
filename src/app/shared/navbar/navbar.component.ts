import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
      nombre: 'Quejas y sujerencias',
      direccion: '/buzon-de-quejas-y-sugerencias'
    },
    {
      nombre: 'Contacto',
      direccion: ''
    },
  ];

  @ViewChild('barra_navegacion') burger!: ElementRef;
  @HostListener('document: click', ['$event'])
  clic_opcion(event : Event){
    if (this.burger.nativeElement.classList.contains('show')){
      this.burger.nativeElement.classList.remove('show');
    }
  }

  scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
