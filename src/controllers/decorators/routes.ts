import "reflect-metadata";
import { Methods } from "./Methods";
import { MetaDataKeys } from "./MetadataKeys";
import { RequestHandler } from "express";

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

const routerBinder = (method: string) => (path: string): Function => (
  target: any,
  key: string,
  desc: RouteHandlerDescriptor
) => {
  Reflect.defineMetadata(MetaDataKeys.path, path, target, key);
  Reflect.defineMetadata(MetaDataKeys.method, method, target, key);
};

export const get = routerBinder(Methods.get);
export const put = routerBinder(Methods.put);
export const post = routerBinder(Methods.post);
export const del = routerBinder(Methods.del);
export const patch = routerBinder(Methods.patch);

// export function get(path: string): Function {
//   return function(target: any, key: string, desc: PropertyDecorator): void {
//     Reflect.defineMetadata("path", path, target, key);
//   };
// }
