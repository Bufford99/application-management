import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

import applicants from '../../assets/data/applications.json';

import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dataSource = new MatTableDataSource(applicants);
  displayedColumns = ['id', 'name', 'position', 'applied', 'experience'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    NavbarComponent.setControlHeader('Application Management');

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  showApplicationDetails(id: string): void {
    this.router.navigateByUrl('detail/' + id);
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue;
  }

}
