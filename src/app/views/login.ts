import { Component } from 'angular2/core';
import { Authentication } from '../services/authentication';
import { CurrentUser } from '../interfaces/common';

@Component({
    selector: 'login',
    template: `
      <h1>Authenticate</h1>
      <h4>Current User: {{currentUser | json}} </h4>
      <div *ngIf="!currentUser">
        <input type="text" #userName required/>
        <input type="password" #password required/>
        <button (click)="authenticateUser(userName.value, password.value)">Login</button>
      </div>
      <div *ngIf="currentUser">
        <button (click)="logOut()">Logout</button>
      <div>
    `
})
export default class Login{    
    currentUser : CurrentUser;
    
    constructor(private autheticationService : Authentication){
        this.currentUser = this.autheticationService.currentUser;
    }
    
    authenticateUser(userName: string, password: string){
        this.autheticationService.authenticate(userName, password).then(res => {
            this.currentUser = this.autheticationService.currentUser;
        });
    }
    
    logOut(){
        this.autheticationService.logOut();
        this.currentUser = null;
    }
}