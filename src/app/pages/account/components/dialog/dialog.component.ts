import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PaymentMethods, PaymentDialogs, Account } from './../../account.model';

export interface DialogData {
  type: string;
  account: Account;
  selectedType: string;
}

@Component({
  selector: 'anms-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit {
  cardForm: FormGroup;
  bankForm: FormGroup;
  paymentMethods: any;
  paymentDialogs: any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData
  ) {}

  ngOnInit() {
    this.cardForm = this.fb.group({
      card: new FormControl('', [Validators.required]),
      cardnumber: new FormControl('', [Validators.required]),
      month: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required])
    });
    this.bankForm = this.fb.group({
      bankinfo: new FormControl('', [Validators.required])
    });
    this.paymentMethods = PaymentMethods;
    this.paymentDialogs = PaymentDialogs;
  }
}
