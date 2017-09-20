import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper, layoutPaths} from '../../../theme';

@Injectable()
export class LineChartService {

  constructor(private _baConfig: BaThemeConfigProvider) {
  }

  getData() {

    var layoutColors = this._baConfig.get().colors;
    var graphColor = this._baConfig.get().colors.custom.dashboardLineChart;

    return {
      type: 'serial',
      theme: 'blur',
      marginTop: 15,
      marginRight: 15,
      responsive: {
        'enabled': true,
      },
      dataProvider: [
        { date: new Date(2012, 11), value1: 1000, value2: 2300, value3: 3000, value4: 4400, value5: 4300 },
        { date: new Date(2013, 0), value1: 1200, value2: 2450, value3: 1000, value4: 2300, value5: 3400 },
        { date: new Date(2013, 1), value1: 1300, value2: 2540, value3: 1000, value4: 2300, value5: 4500 },
        { date: new Date(2013, 2), value1: 1400, value2: 2530, value3: 1000, value4: 2300, value5: 4300 },
        { date: new Date(2013, 3), value1: 1500, value2: 2550, value3: 1000, value4: 2300, value5: 4200 },
        { date: new Date(2013, 4), value1: 1400, value2: 2660, value3: 1000, value4: 2300, value5: 4000 },
        { date: new Date(2013, 5), value1: 1600, value2: 2440, value3: 1000, value4: 2300, value5: 4000 },
        { date: new Date(2013, 6), value1: 1400, value2: 4260, value3: 1000, value4: 2300, value5: 3300 },
        { date: new Date(2013, 7), value1: 1800, value2: 4300, value3: 1000, value4: 2300, value5: 3400 },
        { date: new Date(2013, 8), value1: 2000, value2: 4300, value3: 1000, value4: 2300, value5: 3500 },
        { date: new Date(2013, 9), value1: 2200, value2: 4300, value3: 1000, value4: 2300, value5: 3600 },
        { date: new Date(2013, 10), value1: 2400, value2: 5300, value3: 1000, value4: 2300, value5: 4300 },
        { date: new Date(2013, 11), value1: 2500, value2: 5300, value3: 1000, value4: 2300, value5: 3300 },
        { date: new Date(2014, 0), value1: 2600, value2: 2600, value3: 1000, value4: 2300, value5: 3300 },
        { date: new Date(2014, 1), value1: 2700, value2: 2600, value3: 1000, value4: 2300, value5: 3300 },
        { date: new Date(2014, 2), value1: 2800, value2: 2600, value3: 1000, value4: 2300, value5: 3200 },
        { date: new Date(2014, 3), value1: 2400, value2: 6300, value3: 1000, value4: 2300, value5: 3400 },
        { date: new Date(2014, 4), value1: 2300, value2: 4300, value3: 1000, value4: 2300, value5: 3200 },
        { date: new Date(2014, 5), value1: 2200, value2: 7300, value3: 1000, value4: 2300, value5: 2100 },
        { date: new Date(2014, 6), value1: 2300, value2: 7300, value3: 1000, value4: 2300, value5: 2200 },
        { date: new Date(2014, 7), value1: 2500, value2: 7300, value3: 1000, value4: 2300, value5: 2300 },
        { date: new Date(2014, 8), value1: 2400, value2: 8300, value3: 1000, value4: 2300, value5: 3400 },
        { date: new Date(2014, 9), value1: 2300, value2: 8300, value3: 1000, value4: 2300, value5: 3400 },
        { date: new Date(2014, 10), value1: 3000, value2: 8300, value3: 1000, value4: 2300, value5: 4300 },
        { date: new Date(2014, 11), value1: 3200, value2: 5300, value3: 1000, value4: 2300, value5: 4300 },
        { date: new Date(2015, 0), value1: 3200, value2: 3300, value3: 1000, value4: 2300, value5: 4200 },
        { date: new Date(2015, 1), value1: 3300, value2: 3300, value3: 1000, value4: 2300, value5: 4500 },
      ],
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText,
      },
      valueAxes: [
        {
          minVerticalGap: 50,
          gridAlpha: 0,
          color: layoutColors.defaultText,
          axisColor: layoutColors.defaultText
        }
      ],
      graphs: [
        {
          id: 'g0',
          bullet: 'Alimosho',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.7),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value0',
          fillAlphas: 1,
          fillColorsField: 'lineColor',
        },
        {
          id: 'g1',
          bullet: 'Ibeju-Lekki',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.55),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value1',
          fillAlphas: 1,
          fillColorsField: 'lineColor',
        },
        {
          id: 'g2',
          bullet: 'Epe',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.40),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value2',
          fillAlphas: 1,
          fillColorsField: 'lineColor',
        },
        {
          id: 'g3',
          bullet: 'Badagry',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.30),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value3',
          fillAlphas: 1,
          fillColorsField: 'lineColor',
        },        
        {
          id: 'g4',
          bullet: 'Ikorodu',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.15),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value4',
          fillAlphas: 1,
          fillColorsField: 'lineColor',
        },
      ],
      chartCursor: {
        categoryBalloonDateFormat: 'MM YYYY',
        categoryBalloonColor: '#4285F4',
        categoryBalloonAlpha: 0.7,
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5
      },
      dataDateFormat: 'MM YYYY',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart
    };
  }
}
