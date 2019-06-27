import { Component, OnInit } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-schedule';
import { scheduleData} from './datasource';
import { DayService, WeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-agenda',
  template: `<ejs-schedule alignment='center' width='75%' height='500px' [eventSettings]='eventSettings'></ejs-schedule>`,
  styleUrls: ['./agenda.component.scss'],
  providers: [DayService, WeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]

})
export class AgendaComponent implements OnInit {
  
  public data: object[] = [{
    Id: 1,
    Subject: 'Fête du quartier',
    StartTime: new Date(2019, 6, 1, 19, 0),
    EndTime: new Date(2019, 2, 15, 22, 0),
    IsAllDay: false,

    
  },
{
  Id: 2,
  Subject: 'Bambi2',
  StartTime: new Date(2019, 5, 12, 12, 0),
  EndTime: new Date(2019, 5, 12, 14, 0),
  RecurrenceID: 1
}]

  public selectedDate: Date = new Date(2019, 2, 15); 
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }



  constructor() { }

  ngOnInit() {
  }

}
