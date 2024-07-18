import {Component,ChangeDetectionStrategy,ViewChild,TemplateRef, OnInit,} from '@angular/core';
import {startOfDay,endOfDay,subDays, addDays,endOfMonth,isSameDay,isSameMonth, addHours,} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CalendarEvent,CalendarEventAction,CalendarEventTimesChangedEvent,CalendarView,} from 'angular-calendar';
import { EventColor } from 'calendar-utils';


// const colors: Record<string, EventColor> = {
//   red: {
//     primary: '#ad2121',
//     secondary: '#FAE3E3',
//   },
//   blue: {
//     primary: '#1e90ff',
//     secondary: '#D1E8FF',
//   },
//   yellow: {
//     primary: '#e3bc08',
//     secondary: '#FDF1BA',
//   },
// };

@Component({
  selector: 'app-calander',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent implements OnInit {
  

  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  newEvent!: CalendarEvent;

  constructor() {
    this.initializeNewEvent();
  }

  ngOnInit(): void {
    this.checkAlerts();
  }

  initializeNewEvent(): void {
    this.newEvent = {
      start: new Date(),
      title: '',
      color: { primary: '#ad2121', secondary: '#FAE3E3' }
    };
  }

  addEvent(): void {
    if (!this.newEvent.color) {
      this.newEvent.color = { primary: '#ad2121', secondary: '#FAE3E3' };
    }

    this.events = [
      ...this.events,
      {
        title: this.newEvent.title,
        start: new Date(this.newEvent.start),
        end: addDays(new Date(this.newEvent.start), 1), // Ensure end is set
        color: { primary: this.newEvent.color.primary, secondary: '#FAE3E3' },
        draggable: false,
        resizable: {
          beforeStart: false,
          afterEnd: false
        }
      }
    ];

    this.initializeNewEvent(); // Reset the form
  }

  updateEventColor(event: Event, calendarEvent: CalendarEvent): void {
    const input = event.target as HTMLInputElement;
    if (!calendarEvent.color) {
      calendarEvent.color = { primary: input.value, secondary: '#FAE3E3' };
    } else {
      calendarEvent.color.primary = input.value;
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    alert(`${action}: ${event.title}`);
  }

  checkAlerts(): void {
    setInterval(() => {
      const now = new Date();
      this.events.forEach(event => {
        if (event.start < now && event.end && event.end > now) { // Check if end exists
          alert(`Event "${event.title}" is currently happening!`);
        } else if (event.end && event.end < now) { // Check if end exists
          alert(`Event "${event.title}" has ended.`);
        }
      });
    }, 60000); // Check every minute

}
}


































//   @ViewChild('modalContent', { static: true })
//   modalContent!: TemplateRef<any>;

//   view: CalendarView = CalendarView.Month;

//   CalendarView = CalendarView;

//   viewDate: Date = new Date();

//   modalData!: {
//     action: string;
//     event: CalendarEvent;
//   };

//   actions: CalendarEventAction[] = [
//     {
//       label: '<i class="fas fa-fw fa-pencil-alt"></i>',
//       a11yLabel: 'Edit',
//       onClick: ({ event }: { event: CalendarEvent }): void => {
//         this.handleEvent('Edited', event);
//       },
//     },
//     {
//       label: '<i class="fas fa-fw fa-trash-alt"></i>',
//       a11yLabel: 'Delete',
//       onClick: ({ event }: { event: CalendarEvent }): void => {
//         this.events = this.events.filter((iEvent) => iEvent !== event);
//         this.handleEvent('Deleted', event);
//       },
//     },
//   ];

//   refresh = new Subject<void>();

//   events: CalendarEvent[] = [
//     {
//       start: subDays(startOfDay(new Date()), 1),
//       end: addDays(new Date(), 1),
//       title: 'A 3 day event',
//       color: { ...colors['red'] },
//       actions: this.actions,
//       allDay: true,
//       resizable: {
//         beforeStart: true,
//         afterEnd: true,
//       },
//       draggable: true,
//     },
//     {
//       start: startOfDay(new Date()),
//       title: 'An event with no end date',
//       color: { ...colors['yellow'] },
//       actions: this.actions,
//     },
//     {
//       start: subDays(endOfMonth(new Date()), 3),
//       end: addDays(endOfMonth(new Date()), 3),
//       title: 'A long event that spans 2 months',
//       color: { ...colors['blue'] },
//       allDay: true,
//     },
//     {
//       start: addHours(startOfDay(new Date()), 2),
//       end: addHours(new Date(), 2),
//       title: 'A draggable and resizable event',
//       color: { ...colors['yellow'] },
//       actions: this.actions,
//       resizable: {
//         beforeStart: true,
//         afterEnd: true,
//       },
//       draggable: true,
//     },
//   ];

//   activeDayIsOpen: boolean = true;

//   constructor(private modal: NgbModal) {}

//   dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
//     if (isSameMonth(date, this.viewDate)) {
//       if (
//         (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
//         events.length === 0
//       ) {
//         this.activeDayIsOpen = false;
//       } else {
//         this.activeDayIsOpen = true;
//       }
//       this.viewDate = date;
//     }
//   }

//   eventTimesChanged({
//     event,
//     newStart,
//     newEnd,
//   }: CalendarEventTimesChangedEvent): void {
//     this.events = this.events.map((iEvent) => {
//       if (iEvent === event) {
//         return {
//           ...event,
//           start: newStart,
//           end: newEnd,
//         };
//       }
//       return iEvent;
//     });
//     this.handleEvent('Dropped or resized', event);
//   }

//   handleEvent(action: string, event: CalendarEvent): void {
//     this.modalData = { event, action };
//     this.modal.open(this.modalContent, { size: 'lg' });
//   }

//   addEvent(): void {
//     this.events = [
//       ...this.events,
//       {
//         title: 'New event',
//         start: startOfDay(new Date()),
//         end: endOfDay(new Date()),
//         color: colors['red'],
//         draggable: true,
//         resizable: {
//           beforeStart: true,
//           afterEnd: true,
//         },
//       },
//     ];
//   }

//   deleteEvent(eventToDelete: CalendarEvent) {
//     this.events = this.events.filter((event) => event !== eventToDelete);
//   }

//   setView(view: CalendarView) {
//     this.view = view;
//   }

//   closeOpenMonthViewDay() {
//     this.activeDayIsOpen = false;
//   }
// }
