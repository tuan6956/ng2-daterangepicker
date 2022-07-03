import { Component } from '@angular/core';
import dayjs from 'dayjs';
import { DaterangepickerConfig } from 'dist/ng2-daterangepicker';
import localeData from "dayjs/plugin/localeData";
import localeVi from 'dayjs/locale/vi';
dayjs.extend(localeData);
dayjs.locale(localeVi);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9';

  public chosenDate: any = {
    start: dayjs().subtract(12, 'month'),
    end: dayjs().subtract(6, 'month'),
  };

  public picker1 = {
    opens: 'left',
    startDate: dayjs().subtract(5, 'day'),
    endDate: dayjs(),
    isInvalidDate: function (date: any) {
      if (date.isSame('2017-09-26', 'day'))
        return 'mystyle';
      return false;
    }
  }

  constructor(private daterangepickerOptions: DaterangepickerConfig) {    
    this.daterangepickerOptions.settings = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false,
      "opens": "right",
      ranges: {
        'Last Month': [dayjs().subtract(1, 'month'), dayjs()],
        'Last 3 Months': [dayjs().subtract(4, 'month'), dayjs()],
        'Last 6 Months': [dayjs().subtract(6, 'month'), dayjs()],
        'Last 12 Months': [dayjs().subtract(12, 'month'), dayjs()],
      }
    };
  }

  public selectedDate(value: any, dateInput: any): void {
    console.log(value);
    dateInput.start = value.start;
    dateInput.end = value.end;
  }

  public calendarEventsHandler(e: any): void {
    console.log({ calendarEvents: e });
  }

  public applyDatepicker(e: any) {
    console.log({ applyDatepicker: e });
  }

  public updateSettings(): void {
    this.daterangepickerOptions.settings.locale = { format: 'YYYY/MM/DD' };
    this.daterangepickerOptions.settings.ranges = {
      '30 days ago': [dayjs().subtract(1, 'month'), dayjs()],
      '3 months ago': [dayjs().subtract(4, 'month'), dayjs()],
      '6 months ago': [dayjs().subtract(6, 'month'), dayjs()],
      '7 months ago': [dayjs().subtract(12, 'month'), dayjs()],
    };
  }
}
