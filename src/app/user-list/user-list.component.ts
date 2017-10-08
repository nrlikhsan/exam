import { Component, OnInit } from '@angular/core';
import { APIServiceService } from "../apiservice.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private api : APIServiceService) { }

  ngOnInit() {
  }

}
