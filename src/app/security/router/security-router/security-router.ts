import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import { tap} from 'rxjs';
import {MemberService} from '../../../feature/member/service/member.service';
import {JsonPipe} from '@angular/common';


@Component({
  selector: 'app-security-router',
  imports: [
    JsonPipe
  ],
  templateUrl: './security-router.html',
  standalone: true,
  styleUrl: './security-router.scss'
})
export class SecurityRouter implements OnInit{
  memberService: MemberService = inject(MemberService);
  profiles$: WritableSignal<any[]> = signal([]);


  ngOnInit(): void{
  this.memberService.getList()
    .pipe(
      tap((profiles : any[]) =>{
        this.profiles$.set(profiles);
      })
    )
    .subscribe();


  }


}
