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
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    // Send code statement
    post(code, engineServiceUri, engineUser, enginePass, fhirServiceUri, fhirUser, fhirPass, dataServiceUri, dataUser, dataPass, patientId) {
        let headers = new http_1.Headers({
            'Content-Type': 'text/plain'
        });
        var data = {
            "code": code,
            "fhirServiceUri": fhirServiceUri,
            "fhirUser": fhirUser,
            "fhirPass": fhirPass,
            "dataServiceUri": dataServiceUri,
            "dataUser": dataUser,
            "dataPass": dataPass,
            "patientId": patientId
        };
        // TODO: enable authorization for engine service
        return this.http
            .post(engineServiceUri, JSON.stringify(data), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};
ApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map;"use strict";
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
//# sourceMappingURL=config.component.js.map;"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let FooterComponent = class FooterComponent {
};
FooterComponent = __decorate([
    core_1.Component({
        selector: "footer",
        template: `
        <nav class="navbar navbar-default navbar-fixed-bottom">
            <div class="container-fluid nopadding">
                <div class="col-lg-5 nopadding self-center navbar-text text">This is an open source project - <a href="https://github.com/DBCG/cql_runner">feel free to leave feedback and/or contribute</a></div>
                <div class="col-lg-2 nopadding button self-center issues pull-right">
                    <a href="https://github.com/DBCG/cql_runner/issues/new">Report an issue<span class="glyphicon glyphicon-bullhorn issue"></span></a>
                </div>
            </div>
        </nav>
    `,
        styles: [`
        nav {
            height: 28px !important;
            min-height: 28px;
            background-color: #2f2f2f;
            border: none;
        }

        a {
            color: white;
        }

        .nopadding {
            padding: 0px;
            margin: 0px;
            height: 28px;
        }

        .issues {
            padding-top: 3px;
            width: 200px;
        }

        .issue {
            padding-left: 10px;
        }

        .text {
            padding-left: 5px;
            padding-top: 3px;
            color: white;
        }

        .button {
            background-color: #2196F3;
            border: none;
            color: white;
            font-size: 1em;
            height: 28px;
            text-align: center;
        }
    `]
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map;"use strict";
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
//# sourceMappingURL=input.nav.component.js.map;"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const runner_module_1 = require("./runner.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(runner_module_1.RunnerModule);
//# sourceMappingURL=main.js.map;"use strict";
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
//# sourceMappingURL=nav.component.js.map;"use strict";
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
//# sourceMappingURL=output.nav.component.js.map;"use strict";
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
const api_service_1 = require("./api.service");
const $ = require("jquery");
const CodeMirror = require("codemirror");
require("matchbrackets");
require("closebrackets");
require("activeline");
require("rulers");
require("simple");
let RunnerComponent = class RunnerComponent {
    constructor(_apiService) {
        this._apiService = _apiService;
        this.input = CodeMirror(document.getElementById("editor"));
        this.error = '';
        this.running = false;
        // TODO: Get these values from separate config file
        this.model = {
            fhirServiceUri: 'http://fhirtest.uhn.ca/baseDstu3',
            termUser: 'user ID',
            termPass: 'password',
            engineServiceUri: 'http://cql.dataphoria.org/cql/evaluate',
            engineUser: 'user ID',
            enginePass: 'password',
            dataServiceUri: 'http://fhirtest.uhn.ca/baseDstu3',
            dataUser: 'user ID',
            dataPass: 'password',
            patientId: 'null'
        };
        $('head').append('<link rel="stylesheet" href="./node_modules/codemirror/lib/codemirror.css">');
    }
    runScript() {
        this.clearOutput();
        if (!this.running) {
            this.running = true;
            this.runClassChange();
            this._apiService.post($('.CodeMirror')[0].CodeMirror.getValue(), this.model.engineServiceUri, this.model.engineUser, this.model.enginePass, this.model.fhirServiceUri, this.model.termUser, this.model.termPass, this.model.dataServiceUri, this.model.dataUser, this.model.dataPass, this.model.patientId)
                .then(responses => {
                this.processResponses(responses);
                this.running = false;
                this.runningClassChange();
            })
                .catch(error => {
                this.error = error;
                this.running = false;
                this.runningClassChange();
                this.oText += '>> Engine Service call failed: ' + error + '\n';
                this.displayOutput();
            });
        }
    }
    runClassChange() {
        $('.run div').text('Running..');
        $('.run i').addClass('hidden');
        $('.run').attr('class', 'running');
    }
    runningClassChange() {
        $('.running div').text('Run');
        $('.running i').removeClass('hidden');
        $('.running').attr('class', 'run');
    }
    // Tacks on line numbers from the given string location
    getNumberedResponses(responses) {
        for (let response of responses) {
            if (!response['translation-error'] && !response['error']) {
                response.line = parseInt(response.location.substring(response.location.indexOf("[") + 1, response.location.indexOf(":")));
            }
        }
        return responses;
    }
    processResponses(responses) {
        // TODO: Move this sorting/line property to service end
        responses = this.getNumberedResponses(responses);
        // // Sort responses in ascending order by line number
        responses = responses.sort(function (a, b) {
            return a.line == b.line ? 0 : +(a.line > b.line) || -1;
        });
        this.oText += '\n';
        for (let response of responses) {
            // Invalid expression – could not translate
            if (response['translation-error']) {
                this.oText += '>> Translation Error: ' + response['translation-error'] + '\n';
            }
            // Invalid expression – error with named expression
            if (response['error']) {
                this.oText += '>> Error: ' + response['error'] + '\n';
            }
            // Valid expression
            if (response['result']) {
                this.oText += '>> ' + response['name'] + ' ' + response.location + ' ' + response.result + '\n';
            }
        }
        this.displayOutput();
    }
    setEngine(event) {
        this.model.engineServiceUri = event;
    }
    setTerm(event) {
        this.model.fhirServiceUri = event;
    }
    setTermUser(event) {
        this.model.termUser = event;
    }
    setTermPass(event) {
        this.model.termPass = event;
    }
    setData(event) {
        this.model.dataServiceUri = event;
    }
    setDataUser(event) {
        this.model.dataUser = event;
    }
    setDataPass(event) {
        this.model.dataPass = event;
    }
    setPatient(event) {
        this.model.patientId = event;
    }
    clearOutput() {
        this.oText = '';
        var output = $('.CodeMirror')[1].CodeMirror;
        output.setValue("");
    }
    displayOutput() {
        $('.CodeMirror')[1].CodeMirror.setValue(this.oText);
    }
};
RunnerComponent = __decorate([
    core_1.Component({
        selector: 'cql-runner',
        template: `
        <main-nav></main-nav>
        <div class="container-fluid noPadding">
            <div class="col-lg-6 noPadding">
                <input-nav (run)="runScript()"></input-nav>
                <div class="noPadding">
                    <textarea cql-editor [theme]="'eclipse'" id="editor">// Enter CQL scripts here and hit 'Run'\n</textarea>
                </div>
            </div>
            <div class="col-lg-6 noPadding">
                <output-nav (clearOutput)="clearOutput()"></output-nav> 
                <div class="noPadding">
                    <textarea cql-editor                         
                        [id]="'editor2'" 
                        [lineNumbers]="false" 
                        [readOnly]="true" 
                        [ruler]="[{}]"
                        [styleActiveLine]="false"
                        id="editor2">// See results here</textarea>
                </div> 
            </div>
        </div>
        <div class="container-fluid">
            <runner-config 
                (engine)="setEngine($event)"
                (term)="setTerm($event)"
                (termUser)="setTermUser($event)"
                (termPass)="setTermPass($event)"
                (data)="setData($event)"
                (dataUser)="setDataUser($event)"
                (dataPass)="setDataPass($event)"
                (patient)="setPatient($event)">
            </runner-config>
        </div>
        <div>
            <footer></footer>
        </div>
    `,
        styles: [`
        @import "https://fonts.googleapis.com/icon?family=Material+Icons";
        :host {
            font-family: 'Seqoe UI', Halvetica, Tahoma, Geneva, Verdana, sans-serif;
            height: 100%;
        }        

        .noPadding {
            padding: 0px !important;
        } 

        .button.running {
            background-color: darkgrey;
        }

        .button.running:hover {
            cursor: default;
        }

        button:focus {outline:0;}       
    `],
        providers: [api_service_1.ApiService]
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], RunnerComponent);
exports.RunnerComponent = RunnerComponent;
//# sourceMappingURL=runner.component.js.map;"use strict";
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
const CodeMirror = require("codemirror");
CodeMirror.defineSimpleMode("cql", {
    start: [
        { regex: /\/\/.*/, token: "comment" },
        { regex: /\/\*/, token: "comment", next: "comment" },
        { regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: "string" },
        { regex: /'(?:[^\\]|\\.)*?(?:'|$)/, token: "string-2" },
        { regex: /[\{\[\(]/, indent: true },
        { regex: /[\}\]\)]/, dedent: true },
        {
            regex: /\b(context +)(Patient|Population)\b/,
            token: ["keyword", null]
        },
        {
            regex: /\b(predecessor +of|successor +of|singleton +from)\b/,
            token: "keyword"
        },
        {
            regex: /\b(year|month|day|hour|minute|second|millisecond|timezone|date|time) +from\b/,
            token: "keyword"
        },
        {
            regex: /\b(years|months|days|hours|minutes|seconds|milliseconds) +between\b/,
            token: "keyword"
        },
        {
            regex: /\b(width +of|such that)\b/,
            token: "keyword"
        },
        {
            regex: /\b(Coalesce|is +null|is +not +null)\b/,
            token: "keyword"
        },
        {
            regex: /\b(difference)( +in +)(years|months|days|hours|minutes|seconds|milliseconds)( +between)\b/,
            token: ["keyword", "keyword", "keyword", "keyword"]
        },
        {
            regex: /\b(start|end)( +of)\b/,
            token: ["keyword", "keyword"]
        },
        {
            regex: /\b(properly +)(contains|includes|during|included +in)\b/,
            token: ["keyword", "keyword"]
        },
        {
            regex: /\b(contains|includes|during|included +in)\b/,
            token: ["keyword", "keyword"]
        },
        {
            regex: /\b(properly +)(between)\b/,
            token: ["keyword", "keyword"]
        },
        {
            regex: /\b(same +)(year|month|day|hour|minute|second|millisecond)( +)(or +before|or +after|as)\b/,
            token: ["keyword", "keyword", null, "keyword"]
        },
        {
            regex: /\b(same +)(or +before|or +after|as)\b/,
            token: ["keyword", "keyword"]
        },
        {
            regex: /\b(properly +)(within +)(\d+)(\s+)(year|month|day|hour|minute|second|millisecond)( +of)\b/,
            token: ["keyword", "keyword", "number", null, "keyword", "keyword"]
        },
        {
            regex: /\b(properly +)(within +)(\d+)(\s+)(years|months|days|hours|minutes|seconds|milliseconds)( +of)\b/,
            token: ["keyword", "keyword", "number", null, "keyword", "keyword"]
        },
        {
            regex: /\b(within +)(\d+)(\s+)(years|months|days|hours|minutes|seconds|milliseconds)( +of)\b/,
            token: ["keyword", "number", null, "keyword", "keyword"]
        },
        {
            regex: /\b(year|month|day|hour|minute|second|millisecond)( +or +)(less|more)( +)(before|after)\b/,
            token: ["keyword", "keyword", "keyword", null, "keyword"]
        },
        {
            regex: /\b(years|months|days|hours|minutes|seconds|milliseconds)( +or +)(less|more)( +)(before|after)\b/,
            token: ["keyword", "keyword", "keyword", "keyword", "keyword"]
        },
        {
            regex: /\b(year|month|day|hour|minute|second|millisecond)( +)(before|after)\b/,
            token: ["keyword", null, "keyword"]
        },
        {
            regex: /\b(years|months|days|hours|minutes|seconds|milliseconds)( +)(before|after)\b/,
            token: ["keyword", null, "keyword"]
        },
        {
            regex: /\b(CalculateAge)(In)(Years|Months|Days|Hours|Minutes|Seconds)(At)\b/,
            token: ["keyword", "keyword", "keyword", "keyword"]
        },
        {
            regex: /\b(CalculateAge)(In)(Years|Months|Days|Hours|Minutes|Seconds)\b/,
            token: ["keyword", "keyword", "keyword"]
        },
        {
            regex: /\b(Age)(In)(Years|Months|Days|Hours|Minutes|Seconds)(At)\b/,
            token: ["keyword", "keyword", "keyword", "keyword"]
        },
        {
            regex: /\b(Age)(In)(Years|Months|Days|Hours|Minutes|Seconds)\b/,
            token: ["keyword", "keyword", "keyword"]
        },
        {
            regex: /\b(sort +)(ascending|descending)( +by)(.*)(ascending|descending)\b/,
            token: ["keyword", "keyword", "keyword", null, "keyword"]
        },
        {
            regex: /\b(sort +)(asc|desc)( +by)(.*)(asc|desc)\b/,
            token: ["keyword", "keyword", "keyword", null, "keyword"]
        },
        {
            regex: /\b(sort +)(by)(.*)(ascending|descending)\b/,
            token: ["keyword", "keyword", null, "keyword"]
        },
        {
            regex: /\b(sort +)(by)(.*)(asc|desc)\b/,
            token: ["keyword", "keyword", null, "keyword"]
        },
        {
            regex: /\b(by)(.*)(ascending|descending)\b/,
            token: ["keyword", null, "keyword"]
        },
        {
            regex: /\b(by)(.*)(asc|desc)\b/,
            token: ["keyword", null, "keyword"]
        },
        {
            regex: /\B\@\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}\b/,
            token: "tag"
        },
        {
            regex: /\B\@\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
            token: "tag"
        },
        {
            regex: /\B\@\d{4}-\d{2}-\d{2}T\d{2}:\d{2}\b/,
            token: "tag"
        },
        {
            regex: /\B\@\d{4}-\d{2}-\d{2}T\d{2}\b/,
            token: "tag"
        },
        {
            regex: /\B\@\d{4}-\d{2}-\d{2}\b/,
            token: "tag"
        },
        {
            regex: /\B\@\d{4}-\d{2}\b/,
            token: "tag"
        },
        {
            regex: /\B\@\d{4}\b/,
            token: "tag"
        },
        {
            regex: /\B\@T\d{2}:\d{2}:\d{2}\b/,
            token: "tag"
        },
        {
            regex: /\B\@T\d{2}:\d{2}:\d{2}\b/,
            token: "tag"
        },
        {
            regex: /\B\@T\d{2}:\d{2}\b/,
            token: "tag"
        },
        {
            regex: /\B\@T\d{2}\b/,
            token: "tag"
        },
        {
            sol: true,
            regex: /(after|all|and|as|asc|ascending|before|between|by|called|case|cast|codesystem|codesystems|collapse|contains|convert|day|days|default|define|desc|descending|difference|display|distinct|div|duration|during|else|end|ends|except|exists|flatten|from|function|hour|hours|if|implies|in|include|includes|intersect|is|let|library|maximum|meets|millisecond|milliseconds|minimum|minute|minutes|mod|month|months|not|occurs|of|or|overlaps|parameter|predecessor|private|public|return|same|singleton|second|seconds|start|starts|successor|then|to|union|using|valueset|version|week|weeks|where|when|with|within|without|xor|year|years)\b/,
            token: "keyword"
        },
        {
            regex: /(\w\W|\W)(after|all|and|as|asc|ascending|before|between|by|called|case|cast|codesystem|codesystems|collapse|contains|convert|day|days|default|define|desc|descending|difference|display|distinct|div|duration|during|else|end|ends|except|exists|flatten|from|function|hour|hours|if|implies|in|include|includes|intersect|is|let|library|maximum|meets|millisecond|milliseconds|minimum|minute|minutes|mod|month|months|not|occurs|of|or|overlaps|parameter|predecessor|private|public|return|same|singleton|second|seconds|start|starts|successor|then|to|union|using|valueset|version|week|weeks|where|when|with|within|without|xor|year|years)\b/,
            token: [null, "keyword"]
        },
        {
            sol: true,
            regex: /(Any|Boolean|Code|Concept|DateTime|Decimal|Integer|Interval|List|Quantity|String|Time|Tuple|AllTrue|AnyTrue|Avg|Count|Max|Min|Median|Mode|PopulationStdDev|PopulationVariance|StdDev|Sum|Variance|First|IndexOf|Last|Length|Now|TimeOfDay|Today|Combine|Length|Lower|PositionOf|Split|Substring|Upper|Abs|Ceiling|Floor|Log|Ln|Round|Truncate|ToBoolean|ToConcept|ToDateTime|ToDecimal|ToInteger|ToQuantity|ToString|ToTime)\b/,
            token: "builtin"
        },
        {
            regex: /(\w\W|\W)(Any|Boolean|Code|Concept|DateTime|Decimal|Integer|Interval|List|Quantity|String|Time|Tuple|AllTrue|AnyTrue|Avg|Count|Max|Min|Median|Mode|PopulationStdDev|PopulationVariance|StdDev|Sum|Variance|First|IndexOf|Last|Length|Now|TimeOfDay|Today|Combine|Length|Lower|PositionOf|Split|Substring|Upper|Abs|Ceiling|Floor|Log|Ln|Round|Truncate|ToBoolean|ToConcept|ToDateTime|ToDecimal|ToInteger|ToQuantity|ToString|ToTime)\b/,
            token: [null, "builtin"]
        },
        {
            sol: true,
            regex: /(true|false|null)\b/,
            token: "atom"
        },
        {
            regex: /(\w\W|\W)[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?\b/i,
            token: "number"
        },
        {
            regex: /(\w\W|\W)(true|false|null)\b/,
            token: [null, "atom"]
        }
    ],
    // The multi-line comment state.
    comment: [
        { regex: /.*?\*\//, token: "comment", next: "start" },
        { regex: /.*/, token: "comment" }
    ],
    // The meta property contains global information about the mode.
    meta: {
        dontIndentStates: ["comment"],
        lineComment: "//"
    }
});
let RunnerDirective = class RunnerDirective {
    constructor() {
        this._id = "editor";
        this._mode = "cql";
        this._theme = "monokai";
        this._value = "// Enter your CQL script here and press 'Run'\n// The results are displayed in the console to the right\n";
        this._lineNumbers = true;
        this._readOnly = false;
        this._ruler = [{ color: "#efefef", column: 70, lineStyle: "solid" }];
        this._styleActiveLine = true;
    }
    ngAfterViewInit() {
        this.editor = CodeMirror.fromTextArea(document.getElementById(this._id), {
            value: this._value,
            mode: this._mode,
            theme: this._theme,
            lineNumbers: this._lineNumbers,
            readOnly: this._readOnly,
            autoFocus: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            styleActiveLine: this._styleActiveLine,
            rulers: this._ruler
        });
    }
    set id(id) {
        this._id = id;
    }
    set mode(mode) {
        this._mode = mode;
    }
    set theme(theme) {
        this._theme = theme;
    }
    set value(value) {
        this._value = value;
    }
    set lineNumbers(lineNumbers) {
        this._lineNumbers = lineNumbers;
    }
    set readOnly(readOnly) {
        this._readOnly = readOnly;
    }
    set styleActiveLine(styleActiveLine) {
        this._styleActiveLine = styleActiveLine;
    }
    set ruler(ruler) {
        this._ruler = ruler;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], RunnerDirective.prototype, "id", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], RunnerDirective.prototype, "mode", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], RunnerDirective.prototype, "theme", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], RunnerDirective.prototype, "value", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], RunnerDirective.prototype, "lineNumbers", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], RunnerDirective.prototype, "readOnly", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], RunnerDirective.prototype, "styleActiveLine", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], RunnerDirective.prototype, "ruler", null);
RunnerDirective = __decorate([
    core_1.Directive({
        selector: '[cql-editor]'
    })
], RunnerDirective);
exports.RunnerDirective = RunnerDirective;
//# sourceMappingURL=runner.directive.js.map;"use strict";
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