import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, map, Observable, of, Subject, tap} from 'rxjs';

@Component({
  selector: 'app-security-router',
  imports: [],
  templateUrl: './security-router.html',
  standalone: true,
  styleUrl: './security-router.scss'
})
export class SecurityRouter implements OnInit{
  obs: Observable<any> = of();
  sub: Subject<any> = new Subject<any>();
  behaviorSubject: BehaviorSubject<any> = new BehaviorSubject<any>('salut');

  ngOnInit(): void{
    this.obs.subscribe((val:any)=>{
      console.log('obs', val);

    })
    this.behaviorSubject.pipe(
      tap((value:string)=>{console.log('ma valeur', value)}),
      map((value: string)=>`${value} j'ai changé`),
      tap((value:string)=>{console.log('ma valeur', value)})
    ).subscribe()





  }

}
