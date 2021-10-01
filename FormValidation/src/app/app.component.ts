import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  userForm : any;
  constructor(private formBuilder: FormBuilder) 
  {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required], //Validators <- that Service is from Angular
      email: ['', [Validators.required, ValidationService.emailValidator]],//ValidationService this is Our Custom Service
      phone: ['+91', [Validators.required , ValidationService.PhoneValidation]],
      profile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
    });
    console.log(this.userForm);
  }
  saveUser() 
  {
   if (this.userForm.dirty && this.userForm.valid) 
    {
     alert (`Name : ${this.userForm.value.name} Email : ${this.userForm.value.email} Feedback :${this.userForm.value.profile} Phone : ${this.userForm.value.phone} Address: ${this.userForm.value.address}`);
    }
  }
}
