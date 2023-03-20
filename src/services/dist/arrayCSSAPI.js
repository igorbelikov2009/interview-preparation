"use strict";
exports.__esModule = true;
exports.useGetArrayCSSQuery = exports.arrayCSSAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.arrayCSSAPI = react_1.createApi({
    reducerPath: "arrayCSSAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getArrayCSS: build.query({
            query: function () { return ({
                url: "/arrayCSS"
            }); }
        })
    }); }
});
exports.useGetArrayCSSQuery = exports.arrayCSSAPI.useGetArrayCSSQuery;
//  регистрируем в store/store.ts
