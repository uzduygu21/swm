"use strict";
(self["webpackChunkservet_wealth_management"] = self["webpackChunkservet_wealth_management"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _examples_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples/about/about.component */ 5226);
/* harmony import */ var _examples_who_we_serve_who_we_serve_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples/who-we-serve/who-we-serve.component */ 3445);
/* harmony import */ var _examples_services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/services/services.component */ 291);
/* harmony import */ var _examples_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/contact/contact.component */ 9481);
/* harmony import */ var _examples_components_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/components/components.component */ 9703);
/* harmony import */ var _examples_planning_process_planning_process_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/planning-process/planning-process.component */ 9338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);




// import { BlogComponent } from './examples/blog/blog.component';





const routes = [{
  path: '',
  component: _examples_components_components_component__WEBPACK_IMPORTED_MODULE_4__.ComponentsComponent
}, {
  path: 'about',
  component: _examples_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
}, {
  path: 'whoweserve',
  component: _examples_who_we_serve_who_we_serve_component__WEBPACK_IMPORTED_MODULE_1__.WhoWeServeComponent
}, {
  path: 'services',
  component: _examples_services_services_component__WEBPACK_IMPORTED_MODULE_2__.ServicesComponent
}, {
  path: 'planningprocess',
  component: _examples_planning_process_planning_process_component__WEBPACK_IMPORTED_MODULE_5__.PlanningProcessComponent
},
// { path: 'blog',  component: BlogComponent },
{
  path: 'contact',
  component: _examples_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent
}, {
  path: '**',
  redirectTo: '/',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ 4696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/footer/footer.component */ 5227);












class AppComponent {
  constructor(renderer, router, document, element, location) {
    this.renderer = renderer;
    this.router = router;
    this.document = document;
    this.element = element;
    this.location = location;
    this.title = 'servet-wealth-management';
    this._router = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
  }
  ngOnInit() {
    var navbar = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe(() => {
      if (window.outerWidth > 991) {
        window.document.children[0].scrollTop = 0;
      } else {
        window.scroll(0, 0);
      }
      this.navbar.sidebarClose();
    });
    this.renderer.listen('window', 'scroll', event => {
      const number = window.scrollY;
      if (number > 150 || window.pageYOffset > 150) {
        // add logic
        navbar.classList.remove('navbar-transparent');
      } else {
        // remove logic
        navbar.classList.add('navbar-transparent');
      }
    });
    var ua = window.navigator.userAgent;
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.navbar = _t.first);
      }
    },
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-navbar")(1, "router-outlet")(2, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ 4696);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ 5227);
/* harmony import */ var _examples_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/contact/contact.component */ 9481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);












// import { BlogComponent } from './examples/blog/blog.component';
// import { BlogOneComponent } from './examples/blog/blog-one/blog-one.component';
// import { BlogTwoComponent } from './examples/blog/blog-two/blog-two.component';
// import { BlogThreeComponent } from './examples/blog/blog-three/blog-three.component';
// import { BlogFourComponent } from './examples/blog/blog-four/blog-four.component';
// import { BlogFiveComponent } from './examples/blog/blog-five/blog-five.component';
// import { TruncatePipe } from './examples/blog/truncate.pipe';
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbCollapseModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _examples_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbCollapseModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule]
  });
})();

/***/ }),

