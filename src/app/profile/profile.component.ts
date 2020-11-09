import { Component, OnInit } from '@angular/core';
import {User}from '../user';
import {HttpClient} from '@angular/common/http';
import {ReposRequestService}from '../repos-request.service';
import {Repository} from '../repository';

@Component({
 selector: 'app-profile',
 templateUrl: './profile.component.html',
 providers:[ReposRequestService],
 styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 Users:User;
 repos:Repository;
 addNew(user){
   this.reposRequest.reposRequest(user)
   this.repos=this.reposRequest.repos
   this.Users= new User(user.name)
}
 constructor(private reposRequest:ReposRequestService) {
   this.Users= new User("");
   this.repos= new Repository(0,0,0,new Date(),"","");
 }
 ngOnInit() {
 }
}
