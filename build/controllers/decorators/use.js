"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(MetadataKeys_1.MetaDataKeys.middleware, target, key) || [];
        Reflect.defineMetadata(MetadataKeys_1.MetaDataKeys.middleware, middlewares.concat([middleware]), target, key);
    };
}
exports.use = use;
