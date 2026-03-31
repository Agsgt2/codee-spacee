import chalk from "chalk"
import { execute } from "./addons/funcs.mts"

console.log(execute(chalk, "green").call("hi!"))