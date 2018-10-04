webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in_component__ = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_user_data_component__ = __webpack_require__("./src/app/user-data/user-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__otp_authentication_otp_authentication_component__ = __webpack_require__("./src/app/otp-authentication/otp-authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rewards_rewards_component__ = __webpack_require__("./src/app/rewards/rewards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__discounts_discounts_component__ = __webpack_require__("./src/app/discounts/discounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__invoice_invoice_component__ = __webpack_require__("./src/app/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__select_invoice_select_invoice_component__ = __webpack_require__("./src/app/select-invoice/select-invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__payables_payables_component__ = __webpack_require__("./src/app/payables/payables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__receivables_receivables_component__ = __webpack_require__("./src/app/receivables/receivables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__raise_ticket_raise_ticket_component__ = __webpack_require__("./src/app/raise-ticket/raise-ticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sales_report_sales_report_component__ = __webpack_require__("./src/app/sales-report/sales-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__individual_registration_individual_registration_component__ = __webpack_require__("./src/app/individual-registration/individual-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__individual_details_individual_details_component__ = __webpack_require__("./src/app/individual-details/individual-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__individual_receivables_individual_receivables_component__ = __webpack_require__("./src/app/individual-receivables/individual-receivables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__individual_payables_individual_payables_component__ = __webpack_require__("./src/app/individual-payables/individual-payables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__individual_reports_individual_reports_component__ = __webpack_require__("./src/app/individual-reports/individual-reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__landing_page_landing_page_component__ = __webpack_require__("./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__business_users_business_users_component__ = __webpack_require__("./src/app/business-users/business-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__individual_users_individual_users_component__ = __webpack_require__("./src/app/individual-users/individual-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__invoice_generation_invoice_generation_component__ = __webpack_require__("./src/app/invoice-generation/invoice-generation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_19__landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    // { path: 'select', component: SelectLoginTypeComponent },
    { path: 'businessData', component: __WEBPACK_IMPORTED_MODULE_21__business_users_business_users_component__["a" /* BusinessUsersComponent */] },
    { path: 'individualData', component: __WEBPACK_IMPORTED_MODULE_22__individual_users_individual_users_component__["a" /* IndividualUsersComponent */] },
    { path: 'signIn', component: __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'signUp', component: __WEBPACK_IMPORTED_MODULE_20__register_register_component__["a" /* RegisterComponent */] },
    { path: 'IndividualReg', component: __WEBPACK_IMPORTED_MODULE_14__individual_registration_individual_registration_component__["a" /* IndividualRegistrationComponent */] },
    { path: 'individualDetails', component: __WEBPACK_IMPORTED_MODULE_15__individual_details_individual_details_component__["a" /* IndividualDetailsComponent */],
        children: [
            { path: 'payables', component: __WEBPACK_IMPORTED_MODULE_17__individual_payables_individual_payables_component__["a" /* IndividualPayablesComponent */] },
            { path: 'receivables', component: __WEBPACK_IMPORTED_MODULE_16__individual_receivables_individual_receivables_component__["a" /* IndividualReceivablesComponent */] },
            { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_18__individual_reports_individual_reports_component__["a" /* IndividualReportsComponent */] }
        ]
    },
    { path: 'salesReport', component: __WEBPACK_IMPORTED_MODULE_13__sales_report_sales_report_component__["a" /* SalesReportComponent */] },
    { path: 'userData', component: __WEBPACK_IMPORTED_MODULE_4__user_data_user_data_component__["a" /* UserDataComponent */],
        children: [
            { path: 'invoice', component: __WEBPACK_IMPORTED_MODULE_9__select_invoice_select_invoice_component__["a" /* SelectInvoiceComponent */] },
            { path: 'payables', component: __WEBPACK_IMPORTED_MODULE_10__payables_payables_component__["a" /* PayablesComponent */] },
            { path: 'receivables', component: __WEBPACK_IMPORTED_MODULE_11__receivables_receivables_component__["a" /* ReceivablesComponent */] },
            { path: 'salesReport', component: __WEBPACK_IMPORTED_MODULE_13__sales_report_sales_report_component__["a" /* SalesReportComponent */] },
            { path: 'raiseTicket', component: __WEBPACK_IMPORTED_MODULE_12__raise_ticket_raise_ticket_component__["a" /* RaiseTicketComponent */] },
            { path: 'discounts', component: __WEBPACK_IMPORTED_MODULE_7__discounts_discounts_component__["a" /* DiscountsComponent */] },
            { path: 'invoiceTemplate', component: __WEBPACK_IMPORTED_MODULE_8__invoice_invoice_component__["a" /* InvoiceComponent */] },
            { path: 'generateInvoice', component: __WEBPACK_IMPORTED_MODULE_23__invoice_generation_invoice_generation_component__["a" /* InvoiceGenerationComponent */] },
            { path: 'businessPlan', component: __WEBPACK_IMPORTED_MODULE_6__rewards_rewards_component__["a" /* RewardsComponent */] },
            { path: 'myInfo', component: __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */] },
            { path: 'addNew', component: __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */] }
        ] },
    { path: 'otpVerification', component: __WEBPACK_IMPORTED_MODULE_5__otp_authentication_otp_authentication_component__["a" /* OtpAuthenticationComponent */] },
    { path: 'resetPswd', component: __WEBPACK_IMPORTED_MODULE_5__otp_authentication_otp_authentication_component__["a" /* OtpAuthenticationComponent */] },
    { path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".navStyles, .logo{\n  background-color: #003B45 !important;\n  color: #ECF0D0;\n}\n.renderPage{\n  margin-top: 56px;\n}\n.nav-link:hover,.logo:hover{\n  cursor: pointer;\n  color: #007bff !important;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navStyles py-0\">\n  <a class=\"navbar-brand logo\" *ngIf=\"!showProfile && !indProfile\" routerLink=\"/home\" >SMYDATA</a>\n  <span *ngIf=\"showProfile && !indProfile\" style=\"margin-left:500px\">\n    <li class=\"nav-item dropdown\" style=\"list-style:none;font-size:1.6rem\">\n   <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">Welcome to {{selectedBU}}</a>\n   <div class=\"dropdown-menu\">\n     <span class=\"dropdown-item\" style=\"cursor:pointer\" *ngFor=\"let bu of businessList.businessDetails\" (click)=\"changeBU(bu)\">{{bu.companyName | uppercase}}</span>\n   </div>\n </li>\n  </span>\n  <span class=\"navbar-text navRight loginsp\" >\n   <a class=\"nav-link\" *ngIf=\"!showProfile && !indProfile\">\n     <span routerLink=\"/signIn\">LOG IN</span>\n   </a>\n   <a class=\"nav-link\" *ngIf=\"indProfile\">\n     <span class=\"\" (click)=\"logOut()\"><a>Logout</a></span>\n   </a>\n    <li class=\"nav-item dropdown pr-4\" *ngIf=\"showProfile && !indProfile\" style=\"list-style:none;left:-35px;\">\n       <a class=\"nav-link dropdown-toggle\"   style=\"cursor:pointer\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\">\n         Profile\n       </a>\n       <div class=\"dropdown-menu\" style=\"left:-80px;text-color:black;cursor:pointer\" aria-labelledby=\"navbarDropdownMenuLink\">\n         <span class=\"dropdown-item\" routerLink=\"/userData/myInfo\">View Business</span>\n         <span class=\"dropdown-item\" routerLink=\"/userData/addNew\">Add Business</span>\n         <span class=\"dropdown-item\" routerLink=\"/userData/businessPlan\">BusinessPlan</span>\n         <!-- <span class=\"dropdown-item\" routerLink=\"/resetPswd\">Reset Password</span> -->\n         <span class=\"dropdown-item\" (click)=\"logOut()\">Logout</span>\n       </div>\n     </li>\n    </span>\n</nav>\n\n<div class=\"renderPage\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng5_toastr_ng5_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(_dataService, toastr, router, cookieService, location, vcr) {
        this._dataService = _dataService;
        this.toastr = toastr;
        this.router = router;
        this.cookieService = cookieService;
        this.location = location;
        this.title = 'SmyData';
        this.view = 'homePage';
        this.showProfile = false;
        this.indProfile = false;
        this.selectedBU = "";
        this.toastr.setRootViewContainerRef(vcr);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.profile.subscribe(function (showProfile) {
            return _this.showProfile = showProfile;
        });
        this._dataService.indprofile.subscribe(function (indProfile) {
            return _this.indProfile = indProfile;
        });
        this._dataService.buListData.subscribe(function (buList) {
            return _this.businessList = buList;
        });
        this._dataService.selectedBUVal.subscribe(function (selectedBU) {
            return _this.selectedBU = selectedBU.companyName;
        });
        this.allCookies = this.cookieService.getAll();
        if (this.allCookies && this.allCookies.mobile) {
            // this.showProfile = true;
        }
        ;
        if (this.businessList) {
            this.selectedBU = this.businessList.businessDetails[0].companyName;
        }
    };
    ;
    AppComponent.prototype.signInCall = function () {
        this.view = '';
        this.router.navigate(['/', 'select']);
    };
    AppComponent.prototype.changeBU = function (obj) {
        var _this = this;
        console.log(obj);
        this.selectedBU = obj.companyName;
        this._dataService.changeselectedBUVal(obj);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate([_this.location.path()]);
        });
        // this._dataService.changeMyBusiness(obj).subscribe(
        //    data => {
        //      this.selectedBU = obj.companyName;
        //      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
        //       this.router.navigate([this.location.path()]));
        //      this.toastr.success("", "Business Changed",{toastLife: '3000'});
        //    },
        //    error => {
        //      this.toastr.error("", "ERROR!!",{toastLife: '3000'});
        //    }
        // );
    };
    AppComponent.prototype.logOut = function () {
        this._dataService.changeProfile(false);
        this._dataService.changeindProfile(false);
        this.showProfile = false;
        this.indProfile = false;
        this._dataService.logout().subscribe(function (data) {
            console.log("logged out..");
        }, function (error) {
            console.log("logged out failed..");
        });
        this.router.navigate(['']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ng5_toastr_ng5_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng5_toastr_ng5_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ag_grid_angular__ = __webpack_require__("./node_modules/ag-grid-angular/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ag_grid_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ag_grid_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sign_in_sign_in_component__ = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_data_user_data_component__ = __webpack_require__("./src/app/user-data/user-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__billing_service__ = __webpack_require__("./src/app/billing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__individual_service__ = __webpack_require__("./src/app/individual.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__otp_authentication_otp_authentication_component__ = __webpack_require__("./src/app/otp-authentication/otp-authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__rewards_rewards_component__ = __webpack_require__("./src/app/rewards/rewards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__discounts_discounts_component__ = __webpack_require__("./src/app/discounts/discounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__invoice_invoice_component__ = __webpack_require__("./src/app/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__select_invoice_select_invoice_component__ = __webpack_require__("./src/app/select-invoice/select-invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__payables_payables_component__ = __webpack_require__("./src/app/payables/payables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__receivables_receivables_component__ = __webpack_require__("./src/app/receivables/receivables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__raise_ticket_raise_ticket_component__ = __webpack_require__("./src/app/raise-ticket/raise-ticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__sales_report_sales_report_component__ = __webpack_require__("./src/app/sales-report/sales-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__individual_registration_individual_registration_component__ = __webpack_require__("./src/app/individual-registration/individual-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__select_login_type_select_login_type_component__ = __webpack_require__("./src/app/select-login-type/select-login-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__individual_details_individual_details_component__ = __webpack_require__("./src/app/individual-details/individual-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__individual_receivables_individual_receivables_component__ = __webpack_require__("./src/app/individual-receivables/individual-receivables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__individual_payables_individual_payables_component__ = __webpack_require__("./src/app/individual-payables/individual-payables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__individual_reports_individual_reports_component__ = __webpack_require__("./src/app/individual-reports/individual-reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__landing_page_landing_page_component__ = __webpack_require__("./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__auth_guard_auth_guard__ = __webpack_require__("./src/app/auth-guard/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__business_users_business_users_component__ = __webpack_require__("./src/app/business-users/business-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__individual_users_individual_users_component__ = __webpack_require__("./src/app/individual-users/individual-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__invoice_generation_invoice_generation_component__ = __webpack_require__("./src/app/invoice-generation/invoice-generation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_17__user_data_user_data_component__["a" /* UserDataComponent */],
                __WEBPACK_IMPORTED_MODULE_21__otp_authentication_otp_authentication_component__["a" /* OtpAuthenticationComponent */],
                __WEBPACK_IMPORTED_MODULE_22__rewards_rewards_component__["a" /* RewardsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__discounts_discounts_component__["a" /* DiscountsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__invoice_invoice_component__["a" /* InvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_25__select_invoice_select_invoice_component__["a" /* SelectInvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_26__payables_payables_component__["a" /* PayablesComponent */],
                __WEBPACK_IMPORTED_MODULE_27__receivables_receivables_component__["a" /* ReceivablesComponent */],
                __WEBPACK_IMPORTED_MODULE_28__raise_ticket_raise_ticket_component__["a" /* RaiseTicketComponent */],
                __WEBPACK_IMPORTED_MODULE_29__sales_report_sales_report_component__["a" /* SalesReportComponent */],
                __WEBPACK_IMPORTED_MODULE_30__individual_registration_individual_registration_component__["a" /* IndividualRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_31__select_login_type_select_login_type_component__["a" /* SelectLoginTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_32__individual_details_individual_details_component__["a" /* IndividualDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__individual_receivables_individual_receivables_component__["a" /* IndividualReceivablesComponent */],
                __WEBPACK_IMPORTED_MODULE_34__individual_payables_individual_payables_component__["a" /* IndividualPayablesComponent */],
                __WEBPACK_IMPORTED_MODULE_35__individual_reports_individual_reports_component__["a" /* IndividualReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_36__landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_38__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_39__business_users_business_users_component__["a" /* BusinessUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_40__individual_users_individual_users_component__["a" /* IndividualUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_41__invoice_generation_invoice_generation_component__["a" /* InvoiceGenerationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_12_ng2_smart_table__["a" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_10_ag_grid_angular__["AgGridModule"].withComponents([]),
                __WEBPACK_IMPORTED_MODULE_11_angular5_data_table__["a" /* DataTableModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng5_toastr_ng5_toastr__["ToastModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_18__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_19__billing_service__["a" /* BillingService */], __WEBPACK_IMPORTED_MODULE_20__individual_service__["a" /* IndividualService */], __WEBPACK_IMPORTED_MODULE_37__auth_guard_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard/auth-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, dataService) {
        var _this = this;
        this.router = router;
        this.dataService = dataService;
        this.dataService.profile.subscribe(function (showProfile) { return _this.showProfile = showProfile; });
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log("Smile:)");
        console.log(this.showProfile);
        if (this.showProfile) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/billing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var urlProvider = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url;
var BillingService = /** @class */ (function () {
    function BillingService(http) {
        this.http = http;
        this.businessId = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.buListData = this.businessId.asObservable();
    }
    BillingService.prototype.changeBusinessList = function (data) {
        this.businessId = data;
        console.log(this.businessId);
    };
    // add rewards method
    BillingService.prototype.addReward = function (data) {
        var url = urlProvider + "/api/addRewards/" + this.businessId;
        return this.http.post(url, data);
    };
    //get rewards method
    BillingService.prototype.getReward = function () {
        var url = urlProvider + '/api/getRewards/' + this.businessId;
        return this.http.get(url);
    };
    // add discount method
    BillingService.prototype.addDiscount = function (data) {
        var url = urlProvider + '/api/savediscounts/' + this.businessId;
        return this.http.post(url, data);
    };
    //get discount method
    BillingService.prototype.getDiscount = function () {
        var url = urlProvider + '/api/getdiscounts/' + this.businessId;
        return this.http.get(url);
    };
    BillingService.prototype.addInvoice = function (data) {
        var url = urlProvider + '/api/createInvoice/' + this.businessId;
        return this.http.post(url, data);
    };
    // Receivables Service calls....
    BillingService.prototype.getReceivables = function () {
        var url = urlProvider + '/api/getReceivables/' + this.businessId;
        return this.http.get(url);
    };
    BillingService.prototype.postReceivedAmount = function (data) {
        var url = urlProvider + '/api/saveReceivables/true/' + this.businessId;
        return this.http.post(url, data);
    };
    BillingService.prototype.addReceivables = function (data) {
        var url = urlProvider + '/api/saveReceivables/false/' + this.businessId;
        return this.http.post(url, data);
    };
    // Payables Service calls....
    BillingService.prototype.getPayables = function () {
        var url = urlProvider + '/api/getPayables/' + this.businessId;
        return this.http.get(url);
    };
    BillingService.prototype.postPayOffAmount = function (data) {
        var url = urlProvider + '/api/savePayables/true/' + this.businessId;
        return this.http.post(url, data);
    };
    BillingService.prototype.addPayables = function (data) {
        var url = urlProvider + '/api/savePayables/false/' + this.businessId;
        return this.http.post(url, data);
    };
    BillingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BillingService);
    return BillingService;
}()); // BillingService End



/***/ }),

/***/ "./src/app/business-users/business-users.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 320px;\n}\n"

/***/ }),

/***/ "./src/app/business-users/business-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\">\n<div class=\"text-center\">\n  <h2>Welcome To SMYDATA</h2>\n</div>\n<div class=\"row textfamily\">\n  <div class=\"col-md-2 col-sm-4 textStyle mt-5\">\n    <div class=\"list-group mt-4\" id=\"list-tab\" role=\"tablist\" [style.margin-top.px]=\"buPlanCss\">\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" routerLink=\"/individualData\">Individual</a>\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" routerLink=\"/businessData\">Business</a>\n    </div>\n  </div>\n  <div class=\"col-md-10 col-sm-8\">\n<div class=\"example-header\" style=\"margin-top:8px; width:20%\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n\n  <mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"reg_id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.reg_id}} </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n\n    <!--category  Column -->\n    <ng-container matColumnDef=\"category\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Category </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.category}} </mat-cell>\n    </ng-container>\n\n    <!-- Mobile Column -->\n    <ng-container matColumnDef=\"mobile\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Mobile </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.mobile}} </mat-cell>\n    </ng-container>\n\n    <!-- State Column -->\n    <ng-container matColumnDef=\"state\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> State </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.state}} </mat-cell>\n    </ng-container>\n\n    <!-- City Column -->\n    <ng-container matColumnDef=\"city\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> City </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.city}} </mat-cell>\n    </ng-container>\n\n    <!-- Country Column -->\n    <ng-container matColumnDef=\"country\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Country </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.country}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </mat-row>\n  </mat-table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/business-users/business-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusinessUsersComponent = /** @class */ (function () {
    function BusinessUsersComponent() {
        this.displayedColumns = ['reg_id', 'name', 'category', 'mobile', 'state', 'city', 'country'];
        // Create 100 users
        var users = [];
        for (var i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }
        // Assign the data to the data source for the table to render
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatTableDataSource */](users);
    }
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    BusinessUsersComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    BusinessUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatPaginator */])
    ], BusinessUsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatSort */])
    ], BusinessUsersComponent.prototype, "sort", void 0);
    BusinessUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-business-users',
            template: __webpack_require__("./src/app/business-users/business-users.component.html"),
            styles: [__webpack_require__("./src/app/business-users/business-users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BusinessUsersComponent);
    return BusinessUsersComponent;
}());

/** Builds and returns a new User. */
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        reg_id: id,
        name: name,
        category: CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))],
        mobile: Math.round(Math.random() * 10000000000),
        state: 'Telangana',
        city: 'Hyderabad',
        country: 'India'
    };
}
/** Constants used to fill up our data base. */
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
var CATEGORY = ["Furniture", "Hardware", "Clothing", "Fashion Jewellery", "Valves", "Plywood"];


