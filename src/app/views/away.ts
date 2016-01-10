import { Component } from 'angular2/core';

@Component({
	selector: 'away',
	template: `<h1>{{title}}</h1>`
})
export default class Away{
    public title : string = "Away View!";
}