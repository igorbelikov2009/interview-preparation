"use strict";
exports.__esModule = true;
exports.useGetIconsLoadersQuery = exports.iconsLoadersAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.iconsLoadersAPI = react_1.createApi({
    reducerPath: "iconsLoadersAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getIconsLoaders: build.query({
            query: function () { return ({
                url: "/linksIconsLoaders"
            }); }
        })
    }); }
});
exports.useGetIconsLoadersQuery = exports.iconsLoadersAPI.useGetIconsLoadersQuery;
//  регистрируем в store/store.ts
