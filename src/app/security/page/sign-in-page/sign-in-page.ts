import {Component, inject, signal, WritableSignal} from '@angular/core';
import {FloatInput} from '../../../shared/ui/form/component/float-input/float-input';
import {FloatInputConfig} from '../../../shared/ui/form/model/float-input.config';
import {JsonPipe} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {SignInPayload} from '../../data';
import {SecurityFormUtil} from '../../util/security-form.util';
import {FormError} from '../../../shared/ui/form/type';
import {handleFormError} from '../../../shared/ui/form/util';
import {SecurityService} from '../../service/security.service';

@Component({
  selector: 'app-sign-in-page',
  imports: [
    FloatInput,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in-page.html',
  standalone : true,
  styleUrl: './sign-in-page.scss'
})
export class SignInPage {
  private readonly securityService: SecurityService = inject(SecurityService)
  payload:SignInPayload = SecurityFormUtil.getDefaultSignInPayLoad();
  formGroup:FormGroup = SecurityFormUtil.getSignInFormGroup();
  usernameFloatInputConfig:FloatInputConfig = SecurityFormUtil.getUsernameFloatInputConfig(this.formGroup);
  passwordFloatInputConfig:FloatInputConfig = SecurityFormUtil.getPasswordFloatInputConfig(this.formGroup);
  errors$:WritableSignal<FormError[]> = signal([]);


  constructor() {
    handleFormError(this.formGroup , this.errors$);
  }


  submit():void{
    if(this.formGroup.invalid){
      console.log('erreur' , this.formGroup.value)
      return;
    }
    this.securityService.signIn(this.formGroup.value)
      .subscribe((data)=> console.log('data' , data));
  }


}
