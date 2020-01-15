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
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  getAllUsers() : void {
    this.http.get<Object[]>('https://reqres.in/api/users')
      .subscribe( users => this.allUsers = users )
  }

}