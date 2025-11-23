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
export class App implements OnInit{
  protected readonly title = signal('App');
  private readonly api: ApiService = inject(ApiService);

  ngOnInit() {
    this.api.get('main').subscribe((data: ApiResponse)=>console.log('data' , data));
  }
}
