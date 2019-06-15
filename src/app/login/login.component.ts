import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: []
})
export class LoginComponent implements OnInit {
  username = new FormControl("");
  password = new FormControl("");

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.username);
    console.log(this.password);
  }

  authenticate() {
    if (this.username.value != "" && this.password.value != "") {
      this.router.navigateByUrl("home");
    }
  }
}
