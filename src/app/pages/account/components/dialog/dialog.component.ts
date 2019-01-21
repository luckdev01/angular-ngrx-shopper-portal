import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PaymentMethods, PaymentDialog, Account } from './../../account.model';

export interface DialogData {
  type: string;
  accounts?: Account[];
  selectedType: string;
}

@Component({
  selector: 'anms-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit {
  paymentMethods: any;
  paymentDialog: any;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    console.log(this.data);
    this.paymentMethods = PaymentMethods;
    this.paymentDialog = PaymentDialog;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPaymentMethod(type) {
    console.log(type);
  }
}
