import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SignInPage} from '../security/page/sign-in-page/sign-in-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignInPage],
  templateUrl: './app.html',
  standalone : true,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app');
}
