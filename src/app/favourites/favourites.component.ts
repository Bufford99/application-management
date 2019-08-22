import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {

    // set titles and headers
    this.titleService.setTitle('Favourites');
    document.getElementById('control-header').innerHTML = 'Favourites';
  }

}
