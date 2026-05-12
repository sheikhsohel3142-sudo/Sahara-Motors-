import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { IonMenu, IonContent, IonList, IonItem, IonIcon, IonLabel, MenuController, IonSplitPane, IonRouterOutlet,  IonFab, IonFabButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [IonFabButton, IonFab, IonMenu, IonContent, IonList, IonItem, IonIcon, IonLabel, IonSplitPane, IonRouterOutlet, RouterLink, RouterModule, RouterLinkActive],
})
export class SidebarComponent  implements OnInit {
    isCollapsed = false;
   

  constructor(private router: Router,
    public menu: MenuController
  ) {
    this.router.events.subscribe(event =>{
      console.log('router event',event)
    })
   }

   

openMenu() {
  this.menu.open();
}

  ngOnInit() {}



toggleSidebar() {
  const menu = document.querySelector('ion-menu');
  this.isCollapsed = !this.isCollapsed;

  if (this.isCollapsed) {
    menu?.classList.add('collapsed');
  } else {
    menu?.classList.remove('collapsed');
  }
}


 

 

}
