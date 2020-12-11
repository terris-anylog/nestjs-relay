export declare type AnyConstructor<T = Record<string, unknown>> = new (...args: any[]) => T;
export declare type AnyFunction<A = any> = (...input: any[]) => A;
export declare type Mixin<T extends AnyFunction> = InstanceType<ReturnType<T>>;
