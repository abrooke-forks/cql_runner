"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let InputNavComponent = class InputNavComponent {
    constructor() {
        this.run = new core_1.EventEmitter();
    }
    setEvent() {
        this.run.emit();
    }
};
__decorate([
    core_1.Output('run'),
    __metadata("design:type", Object)
], InputNavComponent.prototype, "run", void 0);
InputNavComponent = __decorate([
    core_1.Component({
        selector: "input-nav",
        template: `
        <nav class="navbar navbar-default noMargin input">
            <div class="navbar-text in">
                <h4 class="self-center">Input</h4>
            </div>
            <div class="pull-right">
                <button class="run" [class.running]="running" (click)="setEvent()">
                    <div class="self-center">
                        Run
                    </div>
                    <i class="material-icons">play_arrow</i>
                </button>
            </div>
        </nav>
    `,
        styles: [`
        .hidden {
            display: none;
        }

        .noMargin {
            margin: 0px !important;
        }

        .in {
            color: #2f2f2f;            
        }

        button {
            border: none;
            color: white;
            font-size: 1em;
            padding: 0px;
            height: 70px !important;
            min-width: 70px;
            outline: none;
        }        

        .run {
            background-color: #4CAF50;
        }

        .input {
            border-bottom: 1px solid #efefef;
            border-top: none;
            border-right: none;
            border-left: none;
            height: 70px !important;
        }
    `]
    })
], InputNavComponent);
exports.InputNavComponent = InputNavComponent;
//# sourceMappingURL=input.nav.component.js.map