/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__billing_service__ = __webpack_require__("./src/app/billing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {Observable} from 'rxjs/Observable';




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" })
};
var urlProvider = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url;
var key = 'AIzaSyBFcZOIYqk_s0-qilRmve1TjMCXhYxUP3c';
console.log(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]);
var DataService = /** @class */ (function () {
    function DataService(http, billingService) {
        this.http = http;
        this.billingService = billingService;
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](12345);
        this.cast = this.messageSource.asObservable();
        this.newBusiness = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.newBusinessVal = this.newBusiness.asObservable();
        this.editBusiness = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.editBusinessDetails = this.editBusiness.asObservable();
        this.showProfile = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.profile = this.showProfile.asObservable();
        this.indProfile = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.indprofile = this.indProfile.asObservable();
        this.mobileVal = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.mobileTemp = this.mobileVal.asObservable();
        this.userType = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.userTypeVal = this.userType.asObservable();
        this.customerMobile = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.tempCustomerMobile = this.customerMobile.asObservable();
        this.buPlanCss = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('0');
        this.buPlanCssVal = this.buPlanCss.asObservable();
        this.buList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.buListData = this.buList.asObservable();
        this.selectedBU = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.selectedBUVal = this.selectedBU.asObservable();
        this.invoiceData = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.invData = this.invoiceData.asObservable();
        //holds registeration form data
        this.registrationData = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.regData = this.registrationData.asObservable();
    }
    DataService.prototype.changeindProfile = function (indprofile) {
        console.log('indprofile:' + indprofile);
        this.indProfile.next(indprofile);
    };
    DataService.prototype.changeMobile = function (mobileTemp) {
        console.log('mobileTemp:' + mobileTemp);
        this.mobileVal.next(mobileTemp);
    };
    DataService.prototype.changeUserType = function (value) {
        console.log('userType:' + value);
        this.userType.next(value);
    };
    DataService.prototype.changeCustomerMobile = function (value) {
        console.log('customerMobile:' + value);
        this.customerMobile.next(value);
    };
    DataService.prototype.changebuPlanCss = function (value) {
        this.buPlanCss.next(value);
    };
    DataService.prototype.changeBusinessList = function (data) {
        this.businessId = data.businessDetails[0].businessDetailId;
        this.billingService.changeBusinessList(this.businessId);
        console.log(this.businessId);
        console.log(data);
        this.buList.next(data);
    };
    DataService.prototype.changeselectedBUVal = function (data) {
        if (data.businessDetailId) {
            this.businessId = data.businessDetailId;
            this.billingService.changeBusinessList(this.businessId);
        }
        console.log(this.businessId);
        console.log(data);
        this.selectedBU.next(data);
    };
    DataService.prototype.changeInvoiceData = function (data) {
        console.log("invoiceDataChange:" + data);
        this.invoiceData.next(data);
    };
    DataService.prototype.changeRegData = function (data) {
        this.registrationData.next(data);
    };
    DataService.prototype.changeProfile = function (profile) {
        console.log('profile:' + profile);
        this.showProfile.next(profile);
    };
    DataService.prototype.changeMessage = function (message) {
        console.log('message:servuce:' + message);
        this.messageSource.next(message);
    };
    DataService.prototype.isNewBusiness = function (value) {
        console.log('isNewBusiness:service:' + value);
        this.newBusiness.next(value);
    };
    DataService.prototype.editBusinessData = function (data) {
        console.log(data);
        this.editBusiness.next(data);
    };
    DataService.prototype.registerUserIndividual = function (data) {
        var body = JSON.stringify(data);
        console.log(data);
        var url = urlProvider + '/api/saveUser/registration';
        console.log(url);
        return this.http.post(url, body, httpOptions);
    };
    DataService.prototype.registerUser = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/form-data');
        var url = urlProvider + '/api/saveBusinessUser/registration';
        return this.http.post(url, data, { headers: headers });
    };
    DataService.prototype.registerIndividual = function (data) {
        var body = JSON.stringify(data);
        console.log(data);
        var url = urlProvider + '/api/saveUser/registration';
        console.log(url);
        return this.http.post(url, body, httpOptions);
    };
    DataService.prototype.addingNewBusiness = function (data) {
        var body = JSON.stringify(data);
        console.log(data);
        var url = urlProvider + '/api/saveUser/add';
        console.log(url);
        return this.http.post(url, body, httpOptions);
    };
    DataService.prototype.editBusinessService = function (editData) {
        console.log(editData);
        var url = urlProvider + '/api/saveUser/edit';
        return this.http.post(url, editData);
    };
    DataService.prototype.viewMyBusiness = function () {
        var url = urlProvider + '/api/viewMyBusiness';
        return this.http.get(url);
    };
    //   changeMyBusiness(obj){
    //  let url =  urlProvider + '/api/changeMyBusiness';
    //   return this.http.post(url, obj, httpOptions)
    // }
    DataService.prototype.logInUser = function (data, type) {
        console.log(data);
        var url = urlProvider + '/api/loginUser';
        return this.http.post(url, data);
    };
    DataService.prototype.getLocationDetails = function (place) {
        console.log(place);
        // let url = 'http:postalpincode.in/api/pincode/'+place.details;
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + place.details + '&key=' + key;
        return this.http.get(url);
    };
    DataService.prototype.sendOtp = function (number) {
        console.log('In service sendOtp:: ' + number);
        var url = urlProvider + '/api/sendOtp/' + number;
        return this.http.get(url);
    };
    DataService.prototype.resetpassword = function (pwd, mobile) {
        console.log(pwd + mobile);
        var url = urlProvider + '/api/resetPwd/' + pwd + '/' + mobile;
        return this.http.get(url, pwd);
    };
    DataService.prototype.doesUserExist = function (data) {
        var dataObj = JSON.stringify(data);
        var url = urlProvider + '/api/saveUser/validate';
        console.log(url);
        console.log(dataObj);
        return this.http.post(url, dataObj, httpOptions);
    };
    DataService.prototype.customerExist = function (mobile) {
        console.log(mobile);
        var url = urlProvider + '/api/getUserDetail/' + mobile + '/' + this.businessId;
        return this.http.get(url, mobile);
    };
    DataService.prototype.createUser = function (data) {
        console.log(data);
        var url = urlProvider + '/api/createUser/' + this.businessId;
        return this.http.post(url, data);
    };
    DataService.prototype.createTicket = function (data) {
        console.log(data);
        var url = urlProvider + '/api/createTicket/' + this.businessId;
        return this.http.post(url, data);
    };
    DataService.prototype.requestReport = function (data, type) {
        console.log('Innn service strtDate: ' + data.startDate + ' endDate:' + data.endDate);
        console.log(data);
        var url = urlProvider + '/api/' + type + '/' + data.startDate + '/' + data.endDate + '/' + this.businessId;
        console.log(url);
        return this.http.get(url, data);
    };
    DataService.prototype.emailInvoice = function (id) {
        var url = urlProvider + '/api/emailInvoice/' + id;
        return this.http.get(url);
    };
    DataService.prototype.logout = function () {
        var url = urlProvider + '/api/logOut/';
        return this.http.get(url);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__billing_service__["a" /* BillingService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/discounts/discounts.component.css":
/***/ (function(module, exports) {

module.exports = ".discount{\n  width: 50px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 24px;\n  margin: 0px;\n}\n\n.switch input {display:none;}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  -webkit-box-shadow: 0 0 1px #2196F3;\n          box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(16px);\n  transform: translateX(16px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.listcss{\n    width: 254px;\n    text-align: center;\n    font-size: 1.5rem;\n    border-radius: 50px;\n    background-color: #E9ECEF;\n}\n"

/***/ }),

/***/ "./src/app/discounts/discounts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2> My BusinessPlan </h2>\n  </div>\n</div>\n<div class=\"row justify-content-center\">\n  <ul class=\"nav nav-tabs cursr\">\n  <li class=\"nav-item\">\n    <span class=\"nav-link listcss\" id=\"nav-home-tab\" data-toggle=\"tab\" routerLink=\"/userData/businessPlan\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Rewards</span>\n  </li>\n  <li class=\"nav-item\">\n    <span class=\"nav-link listcss active\" id=\"nav-profile-tab\" data-toggle=\"tab\" routerLink=\"/userData/discounts\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Discounts</span>\n  </li>\n  <!-- <li class=\"nav-item \">\n    <span class=\"nav-link listcss\" id=\"nav-contact-tab\" data-toggle=\"tab\"routerLink=\"/userData/invoiceTemplate\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Invoice</span>\n  </li> -->\n</ul>\n</div>\n\n<div class=\"row cstyle pt-2\">\n  <div class=\"col\"></div>\n    <div class=\"col-3\">\n      <h4>My Poduct Discounts</h4>\n    </div>\n    <div class=\"col-2\">\n      <div *ngIf=\"!isDataExist\">\n        <label class=\"switch\">\n          <input type=\"checkbox\" [(ngModel)]='discounts.enableDiscount'>\n          <span class=\"slider round\"></span>\n        </label>\n      </div>\n      <div *ngIf=\"isDataExist && discounts?.length > 0\">\n        <label class=\"switch\">\n          <input type=\"checkbox\" [(ngModel)]='discounts[0].enableDiscount'>\n          <span class=\"slider round\"></span>\n        </label>\n      </div>\n    </div>\n    <div class=\"col\"></div>\n</div>\n\n<div class=\"row cstyle\" style=\"overflow:auto; min-height:302px\">\n  <div class=\"col\"></div>\n <div class=\"panel panel-info inbxTxt col-md-12\">\n     <div class=\"panel-body tableFlow\">\n         <table class=\"table table-hover\">\n           <thead>\n             <tr>\n               <th>Min Amount</th>\n               <th>Max Amount</th>\n               <th>Discount</th>\n               <th>Start Date</th>\n               <th>End Date</th>\n               <th>Enable/Disable</th>\n               <th>\n                   <button type=\"button\" (click)='addRow(0)' class=\"btn btn-success btn-sm\">\n                     <span>+</span>\n                   </button>\n             </th>\n             </tr>\n           </thead>\n           <tbody>\n             <tr *ngFor=\"let data of discounts;let i = index; let lastEl = last; let firstEl = first\">\n               <td>\n                 <input class=\"discount\" [(ngModel)]='discounts[i].minAmount'/>\n               </td>\n               <td>\n                 <input class=\"discount\" [(ngModel)]='discounts[i].maxAmount'/>\n               </td>\n               <td>\n                 <input class=\"discount\" [(ngModel)]='discounts[i].discount'/>\n               </td>\n               <td>\n                 <input type=\"date\"  [(ngModel)]='discounts[i].startDate'/>\n               </td>\n               <td>\n                 <input type=\"date\"  [(ngModel)]='discounts[i].endDate'/>\n               </td>\n               <td>\n                 <label class=\"switch\">\n                    <input type=\"checkbox\" [(ngModel)]='discounts[i].enable'>\n                    <span class=\"slider round\"></span>\n                  </label>\n               </td>\n               <td *ngIf='!firstEl'>\n                 <button type=\"button\"  (click)='deleteRow(i)' class=\"btn btn-danger btn-sm\">\n                   <span>-</span>\n                 </button>\n               </td>\n             </tr>\n           </tbody>\n         </table>\n        <hr>\n     </div>\n<button class=\"btn btn-success btn-block fntcss\"type=\"button\" (click)='saveDiscount(discounts)' name=\"button\">Save</button>\n</div>\n<div class=\"col\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/discounts/discounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__billing_service__ = __webpack_require__("./src/app/billing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscountsComponent = /** @class */ (function () {
    function DiscountsComponent(_billingService, toastr, dataService) {
        this._billingService = _billingService;
        this.toastr = toastr;
        this.dataService = dataService;
        this.isDataExist = false;
        this.discounts = [{
                enable: false, minAmount: '', maxAmount: '',
                startDate: '', endDate: '', enableDiscount: false
            }];
    }
    DiscountsComponent.prototype.ngOnInit = function () {
        this.getDiscount();
        this.dataService.changebuPlanCss("55");
    };
    DiscountsComponent.prototype.addRow = function () {
        this.discounts.push({});
    };
    ;
    DiscountsComponent.prototype.deleteRow = function (index) {
        this.discounts.splice(index, 1);
    };
    ;
    //on save function call
    DiscountsComponent.prototype.saveDiscount = function (data) {
        this.addingDiscount(data); // function call to save the data
    };
    // function call to save the data
    DiscountsComponent.prototype.addingDiscount = function (discountData) {
        var _this = this;
        //calling addDiscount method which is inside the billing.service to save the discounts data
        this._billingService.addDiscount(discountData).subscribe(function (data) {
            _this.toastr.success("Saved successfully", 'Success', { toastLife: '3000' });
        }, function (error) {
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '3000' });
        });
    };
    ;
    // function call to get the Discount data
    DiscountsComponent.prototype.getDiscount = function () {
        var _this = this;
        //calling getDiscount method which is inside the billing.service to fetch the discounts data
        this._billingService.getDiscount().subscribe(function (data) {
            if (data != null && Object.keys(data).length > 0) {
                _this.isDataExist = true;
                _this.discounts = data;
            }
            else {
            }
        }, function (error) {
        });
    };
    DiscountsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-discounts',
            template: __webpack_require__("./src/app/discounts/discounts.component.html"),
            styles: [__webpack_require__("./src/app/discounts/discounts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__billing_service__["a" /* BillingService */], __WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], DiscountsComponent);
    return DiscountsComponent;
}());



/***/ }),

/***/ "./src/app/individual-details/individual-details.component.css":
/***/ (function(module, exports) {

module.exports = ".textStyle{\n  font-style: italic;\n  margin-top: 74px;\n}\n.listcss{\n  padding: 17px;\n  font-size: 1.5rem;\n  /* border-radius: 50px; */\n  /* text-align: center; */\n}\n"

/***/ }),

/***/ "./src/app/individual-details/individual-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row textfamily\">\n  <div class=\"col-md-2 col-sm-4 textStyle\">\n    <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" routerLink=\"/individualDetails/payables\">Payables</a>\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" routerLink=\"/individualDetails/receivables\">Receivables</a>\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" routerLink=\"/individualDetails/reports\">Report</a>\n    </div>\n  </div>\n  <div class=\"col-md-10 col-sm-8\">\n      <router-outlet class=\"tab-pane fade\"></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/individual-details/individual-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndividualDetailsComponent = /** @class */ (function () {
    function IndividualDetailsComponent() {
    }
    IndividualDetailsComponent.prototype.ngOnInit = function () {
    };
    IndividualDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-individual-details',
            template: __webpack_require__("./src/app/individual-details/individual-details.component.html"),
            styles: [__webpack_require__("./src/app/individual-details/individual-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndividualDetailsComponent);
    return IndividualDetailsComponent;
}());



/***/ }),

/***/ "./src/app/individual-payables/individual-payables.component.css":
/***/ (function(module, exports) {

module.exports = ".tablecss{\n  font-size: 20px;\n  width: 150px;\n  height: 32px;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/individual-payables/individual-payables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2>Payables</h2>\n  </div>\n</div>\n\n<!-- Payables Details -->\n<div class=\"cstyle dataBox p-3\">\n  <div class=\"row mt-2\">\n    <div class=\"col-md-12 col-sm-11 tableFlow\">\n        <table class=\"table table-bordered table-hover\" >\n          <thead class=\"thead-light\">\n            <tr class=\"fntcss\">\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">Category</th>\n              <th scope=\"col\">Name</th>\n              <th scope=\"col\">Start Date</th>\n              <th scope=\"col\">End Date</th>\n              <th scope=\"col\">Due Date</th>\n              <th scope=\"col\">Repeats</th>\n              <th scope=\"col\">Amount</th>\n              <th scope=\"col\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of payableDetails;let i = index; let lastEl = last;\">\n              <td>{{i+1}}</td>\n              <td>\n                <select   [(ngModel)]='data.category' class=\"tablecss\" >\n                    <option *ngFor=\"let item of categoryList\" value={{item}}>\n                        {{item}}\n                    </option>\n                </select>\n              </td>\n              <td>\n                <input type=\"text\" class=\"tablecss\" [(ngModel)]='data.name' name=\"\" value=\"\" placeholder=\"Name\">\n              </td>\n              <td>\n                <input type=\"date\" class=\"tablecss\"  [(ngModel)]='data.startDate'placeholder=\"Start Date\"/>\n              </td>\n              <td>\n                <input type=\"date\" class=\"tablecss\" [(ngModel)]='data.endDate'placeholder=\"End Date\"/>\n              </td>\n              <td>\n                <input type=\"date\" class=\"tablecss\" [(ngModel)]='data.dueDate'placeholder=\"Due Date\"/>\n              </td>\n              <td>\n                <input type=\"text\" class=\"tablecss\"  [(ngModel)]='data.repeats' name=\"repeats\" value=\"\" placeholder=\"Monthly/Yearly\">\n              </td>\n              <td>\n                <input type=\"text\" class=\"tablecss\" [(ngModel)]='data.amount' name=\"amount\" value=\"\" placeholder=\"Amount\">\n              </td>\n              <td *ngIf='lastEl'>\n                <button type=\"button\" (click)='addRow(i)' class=\"btn btn-success btn-sm\">\n                  <span>+</span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row mt-2\">\n    <div class=\"col\"></div>\n    <div class=\"col-12\">\n      <button type=\"button\" class=\"btn btn-success fntcss btn-block\" (click)=\"addPayData(payableDetails)\" name=\"button\">Submit</button>\n    </div>\n    <div class=\"col\"></div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/individual-payables/individual-payables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualPayablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__individual_service__ = __webpack_require__("./src/app/individual.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndividualPayablesComponent = /** @class */ (function () {
    function IndividualPayablesComponent(service) {
        this.service = service;
        this.categoryList = ['Home Loan', 'Home Rent', 'Power Bill', 'Groceries', 'Medical Bill', 'Personal Loan', 'Insurance', 'Others'];
        this.payableDetails = [{}];
    }
    IndividualPayablesComponent.prototype.ngOnInit = function () {
        this.getPayData();
    };
    IndividualPayablesComponent.prototype.addRow = function () {
        this.payableDetails.push({});
    };
    ;
    IndividualPayablesComponent.prototype.addPayData = function (data) {
        console.log(data);
        this.service.addPayData(data).subscribe(function (data) {
            console.log('success::' + data);
        }, function (error) {
            alert('error');
        });
    };
    ;
    IndividualPayablesComponent.prototype.getPayData = function () {
        var _this = this;
        this.service.viewMyData().subscribe(function (data) {
            console.log('success::' + data);
            if (data != null && Object.keys(data).length > 0) {
                console.log('data::' + Object.keys(data).length);
                var obj = data;
                _this.payableDetails = obj;
            }
            else {
                alert('failure');
            }
        }, function (error) {
            alert('error');
        });
    };
    IndividualPayablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-individual-payables',
            template: __webpack_require__("./src/app/individual-payables/individual-payables.component.html"),
            styles: [__webpack_require__("./src/app/individual-payables/individual-payables.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__individual_service__["a" /* IndividualService */]])
    ], IndividualPayablesComponent);
    return IndividualPayablesComponent;
}());



/***/ }),

/***/ "./src/app/individual-receivables/individual-receivables.component.css":
/***/ (function(module, exports) {

module.exports = "\n.tablecss{\n  font-size: 20px;\n  width: 150px;\n  height: 32px;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/individual-receivables/individual-receivables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2>Receivables</h2>\n  </div>\n</div>\n\n<div class=\"row cstyle p-3\">\n  <div class=\"row col-12\">\n  <div class=\"inbxTxt tableFlow col-12\">\n    <table class=\"table table-bordered table-hover\" >\n      <thead class=\"thead-light\">\n        <tr class=\"fntcss\">\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Income Source</th>\n          <th scope=\"col\">Name</th>\n          <!-- <th scope=\"col\">Due Date</th> -->\n          <!-- <th scope=\"col\">Repeats</th> -->\n          <th scope=\"col\">Amount</th>\n          <th scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of receivableDetails;let i = index; let lastEl = last;\">\n          <td>{{i+1}}</td>\n          <td>\n            <input type=\"text\" class=\"tablecss\"  [(ngModel)]='data.category' name=\"\" value=\"\" placeholder=\"Source\">\n          </td>\n          <td>\n            <input type=\"text\" class=\"tablecss\"  [(ngModel)]='data.name' name=\"\" value=\"\" placeholder=\"Name\">\n          </td>\n          <td>\n            <input type=\"text\" class=\"tablecss\"  [(ngModel)]='data.amount' name=\"amount\" value=\"\" placeholder=\"Amount\">\n          </td>\n          <td *ngIf='lastEl'>\n            <button type=\"button\" (click)='addRow(i)' class=\"btn btn-success btn-sm\">\n              <span >+</span>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div><hr>\n  <div class=\"row col-12\">\n    <button type=\"button\" class=\"btn btn-block btn-success fntcss\" (click)=\"addReceiveData(receivableDetails)\" name=\"button\">Submit</button>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/individual-receivables/individual-receivables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualReceivablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__individual_service__ = __webpack_require__("./src/app/individual.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndividualReceivablesComponent = /** @class */ (function () {
    function IndividualReceivablesComponent(service) {
        this.service = service;
        this.receivableDetails = [{}];
    }
    IndividualReceivablesComponent.prototype.ngOnInit = function () {
        this.getReceiveData();
    };
    IndividualReceivablesComponent.prototype.addRow = function () {
        this.receivableDetails.push({});
    };
    ;
    IndividualReceivablesComponent.prototype.addReceiveData = function (data) {
        console.log(data);
        this.service.addReceiveData(data).subscribe(function (data) {
            console.log('success::' + data);
        }, function (error) {
            alert('error');
        });
    };
    ;
    IndividualReceivablesComponent.prototype.getReceiveData = function () {
        var _this = this;
        this.service.getReceiveData().subscribe(function (data) {
            console.log('success::' + data);
            if (data != null && Object.keys(data).length > 0) {
                console.log('data::' + Object.keys(data).length);
                var obj = data;
                _this.receivableDetails = obj;
            }
            else {
                alert('failure');
            }
        }, function (error) {
            alert('error');
        });
    };
    IndividualReceivablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-individual-receivables',
            template: __webpack_require__("./src/app/individual-receivables/individual-receivables.component.html"),
            styles: [__webpack_require__("./src/app/individual-receivables/individual-receivables.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__individual_service__["a" /* IndividualService */]])
    ], IndividualReceivablesComponent);
    return IndividualReceivablesComponent;
}());



/***/ }),

/***/ "./src/app/individual-registration/individual-registration.component.css":
/***/ (function(module, exports) {

module.exports = ".signUp{\n  /* width: auto; */\n  /* background: linear-gradient(green, yellow, green); */\n  /* background-color: #FFF; */\n  border-radius: 10px;\n  border: 1px solid;\n   -webkit-box-shadow: 5px 10px #888888;\n           box-shadow: 5px 10px #888888;\n  margin-top: 10px;\n\t-webkit-box-shadow: 0 10px 6px -6px #777;\n\t box-shadow: 0 10px 6px -6px #777;\n   word-wrap: break-word;\n }\n .signup-form{\n   margin: 20px;\n }\n .flexDiv{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n .flex-item{\n  width: 25%\n}\n .flex-item-middle{\n  margin: 0 5px;\n}\n .dropdown-flex{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n .dropdown-category{\n  width: 45%;\n}\n .dropdown-register{\n  margin-left: 10%;\n  width: 45%;\n}\n .flex-item-getAdd{\n  margin-top: 25px;\n  width:30%\n}\n .flex-item-buAdd{\n  width: 70%\n}\n"

/***/ }),

/***/ "./src/app/individual-registration/individual-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n<div class=\"signUp col-6\">\n   <div [hidden]=\"submitted\">\n      <h1>Individual Registration</h1>\n      <form (ngSubmit)=\"registerUser(model); signup.reset()\" #signup=\"ngForm\" class=\"signup-form\">\n        <div *ngIf='registrationFailed' class=\"alert alert-danger\" (click)=\"registrationFailed = null\">\n  \t\t\t\t<strong>{{registrationFailed}}</strong>\n  \t\t\t</div>\n      <div class=\"form-group\" *ngIf='!addNew'>\n         <label for=\"name\">Name</label>\n         <input type=\"text\" class=\"form-control\" id=\"ownername\"\n         required\n         [(ngModel)]=\"model.userName\" name=\"ownername\"\n         #ownername=\"ngModel\" />\n         <div [hidden]=\"ownername.valid || ownername.pristine\"\n            class=\"alert alert-danger\">\n            Name is required\n         </div>\n      </div>\n      <div class=\"form-group\" >\n         <label for=\"name\">Mobile number</label>\n         <input type=\"text\" class=\"form-control\"\n         required\n         (change)=\"validation('pattern_mobile',mobile.value)\"\n         [(ngModel)]=\"model.userMobile\" name=\"mobile\"\n         #mobile=\"ngModel\"/>\n         <div [hidden]=\"mobile.valid || mobile.pristine\"\n            class=\"alert alert-danger\">\n            <span *ngIf='!mobilecheck'>mobile number is required</span>\n                  <span *ngIf='mobilecheck'>mobile number already exist</span>\n         </div>\n      </div>\n      <div class=\"form-group\" >\n         <label for=\"name\">Location</label>\n         <input type=\"text\" class=\"form-control\"\n         required\n         [(ngModel)]=\"model.location\" name=\"location\"\n         #location=\"ngModel\"/>\n         <div [hidden]=\"location.valid || location.pristine\"\n            class=\"alert alert-danger\">\n            <span>location is required</span>\n         </div>\n      </div>\n      <div class=\"form-group\">\n         <label for=\"name\">Password</label>\n         <input type=\"password\" class=\"form-control\" id=\"password\"\n         required   (change)=\"validation('pattern_password',password.value)\"\n         [(ngModel)]=\"model.password\" name=\"password\" placeholder=\"Min 6 Characters\"\n         #password=\"ngModel\"/>\n         <div [hidden]=\"password.valid || password.pristine\"\n            class=\"alert alert-danger\">\n            password is required\n         </div>\n      </div>\n      <div class=\"form-group\">\n         <label for=\"alterEgo\">Email address</label>\n         <input type=\"text\" class=\"form-control\" id=\"email\"\n         (change)=\"validation('pattern_email',email.value)\" required\n         [(ngModel)]=\"model.email\" #email=\"ngModel\" name=\"alterEgo\">\n         <div [hidden]=\"email.valid || email.pristine\"\n            class=\"alert alert-danger\">\n            Email is required\n         </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"!signup.form.valid\" >Register</button>\n      </form>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/individual-registration/individual-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng5_toastr_ng5_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndividualRegistrationComponent = /** @class */ (function () {
    function IndividualRegistrationComponent(toastr, _demoService, router) {
        this.toastr = toastr;
        this._demoService = _demoService;
        this.router = router;
        this.pattern_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        this.pattern_mobile = /([0-9]){10}/g;
        this.pattern_password = /([0-9a-zA-Z]){6,20}/g;
        this.model = {
            "userName": "",
            "userMobile": "",
            "password": "",
            "email": "",
            "role": "individual"
        };
    }
    IndividualRegistrationComponent.prototype.ngOnInit = function () {
    };
    IndividualRegistrationComponent.prototype.validation = function (check, value) {
        if (!this[check].test(value)) {
            this.model[check.slice(8)] = '';
            this.toastr.error("Please enter valid " + check.slice(8), null, { toastLife: '3000' });
        }
    };
    IndividualRegistrationComponent.prototype.registerUser = function (dataJson) {
        var _this = this;
        console.log(dataJson);
        //  this.mobileOTP = dataJson.mobile;
        this._demoService.registerIndividual(dataJson).subscribe(function (data) {
            console.log(data);
            console.log("Data saved successfully!");
            if (data[0] == 'success') {
                alert("success");
                _this.router.navigate(['/', 'signIn']);
                //this.sendOtp(  this.mobileOTP )
                return true;
            }
            else {
                _this.toastr.error(data[0], 'Error', { toastLife: '5000' });
            }
        }, function (error) {
            console.error("Error saving data!");
            //  this.registrationFailed = 'Registration failed';
            _this.toastr.error('Registration failed', 'Error', { toastLife: '5000' });
            //  return Observable.throw(error);
        });
    };
    IndividualRegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-individual-registration',
            template: __webpack_require__("./src/app/individual-registration/individual-registration.component.html"),
            styles: [__webpack_require__("./src/app/individual-registration/individual-registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng5_toastr_ng5_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], IndividualRegistrationComponent);
    return IndividualRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/individual-reports/individual-reports.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/individual-reports/individual-reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2>REPORTS</h2>\n  </div>\n</div>\n\n<div class=\"cstyle\">\n  <div class=\"row\">\n      <table class=\"table table-bordered table-hover\" >\n        <thead class=\"thead-light\">\n          <tr class=\"fntcss\">\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">DATE</th>\n            <th scope=\"col\">Total Income</th>\n            <th scope=\"col\">Expendeture</th>\n            <th scope=\"col\">Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of reports;let i = index\">\n            <td>{{i+1}}</td>\n            <td>{{data.date}}</td>\n            <td>{{data.income}}</td>\n            <td>{{data.expendeture}}</td>\n            <td>\n              <button type=\"button\" *ngIf=\"data.income > data.expendeture\" class=\"btn btn-success\" name=\"button\">{{data.income - data.expendeture}}</button>\n              <button type=\"button\" *ngIf=\"data.income < data.expendeture\" class=\"btn btn-danger\" name=\"button\">{{data.income - data.expendeture}}</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n  </div><hr>\n</div>\n"

/***/ }),

