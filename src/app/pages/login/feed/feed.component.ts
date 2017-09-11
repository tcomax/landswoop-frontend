import { Component } from '@angular/core';

import { FeedService } from './feed.service';

import { TimeAgoPipe } from 'time-ago-pipe';

@Component({
  selector: 'feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.scss']
})
export class Feed {

  feed:Array<Object>;

  limit = 10;
  offset = 0;

  constructor(private _feedService: FeedService) {
  }

  ngOnInit() {
    this._loadFeed();
  }

  expandMessage (message) {
    message.expanded = !message.expanded;
  }

  private _loadFeed() {
    setInterval(() => {
      this.feed = this._feedService.getData(this.limit, this.offset);
      // console.log(`feed component: ${this.feed}`);
    }, 10000);
  }
}
