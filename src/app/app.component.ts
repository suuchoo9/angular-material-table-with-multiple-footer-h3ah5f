import { Component } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
  a: number;
  b: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  displayedColumns: string[] = ['item', 'cost', 'a', 'b'];
  displayedColumns2: string[] = this.displayedColumns.map(x => `f2_${x}`);
  displayedColumns3: string[] = this.displayedColumns.map(x => `f3_${x}`);
  transactions: Transaction[] = [
    { item: 'Beach ball', cost: 4, a: 14, b: 10 },
    { item: 'Towel', cost: 5, a: 12, b: 15 },
    { item: 'Frisbee', cost: 2, a: 10, b: 12 },
    { item: 'Sunscreen', cost: 4, a: 25, b: 19 },
    { item: 'Cooler', cost: 25, a: 6, b: 14 },
    { item: 'Swim suit', cost: 15, a: 15, b: 9 },
    { item: 'Towel1', cost: 5, a: 12, b: 16 },
    { item: 'Football', cost: 2, a: 10, b: 13 },
    { item: 'volleyball', cost: 28, a: 25, b: 20 },
    { item: 'bat', cost: 25, a: 26, b: 16 },
    { item: 'test', cost: 6, a: 11, b: 17 },
    { item: 'test2', cost: 3, a: 9, b: 11 },
    { item: 'test3', cost: 7, a: 24, b: 18 },
    { item: 'test4', cost: 22, a: 6, b: 14 }
  ];

  //total = this.transactions
  //  .map(t => t.cost)
  //  .reduce((acc, value) => acc + value, 0);

  /** Gets the total cost of all transactions. */
  getMinValue(columnName: any) {
    return this.transactions
      .map(t => t[columnName])
      .reduce((acc, value) => Math.min(acc, value));
  }

  getMinItem(columnName: any) {
    columnName = columnName.replace('f2_', '').replace('f3_', '');
    return this.transactions
      .map(t => t[columnName])
      .reduce((acc, value) => acc + value, 23);
  }

  countMinItem(columnName: string) {
    columnName = columnName.replace('f2_', '').replace('f3_', '');
    return this.transactions
      .map(t => t[columnName])
      .reduce((acc, value) => acc + value, 65);
  }
}