/***/ 5226:
/*!***************************************************!*\
  !*** ./src/app/examples/about/about.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AboutComponent {
  constructor(router) {
    this.router = router;
  }
  navigateToContact() {
    this.router.navigate(['/contact']);
  }
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 62,
    vars: 0,
    consts: [["data-parallax", "true", 1, "page-header", "bg-image", "img-fluid", 2, "background-image", "url('./assets/img/about-us-bg.jpg')"], [1, "filter"], [1, "container"], [1, "row"], [2, "width", "100px"], [1, "header-inside-image"], ["id", "main-heading"], [2, "margin-top", "0px", "text-align", "left"], [1, "main"], [1, "section"], [1, "col-md-8", "mr-auto", "ml-auto"], [1, "intro"], [2, "color", "#212121"], [1, "about-us-sec"], [1, "col-sm-3"], ["src", "./assets/img/nathan-lee.jpg", "alt", "Photo of Nathan Lee", 1, "img-thumbnail", 2, "max-height", "400px"], [1, "col-sm-9", 2, "color", "#212121"], [2, "top", "-0.2em"], [2, "margin-top", "10%"], [1, "mr-auto", "ml-auto"], [1, "btn", "btn-info", "btn-lg", "btn-fill", 3, "click"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About Our Firm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " We are located in New York City but serve clients throughout the country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 2)(14, "div", 3)(15, "div", 10)(16, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About Our Firm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div")(20, "div", 3)(21, "div", 12)(22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " The foundation of Servet Wealth Management began over a decade ago when I started at Merrill Lynch building my business with a dedication to helping clients meet their financial goals. While working with clients, I pursued the education needed to earn my CERTIFIED FINANCIAL PLANNER, or CFP\u00AE, certification so I can assist clients with increasingly complex financial planning scenarios. I am most passionate about finding solutions and options for the real-world challenges and opportunities for my clients as they make their way along the path of their financial journey. When I am able to present clients with solutions they feel confident in implementing, I know that I have stayed true to the mission of my business to serve them. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br")(25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13)(27, "div", 3)(28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16)(31, "div", 3)(32, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Nathan Lee, CFP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "sup", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Wealth Management Advisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " I\u2019ve always had a love of the outdoors and I grew up camping and hiking in many of our National Parks; some of my fondest memories are of camping in the beautiful Yosemite Valley. My wife and I share that love of exploration and new experiences and today we travel to new cities, enjoy renting bikes, pedaling around the city looking for those hidden gems, under-the-radar restaurants that so often reflect the culture and diversity of an area. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br")(41, "br")(42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3)(44, "div", 19)(45, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_45_listener() {
          return ctx.navigateToContact();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Let's Chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13)(48, "div", 3)(49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16)(52, "div", 3)(53, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Olivia Burke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Registered Client Associate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " I find immense joy in exploring the world around me, be it through the pages of a book, the laughter shared with family and friends, or travel. Reading is a passion that fuels my imagination and enriches my soul. Books have a unique power to transport me to new realms, challenge my perspectives, and inspire personal growth. Beyond my love for books, I cherish taking my son to explore new places and embarking on thrilling escapades to create unforgettable memories together. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br")(60, "br")(61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["#main-heading[_ngcontent-%COMP%] {\n  text-shadow: 2px 2px 0px #484848, 5px 4px 0px rgba(0, 0, 0, 0.15);\n  font-family: DM Sans;\n  font-weight: 700;\n  position: relative;\n  text-align: left !important;\n}\n\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  color: white;\n  font-family: Trebuchet MS;\n  font-weight: bold;\n  text-align: center;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  min-height: 65vh;\n  height: auto;\n}\n\n.header-inside-image[_ngcontent-%COMP%] {\n  border-left: 4px solid #fff;\n  padding-left: 35px;\n}\n\n.intro[_ngcontent-%COMP%] {\n  color: #023047;\n  font-family: Gotham, Trajan, Pro !important;\n  font-weight: 500;\n}\n\n.about-us-sec[_ngcontent-%COMP%] {\n  background-color: #ebf7ff;\n  padding: 20px;\n}\n/*# sourceURL=webpack://./src/app/examples/about/about.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxpRUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUUsaUJBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4taGVhZGluZyB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDBweCAjNDg0ODQ4LCA1cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBmb250LWZhbWlseTogRE0gU2FucztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi8qIHBhZ2UgY29udGVudCAqL1xuaDEsIGgyLCBoMywgaDYge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBUcmVidWNoZXQgTVM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iZy1pbWFnZSB7XG4gIG1pbi1oZWlnaHQ6IDY1dmg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhlYWRlci1pbnNpZGUtaW1hZ2Uge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbn1cblxuLmludHJvIHtcbiAgY29sb3I6ICMwMjMwNDc7XG4gIGZvbnQtZmFtaWx5OiBHb3RoYW0sIFRyYWphbiwgUHJvICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hYm91dC11cy1zZWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmN2ZmO1xuICBwYWRkaW5nOiAyMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9703:
/*!*************************************************************!*\
  !*** ./src/app/examples/components/components.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsComponent": () => (/* binding */ ComponentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class ComponentsComponent {
  constructor(renderer) {
    this.renderer = renderer;
    this.page = 4;
    this.page1 = 5;
  }
  ngOnInit() {
    let input_group_focus = document.getElementsByClassName('form-control');
    let input_group = document.getElementsByClassName('input-group');
    for (let i = 0; i < input_group.length; i++) {
      input_group[i].children[0].addEventListener('focus', function () {
        input_group[i].classList.add('input-group-focus');
      });
      input_group[i].children[0].addEventListener('blur', function () {
        input_group[i].classList.remove('input-group-focus');
      });
    }
    console.log("window.innerWidth", window.innerWidth);
    if (window.innerWidth > 600) {
      this.desktopOrMobile = true;
    }
  }
  static #_ = this.ɵfac = function ComponentsComponent_Factory(t) {
    return new (t || ComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ComponentsComponent,
    selectors: [["app-components"]],
    decls: 27,
    vars: 3,
    consts: [[1, "wrapper"], [1, "page-header", "section-dark", 2, "justify-content", "center", 3, "hidden"], ["id", "background-video", "playsinline", "", "loop", "", "autoplay", "", "poster", "assets/img/nyc-photo.jpg", 2, "position", "absolute", "left", "50%", "top", "50%", "transform", "translate(-50%, -50%)", "min-width", "calc(100% + 2px)", "min-height", "calc(100% + 2px)", "opacity", "1", "max-height", "calc(100% + 2px)", 3, "muted"], ["src", "assets/img/nyc-video.mp4", "type", "video/mp4"], [1, "filter"], [1, "content-center"], [1, "container-fluid"], [1, "row"], [1, "header-inside-image"], ["id", "main-heading"], ["data-parallax", "true", 1, "page-header", "bg-image", "img-fluid", 2, "background-image", "url('./assets/img/nyc-photo.jpg')", 3, "hidden"], [1, "main"], [1, "section"], [1, "container"], [1, "text-center", "font-weight-light"], [1, "intro-prg"]],
    template: function ComponentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Financial Planning for the Busy Professional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5)(14, "div", 6)(15, "div", 7)(16, "div", 8)(17, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Financial Planning for the Busy Professional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 7)(23, "div", 14)(24, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " We strive to empower our clients to achieve financial success by providing personalized financial planning and investment management services that align with their priorities and values. Our commitment to integrity, transparency and continuous learning guides all of our actions, and we are dedicated to building long-term relationships based on trust and mutual respect. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.desktopOrMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("muted", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.desktopOrMobile);
      }
    },
    styles: ["#background-video[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  object-fit: cover;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.header-inside-image[_ngcontent-%COMP%] {\n  border-left: 4px solid #fff;\n  padding-left: 35px;\n}\n\n.header-push[_ngcontent-%COMP%] {\n  visibility: hidden;\n  min-height: 5rem;\n}\n\n#main-heading[_ngcontent-%COMP%] {\n  text-shadow: 2px 2px 0px #484848, 5px 4px 0px rgba(0, 0, 0, 0.15);\n  font-family: DM Sans;\n  font-weight: 700;\n  font-size: 2.5rem;\n  padding-bottom: 20px;\n  position: relative;\n}\n\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  color: white;\n  font-family: Trebuchet MS;\n  font-weight: bold;\n  text-align: center;\n}\n\n#intro[_ngcontent-%COMP%] {\n  color: #023047;\n  font-family: DM Sans;\n  font-weight: 700;\n}\n\n.intro-prg[_ngcontent-%COMP%] {\n  font-family: Merriweather;\n  font-weight: 500;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.75;\n  color: #212121;\n  font-size: 1.5em;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n@media (max-width: 750px) {\n  #background-video[_ngcontent-%COMP%] {\n    display: hidden;\n  }\n  body[_ngcontent-%COMP%] {\n    background: url(\"https://assets.codepen.io/6093409/river.jpg\") no-repeat;\n    background-size: cover;\n  }\n}\nngb-progressbar[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n}\n/*# sourceURL=webpack://./src/app/examples/components/components.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMvY29tcG9uZW50cy9jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUUsaUJBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdFO0VBQUssZUFBQTtBQUNQOztBQUNFO0VBQ0k7SUFBb0IsZUFBQTtFQUd4QjtFQUZJO0lBQ0Usd0VBQUE7SUFDQSxzQkFBQTtFQUlOO0FBQ0Y7QUFERTtFQUNFLGdCQUFBO0FBR0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB2aWRlbyBiYWNrZ3JvdW5kICovXG4jYmFja2dyb3VuZC12aWRlbyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmhlYWRlci1pbnNpZGUtaW1hZ2Uge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbn1cblxuLmhlYWRlci1wdXNoIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiA1cmVtO1xufVxuXG4jbWFpbi1oZWFkaW5nIHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMHB4ICM0ODQ4NDgsIDVweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGZvbnQtZmFtaWx5OiBETSBTYW5zO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogcGFnZSBjb250ZW50ICovXG5oMSwgaDIsIGg2IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogVHJlYnVjaGV0IE1TO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jaW50cm8ge1xuICBjb2xvcjogIzAyMzA0NztcbiAgZm9udC1mYW1pbHk6IERNIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pbnRyby1wcmcge1xuICBmb250LWZhbWlseTogTWVycml3ZWF0aGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDAgMCAxLjVyZW0gMDtcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICNiYWNrZ3JvdW5kLXZpZGVvIHtcbiAgICBkaXNwbGF5OiBoaWRkZW47XG4gIH1cbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9hc3NldHMuY29kZXBlbi5pby82MDkzNDA5L3JpdmVyLmpwZ1wiKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxufVxubmdiLXByb2dyZXNzYmFyIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9481:
/*!*******************************************************!*\
  !*** ./src/app/examples/contact/contact.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent),
/* harmony export */   "NgbdModalContent": () => (/* binding */ NgbdModalContent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);







function ContactComponent_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Full name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_41_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.contactForm.get("senderName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function ContactComponent_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_50_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_50_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_div_50_div_2_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.contactForm.get("senderEmail")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.contactForm.get("senderEmail")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
  }
}
class NgbdModalContent {
  constructor(activeModal) {
    this.activeModal = activeModal;
  }
  static #_ = this.ɵfac = function NgbdModalContent_Factory(t) {
    return new (t || NgbdModalContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NgbdModalContent,
    selectors: [["app-modal-content"]],
    decls: 12,
    vars: 0,
    consts: [[1, "modal-header"], [1, "modal-title", "text-center"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default", "btn-link", 3, "click"]],
    template: function NgbdModalContent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Message Sent!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_3_listener() {
          return ctx.activeModal.dismiss("Cross click");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Thank you for contacting us. We will reach out shortly. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "div")(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_10_listener() {
          return ctx.activeModal.close("Close click");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    encapsulation: 2
  });
}
class ContactComponent {
  constructor(fb, http, modalService) {
    this.fb = fb;
    this.http = http;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.contactForm = this.fb.group({
      senderName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
      senderEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
      message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
    });
  }
  save() {
    if (this.contactForm.valid) {
      const url = 'https://vjxkullxhg.execute-api.us-east-1.amazonaws.com/default/sendContactEmailNew';
      const body = JSON.stringify({
        senderEmail: this.contactForm.value.senderEmail,
        senderName: this.contactForm.value.senderName,
        message: this.contactForm.value.message
      });
      this.open();
      this.http.post(url, body).subscribe(response => {
        if (response) {
          console.log("response", response);
        }
      });
      this.contactForm.reset();
    }
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 72,
    vars: 3,
    consts: [["data-parallax", "true", 1, "page-header", "bg-image", "img-fluid", 2, "background-image", "url('./assets/img/contact-us-bg.jpg')"], [1, "filter"], [1, "container", "content-center"], [1, "row"], [2, "width", "100px"], [1, "header-inside-image"], ["id", "main-heading"], [2, "margin-top", "0px", "text-align", "left"], [1, "main"], [1, "section"], [1, "container"], [1, "who-we-serve-sec"], [1, "col-md-4"], ["src", "./assets/img/nathan-lee.jpg", "alt", "Photo of Nathan Lee", 1, "img-thumbnail", 2, "max-height", "400px", "display", "block", "margin", "auto"], [1, "text-center"], ["href", "mailto:nathan@servetwealth.com", 1, "font-blue-color", 2, "text-align", "center"], ["href", "tel:6464735800", 1, "font-blue-color"], [1, "fa", "fa-phone", "fa-fw", "c-topbar-phone-icn", "c-phone--icn"], [1, "col-md-8", "mr-auto", "ml-auto"], [1, "text-center", "font-blue-color", 2, "font-family", "Gotham, Trajan, Pro !important"], [1, "contact-form", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "nc-icon", "nc-single-02"], ["formControlName", "senderName", "type", "text", "placeholder", "Name", 1, "form-control", 3, "focus", "blur"], ["class", "form-control-feedback", 4, "ngIf"], [1, "nc-icon", "nc-email-85"], ["formControlName", "senderEmail", "type", "text", "placeholder", "Email", 1, "form-control", 3, "focus", "blur"], ["formControlName", "message", "rows", "4", "placeholder", "Tell us your thoughts and feelings...", 1, "form-control"], [1, "col-md-4", "mr-auto", "ml-auto"], [1, "btn", "btn-info", "btn-lg", "btn-fill"], [1, "container", "who-we-serve-sec"], [1, "row", "justify-content-md-center"], [1, "col", "col-lg-4", 2, "text-align", "right"], ["href", "https://outlook.office365.com/owa/calendar/MeetingwithNathan@servetwealth.com/bookings/", 1, "btn", "btn-link", "btn-default"], [1, "font-blue-color", 2, "font-family", "Gotham, Trajan, Pro !important", "font-size", "large"], [1, "col-md-auto"], [1, "col", "col-lg-3"], ["target", "_blank", "href", "https://outlook.office365.com/owa/calendar/MeetingwithNathan@servetwealth.com/bookings/"], [1, "fa", "fa-calendar"], [1, "form-control-feedback"], [4, "ngIf"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Are You Ready To Take the Next Step? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br")(15, "br")(16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11)(18, "div", 3)(19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14)(22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "nathan@servetwealth.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 14)(25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 646-473-5800 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18)(29, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Let's Chat! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_31_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3)(33, "div", 21)(34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22)(37, "div", 23)(38, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ContactComponent_Template_input_focus_40_listener() {
          return ctx.focus = true;
        })("blur", function ContactComponent_Template_input_blur_40_listener() {
          return ctx.focus = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ContactComponent_div_41_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21)(43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22)(46, "div", 23)(47, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ContactComponent_Template_input_focus_49_listener() {
          return ctx.focus1 = true;
        })("blur", function ContactComponent_Template_input_blur_49_listener() {
          return ctx.focus1 = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ContactComponent_div_50_Template, 3, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3)(55, "div", 31)(56, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Send Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br")(59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 33)(61, "div", 34)(62, "div", 35)(63, "a", 36)(64, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " MAKE AN APPOINTMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 39)(68, "a", 40)(69, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " \u00A0 BOOK HERE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.contactForm.get("senderName")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.contactForm.get("senderName")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.contactForm.get("senderName")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.contactForm.get("senderEmail")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.contactForm.get("senderEmail")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.contactForm.get("senderEmail")) == null ? null : tmp_2_0.touched)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["#main-heading[_ngcontent-%COMP%] {\n  text-shadow: 2px 2px 0px #484848, 5px 4px 0px rgba(0, 0, 0, 0.15);\n  font-family: DM Sans;\n  font-weight: 700;\n  position: relative;\n  text-align: left !important;\n}\n\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  color: white;\n  font-family: Trebuchet MS;\n  font-weight: bold;\n  text-align: center;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  min-height: 65vh;\n  height: auto;\n}\n\n.header-inside-image[_ngcontent-%COMP%] {\n  border-left: 4px solid #fff;\n  padding-left: 35px;\n}\n\n#intro[_ngcontent-%COMP%] {\n  color: #023047;\n  font-family: Gotham, Trajan, Pro !important;\n  font-weight: 500;\n}\n\n.who-we-serve-sec[_ngcontent-%COMP%] {\n  background-color: #F2F8FC;\n  padding: 20px;\n}\n\n.font-blue-color[_ngcontent-%COMP%] {\n  color: #023047;\n}\n/*# sourceURL=webpack://./src/app/examples/contact/contact.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVFLGlCQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWhlYWRpbmcge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwcHggIzQ4NDg0OCwgNXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgZm9udC1mYW1pbHk6IERNIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4vKiBwYWdlIGNvbnRlbnQgKi9cbmgxLCBoMiwgaDMsIGg1LCBoNCwgaDYge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBUcmVidWNoZXQgTVM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iZy1pbWFnZSB7XG4gIG1pbi1oZWlnaHQ6IDY1dmg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhlYWRlci1pbnNpZGUtaW1hZ2Uge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbn1cblxuI2ludHJvIHtcbiAgY29sb3I6ICMwMjMwNDc7XG4gIGZvbnQtZmFtaWx5OiBHb3RoYW0sIFRyYWphbiwgUHJvICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi53aG8td2Utc2VydmUtc2VjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjhGQztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmZvbnQtYmx1ZS1jb2xvciB7XG4gIGNvbG9yOiAjMDIzMDQ3O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9338:
/*!*************************************************************************!*\
  !*** ./src/app/examples/planning-process/planning-process.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanningProcessComponent": () => (/* binding */ PlanningProcessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PlanningProcessComponent {
  static #_ = this.ɵfac = function PlanningProcessComponent_Factory(t) {
    return new (t || PlanningProcessComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PlanningProcessComponent,
    selectors: [["app-planning-process"]],
    decls: 42,
    vars: 0,
    consts: [["data-parallax", "true", 1, "page-header", "bg-image", "img-fluid", 2, "background-image", "url('./assets/img/services-bg.jpg')"], [1, "filter"], [1, "container", "content-center"], [1, "row"], [2, "width", "100px"], [1, "header-inside-image"], ["id", "main-heading"], [2, "margin-top", "0px", "text-align", "left"], [1, "main"], [1, "section", "text-center"], [1, "container"], [1, "col-md-8", "mr-auto", "ml-auto"], [1, "title"], ["src", "./assets/img/planning-process.png", "alt", "Planning process", 1, "img-thumbnail", 2, "box-shadow", "none !important"], [1, "blue-sec", 2, "text-align", "left"]],
    template: function PlanningProcessComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Planning Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " We implement a repeatable process that generates tangible results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 3)(15, "div", 11)(16, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "THE PLANNING PROCESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br")(19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3)(23, "div", 11)(24, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "A 3 Meeting, 7-step process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3)(27, "div", 14)(28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 1.\u00A0During our discovery process, we will ask for your information so we can understand your personal and financial circumstances. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 2.\u00A0We will then work with you to identify and select your financial goals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 3.\u00A0After we have discussed your goals and aspirations, we will analyze your current course of action and discuss approaches you can take. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 4.\u00A0Next, we will develop financial planning recommendations that are tailored to your goals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "5.\u00A0We will present the financial planning recommendations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 6.\u00A0We will analyze and recommend actions, products and services to implement as part of the plan. We will work with you to decide which of the recommendations you would like to implement first. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 7.\u00A0We will monitor and review our work together and discuss ongoing changes. We will remind you to tell us about changes to your personal and financial circumstances which can lead to updates in the recommendations. our work together and discuss ongoing changes. We will remind you to tell us about changes to your personal and financial circumstances which can lead to updates in the recommendations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["#main-heading[_ngcontent-%COMP%] {\n  text-shadow: 2px 2px 0px #484848, 5px 4px 0px rgba(0, 0, 0, 0.15);\n  font-family: DM Sans;\n  font-weight: 700;\n  position: relative;\n  text-align: left !important;\n}\n\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  color: white;\n  font-family: Trebuchet MS;\n  font-weight: bold;\n  text-align: center;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  min-height: 65vh;\n  height: auto;\n}\n\n.header-inside-image[_ngcontent-%COMP%] {\n  border-left: 4px solid #fff;\n  padding-left: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #023047;\n  font-family: DM Sans;\n  font-weight: 700;\n}\n\n.blue-sec[_ngcontent-%COMP%] {\n  background-color: #ebf7ff;\n  padding: 20px;\n}\n/*# sourceURL=webpack://./src/app/examples/planning-process/planning-process.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMvcGxhbm5pbmctcHJvY2Vzcy9wbGFubmluZy1wcm9jZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVFLGlCQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWhlYWRpbmcge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwcHggIzQ4NDg0OCwgNXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgZm9udC1mYW1pbHk6IERNIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4vKiBwYWdlIGNvbnRlbnQgKi9cbmgxLCBoMiwgaDMsIGg1LCBoNCwgaDYge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBUcmVidWNoZXQgTVM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iZy1pbWFnZSB7XG4gIG1pbi1oZWlnaHQ6IDY1dmg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhlYWRlci1pbnNpZGUtaW1hZ2Uge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICMwMjMwNDc7XG4gIGZvbnQtZmFtaWx5OiBETSBTYW5zO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYmx1ZS1zZWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmN2ZmO1xuICBwYWRkaW5nOiAyMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 291:
/*!*********************************************************!*\
  !*** ./src/app/examples/services/services.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ServicesComponent {
  static #_ = this.ɵfac = function ServicesComponent_Factory(t) {
    return new (t || ServicesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ServicesComponent,
    selectors: [["app-services"]],
    decls: 29,
    vars: 0,
    consts: [["data-parallax", "true", 1, "page-header", "bg-image", "img-fluid", 2, "background-image", "url('./assets/img/services-bg.jpg')"], [1, "filter"], [1, "container", "content-center"], [1, "row"], [2, "width", "100px"], [1, "header-inside-image"], ["id", "main-heading"], [2, "margin-top", "0px", "text-align", "left"], [1, "main"], [1, "section"], [1, "container"], [1, "col-md-8", "mr-auto", "ml-auto"], [1, "title"], [2, "color", "#212121"], [1, "row", "blue-sec"], ["src", "./assets/img/suite-of-services.jpg", "alt", "Suite of Services", 1, "img-thumbnail", 2, "box-shadow", "none !important"]],
    template: function ServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Dedicated to delivering exceptional service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 3)(15, "div", 11)(16, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SUITE OF SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div")(20, "div", 3)(21, "div", 13)(22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " We are proud to offer a comprehensive suite of services designed to help our clients achieve their financial goals. From investment management and retirement planning to tax strategies and insurance solutions, we have the expertise and experience to guide you through every step. With access to the latest technology and software planning solutions, we are dedicated to helping you understand and reach your financial milestones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br")(25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14)(27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["#main-heading[_ngcontent-%COMP%] {\n  text-shadow: 2px 2px 0px #484848, 5px 4px 0px rgba(0, 0, 0, 0.15);\n  font-family: DM Sans;\n  font-weight: 700;\n  position: relative;\n  text-align: left !important;\n}\n\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  color: white;\n  font-family: Trebuchet MS;\n  font-weight: bold;\n  text-align: center;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  min-height: 65vh;\n  height: auto;\n}\n\n.header-inside-image[_ngcontent-%COMP%] {\n  border-left: 4px solid #fff;\n  padding-left: 35px;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #023047;\n  font-family: DM Sans;\n  font-weight: 700;\n}\n\n.blue-sec[_ngcontent-%COMP%] {\n  background-color: #ebf7ff;\n  padding: 20px;\n}\n\n.blue-sec[_ngcontent-%COMP%] {\n  background-color: #ebf7ff;\n  padding: 20px;\n}\n/*# sourceURL=webpack://./src/app/examples/services/services.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpRUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUUsaUJBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1oZWFkaW5nIHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMHB4ICM0ODQ4NDgsIDVweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGZvbnQtZmFtaWx5OiBETSBTYW5zO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLyogcGFnZSBjb250ZW50ICovXG5oMSwgaDIsIGgzLCBoNSwgaDQsIGg2IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogVHJlYnVjaGV0IE1TO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmctaW1hZ2Uge1xuICBtaW4taGVpZ2h0OiA2NXZoO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5oZWFkZXItaW5zaWRlLWltYWdlIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjMDIzMDQ3O1xuICBmb250LWZhbWlseTogRE0gU2FucztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJsdWUtc2VjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjdmZjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmJsdWUtc2VjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjdmZjtcbiAgcGFkZGluZzogMjBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3445:
/*!*****************************************************************!*\
  !*** ./src/app/examples/who-we-serve/who-we-serve.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhoWeServeComponent": () => (/* binding */ WhoWeServeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class WhoWeServeComponent {
  constructor(router) {
    this.router = router;
  }
  inView(ele) {
    ele.scrollIntoView(false);
  }
  navigateToContact() {
    this.router.navigate(['/contact']);
  }
  static #_ = this.ɵfac = function WhoWeServeComponent_Factory(t) {
    return new (t || WhoWeServeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WhoWeServeComponent,
    selectors: [["app-who-we-serve"]],
    decls: 125,
    vars: 0,
    consts: [["id", "changed", "data-parallax", "true", 1, "page-header", "bg-image", "img-fluid", 2, "background-image", "url('./assets/img/who-we-serve-bg.jpg')"], [1, "filter"], [1, "container", "content-center"], [1, "row"], [2, "width", "100px"], [2, "border-left", "4px solid #fff", "padding-left", "20px"], [1, "main-heading"], [2, "margin-top", "0px", "text-align", "left"], [1, "main"], [1, "section", "text-center"], [1, "container"], [1, "col-md-8", "mr-auto", "ml-auto"], [1, "title"], [1, "col-md-4", "col-12", "nav-design"], [1, "nav-link", "nav-design", 3, "click"], [1, "col-md-2", "col-12", "nav-design"], [1, "who-we-serve-sec"], ["item1", ""], [1, "col-sm-6", 2, "color", "#212121"], [2, "margin-top", "0 !important"], [1, "btn", "btn-info", "btn-link", 3, "click"], [1, "col-sm-6"], ["src", "./assets/img/business-executives.jpg", "alt", "Business Executives", 1, "img-thumbnail", 2, "margin", "30% 0"], ["item2", ""], ["src", "./assets/img/millenial-family.jpg", "alt", "Millennials who are Highly Compensated", 1, "img-thumbnail", 2, "margin", "30% 0"], ["item3", ""], ["src", "./assets/img/business-partners.jpg", "alt", "Business Owners", 1, "img-thumbnail", 2, "margin", "30% 0"], ["item4", ""], ["src", "./assets/img/inheritence.jpg", "alt", "Inherited Wealth", 1, "img-thumbnail", 2, "margin", "30% 0"]],
    template: function WhoWeServeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Who We Serve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " We deliver personalized advice no matter what stage of life you\u2019re in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 3)(15, "div", 11)(16, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "THE TYPE OF CLIENTS WE SERVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3)(19, "div", 13)(20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhoWeServeComponent_Template_a_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.inView(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Experienced Corporate Executives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13)(24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhoWeServeComponent_Template_a_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.inView(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Millennials who are Highly Compensated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15)(28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhoWeServeComponent_Template_a_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](83);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.inView(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Business Owners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15)(32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhoWeServeComponent_Template_a_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](105);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.inView(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Inherited Wealth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br")(36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16, 17)(39, "div", 3)(40, "div", 18)(41, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Experienced Corporate Executives ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " John and Amanda are experienced corporate executives who have been working in their roles throughout the past decade. They are a highly compensated partnership with a complex benefits package that includes both restricted stock and deferred compensation. However, with two kids about to go to college, and their goal of retirement within eyesight, they are seeking guidance to maximize efficiency and minimize risk. While they have set aside enough money to cover yearly expenses, they are looking for ways to continue their current lifestyle without interruption. They have recently bought a second beachfront home, to spend time unwinding on long weekends, and wish to enjoy this next chapter with the tranquility that comes with careful preparation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " John and Amanda\u2019s main concerns are the looming effects of taxes and risks inherent to highly concentrated stock positions. They desire increased insight into what their retirement is going to look like, along with assistance to confidently establish strategies going into retirement. To achieve the peace of mind they desire, they are seeking professional guidance through the process of selecting tax efficient strategies and are interested in learning about various wealth preservation tactics. Typically, clients like John and Amanda have a net worth of approximately $3 to $15 million dollars. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p")(49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "How we work together:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " We work to benefit clients like John and Amanda through our platinum level service. We begin with a robust review of their benefits package, after which we identify and outline the most efficient ways to think about investments from both a tax and risk perspective. Using our gathered data, we build an individualized financial plan that helps reduce current complexities and seeks to minimize both risks and taxes. This tailor-made financial plan is finalized and then displayed within a simplified roadmap, allowing them to enjoy retirement with a peace of mind. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " If this sounds like you, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhoWeServeComponent_Template_button_click_54_listener() {
          return ctx.navigateToContact();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Let's Chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16, 23)(61, "div", 3)(62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18)(65, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Millennials who are Highly Compensated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Jackson and Renee are married with a dual income that exceeds $300,000 a year. They are driven to succeed in their careers and dedicate any spare time to their family. After many years of saving, they have proudly purchased their first home. But with one or two young kids to worry about, they are beginning to consider planning for their college education, along with arising questions into how insurance will play a role in their children\u2019s futures. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Jackson and Renee\u2019s main concerns are taxes, putting their kids through college, and saving enough money so they can retire from their stressful job before the age of 65. They are often overworked and overstressed in dealing with big, life-changing events, and want to ensure they are making the correct choices. While they often point themselves in the right financial direction, they lack the time or energy needed to be confident that they are being as efficient with their money as possible. They like their careers, but the thought of doing it any longer than required creates unnecessary unease. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p")(73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "How we work together:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " We work with clients like Jackson and Renee through our gold level service. We start with a thorough explanation of corporate benefits to ensure our clients\u2019 maximum utilization of their company\u2019s offerings and capitalize on all their hard work. We then custom-build a financial plan focused on educating and aligning a roadmap with their specific goals, highlighting targets and expectations for each step of the process. Finally, we ensure this strategy is characteristically flexible and alterable, and allowing for change. This strategic decision reflects our acknowledgement and planning for this dynamic period of life. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " If this sounds like you, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhoWeServeComponent_Template_button_click_78_listener() {
          return ctx.navigateToContact();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Let's Chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 16, 25)(84, "div", 3)(85, "div", 18)(86, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Business Owners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Jason and James are best friends who started a business together 10 years ago. After dedicating many long hours in the workplace, they are finally starting to see the results of their labor pay off. Most of their wealth is tied up in the business, but since cash flow has started to increase, they are thinking hard about what decisions they want to make. Their goals include expanding the business and building upon the momentum they have created but want to feel secure the risks there are taking won\u2019t have adverse effects upon their families. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Their main concern is the risk represented by a significant concentration of wealth in their business, and how to diversify that into alternative assets. They are concerned about saving money on taxes and are unsure if the retirement plan they started years ago is still the best option looking forward. They are looking for guidance evaluating different options in acquiring capital to expand their business. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p")(94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "How we work together:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Understanding their business is an important aspect to a successful relationship. We begin with a careful review of where the business stands currently, and where it\u2019s headed. Then we align our strategies to take both trajectories into account, creating a time-based model showing how the strategies will impact growth at each step. Business owners like Jason and James have unique needs that are different from people who work at corporations, which includes a concentrated illiquid wealth position. Planning for this growth along with a defined exit strategy is an important piece to their retirement planning. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " If this sounds like you, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhoWeServeComponent_Template_button_click_99_listener() {
          return ctx.navigateToContact();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Let's Chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 16, 27)(106, "div", 3)(107, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 18)(110, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Inherited Wealth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Joanne\u2019s mother just passed away. Her parents saved their entire lives and left Joanne with a significant sum of assets, but little instruction or knowledge on how to manage them. She is the newly appointed executor of her estate which includes real estate and various investments. Joanne\u2019s mother often gave to charities and was philanthropic at heart, and Joane is unsure of the best way to continue her legacy. This is in a confusing time in her life where she needs time to grieve but now has the responsibility of this newly inherited wealth. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Joanne has a few main concerns with her inheritance. First and foremost, she immediately wants to know what her tax situation looks like so she can plan accordingly, and if any steps can be taken to preserve the inheritance. She also wants to continue her mother\u2019s legacy of philanthropy and figure out how that will fit into her own goals for herself and her family. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p")(118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "How we work together:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " We work with clients like Joanne by first assessing her current financial position. We seek to understand what her current assets and liabilities are along with any ongoing expenses, which helps us understand how the inherited money fits into her overall financial status. We then develop a plan that addresses what to do with the assets to achieve several goals. These can include a combination of paying down debt, investing for her future, and continuing the legacy of her mother, meanwhile maximizing the use of the inheritance in making progress towards her families\u2019 future successes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " If this sounds like you, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhoWeServeComponent_Template_button_click_123_listener() {
          return ctx.navigateToContact();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Let's Chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    styles: [".main-heading[_ngcontent-%COMP%] {\n  text-shadow: 2px 2px 0px #484848, 5px 4px 0px rgba(0, 0, 0, 0.15);\n  font-family: DM Sans;\n  font-weight: 700;\n  position: relative;\n  text-align: left !important;\n}\n\n.who-we-serve-sec[_ngcontent-%COMP%] {\n  background-color: #ebf7ff;\n  padding: 20px;\n}\n\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  color: white;\n  font-family: Trebuchet MS;\n  font-weight: bold;\n  text-align: center;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  min-height: 65vh;\n  height: auto;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #023047;\n  font-family: DM Sans;\n  font-weight: 700;\n}\n\n.section-titles[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n  color: #023047 !important;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\nspan[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.nav-design[_ngcontent-%COMP%] {\n  color: #023047 !important;\n  text-align: center;\n  font-size: large;\n  cursor: pointer;\n}\n\n@media only screen and (min-width: 768px) {\n  \n  .nav-design[_ngcontent-%COMP%] {\n    padding-top: 25px !important;\n    padding-right: 5px !important;\n    padding-bottom: 25px !important;\n    padding-left: 5px !important;\n  }\n}\n.nav-design[_ngcontent-%COMP%]:hover {\n  background-color: #faf9f6;\n}\n/*# sourceURL=webpack://./src/app/examples/who-we-serve/who-we-serve.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMvd2hvLXdlLXNlcnZlL3doby13ZS1zZXJ2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlFQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFLGlCQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsMEJBQUE7QUFDSjs7QUFHRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0E7SUFDRSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0EsK0JBQUE7SUFDQSw0QkFBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFLHlCQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1oZWFkaW5nIHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMHB4ICM0ODQ4NDgsIDVweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGZvbnQtZmFtaWx5OiBETSBTYW5zO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLndoby13ZS1zZXJ2ZS1zZWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmN2ZmO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4vKiBwYWdlIGNvbnRlbnQgKi9cbmgxLCBoMiwgaDMsIGg1LCBoNiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFRyZWJ1Y2hldCBNUztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJnLWltYWdlIHtcbiAgbWluLWhlaWdodDogNjV2aDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzAyMzA0NztcbiAgZm9udC1mYW1pbHk6IERNIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zZWN0aW9uLXRpdGxlcyB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMjMwNDcgIWltcG9ydGFudDtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnNwYW4ge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm5hdi1kZXNpZ24ge1xuICBjb2xvcjogIzAyMzA0NyAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAvKiBGb3IgZGVza3RvcDogKi9cbiAgLm5hdi1kZXNpZ24ge1xuICAgIHBhZGRpbmctdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICB9XG59XG4ubmF2LWRlc2lnbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY5ZjY7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () {
  return ["/"];
};
const _c1 = function () {
  return ["/about"];
};
const _c2 = function () {
  return ["/whoweserve"];
};
const _c3 = function () {
  return ["/planningprocess"];
};
const _c4 = function () {
  return ["/contact"];
};
class FooterComponent {
  constructor() {
    this.test = new Date();
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 73,
    vars: 10,
    consts: [[1, "footer", 2, "background", "#032f60", "color", "#ffffff", "padding", "10px"], [1, "container"], [1, "row"], [1, "col-md-4", "col-12"], [2, "line-height", "1em"], [1, "fa", "fa-map-marker", "fa-fw", "c-map-marker-icn"], ["href", "tel:6464735800"], [1, "fa", "fa-phone", "fa-fw", "c-topbar-phone-icn", "c-phone--icn"], [1, "fa", "fa-envelope", "fa-fw", "c-topbar-email-icn", "c-email--icn"], ["href", "mailto:nathan@servetwealth.com"], ["href", "https://www.linkedin.com/in/nathan-lee-cfp%C2%AE-63aa588/", "rel", "tooltip", "title", "LinkedIn", 1, "btn", "btn-facebook-bg", "facebook-sharrre"], [1, "fa", "fa-linkedin"], ["href", "https://www.facebook.com/servetwealth", "rel", "tooltip", "title", "Facebook", 1, "btn", "btn-facebook-bg", "facebook-sharrre"], [1, "fa", "fa-facebook-square"], [1, "nav-link", 3, "routerLink"], ["aria-hidden", "true"], ["target", "_blank", "href", "https://images.response.advisorgroup.com/Web/ADVISORGROUPINC/%7Bba9f6109-8900-4b3d-875f-30c48ad4ee9b%7D_Form_CRS_-_Triad_Advisors_LLC.pdf", 1, "link-underline"], ["target", "_blank", "href", "https://brokercheck.finra.org/", 1, "link-underline"], ["target", "_blank", "href", "https://www.finra.org/#/", 1, "link-underline"], ["target", "_blank", "href", "https://www.sipc.org/", 1, "link-underline"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Servet Wealth Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 127 W 30th St, 9th FL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 \u00A0\u00A0\u00A0\u00A0New York, NY 10001 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p")(14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 646-473-5800 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span")(21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "nathan@servetwealth.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "LinkedIn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3)(30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul")(33, "li")(34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li")(38, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li")(42, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Who We Serve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li")(46, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li")(50, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3)(54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Triad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Form CRS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Check the background of your financial professional on FINRA's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "BrokerCheck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Securities offered through Triad Advisors, LLC., Member ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "FINRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "SIPC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ". Advisory Services offered through Triad Hybrid Solutions LLC, a registered investment advisor. Servet Wealth Management and Triad Advisors, LLC are not affiliated. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["h3[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: DM Sans;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.link-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceURL=webpack://./src/app/shared/footer/footer.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLDBCQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyJoMywgZGl2IHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBETSBTYW5zO1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGluay11bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);






const _c0 = ["togglingOnHover"];
const _c1 = function () {
  return ["/"];
};
const _c2 = function () {
  return ["/about"];
};
const _c3 = function (a0) {
  return {
    "mobile": a0
  };
};
const _c4 = function () {
  return ["/planningprocess"];
};
const _c5 = function (a0) {
  return {
    "mobile-drop ": a0
  };
};
const _c6 = function () {
  return ["/services"];
};
const _c7 = function () {
  return ["/whoweserve"];
};
const _c8 = function () {
  return ["/contact"];
};
class NavbarComponent {
  constructor(location, element) {
    this.location = location;
    this.element = element;
    this.isMenuCollapsed = true;
    this.collapsed = true;
    this.sidebarVisible = false;
  }
  ngOnInit() {
    const navbar = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }
  onHover(event) {
    console.log("HOVERED", event);
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');
    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    viewQuery: function NavbarComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.togglingOnHover = _t.first);
      }
    },
    decls: 43,
    vars: 23,
    consts: [["color-on-scroll", "500", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "container"], [1, "navbar-translate"], [1, "box"], ["src", "assets/img/servet-wealth-logo.jpg", "alt", "Logo", 2, "max-height", "5rem", "border-radius", "50%"], ["id", "logo-comp-name"], [2, "font-size", "3rem", "font-weight", "100"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarToggler", "aria-controls", "navbarTogglerDemo02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-burger", 3, "click"], [1, "navbar-toggler-bar"], ["id", "navbarToggler", 1, "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", 3, "mouseleave"], ["rel", "tooltip", "data-placement", "bottom", 1, "nav-link", "nav-style", 3, "routerLink"], ["placement", "bottom-end", 1, "nav-item", 2, "cursor", "pointer", 3, "mouseleave"], ["ngbDropdown", "", 1, "dropdown-show", 2, "margin-bottom", "0 !important", 3, "mouseenter"], ["myDrop", "ngbDropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "nav-link", "nav-style", 2, "margin-bottom", "0 !important", 3, "ngClass", "routerLink"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 2, "margin-top", "0 !important", "border-radius", "0px !important"], ["togglingOnHover", ""], ["ngbDropdownItem", "", 3, "routerLink", "ngClass"], [1, "nav-link", "nav-style", 3, "routerLink"], [1, "nav-item"], ["href", "https://wealth.emaplan.com/ent/SignIn?ent%2fema%2flts%2ftriad%2fnathanlee", 1, "nav-link", "nav-style"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SERVET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "WEALTH MANAGEMENT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_11_listener() {
          return ctx.sidebarToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8)(13, "span", 8)(14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9)(16, "ul", 10)(17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function NavbarComponent_Template_li_mouseleave_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
          $event.stopPropagation();
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.close());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function NavbarComponent_Template_li_mouseleave_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
          $event.stopPropagation();
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.close());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function NavbarComponent_Template_li_mouseleave_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
          $event.stopPropagation();
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.close());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavbarComponent_Template_div_mouseenter_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
          $event.stopPropagation();
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.open());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17, 18)(30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Planning Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function NavbarComponent_Template_li_mouseleave_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
          $event.stopPropagation();
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.close());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Who We Serve ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function NavbarComponent_Template_li_mouseleave_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
          $event.stopPropagation();
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.close());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 21)(41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Client Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, ctx.sidebarVisible))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c4))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c5, ctx.sidebarVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c6))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c5, ctx.sidebarVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c8));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavbar],
    styles: [".box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n#logo-comp-name[_ngcontent-%COMP%] {\n  color: #032f60;\n  margin-left: 10px;\n  letter-spacing: 2px;\n  font-family: \"Gotham\", Trajan, Pro;\n  line-height: 1 !important;\n}\n\n.nav-style[_ngcontent-%COMP%] {\n  font-family: Gotham, Trajan, Pro;\n}\n\n.mobile[_ngcontent-%COMP%] {\n  color: #9A9A9A !important;\n  margin: 0px 0px !important;\n  padding: 15px 0 !important;\n  text-transform: uppercase;\n  font-weight: 600 !important;\n  font-size: 12px !important;\n  line-height: 1.5em !important;\n}\n\n.mobile-drop[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceURL=webpack://./src/app/shared/navbar/navbar.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxhQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNsb2dvLWNvbXAtbmFtZSB7XG4gIGNvbG9yOiAjMDMyZjYwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiR290aGFtXCIsIFRyYWphbiwgUHJvO1xuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xufVxuXG4ubmF2LXN0eWxlIHtcbiAgZm9udC1mYW1pbHk6IEdvdGhhbSwgVHJhamFuLCBQcm87XG59XG5cbi5tb2JpbGUge1xuICBjb2xvcjogIzlBOUE5QSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTVweCAwICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbSAhaW1wb3J0YW50O1xufVxuXG4ubW9iaWxlLWRyb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6344), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map