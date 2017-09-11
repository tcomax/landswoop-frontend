import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 4500,
        color: dashboardColors.rocket,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Ibeju-Lekki',
        percentage: 27,
        order: 0,
      }, {
        value: 4100,
        color: dashboardColors.crimson,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Epe',
        percentage: 23,
        order: 1,
      }, {
        value: 1000,
        color: dashboardColors.scorcher,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Amuwo-Odofin',
        percentage: 10,
        order: 2,
      }, {
        value: 1200,
        color: dashboardColors.silverSummer,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Badagry',
        percentage: 5,
        order: 3,
      }, {
        value: 400,
        color: dashboardColors.scorcher,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Yaba',
        percentage: 5,
        order: 4,
      },      {
        value: 4000,
        color: dashboardColors.surfieGrey,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Awoyaya',
        percentage: 10,
        order: 5,
      }, {
        value: 330,
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Oshodi/Isolo',
        percentage: 7,
        order: 6,
      }, {
        value: 2300,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Sangotedo',
        percentage: 7,
        order: 7,
      }, {
        value: 120,
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Apapa',
        percentage: 4,
        order: 8,
      }, {
        value: 450,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Ejigbo',
        percentage: 2,
        order: 9,
      },
    ];
  }
}
 /*
       blueStone: '#40daf1',
      surfieGreen: '#00abff',
      silverTree: '#1b70ef',
      gossip: '#3c4eb9',
      white: '#ffffff',
      greyStone: '#c7c0e0',
      surfieGrey: '#a190dd',
      silverSummer: '#ddc990',
      scorcher: '#e08f38',
      crimson: '#c64b21',
      */