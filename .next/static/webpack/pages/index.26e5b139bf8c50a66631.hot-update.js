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

var DUMMY_MEETUPS = [{
  id: "m1",
  title: "A First Meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
  address: "Some address 5, 12345 Some City",
  description: "This is a first meetup!"
}, {
  id: "m2",
  title: "A Second Meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
  address: "Some address 10, 12345 Some City",
  description: "This is a second meetup!"
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDdUM7Q0FFdkM7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLENBQ3BCO0FBQ0VDLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxnQkFGVDtBQUdFQyxPQUFLLEVBQ0gsd0hBSko7QUFLRUMsU0FBTyxFQUFFLGlDQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBRG9CLEVBU3BCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxpQkFGVDtBQUdFQyxPQUFLLEVBQ0gsd0hBSko7QUFLRUMsU0FBTyxFQUFFLGtDQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBVG9CLENBQXRCOztBQW1CQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QjtBQUNBLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNELEMsQ0FFRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0tBZlNGLFE7QUFpQlQ7O0FBMkJlQSx1RUFBZixFLENBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjZlNWIxMzliZjhjNTBhNjY2MzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiOyAvLyBuZXh0SnMgcnVucyB0aGlzIGxpbmUgaW4gc2VydmVyXHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwibTFcIixcclxuICAgIHRpdGxlOiBcIkEgRmlyc3QgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtMlwiLFxyXG4gICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyAxMCwgMTIzNDUgU29tZSBDaXR5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgc2Vjb25kIG1lZXR1cCFcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICAvLzFcclxuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgICAgLy80XHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbjI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vbW1kc2VxOmYkMGNpZXRoWUBjbHVzdGVyMC5sN3czZy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwXCIpO1xyXG4gIC8vZmluZCBtZXRob2Qgd2lsbCBmaW5kIGFsbCB0aGUgZG9jdW1lbnRzIGluIHRoYXQgY29sbGVjdGlvblxyXG4gIC8vIHJlYWQgbW9yZSBhYm91dCBmaW5kKCkgaW46ICBodHRwczovL3d3dy5nZWVrc2ZvcmdlZWtzLm9yZy9tb25nb2RiLWRiLWNvbGxlY3Rpb24tZmluZC1tZXRob2QvXHJcblxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMsXHJcbiAgICAgIC8vM1xyXG4gICAgICByZXZhbGlkYXRlOiAxMCxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcblxyXG4vLzFcclxuLy8gICBjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAvLyBzZW5kIGEgaHR0cCByZXF1ZXN0IGFuZCBmZXRjaCBkYXRhXHJcbi8vICAgICAvLyBoZXJlIHdlIGhhdmUgMiByZW5kZXIgY3ljbGUgYW5kIG5leHRqcyBzZXJ2ZXJzaWRlIHJlbmRlcmluZyByZW5kZXIgb25seSBpbiBmaXJzdCBjeWNsZSBhdCBmaXJlc3QgY3ljbGUgbG9hZGVkTWVldHVwIGlzIGVtcHR5IGlmIHlvdSBsb29rIHRoZSBzb3VyY2UgY29sZSBpdHMgZW1wdHlcclxuLy8gICAgIC8vIG5leHQganMgZG9lcyBub3Qgd2FpdCBmb3IgZmV0Y2hcclxuLy8gICAgIC8vIGluIGZhY3QgcGFnZSBwcmUtcmVuZGVyIGlzIHRoZSBmaXN0IHNuYXBzaG90IHdoZW4gdGhlIGNvbXBvbmVudCByZW5kZXIgLCBpZiByb3V0ZSByZS1yZW5kZXJlZFxyXG4vLyAgICAgc2V0TG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKTtcclxuLy8gICB9LCBbXSk7XHJcblxyXG4vLyAgIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtsb2FkZWRNZWV0dXBzfSAvPjtcclxuXHJcbi8vIDJcclxuLy8gb25seSBpbiBwYWdlIGZvbGRlciB3b3Jrc1xyXG4vLyBUd28gZm9ybXMgb2YgUHJlLVJlbmRlcmluZyAtIFN0YXRpYyBHZW5lcmF0aW9uIC0gU2VydmVyPXNpZGUgUmVuZGVyaW5nXHJcbi8vIHN0YXRpYyBHZW5lcmF0aW9uICBiZWxvd1xyXG5cclxuLy8gYmVmb3JlIHJlbmRlciBwYWdlIGdldHMgc3RhdGljIFByb3BzXHJcbi8vIHRoaXMgY29kZSBuZXZlciBydW4gb24gY2xpZW50IG1hY2hpbmVzXHJcblxyXG4vLyBzbyB0aGVuIHdlIGRvbnQgbmVldCB0byB1c2UgdXNlRWZmZWN0IGJjeiB3ZSBnZXQgZGF0YSB0aHJvdWdoIHByb3BzXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLzNcclxuLy8gaWYgcHJvcHMgY2hhbmdlcyB0b28gbXVjaCB3ZSBjYW50IHJlIHJlbmRlciBzZXJ2ZXIgdmVyeSBtdWNoIGFuZCB3ZSBzaG91bGQgdXNlIHJldmFsaWRhdGUsaW4gaGVyZSBhdGxlYXN0IHdpbGwgcmUgZ2VuZXJhdGUgZXZlcnkgMTAgc2Vjb25kcyBpZiB0aGVyZSBhcmUgcmVxdXN0IGZvciB0aGlzIHBhZ2UgaWYgeW91ciBkYXRhIGNoYW5nZXMgZXZlcnkgaG91ciB5b3UgY2FzIHNldCB0aGlzIHRvIDM2MDBcclxuXHJcbi8vIHJlLXJlbmRlciBmb3IgYW55IHJlcXVlc3QgY29tbWluZ1xyXG4vLyB3aXRoIGNvbnRleHQgeW91IGNhbiBnZXIgZXZlcnkgcmVxdWVzdCBkYXRhIGFuZCByZXNwb25zZVxyXG5cclxuLy8gNFxyXG4vLyB3ZSBkb250IG5lZWQgcmV2YWxpZGF0ZSBiemMgaXRzIGdhbm5hIHJlLXJlbmRlciBmb3IgZXZlcnkgaW5jb21pbmcgcmVxdWVzdFxyXG5cclxuLy8gaWYgd2UgaGF2ZSBkYXRhIHRoYXQgY2hhbmdlcyBtdWx0aXB1bCB0aW1lIGV2ZXJ5IHNlY29uZHMgb3Igd2UgbmVlZCB0aGUgZGF0YSBvZiBodHRwIHJlcSB1c2UgZ2V0U2VydmVyU2lkZVByb3BzIGJ1dCBmb3IgYXV0aGVudGljYXRpb24gZm9yIGV4YW1wbGUgdXNlIGdldFN0YXRpY1Byb3BzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=