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
let ConfigComponent = class ConfigComponent {
    constructor() {
        this.engine = new core_1.EventEmitter();
        this.term = new core_1.EventEmitter();
        this.termUser = new core_1.EventEmitter();
        this.termPass = new core_1.EventEmitter();
        this.data = new core_1.EventEmitter();
        this.dataUser = new core_1.EventEmitter();
        this.dataPass = new core_1.EventEmitter();
        this.patient = new core_1.EventEmitter();
    }
    setEngineEvent() {
        var engineURL = $('#engineUrl').val();
        this.engine.emit(engineURL);
    }
    setTermEvent() {
        var termURL = $('#termUrl').val();
        this.term.emit(termURL);
    }
    setTermUserEvent() {
        var termUSER = $('#termUser').val();
        this.termUser.emit(termUSER);
    }
    setTermPassEvent() {
        var termPASS = $('#termPass').val();
        this.termPass.emit(termPASS);
    }
    setDataEvent() {
        var dataURL = $('#dataUrl').val();
        this.data.emit(dataURL);
    }
    setDataUserEvent() {
        var dataUSER = $('#dataUser').val();
        this.dataUser.emit(dataUSER);
    }
    setDataPassEvent() {
        var dataPASS = $('#dataPass').val();
        this.dataPass.emit(dataPASS);
    }
    setPatientEvent() {
        var patient = $('#patientId').val();
        this.patient.emit(patient);
    }
};
__decorate([
    core_1.Output('engine'),
    __metadata("design:type", Object)
], ConfigComponent.prototype, "engine", void 0);
__decorate([
    core_1.Output('term'),
    __metadata("design:type", Object)
], ConfigComponent.prototype, "term", void 0);
__decorate([
    core_1.Output('termUser'),
    __metadata("design:type", Object)
], ConfigComponent.prototype, "termUser", void 0);
__decorate([
    core_1.Output('termPass'),
    __metadata("design:type", Object)
], ConfigComponent.prototype, "termPass", void 0);
__decorate([
    core_1.Output('data'),
    __metadata("design:type", Object)
], ConfigComponent.prototype, "data", void 0);
__decorate([
    core_1.Output('dataUser'),
    __metadata("design:type", Object)
], ConfigComponent.prototype, "dataUser", void 0);
__decorate([
    core_1.Output('dataPass'),
    __metadata("design:type", Object)
], ConfigComponent.prototype, "dataPass", void 0);
__decorate([
    core_1.Output('patient'),
    __metadata("design:type", Object)
], ConfigComponent.prototype, "patient", void 0);
ConfigComponent = __decorate([
    core_1.Component({
        selector: "runner-config",
        template: `
        <ngb-tabset>
            <ngb-tab title="Engine URL">
                <template ngbTabContent>
                    <div class="select-engine pull-left">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-4">
                                    <span>URL to CQL Execution Service:</span>
                                    <input type="text" class="form-control" id="engineUrl" (change)="setEngineEvent()" placeholder="http://cql.dataphoria.org/cql/evaluate">
                                </div>
                            </div>                            
                        </div>                        
                    </div>
                </template>
            </ngb-tab>
            <ngb-tab title="Terminology URL">
                <template ngbTabContent>                    
                    <div class="select-terminology pull-left">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-4">
                                    <span>URL to the terminology service:</span>
                                    <input type="text" class="form-control" id="termUrl" (change)="setTermEvent()" placeholder="http://fhirtest.uhn.ca/baseDstu3">
                                </div>
                                <div class="col-lg-4">
                                    <span>User Name:</span>
                                    <input type="text" class="form-control" id="termUser" (change)="setTermUserEvent()" placeholder="if applicable">
                                </div>
                                <div class="col-lg-4">
                                    <span>Password:</span>
                                    <input type="password" class="form-control" id="termPass" (change)="setTermPassEvent()" placeholder="if applicable">
                                </div>    
                            </div>                     
                        </div>                        
                    </div>
                </template>
            </ngb-tab>
            <ngb-tab title="Data URL">
                <template ngbTabContent>                    
                    <div class="select-data pull-left">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-4">
                                    <span>URL to FHIR resource provider:</span>
                                    <input type="text" class="form-control" id="dataUrl" (change)="setDataEvent()" placeholder="http://fhirtest.uhn.ca/baseDstu3">
                                </div>
                                <div class="col-lg-4">
                                    <span>User Name:</span>
                                    <input type="text" class="form-control" id="dataUser" (change)="setDataUserEvent()" placeholder="if applicable">
                                </div>
                                <div class="col-lg-4">
                                    <span>Password:</span>
                                    <input type="password" class="form-control" id="dataPass" (change)="setDataPassEvent()" placeholder="if applicable">
                                </div>    
                            </div>                     
                        </div>                        
                    </div>
                </template>
            </ngb-tab>
            <ngb-tab title="Patient Info">
                <template ngbTabContent>
                    <div class="select-patient pull-left">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-4">
                                    <span>Unique Patient ID:</span>
                                    <input type="text" class="form-control" id="patientId" (change)="setPatientEvent()" placeholder="Null">
                                </div>
                            </div>                            
                        </div>                        
                    </div>  
                </template>
            </ngb-tab>
        </ngb-tabset>
    `,
        styles: [`

        .select-terminology, .select-engine, .select-patient, .select-data {
            width: 100%;
        }

        .row {
            padding-top: 10px;
        }
    `]
    })
], ConfigComponent);
exports.ConfigComponent = ConfigComponent;
//# sourceMappingURL=config.component.js.map