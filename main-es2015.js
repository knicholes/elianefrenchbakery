(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Meet the people behind Eliane French Bakery</h1>\n<p>Eliane came over to the United States from Tahiti with her family in ?2006?.  She had a passion\nfor making delicious French food and trained with the best.  Now, both the store that \nshares her name and the treasures sold inside are a bold testament of how she has \nmastered the art and science of creating delicious, gorgeous French food.  \n</p>\n<p>Working along side her every day is her son Jacques.  He shares Eliane's passion\nfor spectacular French food and finds joy in sharing the culinary journey\nwith his customers.  When you depart from Eliane's, you're sure to find yourself\nwith both a full belly and a full heart, because Jacques really takes the time to get\nto know each and every one of his customers.  You'll be sure to hear him say some of his\nsignature catch phrases like, \"Soooo good!\", \"Have a GREAT day!\" and a big \nthumbs-up accompanied by an even bigger smile.</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <a routerLink=\"/products\"><div class=\"logo\"><img class=\"logo\" src=\"assets/logo.png\" alt=\"Eliane French Bakery\"></div></a>\n  <a routerLink=\"/products\"><button mat-raised-button>Menu</button></a>\n  <span class=\"example-fill-remaining-space\"></span>\n  <a routerLink=\"/about\"><button mat-raised-button>About Us</button></a>\n  <a routerLink=\"/contact\"><button mat-raised-button>Contact Us</button></a>\n</mat-toolbar>\n<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p> We would love to hear from you!  Please use the form below to share a message with us</p>\n\n<form action=\"mailto:elianefrenchbakery@gmail.com\" class=\"example-container\">\n  <mat-form-field>\n    <input type=\"email\" name=\"email\" matInput placeholder=\"What's your email address?\">\n  </mat-form-field>\n\n    <mat-form-field>\n    <input type=\"text\" name=\"text\" matInput placeholder=\"What's your name?\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput name=\"message\" placeholder=\"What would you like to say?\"></textarea>\n  </mat-form-field>\n\n  <button type=\"submit\" mat-raised-button color=\"primary\">Submit</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-container\">\n    <div *ngFor=\"let product of products\">\n        <mat-card class=\"example-card\">\n            <mat-card-header>\n                <mat-card-title>{{ product.name }}</mat-card-title>\n                <mat-card-subtitle *ngIf=\"product.price; else elseBlock\">{{ product.price | currency }}</mat-card-subtitle>\n                <ng-template #elseBlock><mat-card-subtitle>Call us for price</mat-card-subtitle></ng-template>\n            </mat-card-header>\n            <img mat-card-image src=\"/elianefrenchbakery/assets/products/thumbnails/{{product.img}}\"\n                alt=\"Photo of {{product.name}}\">\n            <mat-card-content>\n                <div *ngIf=\"product.description\">\n                    Description: {{ product.description }}\n                </div>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about/about.component.styl":
/*!********************************************!*\
  !*** ./src/app/about/about.component.styl ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p,\nh1 {\n  padding: 0 50px 0 50px;\n}\n/*# sourceMappingURL=src/app/about/about.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQ0ksc0JBQVM7QUNFYjtBQUNBLDREQUE0RCIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsicCwgaDEge1xuICAgIHBhZGRpbmc6IDAgNTBweCAwIDUwcHg7XG59IiwicCxcbmgxIHtcbiAgcGFkZGluZzogMCA1MHB4IDAgNTBweDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.styl */ "./src/app/about/about.component.styl")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");






