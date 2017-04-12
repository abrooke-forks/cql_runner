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
let OutputNavComponent = class OutputNavComponent {
    constructor() {
        this.clearOutput = new core_1.EventEmitter();
    }
    setEvent() {
        this.clearOutput.emit();
    }
};
__decorate([
    core_1.Output('clearOutput'),
    __metadata("design:type", Object)
], OutputNavComponent.prototype, "clearOutput", void 0);
OutputNavComponent = __decorate([
    core_1.Component({
        selector: "output-nav",
        template: `
        <nav class="navbar navbar-default noMargin output">
            <div class="navbar-text out">
                <h4 class="self-center">Output</h4>
            </div>
            <div class="pull-right">
                <button class="clear" id="clearBtn" (click)="setEvent()">
                    <div class="self-auto">
                        Clear
                    </div>
                    <i class="material-icons" [hidden]="running">clear_all</i>
                </button>
            </div>
        </nav>
    `,
        styles: [`
        .clear {
            background-color: #2f2f2f;
        }

        .output {
            background-color: #272822;
            border-bottom: 1px solid #555651;
            border-top: none;
            border-right: none;
            border-left: none;
            border-radius: 0 !important;
            -moz-border-radius: 0 !important;
            height: 70px !important;        
        }

        .noMargin {
            margin: 0px !important;
        }

        .out {
            color: #efefef;
        }

        button {
            border: none;
            color: white;
            font-size: 1em;
            padding: 5px 10px;
            height: 70px !important;
            min-width: 70px;
        }

        button:focus {outline:0;}
    `]
    })
], OutputNavComponent);
exports.OutputNavComponent = OutputNavComponent;
//# sourceMappingURL=output.nav.component.js.map