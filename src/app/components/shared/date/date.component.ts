import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { getFormatedDate } from '../../../utils/date.utils';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {
  date: string = getFormatedDate()

  ngOnInit() {
    setInterval(() => {
      this.date = getFormatedDate()
    }, 60000);
  }
}
