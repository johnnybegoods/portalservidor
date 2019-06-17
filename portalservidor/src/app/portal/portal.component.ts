import { AuthService } from '../login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  showMenu: boolean = false;

  constructor(private authService: AuthService) { 

  }

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );
  }

}
