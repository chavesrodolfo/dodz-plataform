import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable, AngularFire } from 'angularfire2';

import { BlogPost } from '../interfaces/';

@Component({
  selector: 'app-blog-post.component',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  private post: FirebaseListObservable<BlogPost>;

item:any;
  sub:any;
  id:string;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    public af: AngularFire
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.post = data['posts/-KVHRQ8PptQ3m7MMk9El'];
      console.log(this.post);
    });
    
  }

}
