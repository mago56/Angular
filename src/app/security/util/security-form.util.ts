import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignInPayload, SignUpPayload} from '../data';
import {FloatInputConfig} from '../../shared/ui/form/model/float-input.config';

export class SecurityFormUtil{
  static getDefaultSignInPayLoad():SignInPayload{
    return {username: '' , password: ''}
  }

  static getDefaultSignUpPayLoad():SignUpPayload{
    return {...SecurityFormUtil.getDefaultSignInPayLoad() , mail:''}
  }

  static getDefaultUsernameFormControl(username:string = ''):FormControl{
    return new FormControl(username, [Validators.required])
  }

  static getDefaultPasswordControl(password:string = ''):FormControl{
    return new FormControl(password, [Validators.required])
  }

  static getDefaultMailControl(mail:string = ''):FormControl{
    return new FormControl(mail, [Validators.required])
  }

  static getSignInFormGroup(payload:SignInPayload = SecurityFormUtil.getDefaultSignInPayLoad()):FormGroup{
     return new FormGroup<any>({
      username: SecurityFormUtil.getDefaultUsernameFormControl(payload.username),
      password: SecurityFormUtil.getDefaultPasswordControl(payload.password),
    });
  }

  static getSignUpFormGroup(payload:SignUpPayload = SecurityFormUtil.getDefaultSignUpPayLoad()):FormGroup {
    return new FormGroup<any>({
      username: SecurityFormUtil.getDefaultUsernameFormControl(payload.username),
      password: SecurityFormUtil.getDefaultPasswordControl(payload.password),
      mail: SecurityFormUtil.getDefaultMailControl(payload.mail),
    });
  }

  static getUsernameFloatInputConfig(formGroup:FormGroup):FloatInputConfig{
    return {
      type: 'text',
      label: 'username',
      formControl:formGroup.get('username')! as FormControl
    }
  }

  static getPasswordFloatInputConfig(formGroup:FormGroup):FloatInputConfig{
    return {
      type: 'text',
      label: 'password',
      formControl:formGroup.get('password')! as FormControl
    }
  }

  static getMailFloatInputConfig(formGroup:FormGroup):FloatInputConfig{
    return {
      type: 'text',
      label: 'mail',
      formControl:formGroup.get('mail')! as FormControl
    }
  }

}
