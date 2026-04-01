import { shapes } from "./addons/namespaces.mts";

let sh1 = new shapes.Shape({
    kind: "custom",
    properties: {
        name: "rectangle"
    }
})

sh1.addProperty("size", {
    width: 10,
    height: 20
})

console.log(sh1.getInfo())