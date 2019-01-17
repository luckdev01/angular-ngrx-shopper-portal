import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  Input
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';

import { Purchase } from '../../purchases.model';

export class PurchaseDataSource extends DataSource<any> {
  data: Purchase[];
  constructor(arr: Purchase[]) {
    super();
    this.data = arr;
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    const rows = [];

    this.data.forEach(element => {
      rows.push(element, { detailRow: true, element });
    });
    return of(rows);
  }

  disconnect() {}
}

@Component({
  selector: 'anms-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() purchases: Purchase[];
  dataSource: PurchaseDataSource = null;
  headerItems: string[];

  constructor() {}

  ngOnInit() {
    this.dataSource = new PurchaseDataSource(this.purchases);
    this.headerItems = Object.keys(this.purchases[0]);
  }

  isExpansionDetailRow = (i: number, row: Object) => {
    return row.hasOwnProperty('detailRow');
  };

  payNow() {
    console.log('paynow');
  }

  reSchedule() {
    console.log('reschedule');
  }
}
