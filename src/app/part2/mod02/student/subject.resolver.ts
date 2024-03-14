import { SubjectService } from './subject.service';
import { Injectable } from '@angular/core';
import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectResolver {
  constructor(private subjectService: SubjectService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    let id: string | any = route.paramMap.get('id')
    return this.subjectService.getByID(id);
  }
}
