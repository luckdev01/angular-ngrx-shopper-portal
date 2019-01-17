import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PaymentMethods } from './../../account.model';

export interface DialogData {
  selectedType: string;
}

@Component({
  selector: 'anms-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit {
  paymentmethods: any;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.paymentmethods = PaymentMethods;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPaymentMethod(type) {
    console.log(type);
  }
}
