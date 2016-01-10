import { Component } from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import Home from './views/home';
import Away from './views/away';
import Login from './views/login';
import { Authentication } from './services/authentication';

@Component({
	selector: `app`,
	directives: [ROUTER_DIRECTIVES],
	template: `
		<header>
      		<h1 class="title">{{ title }}</h1>
			<nav>
				<div>
                    <a [routerLink]="['Home']">
                        Home
                    </a>
                    -Requires Admin Role
                </div>
				<div>
                    <a [routerLink]="['Away']">
                        Away
                    </a>
                    -No Authentication Required
                </div>
                <div>
                    <a [routerLink]="['Login']">
                        Login
                    </a>
                </div>
			</nav>
    	</header>
		<main>
			<router-outlet></router-outlet>
		</main>
	`
})
@RouteConfig([
    { path: '/login', component: Login, name: 'Login', useAsDefault: true},
	{ path: '/home', component: Home, name: 'Home'},
	{ path: '/away', component: Away, name: 'Away'}
])
export class App {
	title : string;
    
	constructor(){
		this.title = "Angular 2 - Role Decorator Demo";
	}
}