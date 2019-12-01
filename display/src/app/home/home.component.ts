import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Routes, RouterModule } from "@angular/router";
import { ListboxModule } from "primeng/listbox";
import { SelectItem } from "primeng/api";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras
} from "@angular/router";
import { Account } from "../models/account.model";
import { AccountsService } from "../accounts.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  accounts: Account[];
  selectedAccount: Account;

  constructor(private router: Router, private acctsService: AccountsService) {
    this.acctsService.getAllAccounts().subscribe(accounts => {
      this.accounts = accounts as Account[];
    });
  }

  ngOnInit() {}

  openAccountDetail(accountName: string) {
    if (accountName != null) {
      this.router.navigate(["/account-detail"], {
        queryParams: { account: accountName }
      });
    }
  }
}
