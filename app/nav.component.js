"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let NavComponent = class NavComponent {
    constructor() {
        this.resources = false;
    }
    toggleResources() {
        this.resources = !this.resources;
    }
};
NavComponent = __decorate([
    core_1.Component({
        selector: "main-nav",
        template: `
        <nav class="navbar navbar-default navbar-static-top" id="header">
            <span class="title self-center">CQL Runner</span>
            <button (click)="toggleResources()" class="self-center button pull-right">
                <span class="self-center resLink">CQL Language Resources <i class="glyphicon glyphicon-question-sign"></i></span>
            </button>                 
        </nav>
        <div class="resources" [hidden]="!resources">
            <ul>
                <li><a href="https://github.com/DBCG/cql_engine/wiki" target="_blank">CQL Engine Documentation Home</a></li>
            </ul>
        </div>
    `,
        styles: [`
        span {
            display: inline-block;
            vertical-align: middle;
            line-height: normal;  
        }

        i {
            padding-top: 3px;
        }

        .resLink {
            padding-bottom: 4px;
        }

        .resources {
            background-color: #2196F3;
            color: white;
        }

        .resources ul {
            -webkit-margin-before: 0;
            -webkit-margin-after: 0;
            -webkit-margin-start: 0px;
            -webkit-margin-end: 0px;
            -webkit-padding-start: 40px;
            padding-top: 10px;
            padding-bottom: 10px;
            list-style: none;
            margin-bottom: 0 !important;
        }

        .resources a {
            color: white;
        }

        .resources a:hover {
            color: #fdfdfd;
        }
        
        [hidden] {
            display: none;
        }

        .navbar-static-top {
            min-height: 28px !important;
            height: 28px;
            color: white;
            background-color: #2f2f2f;
            margin: 0px;  
            border: none;
        }

        .title {            
            font-weight: 600;
            padding-left: 5px;
            padding-top: 3px;
            max-width: 200px;
            min-height: 28px !important;
        }

        #header .button {
            background-color: #2196F3;
            border: none;
            color: white;
            font-size: 1em;
            height: 28px;
            width: 200px;
        }

        #header .button:hover {
            cursor: pointer;
        }
    `]
    })
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map