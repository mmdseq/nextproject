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
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 10
  }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN1QztDQUV2QztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QjtBQUNBLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNELEMsQ0FFRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0tBZlNGLFE7QUFpQlQ7O0FBZ0NlQSx1RUFBZixFLENBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODI3NTQ0YmNkMDEyY2M4ZDg5MjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiOyAvLyBuZXh0SnMgcnVucyB0aGlzIGxpbmUgaW4gc2VydmVyXHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuXHJcbi8vIGNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IFwibTFcIixcclxuLy8gICAgIHRpdGxlOiBcIkEgRmlyc3QgTWVldHVwXCIsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXHJcbi8vICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCIsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogXCJtMlwiLFxyXG4vLyAgICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldHVwXCIsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXHJcbi8vICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyAxMCwgMTIzNDUgU29tZSBDaXR5XCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgc2Vjb25kIG1lZXR1cCFcIixcclxuLy8gICB9LFxyXG4vLyBdO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICAvLzFcclxuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgICAgLy80XHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbjI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vbW1kc2VxOmYkMGNpZXRoWUBjbHVzdGVyMC5sN3czZy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICAvL2ZpbmQgbWV0aG9kIHdpbGwgZmluZCBhbGwgdGhlIGRvY3VtZW50cyBpbiB0aGF0IGNvbGxlY3Rpb25cclxuICAvLyByZWFkIG1vcmUgYWJvdXQgZmluZCgpIGluOiAgaHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmcvbW9uZ29kYi1kYi1jb2xsZWN0aW9uLWZpbmQtbWV0aG9kL1xyXG5cclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHtcclxuICAgICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpXHJcbiAgICAgIH0pKSxcclxuICAgICAgLy8zXHJcbiAgICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG5cclxuLy8xXHJcbi8vICAgY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgLy8gc2VuZCBhIGh0dHAgcmVxdWVzdCBhbmQgZmV0Y2ggZGF0YVxyXG4vLyAgICAgLy8gaGVyZSB3ZSBoYXZlIDIgcmVuZGVyIGN5Y2xlIGFuZCBuZXh0anMgc2VydmVyc2lkZSByZW5kZXJpbmcgcmVuZGVyIG9ubHkgaW4gZmlyc3QgY3ljbGUgYXQgZmlyZXN0IGN5Y2xlIGxvYWRlZE1lZXR1cCBpcyBlbXB0eSBpZiB5b3UgbG9vayB0aGUgc291cmNlIGNvbGUgaXRzIGVtcHR5XHJcbi8vICAgICAvLyBuZXh0IGpzIGRvZXMgbm90IHdhaXQgZm9yIGZldGNoXHJcbi8vICAgICAvLyBpbiBmYWN0IHBhZ2UgcHJlLXJlbmRlciBpcyB0aGUgZmlzdCBzbmFwc2hvdCB3aGVuIHRoZSBjb21wb25lbnQgcmVuZGVyICwgaWYgcm91dGUgcmUtcmVuZGVyZWRcclxuLy8gICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XHJcbi8vICAgfSwgW10pO1xyXG5cclxuLy8gICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17bG9hZGVkTWVldHVwc30gLz47XHJcblxyXG4vLyAyXHJcbi8vIG9ubHkgaW4gcGFnZSBmb2xkZXIgd29ya3NcclxuLy8gVHdvIGZvcm1zIG9mIFByZS1SZW5kZXJpbmcgLSBTdGF0aWMgR2VuZXJhdGlvbiAtIFNlcnZlcj1zaWRlIFJlbmRlcmluZ1xyXG4vLyBzdGF0aWMgR2VuZXJhdGlvbiAgYmVsb3dcclxuXHJcbi8vIGJlZm9yZSByZW5kZXIgcGFnZSBnZXRzIHN0YXRpYyBQcm9wc1xyXG4vLyB0aGlzIGNvZGUgbmV2ZXIgcnVuIG9uIGNsaWVudCBtYWNoaW5lc1xyXG5cclxuLy8gc28gdGhlbiB3ZSBkb250IG5lZXQgdG8gdXNlIHVzZUVmZmVjdCBiY3ogd2UgZ2V0IGRhdGEgdGhyb3VnaCBwcm9wc1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8zXHJcbi8vIGlmIHByb3BzIGNoYW5nZXMgdG9vIG11Y2ggd2UgY2FudCByZSByZW5kZXIgc2VydmVyIHZlcnkgbXVjaCBhbmQgd2Ugc2hvdWxkIHVzZSByZXZhbGlkYXRlLGluIGhlcmUgYXRsZWFzdCB3aWxsIHJlIGdlbmVyYXRlIGV2ZXJ5IDEwIHNlY29uZHMgaWYgdGhlcmUgYXJlIHJlcXVzdCBmb3IgdGhpcyBwYWdlIGlmIHlvdXIgZGF0YSBjaGFuZ2VzIGV2ZXJ5IGhvdXIgeW91IGNhcyBzZXQgdGhpcyB0byAzNjAwXHJcblxyXG4vLyByZS1yZW5kZXIgZm9yIGFueSByZXF1ZXN0IGNvbW1pbmdcclxuLy8gd2l0aCBjb250ZXh0IHlvdSBjYW4gZ2VyIGV2ZXJ5IHJlcXVlc3QgZGF0YSBhbmQgcmVzcG9uc2VcclxuXHJcbi8vIDRcclxuLy8gd2UgZG9udCBuZWVkIHJldmFsaWRhdGUgYnpjIGl0cyBnYW5uYSByZS1yZW5kZXIgZm9yIGV2ZXJ5IGluY29taW5nIHJlcXVlc3RcclxuXHJcbi8vIGlmIHdlIGhhdmUgZGF0YSB0aGF0IGNoYW5nZXMgbXVsdGlwdWwgdGltZSBldmVyeSBzZWNvbmRzIG9yIHdlIG5lZWQgdGhlIGRhdGEgb2YgaHR0cCByZXEgdXNlIGdldFNlcnZlclNpZGVQcm9wcyBidXQgZm9yIGF1dGhlbnRpY2F0aW9uIGZvciBleGFtcGxlIHVzZSBnZXRTdGF0aWNQcm9wc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9