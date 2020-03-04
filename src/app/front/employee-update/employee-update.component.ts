import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { EmployeeService }  from '../../../shared/services/employee.service';
import { Employee } from '../../../shared/models/employee';
import { FormGroup, FormControl, Validators, FormArray, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employee : Employee;
  updateForm : FormGroup;
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private EmployeeService: EmployeeService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.getEmployee();
  }
  createForm(): void {
    this.updateForm = new FormGroup({
             
      firstName: new FormControl(this.employee.firstName, [Validators.required]),
      secondName: new FormControl(this.employee.secondName, [Validators.required]),
      middleName: new FormControl(this.employee.middleName, [Validators.required]),
      birthDay: new FormControl(new Date(this.employee.birthDay)),
  });
  }
  submit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.EmployeeService.updateEmployee(id,{ 
      id:id,
      firstName:this.updateForm.value.firstName,
      secondName:this.updateForm.value.secondName,
      middleName:this.updateForm.value.middleName,
      birthDay:this.updateForm.value.birthDay
    }).subscribe(status =>{
      this.router.navigate(
        ['/front/employee',id] 
      );
    } );
   
  }
  getEmployee(): void {
    
    const id = +this.route.snapshot.paramMap.get('id');
    this.EmployeeService.getEmployee(id)
      .subscribe(employee => {
        this.employee = employee;
        this.createForm();
      }
        );
      
  }

}
