import { Component } from '@angular/core';

@Component({
  selector: 'app-footerbar',
  standalone: true,
  imports: [],
  templateUrl: './footerbar.component.html',
  styleUrl: './footerbar.component.sass'
})
export class FooterbarComponent {
  correo: string = 'ejemplo@ejemplo.com';

}
