"use strict";
exports.__esModule = true;
exports.useGetCssFishkiQuery = exports.cssFishkiAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.cssFishkiAPI = react_1.createApi({
    reducerPath: "cssFishkiAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getCssFishki: build.query({
            query: function () { return ({
                url: "/linksCSSFishki"
            }); }
        })
    }); }
});
exports.useGetCssFishkiQuery = exports.cssFishkiAPI.useGetCssFishkiQuery;
//  регистрируем в store/store.ts
