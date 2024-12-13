/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/login/route";
exports.ids = ["app/api/login/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=D%3A%5COnboard%5CNext%20js%5Cdashboard%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5COnboard%5CNext%20js%5Cdashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=D%3A%5COnboard%5CNext%20js%5Cdashboard%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5COnboard%5CNext%20js%5Cdashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Onboard_Next_js_dashboard_src_app_api_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/login/route.ts */ \"(rsc)/./src/app/api/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/login/route\",\n        pathname: \"/api/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/login/route\"\n    },\n    resolvedPagePath: \"D:\\\\Onboard\\\\Next js\\\\dashboard\\\\src\\\\app\\\\api\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Onboard_Next_js_dashboard_src_app_api_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4wLjRfcmVhY3QtZG9tQDE5LjAuMF9yZWFjdEAxOS4wLjBfX3JlYWN0QDE5LjAuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDT25ib2FyZCU1Q05leHQlMjBqcyU1Q2Rhc2hib2FyZCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q09uYm9hcmQlNUNOZXh0JTIwanMlNUNkYXNoYm9hcmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2U7QUFDNUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXE9uYm9hcmRcXFxcTmV4dCBqc1xcXFxkYXNoYm9hcmRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcbG9naW5cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xvZ2luL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbG9naW5cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2xvZ2luL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcT25ib2FyZFxcXFxOZXh0IGpzXFxcXGRhc2hib2FyZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxsb2dpblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=D%3A%5COnboard%5CNext%20js%5Cdashboard%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5COnboard%5CNext%20js%5Cdashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/login/route.ts":
/*!************************************!*\
  !*** ./src/app/api/login/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/api/server.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/node/esm/jwt/sign.js\");\n// src/app/api/login/route.ts\n\n // Use SignJWT for token signing\nconst SECRET_KEY = new TextEncoder().encode('your-secret-key'); // Secret key for JWT\nasync function POST(req) {\n    try {\n        const { email, password } = await req.json();\n        // Example hardcoded credentials\n        const defaultUsername = 'admin';\n        const defaultPassword = 'password123';\n        // Validate credentials (mocked for this example)\n        if (email === defaultUsername && password === defaultPassword) {\n            // Generate JWT token using jose\n            const token = await new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT({\n                userId: '12345',\n                username: email\n            }).setExpirationTime('1h').setProtectedHeader({\n                alg: 'HS256'\n            }).sign(SECRET_KEY);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                token\n            });\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Invalid credentials'\n            }, {\n                status: 401\n            });\n        }\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal Server Error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9sb2dpbi9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2QkFBNkI7QUFDYztBQUNaLENBQUMsZ0NBQWdDO0FBRWhFLE1BQU1FLGFBQWEsSUFBSUMsY0FBY0MsTUFBTSxDQUFDLG9CQUFvQixxQkFBcUI7QUFFOUUsZUFBZUMsS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7UUFFMUMsZ0NBQWdDO1FBQ2hDLE1BQU1DLGtCQUFrQjtRQUN4QixNQUFNQyxrQkFBa0I7UUFFeEIsaURBQWlEO1FBQ2pELElBQUlKLFVBQVVHLG1CQUFtQkYsYUFBYUcsaUJBQWlCO1lBQzdELGdDQUFnQztZQUNoQyxNQUFNQyxRQUFRLE1BQU0sSUFBSVgseUNBQU9BLENBQUM7Z0JBQUVZLFFBQVE7Z0JBQVNDLFVBQVVQO1lBQU0sR0FDaEVRLGlCQUFpQixDQUFDLE1BQ2xCQyxrQkFBa0IsQ0FBQztnQkFBRUMsS0FBSztZQUFRLEdBQ2xDQyxJQUFJLENBQUNoQjtZQUVSLE9BQU9GLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7Z0JBQUVHO1lBQU07UUFDbkMsT0FBTztZQUNMLE9BQU9aLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7Z0JBQUVVLE9BQU87WUFBc0IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzNFO0lBQ0YsRUFBRSxPQUFPQyxLQUFLO1FBQ1osT0FBT3JCLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRVUsT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyJEOlxcT25ib2FyZFxcTmV4dCBqc1xcZGFzaGJvYXJkXFxzcmNcXGFwcFxcYXBpXFxsb2dpblxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC9hcGkvbG9naW4vcm91dGUudHNcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBTaWduSldUIH0gZnJvbSAnam9zZSc7IC8vIFVzZSBTaWduSldUIGZvciB0b2tlbiBzaWduaW5nXHJcblxyXG5jb25zdCBTRUNSRVRfS0VZID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKCd5b3VyLXNlY3JldC1rZXknKTsgLy8gU2VjcmV0IGtleSBmb3IgSldUXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgLy8gRXhhbXBsZSBoYXJkY29kZWQgY3JlZGVudGlhbHNcclxuICAgIGNvbnN0IGRlZmF1bHRVc2VybmFtZSA9ICdhZG1pbic7XHJcbiAgICBjb25zdCBkZWZhdWx0UGFzc3dvcmQgPSAncGFzc3dvcmQxMjMnO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIGNyZWRlbnRpYWxzIChtb2NrZWQgZm9yIHRoaXMgZXhhbXBsZSlcclxuICAgIGlmIChlbWFpbCA9PT0gZGVmYXVsdFVzZXJuYW1lICYmIHBhc3N3b3JkID09PSBkZWZhdWx0UGFzc3dvcmQpIHtcclxuICAgICAgLy8gR2VuZXJhdGUgSldUIHRva2VuIHVzaW5nIGpvc2VcclxuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBuZXcgU2lnbkpXVCh7IHVzZXJJZDogJzEyMzQ1JywgdXNlcm5hbWU6IGVtYWlsIH0pXHJcbiAgICAgICAgLnNldEV4cGlyYXRpb25UaW1lKCcxaCcpXHJcbiAgICAgICAgLnNldFByb3RlY3RlZEhlYWRlcih7IGFsZzogJ0hTMjU2JyB9KVxyXG4gICAgICAgIC5zaWduKFNFQ1JFVF9LRVkpO1xyXG5cclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdG9rZW4gfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgY3JlZGVudGlhbHMnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlNpZ25KV1QiLCJTRUNSRVRfS0VZIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJQT1NUIiwicmVxIiwiZW1haWwiLCJwYXNzd29yZCIsImpzb24iLCJkZWZhdWx0VXNlcm5hbWUiLCJkZWZhdWx0UGFzc3dvcmQiLCJ0b2tlbiIsInVzZXJJZCIsInVzZXJuYW1lIiwic2V0RXhwaXJhdGlvblRpbWUiLCJzZXRQcm90ZWN0ZWRIZWFkZXIiLCJhbGciLCJzaWduIiwiZXJyb3IiLCJzdGF0dXMiLCJlcnIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/login/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0","vendor-chunks/jose@5.9.6"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=D%3A%5COnboard%5CNext%20js%5Cdashboard%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5COnboard%5CNext%20js%5Cdashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();