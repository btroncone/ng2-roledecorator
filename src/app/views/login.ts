import { Component } from 'angular2/core';
import { Authentication } from '../services/authentication';

@Component({
    selector: 'login',
    template: `
      <h1>Authenticate</h1>
      <input type="text" #userName />
      <input type="password" #password />
      <button (click)="authenticateUser(userName.value, password.value)">Login</button>
    `
})
export default class Login{    
    constructor(private autheticationService : Authentication){
        
    }
    
    authenticateUser(userName: string, password: string){
        this.autheticationService.authenticate(userName, password).then((res) => {
            console.log(res);
        });
    }
}