import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import applicants from '../../assets/data/applications.json';

import { IApplicant } from '../types/applicant.js';

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
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.applicant = this.retrieveApplicant();

    // set titles and headers
    this.titleService.setTitle(this.applicant.name);
    document.getElementById('control-header').innerHTML = this.applicant.name;

  }

  retrieveApplicant(): IApplicant {
    const applicationID = this.route.snapshot.params.id;
    
    return applicants.find((app: IApplicant) => app.id == applicationID);
  }

}
