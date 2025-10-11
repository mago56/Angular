import { Component } from '@angular/core';
import {Input} from '../../../shared/ui/form/component/input/input';

@Component({
  selector: 'app-sign-in-page',
  imports: [
    Input
  ],
  templateUrl: './sign-in-page.html',
  standalone : true,
  styleUrl: './sign-in-page.scss'
})
export class SignInPage {

}
