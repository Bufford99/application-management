import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import applicants from '../../assets/data/applications.json';

import { IApplicant } from '../types/applicant';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  applicants: IApplicant[];
  dataSource = applicants;
  displayedColumns: string[] = ['id', 'name', 'position', 'applied', 'experience'];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    NavbarComponent.setControlHeader('Application Management');

    // retrieve json data
    this.applicants = applicants;
  }

  showApplicationDetails(id: string): void {
    this.router.navigateByUrl('detail/' + id);
  }

}
