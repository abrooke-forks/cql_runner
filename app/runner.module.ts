import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RunnerComponent } from './runner.component';
import { RunnerDirective } from './runner.directive';
import { NavComponent } from './nav.component';
import { ConfigComponent } from './config.component';
import { InputNavComponent } from './input.nav.component';
import { OutputNavComponent } from './output.nav.component';
import { FooterComponent } from './footer.component';

@NgModule ({
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot()
    ],
    declarations: [
        RunnerComponent,
        NavComponent,
        ConfigComponent,
        InputNavComponent,
        OutputNavComponent,
        FooterComponent,
        RunnerDirective
    ],
    providers: [],
    bootstrap: [ RunnerComponent ]
})

export class RunnerModule {  }