/***/ "./src/app/individual-reports/individual-reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__individual_service__ = __webpack_require__("./src/app/individual.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndividualReportsComponent = /** @class */ (function () {
    function IndividualReportsComponent(service) {
        this.service = service;
    }
    IndividualReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getReports().subscribe(function (data) {
            console.log('success::' + data);
            if (data != null && Object.keys(data).length > 0) {
                console.log('data::' + Object.keys(data).length);
                var obj = data;
                _this.reports = obj;
            }
            else {
                alert('failure');
            }
        }, function (error) {
            alert('error');
        });
    };
    IndividualReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-individual-reports',
            template: __webpack_require__("./src/app/individual-reports/individual-reports.component.html"),
            styles: [__webpack_require__("./src/app/individual-reports/individual-reports.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__individual_service__["a" /* IndividualService */]])
    ], IndividualReportsComponent);
    return IndividualReportsComponent;
}());



/***/ }),

/***/ "./src/app/individual-users/individual-users.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 320px;\n}\n"

/***/ }),

/***/ "./src/app/individual-users/individual-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\">\n<div class=\"text-center\">\n  <h2>Welcome To SMYDATA</h2>\n</div>\n<div class=\"row textfamily\">\n  <div class=\"col-md-2 col-sm-4 textStyle mt-5\">\n    <div class=\"list-group mt-4\" id=\"list-tab\" role=\"tablist\" [style.margin-top.px]=\"buPlanCss\">\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" routerLink=\"/individualData\">Individual</a>\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" routerLink=\"/businessData\">Business</a>\n    </div>\n  </div>\n  <div class=\"col-md-10 col-sm-8\">\n<div class=\"example-header\" style=\"margin-top:8px; width:20%\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n\n  <mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"reg_id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.reg_id}} </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n\n      <!-- Mobile Column -->\n    <ng-container matColumnDef=\"mobile\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Mobile </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.mobile}} </mat-cell>\n    </ng-container>\n\n    <!-- State Column -->\n    <ng-container matColumnDef=\"state\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> State </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.state}} </mat-cell>\n    </ng-container>\n\n    <!-- City Column -->\n    <ng-container matColumnDef=\"city\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> City </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.city}} </mat-cell>\n    </ng-container>\n\n    <!-- Country Column -->\n    <ng-container matColumnDef=\"country\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Country </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.country}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </mat-row>\n  </mat-table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/individual-users/individual-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndividualUsersComponent = /** @class */ (function () {
    function IndividualUsersComponent() {
        this.displayedColumns = ['reg_id', 'name', 'mobile', 'state', 'city', 'country'];
        // Create 100 users
        var users = [];
        for (var i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }
        // Assign the data to the data source for the table to render
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatTableDataSource */](users);
    }
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    IndividualUsersComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    IndividualUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatPaginator */])
    ], IndividualUsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatSort */])
    ], IndividualUsersComponent.prototype, "sort", void 0);
    IndividualUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-individual-users',
            template: __webpack_require__("./src/app/individual-users/individual-users.component.html"),
            styles: [__webpack_require__("./src/app/individual-users/individual-users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndividualUsersComponent);
    return IndividualUsersComponent;
}());

/** Builds and returns a new User. */
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        reg_id: id,
        name: name,
        mobile: Math.round(Math.random() * 10000000000),
        state: 'Karnataka',
        city: 'bengaluru',
        country: 'India'
    };
}
/** Constants used to fill up our data base. */
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];


/***/ }),

/***/ "./src/app/individual.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {Observable} from 'rxjs/Observable';


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var urlProvider = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url;
var IndividualService = /** @class */ (function () {
    function IndividualService(http) {
        this.http = http;
    }
    IndividualService.prototype.addPayData = function (data) {
        var body = JSON.stringify(data);
        console.log(data);
        var url = urlProvider + '/api/payable/add';
        console.log(url);
        return this.http.post(url, body, httpOptions);
    };
    IndividualService.prototype.viewMyData = function () {
        var url = urlProvider + '/api/viewMyData';
        return this.http.get(url);
    };
    IndividualService.prototype.addReceiveData = function (data) {
        var body = JSON.stringify(data);
        console.log(data);
        var url = urlProvider + '/api/receivable/add';
        console.log(url);
        return this.http.post(url, body, httpOptions);
    };
    IndividualService.prototype.getReceiveData = function () {
        var url = urlProvider + '/api/getReceiveData';
        return this.http.get(url);
    };
    IndividualService.prototype.getReports = function () {
        var url = urlProvider + '/api/getReports';
        return this.http.get(url);
    };
    IndividualService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], IndividualService);
    return IndividualService;
}());



/***/ }),

/***/ "./src/app/invoice-generation/invoice-generation.component.css":
/***/ (function(module, exports) {

module.exports = "h5{\n  font-weight: bold;\n}\n.fontIcn{\n  border: 1px solid;\n  padding: 5px;\n  border-radius: 50%;\n  cursor: pointer;\n  margin: 2px;\n}\n.fontIcn:hover{\n  border: 1px solid blue;\n}\n"

/***/ }),

/***/ "./src/app/invoice-generation/invoice-generation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle dataBox\" style=\"font-family: Rokkitt, serif;\" id=\"inv\">\n<!--generated invoice  -->\n<div class=\"invoiceCreation container\" >\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <h1 style=\"font-weight:900\">INVOICE</h1>\n    </div>\n    <div class=\"col-md-10 text-right\">\n      <span matTooltipPosition=\"below\" matTooltip=\"Download\" (click)=\"download()\"><i class=\"fas fa-download fontIcn\"></i></span>\n      <span matTooltipPosition=\"below\" matTooltip=\"Print\" (click)=\"printData()\"><i class=\"fas fa-print fontIcn\"></i></span>\n      <span matTooltipPosition=\"below\" matTooltip=\"Email\" (click)=\"emailInv()\"><i class=\"fas fa-envelope-square fontIcn\"></i></span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <h6><span>{{invData.userName | uppercase}}Dilip</span> | <span>{{invData.mobile}}7799663951</span></h6>\n      <h6><span>{{invData.email}}Dilip@gmail.com</span> | <span>{{invData.address}}Hyderabad</span></h6>\n    </div>\n    <div class=\"col-sm\" >\n      <!-- <img src={{imageUrl()}}  style=\"width:50px;height:50px;border-radius:50px\"> -->\n    </div>\n    <div class=\"col-sm\" >\n      <h6>Invoice # {{invData.invId}} </h6><h6> Invoice Date {{invData.createDate|date}}</h6>\n    </div>\n  </div><br>\n  <div class=\"row\">\n    <div class=\"col-md-12\" style=\"overflow:auto;max-height:200px\">\n    <table class=\"table table-bordered\">\n    <thead class=\"fntcss\" style=\"background-color:#4fd64f\">\n      <tr>\n        <th>#</th>\n        <th>Item Name</th>\n        <th>Quantity</th>\n        <th>Rate</th>\n        <th>Total Amount</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of invData.invoiceDetail;let i = index; let lastEl = last; let firstEl = first\">\n        <td class=\"indx\">{{i+1}}</td>\n        <td>{{data.item}}</td>\n        <td>{{data.quantity}}</td>\n        <td>{{data.rate}}</td>\n        <td>{{data.rate * data.quantity | number}}</td>\n      </tr>\n      <!-- <hr> -->\n      <!-- <tr style=\"background-color:#c1bfbb\">\n        <td><h5><span>Discount </span>{{invData.discount}}%</h5></td>\n        <td><h5><span>Rewards </span>{{invData.rewards}}</h5></td>\n        <td><h5><span>Credit </span>{{invData.credit}}</h5></td>\n        <td>\n          <h4>SubTotal</h4>\n          <h4>GST</h4>\n          <h4 class=\"py-3\" style=\"background-color:#4fd64f;margin-right:-26px\">Invoice Total</h4>\n          <h4>Paid</h4>\n        </td>\n        <td>\n          <h4>{{invData.subTotal | number}}</h4>\n          <h4>8%</h4>\n          <h4 class=\"py-3\" style=\"background-color:#4fd64f;\">{{invData.total | number}}</h4>\n          <h4>{{invData.total - invData.credit | number}}</h4>\n        </td>\n      </tr> -->\n    </tbody>\n  </table>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-md-4 col-sm-6\">\n    <div class=\"row\">\n      <div class=\"col-md-4\"><h5>Discount</h5></div>\n      <div class=\"col-md-4\"><h5>{{invData.discount}}%</h5></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\"><h5>Rewards</h5></div>\n      <div class=\"col-md-4\"><h5>{{invData.rewards}}</h5></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\"><h5>Credit</h5></div>\n      <div class=\"col-md-4\"><h5>{{invData.credit}}</h5></div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n  </div>\n  <div class=\"col-md-4 col-sm-6\">\n    <div class=\"row\">\n      <div class=\"col-md-5\"><h5>SubTotal</h5></div>\n      <div class=\"col-md-5\"><h5>{{invData.subTotal | number}}</h5></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-5\"><h5>GST</h5></div>\n      <div class=\"col-md-5\"><h5>8%</h5></div>\n    </div>\n    <div class=\"row\" style=\"background-color:#4fd64f\">\n      <div class=\"col-md-5\"><h5>Invoice Total</h5></div>\n      <div class=\"col-md-5\"><h5>{{invData.total | number}}</h5></div>\n    </div>\n    <div class=\"row\"  style=\"background-color:#4fd64f\">\n      <div class=\"col-md-5\"><h5>Paid</h5></div>\n      <div class=\"col-md-5\"><h5>{{invData.total - invData.credit | number}}</h5></div>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/invoice-generation/invoice-generation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceGenerationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceGenerationComponent = /** @class */ (function () {
    function InvoiceGenerationComponent(_dataService, toastr) {
        this._dataService = _dataService;
        this.toastr = toastr;
    }
    InvoiceGenerationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.invData.subscribe(function (data) {
            return _this.invData = data[0];
        });
        console.log(JSON.stringify(this.invData));
    };
    InvoiceGenerationComponent.prototype.emailInv = function () {
        var _this = this;
        this._dataService.emailInvoice(this.invData.invId).subscribe(function (data) {
            _this.toastr.success("Email sent", '', { toastLife: '3000' });
        }, function (error) {
            _this.toastr.error('Sending failed.', 'Error', { toastLife: '3000' });
        });
    };
    InvoiceGenerationComponent.prototype.printData = function () {
        var divToPrint = document.getElementById("inv");
        var newWin = window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
    };
    InvoiceGenerationComponent.prototype.download = function () {
        var pdf = new __WEBPACK_IMPORTED_MODULE_3_jspdf__('p', 'pt', 'letter');
        pdf.setFontSize(30);
        pdf.text(180, 35, 'INVOICE');
        var source = window.document.getElementById("inv");
        var specialElementHandlers = {
            '#bypassme': function (element, renderer) {
                return true;
            }
        };
        var margins = {
            top: 80,
            bottom: 60,
            left: 10,
            width: 700
        };
        pdf.fromHTML(source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, {
            'width': margins.width,
            'elementHandlers': specialElementHandlers
        }, function (dispose) {
            pdf.save('Test.pdf');
        }, margins);
    };
    InvoiceGenerationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice-generation',
            template: __webpack_require__("./src/app/invoice-generation/invoice-generation.component.html"),
            styles: [__webpack_require__("./src/app/invoice-generation/invoice-generation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr__["ToastsManager"]])
    ], InvoiceGenerationComponent);
    return InvoiceGenerationComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.component.css":
