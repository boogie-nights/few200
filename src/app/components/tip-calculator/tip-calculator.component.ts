import { Component } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html'
})
export class TipCalculatorComponent {

  tipPercent = .20;
  billAmount = 0;
  tipAmount = 0;
  totalAmount = 0;

  changeTipPercent(amount: number) {
    this.tipPercent = amount;
    this.calcTipAndTotal();
  }

  changeBillAmount(amount: number) {
    this.billAmount = amount;
    this.calcTipAndTotal();
  }

  calcTipAndTotal() {
    this.tipAmount = this.billAmount * this.tipPercent;
    this.totalAmount = this.billAmount + this.tipAmount;
  }
}
