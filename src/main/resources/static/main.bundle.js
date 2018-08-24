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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.imgBg{\r\n  /* background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixAQVHWc72Tcbtk4G4OFbOmQCbHw5dqIMSTzuYbbQoc4TFEzBiQ'); */\r\n  background-image: url('https://i.ytimg.com/vi/9MjVs8XjJoI/maxresdefault.jpg');\r\n  /* background-image: url('http://hdimages.org/wp-content/uploads/2016/11/image-line-HD5.jpg'); */\r\n  background-repeat: no-repeat;\r\n  height: 700px;\r\n  margin-bottom: 0px;\r\n}\r\n.bgColor{\r\n  background-color: #563d7c !important;\r\n}\r\nh2 {\r\n    font-size: 24px;\r\n    text-transform: uppercase;\r\n    color: #303030;\r\n    font-weight: 600;\r\n    margin-bottom: 30px;\r\n}\r\nh4 {\r\n    font-size: 19px;\r\n    line-height: 1.375em;\r\n    color: #303030;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n}\r\n.jumbotron {\r\n    background-color: #223b56;\r\n    color: #fff;\r\n    padding: 100px 25px;\r\n    font-family: Montserrat, sans-serif;\r\n}\r\n.container-fluid {\r\n    padding: 60px 50px;\r\n}\r\n.bg-grey {\r\n    background-color: #f6f6f6;\r\n}\r\n.logo-small {\r\n    color: #223b56;\r\n    font-size: 50px;\r\n}\r\n.logo {\r\n    color: #223b56;\r\n    font-size: 200px;\r\n}\r\n.thumbnail {\r\n    padding: 0 0 15px 0;\r\n    border: none;\r\n    border-radius: 0;\r\n}\r\n.thumbnail img {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n.carousel-control.right, .carousel-control.left {\r\n    background-image: none;\r\n    color: #223b56;\r\n}\r\n.carousel-indicators li {\r\n    border-color: #223b56;\r\n}\r\n.carousel-indicators li.active {\r\n    background-color: #223b56;\r\n}\r\n.item h4 {\r\n    font-size: 19px;\r\n    line-height: 1.375em;\r\n    font-weight: 400;\r\n    font-style: italic;\r\n    margin: 70px 0;\r\n}\r\n.item span {\r\n    font-style: normal;\r\n}\r\n.panel {\r\n    border: 1px solid #223b56;\r\n    border-radius:0 !important;\r\n    -webkit-transition: -webkit-box-shadow 0.5s;\r\n    transition: -webkit-box-shadow 0.5s;\r\n    transition: box-shadow 0.5s;\r\n    transition: box-shadow 0.5s, -webkit-box-shadow 0.5s;\r\n}\r\n.panel:hover {\r\n    -webkit-box-shadow: 5px 0px 40px rgba(0,0,0, .2);\r\n            box-shadow: 5px 0px 40px rgba(0,0,0, .2);\r\n}\r\n.panel-footer .btn:hover {\r\n    border: 1px solid #223b56;\r\n    background-color: #fff !important;\r\n    color: #223b56;\r\n}\r\n.panel-heading {\r\n    color: #fff !important;\r\n    background-color: #223b56 !important;\r\n    padding: 25px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n}\r\n.panel-footer {\r\n    background-color: white !important;\r\n}\r\n.panel-footer h3 {\r\n    font-size: 32px;\r\n}\r\n.panel-footer h4 {\r\n    color: #aaa;\r\n    font-size: 14px;\r\n}\r\n.panel-footer .btn {\r\n    margin: 15px 0;\r\n    background-color: #223b56;\r\n    color: #fff;\r\n}\r\n.navbar {\r\n    margin-bottom: 0;\r\n    background-color: #1abc9c;\r\n    z-index: 9999;\r\n    border: 0;\r\n    font-size: 12px !important;\r\n    line-height: 1.42857143 !important;\r\n    letter-spacing: 4px;\r\n    border-radius: 0;\r\n    font-family: Montserrat, sans-serif;\r\n}\r\n.navbar li a, .navbar .navbar-brand {\r\n    color: #fff !important;\r\n}\r\n.navbar-nav li a:hover, .navbar-nav li.active a {\r\n    color: #223b56 !important;\r\n    background-color: #fff !important;\r\n}\r\n.navbar-default .navbar-toggle {\r\n    border-color: transparent;\r\n    color: #fff !important;\r\n}\r\nfooter .glyphicon {\r\n    font-size: 20px;\r\n    margin-bottom: 20px;\r\n    color: #223b56;\r\n}\r\n.slideanim {visibility:hidden;}\r\n.slide {\r\n    animation-name: slide;\r\n    -webkit-animation-name: slide;\r\n    animation-duration: 1s;\r\n    -webkit-animation-duration: 1s;\r\n    visibility: visible;\r\n}\r\n@keyframes slide {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(70%);\r\n            transform: translateY(70%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0%);\r\n            transform: translateY(0%);\r\n  }\r\n}\r\n@-webkit-keyframes slide {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(70%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0%);\r\n  }\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .col-sm-4 {\r\n    text-align: center;\r\n    margin: 25px 0;\r\n  }\r\n  .btn-lg {\r\n      width: 100%;\r\n      margin-bottom: 35px;\r\n  }\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .logo {\r\n      font-size: 150px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bgColor\">\n  <a class=\"navbar-brand\" (click)=\"homePage()\" routerLink=\"/\">SMyData</a>\n  <span class=\"navbar-text\">\n   <a class=\"nav-link\" *ngIf=\"!showProfile && !indProfile\">\n     <span class=\"\" (click)=\"signInCall()\">SignIn/Register</span>\n   </a>\n   <a class=\"nav-link\" *ngIf=\"indProfile\">\n     <span class=\"\" (click)=\"logOut()\">Logout</span>\n   </a>\n    <li class=\"nav-item dropdown pr-4\" *ngIf=\"showProfile\" style=\"list-style:none;left:-35px;font-family: serif\">\n       <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n         Deatils\n       </a>\n       <div class=\"dropdown-menu\" style=\"left:-80px;text-color:black\" aria-labelledby=\"navbarDropdownMenuLink\">\n         <span class=\"dropdown-item\" routerLink=\"/userData/myInfo\">View Business</span>\n         <span class=\"dropdown-item\" routerLink=\"/userData/addNew\">Add Business</span>\n         <span class=\"dropdown-item\" routerLink=\"/userData/businessPlan\">BusinessPlan</span><hr>\n         <span class=\"dropdown-item\" (click)=\"logOut()\">Logout</span>\n       </div>\n     </li>\n    </span>\n</nav>\n\n<div class=\"\">\n<!-- <div class=\"\" *ngIf=\"view != 'homePage'\"> -->\n<div class=\"\" *ngIf=\"view == 'homePage'\">\n<div class=\"jumbotron text-center imgBg\">\n  <h1>SMY DATA</h1>\n\n</div>\n\n<!-- Container (About Section) -->\n<div id=\"about\" class=\"container-fluid bg-grey\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h2>About Company Page</h2><br>\n      <h4>MYDATA will provide solution to small scale business owners and give them an advantage over track profit and loss, automate digita marketing, capturing customer data.Landscape of business is huge in our country. Everyday day the footprint of different business continue to grow as the economy scales up to meet consumer demands.</h4>\n      <br><button class=\"btn btn-default btn-lg\">Get in Touch</button>\n    </div>\n    <div class=\"col-sm-4\">\n      <img class=\"img-circle\" src=\"https://image.shutterstock.com/z/stock-photo-image-of-happy-cashier-woman-on-workspace-in-supermarket-shop-looking-at-camera-623084897.jpg\" alt=\"\" style=\"width:inherit;height:300px\">\n    </div>\n  </div>\n</div>\n\n\n<!-- Container (Services Section) -->\n<div id=\"services\" class=\"container-fluid text-center\">\n  <h2>SERVICES</h2>\n  <h4>What we offer</h4>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <!-- <span class=\"glyphicon  glyphicon-user logo-small\"></span> -->\n      <img class=\"img-rounded\" src=\"https://thumb7.shutterstock.com/display_pic_with_logo/1166069/1022916361/stock-vector-bills-online-payment-flat-isometric-vector-concept-of-mobile-payment-shoping-banking-1022916361.jpg\" alt=\"\" style=\"width:200px;height:200px\">\n      <h4>CUSTOMER</h4>\n      <p>the recipient of a good, service, product or an idea - obtained from a seller, vendor, or supplier</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCowLouYbdJXiZkQTmp8XqMNxEVYo1sHxnRINs6rAYzjf1Pg6w\" alt=\"\" style=\"width:200px;height:200px\">\n      <h4>INVOICE</h4>\n      <p>A list of things provided or work done together with their cost, for payment at a later time</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrcY4xlb_eDU39gzYcMuK2Cs_LwpdzYxXxmxd8oGx6qzTxKqkkoQ\" alt=\"\" style=\"width:200px;height:200px\">\n      <h4>Receivables</h4>\n      <p>Company's claims to the future collection of cash, other assets, or services</p>\n    </div>\n  </div>\n  <br><br>\n  <div class=\"row \">\n    <div class=\"col-sm-4\">\n      <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4jn6Ib2wGsdtYVPq2oorQEQxbl7ytBWnkzThcNsEVhYqIoKF\" alt=\"\" style=\"width:200px;height:200px\">\n      <h4>PAYABLES</h4>\n      <p>To pay off a short-term debt to its creditors or suppliers</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ts8Ptlq_eVOkRaY7RjS5OJyfPjqfsqeNCfMt4woPoeowgNAyeg\" alt=\"\" style=\"width:200px;height:200px\">\n      <h4>REPORTS</h4>\n      <p>Generate data and reports of your business</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <img src=\"https://thumb1.shutterstock.com/display_pic_with_logo/91282/158522279/stock-photo-image-of-two-young-businessmen-using-touchpad-at-meeting-158522279.jpg\" alt=\"\" style=\"width:200px;height:200px\">\n      <h4 style=\"color:#303030;\">TICKETS</h4>\n      <p>Raise tickets and get solution for your problem</p>\n    </div>\n  </div>\n</div>\n\n<!-- Container (Portfolio Section) -->\n<div id=\"portfolio\" class=\"container-fluid text-center bg-grey\">\n  <h2>Do Better Business With Us.</h2>\n  <div id=\"myCarousel\" class=\"carousel slide text-center\" data-ride=\"carousel\">\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"item\">\n        <h4>\"Success usually comes to those who are too busy to be looking for it.\"<br><span>Dilip, Developer</span></h4>\n      </div>\n      <div class=\"item\">\n        <h4>\"The only limit to our realization of tomorrow will be our doubts of today.<br><span>Parthiya, Dev, Inc</span></h4>\n      </div>\n      <div class=\"item active\">\n        <h4>\"In order to succeed, your desire for success should be greater than your fear of failure.\"<br><span>Viswa, BU</span></h4>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Container (Contact Section) -->\n<div id=\"contact\" class=\"container-fluid\">\n  <h2 class=\"text-center\">CONTACT</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <p>Contact us and we'll get back to you within 24 hours.</p>\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span> Hyderabad, India</p>\n      <p><span class=\"glyphicon glyphicon-phone\"></span> +91 9598945680</p>\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> smydata@gmail.com</p>\n    </div>\n    <div class=\"col-sm-7\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" type=\"text\" required>\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" type=\"email\" required>\n        </div>\n      </div>\n      <textarea class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Comment\" rows=\"5\"></textarea><br>\n      <div class=\"row\">\n        <div class=\"col-sm-12 form-group\">\n          <button class=\"btn btn-default pull-right\" type=\"submit\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n<!-- <footer class=\"container-fluid text-center\">\n\n</footer> -->\n</div>\n<hr>\n<div class=\"\" *ngIf=\"view != 'homePage'\" style=\"margin-top:65px;color:black\">\n<!-- <div class=\"\" *ngIf=\"view != 'homePage'\" style=\"margin-top:65px;color:black\"> -->\n  <router-outlet></router-outlet>\n</div>\n<!-- Routed views go here -->\n"

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
    function AppComponent(_demoService, toastr, router, cookieService, vcr) {
        this._demoService = _demoService;
        this.toastr = toastr;
        this.router = router;
        this.cookieService = cookieService;
        this.title = 'SmyData';
        this.view = 'homePage';
        this.showProfile = false;
        this.indProfile = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._demoService.profile.subscribe(function (showProfile) { return _this.showProfile = showProfile; });
        this._demoService.indprofile.subscribe(function (indProfile) { return _this.indProfile = indProfile; });
        this.allCookies = this.cookieService.getAll();
        console.log(this.allCookies);
        if (this.allCookies && this.allCookies.mobile) {
            this.showProfile = true;
        }
        ;
    };
    ;
    AppComponent.prototype.signInCall = function () {
        this.view = '';
        this.router.navigate(['/', 'select']);
    };
    AppComponent.prototype.logOut = function () {
        this._demoService.changeProfile(false);
        this._demoService.changeindProfile(false);
        this.view = 'homePage';
        this.showProfile = false;
        this.indProfile = false;
        this.cookieService.deleteAll();
        this.router.navigate(['']);
    };
    AppComponent.prototype.homePage = function () {
        //this.view = 'homePage';
        //  this.router.navigate(['/']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ng5_toastr_ng5_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng5_toastr_ng5_toastr__ = __webpack_require__("./node_modules/ng5-toastr/ng5-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng5_toastr_ng5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng5_toastr_ng5_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sign_in_sign_in_component__ = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_data_user_data_component__ = __webpack_require__("./src/app/user-data/user-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__billing_service__ = __webpack_require__("./src/app/billing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__individual_service__ = __webpack_require__("./src/app/individual.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__otp_authentication_otp_authentication_component__ = __webpack_require__("./src/app/otp-authentication/otp-authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__rewards_rewards_component__ = __webpack_require__("./src/app/rewards/rewards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__discounts_discounts_component__ = __webpack_require__("./src/app/discounts/discounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__invoice_invoice_component__ = __webpack_require__("./src/app/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__select_invoice_select_invoice_component__ = __webpack_require__("./src/app/select-invoice/select-invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__payables_payables_component__ = __webpack_require__("./src/app/payables/payables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__receivables_receivables_component__ = __webpack_require__("./src/app/receivables/receivables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__raise_ticket_raise_ticket_component__ = __webpack_require__("./src/app/raise-ticket/raise-ticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sales_report_sales_report_component__ = __webpack_require__("./src/app/sales-report/sales-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__individual_registration_individual_registration_component__ = __webpack_require__("./src/app/individual-registration/individual-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__select_login_type_select_login_type_component__ = __webpack_require__("./src/app/select-login-type/select-login-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__individual_details_individual_details_component__ = __webpack_require__("./src/app/individual-details/individual-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__individual_receivables_individual_receivables_component__ = __webpack_require__("./src/app/individual-receivables/individual-receivables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__individual_payables_individual_payables_component__ = __webpack_require__("./src/app/individual-payables/individual-payables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__individual_reports_individual_reports_component__ = __webpack_require__("./src/app/individual-reports/individual-reports.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import {ToasterModule, ToasterService} from 'angular5-toaster';















// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';











var appRoutes = [
    { path: 'select', component: __WEBPACK_IMPORTED_MODULE_27__select_login_type_select_login_type_component__["a" /* SelectLoginTypeComponent */] },
    { path: 'signIn', component: __WEBPACK_IMPORTED_MODULE_12__sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'signUp', component: __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'IndividualReg', component: __WEBPACK_IMPORTED_MODULE_26__individual_registration_individual_registration_component__["a" /* IndividualRegistrationComponent */] },
    { path: 'individualDetails', component: __WEBPACK_IMPORTED_MODULE_28__individual_details_individual_details_component__["a" /* IndividualDetailsComponent */],
        children: [
            { path: 'payables', component: __WEBPACK_IMPORTED_MODULE_30__individual_payables_individual_payables_component__["a" /* IndividualPayablesComponent */] },
            { path: 'receivables', component: __WEBPACK_IMPORTED_MODULE_29__individual_receivables_individual_receivables_component__["a" /* IndividualReceivablesComponent */] },
            { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_31__individual_reports_individual_reports_component__["a" /* IndividualReportsComponent */] },
        ]
    },
    { path: 'salesReport', component: __WEBPACK_IMPORTED_MODULE_25__sales_report_sales_report_component__["a" /* SalesReportComponent */] },
    { path: 'userData', component: __WEBPACK_IMPORTED_MODULE_13__user_data_user_data_component__["a" /* UserDataComponent */],
        children: [
            { path: 'invoice', component: __WEBPACK_IMPORTED_MODULE_21__select_invoice_select_invoice_component__["a" /* SelectInvoiceComponent */] },
            { path: 'payables', component: __WEBPACK_IMPORTED_MODULE_22__payables_payables_component__["a" /* PayablesComponent */] },
            { path: 'receivables', component: __WEBPACK_IMPORTED_MODULE_23__receivables_receivables_component__["a" /* ReceivablesComponent */] },
            { path: 'salesReport', component: __WEBPACK_IMPORTED_MODULE_25__sales_report_sales_report_component__["a" /* SalesReportComponent */] },
            { path: 'raiseTicket', component: __WEBPACK_IMPORTED_MODULE_24__raise_ticket_raise_ticket_component__["a" /* RaiseTicketComponent */] },
            { path: 'discounts', component: __WEBPACK_IMPORTED_MODULE_19__discounts_discounts_component__["a" /* DiscountsComponent */] },
            { path: 'invoiceTemplate', component: __WEBPACK_IMPORTED_MODULE_20__invoice_invoice_component__["a" /* InvoiceComponent */] },
            { path: 'businessPlan', component: __WEBPACK_IMPORTED_MODULE_18__rewards_rewards_component__["a" /* RewardsComponent */] },
            { path: 'myInfo', component: __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */] },
            { path: 'addNew', component: __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */] },
        ] },
    { path: 'otpVerification', component: __WEBPACK_IMPORTED_MODULE_17__otp_authentication_otp_authentication_component__["a" /* OtpAuthenticationComponent */] },
    // { path: 'myRewards', component: RewardsComponent },
    { path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_data_user_data_component__["a" /* UserDataComponent */],
                __WEBPACK_IMPORTED_MODULE_17__otp_authentication_otp_authentication_component__["a" /* OtpAuthenticationComponent */],
                __WEBPACK_IMPORTED_MODULE_18__rewards_rewards_component__["a" /* RewardsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__discounts_discounts_component__["a" /* DiscountsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__invoice_invoice_component__["a" /* InvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_21__select_invoice_select_invoice_component__["a" /* SelectInvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_22__payables_payables_component__["a" /* PayablesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__receivables_receivables_component__["a" /* ReceivablesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__raise_ticket_raise_ticket_component__["a" /* RaiseTicketComponent */],
                __WEBPACK_IMPORTED_MODULE_25__sales_report_sales_report_component__["a" /* SalesReportComponent */],
                __WEBPACK_IMPORTED_MODULE_26__individual_registration_individual_registration_component__["a" /* IndividualRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_27__select_login_type_select_login_type_component__["a" /* SelectLoginTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_28__individual_details_individual_details_component__["a" /* IndividualDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__individual_receivables_individual_receivables_component__["a" /* IndividualReceivablesComponent */],
                __WEBPACK_IMPORTED_MODULE_30__individual_payables_individual_payables_component__["a" /* IndividualPayablesComponent */],
                __WEBPACK_IMPORTED_MODULE_31__individual_reports_individual_reports_component__["a" /* IndividualReportsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__["m" /* CdkTableModule */],
                //ToasterModule,
                __WEBPACK_IMPORTED_MODULE_6_ng5_toastr_ng5_toastr__["ToastModule"].forRoot(),
                // MatButtonModule, MatCheckboxModule,
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_14__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_15__billing_service__["a" /* BillingService */], __WEBPACK_IMPORTED_MODULE_16__individual_service__["a" /* IndividualService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/billing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
var urlProvider = window.location.origin;
var BillingService = /** @class */ (function () {
    function BillingService(http) {
        this.http = http;
    }
    // add rewards method
    BillingService.prototype.addReward = function (data) {
        console.log('insideService');
        console.log(data);
        var url = urlProvider + "/api/addRewards";
        return this.http.post(url, data);
    };
    //get rewards method
    BillingService.prototype.getReward = function () {
        var url = urlProvider + '/api/getRewards';
        return this.http.get(url);
    };
    // add discount method
    BillingService.prototype.addDiscount = function (data) {
        console.log('insideService');
        console.log(data);
        var url = urlProvider + '/api/savediscounts';
        return this.http.post(url, data);
    };
    //get discount method
    BillingService.prototype.getDiscount = function () {
        var url = urlProvider + '/api/getdiscounts';
        return this.http.get(url);
    };
    BillingService.prototype.addInvoice = function (data) {
        console.log('insideService:addInvoice');
        console.log(data);
        var url = urlProvider + '/api/createInvoice/false';
        return this.http.post(url, data);
    };
    // Receivables Service calls....
    BillingService.prototype.getReceivables = function (mobile) {
        console.log('insideService:getReceivables');
        console.log("mobile:" + mobile);
        var url = urlProvider + '/api/getPayables/receivable/' + mobile;
        return this.http.get(url, mobile);
    };
    BillingService.prototype.postReceivedAmount = function (data) {
        console.log('insideService:postReceivedAmount');
        console.log("data:" + data);
        console.log(data);
        var url = urlProvider + '/api/savePayables/receivable/true';
        return this.http.post(url, data);
    };
    BillingService.prototype.addReceivables = function (data) {
        console.log('insideService:addReceivables');
        console.log("data:" + data);
        console.log(data);
        var url = urlProvider + '/api/savePayables/receivable/false';
        return this.http.post(url, data);
    };
    // Payables Service calls....
    BillingService.prototype.getPayables = function (mobile) {
        console.log('insideService:getPayables');
        console.log("mobile:" + mobile);
        var url = urlProvider + '/api/getPayables/payable/' + mobile;
        return this.http.get(url, mobile);
    };
    BillingService.prototype.postPayOffAmount = function (data) {
        console.log('insideService:postpayoffAmount');
        console.log("data:" + data);
        console.log(data);
        var url = urlProvider + '/api/savePayables/payable/true';
        return this.http.post(url, data);
    };
    BillingService.prototype.addPayables = function (data) {
        console.log('insideService:addReceivables');
        console.log("data:" + data);
        console.log(data);
        var url = urlProvider + '/api/savePayables/payable/false';
        return this.http.post(url, data);
    };
    BillingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BillingService);
    return BillingService;
}()); // BillingService End



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
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
var urlProvider = window.location.origin;
var key = 'AIzaSyBFcZOIYqk_s0-qilRmve1TjMCXhYxUP3c';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
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
        this.userType = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.userTypeVal = this.userType.asObservable();
    }
    DataService.prototype.changeindProfile = function (indprofile) {
        console.log('indprofile:' + indprofile);
        this.indProfile.next(indprofile);
    };
    DataService.prototype.changeUserType = function (value) {
        console.log('userType:' + value);
        this.userType.next(value);
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
    DataService.prototype.registerUser = function (data) {
        var body = JSON.stringify(data);
        console.log(data);
        var url = urlProvider + '/api/saveUser/registration';
        console.log(url);
        return this.http.post(url, body, httpOptions);
    };
    DataService.prototype.registerIndividual = function (data) {
        var body = JSON.stringify(data);
        console.log(data);
        var url = urlProvider + '/api/saveCustomer';
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
    DataService.prototype.logInUser = function (data, type) {
        console.log(data);
        var url = urlProvider + '/api/loginUser/' + type;
        return this.http.post(url, data);
    };
    DataService.prototype.getLocationDetails = function (place) {
        console.log(place);
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
        var url = urlProvider + '/api/resetPwd/' + pwd;
        return this.http.get(url, pwd);
    };
    DataService.prototype.doesUserExist = function (mobile) {
        var url = urlProvider + '/api/loginUser';
        return this.http.get(url, mobile);
    };
    DataService.prototype.customerExist = function (mobile) {
        console.log(mobile);
        var url = urlProvider + '/api/getUserDetail/' + mobile;
        return this.http.get(url, mobile);
    };
    DataService.prototype.createUser = function (data) {
        console.log(data);
        var url = urlProvider + '/api/saveUser';
        return this.http.post(url, data);
    };
    DataService.prototype.createTicket = function (data) {
        console.log(data);
        var url = urlProvider + '/api/createTicket';
        return this.http.post(url, data);
    };
    DataService.prototype.requestReport = function (data, type) {
        console.log('Innn service strtDate: ' + data.startDate + ' endDate:' + data.endDate);
        console.log(data);
        var url = urlProvider + '/api/' + type + '/' + data.startDate + '/' + data.endDate;
        console.log(url);
        return this.http.get(url, data);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/discounts/discounts.component.css":
/***/ (function(module, exports) {

module.exports = ".discount{\r\n  width: 50px;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 24px;\r\n  margin: 0px;\r\n}\r\n\r\n.switch input {display:none;}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 16px;\r\n  width: 16px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #2196F3;\r\n}\r\n\r\ninput:focus + .slider {\r\n  -webkit-box-shadow: 0 0 1px #2196F3;\r\n          box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(16px);\r\n  transform: translateX(16px);\r\n}\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.listcss{\r\n    width: 254px;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    border-radius: 50px;\r\n    background-color: #E9ECEF;\r\n}\r\n"

/***/ }),

/***/ "./src/app/discounts/discounts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2> My BusinessPlan </h2>\n  </div>\n</div>\n<div class=\"row justify-content-center\">\n  <ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <span class=\"nav-link listcss\" id=\"nav-home-tab\" data-toggle=\"tab\" routerLink=\"/userData/businessPlan\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Rewards</span>\n  </li>\n  <li class=\"nav-item\">\n    <span class=\"nav-link listcss active\" id=\"nav-profile-tab\" data-toggle=\"tab\" routerLink=\"/userData/discounts\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Discounts</span>\n  </li>\n  <li class=\"nav-item \">\n    <span class=\"nav-link listcss\" id=\"nav-contact-tab\" data-toggle=\"tab\"routerLink=\"/userData/invoiceTemplate\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Invoice</span>\n  </li>\n</ul>\n</div>\n\n<div class=\"row cstyle pt-2\">\n  <div class=\"col\"></div>\n    <div class=\"col-3\">\n      <h4>My Poduct Discounts</h4>\n    </div>\n    <div class=\"col-2\">\n      <div *ngIf=\"!isDataExist\">\n        <label class=\"switch\">\n          <input type=\"checkbox\" [(ngModel)]='discounts.enableDiscount'>\n          <span class=\"slider round\"></span>\n        </label>\n      </div>\n      <div *ngIf=\"isDataExist && discounts?.length > 0\">\n        <label class=\"switch\">\n          <input type=\"checkbox\" [(ngModel)]='discounts[0].enableDiscount'>\n          <span class=\"slider round\"></span>\n        </label>\n      </div>\n    </div>\n    <div class=\"col\"></div>\n</div>\n\n<div class=\"row cstyle\" style=\"overflow:auto; min-height:302px\">\n  <div class=\"col\"></div>\n <div class=\"panel panel-info inbxTxt col-md-12\">\n     <div class=\"panel-body tableFlow\">\n         <table class=\"table table-hover\">\n           <thead>\n             <tr>\n               <th>Min Amount</th>\n               <th>Max Amount</th>\n               <th>Discount</th>\n               <th>Start Date</th>\n               <th>End Date</th>\n               <th>Enable/Disable</th>\n               <th>\n                   <button type=\"button\" (click)='addRow(0)' class=\"btn btn-success btn-sm\">\n                     <span>+</span>\n                   </button>\n             </th>\n             </tr>\n           </thead>\n           <tbody>\n             <tr *ngFor=\"let data of discounts;let i = index; let lastEl = last; let firstEl = first\">\n               <td>\n                 <input class=\"discount\" [(ngModel)]='discounts[i].minAmount'/>\n               </td>\n               <td>\n                 <input class=\"discount\" [(ngModel)]='discounts[i].maxAmount'/>\n               </td>\n               <td>\n                 <input class=\"discount\" [(ngModel)]='discounts[i].discount'/>\n               </td>\n               <td>\n                 <input type=\"date\"  [(ngModel)]='discounts[i].startDate'/>\n               </td>\n               <td>\n                 <input type=\"date\"  [(ngModel)]='discounts[i].endDate'/>\n               </td>\n               <td>\n                 <label class=\"switch\">\n                    <input type=\"checkbox\" [(ngModel)]='discounts[i].enable'>\n                    <span class=\"slider round\"></span>\n                  </label>\n               </td>\n               <td *ngIf='!firstEl'>\n                 <button type=\"button\"  (click)='deleteRow(i)' class=\"btn btn-danger btn-sm\">\n                   <span>-</span>\n                 </button>\n               </td>\n             </tr>\n           </tbody>\n         </table>\n        <hr>\n     </div>\n<button class=\"btn btn-success btn-block fntcss\"type=\"button\" (click)='saveDiscount(discounts)' name=\"button\">Save</button>\n</div>\n<div class=\"col\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/discounts/discounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__billing_service__ = __webpack_require__("./src/app/billing.service.ts");
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
    function DiscountsComponent(_billingService) {
        this._billingService = _billingService;
        this.isDataExist = false;
        this.discounts = [{
                enable: false, minAmount: '', maxAmount: '',
                startDate: '', endDate: '', enableDiscount: false
            }];
    }
    DiscountsComponent.prototype.ngOnInit = function () {
        this.getDiscount();
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
        console.log(discountData);
        //calling addDiscount method which is inside the billing.service to save the discounts data
        this._billingService.addDiscount(discountData).subscribe(function (data) {
            console.log('success::' + data);
        }, function (error) {
        });
    };
    ;
    // function call to get the Discount data
    DiscountsComponent.prototype.getDiscount = function () {
        var _this = this;
        //calling getDiscount method which is inside the billing.service to fetch the discounts data
        this._billingService.getDiscount().subscribe(function (data) {
            console.log('success::' + data);
            if (data != null && Object.keys(data).length > 0) {
                console.log('data::' + Object.keys(data).length);
                _this.isDataExist = true;
                _this.discounts = data;
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log('error');
        });
    };
    DiscountsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-discounts',
            template: __webpack_require__("./src/app/discounts/discounts.component.html"),
            styles: [__webpack_require__("./src/app/discounts/discounts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__billing_service__["a" /* BillingService */]])
    ], DiscountsComponent);
    return DiscountsComponent;
}());



/***/ }),

/***/ "./src/app/individual-details/individual-details.component.css":
/***/ (function(module, exports) {

module.exports = ".textStyle{\r\n  font-style: italic;\r\n  margin-top: 74px;\r\n}\r\n.listcss{\r\n  padding: 17px;\r\n  font-size: 1.5rem;\r\n  /* border-radius: 50px; */\r\n  /* text-align: center; */\r\n}\r\n"

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

module.exports = ".cstyle{\r\n  background-color: #ffffff;\r\n  border-radius: 10px;\r\n  margin: 2px;\r\n}\r\n.tablecss{\r\n  font-size: 20px;\r\n  width: 150px;\r\n  height: 32px;\r\n  font-weight: bold;\r\n}\r\n"

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

module.exports = ".cstyle{\r\n  background-color: #ffffff;\r\n  border-radius: 10px;\r\n  margin: 2px;\r\n}\r\n.tablecss{\r\n  font-size: 20px;\r\n  width: 150px;\r\n  height: 32px;\r\n  font-weight: bold;\r\n}\r\n"

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

module.exports = ".signUp{\r\n  /* width: auto; */\r\n  /* background: linear-gradient(green, yellow, green); */\r\n  /* background-color: #FFF; */\r\n  border-radius: 10px;\r\n  border: 1px solid;\r\n   -webkit-box-shadow: 5px 10px #888888;\r\n           box-shadow: 5px 10px #888888;\r\n  margin-top: 10px;\r\n\t-webkit-box-shadow: 0 10px 6px -6px #777;\r\n\t box-shadow: 0 10px 6px -6px #777;\r\n   word-wrap: break-word;\r\n }\r\n .signup-form{\r\n   margin: 20px;\r\n }\r\n .flexDiv{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n .flex-item{\r\n  width: 25%\r\n}\r\n .flex-item-middle{\r\n  margin: 0 5px;\r\n}\r\n .dropdown-flex{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n .dropdown-category{\r\n  width: 45%;\r\n}\r\n .dropdown-register{\r\n  margin-left: 10%;\r\n  width: 45%;\r\n}\r\n .flex-item-getAdd{\r\n  margin-top: 25px;\r\n  width:30%\r\n}\r\n .flex-item-buAdd{\r\n  width: 70%\r\n}\r\n"

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

module.exports = ".cstyle{\r\n  background-color: #ffffff;\r\n  border-radius: 10px;\r\n  margin: 2px;\r\n}\r\n"

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

/***/ "./src/app/individual.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
var urlProvider = window.location.origin;
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

/***/ "./src/app/invoice/invoice.component.css":
/***/ (function(module, exports) {

module.exports = ".inbox{\r\n  width: 50px;\r\n}\r\n.listcss{\r\n    width: 254px;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    border-radius: 50px;\r\n    background-color: #E9ECEF;\r\n}\r\n.listcssBtn{\r\n    width: 254px;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    border-radius: 50px;\r\n}\r\n.thsize{\r\n  width: 180px;\r\n}\r\n.tablecss{\r\n  font-size: 20px;\r\n  width: 150px;\r\n  height: 32px;\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2> My BusinessPlan </h2>\n  </div>\n</div>\n<div class=\"row justify-content-center\">\n  <ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <span class=\"nav-link listcss\" id=\"nav-home-tab\" data-toggle=\"tab\" routerLink=\"/userData/businessPlan\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Rewards</span>\n  </li>\n  <li class=\"nav-item\">\n    <span class=\"nav-link listcss\" id=\"nav-profile-tab\" data-toggle=\"tab\" routerLink=\"/userData/discounts\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Discounts</span>\n  </li>\n  <li class=\"nav-item \">\n    <span class=\"nav-link listcss active\" id=\"nav-contact-tab\" data-toggle=\"tab\"routerLink=\"/userData/invoiceTemplate\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Invoice</span>\n  </li>\n</ul>\n</div>\n<div class=\"row cstyle p-3\">\n<!-- <div class=\"row col-12\">\n<button type=\"button\" class=\"btn btn-success listcssBtn\" routerLink=\"/userData/invoice\" name=\"button\">Create Invoice</button>\n</div> -->\n<hr>\n  <div class=\"row col-12\">\n    <div class=\"col-md-4\">\n      <h5>David</h5>\n      <h5>9671324421</h5>\n      <h5>david@gmail.com</h5>\n    </div>\n    <div class=\"col\">\n    </div>\n    <div class=\"col-md-4\">\n      <h5>Total BV:55123</h5>\n      <h5>Total Points:526</h5>\n    </div>\n  </div>\n  <div class=\"invoice row col-12\" *ngIf='!invoiceGenerate'>\n  <!-- Table -->\n  <div class=\"inbxTxt tableFlow col-12\">\n    <table class=\"table\" >\n      <thead class=\"thead-light\">\n        <tr class=\"fntcss\">\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Item Name</th>\n          <th scope=\"col\">Quantity</th>\n          <th scope=\"col\">Rate</th>\n          <th scope=\"col\">Total Amount</th>\n          <th>\n            <button type=\"button\" disabled  class=\"btn btn-success btn-sm\">\n              <span>+</span>\n            </button>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of invoice;let i = index; let lastEl = last; let firstEl = first\">\n          <td style=\"width:30px\">{{i+1}}</td>\n          <td class=\"thsize\">\n            <select [(ngModel)]='invoice[i].item' class=\"tablecss\" disabled>\n                <option *ngFor=\"let item of items\" value={{item}}>\n                    {{item}}\n                </option>\n            </select>\n            <!-- <input class=\"discount\" type=\"number\" min=\"0\" [(ngModel)]='discounts[i].minAmount'/> -->\n          </td>\n          <td class=\"thsize\">\n            <input class=\"quantity tablecss\" readonly type=\"number\" min=\"0\" [(ngModel)]='invoice[i].quantity'/>\n          </td>\n          <td class=\"thsize\">\n            <input class=\"rate tablecss\" readonly type=\"number\" min=\"0\" [(ngModel)]='invoice[i].rate'/>\n          </td>\n          <td class=\"thsize\">\n            <input readonly class=\"tablecss\" value=\"{{invoice[i].rate  * invoice[i].quantity | currency:'RS '}}\">\n          </td>\n          <td class=\"thsize\" *ngIf='!firstEl'>\n            <button type=\"button\" disabled  (click)='deleteRow(i)' class=\"btn btn-danger btn-sm\">\n              <span>-</span>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div><hr>\n  <div class=\"discount pl-4\">\n    <h5>Sub-Total: 7350 </h5>\n    <h5>Discount: <input  readonly class=\"inbox\"  name=\"discount\" value=\"20\">%</h5>\n    <h5>Rewards: <input  readonly class=\"inbox\" name=\"reward\" value=\"200\"></h5>\n    <h5>Total:  5880 </h5>\n  </div>\n  <div class=\"row col-12\">\n    <button type=\"button\" name=\"button\" disabled class=\"btn btn-block btn-success fntcss\" (click)=\"submitInvoice()\">Submit</button>\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/invoice/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__billing_service__ = __webpack_require__("./src/app/billing.service.ts");
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
    function InvoiceComponent(_billingService, cookieService) {
        this._billingService = _billingService;
        this.cookieService = cookieService;
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
    };
    InvoiceComponent.prototype.addRow = function () {
        this.invoice.push({
            item: '', quantity: '', rate: '',
            total: ''
        });
    };
    ;
    InvoiceComponent.prototype.deleteRow = function (index) {
        this.invoice.splice(index, 1);
    };
    ;
    InvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__("./src/app/invoice/invoice.component.html"),
            styles: [__webpack_require__("./src/app/invoice/invoice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__billing_service__["a" /* BillingService */], __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/otp-authentication/otp-authentication.component.css":
/***/ (function(module, exports) {

module.exports = ".reset-pswd{\r\n  background-color: #9EEBA1;\r\n  border-radius: 10px;\r\n  border: 1px solid;\r\n   -webkit-box-shadow: 5px 10px #888888;\r\n           box-shadow: 5px 10px #888888;\r\n  margin-top: 10%;\r\n\t-webkit-box-shadow: 0 10px 6px -6px #777;\r\n\t box-shadow: 0 10px 6px -6px #777;\r\n }\r\n"

/***/ }),

/***/ "./src/app/otp-authentication/otp-authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<div  *ngIf='!resetPwd' class=\"col-md-3 col-md-offset-4 otp-box signIn inbxTxt\" >\n  <form (ngSubmit)=\"verifyOtp(); otpVerify.reset()\" #otpVerify=\"ngForm\" class=\"otp-verify\">\n    <div *ngIf='invalidOtp' class=\"alert alert-danger\" (click)=\"invalidOtp = false\">\n      <strong>Invalid OTP</strong>\n    </div>\n  <div class=\"form-group\">\n    <label for=\"otp\">Enter The One time password (OTP) that was sent to your mobile device:</label>\n    <input type=\"text\" class=\"form-control\" id=\"otp\"\n           required\n           [(ngModel)]=\"otpValue\" name=\"otp\"\n           #otp=\"ngModel\"/>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary btn-md\" >Submit</button>\n  <!-- <button type=\"submit\" [disabled]='clicked' (click)=\"clicked = true\" class=\"btn btn-primary btn-md\" >Resend OTP</button> -->\n  </form>\n\n</div>\n\n<div *ngIf='resetPwd' class=\"col-md-3 col-md-offset-4 reset-pswd signIn inbxTxt\" id=\"resetPswd\">\n  <form (ngSubmit)=\"resetPswd(); pwdReset.reset()\" #pwdReset=\"ngForm\" class=\"pwd-form\">\n    <div *ngIf='errorDisplay' class=\"alert alert-danger\"  (click)=\"errorDisplay = false\">\n      <strong>{{errMsg}}</strong>\n    </div>\n  <div class=\"form-group\">\n    <label for=\"mobileNum\">New Password:</label>\n    <input type=\"password\" class=\"form-control\" id=\"pwd\"\n           required\n           [(ngModel)]=\"pwdValNew\" name=\"pwd\"\n           #pwd=\"ngModel\"/>\n    <div [hidden]=\"pwd.valid || pwd.pristine\"\n         class=\"alert alert-danger\">\n       Password is required\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"mobileNum\">Confirm Password:</label>\n    <input type=\"password\" class=\"form-control\" id=\"Cpwd\"\n           required\n           [(ngModel)]=\"pwdValCnf\" name=\"Cpwd\"\n           #Cpwd=\"ngModel\"/>\n    <div [hidden]=\"Cpwd.valid || Cpwd.pristine\"\n         class=\"alert alert-danger\">\n       Password is required\n    </div>\n  </div>\n  <button  type=\"submit\" class=\"btn btn-primary btn-md\" [disabled]=\"!pwdReset.form.valid\">Submit</button>\n\n</form>\n</div>\n\n<div class=\"container\" *ngIf='successRegPopUp'>\n  <!-- Modal -->\n    <div class=\"modal show fade\" id=\"myModalRegister\" role=\"dialog\" >\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n\t\t\t\t<br><br>\n        <div class=\"modal-body\">\n          <h4>Your sign up was successful click continue to logIn to  your account</h4>\n\t\t\t\t\t<button  type=\"submit\" class=\"btn btn-primary btn-md\" routerLink=\"/signIn\">Continue</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/otp-authentication/otp-authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpAuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
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
    function OtpAuthenticationComponent(data, router, cookieService) {
        this.data = data;
        this.router = router;
        this.cookieService = cookieService;
    }
    OtpAuthenticationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetPwd = false;
        this.data.cast.subscribe(function (messageSource) { return _this.messageSource = messageSource; });
        console.log('message::' + this.messageSource);
    };
    OtpAuthenticationComponent.prototype.verifyOtp = function () {
        var _this = this;
        this.data.cast.subscribe(function (messageSource) { return _this.messageSource = messageSource; });
        console.log('verifyOtp::' + this.messageSource);
        if (this.messageSource == (this.otpValue + 'Regi')) {
            this.successRegPopUp = true;
            this.router.navigate(['/', 'signIn']);
        }
        else if (this.messageSource == this.otpValue) {
            this.resetPwd = true;
        }
        else {
            this.invalidOtp = true;
        }
    };
    OtpAuthenticationComponent.prototype.resetPswd = function () {
        var _this = this;
        if (this.pwdValNew == this.pwdValCnf) {
            this.mobile = this.cookieService.get('resetPwdMobile');
            this.data.resetpassword(this.pwdValNew, this.mobile).subscribe(function (data) {
                _this.router.navigate(['/', 'signIn']);
                return true;
            }, function (error) {
                _this.errorDisplay = true;
                _this.errMsg = 'Could not Reset the password. Try Again';
            });
        }
        else {
            this.errorDisplay = true;
            this.errMsg = 'Password Match error';
        }
    };
    OtpAuthenticationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-otp-authentication',
            template: __webpack_require__("./src/app/otp-authentication/otp-authentication.component.html"),
            styles: [__webpack_require__("./src/app/otp-authentication/otp-authentication.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], OtpAuthenticationComponent);
    return OtpAuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/payables/payables.component.css":
/***/ (function(module, exports) {

module.exports = ".inputStyle{\r\n  width: 100px;\r\n}\r\n.fixWidth{\r\n  width: 50px;\r\n}\r\n.cstyle{\r\n  background-color: #ffffff;\r\n  border-radius: 10px;\r\n  margin: 2px;\r\n}\r\n.inps{\r\n  width: 200px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/payables/payables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2>Payables</h2>\n  </div>\n</div>\n<div class=\"row cstyle dataBox\" *ngIf = \"!model\">\n  <div class=\"col\"> </div>\n  <div class=\"col-md-5 col-sm-12\">\n    <div class=\"input-group col align-self-center\" style=\"margin-top:50px\" *ngIf='!userEntry'>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]='mobile' placeholder=\"Enter Mobile Number\" style=\"height:50px\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-success fntcss\" (click)=\"verifyUser()\" type=\"button\">Submit</button>\n      </div>\n    </div>\n    <form *ngIf='userEntry'>\n      <div class=\"form-group\">\n        <label  class=\"col-form-label\">Name</label>\n        <div class=\"\">\n          <input type=\"text\" class=\"form-control form-control-sm usrInpt\" name='username'  [(ngModel)]=\"userName\" placeholder=\"Name\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"colFormLabelSm\" class=\"col-form-label\">Email</label>\n        <div class=\"\">\n          <input type=\"email\" class=\"form-control form-control-sm usrInpt\" name='mail' [(ngModel)]='email' placeholder=\"Email\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"colFormLabelSm\" class=\"col-form-label col-form-label-sm\">Address</label>\n        <div class=\"\">\n          <input type=\"text\" class=\"form-control form-control-sm usrInpt\" name='addr' [(ngModel)]='address'  placeholder=\"Address\">\n        </div>\n      </div>\n      <button class=\"btn btn-success btn-block fntcss\" type=\"button\" (click)='userDetails(userName,email,address)' name=\"button\">Submit</button>\n    </form>\n  </div>\n  <div class=\"col\"></div>\n</div>\n<!-- Payables Details -->\n<div class=\"cstyle dataBox p-3\" *ngIf = \"model\">\n  <div class=\"row justify-content-around\">\n    <div class=\"col-4 mt-2\">\n      <h5>Name : {{name}}</h5>\n      <h5>Mobile : {{mobile}}</h5>\n    </div>\n    <div class=\"col-4 mt-2\" *ngIf = \"model\">\n      <h5>Balance Amount To Pay : {{model.balAmount}}</h5>\n    </div>\n  </div>\n  <div class=\"row mt-2\">\n    <!-- Table -->\n    <div class=\"col-md-12 col-sm-11 tableFlow\">\n      <table class=\"table table-bordered table-hover\">\n        <thead class=\"thead-light\">\n          <tr class=\"fntcss\">\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Date</th>\n            <th scope=\"col\">Invoice</th>\n            <th scope=\"col\">Amount</th>\n            <th scope=\"col\">PayOff</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"model && model.paybleReceivables\">\n          <tr *ngFor=\"let data of model.paybleReceivables;let i = index\">\n            <td>{{i+1}}</td>\n            <td>\n              {{data.date}}\n            </td>\n            <td>\n              {{data.invoiceNumber}}\n            </td>\n            <td>\n              {{data.amount}}\n            </td>\n            <td style=\"width:250px\">\n              <div class=\"input-group mb-3\">\n                <input  class=\"form-control fntcss\" placeholder=\"Amount\" [(ngModel)]=\"data.received\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-success \" (click)='payAmount(data)' type=\"button\">PayOff</button>\n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row mt-2\">\n    <div class=\"col\"></div>\n    <div class=\"col-12\">\n      <button class=\"btn btn-success fntcss btn-block\" type=\"button\" (click)=\"addNewFun()\" name=\"button\">Add New Payable</button>\n    </div>\n    <div class=\"col\"></div>\n  </div>\n  <hr>\n  <div class=\"row mt-2\" *ngIf=\"addNew\">\n    <div class=\"col\"></div>\n    <div class=\"col-8\">\n     <div class=\"input-group\">\n        <input  class=\"inps\" placeholder=\"Enter Invoice\" [(ngModel)]=\"newPayable.invoiceNumber\"><br><br>\n        <input  class=\"inps\" placeholder=\"Enter Amount\" [(ngModel)]=\"newPayable.amount\"><br><br>\n        <input  class=\"inps\" placeholder=\"Enter Description\" [(ngModel)]=\"newPayable.desc\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-success fntcss btn-block inps\" (click)='addPayable(newPayable)' type=\"button\">Submit</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\"></div>\n  </div>\n</div>\n"

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
        this.newPayable = { invoiceNumber: '', amount: '', desc: '', mobile: '' };
    }
    PayablesComponent.prototype.ngOnInit = function () {
    };
    PayablesComponent.prototype.verifyUser = function () {
        var _this = this;
        this._demoService.customerExist(this.mobile).subscribe(function (data) {
            if (data != null && Object.keys(data).length <= 0) {
                _this.userEntry = true;
            }
            else {
                _this.name = data[0].userName;
                _this.getPayablesData(_this.mobile);
            }
        }, function (error) {
            _this.toastr.info("Could Not Fetch Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    PayablesComponent.prototype.userDetails = function (name, mail, address) {
        var _this = this;
        this._demoService.createUser({ userName: this.userName, email: this.email, address: this.address, userMobile: this.mobile }).subscribe(function (data) {
            _this.userEntry = false;
            _this.model = true;
        }, function (error) {
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    PayablesComponent.prototype.receiveAmount = function (data) {
        var _this = this;
        var dataList = [];
        data.mobile = this.mobile;
        dataList.push(data);
        console.log(data);
        this.billingService.postReceivedAmount(data).subscribe(function (data) {
            if (data != null && Object.keys(data).length >= 0) {
                _this.toastr.success("", 'Success', { toastLife: '5000' });
                _this.model = data[0];
            }
            else {
                _this.toastr.error("No Records Found", 'Error', { toastLife: '5000' });
            }
        }, function (error) {
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    PayablesComponent.prototype.getPayablesData = function (mobile) {
        var _this = this;
        this.billingService.getPayables(mobile).subscribe(function (data) {
            console.log('getPayablesData:' + data);
            if (data != null && Object.keys(data).length >= 0) {
                _this.model = data[0];
            }
            else {
                _this.toastr.error("No Records Found", 'Error', { toastLife: '5000' });
            }
        }, function (error) {
            _this.toastr.error("Could Not Fetch Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    ;
    PayablesComponent.prototype.payAmount = function (data) {
        var _this = this;
        var dataList = [];
        data.mobile = this.mobile;
        dataList.push(data);
        console.log(data);
        this.billingService.postPayOffAmount(dataList).subscribe(function (data) {
            if (data != null && Object.keys(data).length >= 0) {
                _this.toastr.success("", 'Success', { toastLife: '5000' });
                _this.model = data[0];
            }
            else {
                _this.toastr.error("Something Went Wrong, Please Try Again ", 'Error', { toastLife: '5000' });
            }
        }, function (error) {
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    PayablesComponent.prototype.addPayable = function (data) {
        var _this = this;
        var dataList = [];
        data.mobile = this.mobile;
        dataList.push(data);
        console.log(data);
        this.billingService.addPayables(dataList).subscribe(function (data) {
            _this.newPayable = {};
            if (data != null && Object.keys(data).length >= 0) {
                _this.toastr.success("Saved successfully", 'Success', { toastLife: '5000' });
                _this.model = data[0];
            }
        }, function (error) {
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    PayablesComponent.prototype.addNewFun = function () {
        this.addNew = true;
    };
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

module.exports = ".cstyle{\r\n  background-color: #ffffff;\r\n  border-radius: 10px;\r\n  margin: 2px;\r\n}\r\n"

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

module.exports = ".cstyle{\r\n  background-color: #ffffff;\r\n  border-radius: 10px;\r\n  margin: 2px;\r\n}\r\n\r\n.inps{\r\n  width: 200px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/receivables/receivables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2>Receivables</h2>\n  </div>\n</div>\n<div class=\"row cstyle dataBox\" *ngIf = \"!model\">\n  <div class=\"col\"> </div>\n  <div class=\"col-md-5 col-sm-12\">\n    <div class=\"input-group col align-self-center\" style=\"margin-top:50px\" *ngIf='!userEntry'>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]='mobile' placeholder=\"Enter Mobile Number\" style=\"height:50px\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-success fntcss\" (click)=\"verifyUser()\" type=\"button\">Submit</button>\n      </div>\n    </div>\n    <form *ngIf='userEntry'>\n      <div class=\"form-group\">\n        <label  class=\"col-form-label\">Name</label>\n        <div class=\"\">\n          <input type=\"text\" class=\"form-control form-control-sm usrInpt\" name='username'  [(ngModel)]=\"userName\" placeholder=\"Name\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"colFormLabelSm\" class=\"col-form-label\">Email</label>\n        <div class=\"\">\n          <input type=\"email\" class=\"form-control form-control-sm usrInpt\" name='mail' [(ngModel)]='email' placeholder=\"Email\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"colFormLabelSm\" class=\"col-form-label col-form-label-sm\">Address</label>\n        <div class=\"\">\n          <input type=\"text\" class=\"form-control form-control-sm usrInpt\" name='addr' [(ngModel)]='address'  placeholder=\"Address\">\n        </div>\n      </div>\n      <button class=\"btn btn-success btn-block fntcss\" type=\"button\" (click)='userDetails(userName,email,address)' name=\"button\">Submit</button>\n    </form>\n  </div>\n  <div class=\"col\"></div>\n</div>\n<!-- Receivables Details -->\n<div class=\"cstyle dataBox p-3\" *ngIf = \"model\">\n  <div class=\"row justify-content-around\">\n    <div class=\"col-4 mt-2\">\n      <h5>Name : {{name}}</h5>\n      <h5>Mobile : {{mobile}}</h5>\n    </div>\n    <div class=\"col-4 mt-2\">\n      <h5>Balance Amount To Receive : {{model.balAmount}}</h5>\n    </div>\n  </div>\n  <div class=\"row mt-2\">\n    <!-- Table -->\n    <div class=\"col-md-12 col-sm-11 tableFlow\">\n      <table class=\"table table-bordered table-hover\" >\n        <thead class=\"thead-light\">\n          <tr class=\"fntcss\">\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Date</th>\n            <th scope=\"col\">Invoice</th>\n            <th scope=\"col\">Amount</th>\n            <th scope=\"col\">Receive</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"model && model.paybleReceivables\">\n          <tr *ngFor=\"let data of model.paybleReceivables;let i = index\">\n            <td>{{i+1}}</td>\n            <td>\n              {{data.date}}\n            </td>\n            <td>\n              {{data.invoiceNumber}}\n            </td>\n            <td>\n              {{data.amount}}\n            </td>\n            <td style=\"width:250px\">\n              <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Amount\" [(ngModel)]=\"data.received\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-success\" (click)='receiveAmount(data)' type=\"button\">Receive</button>\n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row mt-2\">\n    <div class=\"col\"></div>\n    <div class=\"col-12\">\n      <button type=\"button\" class=\"btn btn-success fntcss btn-block\" (click)=\"addNewFun()\" name=\"button\">Add New Receivable</button>\n    </div>\n    <div class=\"col\"></div>\n  </div>\n  <hr>\n  <div class=\"row mt-2\" *ngIf=\"addNew\">\n    <div class=\"col\"></div>\n    <div class=\"col-8\">\n    <div class=\"input-group\" >\n      <input type=\"text\"class=\"inps\" placeholder=\"Invoice\" [(ngModel)]=\"newReceivable.invoiceNumber\"><br><br>\n      <input type=\"text\" class=\"inps\" placeholder=\"Amount\" [(ngModel)]=\"newReceivable.amount\"><br><br>\n      <input type=\"text\" class=\"inps\" placeholder=\"Description\" [(ngModel)]=\"newReceivable.desc\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-success fntcss btn-block inps\" (click)='addReceivable(newReceivable)' type=\"button\">Submit</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col\"></div>\n</div>\n</div>\n"

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
        this.newReceivable = { invoiceNumber: '', amount: '', desc: '', mobile: '' };
    }
    ReceivablesComponent.prototype.ngOnInit = function () {
        //this.model = [{date:new Date(),invoice:123123,amount:4000,received:null},{data:new Date(),invoice:123123,amount:4000,received:null}];
    };
    ReceivablesComponent.prototype.verifyUser = function () {
        var _this = this;
        this._demoService.customerExist(this.mobile).subscribe(function (data) {
            if (data != null && Object.keys(data).length <= 0) {
                _this.userEntry = true;
            }
            else {
                _this.name = data[0].userName;
                _this.getReceivablesData(_this.mobile);
            }
        }, function (error) {
            _this.toastr.info("Could Not Fetch Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    ReceivablesComponent.prototype.userDetails = function (name, mail, address) {
        var _this = this;
        console.log(name);
        this._demoService.createUser({ userName: this.userName, email: this.email, address: this.address, userMobile: this.mobile }).subscribe(function (data) {
            _this.userEntry = false;
            _this.model = true;
        }, function (error) {
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    ReceivablesComponent.prototype.receiveAmount = function (data) {
        var _this = this;
        var dataList = [];
        data.mobile = this.mobile;
        dataList.push(data);
        console.log(data);
        this.billingService.postReceivedAmount(dataList).subscribe(function (data) {
            if (data != null && Object.keys(data).length >= 0) {
                _this.toastr.success("", 'Success', { toastLife: '5000' });
                _this.model = data[0];
            }
            else {
                _this.toastr.error("No Records Found", 'Error', { toastLife: '5000' });
            }
        }, function (error) {
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    ReceivablesComponent.prototype.addReceivable = function (data) {
        var _this = this;
        var dataList = [];
        data.mobile = this.mobile;
        dataList.push(data);
        console.log(data);
        this.billingService.addReceivables(dataList).subscribe(function (data) {
            _this.newReceivable = {};
            _this.model = data[0];
            _this.toastr.success("Saved successfully", 'Success', { toastLife: '5000' });
        }, function (error) {
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    ReceivablesComponent.prototype.getReceivablesData = function (mobile) {
        var _this = this;
        this.billingService.getReceivables(mobile).subscribe(function (data) {
            console.log(data);
            if (data != null && Object.keys(data).length >= 0) {
                _this.model = data[0];
            }
            else {
                _this.toastr.error("No Records Found", 'Error', { toastLife: '5000' });
            }
        }, function (error) {
            _this.toastr.error("Could Not Fetch Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    ;
    ReceivablesComponent.prototype.addNewFun = function () {
        this.addNew = true;
    };
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

/***/ "./src/app/rewards/rewards.component.css":
/***/ (function(module, exports) {

module.exports = ".rewardAmount{\r\n  width: 50px;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 24px;\r\n  margin: 0px;\r\n}\r\n\r\n.switch input {display:none;}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 16px;\r\n  width: 16px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #2196F3;\r\n}\r\n\r\ninput:focus + .slider {\r\n  -webkit-box-shadow: 0 0 1px #2196F3;\r\n          box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(16px);\r\n  transform: translateX(16px);\r\n}\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.listcss{\r\n    width: 254px;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    border-radius: 50px;\r\n    background-color: #E9ECEF;\r\n}\r\n"

/***/ }),

/***/ "./src/app/rewards/rewards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2> My BusinessPlan </h2>\n  </div>\n</div>\n<div class=\"row justify-content-center\">\n  <ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <span class=\"nav-link listcss active\" id=\"nav-home-tab\" data-toggle=\"tab\" routerLink=\"/userData/businessPlan\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Rewards</span>\n  </li>\n  <li class=\"nav-item\">\n    <span class=\"nav-link listcss \" id=\"nav-profile-tab\" data-toggle=\"tab\" routerLink=\"/userData/discounts\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Discounts</span>\n  </li>\n  <li class=\"nav-item \">\n    <span class=\"nav-link listcss\" id=\"nav-contact-tab\" data-toggle=\"tab\"routerLink=\"/userData/invoiceTemplate\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Invoice</span>\n  </li>\n</ul>\n</div>\n  <div class=\"row cstyle pt-2\">\n  <div class=\"col-4\"></div>\n    <div class=\"col-3\">\n      <h4>My Reward System</h4>\n    </div>\n    <div class=\"col-2\">\n      <label class=\"switch\">\n        <input type=\"checkbox\" [(ngModel)]='rewards.enable'>\n        <span class=\"slider round\"></span>\n      </label>\n    </div>\n    <div class=\"col\"></div>\n  </div>\n\n  <div class=\"row cstyle pt-2\">\n      <div class=\"col\"></div>\n      <div class=\"panel panel-info col-md-12\">\n           <div class=\"panel-body\">\n             <div class=\"\">\n             <dl>\n                <dt class=\"\"> <h5 style=\"color:red\">1.Rewards Points Value</h5> </dt>\n                <dd>\n                  <span>\n                    Rewards effective amount-<input class=\"rewardAmount\" [(ngModel)]='rewards.effectiveAmount' />\n                    cash value of <input class=\"rewardAmount\" [(ngModel)]='rewards.cashValue' /> rupees = <b>1 Reward</b>\n                  </span>\n                  <label class=\"switch\">\n                     <input type=\"checkbox\" [(ngModel)]='rewards.rewardPointEnable'>\n                     <span class=\"slider round\"></span>\n                   </label>\n                  </dd>\n                  <br>\n                  <dt>\n                    Start Date: <input type=\"date\"  [(ngModel)]='rewards.rewardStartDate'/>\n                    End Date:  <input type=\"date\"  [(ngModel)]='rewards.rewardEndDate'/>\n                  </dt>\n\n              </dl>\n              </div>\n\n              <hr>\n\n              <div class=\"\">\n              <dl>\n                 <dt> <h5 style=\"color:red\">2.Sign Up Bonus Reward Points</h5> </dt>\n                 <dd>\n                   <span>\n                    New customer welcome points <input class=\"rewardAmount\" [(ngModel)]='rewards.bonusPoints' />\n                    </span>\n                   </dd>\n                   <br>\n                   <dt>\n                     Start Date: <input type=\"date\"  [(ngModel)]='rewards.bonusStartDate'/>\n                     End Date:  <input type=\"date\"  [(ngModel)]='rewards.bonusEndDate'/>\n                     <label class=\"switch\">\n                        <input type=\"checkbox\"  [(ngModel)]='rewards.bonusPointEnale'>\n                        <span class=\"slider round\"></span>\n                      </label>\n                   </dt>\n               </dl>\n             </div>\n           </div>\n      <button class=\"btn btn-success btn-block fntcss\"type=\"button\" (click)='saveReward(rewards)' name=\"button\">Save</button>\n      </div>\n      <div class=\"col\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/rewards/rewards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__billing_service__ = __webpack_require__("./src/app/billing.service.ts");
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



var RewardsComponent = /** @class */ (function () {
    function RewardsComponent(_billingService, toastr) {
        this._billingService = _billingService;
        this.toastr = toastr;
        this.rewards = {
            enable: false, rewardPointEnable: false, bonusPointEnale: false,
            effectiveAmount: '', cashValue: '', bonusPoints: '',
            rewardStartDate: '', rewardEndDate: '', bonusStartDate: '', bonusEndDate: ''
        };
    }
    RewardsComponent.prototype.ngOnInit = function () {
        this.getReward(); // function call to fetch the data
    };
    //on save function call
    RewardsComponent.prototype.saveReward = function (data) {
        this.addingReward(data); // function call to save the data
    };
    // function call to save the data
    RewardsComponent.prototype.addingReward = function (rewardsData) {
        var _this = this;
        console.log(rewardsData);
        //calling addReward method which is inside the billing.service to save the rewards data
        this._billingService.addReward(rewardsData).subscribe(function (data) {
            console.log('success::' + data);
            _this.toastr.success("Saved successfully", 'Success', { toastLife: '5000' });
        }, function (error) {
            _this.toastr.error("Could Not Save Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    ;
    // function call to get the Reward data
    RewardsComponent.prototype.getReward = function () {
        var _this = this;
        //calling getReward method which is inside the billing.service to fetch the rewards data
        this._billingService.getReward().subscribe(function (data) {
            console.log('success::' + data);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__billing_service__["a" /* BillingService */], __WEBPACK_IMPORTED_MODULE_2_ng5_toastr_ng5_toastr__["ToastsManager"]])
    ], RewardsComponent);
    return RewardsComponent;
}());



/***/ }),

/***/ "./src/app/sales-report/sales-report.component.css":
/***/ (function(module, exports) {

module.exports = ".cstyle{\r\n  background-color: #ffffff;\r\n  border-radius: 10px;\r\n  margin: 2px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/sales-report/sales-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row cstyle justify-content-center\">\n <div class=\"\">\n   <h2>Sales Report</h2>\n  </div>\n</div>\n  <div class=\"row cstyle\">\n    <div class=\"col-md-3 my-3\">\n        <label>Start Date:</label>\n       <input type=\"date\"  [(ngModel)]='startDate'/>\n    </div>\n    <div class=\"col-md-3 my-3\">\n      <label>End Date:</label>\n     <input type=\"date\"  [(ngModel)]='endDate'/></div>\n  </div>\n<div class=\"row cstyle\">\n  <div class=\"col-md-2\" >\n    <div class=\"list-group\">\n      <button type=\"button\" class=\"list-group-item list-group-item-action font-weight-bold font-italic\" (click)=\"request('getUserDetails','report')\">Customer List</button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action font-weight-bold font-italic\" (click)=\"request('getTopCustomer','topCustomer')\">Top Customer's\n      </button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action font-weight-bold font-italic\" (click)=\"request('payable','payable_receivable')\">Payable List</button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action font-weight-bold font-italic\" (click)=\"request('receivable','payable_receivable')\">Receivable List</button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action font-weight-bold font-italic\" (click)=\"request('getInvoice','invoiceData')\">Invoice List</button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action font-weight-bold font-italic\" (click)=\"request('getTickets','tickets')\">Raised Tickets</button>\n    </div>\n  </div>\n  <div class=\"col-md-10 tableFlow\">\n  <table class=\"table table-hover\" *ngIf=\"report\">\n  <thead>\n    <tr class=\"fntcss\">\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">Mobile</th>\n    </tr>\n  </thead>\n  <tbody>\n     <tr *ngFor=\"let data of report;let i = index\">\n      <td>{{i+1}}</td>\n      <td>{{data.userName}}</td>\n      <td>{{data.email}}</td>\n      <td>{{data.userMobile}}</td>\n    </tr>\n  </tbody>\n  </table>\n\n  <table class=\"table table-hover\" *ngIf=\"payable_receivable\">\n  <thead>\n    <tr class=\"fntcss\">\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Invoice</th>\n      <th scope=\"col\">Mobile</th>\n      <th scope=\"col\">Amount</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of payable_receivable;let i = index\">\n      <td>{{i+1}}</td>\n      <td>{{data.invoiceNumber}}</td>\n      <td>{{data.mobile}}</td>\n      <td>{{data.amount}}</td>\n    </tr>\n  </tbody>\n  </table>\n\n  <table class=\"table table-hover\" *ngIf=\"tickets\">\n  <thead>\n    <tr class=\"fntcss\">\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Ticket Id</th>\n      <th scope=\"col\">Subject</th>\n      <th scope=\"col\">Description</th>\n      <th scope=\"col\">Created Date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of tickets;let i = index\">\n      <td>{{i+1}}</td>\n      <td>{{data.ticketId}}</td>\n      <td>{{data.subject}}</td>\n      <td>{{data.description}}</td>\n      <td>{{data.createDate}}</td>\n    </tr>\n  </tbody>\n  </table>\n\n  <table class=\"table table-hover\" *ngIf=\"invoiceData\">\n  <thead>\n    <tr class=\"fntcss\">\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Invoice Id</th>\n      <th scope=\"col\">Total</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Mobile</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of invoiceData;let i = index\">\n      <td>{{i+1}}</td>\n      <td>{{data.invId}}</td>\n      <td>{{data.total}}</td>\n      <td>{{data.userName}}</td>\n      <td>{{data.userMobile}}</td>\n    </tr>\n  </tbody>\n  </table>\n\n  <span *ngIf=\"topCustomer\"> Number Of Records:<input type=\"number\" [(ngModel)]=\"topCustomerRecords\"  placeholder=\"No of records\" style=\"width:50px\"></span>\n  <table class=\"table table-hover\" *ngIf=\"topCustomer\">\n  <thead>\n    <tr class=\"fntcss\">\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Mobile</th>\n      <th scope=\"col\">BV</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of topCustomer | slice:0:topCustomerRecords;let i = index\">\n      <td>{{i+1}}</td>\n      <td>{{data.userName}}</td>\n      <td>{{data.userMobile}}</td>\n      <td>{{data.bv}}</td>\n    </tr>\n  </tbody>\n  </table>\n  </div>\n</div>\n"

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
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatTableDataSource */]();
        this.displayedColumns = ['no', 'name', 'mobile', 'total'];
    }
    SalesReportComponent.prototype.ngOnInit = function () {
    };
    SalesReportComponent.prototype.ngAfterViewInit = function () {
        //this.dataSource.paginator = this.paginator;
    };
    SalesReportComponent.prototype.request = function (type, val) {
        var _this = this;
        var obj = { value: type, startDate: this.startDate, endDate: this.endDate };
        this.report = this.payable_receivable = this.tickets = this.topCustomer = this.invoiceData = "";
        this._demoService.requestReport(obj, type).subscribe(function (data) {
            console.log(data);
            _this[val] = data;
            _this.toastr.success("", 'success', { toastLife: '5000' });
        }, function (error) {
            _this.toastr.error("Could Not fetch Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    }; // end of request
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatPaginator */])
    ], SalesReportComponent.prototype, "paginator", void 0);
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

module.exports = ".inputStyle{\r\n  width: 100px;\r\n}\r\n.fixWidth{\r\n  width: 50px;\r\n}\r\n.cstyle{\r\n  background-color: #ffffff;\r\n  border-radius: 10px;\r\n  margin: 2px;\r\n}\r\n.thsize{\r\n  width: 180px;\r\n}\r\n.tablecss{\r\n  font-size: 20px;\r\n  width: 150px;\r\n  height: 32px;\r\n  font-weight: bold;\r\n}\r\n.usrInpt{\r\n  height: 40px;\r\n}\r\n.mrglv{\r\n  margin-left: 34px;\r\n}\r\n.indx{\r\n  width: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/select-invoice/select-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row cstyle justify-content-center\">\n   <div class=\"\">\n     <h2>Invoice</h2>\n    </div>\n  </div>\n<div class=\"row cstyle dataBox\" *ngIf='!invoice'>\n  <div class=\"col\"> </div>\n  <div class=\"col-md-5 col-sm-12\">\n    <div class=\"input-group col align-self-center\" style=\"margin-top:50px\" *ngIf='!userEntry'>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]='mobile' placeholder=\"Enter Mobile Number\" style=\"height:50px\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-success fntcss\" (click)=\"verifyUser()\" type=\"button\">Submit</button>\n      </div>\n    </div>\n    <form *ngIf='userEntry'>\n      <div class=\"form-group\">\n        <label  class=\"col-form-label\">Name</label>\n        <div class=\"\">\n          <input type=\"text\" class=\"form-control form-control-sm usrInpt\" name='username'  [(ngModel)]=\"userName\" placeholder=\"Name\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"colFormLabelSm\" class=\"col-form-label\">Email</label>\n        <div class=\"\">\n          <input type=\"email\" class=\"form-control form-control-sm usrInpt\" name='mail' [(ngModel)]='email' placeholder=\"Email\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"colFormLabelSm\" class=\"col-form-label col-form-label-sm\">Address</label>\n        <div class=\"\">\n          <input type=\"text\" class=\"form-control form-control-sm usrInpt\" name='addr' [(ngModel)]='address'  placeholder=\"Address\">\n        </div>\n      </div>\n      <button class=\"btn btn-success btn-block fntcss\" type=\"button\" (click)='userDetails(userName,email,address)' name=\"button\">Submit</button>\n    </form>\n  </div>\n  <div class=\"col\"></div>\n</div>\n\n<div class=\"row cstyle dataBox\"  *ngIf='invoice'>\n<!--generated invoice  -->\n<div class=\"invoiceCreation container\" >\n  <div class=\"row\">\n    <div class=\"col-sm\" [hidden]='InvGen'>\n      <h5>{{userName | uppercase}}</h5>\n      <h5>{{mobile}}</h5>\n      <h5>{{email}}</h5>\n      <h5>{{address}}</h5>\n    </div>\n    <div class=\"col-sm\">\n      <img src={{imageUrl()}}  style=\"width:100px;height:100px;border-radius:50px\">\n    </div>\n    <div class=\"col-sm\" [hidden]='InvGen'>\n      <h5>Total BV = {{BV}}</h5>\n      <h5>Total Points = {{rewardPoints}}</h5>\n    </div>\n  </div><br>\n  <div class=\"row\">\n    <div class=\" col-md-12\" style=\"overflow:auto;max-height:300px\">\n    <table class=\"table\">\n    <thead class=\"thead-light fntcss\">\n      <tr>\n        <th>#</th>\n        <th>Item Name</th>\n        <th>Quantity</th>\n        <th>Rate</th>\n        <th>Total Amount</th>\n        <th>\n          <button type=\"button\"  (click)='addRow(0)' class=\"btn btn-success btn-sm\">\n          <span>+</span>\n          </button>\n      </th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of invoiceList;let i = index; let lastEl = last; let firstEl = first\">\n        <td class=\"indx\">{{i+1}}</td>\n        <td class=\"tablecss\">\n          <select [(ngModel)]='invoiceList[i].item' [disabled]='InvGen' class=\"tablecss\" style=\"width:200px;\">\n              <option *ngFor=\"let item of items\" value={{item}}>\n                  {{item}}\n              </option>\n          </select>\n        </td>\n        <td class=\"tablecss\">\n          <input class=\"tablecss\"  type=\"number\" min=\"0\" (blur)='calcTotal()' [(ngModel)]='invoiceList[i].quantity' [disabled]='InvGen'/>\n        </td>\n        <td class=\"tablecss\">\n          <input class=\"tablecss\"  type=\"number\" min=\"0\" (blur)='calcTotal()' [(ngModel)]='invoiceList[i].rate' [disabled]='InvGen'/>\n        </td>\n        <td class=\"tablecss\">\n          <input class=\"tablecss\" readonly value=\"{{invoiceList[i].rate  * invoiceList[i].quantity | currency:'RS '}}\"  [disabled]='InvGen'>\n        </td>\n        <td *ngIf='!firstEl'  [hidden]='InvGen'>\n          <button type=\"button\"   (click)='deleteRow(i)' class=\"btn btn-danger btn-sm\">\n            <span>-</span>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-md-4 col-sm-6\">\n    <h5>Discount : <input  class=\"fixWidth\"  (blur)='calcTotal()' [(ngModel)]='discounts' [disabled]='InvGen' />%</h5>\n    <h5>Rewards : <input   class=\"fixWidth\"  (blur)='calcTotal()' [(ngModel)]='rewards' [disabled]='InvGen' /></h5>\n    <h5>Credit : <input  class=\"fixWidth\"  [(ngModel)]='credit'  [disabled]='InvGen' style=\"margin-left:19px;\"/></h5>\n  </div>\n  <div class=\"col-md-4\">\n  </div>\n  <div class=\"col-md-4 col-sm-6\">\n    <h5>SubTotal :<span class=\"mrglv\" style=\"margin-left:0px\"> {{subTotal}}</span></h5>\n    <h5>GST :<span class=\"mrglv\" style=\"margin-left:34px\"> <input class=\"fixWidth\"  (blur)='calcTotal()' [(ngModel)]='gst' [disabled]='InvGen' />%</span></h5>\n    <h5>Total :<span class=\"mrglv\" style=\"margin-left:32px\"> {{total}}</span></h5>\n    <h5>Paid :<span class=\"mrglv\" style=\"margin-left:37px\"> {{total - credit}}</span></h5>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col align-self-center\" [hidden]=\"InvGen\">\n    <button type=\"button\" name=\"button\"  class=\"btn btn-block btn-success fntcss\" (click)=\"submitInvoice()\">Submit</button>\n  </div>\n  <div class=\"col align-self-center\" [hidden]=\"!InvGen\">\n    <button type=\"button\" name=\"button\"  class=\"btn btn-block btn-primary fntcss\">Generate Invoice</button>\n  </div>\n</div>\n</div>\n</div>\n"

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
    function SelectInvoiceComponent(_demoService, _billingService, toastr) {
        this._demoService = _demoService;
        this._billingService = _billingService;
        this.toastr = toastr;
    }
    SelectInvoiceComponent.prototype.ngOnInit = function () {
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
    SelectInvoiceComponent.prototype.calcTotal = function (r) {
        var _this = this;
        console.log('inn');
        this.total = this.subTotal = 0;
        this.invoiceList.forEach(function (value) {
            if (value.rate != null && value.quantity != null) {
                _this.subTotal += value.rate * value.quantity;
            }
            ;
        });
        this.total = this.subTotal - this.rewards - (this.subTotal * ((this.discounts) / 100));
        this.total = this.total + (this.total * (this.gst / 100));
        this.applyDiscount(this.discountList, this.total);
    };
    SelectInvoiceComponent.prototype.applyDiscount = function (data, total) {
        var _this = this;
        if (data && data.length > 0) {
            data.forEach(function (val) {
                if (total <= val.maxAmount && total >= val.minAmount) {
                    _this.discounts = val.discount;
                }
            });
        }
    };
    SelectInvoiceComponent.prototype.verifyUser = function () {
        var _this = this;
        this._demoService.customerExist(this.mobile).subscribe(function (data) {
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
            }
        }, function (error) {
            console.log("ERROR: Could not connect!!");
            _this.toastr.info("Could Not Fetch Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    SelectInvoiceComponent.prototype.userDetails = function () {
        var _this = this;
        console.log(name);
        this._demoService.createUser({ userName: this.userName, email: this.email, address: this.address, userMobile: this.mobile }).subscribe(function (data) {
            console.log(data);
            _this.invoice = true;
            _this.userName = data[0].userName;
            _this.email = data[0].email;
            _this.address = data[0].address;
            _this.BV = data[0].businessVolume;
            _this.rewardPoints = data[0].rewardPoints;
            _this.discountList = data[0].discounts;
        }, function (error) {
            console.log('failed to add');
            _this.toastr.error("Could Not Add Data!! Try Again..", 'Error', { toastLife: '5000' });
        });
    };
    SelectInvoiceComponent.prototype.submitInvoice = function () {
        var _this = this;
        var generateInvoice = {
            userName: this.userName, userMobile: this.mobile, total: this.total,
            subTotal: this.subTotal, rewards: this.rewards, discount: this.discounts,
            credit: this.credit, invoiceDetail: this.invoiceList
        };
        console.log(generateInvoice);
        this._billingService.addInvoice(generateInvoice).subscribe(function (data) {
            console.log(data);
            if (data != null) {
                _this.invoiceid = data[0].invId;
                _this.InvGen = true;
            }
            else {
                _this.invoice = _this.userEntry = false;
            }
        }, function (error) {
            console.log('could not create Invoice! try again!!');
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

module.exports = "/* #circle {\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tbackground: red;\r\n\t-moz-border-radius: 50px;\r\n\t-webkit-border-radius: 50px;\r\n\tborder-radius: 50px;\r\n} */\r\n#circle {\r\n  width: 200px;\r\n\theight: 100px;\r\n\tbackground: #f8f8;\r\n}\r\n.rad{\r\n  border-radius: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/select-login-type/select-login-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row align-items-center\" style=\"margin:50px\">\r\n  <div class=\"col\" style=\"margin-top:80px\">\r\n    <button type=\"button\" (click)=\"selectUser('business')\" [routerLink]=\"['/signIn']\" class=\"btn btn-primary btn-lg btn-block rad\"><h1>Business LogIn</h1></button>\r\n  <hr>\r\n    <button type=\"button\" (click)=\"selectUser('individual')\" class=\"btn  btn-primary btn-lg btn-block rad\"><h1>Individual LogIn</h1></button>\r\n  </div>\r\n</div>\r\n</div>\r\n"

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

module.exports = ".signIn{\r\n  width: 40%;\r\n  height: auto;\r\n  background-color: #ffffff;\r\n  border-radius: 10px;\r\n  border: 1px solid;\r\n   -webkit-box-shadow: 5px 10px #888888;\r\n           box-shadow: 5px 10px #888888;\r\n  margin-top: 10%;\r\n\t-webkit-box-shadow: 0 10px 6px -6px #777;\r\n\t box-shadow: 0 10px 6px -6px #777;\r\n   word-wrap: break-word;\r\n }\r\n\r\n.btnStyle{\r\n  width: 230px;\r\n}\r\n\r\n.login-form{\r\n  margin: 20px;\r\n}\r\n\r\n.forgotPwd:hover{\r\n  cursor: pointer;\r\n  color: #1b69b6;\r\n  text-decoration:underline;\r\n}\r\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid signIn center20\">\n\t<div [hidden]=\"submitted\">\n\t\t<h1>Log In</h1>\n\t\t<form (ngSubmit)=\"onSubmit(); signin.reset()\" #signin=\"ngForm\" class=\"login-form\">\n\t\t\t<div *ngIf='loginFail' class=\"alert alert-danger\" (click)=\"loginFail = false\">\n\t\t\t\t<strong>Invalid mobile or password</strong>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"name\">Mobile</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"mobile\"\n               required (blur)=\"validation()\"\n               [(ngModel)]=\"model.mobile\" name=\"mobile\"\n               #mobile=\"ngModel\"/>\n\t\t\t\t<div [hidden]=\"mobile.valid || mobile.pristine\"\n             class=\"alert alert-danger\">\n           Mobile Number is required\n        </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"name\">Password</label>\n\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\"\n               required\n               [(ngModel)]=\"model.password\" name=\"password\"\n               #password=\"ngModel\" />\n\t\t\t\t<div [hidden]=\"password.valid || password.pristine\"\n             class=\"alert alert-danger\">\n          Password is required\n        </div>\n\t\t\t</div>\n\t\t<div class=\"row  justify-content-between\">\n\t\t\t<div class=\"col-6\">\n\t\t\t<button  type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"!signin.form.valid\" >Log In</button>\n\t\t</div>\n\t\t<div class=\"col-6\">\n\t\t\t<button  type=\"button\" class=\"btn btn-primary btn-block \" *ngIf=\"userType == 'business'\" routerLink=\"/signUp\">Register</button>\n\t\t\t<button  type=\"button\" class=\"btn btn-primary btn-block \" *ngIf=\"userType == 'individual'\" routerLink=\"/IndividualReg\">Register</button>\n\t\t</div>\n\t\t</div>\n\n<div>\n\t<div class=\"row justify-content-between\">\n\t <div class=\"col-4\">\n\t\t <label><input #rememberVal type=\"checkbox\" name=\"rememberMe\" value=\"true\" [(ngModel)]=\"rememberMe\"> Remember Me</label>\n\t </div>\n\t <div class=\"col-5\">\n\t\t <label class='forgotPwd' data-toggle=\"modal\" data-target=\"#myModal\">Forgot your password?</label>\n\t </div>\n </div>\n</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n<br>\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\" >\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n\t\t\t\t<br><br>\n        <div class=\"modal-header\">\n\t\t\t\t\t  <h2 class=\"modal-title\">Reset Password</h2>\n          <button type=\"button\" class=\"close\" id=\"modalWindow\" data-dismiss=\"modal\" #closeAddExpenseModal >&times;</button>\n        </div>\n        <div class=\"modal-body\">\n\t\t\t\t\t<form (ngSubmit)=\"sendOtp();\" #otp=\"ngForm\" class=\"otp-form\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"mobileNum\">Enter Mobile Number:</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"mobileNum\"\n\t\t               required  pattern=\"[0-9][0-9]{9}\"\n\t\t               [(ngModel)]=\"mobileNumVal\" name=\"mobileNum\"\n\t\t               #mobileNum=\"ngModel\"/>\n\t\t\t\t\t\t<div [hidden]=\"mobileNum.valid || mobileNum.pristine\"\n\t\t             class=\"alert alert-danger\">\n\t\t           Enter valid mobile number\n\t\t        </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button  type=\"submit\" class=\"btn btn-primary btn-md\" [disabled]=\"!otp.form.valid\">Send OTP</button>\n\n\t\t\t\t</form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
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
        this.pattern_mobile = /([0-9]){10}/g;
    }
    SignInComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._demoService.userTypeVal.subscribe(function (userType) { return _this.userType = userType; });
        this._demoService.cast.subscribe(function (messageSource) { return _this.messageSource = messageSource; });
        console.log('message::' + this.messageSource);
        this.allCookies = this.cookieService.getAll();
        console.log(this.allCookies);
        if (this.allCookies && this.allCookies.rememberMeVal == 'TRUE') {
            this.model.mobile = this.allCookies.mobile;
            this.model.password = this.allCookies.pswd;
            this.rememberMe = true;
        }
        ;
    };
    ;
    SignInComponent.prototype.onSubmit = function () {
        console.log(this.model);
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
        console.log(this.mobileNumVal);
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
        this._demoService.logInUser(JsonData, type).subscribe(function (data) {
            if (data == true) {
                console.log(data);
                console.log("valid user!");
                if (type == 'business') {
                    _this.showProfile = true;
                    _this.submitted = true;
                    _this._demoService.changeProfile('true');
                    _this.router.navigate(['/', 'userData']);
                }
                else if (type == 'individual') {
                    _this._demoService.changeindProfile('true');
                    _this.router.navigate(['/', 'individualDetails']);
                }
                return true;
            }
            else {
                console.error("not registered!");
                _this.loginFail = true;
            }
        }, function (error) {
            console.error("not registered!");
            _this.loginFail = true;
            //this._demoService.changeProfile('true')
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignInComponent.prototype.validation = function () {
        console.log("in validation method:");
        if (!this.pattern_mobile.test(this.model.mobile)) {
            this.toastr.error("Please enter valid mobile number", 'Error', [{ dismiss: 'click' }, { maxShown: '1' }]);
            this.model.mobile = '';
        }
        else {
            this.toastr.clearAllToasts();
        }
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__("./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_5_ng5_toastr_ng5_toastr__["ToastsManager"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".signUp{\r\n  /* width: auto; */\r\n  /* background: linear-gradient(green, yellow, green); */\r\n  background-color: #ffffff;\r\n  border-radius: 10px;\r\n  border: 1px solid;\r\n   -webkit-box-shadow: 5px 10px #888888;\r\n           box-shadow: 5px 10px #888888;\r\n  margin-top: 10px;\r\n\t-webkit-box-shadow: 0 10px 6px -6px #777;\r\n\t box-shadow: 0 10px 6px -6px #777;\r\n }\r\n .signup-form{\r\n   margin: 20px;\r\n }\r\n .flexDiv{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n .flex-item{\r\n  width: 25%\r\n}\r\n .flex-item-middle{\r\n  margin: 0 5px;\r\n}\r\n .dropdown-flex{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n .dropdown-category{\r\n  width: 45%;\r\n}\r\n .dropdown-register{\r\n  margin-left: 10%;\r\n  width: 45%;\r\n}\r\n .flex-item-getAdd{\r\n  margin-top: 25px;\r\n  width:30%\r\n}\r\n .flex-item-buAdd{\r\n  width: 70%\r\n}\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\" *ngIf ='!showbusinessList &&   this.businessEditableForm'>\n  <button type=\"button\"  class=\"btn btn-primary\" name=\"button\" (click)=\"showbusinessList = true\">Show List</button>\n</div>\n<div  *ngIf ='showbusinessList'>\n  <h2>Business List</h2>\n<ul class=\"list-group\" >\n  <li class=\"list-group-item\" *ngFor=\"let item of businessList.businessDetails; let indexVal=index \" (click)='viewBusinessDetails(indexVal)'>{{item.companyName}}</li>\n</ul>\n</div>\n\n<div class=\"row justify-content-center\">\n<div class=\"signUp col-6\" *ngIf ='!showbusinessList'>\n   <div [hidden]=\"submitted\">\n      <h1>{{formTitle}}</h1>\n      <form (ngSubmit)=\"onSubmit(); signup.reset()\" #signup=\"ngForm\" class=\"signup-form\">\n        <div *ngIf='registrationFailed' class=\"alert alert-danger\" (click)=\"registrationFailed = null\">\n  \t\t\t\t<strong>{{registrationFailed}}</strong>\n  \t\t\t</div>\n      <div class=\"form-group\">\n         <label for=\"name\">Company Name / Business name</label>\n         <input type=\"text\" class=\"form-control\" id=\"name\"\n         required\n         [(ngModel)]=\"model.businessDetails[0].companyName\" name=\"name\"\n         #name=\"ngModel\"/>\n         <div [hidden]=\"name.valid || name.pristine\"\n            class=\"alert alert-danger\">\n            Company Name / Business name is required\n         </div>\n      </div>\n      <div class=\"form-group\" *ngIf='!addNew'>\n         <label for=\"name\">Owner / Manager name</label>\n         <input type=\"text\" class=\"form-control\" id=\"ownername\"\n         required\n         [(ngModel)]=\"model.ownerName\" name=\"ownername\"\n         #ownername=\"ngModel\" />\n         <div [hidden]=\"ownername.valid || ownername.pristine\"\n            class=\"alert alert-danger\">\n            Owner / Manager name is required\n         </div>\n      </div>\n      <div class=\"form-group\" *ngIf='!addNew'>\n         <label for=\"name\">Mobile number</label>\n         <input type=\"text\" class=\"form-control\"\n         required [readonly]=\"businessEditableForm\"\n         (keyup.enter)=\"doesUserExist(mobile.value);\"\n         (change)=\"doesUserExist(mobile.value);validation('pattern_mobile',mobile.value)\"\n         [(ngModel)]=\"model.mobile\" name=\"mobile\"\n         #mobile=\"ngModel\"/>\n         <div [hidden]=\"mobile.valid || mobile.pristine\"\n            class=\"alert alert-danger\">\n            <span *ngIf='!mobilecheck'>mobile number is required</span>\n                  <span *ngIf='mobilecheck'>mobile number already exist</span>\n         </div>\n      </div>\n      <div class=\"form-group\" *ngIf='!addNew'>\n         <label for=\"name\">Password</label>\n         <input type=\"password\" class=\"form-control\" id=\"password\" [readonly]=\"businessEditableForm\"\n         required   (change)=\"validation('pattern_password',password.value)\"\n         [(ngModel)]=\"model.password\" name=\"password\" placeholder=\"Min 6 Characters\"\n         #password=\"ngModel\"/>\n         <div [hidden]=\"password.valid || password.pristine\"\n            class=\"alert alert-danger\">\n            password is required\n         </div>\n      </div>\n      <div class=\"form-group\" *ngIf='!addNew'>\n         <label for=\"alterEgo\">Email address</label>\n         <input type=\"text\" class=\"form-control\" id=\"email\" [readonly]=\"businessEditableForm\"\n         (change)=\"validation('pattern_email',email.value)\" required\n         [(ngModel)]=\"model.email\" #email=\"ngModel\" name=\"alterEgo\">\n         <div [hidden]=\"email.valid || email.pristine\"\n            class=\"alert alert-danger\">\n            Email is required\n         </div>\n      </div>\n      <div class=\"form-group\">\n         <label for=\"name\">Business address</label>\n         <input type=\"text\" class=\"form-control\" id=\"businessAddr\"\n         required\n         [(ngModel)]=\"model.businessDetails[0].businessAddress\" name=\"businessAddr\"\n         #businessAddr=\"ngModel\"/>\n         <div [hidden]=\"businessAddr.valid || businessAddr.pristine\"\n            class=\"alert alert-danger\">\n            Business Address is required\n         </div>\n      </div>\n      <div  class=\"flexDiv\">\n      <div class=\"form-group flex-item-buAdd\">\n         <label for=\"name\">PIN Code</label>\n         <input type=\"text\" class=\"form-control\" id=\"pin\"\n         required  (change)=\"validation('pattern_pinCode',pin.value)\"\n         [(ngModel)]=\"model.businessDetails[0].pinCode\" name=\"pin\"\n         #pin=\"ngModel\"/>\n         <div [hidden]=\"pin.valid || pin.pristine\"\n            class=\"alert alert-danger\">\n            PIN Code is required\n         </div>\n      </div>\n      <div  class=\"form-group flex-item-getAdd\">\n          <button type=\"button\" class=\"btn btn-success btn-block\"\n          [disabled]=\"!model.businessDetails[0].pinCode\"\n          (click)=\"update(pin.value)\">\n          Get Location\n        </button>\n      </div>\n    </div>\n      <div *ngIf=\"showAddr && model.businessDetails[0].pinCode\" class=\"flexDiv\">\n         <div class=\"form-group flex-item\">\n            <label for=\"city\">City</label>\n            <input type=\"text\" class=\"form-control\" id=\"city\" required\n            [(ngModel)]=\"model.businessDetails[0].city\" name=\"city\" #city=\"ngModel\"/>\n            <div [hidden]=\"city.valid || city.pristine\"\n               class=\"alert alert-danger\">\n               City is required\n            </div>\n         </div>\n         <div class=\"form-group flex-item flex-item-middle\">\n            <label for=\"state\">State</label>\n            <input type=\"text\" class=\"form-control\" id=\"state\" required\n            [(ngModel)]=\"model.businessDetails[0].state\" name=\"state\" #state=\"ngModel\"/>\n            <div [hidden]=\"state.valid || state.pristine\"\n               class=\"alert alert-danger\">\n               State is required\n            </div>\n         </div>\n         <div class=\"form-group flex-item\">\n            <label for=\"country\">Country</label>\n            <input type=\"text\" class=\"form-control\" id=\"country\" required\n            [(ngModel)]=\"model.businessDetails[0].country\" name=\"country\" #country=\"ngModel\"/>\n            <div [hidden]=\"country.valid || country.pristine\"\n               class=\"alert alert-danger\">\n               Country is required\n            </div>\n         </div>\n      </div>\n      <div class=\"form-group\">\n         <label for=\"name\">Website</label>\n         <input type=\"text\" class=\"form-control\" id=\"website\"\n         required\n         [(ngModel)]=\"model.businessDetails[0].website\" name=\"website\"\n         #website=\"ngModel\"/>\n         <div [hidden]=\"website.valid || website.pristine\"\n            class=\"alert alert-danger\">\n            Website Address is required\n         </div>\n      </div>\n      <div class=\"dropdown-flex\">\n         <div class=\"form-group dropdown-category\" >\n            <label for=\"name\">Business Category</label>\n            <select name=\"state\" ngModel class=\"form-control\" id=\"category\"\n            required\n            [(ngModel)]=\"model.businessDetails[0].category\" name=\"category\"\n            #category=\"ngModel\">\n            <option value=\"\" disabled>Select Category</option>\n            <option *ngFor=\"let data of categoryInfo\" [ngValue]=\"data.id\">\n            {{ data.name }}\n            </option>\n            </select>\n         </div>\n         <div class=\"form-group dropdown-register\" >\n            <label for=\"name\">Registration Info</label>\n            <select name=\"reg\" ngModel class=\"form-control\" id=\"reg\"\n            required\n            [(ngModel)]=\"model.businessDetails[0].reg\" name=\"reg\"\n            #reg=\"ngModel\">\n            <option value=\"\" disabled>Registration Info</option>\n            <option *ngFor=\"let data of registerInfo\" [ngValue]=\"data.id\">\n            {{ data.name }}\n            </option>\n            </select>\n         </div>\n      </div>\n      <div class=\"form-group\" *ngIf='model.businessDetails[0].reg'>\n         <label for=\"name\">Enter Id Proof Number</label>\n         <input type=\"text\" class=\"form-control\" id=\"regDetails\"\n         required\n         [(ngModel)]=\"model.businessDetails[0].regProof\" name=\"regDetails\"\n         #regDetails=\"ngModel\"/>\n         <div [hidden]=\"regDetails.valid || regDetails.pristine\"\n            class=\"alert alert-danger\">\n            Proof Id  is required\n         </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"!signup.form.valid\" >{{formSubmitName}}</button>\n      </form>\n   </div>\n </div>\n</div>\n\n<div [hidden]=\"!submitted\" class=\"alert alert-success alert-dismissible\">\n   <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" routerLink=\"/userData\" routerLinkActive=\"active\">&times;</a>\n   <strong style=\"text-align:center\">Sign Up successful!!\n   <small> <a href=\"#\" routerLink=\"/signIn\" routerLinkActive=\"active\">click here</a></small>to Sign In\n   </strong>\n</div>\n"

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
                name: 'Fashion jewellery',
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
                name: 'LabourId',
                id: '3'
            },
            {
                name: 'TIN',
                id: '4'
            },
            {
                name: 'RegId',
                id: '5'
            },
        ];
        this.submitted = false;
        this.showAddr = false;
        this.registrationFailed = null;
        this.formSubmitName = 'Register';
        this.formTitle = 'Registration Form';
        this.pattern_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        this.pattern_mobile = /([0-9]){10}/g;
        this.pattern_pinCode = /([0-9]){6}/g;
        this.pattern_password = /([0-9a-zA-Z]){6,20}/g;
        //public model={"companyName":"","ownerName":"","mobile":"","password":"","email":"","businessAddress":"","pinCode":"","city":"","state":"","country":"","website":"","category":"","regProof":"","reg":""};
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
        console.log('add:' + this.addNewBusinessForm);
        console.log('edit:' + this.businessEditableForm);
        if (this.addNewBusinessForm) {
            this.formSubmitName = 'Add Business';
            this.formTitle = 'Add New Business';
            this.addNew = true;
        }
        else if (this.businessEditableForm) {
            this.showBuList();
        }
        else { }
        console.log('newBusinessVal::' + this.addNewBusinessForm);
    };
    SignupComponent.prototype.validation = function (check, value) {
        console.log("invalidation method:" + check + ":" + value);
        if (!this[check].test(value)) {
            this.model[check.slice(8)] = '';
            this.toastr.error("Please enter valid " + check.slice(8), null, { toastLife: '3000' });
            //this.toastr.error("Please enter valid "+ check.slice(8), null,{dismiss: 'click'});
        }
    };
    SignupComponent.prototype.onSubmit = function () {
        if (this.addNewBusinessForm) {
            console.log('newBusinessVal::' + this.addNewBusinessForm);
            console.log(this.model);
            console.log('addNew comp.ts');
            this.addNewBusiness(this.model);
        }
        else if (this.businessEditableForm) {
            console.log(this.model);
            console.log('edit comp.ts');
            this.editBusiness(this.model);
        }
        else {
            this.registerUser(this.model);
            console.log('register comp.ts');
            console.log(JSON.stringify(this.model));
        }
        this.getLocation();
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
        this._demoService.registerUser(dataJson).subscribe(function (data) {
            console.log(data);
            console.log("Data saved successfully!");
            if (data[0] == 'success') {
                _this.sendOtp(_this.mobileOTP);
                return true;
            }
            else {
                _this.toastr.error(data[0], 'Error', { toastLife: '5000' });
            }
        }, function (error) {
            console.error("Error saving data!");
            _this.registrationFailed = 'Registration failed';
            _this.toastr.error('Registration failed', 'Error', { toastLife: '5000' });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupComponent.prototype.addNewBusiness = function (dataJson) {
        var _this = this;
        this._demoService.addingNewBusiness(dataJson).subscribe(function (data) {
            console.log("Data saved successfully!");
            _this.toastr.success("successfully added", "Success", { toastLife: '5000' });
            return true;
        }, function (error) {
            console.error("Error saving data!");
            _this.toastr.error("Failed to add", "Error", { toastLife: '5000' });
            _this.registrationFailed = 'Failed to add new Business';
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupComponent.prototype.showBuList = function () {
        var _this = this;
        this._demoService.viewMyBusiness().subscribe(function (data) {
            console.log('showBuList::');
            console.log(data);
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
        console.log(this.businessList);
        this.model = this.businessList;
        this.formSubmitName = 'Submit';
        this.formTitle = this.businessList.businessDetails[0].companyName;
        this.showbusinessList = false;
    };
    SignupComponent.prototype.editBusiness = function (dataJson) {
        var _this = this;
        this._demoService.editBusinessService(dataJson).subscribe(function (data) {
            console.log("Data saved successfully!");
            _this.toastr.success("successfully added", "Success", { toastLife: '5000' });
            _this.router.navigate(['/', 'userData']);
        }, function (error) {
            console.error("Error saving data!");
            _this.toastr.error("Error saving data!", "ERROR!!", { toastLife: '5000' });
            _this.registrationFailed = 'Failed to edit Data';
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupComponent.prototype.addressDetails = function (data) {
        var _this = this;
        var JsonData = { details: data };
        this._demoService.getLocationDetails(JsonData).subscribe(function (data) {
            console.log(data);
            _this.locDeatils(data);
            return true;
        }, function (error) {
            console.error("Error fetching data!");
            _this.toastr.error("Error while fetching data!", "ERROR!!", { toastLife: '5000' });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupComponent.prototype.sendOtp = function (mobileNum) {
        var _this = this;
        console.log('send otp comp.ts' + mobileNum);
        this.router.navigate(['/', 'otpVerification']);
        this._demoService.sendOtp(mobileNum).subscribe(function (data) {
            _this._demoService.changeMessage(data + 'Regi');
        }, function (error) {
        });
    };
    SignupComponent.prototype.doesUserExist = function (mobileNum) {
        var _this = this;
        console.log("mobile:" + mobileNum);
        this._demoService.doesUserExist({ 'mobile': mobileNum }).subscribe(function (data) {
            console.log("hehehe");
            if (data) {
                console.log("data:" + data);
                _this.model.mobile = null;
                _this.mobilecheck = true;
            }
        }, function (error) {
        });
    };
    SignupComponent.prototype.getLocation = function () {
        console.log("lat n long");
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

module.exports = ".dropdown:hover>.dropdown-menu {\r\n  display: block;\r\n}\r\n.profileView{\r\n  margin-left: 1000px;\r\n}\r\n.drpBtn{\r\n  width: 150px;\r\n}\r\n.myInfoDetails{\r\nwidth:200px;\r\n}\r\n.example-container {\r\n  width: 400px;\r\n  height: 200px;\r\n  margin: 10px;\r\n  border: 1px solid #555;\r\n}\r\n.textfamily{\r\n  font-family: serif;\r\n  margin: 0px;\r\n}\r\n.textStyle{\r\n  font-style: italic;\r\n  margin-top: 74px;\r\n}\r\n.listcss{\r\n  padding: 17px;\r\n  font-size: 1.5rem;\r\n  /* border-radius: 50px; */\r\n  /* text-align: center; */\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-data/user-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row textfamily\">\n  <div class=\"col-md-2 col-sm-4 textStyle\">\n    <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" routerLink=\"/userData/invoice\">Invoice</a>\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" routerLink=\"/userData/payables\">Payables</a>\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" routerLink=\"/userData/receivables\">Receivables</a>\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" routerLink=\"/userData/salesReport\">Sales Report</a>\n      <a class=\"list-group-item list-group-item-action listcss\"  data-toggle=\"list\" role=\"tab\" routerLink=\"/userData/raiseTicket\">Raise Ticket</a>\n    </div>\n  </div>\n  <div class=\"col-md-10 col-sm-8\">\n      <router-outlet class=\"tab-pane fade\"></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-data/user-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
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
    function UserDataComponent(_demoService, router, cookieService) {
        this._demoService = _demoService;
        this.router = router;
        this.cookieService = cookieService;
    }
    UserDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._demoService.newBusinessVal.subscribe(function (newBusinessVal) { return _this.addNewBusinessForm = newBusinessVal; });
        this.showRegForm = this.addNewBusinessForm;
    };
    UserDataComponent.prototype.addNewBusiness = function () {
        this.showeditForm = false;
        this.invoice = this.payables = this.receivables = false;
        this._demoService.isNewBusiness(true);
        this.showRegForm = this.addNewBusinessForm;
    };
    UserDataComponent.prototype.viewBusinessDetails = function (data) {
        this.showRegForm = false;
        this._demoService.isNewBusiness(false);
        var model = data;
        this._demoService.editBusinessData(model);
        this.showeditForm = true;
        this.showbusinessList = false;
    };
    UserDataComponent.prototype.showBuList = function () {
        var _this = this;
        this.showbusinessList = true;
        this._demoService.viewMyBusiness().subscribe(function (data) {
            console.log('showBuList::' + data);
            _this.businessList = data;
        }, function (error) {
        });
    };
    UserDataComponent.prototype.sideNav = function (value) {
        this[value] = true;
        this.profile = false;
        console.log('show-' + value);
    };
    UserDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-data',
            template: __webpack_require__("./src/app/user-data/user-data.component.html"),
            styles: [__webpack_require__("./src/app/user-data/user-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
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
    production: false
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