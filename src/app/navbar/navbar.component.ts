import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  redirectToHome(): void {
    this.router.navigateByUrl('home');
  }

  redirectToFavourites(): void {
    window.alert('redirect to favourites');
  }

}
