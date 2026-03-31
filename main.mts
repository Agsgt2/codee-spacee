import { execute } from "./addons/funcs.mts";
import * as constants from "./json/constants.json"
import * as funcs from "./addons/funcs.mts"

console.log(execute(funcs, "add").call(25, constants.pi))