import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable, AngularFire } from 'angularfire2';

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
  private imageCoverURL: string = '';
  private content: string = '';
  private showBlogPostForm: boolean;

  /**
   * Constructor of the class
   *
   * @param {ActivatedRoute}  activatedRoute
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    public af: AngularFire
  ) { }

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
      imageCoverURL: this.imageCoverURL,
      content: this.content,
      public: true,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
    };

    this.posts.push(post);

    this.title = '';
    this.subtitle = '';
    this.content = '';
    this.imageCoverURL = '';

    this.hideNewPostForm();

    this.activatedRoute.data.subscribe(data => {
      this.posts = data['posts'];
    });
  }

  keyupHandlerFunction(content:any):void{
    this.content=content;
  }

}
