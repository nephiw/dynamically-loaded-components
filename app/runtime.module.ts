import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LdcContentComponent } from "./ldcContent.component";
import { LdcStaticComponent } from "./ldcStatic.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        LdcContentComponent,
        LdcStaticComponent
    ],
    entryComponents: [
        LdcContentComponent,
        LdcStaticComponent
    ],
    exports: [
        LdcContentComponent,
        LdcStaticComponent
    ]
})
export class RuntimeModule {}
