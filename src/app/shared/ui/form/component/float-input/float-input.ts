import {Component, Input} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {FloatInputConfig} from '../../model/float-input.config';

@Component({
  selector: 'app-float-input',
    imports: [

    ],
  templateUrl: './float-input.html',
  standalone:true,
  styleUrl: './float-input.scss'
})
export class FloatInput {
  @Input({required:false}) config:FloatInputConfig = {
    type:'text' , defaultValue:'non defini' , label:'default label'
  }
  protected data:any = {};
  protected readonly onclick = onclick;

  onClick(data: MouseEvent) {
    this.data=data;
  }
}
