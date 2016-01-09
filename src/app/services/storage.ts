import { Injectable } from 'angular2/core';

@Injectable()
export class Storage{
    
    getStorage(key: string){
        return sessionStorage.getItem(key);
    }
    
    setStorage(key, obj){
        sessionStorage.setItem(key, obj);
    }
}