import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddCitizenService } from '../add-citizen.service';

@Component({
  selector: 'app-create-citizen',
  templateUrl: './create-citizen.component.html',
  styleUrls: ['./create-citizen.component.scss']
})
export class CreateCitizenComponent implements OnInit {

  constructor(private fb:FormBuilder, private addCust:AddCitizenService) { }

  createUser: FormGroup = this.fb.group({

    district: ['', Validators.required],
    lastName: ['',Validators.required],
    firstName: ['',Validators.required],
    login: ['', Validators.required],
    email: ['',[Validators.email,Validators.required]],
    password: ['',Validators.required]

  })


  ngOnInit() {

  }

  onSubmit() {
    this.addCust.CitizenData = this.createUser.value;
    this.addCust.createUser(this.addCust.CitizenData);
    this.addCust.sendLogin(this.addCust.CitizenData);
    console.log(this.createUser.value as JSON);
  }


}
