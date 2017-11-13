import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuItem, MenuModule } from 'primeng/primeng';
import { Menu } from 'primeng/components/menu/menu';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
declare var jQuery: any;

@Component({
  selector: 'b-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  loading: boolean;

  menuItems: MenuItem[];
  miniMenuItems: MenuItem[];

  @ViewChild('bigMenu') bigMenu: Menu;
  @ViewChild('smallMenu') smallMenu: Menu;
  menuVisible = false;
  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }
  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }
  ngOnInit() {

    const handleSelected = function (event) {
      const allMenus = jQuery(event.originalEvent.target).closest('ul');
      const allLinks = allMenus.find('.menu-selected');

      allLinks.removeClass('menu-selected');
      const selected = jQuery(event.originalEvent.target).closest('a');
      selected.addClass('menu-selected');
    };

    this.menuItems = [
      {
        label: 'Dashboard', icon: 'fa-home', routerLink: ['/dashboard'],
        command: (event) => handleSelected(event), visible: !this.menuVisible
      },
      {
        label: 'All Times', icon: 'fa-calendar', routerLink: ['/alltimes'],
        command: (event) => handleSelected(event), visible: this.menuVisible
      },
      {
        label: 'Books', icon: 'fa-book', routerLink: ['/books'],
        command: (event) => handleSelected(event), visible: !this.menuVisible
      },
      {
        label: 'Customer', icon: 'fa-tasks', routerLink: ['/customers'],
        command: (event) => handleSelected(event), visible: !this.menuVisible
      },
      {
        label: 'Author', icon: 'fa-users',
        routerLink: ['/authors'], command: (event) => handleSelected(event), visible: !this.menuVisible
      },
      {
        label: 'Settings', icon: 'fa-sliders', routerLink: ['/settings'],
        command: (event) => handleSelected(event), visible: this.menuVisible
      },
      {
        label: 'Product', icon: 'fa-empire', routerLink: ['/products'],
        command: (event) => handleSelected(event), visible: this.menuVisible
      },
      {
        label: 'Google Login', icon: 'fa-google', routerLink: ['/products'],
        command: (event) => handleSelected(event), visible: this.menuVisible
      },
    ];

    this.miniMenuItems = [];
    this.menuItems.forEach((item: MenuItem) => {
      const miniItem = { icon: item.icon, routerLink: item.routerLink };
      this.miniMenuItems.push(miniItem);
    });

  }

  selectInitialMenuItemBasedOnUrl() {
    const path = document.location.pathname;
    const menuItem = this.menuItems.find((item) => item.routerLink[0] === path);
    if (menuItem) {
      const selectedIcon = this.bigMenu.container.querySelector(`.${menuItem.icon}`);
      jQuery(selectedIcon).closest('li').addClass('menu-selected');
    }
  }

  ngAfterViewInit() {
    this.selectInitialMenuItemBasedOnUrl();
  }

}
