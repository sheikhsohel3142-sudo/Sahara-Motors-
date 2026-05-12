import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { addCircleOutline, addOutline,  calendarClearOutline,  chevronBackOutline, chevronDownOutline, close, closeCircleOutline, filterOutline, menuOutline, search, shareSocialOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonRouterOutlet, IonApp],
})
export class AppComponent {
  
  constructor() {
    this.addIonIcon()
  }
  
  addIonIcon(){
    addIcons({
     chevronBackOutline,
     chevronDownOutline,
     close,
     addCircleOutline,
     addOutline,
     closeCircleOutline,
     search,
     shareSocialOutline,
     menuOutline,
     calendarClearOutline,
     timeOutline,
     filterOutline
    })
  }
}
