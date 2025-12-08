import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import { tap} from 'rxjs';
import {MemberService} from '../../../feature/member/service/member.service';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-security-router',
  imports: [
    RouterOutlet
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
