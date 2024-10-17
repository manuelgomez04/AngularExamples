import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  valoracion = 1

  getRatingClass() {
    if (this.valoracion < 5) {
      return 'red';
    } else
      return 'green';
  }
}
