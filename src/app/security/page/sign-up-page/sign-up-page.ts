import {Component, inject, signal, WritableSignal} from '@angular/core';
import {FloatInput} from '../../../shared/ui/form/component/float-input/float-input';
import {FloatInputConfig} from '../../../shared/ui/form/model/float-input.config';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignUpPayload} from '../../data';
import {SecurityFormUtil} from '../../util/security-form.util';
import {FormError} from '../../../shared/ui/form/type';
import {handleFormError} from '../../../shared/ui/form/util';
import {SecurityService} from '../../service/security.service';


@Component({
  selector: 'app-sign-up-page',
  imports: [
    FloatInput,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up-page.html',
  standalone: true,
  styleUrl: './sign-up-page.scss'
})
export class SignUpPage {
  private readonly securityService: SecurityService = inject(SecurityService);


  payload: SignUpPayload = SecurityFormUtil.getDefaultSignUpPayLoad();
  formGroup: FormGroup = SecurityFormUtil.getSignUpFormGroup();


  usernameFloatInputConfig: FloatInputConfig = SecurityFormUtil.getUsernameFloatInputConfig(this.formGroup);
  passwordFloatInputConfig: FloatInputConfig = SecurityFormUtil.getPasswordFloatInputConfig(this.formGroup);
  mailFloatInputConfig: FloatInputConfig = SecurityFormUtil.getMailFloatInputConfig(this.formGroup);

  errors$: WritableSignal<FormError[]> = signal([]);

  constructor() {

    handleFormError(this.formGroup, this.errors$);
  }

  submit(): void {
    if (this.formGroup.invalid) {
      return;
    }

    this.securityService.signUp(this.formGroup.value)
      .subscribe();
  }
}
