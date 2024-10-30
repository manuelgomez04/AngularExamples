import { Component, OnInit } from '@angular/core';
import { CustomEurPipe } from '../../pipes/custom-eur.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  titulo = 'Bienvenido a la página de inicio';
  price = 10.25;
  createdAt = '2021-04-20';
  porcentajeVida = 0.32;
  customEura: string | number =  0.25;

  constructor(private customEur: CustomEurPipe) { }
  ngOnInit(): void {
    this.customEura = this.customEur.transform(this.customEura);
  }
}
