import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showSubMenu = false;
  burgerVisible: boolean = true;
  
  showMenu() {
    this.showSubMenu = !this.showSubMenu;
    console.log(this.showSubMenu);
  }

  burgerToggle() {
    this.burgerVisible = !this.burgerVisible;
  }
}
