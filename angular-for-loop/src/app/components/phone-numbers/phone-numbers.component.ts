import { Component } from '@angular/core';

export interface CountryPhone {

  nombre: string;
  flag: string;
  prefix: number[];


}

const COUNTRY_PREFIXES: CountryPhone[] = [

  { nombre: 'España', flag: 'spain/spain_640.png', prefix: [34] },
  { nombre: 'República Dominicana', flag: 'dominican_republic/dominican_republic_640.png', prefix: [809, 829, 849] }
];


@Component({
  selector: 'app-phone-numbers',
  templateUrl: './phone-numbers.component.html',
  styleUrl: './phone-numbers.component.css'
})
export class PhoneNumbersComponent {


  countryPhoneList = COUNTRY_PREFIXES;
  getFlagImg(flag: string) {
    return 'https://img.freeflagicons.com/thumb/round_icon/' + flag;
  }

}
