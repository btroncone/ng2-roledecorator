import { Component, Injector } from 'angular2/core';
import { Roles } from '../decorators/roles';

@Component({
	selector: 'home',
	template: `<h1>{{title}}</h1>`
})
@Roles('TEST')
export default class Home{ 
	public title = "Home View!";
}

