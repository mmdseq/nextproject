webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHFGQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXREO0FBQ0E7QUFDdUM7Q0FHdkM7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkI7QUFDQSxzQkFBTyxxRUFBQyxzRUFBRDtBQUFZLFdBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCxDLENBRUQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQWZTRixRO0FBaUJUOztBQWdDZUEsdUVBQWYsRSxDQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgwMjUwOWU2ZDgzYjg4YzUxYzRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiOyAvLyBuZXh0SnMgcnVucyB0aGlzIGxpbmUgaW4gc2VydmVyXHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5cclxuLy8gaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcblxyXG4vLyBjb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGlkOiBcIm0xXCIsXHJcbi8vICAgICB0aXRsZTogXCJBIEZpcnN0IE1lZXR1cFwiLFxyXG4vLyAgICAgaW1hZ2U6XHJcbi8vICAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZ1wiLFxyXG4vLyAgICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgNSwgMTIzNDUgU29tZSBDaXR5XCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgZmlyc3QgbWVldHVwIVwiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IFwibTJcIixcclxuLy8gICAgIHRpdGxlOiBcIkEgU2Vjb25kIE1lZXR1cFwiLFxyXG4vLyAgICAgaW1hZ2U6XHJcbi8vICAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZ1wiLFxyXG4vLyAgICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgMTAsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHNlY29uZCBtZWV0dXAhXCIsXHJcbi8vICAgfSxcclxuLy8gXTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgLy8xXHJcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcclxuLy8gICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICAgIC8vNFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG4yO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL21tZHNlcTpmJDBjaWV0aFlAY2x1c3RlcjAubDd3M2cubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcbiAgLy9maW5kIG1ldGhvZCB3aWxsIGZpbmQgYWxsIHRoZSBkb2N1bWVudHMgaW4gdGhhdCBjb2xsZWN0aW9uXHJcbiAgLy8gcmVhZCBtb3JlIGFib3V0IGZpbmQoKSBpbjogIGh0dHBzOi8vd3d3LmdlZWtzZm9yZ2Vla3Mub3JnL21vbmdvZGItZGItY29sbGVjdGlvbi1maW5kLW1ldGhvZC9cclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcblxyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7XHJcbiAgICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKVxyXG4gICAgICB9KSksXHJcbiAgICAgIC8vM1xyXG4gICAgICByZXZhbGlkYXRlOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuXHJcbi8vMVxyXG4vLyAgIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgIC8vIHNlbmQgYSBodHRwIHJlcXVlc3QgYW5kIGZldGNoIGRhdGFcclxuLy8gICAgIC8vIGhlcmUgd2UgaGF2ZSAyIHJlbmRlciBjeWNsZSBhbmQgbmV4dGpzIHNlcnZlcnNpZGUgcmVuZGVyaW5nIHJlbmRlciBvbmx5IGluIGZpcnN0IGN5Y2xlIGF0IGZpcmVzdCBjeWNsZSBsb2FkZWRNZWV0dXAgaXMgZW1wdHkgaWYgeW91IGxvb2sgdGhlIHNvdXJjZSBjb2xlIGl0cyBlbXB0eVxyXG4vLyAgICAgLy8gbmV4dCBqcyBkb2VzIG5vdCB3YWl0IGZvciBmZXRjaFxyXG4vLyAgICAgLy8gaW4gZmFjdCBwYWdlIHByZS1yZW5kZXIgaXMgdGhlIGZpc3Qgc25hcHNob3Qgd2hlbiB0aGUgY29tcG9uZW50IHJlbmRlciAsIGlmIHJvdXRlIHJlLXJlbmRlcmVkXHJcbi8vICAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xyXG4vLyAgIH0sIFtdKTtcclxuXHJcbi8vICAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e2xvYWRlZE1lZXR1cHN9IC8+O1xyXG5cclxuLy8gMlxyXG4vLyBvbmx5IGluIHBhZ2UgZm9sZGVyIHdvcmtzXHJcbi8vIFR3byBmb3JtcyBvZiBQcmUtUmVuZGVyaW5nIC0gU3RhdGljIEdlbmVyYXRpb24gLSBTZXJ2ZXI9c2lkZSBSZW5kZXJpbmdcclxuLy8gc3RhdGljIEdlbmVyYXRpb24gIGJlbG93XHJcblxyXG4vLyBiZWZvcmUgcmVuZGVyIHBhZ2UgZ2V0cyBzdGF0aWMgUHJvcHNcclxuLy8gdGhpcyBjb2RlIG5ldmVyIHJ1biBvbiBjbGllbnQgbWFjaGluZXNcclxuXHJcbi8vIHNvIHRoZW4gd2UgZG9udCBuZWV0IHRvIHVzZSB1c2VFZmZlY3QgYmN6IHdlIGdldCBkYXRhIHRocm91Z2ggcHJvcHNcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vM1xyXG4vLyBpZiBwcm9wcyBjaGFuZ2VzIHRvbyBtdWNoIHdlIGNhbnQgcmUgcmVuZGVyIHNlcnZlciB2ZXJ5IG11Y2ggYW5kIHdlIHNob3VsZCB1c2UgcmV2YWxpZGF0ZSxpbiBoZXJlIGF0bGVhc3Qgd2lsbCByZSBnZW5lcmF0ZSBldmVyeSAxMCBzZWNvbmRzIGlmIHRoZXJlIGFyZSByZXF1c3QgZm9yIHRoaXMgcGFnZSBpZiB5b3VyIGRhdGEgY2hhbmdlcyBldmVyeSBob3VyIHlvdSBjYXMgc2V0IHRoaXMgdG8gMzYwMFxyXG5cclxuLy8gcmUtcmVuZGVyIGZvciBhbnkgcmVxdWVzdCBjb21taW5nXHJcbi8vIHdpdGggY29udGV4dCB5b3UgY2FuIGdlciBldmVyeSByZXF1ZXN0IGRhdGEgYW5kIHJlc3BvbnNlXHJcblxyXG4vLyA0XHJcbi8vIHdlIGRvbnQgbmVlZCByZXZhbGlkYXRlIGJ6YyBpdHMgZ2FubmEgcmUtcmVuZGVyIGZvciBldmVyeSBpbmNvbWluZyByZXF1ZXN0XHJcblxyXG4vLyBpZiB3ZSBoYXZlIGRhdGEgdGhhdCBjaGFuZ2VzIG11bHRpcHVsIHRpbWUgZXZlcnkgc2Vjb25kcyBvciB3ZSBuZWVkIHRoZSBkYXRhIG9mIGh0dHAgcmVxIHVzZSBnZXRTZXJ2ZXJTaWRlUHJvcHMgYnV0IGZvciBhdXRoZW50aWNhdGlvbiBmb3IgZXhhbXBsZSB1c2UgZ2V0U3RhdGljUHJvcHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==