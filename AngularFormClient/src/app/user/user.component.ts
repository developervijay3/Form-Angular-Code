import { Component, OnInit } from '@angular/core';
import { FormPoster} from '../services/formPoste.service';
import { Login } from '../forms/loginModel/login.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userlist: Login[];
  constructor( private _formposter: FormPoster) {}

  ngOnInit(): void {

    this._formposter.getProducts()
        .subscribe((data) => this.userlist = data);
  }

}
