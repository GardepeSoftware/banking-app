import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatListModule, MatCardModule } from "@angular/material";
import { Router } from "@angular/router";
import { Account } from "../models/account.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  accounts = [];

  constructor(private router: Router) {
    for (var i = 0; i < 4; i++) {
      let account = {
        name: "Personal",
        totalBalance: 750,
        availableBalance: 890
      } as Account;
      this.accounts.push(account);
    }
  }

  ngOnInit() {}

  accountClicked(name: string) {
    if (name != "") {
      this.router.navigateByUrl("account-detail");
    }
  }
}
