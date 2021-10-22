import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  formValue = ''
  today = new Date().toISOString().split('T')[0]
  @ViewChild('nameInput') nameInput!: NgModel;
  constructor() { }

  ngOnInit(): void {
    console.log(this.today);
    console.log(this.nameInput);
  }
  
  onSubmit(form: NgForm){
    console.log(form);
    this.formValue = JSON.stringify(form.value);
  }
}
