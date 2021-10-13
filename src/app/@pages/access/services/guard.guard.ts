import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: StorageMap
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    return this.storage.get('user').toPromise().then(res => {
      if (res === undefined || !res) {
        this.router.navigate(['access/signIn']);
        return false;
      }
      return true;
    });
  }
}
