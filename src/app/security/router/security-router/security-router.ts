import {Component, computed, effect, EffectRef, OnInit, signal, Signal, WritableSignal} from '@angular/core';
import {BehaviorSubject, map, Observable, of, Subject, tap} from 'rxjs';


@Component({
  selector: 'app-security-router',
  imports: [],
  templateUrl: './security-router.html',
  standalone: true,
  styleUrl: './security-router.scss'
})
export class SecurityRouter implements OnInit{
  sign$:WritableSignal<string> = signal('signal');
  comp$: Signal<string> = computed(()=> this.signHandler(this.sign$()));
  eff: EffectRef = effect(()=>{
    this.signEffect(this.sign$())
  })
  ngOnInit(): void{
  this.sign$.set('nouvelle valeur');


  }

  private signHandler(sign:string):string{
    return `${this.sign$()} computed`;
  }
  private signEffect(sign:string):void{
    console.log( `${this.sign$()} effect`);
  }

}
