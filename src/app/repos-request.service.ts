import {Injectable } from '@angular/core';
import {Repository} from './repository';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from './user';
@Injectable({
 providedIn: 'root'
})
export class ReposRequestService {
 repos:Repository;
 constructor(private http:HttpClient) {
   this.repos=new Repository(0,0,0,new Date(),"","");
  }
  reposRequest(user){
    interface ApiResponse{
      repos:number;
      following:number;
      followers:number;
      created_at:Date;
      html_url:string;
      avatar_url:string;
  }
  let promise =new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>('https://api.github.com/users/'+user.name+'?access_token=2ca138163fed9df9c5a7e603c54fe065138de72c ').toPromise().then(response=>{
        this.repos.repos=response.repos
        this.repos.following=response.following
        this.repos.followers=response.followers
        this.repos.created_at=response.created_at
       this.repos.html_url=response.html_url
       this.repos.avatar_url=response.avatar_url
        resolve()
    },
    error=>{
            reject(error)
            console.log(user.name)
        }
    )
})
return promise
}
}
