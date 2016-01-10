import { Injectable } from 'angular2/core';
import { Storage } from './storage';
import { CurrentUser } from '../interfaces/common';

@Injectable()
export class Authentication{
    private _storageService : Storage;
    private _userKey = "CURRENT_USER";
    
    constructor(storageService : Storage){
        this._storageService = storageService;
    }
    
    authenticate(name : string, password: string){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.setCurrentUser({
                    name,
                    roles : ['ADMIN']
                 });
                 resolve(true);
            }, 100);
        });
    }
    
    logOut(){
        this._storageService.removeStorage(this._userKey);
    }
    
    get currentUser() : CurrentUser {
        return this._storageService.getStorage(this._userKey);
    }
    
    private setCurrentUser(user : CurrentUser){
        this._storageService.setStorage(this._userKey, user);
    }
     
}