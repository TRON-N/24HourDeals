import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subscription } from "rxjs";
import { ProductModel } from "src/app/models/product/product-model";
import { ProductService } from "src/app/services/product.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AccountService } from "src/app/services/accounts.service";
import { TransactionService } from "src/app/services/transaction.service";
import { BasketService } from "src/app/services/basket.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})

export class LoginPageComponent {

}