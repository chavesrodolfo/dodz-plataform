import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  private displayName: string = '';
  private photoURL: string = '';

  constructor(
    public af: AngularFire,
    public router: Router
  ) { }

  ngOnInit() {
    this.getAuthData();
  }

  getAuthData() {
    this.af.auth.subscribe(authData => {
      if (authData) {
        this.displayName = authData['auth'].displayName;
        this.photoURL = authData['auth'].photoURL;
      }
    });
  }

  login(provider: string) {
    this.af.auth.login({
      provider: AuthProviders[provider],
      method: AuthMethods.Popup,
    }).then(() => {
      this.getAuthData();
      this.router.navigateByUrl('/blog');
    }).catch(error => {
      alert(error);
    })
      ;
  }

  logout() {
    this.af.auth.logout();
    this.displayName = '';
    this.photoURL = '';
    this.router.navigateByUrl('/blog');
  }
}
