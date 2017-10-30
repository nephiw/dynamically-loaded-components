import { Component, Input } from '@angular/core';

@Component({
    selector: 'ldc-content',
    template: `
        <div>{{ testData }}</div>
        <ldc-static *ngIf="showChild"></ldc-static>
    `
})
export class LdcContentComponent {
    @Input() public showChild: boolean = true;

    public testData: string;

    constructor() {
        this.testData = 'This is content set with a component property.';
    }
}
