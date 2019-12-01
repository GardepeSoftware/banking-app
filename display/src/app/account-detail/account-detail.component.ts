import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, filter } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { LoginComponent } from "../login/login.component";
import { AccountsService } from "../accounts.service";
import { Account } from "../models/account.model";

@Component({
  selector: "app-account-detail",
  templateUrl: "./account-detail.component.html",
  styleUrls: ["./account-detail.component.css"]
})
export class AccountDetailComponent implements OnInit {
  account: Account;

  constructor(
    private route: ActivatedRoute,
    private acctsService: AccountsService
  ) {}

  ngOnInit() {
    this.retrieveParams();
  }

  retrieveParams(): void {
    let accountName: string = this.route.snapshot.queryParamMap.get("account");

    this.acctsService.getAccount(accountName).subscribe(account => {
      this.account = account as Account;
    });

    if (this.account != null) {
      console.log("Retrieved account == " + this.account.name);
    }
  }
}
