import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  allUsers : Object[]
  oneUser : Object
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  getAllUsers() : void {
    this.oneUser = null
    this.http.get<Object[]>('https://reqres.in/api/users')
      .subscribe( users => this.allUsers = users )
  }

  getOneUsers() : void {
    this.allUsers = null;
    let userid = prompt("Enter user id:")
    this.http.get<Object>('https://reqres.in/api/users/' + userid)
      .subscribe( user => this.oneUser = user )
  }

}