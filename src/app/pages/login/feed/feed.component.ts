import { Component, OnInit } from '@angular/core';

import { FeedService } from './feed.service';

import { TimeAgoPipe } from 'time-ago-pipe';

@Component({
  selector: 'feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.scss']
})
export class Feed {

  //feed:Array<Object>;
  feed: any[];
  limit = 30;
  offset = 0;

  constructor(private _feedService: FeedService) {
    this._loadFeed();
  }

  OnInit() {
    
  }

  expandMessage (message) {
    message.expanded = !message.expanded;
  }

  private _loadFeed() {
    setInterval(() => {
      this.feed = this._feedService.getData(this.limit, this.offset);
      //console.log(`feed component: ${this._feedService.getData(this.limit, this.offset)}`);
    }, 600000);
  }
}
