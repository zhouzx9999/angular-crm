import { Component, OnInit } from '@angular/core';
import { Client } from 'src/shared/models/client';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/shared/services/client.services';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  client: Client
  fullname: string
  phoneNumber: string
  email: string
  updateForm: FormGroup
  currentIdClient: number
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.currentIdClient = +this.route.snapshot.paramMap.get('id');
    this.GetClient();
  }
  // getClient() : void
  // {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.clientService.getClient(id)
  //     .subscribe(client => {
  //       this.client = client}
  //       );
  // }
  createForm() : void {
    this.updateForm = new FormGroup({

      fullName: new FormControl(this.client.fullName, [Validators.required]),
      email: new FormControl(this.client.email, [Validators.required]),
      phoneNumber: new FormControl(this.client.phoneNumber, [Validators.required]),
  });
  }

  GetClient() : void {
    this.clientService.getClient(this.currentIdClient)
    .subscribe(client => {
      this.client = client;
      this.createForm()
    });
  }
  SumbitUpdateClient() : void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.clientService.updateClient(id, {
      id: id,
      fullName: this.updateForm.value.fullName,
      phoneNumber: this.updateForm.value.phoneNumber,
      email: this.updateForm.value.email
    }).subscribe(status => {
      this.router.navigate(
       ['/client/{{currentIdClient}}']
      );
    })
  }
  add() {

  }

}
