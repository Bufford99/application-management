import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import applicants from '../../assets/data/applications.json';

import { IApplicant } from '../types/applicant.js';

import { NavbarComponent } from '../navbar/navbar.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  applicant: IApplicant;

  constructor(
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.applicant = this.retrieveApplicant();
    this.titleService.setTitle(this.applicant.name);

    NavbarComponent.setControlHeader(this.applicant.name);
  }

  retrieveApplicant(): IApplicant {
    const url = this.router.url;
    const applicationID = Number(url.slice(url.lastIndexOf('/') + 1 ));

    return applicants[applicationID - 1];
  }

}
