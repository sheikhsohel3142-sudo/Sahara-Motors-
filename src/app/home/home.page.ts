import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonContent, RouterModule],
})
export class HomePage {
  constructor() {}
}
