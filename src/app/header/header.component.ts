import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() linkSectected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onLinkSeclect(link: string) {
    this.linkSectected.emit(link);
  }

}
