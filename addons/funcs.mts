export function execute<
    Fns extends Record<string, any>,
    K extends keyof Fns
>(callbacks: Fns, callbackname: K) {
    const fn = callbacks[callbackname];

    if (typeof fn === "function") {
        return {
            call: (...args: Parameters<Fns[K]>) => {
                return fn(...args);
            }
        };
    } else {
        throw new Error("Callback name is not a function.");
    }
}

export function add(a: any, b: any): any {
    return a + b
}