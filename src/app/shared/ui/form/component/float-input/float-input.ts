import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {FloatInputConfig} from '../../model/float-input.config';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-float-input',
  imports: [
    FormsModule

  ],
  templateUrl: './float-input.html',
  standalone:true,
  styleUrl: './float-input.scss'
})
export class FloatInput {
  @Input({required:false}) config:FloatInputConfig = {
    type:'text' , defaultValue:'non defini' , label:'default label'
  }
  @Output()configChange = new EventEmitter<FloatInputConfig>();
  protected data:any = {};
  protected readonly onclick = onclick;

  onClick(data: MouseEvent) {
    this.data=data;
    this.configChange.emit({...this.config , defaultValue:'coucou'});
  }
}
