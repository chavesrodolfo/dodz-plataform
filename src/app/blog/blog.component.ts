import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';

import { BlogPost } from './interfaces/';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  private posts: FirebaseListObservable<BlogPost[]>;
  private title: string = '';
  private subtitle: string = '';
  private content: string = '';
  private showBlogPostForm: boolean;

  /**
   * Constructor of the class
   *
   * @param {ActivatedRoute}  activatedRoute
   */
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.hideNewPostForm();
    this.activatedRoute.data.subscribe(data => {
      this.posts = data['posts'];
    });
  }

  showNewPostForm() {
    this.showBlogPostForm = true;
  }

  hideNewPostForm() {
    this.showBlogPostForm = false;
  }

  addNewPost() {
    let post = {
      title: this.title,
      subtitle: this.subtitle,
      content: this.content,
      public: true,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
    };

    this.posts.push(post);

    this.title = '';
    this.subtitle = '';
    this.content = '';

    this.activatedRoute.data.subscribe(data => {
      this.posts = data['posts'];
    });
  }

  postsMock: any[] = [
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
}
