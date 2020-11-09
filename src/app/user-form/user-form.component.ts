import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import {User} from '../user';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
newUser=new User("");
@Output() add=new EventEmitter<User>();
submitForm(){
  this.add.emit(this.newUser);
}
  constructor() { }

  ngOnInit() {
  }

}