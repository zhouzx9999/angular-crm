import { Component, OnInit, ViewChild } from '@angular/core';
import {EmployeeService} from '../../../../shared/services/employee.service'
import { Employee } from '../../../../shared/models/employee';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import { EmployeeList } from 'src/shared/models/employeeList';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeListComponent implements OnInit {

  dataSource ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'firstName', 'secondName','phoneNumber','created']
  employees : EmployeeList[]
  constructor(private EmployeeService: EmployeeService,private spinner: NgxSpinnerService, private router: Router) { }
  getEmployees(): void {
    this.EmployeeService.getEmployees()
                        .subscribe(employees => {

                          this.employees = employees
                          this.dataSource = new MatTableDataSource<EmployeeList>(this.employees);
                          this.dataSource.paginator = this.paginator;
                          this.spinner.hide();
                         });
  }
  onRowClicked(row : Employee) {
    this.router.navigate(
      ['/employee', row.id],
    );
    console.log('Row clicked: ', row);
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  ngOnInit(): void {
    this.spinner.show();
    this.getEmployees();
    //this.dataSource = new MatTableDataSource<EmployeeList>(this.employees);
    //this.dataSource.paginator = this.paginator;



  }

}
