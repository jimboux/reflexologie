import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showSubMenu = false;
  burgerVisible: boolean = true;

  constructor(private router: Router) {}

  // ngOnInit(){
  //   this.router.events.pipe(filter(event => event instanceof
  //     NavigationEnd)).subscribe(()=> {
  //       window.scrollTo(0, 0);
  //     })
  // } 
  // a faire pour le bouton pour arriver en hate de la page
  
  showMenu() {
    this.showSubMenu = !this.showSubMenu;
  }

  burgerToggle() {
    this.burgerVisible = !this.burgerVisible;
  }
}
