import { Component, OnInit } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-schedule';

@Component({
  selector: 'app-agenda',
  template: `<ejs-schedule [eventSettings]='eventSettings'></ejs-schedule>`,
  styleUrls: ['./agenda.component.scss']

})
export class AgendaComponent implements OnInit {


  public data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2019, 6, 24, 10, 0),
    EndTime: new Date(2019, 6, 24, 12, 30)
  }];
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }

  constructor() { }

  ngOnInit() {
  }

}