/***/ (function(module, exports) {

module.exports = ".inbox{\n  width: 50px;\n}\n.listcss{\n    width: 254px;\n    text-align: center;\n    font-size: 1.5rem;\n    border-radius: 50px;\n    background-color: #E9ECEF;\n}\n.listcssBtn{\n    width: 254px;\n    text-align: center;\n    font-size: 1.5rem;\n    border-radius: 50px;\n}\n.thsize{\n  width: 180px;\n}\n.tablecss{\n  font-size: 20px;\n  width: 150px;\n  height: 32px;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2> My BusinessPlan </h2>\n  </div>\n</div>\n<div class=\"row justify-content-center\">\n  <ul class=\"nav nav-tabs cursr\">\n  <li class=\"nav-item\">\n    <span class=\"nav-link listcss\" id=\"nav-home-tab\" data-toggle=\"tab\" routerLink=\"/userData/businessPlan\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Rewards</span>\n  </li>\n  <li class=\"nav-item\">\n    <span class=\"nav-link listcss\" id=\"nav-profile-tab\" data-toggle=\"tab\" routerLink=\"/userData/discounts\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Discounts</span>\n  </li>\n  <!-- <li class=\"nav-item \">\n    <span class=\"nav-link listcss active\" id=\"nav-contact-tab\" data-toggle=\"tab\"routerLink=\"/userData/invoiceTemplate\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Invoice</span>\n  </li> -->\n</ul>\n</div>\n<div class=\"row cstyle p-3\">\n<!-- <div class=\"row col-12\">\n<button type=\"button\" class=\"btn btn-success listcssBtn\" routerLink=\"/userData/invoice\" name=\"button\">Create Invoice</button>\n</div> -->\n<hr>\n  <div class=\"row col-12\">\n    <div class=\"col-md-4\">\n      <h5>David</h5>\n      <h5>9671324421</h5>\n      <h5>david@gmail.com</h5>\n    </div>\n    <div class=\"col\">\n    </div>\n    <div class=\"col-md-4\">\n      <h5>Total BV:55123</h5>\n      <h5>Total Points:526</h5>\n    </div>\n  </div>\n  <div class=\"invoice row col-12\" *ngIf='!invoiceGenerate'>\n  <!-- Table -->\n  <div class=\"inbxTxt tableFlow col-12\">\n    <table class=\"table\" >\n      <thead class=\"thead-light\">\n        <tr class=\"fntcss\">\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Item Name</th>\n          <th scope=\"col\">Quantity</th>\n          <th scope=\"col\">Rate</th>\n          <th scope=\"col\">Total Amount</th>\n          <th>\n            <button type=\"button\" disabled  class=\"btn btn-success btn-sm\">\n              <span>+</span>\n            </button>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of invoice;let i = index; let lastEl = last; let firstEl = first\">\n          <td style=\"width:30px\">{{i+1}}</td>\n          <td class=\"thsize\">\n            <select [(ngModel)]='invoice[i].item' class=\"tablecss\" disabled>\n                <option *ngFor=\"let item of items\" value={{item}}>\n                    {{item}}\n                </option>\n            </select>\n            <!-- <input class=\"discount\" type=\"number\" min=\"0\" [(ngModel)]='discounts[i].minAmount'/> -->\n          </td>\n          <td class=\"thsize\">\n            <input class=\"quantity tablecss\" readonly type=\"number\" min=\"0\" [(ngModel)]='invoice[i].quantity'/>\n          </td>\n          <td class=\"thsize\">\n            <input class=\"rate tablecss\" readonly type=\"number\" min=\"0\" [(ngModel)]='invoice[i].rate'/>\n          </td>\n          <td class=\"thsize\">\n            <input readonly class=\"tablecss\" value=\"{{invoice[i].rate  * invoice[i].quantity | currency:'RS '}}\">\n          </td>\n          <td class=\"thsize\" *ngIf='!firstEl'>\n            <button type=\"button\" disabled  (click)='deleteRow(i)' class=\"btn btn-danger btn-sm\">\n              <span>-</span>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div><hr>\n  <div class=\"discount pl-4\">\n    <h5>Sub-Total: 7350 </h5>\n    <h5>Discount: <input  readonly class=\"inbox\"  name=\"discount\" value=\"20\">%</h5>\n    <h5>Rewards: <input  readonly class=\"inbox\" name=\"reward\" value=\"200\"></h5>\n    <h5>Total:  5880 </h5>\n  </div>\n  <div class=\"row col-12\">\n    <button type=\"button\" name=\"button\" disabled class=\"btn btn-block btn-success fntcss\" (click)=\"submitInvoice()\">Submit</button>\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/invoice/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__billing_service__ = __webpack_require__("./src/app/billing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(_billingService, cookieService, dataService) {
        this._billingService = _billingService;
        this.cookieService = cookieService;
        this.dataService = dataService;
        this.invoice = [{
                item: 'chair', quantity: '2', rate: '450'
            }, {
                item: 'sofa', quantity: '1', rate: '5450'
            }, {
                item: 'desk', quantity: '1', rate: '1450'
            }];
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        this.name = "David";
        this.allCookies = this.cookieService.getAll();
        this.mobile = this.allCookies.mobile;
        this.items = ['chair', 'bean', 'desk', 'sofa'];
        this.dataService.changebuPlanCss("55");
    };
    InvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__("./src/app/invoice/invoice.component.html"),
            styles: [__webpack_require__("./src/app/invoice/invoice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__billing_service__["a" /* BillingService */], __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports) {

module.exports = ".contact{\n  background-color: #0E2426;\n  color: #ECF0D0;\n}\n.imgBg,.services{\n  background: -webkit-gradient(linear, left top, right top, from(rgb(16, 141, 199)), to(rgb(239, 142, 56)));\n  background: linear-gradient(to right, rgb(16, 141, 199), rgb(239, 142, 56));\n  color: #0E2426;\n}\n.title{\n  font-size: 2.5rem;\n  -webkit-transition-property: font-size;\n  transition-property: font-size;\n  -webkit-transition-duration: 4s;\n          transition-duration: 4s;\n}\n/* .title:hover{\n  font-size: 8rem;\n} */\n.img-rounded{\n  border-radius: 50%;\n}\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"homePage\">\n<div class=\"jumbotron text-center imgBg p-0 m-0\">\n  <h1 class=\"title p-5 m-0\">SMYDATA</h1>\n</div>\n\n<!-- Container (About Section) -->\n<div id=\"about\" class=\"container-fluid bg-grey\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h2>About Company Page</h2><br>\n      <h4>MYDATA will provide solution to small scale business owners and give them an advantage over track profit and loss, automate digita marketing, capturing customer data.Landscape of business is huge in our country. Everyday day the footprint of different business continue to grow as the economy scales up to meet consumer demands.</h4>\n      <br><button class=\"btn btn-default btn-lg\">Get in Touch</button>\n    </div>\n    <div class=\"col-sm-4\">\n      <img class=\"img-circle\" src=\"https://image.shutterstock.com/z/stock-photo-image-of-happy-cashier-woman-on-workspace-in-supermarket-shop-looking-at-camera-623084897.jpg\" alt=\"\" style=\"width:inherit;height:300px\">\n    </div>\n  </div>\n</div>\n\n\n<!-- Container (Services Section) -->\n<div id=\"services\" class=\"container-fluid text-center services\">\n  <h2>SERVICES</h2>\n  <h4>What we offer</h4>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <!-- <span class=\"glyphicon  glyphicon-user logo-small\"></span> -->\n      <img class=\"img-rounded\" src=\"https://thumb7.shutterstock.com/display_pic_with_logo/1166069/1022916361/stock-vector-bills-online-payment-flat-isometric-vector-concept-of-mobile-payment-shoping-banking-1022916361.jpg\" alt=\"\" style=\"width:200px;height:200px\">\n      <h4>CUSTOMER</h4>\n      <p>The recipient of a good, service, product or an idea - obtained from a seller, vendor, or supplier</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <img class=\"img-rounded\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCowLouYbdJXiZkQTmp8XqMNxEVYo1sHxnRINs6rAYzjf1Pg6w\" alt=\"\" style=\"width:200px;height:200px\">\n      <h4>INVOICE</h4>\n      <p>A list of things provided or work done together with their cost, for payment at a later time</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <img class=\"img-rounded\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrcY4xlb_eDU39gzYcMuK2Cs_LwpdzYxXxmxd8oGx6qzTxKqkkoQ\" alt=\"\" style=\"width:200px;height:200px\">\n      <h4>Receivables</h4>\n      <p>Company's claims to the future collection of cash, other assets, or services</p>\n    </div>\n  </div>\n  <br><br>\n  <div class=\"row \">\n    <div class=\"col-sm-4\">\n      <img class=\"img-rounded\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4jn6Ib2wGsdtYVPq2oorQEQxbl7ytBWnkzThcNsEVhYqIoKF\" alt=\"\" style=\"width:200px;height:200px\">\n      <h4>PAYABLES</h4>\n      <p>To pay off a short-term debt to its creditors or suppliers</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <img class=\"img-rounded\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ts8Ptlq_eVOkRaY7RjS5OJyfPjqfsqeNCfMt4woPoeowgNAyeg\" alt=\"\" style=\"width:200px;height:200px\">\n      <h4>REPORTS</h4>\n      <p>Generate data and reports of your business</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <img class=\"img-rounded\" src=\"https://thumb1.shutterstock.com/display_pic_with_logo/91282/158522279/stock-photo-image-of-two-young-businessmen-using-touchpad-at-meeting-158522279.jpg\" alt=\"\" style=\"width:200px;height:200px\">\n      <h4 style=\"color:#303030;\">TICKETS</h4>\n      <p>Raise tickets and get solution for your problem</p>\n    </div>\n  </div>\n</div>\n\n<!-- Container (Portfolio Section) -->\n<div id=\"portfolio\" class=\"container-fluid text-center bg-grey\">\n  <h2>Do Better Business With Us.</h2>\n  <div id=\"myCarousel\" class=\"carousel slide text-center\" data-ride=\"carousel\">\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"item\">\n        <h4>\"Success usually comes to those who are too busy to be looking for it.\"<br><span>Dani, Developer</span></h4>\n      </div>\n      <div class=\"item\">\n        <h4>\"The only limit to our realization of tomorrow will be our doubts of today.<br><span>Mike, Dev, Inc</span></h4>\n      </div>\n      <div class=\"item active\">\n        <h4>\"In order to succeed, your desire for success should be greater than your fear of failure.\"<br><span>Viswa, BU</span></h4>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Container (Contact Section) -->\n<div id=\"contact\" class=\"container-fluid contact\">\n  <h2 class=\"text-center\">CONTACT</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <p>Contact us and we'll get back to you within 24 hours.</p>\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span> Hyderabad, India</p>\n      <p><span class=\"glyphicon glyphicon-phone\"></span> +91 9598945680</p>\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> smydata@gmail.com</p>\n    </div>\n    <div class=\"col-sm-7\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" type=\"text\" required>\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" type=\"email\" required>\n        </div>\n      </div>\n      <textarea class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Comment\" rows=\"2\"></textarea><br>\n      <div class=\"row\">\n        <div class=\"col-sm-12 form-group\">\n          <button class=\"btn btn-default pull-right\" type=\"submit\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__("./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/otp-authentication/otp-authentication.component.css":
/***/ (function(module, exports) {

module.exports = ".box{\n-webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n        box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\nbackground-color: #ffffff;\npadding: 25px;\n}\n.inputBx{\n  border: solid 1px #e3e3e3;\n  padding: 3px;\n}\n.grpTxt{\n  border: none;\n  background-color: #ffff;\n}\n.errMsg{\n  color: red;\n}\ninput:focus{\n    outline: none;\n}\n.focusGreen{\n  border: 1px solid green;\n}\n.focusRed{\n  border: 1px solid red;\n}\ninput{\n  border: none;\n  width: 250px;\n}\n.link{\n  cursor: pointer;\n  text-decoration: underline;\n}\n.header{\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/otp-authentication/otp-authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center \" *ngIf='!resetPwd && !regSuccess'>\n<div class=\"col-5 box\">\n  <form (ngSubmit)=\"verifyOtp(); otpVerify.reset()\" #otpVerify=\"ngForm\" class=\"otp-verify\">\n    <div *ngIf='invalidOtp' class=\"alert alert-danger\" (click)=\"invalidOtp = false\">\n      <strong>Invalid OTP</strong>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"otp\">Enter the one time password (OTP) that was sent to your mobile:</label>\n      <div class=\"input-group mb-2 mr-sm-2 inputBx\">\n         <input\n            pattern=\"[0-9]{0,5}\" maxlength=\"5\" placeholder=\"OTP\"\n            required autocomplete=\"off\" required\n            [(ngModel)]=\"otpValue\" name=\"otp\"\n            #otp=\"ngModel\"/>\n       </div>\n        <div class=\"errMsg\" [hidden]=\"otp.pristine || otp.valid\">\n          <span>Enter valid otp</span>\n        </div>\n    </div>\n  <button type=\"submit\" class=\"btn btn-success\" >Submit</button>\n  <button (click)=\"sendOtp();invalidOtp=false\" class=\"btn btn-primary\">Resend OTP</button>\n  </form>\n</div>\n</div>\n<div class=\" row justify-content-center m-3 alert alert-success\" *ngIf='regSuccess'>\n  <strong>Your registration is successful !!&nbsp;&nbsp; </strong>\n   <span class=\"text-primary\" (click)=\"successReg()\"> Click here &nbsp;</span> to LogIn.\n</div>\n\n<div class=\"container\" *ngIf=\"resetPwd\">\n  <div class=\"row justify-content-center\">\n      <div class=\"col-5 box\">\n\t\t\t<div class=\"header\">\n\t\t\t\t<h2>Reset Password</h2>\n\t\t\t</div>\n      <span class=\"my-2\" *ngIf=\"pswdResetSuccess\">\n        <strong class=\"text-success\">Password reset successful.&nbsp;\n        <span routerLink=\"/signIn\" class=\"text-info link\">click here</span>&nbsp;to login\n        </strong>\n      </span>\n\t\t\t<div class=\"\">\n\t\t\t\t<form  (ngSubmit)=\"resetPswd();pwdReset.reset()\" #pwdReset=\"ngForm\">\n          <div class=\"form-group\">\n            <div class=\"input-group inputBx\" [ngClass]=\"focusPassword\">\n               <div class=\"input-group-prepend\">\n                 <div class=\"input-group-text grpTxt\">\n                  <i class=\"fa fa-key\"></i>\n                 </div>\n               </div>\n               <input type=\"password\" name=\"password\"\n               [matTooltipPosition]=\"position.value\"matTooltip=\"Requires minimum 6 characters,at least 1 Uppercase, 1 Number and 1 of these special characters(!@#$%)\"\n               required placeholder=\"Password *\" autocomplete=\"off\"\n               pattern=\"^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%]).{6,15}$\" maxlength=\"15\"\n               (focus)=\"focusFunction(password.pristine,password.valid,'focus','focusPassword')\"\n               (focusout)=\"focusFunction(password.pristine,password.valid,'outfocus','focusPassword')\"\n               [(ngModel)]=\"pwdValNew\"\n               #password=\"ngModel\"/>\n             </div>\n             <div class=\"errMsg\" *ngIf=\"!pwdValNew && !regSuccess\" [hidden]=\"password.pristine\">\n               <span>Password is required </span>\n             </div>\n             <div class=\"errMsg\" *ngIf=\"pwdValNew && !regSuccess\" [hidden]=\"password.valid\">\n               <span>Password requirment does not match</span>\n             </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group inputBx\" [ngClass]=\"focusCnfPassword\">\n               <div class=\"input-group-prepend\">\n                 <div class=\"input-group-text grpTxt\">\n                  <i class=\"fa fa-key\"></i>\n                 </div>\n               </div>\n               <input type=\"password\" name=\"passwordCnf\"\n               pattern=\"^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%]).{6,15}$\"\n               (focus)=\"focusFunction(passwordCnf.pristine,passwordCnf.valid,'focus','focusCnfPassword')\"\n               (focusout)=\"focusFunction(passwordCnf.pristine,passwordCnf.valid,'outfocus','focusCnfPassword')\"\n                required placeholder=\"Confirm Password *\" autocomplete=\"off\"\n                [(ngModel)]=\"pwdValCnf\" #passwordCnf=\"ngModel\"/>\n             </div>\n             <div class=\"errMsg\" *ngIf=\"!pwdValCnf && !regSuccess\" [hidden]=\"passwordCnf.pristine\">\n               <span>Password (Confirm) is required</span>\n             </div>\n             <div class=\"errMsg\" *ngIf=\"pwdValCnf != pwdValNew && !regSuccess\" [hidden]=\"!pwdValCnf || passwordCnf.valid\">\n               <span> Passwords did not match.</span>\n             </div>\n          </div>\n          <div class=\"row justify-content-center\">\n            <div class=\"col-8\">\n              <button type=\"submit\" [className]=\"pwdReset.form.valid ? 'btn btn-block btn-success' : 'btn btn-block btn-default'\"  [disabled]=\"!pwdReset.form.valid\" name=\"button\">Submit</button>\n            </div>\n          </div>\n\t\t\t\t</form>\n\t\t\t</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/otp-authentication/otp-authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpAuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng5_toastr_ng5_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OtpAuthenticationComponent = /** @class */ (function () {
    function OtpAuthenticationComponent(dataService, location, router, cookieService, toastr) {
        this.dataService = dataService;
        this.location = location;
        this.router = router;
        this.cookieService = cookieService;
        this.toastr = toastr;
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.positionOptions[0]);
    }
    OtpAuthenticationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetPwd = false;
        if (this.location.path() == "/resetPwd") {
            this.resetPwd = true;
        }
        this.dataService.cast.subscribe(function (messageSource) { return _this.messageSource = messageSource; });
        this.dataService.mobileTemp.subscribe(function (mobileNum) { return _this.mobileNumber = mobileNum; });
        this.dataService.userTypeVal.subscribe(function (userType) { return _this.userType = userType; });
    };
    OtpAuthenticationComponent.prototype.sendOtp = function () {
        var _this = this;
        this.dataService.sendOtp(this.mobileNumber).subscribe(function (data) {
            _this.dataService.changeMessage(data + 'Regi');
        }, function (error) {
        });
    };
    OtpAuthenticationComponent.prototype.verifyOtp = function () {
        var _this = this;
        this.dataService.cast.subscribe(function (messageSource) { return _this.messageSource = messageSource; });
        this.dataService.cast.subscribe(function (regData) { return _this.regDataObj = regData; });
        console.log(this.regDataObj);
        if (this.messageSource == (this.otpValue + 'Regi')) {
            this.userRegistration(this.regDataObj);
        }
        else if (this.messageSource == this.otpValue) {
            this.resetPwd = true;
        }
        else {
            this.invalidOtp = true;
        }
    };
    OtpAuthenticationComponent.prototype.userRegistration = function (dataJson) {
        var _this = this;
        this.dataService.registerUserIndividual(dataJson).subscribe(function (data) {
            console.log(data);
            if (data != null && data[0] == 'success') {
                _this.regSuccess = true;
                return true;
            }
            else {
                _this.router.navigate(['/', 'signIn']);
                _this.toastr.error("Registration failed. Could not save the details", 'Error', { toastLife: '3000' });
            }
        }, function (error) {
            _this.toastr.error('Registration failed. Please try again', 'Error', { toastLife: '3000' });
            _this.router.navigate(['/', 'signIn']);
        });
    };
    OtpAuthenticationComponent.prototype.resetPswd = function () {
        var _this = this;
        this.mobile = this.cookieService.get('resetPwdMobile');
        this.dataService.resetpassword(this.pwdValNew, this.mobile).subscribe(function (data) {
            _this.pswdResetSuccess = true;
            _this.pwdValNew = _this.pwdValCnf = "";
        }, function (error) {
            _this.errorDisplay = true;
            _this.errMsg = 'Could not Reset the password. Try Again';
        });
    };
    OtpAuthenticationComponent.prototype.focusFunction = function (pristine, valid, event, type) {
        if (event == 'focus') {
            this[type] = "focusGreen";
        }
        else if (!pristine && !valid) {
            this[type] = "focusRed";
        }
        if (pristine && (event == 'outfocus')) {
            this[type] = "";
        }
    };
    OtpAuthenticationComponent.prototype.successReg = function () {
        this.router.navigate(['/', 'signIn']);
    };
    OtpAuthenticationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-otp-authentication',
            template: __webpack_require__("./src/app/otp-authentication/otp-authentication.component.html"),
            styles: [__webpack_require__("./src/app/otp-authentication/otp-authentication.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_5_ng5_toastr_ng5_toastr__["ToastsManager"]])
    ], OtpAuthenticationComponent);
    return OtpAuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/payables/payables.component.css":
/***/ (function(module, exports) {

module.exports = ".inputStyle{\n  width: 100px;\n}\n.fixWidth{\n  width: 50px;\n}\n.inps{\n  width: 200px;\n}\n.ng2-smart-pagination {\n  color: red;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: .650em !important;\n  padding: 0;\n  .ng2-smart-page-item {\n    display: inline;\n    font-size: .650em !important;\n  }\n\n  .page-link-next, .page-link-prev {\n    /* font-size: 20px; */\n  }\n}\n:host /deep/ ng2-smart-table table{\n    border-style: inset;\n    border-color: initial;\n    -o-border-image: initial;\n       border-image: initial;\n    border-width: 2px;\n    display: table;\n    border-spacing: 2px;\n    border-color: grey; /* border of the big table*/\n}\n/* grid lines */\n:host /deep/ ng2-smart-table table > tbody > tr > td {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border: 1px solid grey;\n}\n/* headers grid color*/\n:host /deep/ ng2-smart-table thead > tr > th  {\n    border: 1px solid grey;\n    width: 50px;\n    /* background-color:#673ab7; */\n}\n/*font size*/\n:host /deep/ ng2-smart-table {\n    font-size:16px;\n}\n"

/***/ }),

/***/ "./src/app/payables/payables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2>Payables</h2>\n  </div>\n</div>\n\n<!-- Payables Details -->\n<div class=\"cstyle dataBox p-3\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"data\" class=\"table table-bordered\"></ng2-smart-table>\n    </div>\n    <div class=\"col-md-6\">\n          <button type=\"button\" class=\"btn btn-success fntcss btn-block\" (click)=\"addNewFun()\" name=\"button\">Add New Payable</button>\n      <hr>\n      <div class=\"\" *ngIf=\"addNew\">\n          <form #userForm=\"ngForm\">\n            <div class=\"row\">\n            <div class=\"col-6\">\n            <div class=\"form-group\">\n              <label  class=\"col-form-label\">Invoice Id</label>\n              <div class=\"\">\n                <input type=\"text\" required class=\"form-control form-control-sm usrInpt\" name='id'  [(ngModel)]=\"newPayable.invoiceNumber\" placeholder=\"Enter Invoice Id\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label  class=\"col-form-label\">Name</label>\n              <div class=\"\">\n                <input type=\"text\" required class=\"form-control form-control-sm usrInpt\" name='username'  [(ngModel)]=\"userName\" placeholder=\"Enter Name\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label  class=\"col-form-label\">Mobile</label>\n              <div class=\"\">\n                <input type=\"text\" required class=\"form-control form-control-sm usrInpt\"\n                 name='mobileNum'  #mobileNum=\"ngModel\" id=\"mobileNum\" pattern=\"[0-9]{10}\"  [(ngModel)]=\"newPayable.mobile\" placeholder=\"Enter Mobile\">\n                 <div [hidden]=\"mobileNum.valid || mobileNum.pristine\"\n                     class=\"alert alert-danger\">\n                   Enter valid mobile number\n                </div>\n              </div>\n            </div>\n            </div>\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"colFormLabelSm\"  class=\"col-form-label\">Amount</label>\n                <div class=\"\">\n                  <input type=\"text\" required pattern=\"[0-9]{0,10}\" id=\"amount\" #amount=\"ngModel\" class=\"form-control form-control-sm usrInpt\"\n                  name='amount' [(ngModel)]='newPayable.amount' placeholder=\"Enter Amount\">\n                  <div [hidden]=\"amount.valid || amount.pristine\"\n                  class=\"alert alert-danger\">\n                  Only numbers are allowed\n                </div>\n              </div>\n            </div>\n              <div class=\"form-group\">\n                 <label for=\"email\"  class=\"col-form-label\">Email Address</label>\n                <div class=\"\">\n                  <input type=\"email\" class=\"form-control form-control-sm\" id=\"email\"\n                   [(ngModel)]=\"newPayable.email\" name=\"email\">\n                </div>\n              </div>\n            <div class=\"form-group\">\n              <label for=\"colFormLabelSm\"  class=\"col-form-label\">Description</label>\n              <div class=\"\">\n                <input type=\"text\" class=\"form-control form-control-sm usrInpt\" name='Description' [(ngModel)]='newPayable.desc' placeholder=\"Enter Description\">\n              </div>\n            </div>\n            </div>\n          </div>\n            <button class=\"btn btn-success btn-block fntcss\" [disabled]=\"!userForm.form.valid\" type=\"button\" (click)='addPayable(newPayable)' name=\"button\">Submit</button>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/payables/payables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__billing_service__ = __webpack_require__("./src/app/billing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PayablesComponent = /** @class */ (function () {
    function PayablesComponent(_demoService, billingService, toastr) {
        this._demoService = _demoService;
        this.billingService = billingService;
        this.toastr = toastr;
        this.displayedColumns = ['invoice', 'mobile', 'date', 'amount', 'payoff'];
        this.settings = {
            actions: {
                add: false,
                edit: false,
                delete: false,
            },
            columns: {
                invoiceNumber: {
                    title: 'Invoice'
                },
                mobile: {
                    title: 'Mobile'
                },
                createDate: {
                    title: 'Date'
                },
                amount: {
                    title: 'Amount'
                }
            }
        };
        this.newPayable = { invoiceNumber: '', amount: '', desc: '', mobile: '' };
    }
    PayablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._demoService.changebuPlanCss("0");
        this._demoService.tempCustomerMobile.subscribe(function (customerMobile) { return _this.customerMobile = customerMobile; });
        this.getPayablesData();
    };
    PayablesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    PayablesComponent.prototype.getPayablesData = function () {
        var _this = this;
        this.model = true;
        this.billingService.getPayables().subscribe(function (data) {
            if (data != null) {
                if (data[0] && data[0]['paybles'].length > 0) {
                    var dataObj = data[0]['paybles'];
                    _this.data = dataObj;
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatTableDataSource */](dataObj);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                    _this.applyFilter(_this.customerMobile);
                }
                else {
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatTableDataSource */]([]);
                }
            }
            else {
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatTableDataSource */]([]);
                _this.toastr.info("No Records Found", 'Info', { toastLife: '3000' });
            }
        }, function (error) {
            _this.toastr.error("Could Not Fetch Data!! Try Again..", 'Error', { toastLife: '3000' });
        });
    };
    ;
    PayablesComponent.prototype.payAmount = function (data) {
        var _this = this;
        var arrList = [data];
        this.customerMobile = "";
        this.billingService.postPayOffAmount(arrList).subscribe(function (data) {
            if (data) {
                _this.toastr.success("", 'Success', { toastLife: '3000' });
                _this.customerMobile = "";
                _this.getPayablesData();
            }
            else {
                _this.getPayablesData();
                _this.toastr.info("No Records Found ", 'Info', { toastLife: '3000' });
            }
        }, function (error) {
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '3000' });
        });
    };
    PayablesComponent.prototype.addPayable = function (data) {
        var _this = this;
        var arrList = [data];
        this.customerMobile = "";
        this.billingService.addPayables(arrList).subscribe(function (data) {
            _this.newPayable = {};
            if (data != null && Object.keys(data).length >= 0) {
                _this.toastr.success("Saved successfully", 'Success', { toastLife: '3000' });
                _this.customerMobile = "";
                _this.getPayablesData();
            }
            else {
                _this.getPayablesData();
            }
            _this.addNew = false;
        }, function (error) {
            _this.addNew = false;
            _this.newPayable = {};
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '3000' });
        });
    };
    PayablesComponent.prototype.addNewFun = function () {
        this.addNew = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatPaginator */])
    ], PayablesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatSort */])
    ], PayablesComponent.prototype, "sort", void 0);
    PayablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-payables',
            template: __webpack_require__("./src/app/payables/payables.component.html"),
            styles: [__webpack_require__("./src/app/payables/payables.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__billing_service__["a" /* BillingService */], __WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr__["ToastsManager"]])
    ], PayablesComponent);
    return PayablesComponent;
}());



/***/ }),

/***/ "./src/app/raise-ticket/raise-ticket.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/raise-ticket/raise-ticket.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2>Raise Request</h2>\n  </div>\n</div>\n<div class=\"row cstyle dataBox\">\n  <div class=\"col\"> </div>\n  <div class=\"col-md-6 col-sm-12\">\n  <form class=\"center20\" #ticket=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"subject\">Subject:</label>\n      <input type=\"text\" required class=\"form-control\" name=\"subject\" id=\"subject\" [(ngModel)]=\"subject\"  placeholder=\"Enter subject\">\n    </div>\n    <div class=\"form-group\">\n      <label>Description:</label>\n      <textarea required class=\"form-control\" name=\"description\" id=\"Description\" [(ngModel)]=\"description\" placeholder=\"Enter Description\"></textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success fntcss btn-block\" (click)=\"submit()\" [disabled]=\"!ticket.form.valid\" >Submit</button>\n  </form>\n  </div>\n  <div class=\"col\"> </div>\n</div>\n"

/***/ }),

/***/ "./src/app/raise-ticket/raise-ticket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaiseTicketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RaiseTicketComponent = /** @class */ (function () {
    function RaiseTicketComponent(_demoService, toastr) {
        this._demoService = _demoService;
        this.toastr = toastr;
    }
    RaiseTicketComponent.prototype.ngOnInit = function () {
        this._demoService.changebuPlanCss("0");
    };
    RaiseTicketComponent.prototype.submit = function () {
        var _this = this;
        this._demoService.createTicket({ subject: this.subject, description: this.description }).subscribe(function (data) {
            _this.toastr.success("Request Sent", 'success', { toastLife: '5000' });
            _this.subject = _this.description = "";
        }, function (error) {
            _this.subject = _this.description = "";
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    RaiseTicketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-raise-ticket',
            template: __webpack_require__("./src/app/raise-ticket/raise-ticket.component.html"),
            styles: [__webpack_require__("./src/app/raise-ticket/raise-ticket.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr__["ToastsManager"]])
    ], RaiseTicketComponent);
    return RaiseTicketComponent;
}());



/***/ }),

/***/ "./src/app/receivables/receivables.component.css":
/***/ (function(module, exports) {

module.exports = "\n.inps{\n  width: 200px;\n}\n.ng2-smart-pagination {\n  color: red;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: .650em !important;\n  padding: 0;\n  .ng2-smart-page-item {\n    display: inline;\n    font-size: .650em !important;\n  }\n\n  .page-link-next, .page-link-prev {\n    /* font-size: 20px; */\n  }\n}\n:host /deep/ ng2-smart-table table{\n    border-style: inset;\n    border-color: initial;\n    -o-border-image: initial;\n       border-image: initial;\n    border-width: 2px;\n    display: table;\n    border-spacing: 2px;\n    border-color: grey; /* border of the big table*/\n}\n/* grid lines */\n:host /deep/ ng2-smart-table table > tbody > tr > td {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border: 1px solid grey;\n}\n/* headers grid color*/\n:host /deep/ ng2-smart-table thead > tr > th  {\n    border: 1px solid grey;\n    width: 50px;\n    /* background-color:#673ab7; */\n}\n/*font size*/\n:host /deep/ ng2-smart-table {\n    font-size:16px;\n}\n"

/***/ }),

