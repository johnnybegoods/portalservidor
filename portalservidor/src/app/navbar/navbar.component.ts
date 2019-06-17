import { AuthService } from '../login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showMenu: boolean = false;
  aba: string = 'home';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );
  }

}
