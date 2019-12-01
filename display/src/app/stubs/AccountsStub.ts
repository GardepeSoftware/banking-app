import { Observable, of } from "rxjs";
import { Account } from "../models/account.model";

export class AccountsStub {
  accounts: Account[];

  constructor() {
    this.accounts = [];

    this.createStubAccounts();
  }

  createStubAccounts(): void {
    for (let i = 0; i < 15; i++) {
      let account = {
        name: "Personal" + i,
        totalBalance: 750,
        availableBalance: 890
      } as Account;

      this.accounts.push(account);

      account = {
        name: "Relationship" + i,
        totalBalance: 750,
        availableBalance: 890
      } as Account;

      this.accounts.push(account);
    }
  }

  getAccount(accountName: string): Observable<Account> {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].name === accountName) {
        return of(this.accounts[i]);
      }
    }
  }

  // Return all stub words in array
  getAllAccounts(): Observable<Account[]> {
    return of(this.accounts);
  }
}
