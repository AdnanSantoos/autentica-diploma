import { AuthService } from './../service/auth.service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginservice:AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.loginservice.logout()
  }

}
