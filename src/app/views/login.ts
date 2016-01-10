import { Component } from 'angular2/core';
import { Authentication } from '../services/authentication';

@Component({
    selector: 'login',
    template: `
      <h1>Authenticate</h1>
      <h4>Is Authenticated? {{isAuthenticated}} </h4>
      <div *ngIf="!isAuthenticated">
        <input type="text" #userName required/>
        <input type="password" #password required/>
        <button (click)="authenticateUser(userName.value, password.value)">Login</button>
      </div>
      <div *ngIf="isAuthenticated">
        <button (click)="logOut()">Logout</button>
      <div>
    `
})
export default class Login{    
    public isAuthenticated = false;
    
    constructor(private autheticationService : Authentication){
        
    }
    
    authenticateUser(userName: string, password: string){
        this.autheticationService.authenticate(userName, password).then((res : boolean) => {
            this.isAuthenticated = res;
        });
    }
    
    logOut(){
        this.autheticationService.logOut();
        this.isAuthenticated = false;
    }
}