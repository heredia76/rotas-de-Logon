import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
class AlunoDetalheResolver implements Resolve<Team> {
  constructor(private backend: Backend) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>| any {
    return this.backend.fetchTeam(route.params.id)
  }
}
