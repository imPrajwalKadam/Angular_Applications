import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'control-messages',
  template: '<div *ngIf="errorMessage !== null">{{errorMessage}}</div>'
})

export class ControlMessagesComponent 
{
  @Input()  control:FormControl | any;
  constructor() {}
  get errorMessage():any
  {
    for (let propertyName in this.control.errors) 
    {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) 
      {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}                             