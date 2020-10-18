  import { Component,OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, FormControlName } from '@angular/forms';
  import { Form } from '../../form';
  import { FormService } from '../../form.service';
  import { Validators } from '@angular/forms';
  
  
  @Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
  })
  
  export class FormComponent implements OnInit{
  
  profileForm:FormGroup;
  
  
  Feed = new Form;
  
  constructor(
    private formservice:FormService,
    private fb:FormBuilder,
    ){}
  
   
  ngOnInit(){
    this.Default();
  }
  
  Default():void{
  
   
  
  this.profileForm = this.fb.group({
    name: ['',Validators.required],
     email: ['',Validators.required],
    feedback: ['',Validators.required],
    comment: ['']
  });
  
   this.formservice.getHttp().subscribe(Feed => {this.Feed = Feed, this.profileForm.setValue(Feed)});
  
  
  
    
  }
  
OnSubmit() {​​
this.formservice.postHttp(this.profileForm.value).subscribe( Feed => {​​ this.Feed = Feed,
document.querySelector(".success").innerHTML="";
setTimeout(function(){​​ document.querySelector(".success").innerHTML="Thanks for the feedback, Successfully submitted!"; }​​, 200);
var x = document.querySelector(".success");
if(x.classList.contains("red")){​​
x.classList.remove("red");
}​​
x.classList.add("green");
}​​,
error=>{​​
document.querySelector(".success").innerHTML="";
var x=document.querySelector(".success");
if(x.classList.contains("green")){​​
x.classList.remove("green");
}​​
x.classList.add("red");
setTimeout(function(){​​ document.querySelector(".success").innerHTML="Feedback submission failed!Please fill required fields properly"; }​​, 200);
}​​
);
}
  }
  


