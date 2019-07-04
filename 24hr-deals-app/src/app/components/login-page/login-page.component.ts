import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AccountService } from "src/app/services/accounts.service";
import { AccountModel } from "src/app/models/account/account-model";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private subscription = new Subscription();
  private accounts: AccountModel[];
  private account: AccountModel;

  constructor(private http: HttpClient,
    private accountService: AccountService) { }

  ngOnInit() {
  }
  onLogin(form: NgForm) {
    this.getAllAccounts();

  }
  getAllAccounts() {
    this.subscription.add(
      this.accountService.getAllAccounts().subscribe(res => {
        this.accounts = res;
        console.log(this.accounts);
      })
    );
  }
}
