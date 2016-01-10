import { Injectable } from 'angular2/core';
import { Subject } from 'rxjs';
import { Storage } from './storage';
import { CurrentUser } from '../interfaces/common';

@Injectable()
export class Authentication{
    _storageService : Storage;
    _userKey = "CURRENT_USER";
    currentUserInfo : Subject<CurrentUser> = new Subject<CurrentUser>();
    
    constructor(storageService : Storage){
        this._storageService = storageService;
        //this.currentUserInfo.;
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
    
    get userRoles() : Array<string> {
        const user = this._storageService.getStorage(this._userKey);
        return user ? user.roles : [];
        
    }
    
    private setCurrentUser(user : CurrentUser){
        this._storageService.setStorage(this._userKey, user);
    }
     
}