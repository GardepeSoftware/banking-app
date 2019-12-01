import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
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
