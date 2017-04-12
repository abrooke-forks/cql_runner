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
//# sourceMappingURL=runner.directive.js.map