/***/ "./src/app/receivables/receivables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2>Receivables</h2>\n  </div>\n</div>\n\n<!-- Receivables Details -->\n<div class=\"cstyle dataBox p-3\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"data\" class=\"table table-bordered\"></ng2-smart-table>\n    </div>\n    <div class=\"col-md-6\">\n          <button type=\"button\" class=\"btn btn-success fntcss btn-block\" (click)=\"addNewFun()\" name=\"button\">Add New Receivable</button>\n      <hr>\n      <div class=\"\" *ngIf=\"addNew\">\n          <form #userForm=\"ngForm\">\n            <div class=\"row\">\n            <div class=\"col-6\">\n            <div class=\"form-group\">\n              <label  class=\"col-form-label\">Invoice Id</label>\n              <div class=\"\">\n                <input type=\"text\" required class=\"form-control form-control-sm usrInpt\" name='id'  [(ngModel)]=\"newReceivable.invoiceNumber\" placeholder=\"Enter Invoice Id\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label  class=\"col-form-label\">Name</label>\n              <div class=\"\">\n                <input type=\"text\" required class=\"form-control form-control-sm usrInpt\" name='username'  [(ngModel)]=\"userName\" placeholder=\"Enter Name\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label  class=\"col-form-label\">Mobile</label>\n              <div class=\"\">\n                <input type=\"text\" required class=\"form-control form-control-sm usrInpt\"\n                 name='mobileNum'  #mobileNum=\"ngModel\" id=\"mobileNum\" pattern=\"[0-9]{10}\"  [(ngModel)]=\"newReceivable.mobile\" placeholder=\"Enter Mobile\">\n                 <div [hidden]=\"mobileNum.valid || mobileNum.pristine\"\n                     class=\"alert alert-danger\">\n                   Enter valid mobile number\n                </div>\n              </div>\n            </div>\n            </div>\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"colFormLabelSm\"  class=\"col-form-label\">Amount</label>\n                <div class=\"\">\n                  <input type=\"text\" required pattern=\"[0-9]{0,10}\" id=\"amount\" #amount=\"ngModel\" class=\"form-control form-control-sm usrInpt\"\n                  name='amount' [(ngModel)]='newReceivable.amount' placeholder=\"Enter Amount\">\n                  <div [hidden]=\"amount.valid || amount.pristine\"\n                  class=\"alert alert-danger\">\n                  Only numbers are allowed\n                </div>\n              </div>\n            </div>\n              <div class=\"form-group\">\n                 <label for=\"email\"  class=\"col-form-label\">Email Address</label>\n                <div class=\"\">\n                  <input type=\"email\" class=\"form-control form-control-sm\" id=\"email\"\n                   [(ngModel)]=\"newReceivable.email\" name=\"email\">\n                </div>\n              </div>\n            <div class=\"form-group\">\n              <label for=\"colFormLabelSm\"  class=\"col-form-label\">Description</label>\n              <div class=\"\">\n                <input type=\"text\" class=\"form-control form-control-sm usrInpt\" name='Description' [(ngModel)]='newReceivable.desc' placeholder=\"Enter Description\">\n              </div>\n            </div>\n            </div>\n          </div>\n            <button class=\"btn btn-success btn-block fntcss\" [disabled]=\"!userForm.form.valid\" type=\"button\" (click)='addReceivable(newReceivable)' name=\"button\">Submit</button>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/receivables/receivables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceivablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__billing_service__ = __webpack_require__("./src/app/billing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReceivablesComponent = /** @class */ (function () {
    function ReceivablesComponent(_demoService, billingService, toastr) {
        this._demoService = _demoService;
        this.billingService = billingService;
        this.toastr = toastr;
        this.newReceivable = {};
        this.displayedColumns = ['invoice', 'mobile', 'date', 'amount', 'receive'];
        this.settings = {
            actions: {
                add: false,
                edit: false,
                delete: false,
            },
            columns: {
                invoiceNumber: {
                    title: 'Invoice'
                },
                mobile: {
                    title: 'Mobile'
                },
                createDate: {
                    title: 'Date'
                },
                amount: {
                    title: 'Amount'
                }
            }
        };
        this.newReceivable = {};
        this._demoService.changebuPlanCss("0");
    }
    ReceivablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._demoService.tempCustomerMobile.subscribe(function (customerMobile) { return _this.customerMobile = customerMobile; });
        this.getReceivablesData();
    };
    ReceivablesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ReceivablesComponent.prototype.getReceivablesData = function () {
        var _this = this;
        this.model = true;
        this.billingService.getReceivables().subscribe(function (data) {
            if (data != null && Object.keys(data).length >= 0) {
                if (data[0] && data[0]['receivables'].length > 0) {
                    var dataObj = data[0]['receivables'];
                    _this.data = dataObj;
                    console.log(_this.data);
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatTableDataSource */](dataObj);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                    _this.applyFilter(_this.customerMobile);
                }
                else {
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatTableDataSource */]([]);
                }
            }
            else {
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatTableDataSource */]([]);
                _this.toastr.info("No Records Found", 'Info', { toastLife: '3000' });
            }
        }, function (error) {
            _this.toastr.error("Could Not Fetch Data!! Try Again..", 'Error', { toastLife: '3000' });
        });
    };
    ReceivablesComponent.prototype.receiveAmount = function (data) {
        var _this = this;
        var arrList = [data];
        this.billingService.postReceivedAmount(arrList).subscribe(function (data) {
            _this.customerMobile = "";
            if (data) {
                _this.toastr.success("", 'Success', { toastLife: '3000' });
                _this.getReceivablesData();
            }
            else {
                _this.getReceivablesData();
                _this.toastr.info("No Records Found", 'Info', { toastLife: '3000' });
            }
        }, function (error) {
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '3000' });
        });
    };
    ReceivablesComponent.prototype.addReceivable = function (data) {
        var _this = this;
        var arrList = [data];
        this.customerMobile = "";
        this.billingService.addReceivables(arrList).subscribe(function (data) {
            _this.newReceivable = {};
            if (data != null && Object.keys(data).length >= 0) {
                _this.toastr.success("Saved successfully", 'Success', { toastLife: '3000' });
                _this.getReceivablesData();
            }
            else {
                _this.getReceivablesData();
            }
            _this.addNew = false;
        }, function (error) {
            _this.addNew = false;
            _this.newReceivable = {};
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '3000' });
        });
    };
    ReceivablesComponent.prototype.addNewFun = function () {
        this.addNew = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatPaginator */])
    ], ReceivablesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatSort */])
    ], ReceivablesComponent.prototype, "sort", void 0);
    ReceivablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-receivables',
            template: __webpack_require__("./src/app/receivables/receivables.component.html"),
            styles: [__webpack_require__("./src/app/receivables/receivables.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__billing_service__["a" /* BillingService */], __WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr__["ToastsManager"]])
    ], ReceivablesComponent);
    return ReceivablesComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".box{\n-webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n        box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\nbackground-color: #ffffff;\npadding: 25px;\n}\n.inputBx{\n  border: solid 1px #e3e3e3;\n  padding: 3px;\n}\n.grpTxt{\n  border: none;\n  background-color: #ffff;\n}\n.errMsg{\n  color: red;\n}\ninput:focus{\n    outline: none;\n}\n.isDisabled{\n  border: solid 1px #e3e3e3 !important;\n}\n.focusGreen{\n  border: 1px solid green;\n}\n.focusRed{\n  border: 1px solid red;\n}\ninput{\n  border: none;\nwidth: 90%;\n}\n.flexDiv{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flex-item{\n  width: 30%\n}\n.flex-item-middle{\n  margin: 0 5px;\n}\n.dropdown-flex{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.dropdown-category{\n  width: 45%;\n}\n.dropdown-register{\n  margin-left: 10%;\n  width: 45%;\n}\n.flex-item-getAdd{\n  margin-top: 25px;\n  width:30%\n}\n.flex-item-buAdd{\n  width: 70%\n}\n.locationBtn{\n  margin-top: 31px;\n}\n.locDeatils{\n  width: inherit;\n}\n.tNc{\n  width: inherit;\n}\n.regLink{\n  display: inline-block;\n  width: 48%;\n  text-align:center;\n  padding: 4px;\n  margin: 2px;\n  color:#69a644;\n  font-weight: 400;\n  cursor: pointer;\n}\n.registeropt{\n  border:1px solid #69a644;\n  border-radius: 1px;\n  background-color: #FFFFFF;\n}\n.selected{\nbackground-color: #69a644;\ncolor: white;\n}\n.getloc{\n  margin-left:18px;\n}\n/deep/ .tooltipCss{\n  color: black !important;\n  font-size: 12px;\n  background-color: #ffffff;\n  border: 1px solid black;\n  display: block !important;\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n      <div class=\"col-5 box\">\n      <div class=\"registeropt my-3\" >\n        <div class=\"regLink\" [ngClass]=\"{'selected':business}\" (click)=\"regForm(true)\">\n        Business\n        </div>\n        <div class=\"regLink\" [ngClass]=\"{'selected':!business}\" (click)=\"regForm(false)\">\n          Individual\n        </div>\n      </div>\n\t\t\t<div class=\"business\" *ngIf=\"business\">\n\t\t\t\t<form  (ngSubmit)=\"onSubmit(model);\" #signup=\"ngForm\" id=\"register\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusBuName,focusRed:focusBuName == 'red' ? true : flase,isDisabled:isDisabled}\">\n\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-text grpTxt\">\n\t\t\t\t\t\t\t\t\t\t\t\t <i class=\"fa  fa-id-card\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t </div>\n                     <input name=\"name\" autocomplete=\"off\"\n                     required placeholder=\"Company Name / Business Name *\"\n                     (focus)=\"focusFunction(name.pristine,name.valid,'focus','focusBuName')\"\n                     (focusout)=\"focusFunction(name.pristine,name.valid,'outfocus','focusBuName')\"\n                     [(ngModel)]=\"model.businessDetails[0].companyName\" #name=\"ngModel\"/>\n\t\t\t\t\t\t\t\t\t </div>\n                    <div class=\"errMsg\" *ngIf=\"!model.businessDetails[0].companyName\" [hidden]=\"name.pristine || name.valid\">\n                      <span>Company Name / Business Name is required</span>\n                    </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusOwnerName == 'green' ? true : flase,focusRed:focusOwnerName == 'red' ? true : flase,isDisabled:isDisabled}\">\n\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-text grpTxt\">\n\t\t\t\t\t\t\t\t\t\t\t\t <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t </div>\n                     <input type=\"text\"  autocomplete=\"off\"\n                     required placeholder=\"Owner Name / Manager Name *\"\n                     (focus)=\"focusFunction(ownername.pristine,ownername.valid,'focus','focusOwnerName')\"\n                     (focusout)=\"focusFunction(ownername.pristine,ownername.valid,'outfocus','focusOwnerName')\"\n                     [(ngModel)]=\"model.ownerName\" name=\"ownername\"\n                     #ownername=\"ngModel\" />\n\t\t\t\t\t\t\t\t\t </div>\n                    <div class=\"errMsg\"  *ngIf=\"!model.businessDetails[0].ownerName\" [hidden]=\"ownername.pristine || ownername.valid\">\n                      <span> Owner Name / Manager Name is required</span>\n                    </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusMobile == 'green' ? true : flase,focusRed:focusMobile == 'red' ? true : flase,isDisabled:isDisabled}\">\n\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-text grpTxt\">\n\t\t\t\t\t\t\t\t\t\t\t\t <i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t </div>\n                     <input type=\"text\" name=\"mobile\"  autocomplete=\"off\"\n                      required placeholder=\"Mobile Number *\" autocomplete=\"off\"\n                      (focus)=\"focusFunction(mobile.pristine,mobile.valid,'focus','focusMobile');mobileValidCheck = false\"\n                      (focusout)=\"focusFunction(mobile.pristine,mobile.valid,'outfocus','focusMobile');mobileValidCheck = true;\"\n                      (keyup)=\"doesUserExist(model)\"\n                      pattern=\"[0-9]{10}\" maxlength=\"10\"\n                      [(ngModel)]=\"model.mobile\"\n                      #mobile=\"ngModel\"/>\n\t\t\t\t\t\t\t\t\t </div>\n                    <div class=\"errMsg\" *ngIf=\"!model.mobile && !userExistCheck\" [hidden]=\"mobile.pristine\">\n                      <span>Mobile number is required</span>\n                    </div>\n                    <div class=\"errMsg\" *ngIf=\"model.mobile && mobileValidCheck\" [hidden]=\"mobile.valid\">\n                      <span>Please provide valid mobile number</span>\n                    </div>\n                    <div class=\"errMsg\" *ngIf=\"!mobile.pristine && userExistCheck\">\n                      <strong>{{userExistCheck}}</strong>\n                    </div>\n\t\t\t\t\t\t\t\t</div>\n                <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusEmail == 'green' ? true : flase,focusRed:focusEmail== 'red' ? true : flase,isDisabled:isDisabled}\">\n\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-text grpTxt\">\n\t\t\t\t\t\t\t\t\t\t\t\t <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t </div>\n                     <input type=\"email\" name=\"email\"  autocomplete=\"off\"\n                     required placeholder=\"Email Address *\" autocomplete=\"off\"\n                     pattern=\"^[\\w\\.]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$\"\n\n                     (focus)=\"focusFunction(email.pristine,email.valid,'focus','focusEmail');emailValidCheck = false\"\n                     (focusout)=\"focusFunction(email.pristine,email.valid,'outfocus','focusEmail');emailValidCheck = true\"\n                     (keyup)=\"doesUserExist(model)\"\n                     [(ngModel)]=\"model.email\" #email=\"ngModel\"/>\n\t\t\t\t\t\t\t\t\t </div>\n                    <div class=\"errMsg\" *ngIf=\"!model.email && !emailExistCheck\" [hidden]=\"email.pristine\">\n                      <span>Email id is required</span>\n                    </div>\n                    <div class=\"errMsg\" *ngIf=\"model.email && emailValidCheck\" [hidden]=\"email.valid\">\n                      <span>Please provide valid email id</span>\n                    </div>\n                    <div class=\"errMsg\" *ngIf=\"!email.pristine && emailExistCheck\">\n                      <strong>{{emailExistCheck}}</strong>\n                    </div>\n\t\t\t\t\t\t\t\t</div>\n                <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusPassword == 'green' ? true : flase,focusRed:focusPassword== 'red' ? true : flase,isDisabled:isDisabled ? true : flase}\">\n\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-text grpTxt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-key\"></i>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t </div>\n                     <input type=\"password\" name=\"password\"  autocomplete=\"off\"\n                     matTooltipPosition=\"right\" matTooltipClass=\"tooltipCss\"\n                     matTooltip=\"Requires minimum 6 characters,<br/>at least 1 Uppercase,<br/> 1 Number and 1 of these special characters(!@#$%)\"\n                     required placeholder=\"Password *\" autocomplete=\"off\"\n                     pattern=\"^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%]).{6,15}$\" maxlength=\"15\"\n                     (focus)=\"focusFunction(password.pristine,password.valid,'focus','focusPassword');pswdValidCheck=false\"\n                     (focusout)=\"focusFunction(password.pristine,password.valid,'outfocus','focusPassword');pswdValidCheck=true\"\n                     [(ngModel)]=\"model.password\"\n                     #password=\"ngModel\"/>\n\t\t\t\t\t\t\t\t\t </div>\n                   <div class=\"errMsg\" *ngIf=\"!model.password\" [hidden]=\"password.pristine\">\n                     <span>Password is required </span>\n                   </div>\n                   <div class=\"errMsg\" *ngIf=\"model.password && pswdValidCheck\" [hidden]=\"password.valid\">\n                     <span>Password requirment does not match</span>\n                   </div>\n\t\t\t\t\t\t\t\t</div>\n                <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusCnfPassword == 'green' ? true : flase,focusRed:focusCnfPassword== 'red' ? true : flase,isDisabled:isDisabled ? true : flase}\">\n\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-text grpTxt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-key\"></i>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t </div>\n                     <input type=\"password\" name=\"passwordCnf\"  autocomplete=\"off\"\n                     pattern=\"^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%]).{6,15}$\"\n                     (focus)=\"focusFunction(passwordCnf.pristine,passwordCnf.valid,'focus','focusCnfPassword');pswdCnfValidCheck =false\"\n                     (focusout)=\"focusFunction(passwordCnf.pristine,passwordCnf.valid,'outfocus','focusCnfPassword');pswdCnfValidCheck =true\"\n                      required placeholder=\"Confirm Password *\" autocomplete=\"off\"\n                      [(ngModel)]=\"model.passwordCnf\" #passwordCnf=\"ngModel\"/>\n\t\t\t\t\t\t\t\t\t </div>\n                   <div class=\"errMsg\" *ngIf=\"!model.passwordCnf\" [hidden]=\"passwordCnf.pristine\">\n                     <span>Password (Confirm) is required</span>\n                   </div>\n                   <div class=\"errMsg\" *ngIf=\"model.passwordCnf != model.password && pswdCnfValidCheck\" [hidden]=\"!model.passwordCnf || passwordCnf.valid\">\n                     <span> Passwords did not match.</span>\n                   </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusBuAddr == 'green' ? true : flase,focusRed:focusBuAddr== 'red' ? true : flase,isDisabled:isDisabled ? true : flase}\">\n\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-text grpTxt\">\n\t\t\t\t\t\t\t\t\t\t\t\t <i class=\"fa fa-university\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t </div>\n                     <input name=\"businessAddr\"  autocomplete=\"off\"\n                     required placeholder=\"Business Address *\"\n                     (focus)=\"focusFunction(businessAddr.pristine,businessAddr.valid,'focus','focusBuAddr')\"\n                     (focusout)=\"focusFunction(businessAddr.pristine,businessAddr.valid,'outfocus','focusBuAddr')\"\n                     [(ngModel)]=\"model.businessDetails[0].businessAddress\" #businessAddr=\"ngModel\"/>\n\t\t\t\t\t\t\t\t\t </div>\n                    <div class=\"errMsg\" *ngIf=\"!model.businessDetails[0].businessAddress\" [hidden]=\"businessAddr.pristine\">\n                      <span>Business Address is required</span>\n                    </div>\n\t\t\t\t\t\t\t\t</div>\n\n\n          <div class=\"form-group\">\n            <div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusPin == 'green' ? true : flase,focusRed:focusPin =='red'? true : flase,isDisabled:isDisabled ? true : flase}\">\n               <div class=\"input-group-prepend\">\n                 <div class=\"input-group-text grpTxt\">\n                   <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                 </div>\n               </div>\n               <input name=\"pin\" style=\"width:60%\"  autocomplete=\"off\"\n               required placeholder=\"Pin Code *\" maxlength=\"6\" pattern=\"[0-9]{6}\"\n               (focus)=\"focusFunction(pin.pristine,pin.valid,'focus','focusPin');pinValidCheck = false\"\n               (focusout)=\"focusFunction(pin.pristine,pin.valid,'outfocus','focusPin');pinValidCheck = true\"\n               [(ngModel)]=\"model.businessDetails[0].pinCode\" #pin=\"ngModel\"/>\n               <div class=\"input-group-append\">\n                 <button type=\"button\" class=\"btn btn-success btn-md getloc\"\n                 [disabled]=\"!model.businessDetails[0].pinCode || !pin.valid\"\n                 (click)=\"addressDetails(pin.value)\">\n                 Get Location\n               </button>\n               </div>\n             </div>\n              <div class=\"errMsg\" *ngIf=\"!model.businessDetails[0].pinCode\" [hidden]=\"pin.pristine\">\n                <span>Pin code is required</span>\n              </div>\n              <div class=\"errMsg\" *ngIf=\"model.businessDetails[0].pinCode && pinValidCheck\" [hidden]=\"pin.valid\">\n                <span>Please provide valid pin code</span>\n              </div>\n              <div class=\"errMsg\" *ngIf=\"showAddrMsg && (!model.businessDetails[0].city || !model.businessDetails[0].state || !model.businessDetails[0].country)\">\n                <span>Could not fetch the location details.Please provide the following details</span>\n              </div>\n          </div>\n          <div  class=\"flexDiv\" *ngIf=\"showAddr\">\n         <div class=\"form-group flex-item\">\n             <div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusCity == 'green' ? true : flase,focusRed:focusCity == 'red',isDisabled:isDisabled ? true : flase}\">\n                <input  name=\"city\" class=\"locDeatils\"  autocomplete=\"off\"\n                required placeholder=\"City *\"\n                (focus)=\"focusFunction(city.pristine,city.valid,'focus','focusCity')\"\n                (focusout)=\"focusFunction(city.pristine,city.valid,'outfocus','focusCity')\"\n                [(ngModel)]=\"model.businessDetails[0].city\" #city=\"ngModel\"/>\n              </div>\n               <div class=\"errMsg\" [hidden]=\"city.pristine || city.valid\">\n                 <span>City is required</span>\n               </div>\n         </div>\n         <div class=\"form-group flex-item flex-item-middle\">\n           <div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusState == 'green' ? true : flase,focusRed:focusBuAddr== 'red' ? true : flase,isDisabled:isDisabled ? true : flase}\">\n              <input  name=\"state\" class=\"locDeatils\"  autocomplete=\"off\"\n              required placeholder=\"State *\"\n              (focus)=\"focusFunction(state.pristine,state.valid,'focus','focusState')\"\n              (focusout)=\"focusFunction(state.pristine,state.valid,'outfocus','focusState')\"\n              [(ngModel)]=\"model.businessDetails[0].state\" #state=\"ngModel\"/>\n            </div>\n             <div class=\"errMsg\" [hidden]=\"state.pristine || state.valid\">\n               <span>State is required</span>\n             </div>\n         </div>\n         <div class=\"form-group flex-item flex-item-last\">\n           <div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusCountry == 'green' ? true : flase,focusRed:focusCountry== 'red' ? true : flase,isDisabled:isDisabled ? true : flase}\">\n              <input  name=\"country\" class=\"locDeatils\"  autocomplete=\"off\"\n              required placeholder=\"Country *\"\n              (focus)=\"focusFunction(country.pristine,country.valid,'focus','focusCountry')\"\n              (focusout)=\"focusFunction(country.pristine,country.valid,'outfocus','focusCountry')\"\n              [(ngModel)]=\"model.businessDetails[0].country\" #country=\"ngModel\"/>\n            </div>\n             <div class=\"errMsg\" [hidden]=\"country.pristine || country.valid\">\n               <span>Country is required</span>\n             </div>\n         </div>\n      </div>\n      <!-- website -->\n      <div class=\"form-group\">\n        <div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusWebsite == 'green' ? true : flase,focusRed:focusWebsite== 'red' ? true : flase,isDisabled:isDisabled ? true : flase}\">\n           <div class=\"input-group-prepend\">\n             <div class=\"input-group-text grpTxt\">\n               <i class=\"\" aria-hidden=\"true\"></i>\n             </div>\n           </div>\n           <input  name=\"website\"  autocomplete=\"off\"\n           placeholder=\"Website\"\n           [(ngModel)]=\"model.businessDetails[0].website\" #website=\"ngModel\"/>\n         </div>\n          <div class=\"errMsg\" [hidden]=\"website.pristine || website.valid\">\n            <span>Website is required</span>\n          </div>\n      </div>\n      <!--  -->\n      <div class=\"dropdown-flex\">\n         <div class=\"form-group dropdown-category\" >\n            <select name=\"category\" ngModel class=\"form-control\" id=\"category\"\n            required\n            [(ngModel)]=\"model.businessDetails[0].category\" name=\"category\"\n            #category=\"ngModel\">\n            <option value=\"\" disabled>Business Category *</option>\n            <option *ngFor=\"let data of categoryInfo\" [ngValue]=\"data.id\">\n            {{ data.name }}\n            </option>\n            </select>\n         </div>\n         <div class=\"form-group dropdown-register\" >\n            <select name=\"reg\" ngModel class=\"form-control\"\n            required (change)=\"idProofValidate(model.businessDetails[0].reg)\"\n            [(ngModel)]=\"model.businessDetails[0].reg\" name=\"reg\"\n            #reg=\"ngModel\">\n            <option value=\"\" disabled>Registration Info *</option>\n            <option *ngFor=\"let data of registerInfo\" [ngValue]=\"data.id\">\n            {{ data.name }}\n            </option>\n            </select>\n         </div>\n      </div>\n      <!--  -->\n      <div class=\"form-group\" *ngIf='model.businessDetails[0].reg'>\n        <div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusregDetails == 'green' ? true : flase,focusRed:focusregDetails== 'red' ? true : flase,isDisabled:isDisabled ? true : flase}\">\n           <div class=\"input-group-prepend\">\n             <div class=\"input-group-text grpTxt\">\n               <i class=\"\" aria-hidden=\"true\"></i>\n             </div>\n           </div>\n           <input name=\"regDetails\"  autocomplete=\"off\"\n           required placeholder=\"Enter Id Proof Number *\" [maxlength]=\"maxLn\"\n           (focus)=\"focusFunction(regDetails.pristine,regDetails.valid,'focus','focusregDetails')\"\n           (focusout)=\"focusFunction(regDetails.pristine,regDetails.valid,'outfocus','focusregDetails')\"\n           (blur)=\"idProofValidate(model.businessDetails[0].reg,regDetails.value);\"\n            [(ngModel)]=\"model.businessDetails[0].regProof\"\n            #regDetails=\"ngModel\"/>\n          </div>\n          <div class=\"errMsg\" [hidden]=\"regDetails.valid || regDetails.pristine\">\n            <span>{{idProofErrMsg}}</span>\n          </div>\n      </div>\n        <div class=\"form-group\">\n      <div class=\"input-group inputBx\" >\n        <input type=\"file\" [(ngModel)]=\"filedata1\" name ='file' #file='ngModel' (change)=\"selectFile($event)\" placeholder=\"Upload Id Proof Doc\" accept=\".png,.jpg,.jpeg\" required>\n      </div>\n      <div class=\"errMsg\" [hidden]=\"file.valid || file.pristine\">\n        <span>invalid file upload format.Only JPG and PNG files are allowed.</span>\n      </div>\n      </div>\n      <!-- Terms and conditions -->\n      <!-- <div class=\"form-group\">\n        <span class=\"input-group-append\">\n        <input class=\"tNc input-group\" required name=\"tnc\" id=\"tnc\"\n        [(ngModel)]=\"model.tnc\"\n        #tnc=\"ngModel\" type=\"checkbox\"/>  I read and accept terms and conditions *</span>\n      </div> -->\n     <!-- Sign Up button -->\n        <div class=\"row justify-content-center\">\n          <div class=\"col-8\">\n            <button type=\"submit\" [className]=\"signup.form.valid ? 'btn btn-block btn-success' : 'btn btn-block btn-default'\"  [disabled]=\"!signup.form.valid || userExistCheck || emailExistCheck\" name=\"button\">SIGN UP</button>\n          </div>\n        </div>\n\t\t\t\t</form>\n\t\t\t</div>\n\n      <!-- Individual Form -->\n      <div class=\"business\" *ngIf=\"!business\">\n        <form  (ngSubmit)=\"onSubmit(individual);\" #signup=\"ngForm\" id=\"register\">\n                <div class=\"form-group\">\n                  <div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusFname == 'green' ? true : flase,focusRed:focusFname== 'red' ? true : flase,isDisabled:isDisabled ? true : flase}\">\n                     <div class=\"input-group-prepend\">\n                       <div class=\"input-group-text grpTxt\">\n                         <i class=\"fa  fa-user\" aria-hidden=\"true\"></i>\n                       </div>\n                     </div>\n                     <input name=\"fname\"  autocomplete=\"off\"\n                     required placeholder=\"First Name *\"\n                     (focus)=\"focusFunction(fname.pristine,fname.valid,'focus','focusFname')\"\n                     (focusout)=\"focusFunction(fname.pristine,fname.valid,'outfocus','focusFname')\"\n                     [(ngModel)]=\"individual.ownerName\" #fname=\"ngModel\"/>\n                   </div>\n                    <div class=\"errMsg\" *ngIf=\"!individual.fName\" [hidden]=\"fname.pristine || fname.valid\">\n                      <span>First Name is required</span>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group inputBx\">\n                     <div class=\"input-group-prepend\">\n                       <div class=\"input-group-text grpTxt\">\n                         <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                       </div>\n                     </div>\n                     <input  autocomplete=\"off\"\n                   placeholder=\"Last Name\"\n                     [(ngModel)]=\"individual.lastName\" name=\"ownername\"\n                     #ownername=\"ngModel\" />\n                   </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusMobile == 'green' ? true : flase,focusRed:focusMobile== 'red' ? true : flase,isDisabled:isDisabled ? true : flase}\">\n                     <div class=\"input-group-prepend\">\n                       <div class=\"input-group-text grpTxt\">\n                         <i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n                       </div>\n                     </div>\n                     <input name=\"mobile\"  autocomplete=\"off\"\n                      required placeholder=\"Mobile Number *\" autocomplete=\"off\"\n                      (focus)=\"focusFunction(mobile.pristine,mobile.valid,'focus','focusMobile');mobileValidCheck = false\"\n                      (focusout)=\"focusFunction(mobile.pristine,mobile.valid,'outfocus','focusMobile');mobileValidCheck = true\"\n                      (keyup)=\"doesUserExist(individual);\"\n                      pattern=\"[0-9]{10}\" maxlength=\"10\"\n                      [(ngModel)]=\"individual.mobile\"\n                      #mobile=\"ngModel\"/>\n                   </div>\n                    <div class=\"errMsg\" *ngIf=\"!individual.mobile && !userExistCheck\" [hidden]=\"mobile.pristine\">\n                      <span>Mobile number is required</span>\n                    </div>\n                    <div class=\"errMsg\" *ngIf=\"individual.mobile && mobileValidCheck\" [hidden]=\"mobile.valid\">\n                      <span>Please provide valid mobile number</span>\n                    </div>\n                    <div class=\"errMsg\" *ngIf=\"mobilecheck\">\n                      <span>Mobile number already exist</span>\n                    </div>\n                    <div class=\"errMsg\" *ngIf=\"individual.mobile && userExistCheck\">\n                      <strong>{{userExistCheck}}</strong>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusEmail == 'green' ? true : flase,focusRed:focusEmail== 'red' ? true : flase,isDisabled:isDisabled ? true : flase}\">\n                     <div class=\"input-group-prepend\">\n                       <div class=\"input-group-text grpTxt\">\n                         <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                       </div>\n                     </div>\n                     <input type=\"email\" name=\"email\"  autocomplete=\"off\"\n                     required placeholder=\"Email Address *\" autocomplete=\"off\"\n                     pattern=\"^[\\w\\.]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$\"\n                     (focus)=\"focusFunction(email.pristine,email.valid,'focus','focusEmail');emailValidCheck = false\"\n                     (focusout)=\"focusFunction(email.pristine,email.valid,'outfocus','focusEmail');emailValidCheck = true\"\n                     (keyup)=\"doesUserExist(individual)\"\n                     [(ngModel)]=\"individual.email\" #email=\"ngModel\"/>\n                   </div>\n                    <div class=\"errMsg\" *ngIf=\"!individual.email && !emailExistCheck\" [hidden]=\"email.pristine\">\n                      <span>Email id is required</span>\n                    </div>\n                    <div class=\"errMsg\" *ngIf=\"individual.email && emailValidCheck\" [hidden]=\"email.valid\">\n                      <span>Please provide valid email id</span>\n                    </div>\n                    <div class=\"errMsg\" *ngIf=\"individual.email && emailExistCheck\">\n                      <strong>{{emailExistCheck}}</strong>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusPassword == 'green' ? true : flase,focusRed:focusPassword== 'red' ? true : flase,isDisabled:isDisabled ? true : flase}\">\n                     <div class=\"input-group-prepend\">\n                       <div class=\"input-group-text grpTxt\">\n                        <i class=\"fa fa-key\"></i>\n                       </div>\n                     </div>\n                     <input type=\"password\" name=\"password\"  autocomplete=\"off\"\n                     matTooltipPosition=\"right\" matTooltipClass=\"tooltipCss\"\n                    matTooltip=\"Requires minimum 6 characters,at least 1 Uppercase, 1 Number and 1 of these special characters(!@#$%)\"                     required placeholder=\"Password *\" autocomplete=\"off\"\n                     pattern=\"^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%]).{6,15}$\" maxlength=\"15\"\n                     (focus)=\"focusFunction(password.pristine,password.valid,'focus','focusPassword');pswdValidCheck= false\"\n                     (focusout)=\"focusFunction(password.pristine,password.valid,'outfocus','focusPassword');pswdValidCheck= true\"\n                     [(ngModel)]=\"individual.password\"\n                     #password=\"ngModel\"/>\n                   </div>\n                   <div class=\"errMsg\" *ngIf=\"!individual.password\" [hidden]=\"password.pristine\">\n                     <span>Password is required </span>\n                   </div>\n                   <div class=\"errMsg\" *ngIf=\"individual.password && pswdValidCheck\" [hidden]=\"password.valid\">\n                     <span>Password requirment does not match</span>\n                   </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group inputBx\" [ngClass]= \"{focusGreen:focusCnfPassword == 'green' ? true : flase,focusRed:focusCnfPassword== 'red' ? true : flase,isDisabled:isDisabled ? true : flase}\">\n                     <div class=\"input-group-prepend\">\n                       <div class=\"input-group-text grpTxt\">\n                        <i class=\"fa fa-key\"></i>\n                       </div>\n                     </div>\n                     <input type=\"password\" name=\"passwordCnf\"  autocomplete=\"off\"\n                     matTooltipPosition=\"right\" matTooltipClass=\"tooltipCss\"\n                      matTooltip=\"Requires minimum 6 characters,at least 1 Uppercase, 1 Number and 1 of these special characters(!@#$%)\"                     pattern=\"^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%]).{6,15}$\"\n                     (focus)=\"focusFunction(passwordCnf.pristine,passwordCnf.valid,'focus','focusCnfPassword');pswdCnfValidCheck =false\"\n                     (focusout)=\"focusFunction(passwordCnf.pristine,passwordCnf.valid,'outfocus','focusCnfPassword');pswdCnfValidCheck =true\"\n                      required placeholder=\"Confirm Password *\" autocomplete=\"off\"\n                      [(ngModel)]=\"individual.passwordCnf\" #passwordCnf=\"ngModel\"/>\n                   </div>\n                   <div class=\"errMsg\" *ngIf=\"!individual.passwordCnf\" [hidden]=\"passwordCnf.pristine\">\n                     <span>Password (Confirm) is required</span>\n                   </div>\n                   <div class=\"errMsg\" *ngIf=\"individual.passwordCnf != individual.password && pswdCnfValidCheck\" [hidden]=\"!individual.passwordCnf || passwordCnf.valid\">\n                     <span> Passwords did not match.</span>\n                   </div>\n                </div>\n      <!-- Terms and conditions -->\n      <!-- <div class=\"form-group\">\n        <span class=\"input-group-append\">\n        <input type=\"checkbox\" class=\"tNc input-group\" required name=\"tnc\"\n          [(ngModel)]=\"individual.tnc\" #tnc=\"ngModel\"/> I read and accept terms and conditions * </span>\n      </div> -->\n     <!-- Sign Up button -->\n        <div class=\"row justify-content-center\">\n          <div class=\"col-8\">\n            <button type=\"submit\" [className]=\"signup.form.valid ? 'btn btn-block btn-success' : 'btn btn-block btn-default'\"  [disabled]=\"!signup.form.valid || userExistCheck || emailExistCheck\" name=\"button\">SIGN UP</button>\n          </div>\n        </div>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng5_toastr_ng5_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_demoService, router, toastr) {
        this._demoService = _demoService;
        this.router = router;
        this.toastr = toastr;
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.positionOptions[0]);
        this.categoryInfo = [{
                name: 'Clothing',
                id: '1'
            },
            {
                name: 'Furniture',
                id: '2'
            },
            {
                name: 'Fashion Jewellery',
                id: '3'
            },
            {
                name: 'Valves',
                id: '4'
            },
            {
                name: 'Computer Hardware',
                id: '5'
            },
        ];
        this.registerInfo = [{
                name: 'PanCard',
                id: '1'
            },
            {
                name: 'Aadhar',
                id: '2'
            },
            {
                name: 'TIN',
                id: '3'
            }
        ];
        this.submitted = false;
        this.showAddr = false;
        this.registrationFailed = null;
        this.formSubmitName = 'Register';
        this.formTitle = 'Registration Form';
        this.showAddrMsg = false;
        this.pattern_pinCode = /^\d{3,7}$/;
        this.business = true;
        this.model = {
            "role": "business",
            "registrationId": '',
            "ownerName": "",
            "mobile": "",
            "password": "",
            "email": "",
            "businessDetails": [
                {
                    "companyName": "",
                    "businessAddress": "",
                    "pinCode": "",
                    "city": "",
                    "state": "",
                    "country": "",
                    "website": "",
                    "category": "",
                    "regProof": "",
                    "reg": "",
                    "businessDetailId": ''
                }
            ]
        };
        this.individual = { "role": "individual", "ownerName": "", "lastName": "", "mobile": "", "password": "", "email": "", };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.selectFile = function (e) {
        this.filedata = e.target.files[0];
        console.log(e);
        console.log(this.filedata);
        var type = this.filedata.name.split(".");
        console.log(type[type.length - 1]);
        if (type.length > 0 && type[type.length - 1] != undefined) {
            var docType = type[type.length - 1];
            if (docType == 'jpeg' || docType == 'JPEG' || docType == 'png' || docType == 'PNG') {
                console.log('file saved');
            }
            else {
                this.filedata1 = "";
            }
        }
        else {
            this.filedata1 = "";
        }
    };
    RegisterComponent.prototype.onSubmit = function (dataJson) {
        this.getLocation();
        this.mobileOTP = dataJson.mobile;
        this._demoService.changeMobile(this.mobileOTP);
        this.sendOtp(this.mobileOTP);
        this._demoService.changeRegData(dataJson);
        // this._demoService.registerUserIndividual
        // (dataJson).subscribe(
        //     data => {
        //       console.log(data)
        //           if (data!= null && data[0] == 'success') {
        //             return true;
        //           }else{
        //             this.toastr.error("Registration failed. Could not save the details", 'Error',{toastLife: '5000'});
        //           }
        //     },
        //     error => {
        //         console.error("Error saving data!");
        //         this.registrationFailed = 'Registration failed';
        //         this.toastr.error('Registration failed', 'Error',{toastLife: '5000'});
        //         return Observable.throw(error);
        //     }
        // );
    };
    RegisterComponent.prototype.onSubmitBu = function (dataJson) {
        var _this = this;
        this.getLocation();
        this.mobileOTP = dataJson.mobile;
        this._demoService.changeMobile(this.mobileOTP);
        var fd = new FormData();
        fd.append("file", this.filedata);
        fd.append("businessDetails", dataJson);
        this._demoService.registerUser(fd).subscribe(function (data) {
            console.log(data);
            if (data != null && data[0] == 'success') {
                _this.sendOtp(_this.mobileOTP);
                return true;
            }
            else {
                _this.toastr.error("Registration failed. Could not save the details", 'Error', { toastLife: '5000' });
            }
        }, function (error) {
            console.error("Error saving data!");
            _this.registrationFailed = 'Registration failed';
            _this.toastr.error('Registration failed', 'Error', { toastLife: '5000' });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    RegisterComponent.prototype.sendOtp = function (mobileNum) {
        var _this = this;
        this.router.navigate(['/', 'otpVerification']);
        this._demoService.sendOtp(mobileNum).subscribe(function (data) {
            _this._demoService.changeMessage(data + 'Regi');
        }, function (error) {
        });
    };
    RegisterComponent.prototype.doesUserExist = function (obj) {
        var _this = this;
        this.userExistCheck = "";
        this.emailExistCheck = "";
        console.log(obj);
        this._demoService.doesUserExist(obj).subscribe(function (data) {
            var res = data;
            console.log(res);
            if (res != undefined && res[0] == 'success') {
                // console.log(data)
                _this.userExistCheck = "";
            }
            else if (res != undefined && res[0] == "Email already exist") {
                _this.emailExistCheck = res[0];
                //this.model.email = "";
                //this.individual.email = "";
            }
            else if (res != undefined && res[0] == "Mobile Number already exist") {
                //this.model.mobile = "";
                //this.individual.email = "";
                _this.userExistCheck = res[0];
            }
            else if (res != undefined && res[0] == "Mobile Number and Email already exist") {
                //this.model.mobile = "";
                // this.individual.email = "";
                _this.userExistCheck = "Mobile Number already exist";
                _this.emailExistCheck = "Email already exist";
            }
        }, function (error) {
        });
    };
    RegisterComponent.prototype.addressDetails = function (data) {
        var _this = this;
        var JsonData = { details: data };
        this._demoService.getLocationDetails(JsonData).subscribe(function (data) {
            _this.locDeatils(data);
            return true;
        }, function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    RegisterComponent.prototype.locDeatils = function (data) {
        console.log(data);
        this.model.businessDetails[0].country = this.model.businessDetails[0].city = this.model.businessDetails[0].state = "";
        if (data && data.results.length > 0 && data.results[0].formatted_address != undefined && data.status != "ZERO_RESULTS") {
            var addrDataArr = data.results[0].formatted_address.split(',');
            this.model.businessDetails[0].country = addrDataArr[addrDataArr.length - 1].trim();
            this.model.businessDetails[0].state = addrDataArr[addrDataArr.length - 2].trim();
            this.model.businessDetails[0].city = addrDataArr[addrDataArr.length - 3].trim();
            this.showAddr = true;
            this.showAddrMsg = false;
        }
        else {
            this.showAddrMsg = true;
            this.showAddr = true;
        }
    };
    RegisterComponent.prototype.idProofValidate = function (proof, id) {
        console.log(proof + id);
        this.registerInfo.forEach(function (val) {
            if (val.id == proof)
                proof = val.name;
        });
        switch (proof) {
            case "PanCard":
                console.log(!/^([A-Za-z]){5}([0-9]){4}([A-Za-z]){1}$/.test(id));
                if (!/^([A-Za-z]){5}([0-9]){4}([A-Za-z]){1}$/.test(id)) {
                    this.model.businessDetails[0].regProof = "";
                    this.idProofErrMsg = "Please enter valid PanCard number! Ex: AFCDE1234K";
                    this.maxLn = 10;
                }
                break;
            case "Aadhar":
                if (!/^\d{12}$/.test(id)) {
                    this.model.businessDetails[0].regProof = "";
                    this.idProofErrMsg = "Please enter valid Aadhar number! Should contain 12 digits";
                    this.maxLn = 12;
                }
                break;
            case "TIN":
                if (!/^\d{11}$/.test(id)) {
                    this.model.businessDetails[0].regProof = "";
                    this.idProofErrMsg = "Please enter valid TIN number! Should contain 11 digits";
                    this.maxLn = 11;
                }
        }
    };
    RegisterComponent.prototype.regForm = function (value) {
        this.business = value;
        this.isDisabled = true;
        document.forms['register'].reset();
    };
    RegisterComponent.prototype.focusFunction = function (pristine, valid, event, type) {
        this.isDisabled = false;
        if (event == 'focus') {
            this[type] = 'green';
            //this.emailExistCheck="";
            //this.userExistCheck="";
        }
        else if (!pristine && !valid) {
            this[type] = 'red';
        }
        if (pristine && (event == 'outfocus')) {
            this[type] = "";
        }
    };
    RegisterComponent.prototype.getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    RegisterComponent.prototype.showPosition = function (position) {
        alert("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_5_ng5_toastr_ng5_toastr__["ToastsManager"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/rewards/rewards.component.css":
/***/ (function(module, exports) {

module.exports = ".rewardAmount{\n  width: 50px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 24px;\n  margin: 0px;\n}\n\n.switch input {display:none;}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  -webkit-box-shadow: 0 0 1px #2196F3;\n          box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(16px);\n  transform: translateX(16px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.listcss{\n    width: 254px;\n    text-align: center;\n    font-size: 1.5rem;\n    border-radius: 50px;\n    background-color: #E9ECEF;\n}\n"

/***/ }),

/***/ "./src/app/rewards/rewards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2> My BusinessPlan </h2>\n  </div>\n</div>\n<div class=\"row justify-content-center\">\n  <ul class=\"nav nav-tabs cursr\">\n  <li class=\"nav-item\">\n    <span class=\"nav-link listcss active\" id=\"nav-home-tab\" data-toggle=\"tab\" routerLink=\"/userData/businessPlan\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Rewards</span>\n  </li>\n  <li class=\"nav-item\">\n    <span class=\"nav-link listcss \" id=\"nav-profile-tab\" data-toggle=\"tab\" routerLink=\"/userData/discounts\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Discounts</span>\n  </li>\n  <!-- <li class=\"nav-item \">\n    <span class=\"nav-link listcss\" id=\"nav-contact-tab\" data-toggle=\"tab\"routerLink=\"/userData/invoiceTemplate\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Invoice</span>\n  </li> -->\n</ul>\n</div>\n  <div class=\"row cstyle pt-2\">\n  <div class=\"col-4\"></div>\n    <div class=\"col-3\">\n      <h4>My Reward System</h4>\n    </div>\n    <div class=\"col-2\">\n      <label class=\"switch\">\n        <input type=\"checkbox\" [(ngModel)]='rewards.enable'>\n        <span class=\"slider round\"></span>\n      </label>\n    </div>\n    <div class=\"col\"></div>\n  </div>\n\n  <div class=\"row cstyle pt-2\">\n      <div class=\"col\"></div>\n      <div class=\"panel panel-info col-md-12\">\n           <div class=\"panel-body\">\n             <div class=\"\">\n             <dl>\n                <dt class=\"\"> <h5>1.Rewards Points Value</h5> </dt>\n                <dd>\n                  <span>\n                    Rewards effective amount-<input class=\"rewardAmount\" [(ngModel)]='rewards.effectiveAmount' />\n                    cash value of <input class=\"rewardAmount\" [(ngModel)]='rewards.cashValue' /> rupees = <b>1 Reward</b>\n                  </span>\n                  <label class=\"switch\">\n                     <input type=\"checkbox\" [(ngModel)]='rewards.rewardPointEnable'>\n                     <span class=\"slider round\"></span>\n                   </label>\n                  </dd>\n                  <br>\n                  <dt>\n                    Start Date: <input type=\"date\"  [(ngModel)]='rewards.rewardStartDate'/>\n                    End Date:  <input type=\"date\"  [(ngModel)]='rewards.rewardEndDate'/>\n                  </dt>\n\n              </dl>\n              </div>\n\n              <hr>\n\n              <div class=\"\">\n              <dl>\n                 <dt> <h5>2.Sign Up Bonus Reward Points</h5> </dt>\n                 <dd>\n                   <span>\n                    New customer welcome points <input class=\"rewardAmount\" [(ngModel)]='rewards.bonusPoints' />\n                    </span>\n                   </dd>\n                   <br>\n                   <dt>\n                     Start Date: <input type=\"date\"  [(ngModel)]='rewards.bonusStartDate'/>\n                     End Date:  <input type=\"date\"  [(ngModel)]='rewards.bonusEndDate'/>\n                     <label class=\"switch\">\n                        <input type=\"checkbox\"  [(ngModel)]='rewards.bonusPointEnale'>\n                        <span class=\"slider round\"></span>\n                      </label>\n                   </dt>\n               </dl>\n             </div>\n           </div>\n      <button class=\"btn btn-success btn-block fntcss\"type=\"button\" (click)='saveReward(rewards)' name=\"button\">Save</button>\n      </div>\n      <div class=\"col\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/rewards/rewards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__billing_service__ = __webpack_require__("./src/app/billing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RewardsComponent = /** @class */ (function () {
    function RewardsComponent(_billingService, toastr, dataService) {
        this._billingService = _billingService;
        this.toastr = toastr;
        this.dataService = dataService;
        this.rewards = {
            enable: false, rewardPointEnable: false, bonusPointEnale: false,
            effectiveAmount: '', cashValue: '', bonusPoints: '',
            rewardStartDate: '', rewardEndDate: '', bonusStartDate: '', bonusEndDate: ''
        };
    }
    RewardsComponent.prototype.ngOnInit = function () {
        this.getReward(); // function call to fetch the data
        this.dataService.changebuPlanCss("55");
    };
    //on save function call
    RewardsComponent.prototype.saveReward = function (data) {
        this.addingReward(data); // function call to save the data
    };
    // function call to save the data
    RewardsComponent.prototype.addingReward = function (rewardsData) {
        var _this = this;
        //calling addReward method which is inside the billing.service to save the rewards data
        this._billingService.addReward(rewardsData).subscribe(function (data) {
            _this.toastr.success("Saved successfully", 'Success', { toastLife: '3000' });
        }, function (error) {
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '3000' });
        });
    };
    ;
    // function call to get the Reward data
    RewardsComponent.prototype.getReward = function () {
        var _this = this;
        //calling getReward method which is inside the billing.service to fetch the rewards data
        this._billingService.getReward().subscribe(function (data) {
            if (data != null) {
                _this.rewards = data;
            }
        }, function (error) {
        });
    };
    RewardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rewards',
            template: __webpack_require__("./src/app/rewards/rewards.component.html"),
            styles: [__webpack_require__("./src/app/rewards/rewards.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__billing_service__["a" /* BillingService */], __WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]])
    ], RewardsComponent);
    return RewardsComponent;
}());



/***/ }),

/***/ "./src/app/sales-report/sales-report.component.css":
/***/ (function(module, exports) {

module.exports = "\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.ng2-smart-pagination {\n  color: red;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: .650em !important;\n  padding: 0;\n  .ng2-smart-page-item {\n    display: inline;\n    font-size: .650em !important;\n  }\n\n  .page-link-next, .page-link-prev {\n    /* font-size: 20px; */\n  }\n}\n\n:host /deep/ ng2-smart-table table{\n    border-style: inset;\n    border-color: initial;\n    -o-border-image: initial;\n       border-image: initial;\n    border-width: 2px;\n    display: table;\n    border-spacing: 2px;\n    border-color: grey; /* border of the big table*/\n}\n\n/* grid lines */\n\n:host /deep/ ng2-smart-table table > tbody > tr > td {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border: 1px solid grey;\n}\n\n/* headers grid color*/\n\n:host /deep/ ng2-smart-table thead > tr > th  {\n    border: 1px solid grey;\n    width: 50px;\n    /* background-color:#673ab7; */\n}\n\n/*font size*/\n\n:host /deep/ ng2-smart-table {\n    font-size:16px;\n}\n"

/***/ }),

/***/ "./src/app/sales-report/sales-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2>Sales Report</h2>\n  </div>\n</div>\n  <div class=\"row cstyle\">\n    <div class=\"col-md-3 my-3\">\n        <label>Start Date:</label>\n       <input type=\"date\"  [(ngModel)]='startDate'/>\n    </div>\n    <div class=\"col-md-3 my-3\">\n      <label>End Date:</label>\n     <input type=\"date\"  [(ngModel)]='endDate'/></div>\n  </div>\n<div class=\"row cstyle\">\n  <div class=\"col-md-2 listPosition\" >\n    <div class=\"list-group\">\n      <button type=\"button\" class=\"list-group-item list-group-item-action font-weight-bold font-italic\" (click)=\"request('getUserDetails','report')\">Customer List</button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action font-weight-bold font-italic\" (click)=\"request('getTopCustomer','topCustomer')\">Top Customer's\n      </button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action font-weight-bold font-italic\" (click)=\"request('pay_rcv','payable_receivable')\">Payable List</button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action font-weight-bold font-italic\" (click)=\"request('pay_rcv','payable_receivable')\">Receivable List</button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action font-weight-bold font-italic\" (click)=\"request('getInvoice','invoiceData')\">Invoice List</button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action font-weight-bold font-italic\" (click)=\"request('getTickets','tickets')\">Raised Tickets</button>\n    </div>\n  </div>\n  <div class=\"col-md-10\" *ngIf=\"data\">\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\" class=\"table table-bordered\"></ng2-smart-table>\n\n  <!-- <div class=\"\" *ngIf=\"displayedColumns\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div> -->\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sales-report/sales-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SalesReportComponent = /** @class */ (function () {
    function SalesReportComponent(_demoService, toastr) {
        this._demoService = _demoService;
        this.toastr = toastr;
        this.topCustomerRecords = 3;
        this.objData = {
            getUserDetails: {
                userName: { title: 'Name' },
                userMobile: { title: 'Mobile' },
                email: { title: 'Email' },
            },
            getTopCustomer: {
                name: { title: 'Name' },
                userMobile: { title: 'Mobile' },
                bv: { title: 'BV' },
            },
            pay_rcv: {
                invoiceId: { title: 'InvoiceId' },
                userMobile: { title: 'Mobile' },
                total: { title: 'Total' },
            },
            getInvoice: {
                invoice: { title: 'Invoice' },
                mobile: { title: 'Mobile' },
                amount: { title: 'Amount' },
            },
            getTickets: {
                ticketId: { title: 'Id' },
                subject: { title: 'Subject' },
                description: { title: 'Description' },
                createDate: { title: 'Date' },
            }
            //  getUserDetails:['name','userMobile','email'],
            //  getTopCustomer:["name","userMobile","bv"],
            //  payable:["invoice","mobile","amount"],
            //  receivable:["invoice","mobile","amount"],
            //  getInvoice:["invoiceId","userMobile","total"],
            // getTickets:["ticketId","subject","description","createDate"],
        };
        this.settings = {
            actions: {
                add: false,
                edit: false,
                delete: false,
            },
            columns: {}
        };
    }
    SalesReportComponent.prototype.ngOnInit = function () {
        this._demoService.changebuPlanCss("0");
        // this.data = [{userMobile: "8919998956", userName: "d1", email: "d",xx:"rtee"}]
    };
    SalesReportComponent.prototype.ngAfterViewInit = function () {
    };
    SalesReportComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    SalesReportComponent.prototype.request = function (type, val) {
        var _this = this;
        var obj = { value: type, startDate: this.startDate, endDate: this.endDate };
        this.displayedColumns = this.objData[type];
        this.settings.columns = this.objData[type];
        this.report = this.payable_receivable = this.tickets = this.topCustomer = this.invoiceData = "";
        this._demoService.requestReport(obj, type).subscribe(function (data) {
            _this[val] = data;
            _this.data = data;
            console.log(_this.settings);
            console.log(_this.data);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatTableDataSource */](_this[val]);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            // this.toastr.success("",'success',{toastLife: '5000'});
        }, function (error) {
            _this.toastr.error("Could Not fetch Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    }; // end of request
    SalesReportComponent.prototype.rowCheck = function (data, index) {
        if (this.displayedColumns.length > 0) {
            var fieldExist = void 0;
            fieldExist = this.displayedColumns.indexOf(data) >= 0 ? true : false;
            return fieldExist;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatPaginator */])
    ], SalesReportComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatSort */])
    ], SalesReportComponent.prototype, "sort", void 0);
    SalesReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sales-report',
            template: __webpack_require__("./src/app/sales-report/sales-report.component.html"),
            styles: [__webpack_require__("./src/app/sales-report/sales-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr__["ToastsManager"]])
    ], SalesReportComponent);
    return SalesReportComponent;
}());



