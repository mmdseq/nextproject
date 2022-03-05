webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\moham\\Desktop\\react\\nextjs\\next-project\\pages\\index.js";


// nextJs runs this line in server
 // import Layout from "../components/layout/Layout";
// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 10, 12345 Some City",
//     description: "This is a second meetup!",
//   },
// ];

function HomePage(props) {
  //1
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a huge list of highly active React meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), ";"]
  }, void 0, true);
} // export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//       //4
//     },
//   };
// }


_c = HomePage;
2;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage); //1
//   const [loadedMeetups, setLoadedMeetups] = useState([]);
//   useEffect(() => {
//     // send a http request and fetch data
//     // here we have 2 render cycle and nextjs serverside rendering render only in first cycle at firest cycle loadedMeetup is empty if you look the source cole its empty
//     // next js does not wait for fetch
//     // in fact page pre-render is the fist snapshot when the component render , if route re-rendered
//     setLoadedMeetups(DUMMY_MEETUPS);
//   }, []);
//   return <MeetupList meetups={loadedMeetups} />;
// 2
// only in page folder works
// Two forms of Pre-Rendering - Static Generation - Server=side Rendering
// static Generation  below
// before render page gets static Props
// this code never run on client machines
// so then we dont neet to use useEffect bcz we get data through props
//---------------------
//3
// if props changes too much we cant re render server very much and we should use revalidate,in here atleast will re generate every 10 seconds if there are requst for this page if your data changes every hour you cas set this to 3600
// re-render for any request comming
// with context you can ger every request data and response
// 4
// we dont need revalidate bzc its ganna re-render for every incoming request
// if we have data that changes multipul time every seconds or we need the data of http req use getServerSideProps but for authentication for example use getStaticProps

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ3VDO0NBR3ZDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUUscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUEsa0JBREY7QUFZRCxDLENBRUQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQTFCU0YsUTtBQTRCVDs7QUFnQ2VBLHVFQUFmLEUsQ0FFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wY2FkY2I0NzgxNWM0YTA3OTJhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjsgLy8gbmV4dEpzIHJ1bnMgdGhpcyBsaW5lIGluIHNlcnZlclxyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuXHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5cclxuLy8gY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuLy8gICB7XHJcbi8vICAgICBpZDogXCJtMVwiLFxyXG4vLyAgICAgdGl0bGU6IFwiQSBGaXJzdCBNZWV0dXBcIixcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGdcIixcclxuLy8gICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDUsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZpcnN0IG1lZXR1cCFcIixcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiBcIm0yXCIsXHJcbi8vICAgICB0aXRsZTogXCJBIFNlY29uZCBNZWV0dXBcIixcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGdcIixcclxuLy8gICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDEwLCAxMjM0NSBTb21lIENpdHlcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBzZWNvbmQgbWVldHVwIVwiLFxyXG4vLyAgIH0sXHJcbi8vIF07XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gIC8vMVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UmVhY3QgTWVldHVwczwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiQnJvd3NlIGEgaHVnZSBsaXN0IG9mIGhpZ2hseSBhY3RpdmUgUmVhY3QgbWVldHVwc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjtcclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgICAgLy80XHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbjI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vbW1kc2VxOmYkMGNpZXRoWUBjbHVzdGVyMC5sN3czZy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICAvL2ZpbmQgbWV0aG9kIHdpbGwgZmluZCBhbGwgdGhlIGRvY3VtZW50cyBpbiB0aGF0IGNvbGxlY3Rpb25cclxuICAvLyByZWFkIG1vcmUgYWJvdXQgZmluZCgpIGluOiAgaHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmcvbW9uZ29kYi1kYi1jb2xsZWN0aW9uLWZpbmQtbWV0aG9kL1xyXG5cclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICB9KSksXHJcbiAgICAgIC8vM1xyXG4gICAgICByZXZhbGlkYXRlOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuXHJcbi8vMVxyXG4vLyAgIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgIC8vIHNlbmQgYSBodHRwIHJlcXVlc3QgYW5kIGZldGNoIGRhdGFcclxuLy8gICAgIC8vIGhlcmUgd2UgaGF2ZSAyIHJlbmRlciBjeWNsZSBhbmQgbmV4dGpzIHNlcnZlcnNpZGUgcmVuZGVyaW5nIHJlbmRlciBvbmx5IGluIGZpcnN0IGN5Y2xlIGF0IGZpcmVzdCBjeWNsZSBsb2FkZWRNZWV0dXAgaXMgZW1wdHkgaWYgeW91IGxvb2sgdGhlIHNvdXJjZSBjb2xlIGl0cyBlbXB0eVxyXG4vLyAgICAgLy8gbmV4dCBqcyBkb2VzIG5vdCB3YWl0IGZvciBmZXRjaFxyXG4vLyAgICAgLy8gaW4gZmFjdCBwYWdlIHByZS1yZW5kZXIgaXMgdGhlIGZpc3Qgc25hcHNob3Qgd2hlbiB0aGUgY29tcG9uZW50IHJlbmRlciAsIGlmIHJvdXRlIHJlLXJlbmRlcmVkXHJcbi8vICAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xyXG4vLyAgIH0sIFtdKTtcclxuXHJcbi8vICAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e2xvYWRlZE1lZXR1cHN9IC8+O1xyXG5cclxuLy8gMlxyXG4vLyBvbmx5IGluIHBhZ2UgZm9sZGVyIHdvcmtzXHJcbi8vIFR3byBmb3JtcyBvZiBQcmUtUmVuZGVyaW5nIC0gU3RhdGljIEdlbmVyYXRpb24gLSBTZXJ2ZXI9c2lkZSBSZW5kZXJpbmdcclxuLy8gc3RhdGljIEdlbmVyYXRpb24gIGJlbG93XHJcblxyXG4vLyBiZWZvcmUgcmVuZGVyIHBhZ2UgZ2V0cyBzdGF0aWMgUHJvcHNcclxuLy8gdGhpcyBjb2RlIG5ldmVyIHJ1biBvbiBjbGllbnQgbWFjaGluZXNcclxuXHJcbi8vIHNvIHRoZW4gd2UgZG9udCBuZWV0IHRvIHVzZSB1c2VFZmZlY3QgYmN6IHdlIGdldCBkYXRhIHRocm91Z2ggcHJvcHNcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vM1xyXG4vLyBpZiBwcm9wcyBjaGFuZ2VzIHRvbyBtdWNoIHdlIGNhbnQgcmUgcmVuZGVyIHNlcnZlciB2ZXJ5IG11Y2ggYW5kIHdlIHNob3VsZCB1c2UgcmV2YWxpZGF0ZSxpbiBoZXJlIGF0bGVhc3Qgd2lsbCByZSBnZW5lcmF0ZSBldmVyeSAxMCBzZWNvbmRzIGlmIHRoZXJlIGFyZSByZXF1c3QgZm9yIHRoaXMgcGFnZSBpZiB5b3VyIGRhdGEgY2hhbmdlcyBldmVyeSBob3VyIHlvdSBjYXMgc2V0IHRoaXMgdG8gMzYwMFxyXG5cclxuLy8gcmUtcmVuZGVyIGZvciBhbnkgcmVxdWVzdCBjb21taW5nXHJcbi8vIHdpdGggY29udGV4dCB5b3UgY2FuIGdlciBldmVyeSByZXF1ZXN0IGRhdGEgYW5kIHJlc3BvbnNlXHJcblxyXG4vLyA0XHJcbi8vIHdlIGRvbnQgbmVlZCByZXZhbGlkYXRlIGJ6YyBpdHMgZ2FubmEgcmUtcmVuZGVyIGZvciBldmVyeSBpbmNvbWluZyByZXF1ZXN0XHJcblxyXG4vLyBpZiB3ZSBoYXZlIGRhdGEgdGhhdCBjaGFuZ2VzIG11bHRpcHVsIHRpbWUgZXZlcnkgc2Vjb25kcyBvciB3ZSBuZWVkIHRoZSBkYXRhIG9mIGh0dHAgcmVxIHVzZSBnZXRTZXJ2ZXJTaWRlUHJvcHMgYnV0IGZvciBhdXRoZW50aWNhdGlvbiBmb3IgZXhhbXBsZSB1c2UgZ2V0U3RhdGljUHJvcHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==