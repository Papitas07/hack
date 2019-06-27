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
    EndTime: new Date(2019, 6, 1, 22, 0)   
  },
{
  Id: 2,
  Subject: 'Date limite participation renovation',
  StartTime: new Date(2019, 6, 12, 12, 0),
  EndTime: new Date(2019, 6, 12, 12, 30),
  Description: 'Dernier jour pour participer financièrement ou humainement au projet de rénovation de la mairie',
},
{
  Id: 3,
  Subject: 'Bal des pompiers',
  StartTime: new Date(2019, 6, 13, 19, 0),
  EndTime: new Date(2019, 6, 13, 12, 30),
  //Description: 'Dernier jour pour participer financièrement ou humainement au projet de rénovation de la mairie',
},
{
  Id: 4,
  Subject: 'Fête nationale',
  StartTime: new Date(2019, 6, 14, 22, 0),
  EndTime: new Date(2019, 6, 14, 23, 30),
  Description: 'Venez partager un moment de convivialité devant les feux d\'artifice rue Saint Jean'
},
{
  Id: 5,
  Subject: 'Gratuité des transports en commun',
  StartTime: new Date(2019, 6, 16, 5, 0),
  EndTime: new Date(2019, 6, 16, 23, 59),
  Description: 'Ce jour les TCE sont gratuits toute la journée!',
},
{
  Id: 6,
  Subject: 'Tombola du quartier',
  StartTime: new Date(2019, 6, 25, 14, 0),
  EndTime: new Date(2019, 6, 25, 15, 30),
  Description: 'Retrouvez-nous à la marie pour la tombola',
},
{
  Id: 7,
  Subject: 'Fête de l\'école',
  StartTime: new Date(2019, 6, 5, 16, 0),
  EndTime: new Date(2019, 6, 5, 18, 30),
  Description: 'Dernier jour pour participer financièrement ou humainement au projet de rénovation de la mairie',
}]

  public selectedDate: Date = new Date(2019, 2, 15); 
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }



  constructor() { }

  ngOnInit() {
  }

}