/***/ }),

/***/ "./src/app/select-invoice/select-invoice.component.css":
/***/ (function(module, exports) {

module.exports = ".inputStyle{\n  width: 100px;\n}\n.fixWidth{\n  width: 50px;\n}\n.thsize{\n  width: 180px;\n}\n.tablecss{\n  font-size: 20px;\n  width: 150px;\n  height: 32px;\n  font-weight: bold;\n}\n.usrInpt{\n  height: 40px;\n}\n.mrglv{\n  margin-left: 34px;\n}\n.indx{\n  width: 25px;\n}\n"

/***/ }),

/***/ "./src/app/select-invoice/select-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row cstyle justify-content-center\">\n   <div class=\"\">\n     <h2>Invoice</h2>\n    </div>\n  </div>\n<div class=\"row cstyle dataBox\" *ngIf='!invoice'>\n  <div class=\"col\"> </div>\n  <div class=\"col-md-5 col-sm-12\">\n    <div class=\"input-group col align-self-center\" style=\"margin-top:50px\" *ngIf='!userEntry'>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]='mobile'  maxlength=\"10\" placeholder=\"Enter Mobile Number\" style=\"height:50px\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-success fntcss\" (click)=\"verifyUser()\" type=\"button\">Submit</button>\n      </div>\n    </div>\n    <form *ngIf='userEntry' #userForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label  class=\"col-form-label\">Name</label>\n        <div class=\"\">\n          <input type=\"text\" required class=\"form-control form-control-sm usrInpt\" name='username'  [(ngModel)]=\"userName\" placeholder=\"Name\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"colFormLabelSm\" class=\"col-form-label\">Email</label>\n        <div class=\"\">\n          <input type=\"email\" required class=\"form-control form-control-sm usrInpt\" name='mail' [(ngModel)]='email' placeholder=\"Email\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"colFormLabelSm\" class=\"col-form-label col-form-label-sm\">Address</label>\n        <div class=\"\">\n          <input type=\"text\" class=\"form-control form-control-sm usrInpt\" name='addr' [(ngModel)]='address'  placeholder=\"Address\">\n        </div>\n      </div>\n      <button class=\"btn btn-success btn-block fntcss\" [disabled]=\"!userForm.form.valid\" type=\"button\" (click)='userDetails(userName,email,address)' name=\"button\">Submit</button>\n    </form>\n  </div>\n  <div class=\"col\"></div>\n</div>\n\n<div class=\"row cstyle dataBox\"   *ngIf='invoice'>\n<!--generated invoice  -->\n<div class=\"invoiceCreation container\" >\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <h6><span>{{userName | uppercase}}</span> | <span>{{mobile}}</span></h6>\n      <h6><span>{{email}}</span> | <span>{{address}}</span></h6>\n    </div>\n    <div class=\"col-sm\" >\n      <img src={{imageUrl()}}  style=\"width:50px;height:50px;border-radius:50px\">\n    </div>\n    <div class=\"col-sm\" >\n      <h6>Total BV={{BV}} | RewardPoints={{rewardPoints}}</h6>\n      <h6>Payables={{totalPayable}} | Receivables={{totalReceivable}}</h6>\n    </div>\n  </div><br>\n  <div class=\"row\">\n    <div class=\" col-md-12\" style=\"overflow:auto;max-height:300px\">\n    <table class=\"table\">\n    <thead class=\"thead-light fntcss\">\n      <tr>\n        <th>#</th>\n        <th>Item Name</th>\n        <th>Quantity</th>\n        <th>Rate</th>\n        <th>Total Amount</th>\n        <th [hidden]='InvGen'>\n          <button type=\"button\"  (click)='addRow(0)' class=\"btn btn-success btn-sm\">\n          <span>+</span>\n          </button>\n      </th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of invoiceList;let i = index; let lastEl = last; let firstEl = first\">\n        <td class=\"indx\">{{i+1}}</td>\n        <td class=\"tablecss\">\n          <select [(ngModel)]='invoiceList[i].item' [disabled]='InvGen' class=\"tablecss\" style=\"width:200px;\">\n              <option *ngFor=\"let item of items\" value={{item}}>\n                  {{item}}\n              </option>\n          </select>\n        </td>\n        <td class=\"tablecss\">\n          <input class=\"tablecss\"  type=\"number\" min=\"0\" (blur)='calcTotal()' [(ngModel)]='invoiceList[i].quantity' [disabled]='InvGen'/>\n        </td>\n        <td class=\"tablecss\">\n          <input class=\"tablecss\"  type=\"number\" min=\"0\" (blur)='calcTotal()' [(ngModel)]='invoiceList[i].rate' [disabled]='InvGen'/>\n        </td>\n        <td class=\"tablecss\">\n          <input class=\"tablecss\" readonly value=\"{{invoiceList[i].rate  * invoiceList[i].quantity | currency:'RS '}}\"  [disabled]='InvGen'>\n        </td>\n        <td *ngIf='!firstEl'  [hidden]='InvGen'>\n          <button type=\"button\"   (click)='deleteRow(i);calcTotal()' class=\"btn btn-danger btn-sm\">\n            <span>-</span>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-md-4 col-sm-6\">\n    <h6><span>Discount </span><input  class=\"fixWidth\"  (blur)='calcTotal()' [(ngModel)]='discounts' [disabled]='InvGen' />%</h6>\n    <h6><span>Rewards </span>  <input   class=\"fixWidth\"  (blur)='calcTotal()' [(ngModel)]='rewards' [disabled]='InvGen' /></h6>\n    <h6><span>Credit  </span> <input  class=\"fixWidth\" (blur)='calcTotal()' [(ngModel)]='credit'   [disabled]='InvGen' style=\"margin-left:16px;width:80px\"/></h6>\n  </div>\n  <div class=\"col-md-4\">\n  </div>\n  <div class=\"col-md-4 col-sm-6\">\n    <h6>SubTotal <span class=\"mrglv\" style=\"margin-left:0px\"> {{subTotal | number}}</span></h6>\n    <h6>GST <span class=\"mrglv\" style=\"margin-left:32px\"> <input class=\"fixWidth\"  (blur)='calcTotal()' [(ngModel)]='gst' [disabled]='InvGen' />%</span></h6>\n    <h6>Total <span class=\"mrglv\" style=\"margin-left:32px\"> {{total | number}}</span></h6>\n    <h6>Paid <span class=\"mrglv\" style=\"margin-left:37px\"> {{total - credit | number}}</span></h6>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col align-self-center\" [hidden]=\"InvGen\">\n    <button type=\"button\" name=\"button\"  class=\"btn btn-block btn-success fntcss\" (click)=\"submitInvoice()\">Submit</button>\n  </div>\n  <div class=\"col align-self-center\" [hidden]=\"!InvGen\">\n    <button type=\"button\" name=\"button\" routerLink=\"/userData/generateInvoice\"  class=\"btn btn-block btn-primary fntcss\">Generate Invoice</button>\n  </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/select-invoice/select-invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectInvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__billing_service__ = __webpack_require__("./src/app/billing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectInvoiceComponent = /** @class */ (function () {
    function SelectInvoiceComponent(_dataService, _billingService, toastr) {
        this._dataService = _dataService;
        this._billingService = _billingService;
        this.toastr = toastr;
        this.credit = 0;
        this.pattern_mobile = /^\d{10}$/;
    }
    SelectInvoiceComponent.prototype.ngOnInit = function () {
        this._dataService.changebuPlanCss("0");
        this.rewards = this.discounts = 0;
        this.invoiceList = [{
                item: '', quantity: '', rate: '', total: ''
            }];
        this.items = ['chair', 'bean', 'desk', 'sofa'];
        this.invoiceData = { name: '', mobile: '', email: '' };
        this.gst = 8;
    };
    SelectInvoiceComponent.prototype.addRow = function () {
        this.invoiceList.push({
            item: '', quantity: '', rate: '', total: ''
        });
    };
    ;
    SelectInvoiceComponent.prototype.deleteRow = function (index) {
        this.invoiceList.splice(index, 1);
    };
    ;
    SelectInvoiceComponent.prototype.calcTotal = function () {
        var _this = this;
        this.total = this.subTotal = 0;
        this.invoiceList.forEach(function (value) {
            if (value.rate != null && value.quantity != null) {
                _this.subTotal += value.rate * value.quantity;
                _this.applyDiscount(_this.discountList, _this.subTotal);
            }
            else {
                _this.subTotal = 0;
            }
        });
        this.total = this.subTotal - this.rewards - (this.subTotal * ((this.discounts) / 100));
        this.total = this.total + (this.total * (this.gst / 100));
    };
    SelectInvoiceComponent.prototype.applyDiscount = function (data, subTotal) {
        var _this = this;
        var dicountTemp = this.discounts;
        this.discounts = 0;
        if (data && data.length > 0) {
            data.forEach(function (val) {
                if ((subTotal <= val.maxAmount && subTotal >= val.minAmount) || subTotal > val.minAmount) {
                    _this.discounts = _this.discounts < val.discount ? val.discount : _this.discounts;
                }
            });
        }
        this.discounts = this.discounts > 0 ? this.discounts : dicountTemp;
    };
    SelectInvoiceComponent.prototype.verifyUser = function () {
        var _this = this;
        this._dataService.changeCustomerMobile(this.mobile);
        if (!this.pattern_mobile.test(this.mobile)) {
            this.toastr.error("Please enter valid mobile number", 'Error', [{ toastLife: '2000' }, { dismiss: 'click' }, { maxShown: '1' }]);
            this.mobile = '';
        }
        else {
            this.toastr.clearAllToasts();
            this._dataService.customerExist(this.mobile).subscribe(function (data) {
                if (data != null && Object.keys(data).length <= 0) {
                    _this.userEntry = true;
                }
                else {
                    _this.invoice = true;
                    _this.userName = data[0].userName;
                    _this.email = data[0].email;
                    _this.address = data[0].address;
                    _this.BV = data[0].businessVolume;
                    _this.rewardPoints = data[0].rewardPoints;
                    _this.discountList = data[0].discounts;
                    _this.totalPayable = data[0].totalPayable;
                    _this.totalReceivable = data[0].totalReceivable;
                }
            }, function (error) {
                _this.toastr.info("Could Not Fetch Data!! Try Again..", 'Error', { toastLife: '5000' });
            });
        }
    };
    SelectInvoiceComponent.prototype.userDetails = function () {
        var _this = this;
        this._dataService.createUser({ userName: this.userName, email: this.email, address: this.address, userMobile: this.mobile }).subscribe(function (data) {
            _this.invoice = true;
            _this.userName = data[0].userName;
            _this.email = data[0].email;
            _this.address = data[0].address;
            _this.BV = data[0].businessVolume;
            _this.rewardPoints = data[0].rewardPoints;
            _this.discountList = data[0].discounts;
            _this.totalPayable = data[0].totalPayable;
            _this.totalReceivable = data[0].totalReceivable;
        }, function (error) {
            _this.toastr.error("Could Not Add Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    SelectInvoiceComponent.prototype.submitInvoice = function () {
        var _this = this;
        var invoice = {
            userName: this.userName, userMobile: this.mobile, total: this.total,
            subTotal: this.subTotal, rewards: this.rewards, discount: this.discounts,
            credit: this.credit, invoiceDetail: this.invoiceList
        };
        this._billingService.addInvoice(invoice).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                console.log(JSON.stringify(data));
                _this.invoiceid = data[0].invId;
                _this.InvGen = true;
                _this._dataService.changeInvoiceData(data);
            }
            else {
                _this.invoice = _this.userEntry = false;
            }
        }, function (error) {
            _this.toastr.error("Could Not Generate!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    SelectInvoiceComponent.prototype.imageUrl = function () {
        if (this.BV < 2000) {
            return "../../assets/images/bronze.jpg";
        }
        else if (this.BV > 2000 && this.BV < 6000) {
            return "../../assets/images/silver.jpg";
        }
        else {
            return "../../assets/images/image1.jpg";
        }
    };
    SelectInvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-invoice',
            template: __webpack_require__("./src/app/select-invoice/select-invoice.component.html"),
            styles: [__webpack_require__("./src/app/select-invoice/select-invoice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__billing_service__["a" /* BillingService */], __WEBPACK_IMPORTED_MODULE_3_ng5_toastr_ng5_toastr__["ToastsManager"]])
    ], SelectInvoiceComponent);
    return SelectInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/select-login-type/select-login-type.component.css":
/***/ (function(module, exports) {

module.exports = "/* #circle {\n\twidth: 100px;\n\theight: 100px;\n\tbackground: red;\n\t-moz-border-radius: 50px;\n\t-webkit-border-radius: 50px;\n\tborder-radius: 50px;\n} */\n#circle {\n  width: 200px;\n\theight: 100px;\n\tbackground: #f8f8;\n}\n.rad{\n  border-radius: 25px;\n}\n"

/***/ }),

/***/ "./src/app/select-login-type/select-login-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row align-items-center\" style=\"margin:50px\">\n  <div class=\"col\" style=\"margin-top:80px\">\n    <button type=\"button\" (click)=\"selectUser('business')\" [routerLink]=\"['/signIn']\" class=\"btn btn-primary btn-lg btn-block rad\"><h1>Business LogIn</h1></button>\n  <hr>\n    <button type=\"button\" disabled (click)=\"selectUser('individual')\" class=\"btn  btn-primary btn-lg btn-block rad\"><h1>Individual LogIn</h1></button>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/select-login-type/select-login-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLoginTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectLoginTypeComponent = /** @class */ (function () {
    function SelectLoginTypeComponent(service, router) {
        this.service = service;
        this.router = router;
        this.view = true;
    }
    SelectLoginTypeComponent.prototype.ngOnInit = function () {
    };
    SelectLoginTypeComponent.prototype.selectUser = function (type) {
        this.service.changeUserType(type);
        this.router.navigate(['/', 'signIn']);
    };
    SelectLoginTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-login-type',
            template: __webpack_require__("./src/app/select-login-type/select-login-type.component.html"),
            styles: [__webpack_require__("./src/app/select-login-type/select-login-type.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SelectLoginTypeComponent);
    return SelectLoginTypeComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/***/ (function(module, exports) {

module.exports = ".logo{\n  text-align: center;\n  margin: 40px 0px 50px 0px;\n}\n.box{\n-webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n        box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\nbackground-color: #ffffff;\npadding: 25px;\n}\n.inputBx{\n  border: solid 1px #e3e3e3;\n  padding: 3px;\n}\n.grpTxt{\n  border: none;\n  background-color: #ffff;\n}\n.errMsg{\n  margin-top: -10px;\n  color: red;\n}\n.reglink{\n  color:#003B46;\n}\n.reglink:hover{\n  cursor: pointer;\n  text-decoration: underline;\n}\ninput:focus{\n    outline: none;\n}\n.focusGreen{\n  border: 1px solid green;\n}\n.focusRed{\n  border: 1px solid red;\n}\ninput{\n  border: none;\n  width: 90%;\n}\n.link{\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n      <div class=\"col-5 box\">\n\t\t\t<div class=\"logo\">\n\t\t\t\t<h2>SMYDATA</h2>\n\t\t\t</div>\n\t\t\t<span class=\"my-2 text-center\" *ngIf=\"loginErr\">\n\t          <strong class=\"text-danger\">Login failed! Invalid mobile/password\n\t          </strong>\n\t        </span>\n\t\t\t<div class=\"\">\n\t\t\t\t<form (ngSubmit)=\"onSubmit();\" #signin=\"ngForm\" class=\"login-form\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group mb-2 mr-sm-2 inputBx\" [ngClass]=\"focusMobile\">\n\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-text grpTxt\">\n\t\t\t\t\t\t\t\t\t\t\t\t <i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t </div>\n                     <input type=\"text\" id=\"mobile\" maxlength=\"10\" placeholder=\"Mobile\"\n                        required (focus)=\"focusFunction(mobile.pristine,mobile.valid,'focus','focusMobile');mobileValidCheck = false\"\n                        autocomplete=\"off\" (focusout)=\"focusFunction(mobile.pristine,mobile.valid,'outfocus','focusMobile');mobileValidCheck = true\"\n\n                        [(ngModel)]=\"model.mobile\" name=\"mobile\"  pattern=\"[0-9]{10}\"\n                        #mobile=\"ngModel\"/>\n\t\t\t\t\t\t\t\t\t </div>\n                    <div class=\"errMsg\" *ngIf=\"!model.mobile\" [hidden]=\"mobile.pristine\">\n                      <span>Mobile number is required </span>\n                    </div>\n                    <div class=\"errMsg\" *ngIf=\"model.mobile && mobileValidCheck\" [hidden]=\"mobile.valid \">\n                      <span>Please provide valid mobile number</span>\n                    </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group mb-2 mr-sm-2 inputBx\" [ngClass]=\"focusPassword\">\n\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-text grpTxt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-key\"></i>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t </div>\n                     <input type=\"password\" id=\"password\"\n                     (focus)=\"focusFunction(password.pristine,password.valid,'focus','focusPassword')\" (focusout)=\"focusFunction(password.pristine,password.valid,'outfocus','focusPassword')\"\n                      required autocomplete=\"off\" placeholder=\"Password\"\n                      [(ngModel)]=\"model.password\" name=\"password\"\n                      #password=\"ngModel\"/>\n\t\t\t\t\t\t\t\t\t </div>\n                   <div class=\"errMsg\" [hidden]=\"password.pristine || password.valid\">\n                     <span>Password is required </span>\n                   </div>\n\t\t\t\t\t\t\t\t</div>\n                <div class=\"row justify-content-center\">\n                  <div class=\"col-8\">\n                    <button type=\"submit\" [className]=\"signin.form.valid ? 'btn btn-block btn-success' : 'btn btn-block btn-default'\"  [disabled]=\"!signin.form.valid\" name=\"button\">LOG IN</button>\n                  </div>\n                </div>\n\t\t\t\t</form>\n\t\t\t</div>\n    </div>\n  </div>\n  <div class=\"row justify-content-center mt-3\">\n    <div class=\"col-4\">\n      <div class=\"my-2\">\n      <span>Don't have an account?\n        <span routerLink=\"/signUp\" class=\"reglink\">Register here</span>\n      </span>\n    </div>\n    <div class=\"\">\n      <span>Forgot your password?\n        <span data-toggle=\"modal\" (click)=\"frgtPswd();errMsg = mobileNumVal =''\" data-target=\"#myModal\" class=\"reglink\">Reset password</span>\n      </span>\n    </div>\n    </div>\n  </div>\n</div>\n\n<!-- Reset Password -->\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\" >\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n\t\t\t\t<br><br>\n        <div class=\"modal-header\">\n\t\t\t\t\t  <h2 class=\"modal-title\">Reset Password</h2>\n          <button type=\"button\" class=\"close\" id=\"modalWindow\" data-dismiss=\"modal\" #closeAddExpenseModal >&times;</button>\n        </div>\n        <span class=\"my-2 text-center\" *ngIf=\"errMsg\">\n          <strong class=\"text-danger\">Mobile Number does not exist.&nbsp;\n          <span data-dismiss=\"modal\" routerLink=\"/signUp\" class=\"text-primary link\">click here</span>&nbsp;to register\n          </strong>\n        </span>\n        <div class=\"modal-body\">\n\t\t\t\t\t<form (ngSubmit)=\"sendOtp();\" #otp=\"ngForm\" id=\"otpForm\" class=\"otp-form\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"mobileNum\">Enter Mobile Number:</label>\n            <div class=\"form-group\">\n              <div class=\"input-group mb-2 mr-sm-2 inputBx\" [ngClass]=\"focusMobile\">\n                 <div class=\"input-group-prepend\">\n                   <div class=\"input-group-text grpTxt\">\n                     <i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n                   </div>\n                 </div>\n                 <input type=\"text\"  maxlength=\"10\" placeholder=\"Mobile\"\n                    required\n                    autocomplete=\"off\"\n                    required  pattern=\"[0-9]{10}\" maxlength=\"10\"\n \t\t\t\t\t\t\t\t\t (keyup)=\"doesUserExist(mobileNumVal,mobileNum.valid);errMsg=''\" (focus)=\"mobileValidCheckOtp = false\" (blur)=\"mobileValidCheckOtp=true\"\n \t\t               [(ngModel)]=\"mobileNumVal\" name=\"mobileNum\" #mobileNum=ngModel/>\n               </div>\n               <div class=\"errMsg\" *ngIf=\"!mobileNumVal\" [hidden]=\"mobileNum.pristine\">\n                 <span>Mobile number is required</span>\n               </div>\n               <div class=\"errMsg\" *ngIf=\"mobileNumVal && mobileValidCheckOtp\" [hidden]=\"mobileNum.valid\">\n                 <span>Please provide valid mobile number</span>\n               </div>\n            </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button  type=\"submit\" class=\"btn btn-primary btn-md\" [disabled]=\"!otp.form.valid || errMsg\">Send OTP</button>\n\t\t\t\t</form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng5_toastr_ng5_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = /** @class */ (function () {
    function SignInComponent(_demoService, router, cookieService, toastr) {
        this._demoService = _demoService;
        this.router = router;
        this.cookieService = cookieService;
        this.toastr = toastr;
        this.cookieValue = 'UNKNOWN';
        this.model = { mobile: '', password: '' };
        this.submitted = false;
        this.rememberMe = false;
        this.loginFail = false;
        this.data = [];
        this.storage = [];
        this.view = true;
        this.validMobile = false;
        this.pattern_mobile = /^\d{10}$/;
    }
    SignInComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._demoService.userTypeVal.subscribe(function (userType) { return _this.userType = userType; });
        this._demoService.cast.subscribe(function (messageSource) { return _this.messageSource = messageSource; });
        this.allCookies = this.cookieService.getAll();
        if (this.allCookies && this.allCookies.rememberMeVal == 'TRUE') {
            this.model.mobile = this.allCookies.mobile;
            this.model.password = this.allCookies.pswd;
            this.rememberMe = true;
        }
        ;
    };
    ;
    SignInComponent.prototype.onSubmit = function () {
        this.logInUser(this.model, this.userType);
        if (this.rememberMe) {
            this.cookieService.set('mobile', this.model.mobile);
            this.cookieService.set('pswd', this.model.password);
            this.cookieService.set('rememberMeVal', this.rememberMe ? 'TRUE' : 'FALSE');
        }
        else {
            this.cookieService.deleteAll();
        }
        ;
    };
    ;
    SignInComponent.prototype.sendOtp = function () {
        var _this = this;
        this.router.navigate(['/', 'otpVerification']);
        document.getElementById('modalWindow').click();
        this.cookieService.set('resetPwdMobile', this.mobileNumVal);
        this._demoService.sendOtp(this.mobileNumVal).subscribe(function (data) {
            _this._demoService.changeMessage(data);
        }, function (error) {
            _this.cookieService.delete('resetPwdMobile');
        });
    };
    SignInComponent.prototype.logInUser = function (data, type) {
        var _this = this;
        var JsonData = data;
        this.loginErr = false;
        this._demoService.logInUser(JsonData, type).subscribe(function (data) {
            console.log(data);
            if (data[0] == "true") {
                if (data[1] == "business") {
                    _this.showProfile = true;
                    _this.submitted = true;
                    _this._demoService.changeProfile('true');
                    _this.router.navigate(['/', 'userData']);
                }
                else if (data[1] == 'individual') {
                    _this.showProfile = true;
                    _this.submitted = true;
                    _this._demoService.changeProfile('true');
                    _this._demoService.changeindProfile('true');
                    _this.router.navigate(['/', 'individualDetails']);
                }
                else {
                    _this.loginErr = true;
                    //this.toastr.error('Could not login please try again later', 'Error',{toastLife: '5000'});
                }
            }
            else {
                _this.loginErr = true;
                //this.toastr.error('Login failed! Invalid mobile/password', 'Error',{toastLife: '5000'});
            }
        }, function (error) {
            _this.loginErr = true;
            //this.toastr.error('Login failed! Invalid mobile/password', 'Error',{toastLife: '5000'});
        });
    };
    SignInComponent.prototype.doesUserExist = function (val, valid) {
        var _this = this;
        if (val.length == 10 && valid) {
            this._demoService.doesUserExist({ mobile: val }).subscribe(function (data) {
                var res = data;
                console.log(res);
                if (res != undefined && res[0] == 'success') {
                    _this.errMsg = "Mobile Number does not exist";
                }
                else if (res != undefined && res[0] == "Mobile Number already exist") {
                    _this.errMsg = "";
                }
            }, function (error) {
            });
        }
    };
    SignInComponent.prototype.frgtPswd = function () {
        document.forms['otpForm'].reset();
    };
    SignInComponent.prototype.focusFunction = function (pristine, valid, val, type) {
        if (val == 'focus') {
            this[type] = "focusGreen";
        }
        else if (!pristine && !valid) {
            this[type] = "focusRed";
        }
        if (pristine && (val == 'outfocus')) {
            this[type] = "";
        }
    };
    SignInComponent.prototype.validation = function () {
        if (!this.pattern_mobile.test(this.model.mobile))
            this.model.mobile = '';
    };
    SignInComponent.prototype.errMsgCheck = function (valid) {
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__("./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4_ng5_toastr_ng5_toastr__["ToastsManager"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".signUp{\n  /* width: auto; */\n  /* background: linear-gradient(green, yellow, green); */\n  background-color: #ffffff;\n  border-radius: 10px;\n  border: 1px solid;\n   box-shadow: 5px 10px #888888;\n\t-webkit-box-shadow: 0 10px 6px -6px #777;\n\t box-shadow: 0 10px 6px -6px #777;\n }\n .signup-form{\n   margin: 20px;\n }\n .flexDiv{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n .flex-item{\n  width: 25%\n}\n .flex-item-middle{\n  margin: 0 5px;\n}\n .dropdown-flex{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n .dropdown-category{\n  width: 45%;\n}\n .dropdown-register{\n  margin-left: 10%;\n  width: 45%;\n}\n .flex-item-getAdd{\n  /* margin-top: 25px; */\n  width:30%\n}\n .flex-item-buAdd{\n  width: 70%\n}\n .locationBtn{\n  /* margin-top: 31px; */\n}\n .listBu{\n  cursor: pointer;\n  text-transform: capitalize;\n}\n .listBu:hover{\n  background-color: cornflowerblue;\n  text-decoration: underline;\n}\n .listItms{\n  text-align: center;\n  width: 50%\n}\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"\" *ngIf ='!showbusinessList &&   this.businessEditableForm'>\n  <button type=\"button\"  class=\"btn btn-primary\" name=\"button\" (click)=\"showbusinessList = true\">Show List</button>\n</div>\n<div  *ngIf ='showbusinessList' class=\"listItms\">\n  <h2 class=\"text-center\">Business List</h2>\n<ul class=\"list-group text-center\" >\n  <li class=\"list-group-item listBu\" *ngFor=\"let item of businessList.businessDetails; let indexVal=index \" (click)='viewBusinessDetails(indexVal)'>{{item.companyName}}</li>\n</ul>\n</div> -->\n\n<div class=\"row justify-content-center\">\n<div class=\"signUp col-6\" *ngIf ='!showbusinessList' style=\"margin-top:35px\">\n   <div [hidden]=\"submitted\">\n      <h1>{{formTitle}}</h1>\n      <form (ngSubmit)=\"onSubmit(); signup.reset()\" #signup=\"ngForm\" class=\"signup-form\">\n        <div *ngIf='registrationFailed' class=\"alert alert-danger\" (click)=\"registrationFailed = null\">\n  \t\t\t\t<strong>{{registrationFailed}}</strong>\n  \t\t\t</div>\n      <div class=\"form-group\">\n         <!-- <label for=\"name\">Company Name / Business Name</label> -->\n         <input type=\"text\" class=\"form-control\" id=\"name\"\n         required placeholder=\"Company Name / Business Name*\"\n         [(ngModel)]=\"model.businessDetails[0].companyName\" name=\"name\"\n         #name=\"ngModel\"/>\n         <div [hidden]=\"name.valid || name.pristine\"\n            class=\"alert alert-danger\">\n            Company Name / Business Name is required\n         </div>\n      </div>\n      <div class=\"form-group\" *ngIf='!addNew'>\n         <!-- <label for=\"name\">Owner Name / Manager Name</label> -->\n         <input type=\"text\" class=\"form-control\" id=\"ownername\"\n         required placeholder=\"Owner Name / Manager Name*\"\n         [(ngModel)]=\"model.ownerName\" name=\"ownername\"\n         #ownername=\"ngModel\" />\n         <div [hidden]=\"ownername.valid || ownername.pristine\"\n            class=\"alert alert-danger\">\n            Owner Name / Manager Name is required\n         </div>\n      </div>\n      <!-- <div class=\"form-group\" *ngIf='!addNew'>\n         <label for=\"name\">Mobile Number</label>\n         <input type=\"text\" class=\"form-control\" maxlength=\"10\"\n         required [readonly]=\"businessEditableForm\" placeholder=\"\"\n         (blur)=\"doesUserExist(mobile.value);validation('pattern_mobile',mobile.value)\"\n         [(ngModel)]=\"model.mobile\" name=\"mobile\"\n         #mobile=\"ngModel\"/>\n         <div [hidden]=\"mobile.valid || mobile.pristine\"\n            class=\"alert alert-danger\">\n            <span *ngIf='!mobilecheck'>Enter valid mobile number! Should contain 10 digits.</span>\n                  <span *ngIf='mobilecheck'>Mobile Number already exist</span>\n         </div>\n      </div> -->\n      <!-- <div class=\"form-group\" *ngIf='!addNew'>\n         <label for=\"name\">Password</label>\n         <input type=\"password\" class=\"form-control\" id=\"password\" [readonly]=\"businessEditableForm\"\n         required   (blur)=\"validation('pattern_password',password.value)\"\n         [(ngModel)]=\"model.password\" name=\"password\" placeholder=\"Min 6 Characters. Must contain captial letter & digit\"\n         #password=\"ngModel\"/>\n         <div [hidden]=\"password.valid || password.pristine\"\n            class=\"alert alert-danger\">\n          Enter valid password ! Min 6 characters.Password must contain at least one capital alphabet and numeric digit.\n         </div>\n      </div> -->\n      <!-- <div class=\"form-group\" *ngIf='!addNew'>\n         <label for=\"alterEgo\">Email Address</label>\n         <input type=\"text\" class=\"form-control\" id=\"email\" [readonly]=\"businessEditableForm\"\n         (blur)=\"validation('pattern_email',email.value)\" required placeholder=\"Henry@gmail.com\"\n         [(ngModel)]=\"model.email\" #email=\"ngModel\" name=\"alterEgo\">\n         <div [hidden]=\"email.valid || email.pristine\"\n            class=\"alert alert-danger\">\n            Email you have entered is not correct\n         </div>\n      </div> -->\n      <div class=\"form-group\">\n         <!-- <label for=\"name\">Business Address</label> -->\n         <input type=\"text\" class=\"form-control\" id=\"businessAddr\"\n         required placeholder=\"Business Address*\"\n         [(ngModel)]=\"model.businessDetails[0].businessAddress\" name=\"businessAddr\"\n         #businessAddr=\"ngModel\"/>\n         <div [hidden]=\"businessAddr.valid || businessAddr.pristine\"\n            class=\"alert alert-danger\">\n            Business Address is required\n         </div>\n      </div>\n      <div  class=\"flexDiv\">\n      <div class=\"form-group flex-item-buAdd\">\n         <!-- <label for=\"name\">PIN Code</label> -->\n         <input type=\"text\" class=\"form-control\" id=\"pin\" maxlength=\"6\"\n         required  (blur)=\"validation('pattern_pinCode',pin.value)\" placeholder=\"PIN Code*\"\n         [(ngModel)]=\"model.businessDetails[0].pinCode\" name=\"pin\"\n         #pin=\"ngModel\"/>\n         <div [hidden]=\"pin.valid || pin.pristine\"\n            class=\"alert alert-danger\">\n            Invalid PIN Code! Should contain 6 digits.\n         </div>\n      </div>\n      <div  class=\"form-group flex-item-getAdd locationBtn\">\n          <button type=\"button\" class=\"btn btn-success btn-block\"\n          [disabled]=\"!model.businessDetails[0].pinCode\"\n          (click)=\"update(pin.value)\">\n          Get Location\n        </button>\n      </div>\n    </div>\n      <div *ngIf=\"showAddr && model.businessDetails[0].pinCode\" class=\"flexDiv\">\n         <div class=\"form-group flex-item\">\n            <!-- <label for=\"city\">City</label> -->\n            <input type=\"text\" class=\"form-control\" id=\"city\" required placeholder=\"City\"\n            [(ngModel)]=\"model.businessDetails[0].city\" name=\"city\" #city=\"ngModel\"/>\n            <div [hidden]=\"city.valid || city.pristine\"\n               class=\"alert alert-danger\">\n               City is required\n            </div>\n         </div>\n         <div class=\"form-group flex-item flex-item-middle\">\n            <!-- <label for=\"state\">State</label> -->\n            <input type=\"text\" class=\"form-control\" id=\"state\" required placeholder=\"State\"\n            [(ngModel)]=\"model.businessDetails[0].state\" name=\"state\" #state=\"ngModel\"/>\n            <div [hidden]=\"state.valid || state.pristine\"\n               class=\"alert alert-danger\">\n               State is required\n            </div>\n         </div>\n         <div class=\"form-group flex-item\">\n            <!-- <label for=\"country\">Country</label> -->\n            <input type=\"text\" class=\"form-control\" id=\"country\" required placeholder=\"Country\"\n            [(ngModel)]=\"model.businessDetails[0].country\" name=\"country\" #country=\"ngModel\"/>\n            <div [hidden]=\"country.valid || country.pristine\"\n               class=\"alert alert-danger\">\n               Country is required\n            </div>\n         </div>\n      </div>\n      <div class=\"form-group\">\n         <!-- <label for=\"name\">Website</label> -->\n         <input type=\"text\" class=\"form-control\" id=\"website\" placeholder=\"Website\"\n         [(ngModel)]=\"model.businessDetails[0].website\" name=\"website\"\n         #website=\"ngModel\"/>\n      </div>\n      <div class=\"dropdown-flex\">\n         <div class=\"form-group dropdown-category\" >\n            <!-- <label for=\"name\">Business Category</label> -->\n            <select name=\"state\" ngModel class=\"form-control\" id=\"category\"\n            required\n            [(ngModel)]=\"model.businessDetails[0].category\" name=\"category\"\n            #category=\"ngModel\">\n            <option value=\"\" disabled>Select Business Category</option>\n            <option *ngFor=\"let data of categoryInfo\" [ngValue]=\"data.id\">\n            {{ data.name }}\n            </option>\n            </select>\n         </div>\n         <div class=\"form-group dropdown-register\" >\n            <!-- <label for=\"name\">Registration Info</label> -->\n            <select name=\"reg\" ngModel class=\"form-control\" id=\"reg\"\n            required (change)=\"idProofValidate(model.businessDetails[0].reg)\"\n            [(ngModel)]=\"model.businessDetails[0].reg\" name=\"reg\"\n            #reg=\"ngModel\">\n            <option value=\"\" disabled>Registration Info</option>\n            <option *ngFor=\"let data of registerInfo\" [ngValue]=\"data.id\">\n            {{ data.name }}\n            </option>\n            </select>\n         </div>\n      </div>\n      <div class=\"form-group\" *ngIf='model.businessDetails[0].reg'>\n         <!-- <label for=\"name\">Enter Id Proof Number</label> -->\n         <input type=\"text\" class=\"form-control\" id=\"regDetails\" [maxlength]=\"maxLn\"\n         placeholder=\"Enter Id Proof Number\"\n         required (blur)=\"idProofValidate(model.businessDetails[0].reg,regDetails.value);\"\n         [(ngModel)]=\"model.businessDetails[0].regProof\" name=\"regDetails\"\n         #regDetails=\"ngModel\"/>\n         <div [hidden]=\"regDetails.valid || regDetails.pristine\"\n            class=\"alert alert-danger\">\n            {{idProofErrMsg}}\n         </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"!signup.form.valid\" >{{formSubmitName}}</button>\n      </form>\n   </div>\n </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng5_toastr_ng5_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(_demoService, router, toastr) {
        this._demoService = _demoService;
        this.router = router;
        this.toastr = toastr;
        this.categoryInfo = [{
                name: 'Clothing',
                id: '1'
            },
            {
                name: 'Furniture',
                id: '2'
            },
            {
                name: 'Fashion Jewellery',
                id: '3'
            },
            {
                name: 'Valves',
                id: '4'
            },
            {
                name: 'Computer Hardware',
                id: '5'
            },
        ];
        this.registerInfo = [{
                name: 'PanCard',
                id: '1'
            },
            {
                name: 'Aadhar',
                id: '2'
            },
            {
                name: 'TIN',
                id: '3'
            }
        ];
        this.submitted = false;
        this.showAddr = false;
        this.registrationFailed = null;
        this.formSubmitName = 'Register';
        this.formTitle = 'Registration Form';
        this.pattern_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        this.pattern_mobile = /^\d{10}$/;
        this.pattern_pinCode = /^\d{3,7}$/;
        this.pattern_password = /^(?=.*?[A-Z])(?=.*?[0-9]).{6,}$/;
        this.model = {
            "registrationId": '',
            "ownerName": "",
            "mobile": "",
            "password": "",
            "email": "",
            "businessDetails": [
                {
                    "companyName": "",
                    "businessAddress": "",
                    "pinCode": "",
                    "city": "",
                    "state": "",
                    "country": "",
                    "website": "",
                    "category": "",
                    "regProof": "",
                    "reg": "",
                    "businessDetailId": ''
                }
            ]
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        //alert(this.router.url)
        var url = this.router.url;
        this.addNewBusinessForm = url.includes('addNew');
        this.businessEditableForm = url.includes('myInfo');
        if (this.addNewBusinessForm) {
            this.formSubmitName = 'Add Business';
            this.formTitle = 'Add New Business';
            this.addNew = true;
        }
        else if (this.businessEditableForm) {
            this.showBuList();
        }
        else { }
    };
    SignupComponent.prototype.validation = function (check, value) {
        if (!this[check].test(value)) {
            if (check == 'pattern_pinCode') {
                this.model.businessDetails[0].pinCode = '';
            }
            else {
                this.model[check.slice(8)] = '';
            }
            //  this.toastr.error("Please enter valid "+ check.slice(8), null,{dismiss: 'click',toastLife: '3000'});
        }
    };
    SignupComponent.prototype.onSubmit = function () {
        if (this.addNewBusinessForm) {
            this.addNewBusiness(this.model);
        }
        else if (this.businessEditableForm) {
            this.editBusiness(this.model);
        }
        else {
            this.registerUser(this.model);
        }
        //this.getLocation();
    };
    SignupComponent.prototype.update = function (value) {
        if (value != null)
            this.addressDetails(value);
    };
    SignupComponent.prototype.locDeatils = function (data) {
        if (data) {
            var addrDataArr = data.results[0].formatted_address.split(',');
            this.model.businessDetails[0].country = addrDataArr[addrDataArr.length - 1].trim();
            this.model.businessDetails[0].state = addrDataArr[addrDataArr.length - 2].trim();
            this.model.businessDetails[0].city = addrDataArr[addrDataArr.length - 3].trim();
            this.showAddr = true;
        }
    };
    SignupComponent.prototype.registerUser = function (dataJson) {
        var _this = this;
        this.mobileOTP = dataJson.mobile;
        this._demoService.changeMobile(this.mobileOTP);
        this._demoService.registerUser(dataJson).subscribe(function (data) {
            if (data[0] == 'success') {
                _this.sendOtp(_this.mobileOTP);
                return true;
            }
            else {
                _this.toastr.error(data[0], 'Error', { toastLife: '3000' });
            }
        }, function (error) {
            console.error("Error saving data!");
            _this.registrationFailed = 'Registration failed';
            _this.toastr.error('Registration failed', 'Error', { toastLife: '3000' });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupComponent.prototype.addNewBusiness = function (dataJson) {
        var _this = this;
        this._demoService.addingNewBusiness(dataJson).subscribe(function (data) {
            _this.toastr.success("successfully added", "Success", { toastLife: '3000' });
            _this.router.navigate(['/', 'userData', 'myInfo']);
            return true;
        }, function (error) {
            console.error("Error saving data!");
            _this.toastr.error("Failed to add", "Error", { toastLife: '3000' });
            _this.registrationFailed = 'Failed to add new Business';
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupComponent.prototype.showBuList = function () {
        var _this = this;
        this._demoService.viewMyBusiness().subscribe(function (data) {
            _this.businessList = data;
            if (_this.businessList.businessDetails.length == 1) {
                _this.viewBusinessDetails(0);
            }
            else {
                _this.showbusinessList = true;
            }
        }, function (error) {
            _this.toastr.error("", "ERROR!!", { toastLife: '3000' });
        });
    };
    SignupComponent.prototype.viewBusinessDetails = function (index) {
        var obj = this.businessList.businessDetails[index];
        this.businessList.businessDetails.splice(index, 1);
        this.businessList.businessDetails.unshift(obj);
        this.model = this.businessList;
        this.formSubmitName = 'Submit';
        this.formTitle = this.businessList.businessDetails[0].companyName;
        this.showbusinessList = false;
    };
    SignupComponent.prototype.editBusiness = function (dataJson) {
        var _this = this;
        this._demoService.editBusinessService(dataJson).subscribe(function (data) {
            _this.toastr.success("successfully saved", "Success", { toastLife: '3000' });
            _this.router.navigate(['/', 'userData']);
        }, function (error) {
            console.error("Error saving data!");
            _this.toastr.error("Error saving data!", "ERROR!!", { toastLife: '3000' });
            _this.registrationFailed = 'Failed to edit Data';
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupComponent.prototype.addressDetails = function (data) {
        var _this = this;
        var JsonData = { details: data };
        this._demoService.getLocationDetails(JsonData).subscribe(function (data) {
            _this.locDeatils(data);
            return true;
        }, function (error) {
            console.error("Error fetching data!");
            _this.toastr.error("Error while fetching data!", "ERROR!!", { toastLife: '3000' });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupComponent.prototype.sendOtp = function (mobileNum) {
        var _this = this;
        this.router.navigate(['/', 'otpVerification']);
        this._demoService.sendOtp(mobileNum).subscribe(function (data) {
            _this._demoService.changeMessage(data + 'Regi');
        }, function (error) {
        });
    };
    SignupComponent.prototype.doesUserExist = function (mobileNum) {
        var _this = this;
        this._demoService.doesUserExist({ 'mobile': mobileNum }).subscribe(function (data) {
            if (data) {
                _this.model.mobile = null;
                _this.mobilecheck = true;
            }
        }, function (error) {
        });
    };
    SignupComponent.prototype.idProofValidate = function (proof, id) {
        console.log(proof + id);
        this.registerInfo.forEach(function (val) {
            if (val.id == proof)
                proof = val.name;
        });
        switch (proof) {
            case "PanCard":
                console.log(!/^([A-Za-z]){5}([0-9]){4}([A-Za-z]){1}$/.test(id));
                if (!/^([A-Za-z]){5}([0-9]){4}([A-Za-z]){1}$/.test(id)) {
                    this.model.businessDetails[0].regProof = "";
                    this.idProofErrMsg = "Please enter valid PanCard number! Ex: AFCDE1234K";
                    this.maxLn = 10;
                }
                break;
            case "Aadhar":
                if (!/^\d{12}$/.test(id)) {
                    this.model.businessDetails[0].regProof = "";
                    this.idProofErrMsg = "Please enter valid Aadhar number! Should contain 12 digits";
                    this.maxLn = 12;
                }
                break;
            case "TIN":
                if (!/^\d{11}$/.test(id)) {
                    this.model.businessDetails[0].regProof = "";
                    this.idProofErrMsg = "Please enter valid TIN number! Should contain 11 digits";
                    this.maxLn = 11;
                }
        }
    };
    SignupComponent.prototype.getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    SignupComponent.prototype.showPosition = function (position) {
        alert("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ng5_toastr_ng5_toastr__["ToastsManager"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user-data/user-data.component.css":
/***/ (function(module, exports) {

module.exports = ".dropdown:hover>.dropdown-menu {\n  display: block;\n}\n.profileView{\n  margin-left: 1000px;\n}\n.drpBtn{\n  width: 150px;\n}\n.myInfoDetails{\nwidth:200px;\n}\n.sub-view{\n  /* background-color:  #C3DEE5; */\n}\n.example-container {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}\n/* .textStyle{\n  font-style: italic;\n  margin-top: 74px;\n} */\n.listcss{\n  padding: 17px;\n  font-size: 1.5rem;\n  background:#C3DEE5\n}\n.listcss:hover{\n  cursor: pointer;\n  background-color: #06575B;\n  color: #ECF0D0 !important;\n}\n"

/***/ }),

/***/ "./src/app/user-data/user-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row sub-view m-1\">\n  <div class=\"col-md-2 col-sm-4 textStyle p-0\" >\n    <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" (click)=\"routeTo('/userData/invoice')\" >Invoice</a>\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" (click)=\"routeTo('/userData/payables')\">Payables</a>\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" (click)=\"routeTo('/userData/receivables')\">Receivables</a>\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" (click)=\"routeTo('/userData/salesReport')\">Sales Report</a>\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" (click)=\"routeTo('/userData/raiseTicket')\">Raise Ticket</a>\n    </div>\n  </div>\n  <div class=\"col-md-10 col-sm-8 p-0\">\n      <router-outlet class=\"tab-pane fade\"></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-data/user-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDataComponent = /** @class */ (function () {
    function UserDataComponent(_dataService, router, location, cookieService) {
        this._dataService = _dataService;
        this.router = router;
        this.location = location;
        this.cookieService = cookieService;
    }
    UserDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.selectedBUVal.subscribe(function (selectedBU) {
            return _this.selectedBU = selectedBU.companyName;
        });
        this._dataService.newBusinessVal.subscribe(function (newBusinessVal) { return _this.addNewBusinessForm = newBusinessVal; });
        this.showRegForm = this.addNewBusinessForm;
        console.log(this.selectedBU);
        if (this.location.path() == "/userData" && this.selectedBU == undefined) {
            this.showBuList();
        }
        // else if(this.location.path() == "/userData" && this.businessList != null && this.businessList.businessDetails[0].businessDetailId == this.selectedBU.businessDetailId) {
        //  }
    };
    UserDataComponent.prototype.addNewBusiness = function () {
        this.showeditForm = false;
        this.invoice = this.payables = this.receivables = false;
        this._dataService.isNewBusiness(true);
        this.showRegForm = this.addNewBusinessForm;
    };
    UserDataComponent.prototype.viewBusinessDetails = function (data) {
        this.showRegForm = false;
        this._dataService.isNewBusiness(false);
        var model = data;
        this._dataService.editBusinessData(model);
        this.showeditForm = true;
        this.showbusinessList = false;
    };
    UserDataComponent.prototype.showBuList = function () {
        var _this = this;
        this._dataService.viewMyBusiness().subscribe(function (data) {
            _this.businessList = data;
            _this._dataService.changeBusinessList(_this.businessList);
            _this._dataService.changeselectedBUVal(_this.businessList.businessDetails[0]);
        }, function (error) {
            alert("could not fetch BU data");
        });
    };
    UserDataComponent.prototype.sideNav = function (value) {
        this[value] = true;
        this.profile = false;
    };
    UserDataComponent.prototype.routeTo = function (url) {
        var _this = this;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate([url]);
        });
    };
    UserDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-data',
            template: __webpack_require__("./src/app/user-data/user-data.component.html"),
            styles: [__webpack_require__("./src/app/user-data/user-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], UserDataComponent);
    return UserDataComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    //  url:'http://localhost:8585'
    url: window.location.origin
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




// import 'hammerjs';
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map