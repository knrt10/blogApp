(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<br>\n\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <ng4-loading-spinner> </ng4-loading-spinner>\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Blog-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/setting/setting.component */ "./src/app/components/setting/setting.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_update_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/update/update.component */ "./src/app/components/update/update.component.ts");
/* harmony import */ var _components_blogone_blogone_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/blogone/blogone.component */ "./src/app/components/blogone/blogone.component.ts");
/* harmony import */ var _components_createblog_createblog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/createblog/createblog.component */ "./src/app/components/createblog/createblog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'setting', component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_14__["SettingComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'blog', component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'createblog', component: _components_createblog_createblog_component__WEBPACK_IMPORTED_MODULE_19__["CreateblogComponent"] },
    { path: 'update/:leave_id', component: _components_update_update_component__WEBPACK_IMPORTED_MODULE_17__["UpdateComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'blogone/:leave_id', component: _components_blogone_blogone_component__WEBPACK_IMPORTED_MODULE_18__["BlogoneComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_14__["SettingComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _components_update_update_component__WEBPACK_IMPORTED_MODULE_17__["UpdateComponent"],
                _components_blogone_blogone_component__WEBPACK_IMPORTED_MODULE_18__["BlogoneComponent"],
                _components_createblog_createblog_component__WEBPACK_IMPORTED_MODULE_19__["CreateblogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11__["FlashMessagesModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blogCard{\n  background-color: #ED9F21;\n  color: #2E3280;\n}\n\n.hovere{\n  cursor: pointer;\n  color: white\n}\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-xs-12 col-md-3\">\n  </div>\n  <div class=\"col-xs-12  col-md-6\">\n    <h1 class=\"hovere\"><legend>Add Blog</legend></h1>\n    <hr/>\n    <form (submit)=\"onsubmit()\" id=\"subject\">\n\n      <div class=\"form-group\">\n        <label for=\"title\">Enter Title</label>\n        <input type=\"text\" name=\"title\" value=\"title\" [(ngModel)]=\"title\" class=\"form-control\" placeholder=\"Enter title\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"reason\">Add description</label>\n        <textarea class=\"form-control\" [(ngModel)]=\"description\" id=\"reason\" name=\"reason\"  rows=\"3\" placeholder=\"Enter your reason\" ></textarea>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Add Blog\">\n      </div>\n    </form>\n\n  </div>\n</div>\n<hr><br>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-md-12\">\n    <h1 class=\"hovere\">Your Blogs</h1>\n    <hr><br>\n    <div *ngIf=\"blog\">\n    <div class=\"col-xs-12 col-md-12\"  *ngFor=\"let blogs of blog\">\n      <div class=\"jumbotron blogCard\">\n        <input type=\"text\" name=\"leaveid8\" #leaveid8  value=\"{{blogs._id}}\" style=\"display:none\" >\n        <div class=\"card-header\"><h1 class=\"hovere\">{{blogs.title}}</h1></div>\n          <div class=\"card-body\">\n                <h4 class=\"card-title\">Posted on :- {{ (blogs.update).slice(0,10) }}</h4>\n                <p class=\"card-text\">{{blogs.description}}</p>\n\n                <form class=\"\" (submit)=\"ondelete(leaveid8.value)\">\n                  <input type=\"submit\" name=\"button\" class=\"form-control btn btn-md btn-danger\" value=\"Delete\">\n                </form>\n                <br>\n                <a href=\"/update/{{blogs._id}}\" (click)=\"oneblog(leaveid8.value)\" class=\"btn btn-md btn-info form-control\">Update Blog</a>\n                <hr>\n          </div>\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogComponent = /** @class */ (function () {
    function BlogComponent(authService, router, flashMessage, http, spinnerService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.authService.getuserBlogs().subscribe(function (data) {
            _this.spinnerService.hide();
            _this.blog = data.blog;
        });
    };
    BlogComponent.prototype.onsubmit = function () {
        var _this = this;
        this.spinnerService.show();
        var body = {
            title: this.title,
            description: this.description
        };
        this.authService.addblog(body).subscribe(function (data) {
            if (data.success === false) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                _this.spinnerService.hide();
                _this.router.navigate(['/blog']);
            }
            else if (data.success === true) {
                _this.spinnerService.hide();
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
                _this.title = '';
                _this.description = '';
                window.location.reload();
                _this.router.navigate(['/blog']);
            }
        });
    };
    BlogComponent.prototype.ondelete = function (leave_id) {
        var _this = this;
        this.spinnerService.show();
        this.authService.deleteLeave(leave_id).subscribe(function (data) {
            if (data.success === true) {
                _this.spinnerService.hide();
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/blog']);
                window.location.reload();
            }
        });
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blogone/blogone.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/blogone/blogone.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hovere{\n  cursor: pointer;\n  color: #2E3280;\n}\n\n.homeBlog{\n  background-color: #F1F8FE;\n  color: #2E3280;\n}\n"

/***/ }),

/***/ "./src/app/components/blogone/blogone.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/blogone/blogone.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"blog\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-12\" >\n      <div class=\"jumbotron homeBlog\">\n        <h1 class=\"hovere\">{{blog.title}}</h1>\n        <p class=\"lead\">{{blog.description}}.</p>\n        <hr class=\"my-4\">\n        <p *ngIf=\"blog.name\">By - {{blog.name}}</p>\n        <p>Posted On :- {{ (blog.update).slice(0,10) }}</p>\n      </div>\n      <br><br>\n      <div class=\"form-group\" *ngIf=\"authService.loggedIn()\">\n        <label for=\"title\">Enter your Name</label>\n        <input type=\"text\" name=\"name\" value=\"name\" [(ngModel)]=\"name\" class=\"form-control\" placeholder=\"Enter your username\">\n      </div>\n      <div class=\"form-group\" *ngIf=\"!authService.loggedIn()\">\n        <label for=\"title\">Enter your Name</label>\n        <input type=\"text\" name=\"name\" value=\"name\" [(ngModel)]=\"name\" class=\"form-control\" placeholder=\"Enter name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"comment\">Add Comment</label>\n        <textarea class=\"form-control\" [(ngModel)]=\"comment\" id=\"comment\" name=\"comment\"  rows=\"3\" placeholder=\"Enter your comment\" ></textarea>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-primary\" (click)=\"addComment()\" value=\"Comment\">\n      </div>\n    </div>\n  </div>\n\n<br>\n<h1 style=\"color:white;\">Comments</h1>\n<hr>\n<div class=\"col-xs-12 col-md-12\">\n  <div *ngFor=\"let comment of comments\">\n    <div class=\"card text-white bg-dark mb-3 text-center\" style=\"max-width: 20rem;\">\n          <div class=\"card-header\">{{blog.title}}</div>\n            <div class=\"card-body\">\n                  <h5 class=\"card-title\">By:- {{comment.name}}</h5>\n                  <p class=\"card-text\">{{comment.comment}}</p>\n                  <hr>\n            </div>\n        </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blogone/blogone.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/blogone/blogone.component.ts ***!
  \*********************************************************/
/*! exports provided: BlogoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogoneComponent", function() { return BlogoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogoneComponent = /** @class */ (function () {
    function BlogoneComponent(authService, router, flashMessage, http, spinnerService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
    }
    BlogoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.url = this.router.url.slice(9);
        this.authService.getOneBlogUnauth(this.url).subscribe(function (data) {
            _this.spinnerService.hide();
            _this.blog = data.blog;
        });
        this.authService.getComments(this.url).subscribe(function (data) {
            _this.spinnerService.hide();
            _this.comments = data.comments;
        });
    };
    BlogoneComponent.prototype.addComment = function () {
        var _this = this;
        this.spinnerService.show();
        var body = {
            name: this.name,
            comment: this.comment
        };
        this.url = this.router.url.slice(9);
        this.authService.addCommentAnon(this.url, body).subscribe(function (data) {
            if (data.success === false) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                _this.spinnerService.hide();
                setTimeout(window.location.reload.bind(location), 2000);
            }
            else if (data.success === true) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
                _this.spinnerService.hide();
                window.location.reload();
            }
        });
    };
    BlogoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogone',
            template: __webpack_require__(/*! ./blogone.component.html */ "./src/app/components/blogone/blogone.component.html"),
            styles: [__webpack_require__(/*! ./blogone.component.css */ "./src/app/components/blogone/blogone.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], BlogoneComponent);
    return BlogoneComponent;
}());



/***/ }),

/***/ "./src/app/components/createblog/createblog.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/createblog/createblog.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hovere{\n  cursor: pointer;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/components/createblog/createblog.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/createblog/createblog.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-xs-12 col-md-3\">\n\n  </div>\n  <div class=\"col-xs-12  col-md-6\">\n    <h1 class=\"hovere\"><legend>Add Blog</legend></h1>\n    <hr/>\n    <form (submit)=\"onsubmitnew()\" id=\"subject\">\n      <div class=\"form-group\">\n        <label for=\"title\">Enter your Name</label>\n        <input type=\"text\" name=\"name\" value=\"name\" [(ngModel)]=\"name\" class=\"form-control\" placeholder=\"Enter your name\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"title\">Enter Title</label>\n        <input type=\"text\" name=\"title\" value=\"title\" [(ngModel)]=\"title\" class=\"form-control\" placeholder=\"enter title\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"reason\">Add description</label>\n        <textarea class=\"form-control\" [(ngModel)]=\"description\" id=\"reason\" name=\"reason\"  rows=\"3\" placeholder=\"Enter your reason\" ></textarea>\n      </div>\n\n\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Add Blog\">\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/createblog/createblog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/createblog/createblog.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateblogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateblogComponent", function() { return CreateblogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateblogComponent = /** @class */ (function () {
    function CreateblogComponent(authService, router, flashMessage, http) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
    }
    CreateblogComponent.prototype.ngOnInit = function () {
    };
    CreateblogComponent.prototype.onsubmitnew = function () {
        var _this = this;
        var body = {
            name: this.name,
            title: this.title,
            description: this.description
        };
        this.authService.addblogAnon(body).subscribe(function (data) {
            if (data.success === false) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/createblog']);
            }
            else if (data.success === true) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
                _this.title = '';
                _this.description = '';
                window.location.reload();
                _this.router.navigate(['/']);
            }
        });
    };
    CreateblogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createblog',
            template: __webpack_require__(/*! ./createblog.component.html */ "./src/app/components/createblog/createblog.component.html"),
            styles: [__webpack_require__(/*! ./createblog.component.css */ "./src/app/components/createblog/createblog.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CreateblogComponent);
    return CreateblogComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hovere{\n  cursor: pointer;\n  color: #2E3280;\n}\n\n.homeBlog{\n  background-color: #F1F8FE;\n  color: #2E3280;\n}\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-12\">\n      <ul class=\"pagination pagination-lg\" *ngIf=\"blog\">\n        <li class=\"page-item \">\n        <button class=\"page-link\" [disabled] =\"curPage == 1\" (click)=\"curPage = curPage - 1\">PREV</button>\n        </li>\n        <span class=\"page-link\">Page {{curPage}} of {{ numberOfPages() }}</span>\n        <li class=\"page-item\" >\n          <button  class=\"page-link\" [disabled] = \"curPage >= bloglength/pageSize\"\n                   (click) =\"curPage = curPage + 1\">NEXT</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-12\" *ngFor=\"let blogs of blog | slice: (curPage * pageSize) - pageSize :curPage * pageSize\">\n      <div class=\"jumbotron homeBlog\">\n          <input type=\"text\" name=\"leaveid1\" #leaveid1  value=\"{{blogs._id}}\" style=\"display:none\" >\n          <h1 class=\"hovere\" (click)=\"getone(leaveid1.value)\">{{blogs.title}}</h1>\n          <p class=\"lead\">{{blogs.description}}.</p>\n          <hr class=\"my-4\">\n          <p>By - {{blogs.name}}</p>\n          <p>Posted On :- {{ (blogs.update).slice(0,10) }}</p>\n          <p class=\"lead\">\n            <a class=\"btn btn-danger btn-md\" href=\"/blogone/{{blogs._id}}\" role=\"button\">Comment</a>\n          </p>\n          <p>Please feel free to comment . </p>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-12\">\n      <ul class=\"pagination pagination-lg\" *ngIf=\"blog\">\n        <li class=\"page-item \">\n        <button class=\"page-link\" [disabled] =\"curPage == 1\" (click)=\"curPage = curPage - 1\">PREV</button>\n        </li>\n        <span class=\"page-link\">Page {{curPage}} of {{ numberOfPages() }}</span>\n        <li class=\"page-item\" >\n          <button  class=\"page-link\" [disabled] = \"curPage >= bloglength/pageSize\"\n                   (click) =\"curPage = curPage + 1\">NEXT</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, authService, flashMessage, http, spinnerService) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.authService.getBlogs().subscribe(function (data) {
            _this.spinnerService.hide();
            _this.blog = data.blog;
            _this.curPage = 1;
            _this.pageSize = 3;
            _this.bloglength = Object.keys(_this.blog).length;
        });
    };
    HomeComponent.prototype.getone = function (leave_id) {
        var _this = this;
        this.authService.getOneBlogUnauth(leave_id).subscribe(function (data) {
            _this.router.navigate(['/blogone/' + leave_id]);
        });
    };
    HomeComponent.prototype.numberOfPages = function () {
        var bloglength = Object.keys(this.blog).length;
        return Math.ceil(bloglength / this.pageSize);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginCard{\n  background-color: #ED9F21;\n  color: #2E3280;\n}\n\n.hovere{\n  cursor: pointer;\n  color: #2E3280;\n}\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron loginCard\">\n  <h1 class=\"hovere\">Login</h1>\n  <form (submit)=\"onLoginSubmit()\">\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" required autofocus placeholder=\"Enter your Username\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Enter your password\" required>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary btn-lg\" value=\"Login\">\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flashMessage, router, spinnerService) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.spinnerService = spinnerService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            if (this.router.url === '/login') {
                this.router.navigate(['/']);
            }
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.spinnerService.show();
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success === false) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                if (data.message === 'No user found') {
                    _this.spinnerService.hide();
                    _this.username = '';
                    _this.password = '';
                }
                else if (data.message === 'Wrong Password') {
                    _this.spinnerService.hide();
                    _this.password = '';
                }
                _this.router.navigate(['/login']);
            }
            else if (data.success === true) {
                _this.spinnerService.hide();
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Successfully logged in ', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\" onmousedown=\"return false\">BLOG APP</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item a\"  >\n        <a class=\"nav-link\" href=\"/\" onmousedown=\"return false\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item b\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a href=\"createblog\" class=\"nav-link\" onmousedown=\"return false\"> Create Blog</a>\n      </li>\n      <li class=\"nav-item b\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a href=\"blog\" class=\"nav-link\" onmousedown=\"return false\"> Manage Blogs</a>\n      </li>\n      <li class=\"nav-item c\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" href=\"profile\" onmousedown=\"return false\">Profile</a>\n      </li>\n      <li class=\"nav-item d\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n       <a class=\"nav-link\" href=\"setting\" onmousedown=\"return false\">Settings</a>\n\n      </li>\n\n    </ul>\n    <ul class=\"navbar-nav \">\n    <div *ngIf=\"user\">\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a href=\"profile\" class=\"nav-link\" onmousedown=\"return false\">Hello, {{user.displayName || user.username}}</a>\n      </li>\n    </div>\n      <li class=\"nav-item \" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <button  class=\"btn btn-sm nav-link btn-danger\" (click)=\"onlogout()\" onmousedown=\"return false\">Logout</button>\n      </li>\n\n      <li class=\"nav-item e\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" >\n        <a href=\"register\" class=\"nav-link\" onmousedown=\"return false\">signup</a>\n      </li>\n      <li class=\"nav-item f\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a href=\"login\" class=\"nav-link\" onmousedown=\"return false\">Login</a>\n      </li>\n    </ul>\n  </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            data.user.createdAt = String(data.user.createdAt).slice(0, 10);
            _this.user = data.user;
        });
    };
    NavbarComponent.prototype.onlogout = function () {
        this.authService.loggedOut();
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileCard{\n  background-color: #ED9F21;\n  color: #2E3280;\n}\n\n.hovere{\n  cursor: pointer;\n  color: white\n}\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n<h1 class=\"hovere\">{{user.username}}'s Profile</h1>\n<hr>\n  <div class=\"jumbotron profileCard\">\n    <h3>Joined on : {{user.createdAt}}</h3>\n    <h3>Email : <span style=\"font-size:14px;\"> {{user.email}}</span></h3>\n    <div class=\"card text-white bg-warning mb-3 \" style=\"max-width: 20rem;\">\n      <h3 class=\"card-header\">Bio</h3>\n        <div class=\"card-body \">\n          <h4 class=\"card-title\">{{user.displayName}}</h4>\n          <p class=\"card-text text-center\">{{user.bio || \" \"}}</p>\n        </div>\n    </div>\n    <div class=\"well\">\n      <a href=\"blog\" class=\"btn btn-info\" onmousedown=\"return false\" >Manage Blogs</a>\n      <a href=\"setting\" class=\"btn btn-success\" onmousedown=\"return false\">Update Profile</a>\n    </div>\n<br/>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, authService, flashMessage, http, spinnerService) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.authService.getProfile().subscribe(function (data) {
            _this.spinnerService.hide();
            data.user.createdAt = String(data.user.createdAt).slice(0, 10);
            _this.user = data.user;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registerCard{\n  background-color: #ED9F21;\n  color: #2E3280;\n}\n\n.hovere{\n  cursor: pointer;\n  color: #2E3280;\n}\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron registerCard\">\n<div class=\"row\">\n  <div class=\"col-xs-12 col-md-3\">\n  </div>\n  <div class=\"col-xs-12  col-md-6\">\n    <h1 class=\"hovere\"><legend>SignUp</legend></h1>\n    <hr/>\n    <form (submit)=\"onRegisterSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputUsername\">Username</label>\n        <input type=\"username\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"exampleInputUsername\" aria-describedby=\"emailHelp\" maxlength=\"14\" placeholder=\"Enter Username\" required autofocus>\n        <small id=\"exampleInputUsername\" class=\"form-text\">Use this to login </small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email address</label>\n        <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" maxlength=\"50\" placeholder=\"Enter email\" required >\n        <small id=\"emailHelp\" class=\"form-text\">We'll never share your email with anyone else.</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"exampleInputPassword1\" placeholder=\"Password\" maxlength=\"20\" required>\n        <small id=\"exampleInputPassword1\" class=\"form-text\">Your password is protetced with us.</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword2\">Confirm Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" id=\"exampleInputPassword2\" placeholder=\"Confirm Password\" maxlength=\"20\" required>\n        <small id=\"exampleInputPassword2\" class=\"form-text\">Your password is protetced with us.</small>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Sign In\">\n      </div>\n    </form>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, flashMessage, http, authService, spinnerService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
        this.authService = authService;
        this.spinnerService = spinnerService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            if (this.router.url === '/register') {
                this.router.navigate(['/']);
            }
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.spinnerService.show();
        var user = {
            username: this.username,
            password: this.password,
            email: this.email,
            confirmPassword: this.confirmPassword
        };
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success === false) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                _this.spinnerService.hide();
                if (data.message === 'Username should be greater than 4 and less than 12 characters') {
                    _this.username = '';
                }
                else if (data.message === 'Your passwords do not match' || data.message === 'Password should be greater than 6 characters') {
                    _this.password = '';
                    _this.confirmPassword = '';
                }
                else if (data.message === 'Username already in use') {
                    _this.username = '';
                }
                else if (data.message === 'Email already in use') {
                    _this.email = '';
                }
                _this.router.navigate(['/register']);
            }
            else if (data.success === true) {
                _this.spinnerService.hide();
                _this.flashMessage.show('You can now login', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/setting.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/setting/setting.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settingsCard{\n  background-color: #ED9F21;\n  color: #2E3280;\n}\n\n.hovere{\n  cursor: pointer;\n  color: white\n}\n"

/***/ }),

/***/ "./src/app/components/setting/setting.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/setting/setting.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"user\">\n  <div class=\"container-fluid jumbotron settingsCard\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-3\">\n      </div>\n      <div class=\"col-xs-12  col-md-6\">\n        <h1 class=\"hovere\"><legend>Update Settings</legend></h1>\n        <hr/>\n        <form (submit)=\"changeSetting()\">\n          <div class=\"form-group\">\n            <label for=\"displayName\">DispLay Name</label>\n            <input type=\"text\" [(ngModel)]=\"displayName\" placeholder=\"{{user.displayName}}\" name=\"displayName\" class=\"form-control\" id=\"displayName\"  maxlength=\"20\" aria-describedby=\"emailHelp\"  autofocus >\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"password\"> Password</label>\n            <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" id=\"password\" maxlength=\"20\" placeholder=\"Update Password\" required >\n          </div>\n          <div class=\"form-group\">\n            <label for=\"confirmPassword\">Confirm Password</label>\n            <input type=\"password\" [(ngModel)]=\"confirmPassword\" class=\"form-control\" name=\"confirmPassword\" id=\"confirmPassword\" maxlength=\"20\" placeholder=\"Confirm Updated Password\" required >\n          </div>\n          <div class=\"form-group\">\n            <label for=\"bio\">BIO</label>\n            <textarea class=\"form-control\" [(ngModel)]=\"bio\" id=\"bio\" name=\"bio\"  rows=\"3\" placeholder=\"{{user.bio}}\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-danger\" value=\"Update\">\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/setting/setting.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/setting/setting.component.ts ***!
  \*********************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingComponent = /** @class */ (function () {
    function SettingComponent(router, authService, flashMessage, http, spinnerService) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
    }
    SettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.authService.getProfile().subscribe(function (data) {
            _this.spinnerService.hide();
            data.user.createdAt = String(data.user.createdAt).slice(0, 10);
            _this.user = data.user;
        });
    };
    SettingComponent.prototype.changeSetting = function () {
        var _this = this;
        this.spinnerService.show();
        var user = {
            displayName: this.displayName,
            password: this.password,
            bio: this.bio,
            confirmPassword: this.confirmPassword
        };
        this.authService.changeSetting(user).subscribe(function (data) {
            if (data.success === false) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                _this.spinnerService.hide();
                if (data.message === 'Your passwords do not match') {
                    _this.password = '';
                }
                else if (data.message === 'Your Display Name should be less than 10 characters') {
                    _this.displayName = '';
                }
                else if (data.message === 'Your password should be atleast 6 characters') {
                    _this.password = '';
                }
                _this.router.navigate(['/setting']);
            }
            else if (data.success === true) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
                _this.spinnerService.hide();
                _this.router.navigate(['/profile']);
            }
        });
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/components/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/components/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/components/update/update.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/update/update.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/update/update.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/update/update.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"blog\">\n<form (submit)=\"onsubmited()\" id=\"subject\" >\n  <div class=\"form-group\">\n    <label for=\"title\">Enter Title</label>\n    <input type=\"text\" name=\"title\" value=\"\" [(ngModel)]=\"title\" class=\"form-control\" placeholder=\"{{blog.title}}\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"reason\">Change description</label>\n    <textarea class=\"form-control\" [(ngModel)]=\"description\" id=\"reason\" name=\"reason\"  rows=\"3\" placeholder=\"{{blog.description}}\" ></textarea>\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Update\">\n  </div>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/update/update.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/update/update.component.ts ***!
  \*******************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(authService, router, flashMessage, http, spinnerService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.leave_id = this.router.url.slice(8);
        this.authService.getOneBlog(this.leave_id).subscribe(function (data) {
            _this.spinnerService.hide();
            _this.blog = data.blog;
        });
    };
    UpdateComponent.prototype.onsubmited = function () {
        var _this = this;
        this.spinnerService.show();
        var body = {
            title: this.title,
            description: this.description
        };
        this.leave_id = this.router.url.slice(8);
        this.authService.updateOneBlog(this.leave_id, body).subscribe(function (data) {
            if (data.success === false) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                _this.spinnerService.hide();
                window.location.reload();
            }
            else if (data.success === true) {
                _this.spinnerService.hide();
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/blog']);
            }
        });
    };
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/components/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/components/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.flashMessage.show('You need to login to view this page', { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://perfect-tiglon.glitch.me/user/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://perfect-tiglon.glitch.me/user/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://perfect-tiglon.glitch.me/user/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.changeSetting = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://perfect-tiglon.glitch.me/user/setting', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addblog = function (body) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://perfect-tiglon.glitch.me/user/blog', body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addblogAnon = function (body) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://perfect-tiglon.glitch.me/user/blogAnon', body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addCommentAnon = function (leaveId, body) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://perfect-tiglon.glitch.me/user/blogone/' + leaveId, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getComments = function (leaveId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://perfect-tiglon.glitch.me/user/blogone/' + leaveId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getBlogs = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://perfect-tiglon.glitch.me/user/all', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getuserBlogs = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://perfect-tiglon.glitch.me/user/blog', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteLeave = function (leave_id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://perfect-tiglon.glitch.me/user/blog/' + leave_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getOneBlogUnauth = function (leave_id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://perfect-tiglon.glitch.me/user/blog/' + leave_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getOneBlog = function (leave_id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://perfect-tiglon.glitch.me/user/update/' + leave_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateOneBlog = function (leave_id, body) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://perfect-tiglon.glitch.me/user/update/' + leave_id, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token-id', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token-id');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('token-id');
    };
    AuthService.prototype.loggedOut = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        return false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/knrt10/dev/1kInternship/backendBlog/frontEndBlog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map