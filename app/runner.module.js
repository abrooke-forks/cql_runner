"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const platform_browser_1 = require("@angular/platform-browser");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const runner_component_1 = require("./runner.component");
const runner_directive_1 = require("./runner.directive");
const nav_component_1 = require("./nav.component");
const config_component_1 = require("./config.component");
const input_nav_component_1 = require("./input.nav.component");
const output_nav_component_1 = require("./output.nav.component");
const footer_component_1 = require("./footer.component");
let RunnerModule = class RunnerModule {
};
RunnerModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        declarations: [
            runner_component_1.RunnerComponent,
            nav_component_1.NavComponent,
            config_component_1.ConfigComponent,
            input_nav_component_1.InputNavComponent,
            output_nav_component_1.OutputNavComponent,
            footer_component_1.FooterComponent,
            runner_directive_1.RunnerDirective
        ],
        providers: [],
        bootstrap: [runner_component_1.RunnerComponent]
    })
], RunnerModule);
exports.RunnerModule = RunnerModule;
//# sourceMappingURL=runner.module.js.map