const routes = [
    { path: 'products', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-fill-remaining-space {\n/* This fills the remaining space, by using flexbox. \n     Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\nmat-toolbar.button {\n  margin-right: 8px;\n}\nmat-toolbar > a > button {\n  margin-right: 8px;\n}\n.logo {\n  height: 52px;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNFO21EQ0NpRDtFRENqRCxtQkFBTTtVQUFOLGNBQU07QUNDUjtBREVBO0VBQ0ksaUJBQWE7QUNBakI7QURHQTtFQUNJLGlCQUFhO0FDRGpCO0FESUE7RUFDSSxZQUFRO0VBQ1IsaUJBQWM7QUNGbEI7QUFDQSxvREFBb0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5tYXQtdG9vbGJhci5idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDo4cHg7XG59XG5cbm1hdC10b29sYmFyID4gYSA+IGJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OjhweDtcbn1cblxuLmxvZ28ge1xuICAgIGhlaWdodDogNTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn0iLCIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4vKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbm1hdC10b29sYmFyLmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxubWF0LXRvb2xiYXIgPiBhID4gYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubG9nbyB7XG4gIGhlaWdodDogNTJweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'elianefrenchbakery';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductListComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.styl":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.styl ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.example-container > mat-form-field {\n  width: 90%;\n}\np {\n  padding: 0 50px 0 50px;\n}\n/*# sourceMappingURL=src/app/contact/contact.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQVM7RUFBVCxhQUFTO0VBQ1QsNEJBQWdCO0VBQWhCLDZCQUFnQjtVQUFoQixzQkFBZ0I7RUFDaEIseUJBQWE7VUFBYixtQkFBYTtBQ0NmO0FERUE7RUFDRSxVQUFPO0FDQVQ7QURHQTtFQUNJLHNCQUFTO0FDRGI7QUFDQSxnRUFBZ0UiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbnAge1xuICAgIHBhZGRpbmc6IDAgNTBweCAwIDUwcHg7XG59IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciA+IG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDkwJTtcbn1cbnAge1xuICBwYWRkaW5nOiAwIDUwcHggMCA1MHB4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.styl */ "./src/app/contact/contact.component.styl")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/product-list/product-list.component.styl":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.styl ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\n  width: 300px;\n  margin: auto;\n  margin-bottom: 25px;\n}\n.product-container {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  align-content: space-evenly;\n  margin-top: 25px;\n}\n/*# sourceMappingURL=src/app/product-list/product-list.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3NyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQU87RUFDUCxZQUFRO0VBQ1IsbUJBQWU7QUNDbkI7QURFQTtFQUNJLG9CQUFTO0VBQVQsYUFBUztFQUNULGVBQVc7RUFDWCw4QkFBaUI7VUFBakIsNkJBQWlCO0VBQ2pCLDJCQUFlO0VBQ2YsZ0JBQVk7QUNBaEI7QUFDQSwwRUFBMEUiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ucHJvZHVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufSIsIi5leGFtcGxlLWNhcmQge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5wcm9kdWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products */ "./src/app/products.ts");



let ProductListComponent = class ProductListComponent {
    constructor() {
        this.products = _products__WEBPACK_IMPORTED_MODULE_2__["products"];
    }
    ngOnInit() {
    }
};
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-list.component.styl */ "./src/app/product-list/product-list.component.styl")).default]
    })
], ProductListComponent);



/***/ }),

