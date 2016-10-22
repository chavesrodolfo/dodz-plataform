import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  public links: any[] = [
    {
      url: 'https://dodz-plataform.firebaseapp.com/',
      icon: 'web',
    }
  ];

  constructor() { }

  ngOnInit() { }
}
