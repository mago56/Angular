import {Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ApiService} from '../shared/api/service/api.service';
import {ApiResponse} from '../shared/api/data/response/api.response';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  standalone : true,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('App');
  private readonly api: ApiService = inject(ApiService);


}