/***/ "./src/app/products.ts":
/*!*****************************!*\
  !*** ./src/app/products.ts ***!
  \*****************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const products = [
    {
        name: 'Vanilla Eclair',
        price: 3.75,
        description: '',
        img: 'vanilla_eclair.jpg'
    },
    {
        name: 'Millefueille (Napolean)',
        price: 4.95,
        description: '',
        img: 'millefueille_2.jpg'
    },
    {
        name: 'Paris Brest with Nutella',
        price: 3.75,
        description: '',
        img: 'paris_brest.jpg'
    },
    {
        name: 'Cream Puff',
        price: 3.75,
        description: '',
        img: 'cream_puff.jpg'
    },
    {
        name: 'French Macarons',
        price: 2.25,
        description: 'Lemon, raspberry, strawberry, pistachio, apple, hazelnut, blueberry, chocolate, coconut',
        img: 'macarons_2.jpg'
    },
    {
        name: 'Pear Almond Tart (large)',
        price: 25.00,
        description: '',
        img: 'pear_almond_tart_large.jpg'
    },
    {
        name: 'Peach Tart (large)',
        price: 25.00,
        description: '',
        img: 'peach_tart_large.jpg'
    },
    {
        name: 'Meringue',
        price: 1.50,
        description: '',
        img: 'meringue.jpg'
    },
    {
        name: 'Madeleines',
        price: 4.50,
        description: '',
        img: 'madeleines.jpg'
    },
    {
        name: 'Galette Bretonne (Butter Cookies)',
        price: 4.50,
        description: '',
        img: 'galette_bretonne_2.jpg'
    },
    {
        name: 'Almond Croissant',
        price: 3.95,
        description: '',
        img: 'almond_croissant.jpg'
    },
    {
        name: 'Butter Croissant',
        price: 1.95,
        description: '',
        img: 'butter_croissant_2.jpg'
    },
    {
        name: 'Pain Au Chocolat',
        price: 2.25,
        description: '',
        img: 'pain_au_chocolat_2.jpg'
    },
    {
        name: 'Chocolate Tart',
        price: 3.75,
        description: '',
        img: 'chocolate_tart_2.jpg'
    },
    {
        name: 'Lemon Tart',
        price: 3.75,
        description: '',
        img: 'lemon_tart.jpg'
    },
    {
        name: 'Fruit Tart',
        price: 3.75,
        description: '',
        img: 'fruit_tart.jpg'
    },
    {
        name: 'Fruit Tart (Large)',
        price: 25.00,
        description: '',
        img: 'fruit_tart_large_2.jpg'
    },
    {
        name: 'Pear Almond Tart',
        price: 3.75,
        description: '',
        img: 'pear_almond_tart_2.jpg'
    },
    {
        name: 'Pear Almond Tart Slice',
        price: 3.75,
        description: '',
        img: 'pear_almond_tart_slice.jpg'
    },
    {
        name: 'Chocolate Mousse Cigar',
        price: 3.75,
        description: '',
        img: 'chocolate_mousse_cigar.jpg'
    },
    {
        name: 'Chocolate Truffle',
        price: 2.25,
        description: '',
        img: 'chocolate_truffle.jpg'
    },
    {
        name: 'Raspberry Mousse Bavarois',
        price: 4.95,
        description: '',
        img: 'raspberry_mousse_bavarois.jpg'
    },
    {
        name: 'Raspberry Mousse Bavarois Large Heart',
        price: 25.00,
        description: '',
        img: 'raspberry_mousse_bavarois_large_heart_2.jpg'
    },
    {
        name: 'Lemon Cheesecake Bavarois',
        price: 4.95,
        description: '',
        img: 'lemon_cheesecake_bavarois.jpg'
    },
    {
        name: 'Raspberry Cheesecake Bavarois',
        price: 4.95,
        description: '',
        img: 'raspberry_cheesecake_bavarois_2.jpg'
    },
    {
        name: 'Chocolate Eclair',
        price: 3.75,
        description: '',
        img: 'chocolate_eclair.jpg'
    },
    {
        name: 'Chocolate Religious',
        price: null,
        description: '',
        img: 'chocolate_religious.png'
    },
    {
        name: 'Vanilla Eclair',
        price: 3.75,
        description: '',
        img: 'vanilla_eclair.jpg'
    },
    {
        name: 'Strawberry Cake',
        price: 4.95,
        description: '',
        img: 'strawberry_cake.jpg'
    },
    {
        name: 'Raspberry Charlotte',
        price: 0,
        description: '',
        img: 'raspberry_charlotte.jpg'
    },
    {
        name: 'Raspberry Charlotte (Large)',
        price: 0,
        description: '',
        img: 'raspberry_charlotte_large.jpg'
    },
    {
        name: 'BÛCHE DE NOËL',
        price: 0,
        description: '',
        img: 'buche_de_noel.png'
    },
    {
        name: 'Galette des Rois (King Cake)',
        price: 0,
        description: '',
        img: 'king_cake.png'
    },
    {
        name: 'Hachis Parmentier (Shepherd\'s Pie)',
        price: null,
        description: '',
        img: 'shepherds_pie.jpg'
    },
    {
        name: 'Quiche Lorraine (Entire Quiche)',
        price: 29.00,
        description: '',
        img: 'quiche_lorraine.png'
    },
    {
        name: 'Quiche Lorraine (Slice)',
        price: 4.95,
        description: '',
        img: 'quiche_lorraine.png'
    },
    {
        name: 'Croque Monsieur',
        price: null,
        description: '',
        img: 'croque_monsieur.png'
    },
    {
        name: 'Chicken Escalope',
        price: null,
        description: '',
        img: 'chicken_escalope.jpg'
    },
    {
        name: 'Beef Bourguignon',
        price: null,
        description: '',
        img: 'beef_bourguignon.png'
    },
    {
        name: 'Boeuf Mode (French Pot Roast)',
        price: null,
        description: 'Served with carrots and buttery potatoes',
        img: 'boeuf_mode.png'
    },
    {
        name: 'Tian de Pomme de Terre',
        price: null,
        description: 'Potatoes, cheese, onion, eggs, cream, and parsley',
        img: 'tian_de_pomme_de_terre.png'
    },
    {
        name: 'Stuffed Tomatoes',
        price: null,
        description: 'Tomatoes, ground beef, cheese served with buttered potatoes',
        img: 'stuffed_tomatoes.png'
    },
    {
        name: 'Apricot Croissant',
        price: 2.25,
        description: '',
        img: 'apricot_croissant.jpg'
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kelly/code/elianefrenchbakery/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map