import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-page',
  templateUrl: './token-page.component.html',
  styleUrls: ['./token-page.component.css']
})
export class TokenPageComponent implements OnInit {

  token: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  setToken() {
    localStorage.setItem("tokenID", this.token);
    this.token = '';
  }

  removeToken() {
    localStorage.removeItem("tokenID");
  }

}
