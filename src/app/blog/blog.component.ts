import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: any[] = [
    {
      title: 'Angular 2',
      logo: '/assets/angular.png',
      subtitle: 'A better way to build your App',
    },
    {
      title: 'Material Design for Angular 2',
      logo: '/assets/angular.png',
      subtitle: 'Official Google guide lines',
    },
    {
      title: 'AngularFire2',
      logo: '/assets/firebase.png',
      subtitle: 'Realtime bindings and authentication for Angular 2',
    },
    {
      title: 'angular2-moment',
      subtitle: 'Full featured date library for parsing, validating, manipulating, and formatting dates',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
