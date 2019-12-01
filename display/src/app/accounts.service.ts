import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Account } from "./models/account.model";
import { AccountsStub } from "./stubs/AccountsStub";

@Injectable({
  providedIn: "root"
})
export class AccountsService {
  accountsStub: AccountsStub;
  accounts: Observable<Account[]>;

  constructor() {
    this.accountsStub = new AccountsStub();
  }

  getAccount(accountName: string): Observable<Account> {
    return this.accountsStub.getAccount(accountName);
  }

  getAllAccounts(): Observable<Account[]> {
    return this.accountsStub.getAllAccounts();
  }
}
