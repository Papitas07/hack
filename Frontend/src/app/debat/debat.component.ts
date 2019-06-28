import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debat',
  templateUrl: './debat.component.html',
  styleUrls: ['./debat.component.scss']
})
export class DebatComponent implements OnInit {
  cards=[

  {

    title: 'Canicule',
    description: 'Faut-il fermer les écoles en période de canicule?',
    buttonText: 'Pour',
    buttonTextUn: 'Contre',
    buttonTextDeux: 'Sans Opinion',
    img: 'https://www.lechorepublicain.fr/photoSRC/VVNUJ1paUTgIBhVOCRAHHQ4zRSkXaldfVR5dW1sXVA49/canicule_4391585.jpeg'
  },
  {
    title: 'Eclairage',
    description: 'Doit-on couper l\'éclairage public de nuit ?',
    buttonText: 'Pour',
    buttonTextUn: 'Contre',
    buttonTextDeux: 'Sans Opinion',
    img: './assets/eclairage.png'
  },
  {
    title: 'Parking ',
    description: 'Faut-il un parking de 500 places ?',
    buttonText: 'Pour',
    buttonTextUn: 'Contre',
    buttonTextDeux: 'Sans Opinion',
    img: './assets/Parking2.png'
  },
  {
    title: 'Trotinette',
    description: 'Les trottinettes électriques sont-elles un danger?',
    buttonText: 'Pour',
    buttonTextUn: 'Contre',
    buttonTextDeux: 'Sans Opinion',
    img: './assets/trotinette.png'
  },
  {
    title: 'Déchets',
    description: 'Doit on taxer les citoyens qui ne trient pas leurs déchets ?',
    buttonText: 'Pour',
    buttonTextUn: 'Contre',
    buttonTextDeux: 'Sans Opinion',
    img: './assets/dechet.png'
  },
  {
    title: 'Mairie',
    description: 'Doit on utiliser le budget annuel pour restaurer la mairie ?',
    buttonText: 'Pour',
    buttonTextUn: 'Contre',
    buttonTextDeux: 'Sans Opinion',
    img: './assets/mairie.png'
  },

];
slides: any = [[]];
chunk(arr, chunkSize) {
  let R = [];
  for (let i = 0, len = arr.length; i < len; i += chunkSize) {
    R.push(arr.slice(i, i + chunkSize));
  }
  return R;
}
ngOnInit() {
  this.slides = this.chunk(this.cards, 3);
}
}
