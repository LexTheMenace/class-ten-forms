import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  form: FormGroup;
  constructor() {

    this.form = new FormGroup({
      name: new FormControl(''),
      number: new FormControl(null),
      pets: new FormArray([])
    })
  }

  get nameControl() {
    return this.form.get('name');
  }
  get petControls(){
    return (<FormArray>this.form.get('pets')).controls
  }
  ngOnInit(): void {
    console.log(this.form);

  }
  addPet(){
    (<FormArray>this.form.get('pets')).push(new FormGroup({
      petName: new FormControl('', ),
      petType: new FormControl('')
    }))
  }
  removePet(index: number){
    (<FormArray>this.form.get('pets')).removeAt(index)
  }

  onSubmit(){
    console.log(this.form.value)
    this.form.reset()
  }
}

const form = { name: 'this'};

const logThis = () => {
  const a = 'a';
  console.log(this);
}
logThis()
