import { Component } from '@angular/core';
import {FloatInput} from '../../../shared/ui/form/component/float-input/float-input';
import {FloatInputConfig} from '../../../shared/ui/form/model/float-input.config';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-sign-in-page',
  imports: [
    FloatInput,
    JsonPipe
  ],
  templateUrl: './sign-in-page.html',
  standalone : true,
  styleUrl: './sign-in-page.scss'
})
export class SignInPage {
  protected passwordConfig:FloatInputConfig = {
    type:'password', label:'password' , defaultValue:''
  }

  protected usernameConfig:FloatInputConfig = {
    type:'text', label:'username' , defaultValue:'Mago'
  }

  onClickEventHandler(data: FloatInputConfig) {
    alert('hello world');
  }
}
