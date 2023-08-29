import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  images = [
    {
      imageSrc: '../../../../assets/salon/1.jpeg',
      imageAlt: 'photo du salon de réflexologie de Céline'
    },
    {
      imageSrc: '../../../../assets/salon/2.jpeg',
      imageAlt: 'photo du salon de réflexologie de Céline'
    },
    {
      imageSrc: '../../../../assets/salon/3.jpeg',
      imageAlt: 'photo du salon de réflexologie de Céline'
    },
    {
      imageSrc: '../../../../assets/salon/4.jpeg',
      imageAlt: 'photo du salon de réflexologie de Céline'
    }
  ]
}
