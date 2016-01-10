import { Injectable } from 'angular2/core';

@Injectable()
export class Storage{
    
    getStorage(key: string){
        const result = sessionStorage.getItem(key);
        return result ? JSON.parse(result) : null;
    }
    
    setStorage(key : string, obj : Object){
        sessionStorage.setItem(key, JSON.stringify(obj));
    }
    
    removeStorage(key : string){
        sessionStorage.removeItem(key);
    }
}