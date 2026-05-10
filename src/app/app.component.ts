import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonHeader, IonToolbar, IonButtons, IonTitle, IonButton, IonSplitPane, IonMenu, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { HomePage } from "./home/home.page";
import { ProfilePage } from "./pages/profile/profile.page";
import { SidebarComponent } from "./component/layout/sidebar/sidebar.component";
import { Router, RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircleOutline, addOutline, calendar, calendarClearOutline, calendarOutline, chevronBackOutline, chevronDownOutline, close, closeCircle, closeCircleOutline, filterOutline, informationCircleOutline, menuOutline, search, shareSocialOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonRouterOutlet, RouterOutlet, IonApp],
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
