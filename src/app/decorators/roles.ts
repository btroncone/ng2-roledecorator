import { Injector } from 'angular2/core';
import { CanActivate, ComponentInstruction } from 'angular2/router';
import { Authentication } from '../services/authentication';
import { Storage } from '../services/storage';
import { CurrentUser } from '../interfaces/common';


export const Roles = (...rolesAllowed : Array<string>) => {
    return CanActivate((next: ComponentInstruction, prev: ComponentInstruction) => {
        return isAllowedAccess(...rolesAllowed);
    });
};

const isAllowedAccess = (...rolesAllowed: Array<string>) => {
    
    return false;
};