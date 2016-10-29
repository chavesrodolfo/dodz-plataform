import { Component, OnDestroy, AfterViewInit, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiny',
  templateUrl: './tiny.component.html',
  styleUrls: ['./tiny.component.scss']
})

export class TinyComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}