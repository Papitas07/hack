import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public home :string 

  constructor(private route :ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) =>{
      this.home = (params.get('home'));
    })
  }
}