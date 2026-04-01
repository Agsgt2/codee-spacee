export namespace math {
    export function add(a: string, b: string): string
    export function add(a: number, b: number): number
    export function add(a: any, b: any){
        return a + b
    }
    export function sub(a: number, b: number){
        return a - b
    }
    export function mul(a: number, b: number){
        return a * b
    }
    export const funcs = {
        random: Math.random,
        round: Math.round
    } as const
}

export namespace shapes {
    export type shapeObject = {
        kind: "circle";
        radius: number;
    } | {
        kind: "square";
        length: number;
    } | {
        kind: "polygon";
        vertices: [number, number][];
    } | {
        kind: "custom";
        properties: Record<string, unknown>
    }
    export class Shape{
        protected kind: shapeObject["kind"];
        protected shape: shapeObject;
        constructor(s: shapeObject){
            this.kind = s.kind
            this.shape = s
        }
        changeSize(size: number){
            if (this.shape.kind == 'circle'){
                this.shape.radius = size
            } else if (this.shape.kind == 'square'){
                this.shape.length = size
            }
        }
        addVertices(...vertices: [number, number][]){
            if (this.shape.kind == "polygon") {
                this.shape.vertices.push(...vertices)
            }
        }
        getInfo(){
            return [this.shape, this.kind]
        }
        addProperty(propName: string, prop: unknown){
            if (this.shape.kind == "custom") {
                this.shape.properties[propName] = prop
            }
        }
    }
}

export namespace types {
    export type keys<of> = keyof of
    export type BecomePartial<Type> = Type | undefined
    export type OrArray<Type> = Type | Type[]
    export type Empty = undefined
}