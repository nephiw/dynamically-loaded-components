import { Component } from '@angular/core';

@Component({
    selector: 'runtime-content-demo',
    template: `
        <div>
            <h2>Runtime content</h2>
            <p>The available runtime components includes:</p>
            <ul>
                <li>ldcContent</li>
                <li>ldcStatic</li>
            </ul>
            <p>ldcContent has a property "ShowChild" which will turn on a child instance of ldcStatic that defaults to true.</p>
            <runtime-content></runtime-content>
        </div>
    `
})
export class RuntimeContentComponentDemo { }
