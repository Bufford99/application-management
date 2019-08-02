import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import applicants from '../../assets/data/applications.json';

import { IApplicant } from '../types/applicant.js';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  applicant: IApplicant;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.applicant = this.retrieveApplicant();

    // set control header
    document.getElementById('control-header').innerHTML = this.applicant.name;
  }

  retrieveApplicant(): IApplicant {
    const url = this.router.url;
    const applicationID = Number(url.slice(url.lastIndexOf('/') + 1 ));

    return applicants[applicationID - 1];
  }

}
