export function is_it(x: any) {
    return {
        thirteen: function () {
            return Number(x) == 13
        },
        toNumber: function () {
            return is_it(Number(x))
        },
        toString: function () {
            return is_it(String(x))
        },
        toBoolean: function () {
            return is_it(Boolean(x))
        },
        toBigInt: function () {
            return is_it(BigInt(x))
        },
        toAny: function <T>() {
            return is_it(x as T)
        },
        math: {
            add: function (y: typeof x) {
                return typeof x in ["string", "number", "bigint"] ? is_it(x + y) : is_it(x)
            },
            sub: function (y: number) {
                return typeof x == "number" ? is_it(x - y) : is_it(x)
            },
            mul: function (y: number) {
                return typeof x == "number" ? is_it(x * y) : is_it(x)
            },
            div: function (y: number) {
                return typeof x == "number" ? is_it(x / y) : is_it(x)
            }
        },
        apply: function (fn: (a: typeof x) => typeof x) {
            return is_it(fn(x))
        },
        includes: function(){
            return Array.isArray(Number(x)) ? 13 in x : false
        }
    }
}