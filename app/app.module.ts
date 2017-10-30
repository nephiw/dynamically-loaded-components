import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RuntimeContentComponent } from './runtime-content.component';
import { RuntimeContentComponentDemo } from './runtime-content.component.demo';
import { RuntimeModule } from './runtime.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RuntimeModule
    ],
    declarations: [
        AppComponent,
        RuntimeContentComponent,
        RuntimeContentComponentDemo
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
