import { Component } from '@angular/core';

import { BaMsgCenterService } from './baMsgCenter.service';

@Component({
  selector: 'ba-msg-center',
  providers: [BaMsgCenterService],
  styleUrls: ['./baMsgCenter.scss'],
  templateUrl: './baMsgCenter.html',
})
export class BaMsgCenter {

  notifications: any[];
  messages: any[];

  constructor(private _baMsgCenterService: BaMsgCenterService) {
    this.notifications = this._baMsgCenterService.getNotifications();
    this.messages = this._baMsgCenterService.getMessages();
  }

}
