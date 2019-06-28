import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IdeaboxService } from '../ideabox.service';
import { IdeaData } from '../models/idea.model';

@Component({
  selector: 'app-boite-aidee',
  templateUrl: './boite-aidee.component.html',
  styleUrls: ['./boite-aidee.component.scss']
})
export class BoiteAIdeeComponent implements OnInit,OnChanges {

myIdea:IdeaData
ideaForm:FormGroup = this.fb.group({
  idea:['']
})

  constructor(private fb:FormBuilder,private idea:IdeaboxService) { }

  onSubmit() {

    this.idea.content = this.ideaForm.value;
    this.idea.createIdea(this.idea.content);

    
    console.log(this.ideaForm.value as JSON);
  }

  ngOnInit() {
    this.idea.getLastIdea().subscribe(response=>{
      
      this.myIdea = response;
      console.log(this.myIdea)
      
    })
  }

  ngOnChanges() {
    this.idea.getLastIdea().subscribe(response=>{
      
      this.myIdea = response;
      console.log(this.myIdea)
      
    })
  }

}
