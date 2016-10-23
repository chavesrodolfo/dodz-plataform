import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { BlogPost } from '../interfaces/';

@Injectable()
export class PostsResolver implements Resolve<any> {
  /**
   * Constructor of the class.
   *
   * @param {AngularFire} angularFire
   */
  constructor(private angularFire: AngularFire) { }

  /**
   * Resolve method to get current user blog-post from Firebase.
   *
   * Note that this method relies that 'AuthenticationGuard' is run within route 'canActivate' block.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {Observable<FirebaseListObservable<BlogPost[]>>}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<FirebaseListObservable<BlogPost[]>> {
    return Observable.of(this.angularFire.database
      .list('/posts/' + localStorage.getItem('uid'),
      {
        query: {
          limitToLast: 10,
          orderByKey: true
        }
      }
      ));
  }
}
