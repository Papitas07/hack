import { Component, OnInit } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-schedule';
import { scheduleData} from './datasource';
import { DayService, WeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-agenda',
  template: `<ejs-schedule width='75%' height='500px' [eventSettings]='eventSettings'></ejs-schedule>`,
  styleUrls: ['./agenda.component.scss'],
  providers: [DayService, WeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]

})
export class AgendaComponent implements OnInit {


  public eventSettings: EventSettingsModel = {
    dataSource: scheduleData
};

  constructor() { }

  ngOnInit() {
  }

}
