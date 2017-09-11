import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'dashboard.mini_plots',
        stats: '10',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'dashboard.commissions',
        stats: 'N 89,745.67',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'dashboard.referrals',
        stats: '191',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'dashboard.investments',
        stats: 'N 32,592.00',
        icon: 'refresh',
      }
    ];
  }
}
