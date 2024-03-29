"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
var routerBinder = function (method) { return function (path) { return function (target, key, desc) {
    Reflect.defineMetadata(MetadataKeys_1.MetaDataKeys.path, path, target, key);
    Reflect.defineMetadata(MetadataKeys_1.MetaDataKeys.method, method, target, key);
}; }; };
exports.get = routerBinder(Methods_1.Methods.get);
exports.put = routerBinder(Methods_1.Methods.put);
exports.post = routerBinder(Methods_1.Methods.post);
exports.del = routerBinder(Methods_1.Methods.del);
exports.patch = routerBinder(Methods_1.Methods.patch);
// export function get(path: string): Function {
//   return function(target: any, key: string, desc: PropertyDecorator): void {
//     Reflect.defineMetadata("path", path, target, key);
//   };
// }
