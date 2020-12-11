/** Returns true if `maybePromise` is a Promise. */
export declare const isPromise: <T>(maybePromise: T | Promise<T>) => maybePromise is Promise<T>;
export declare const ensurePromise: <T>(maybePromise: T | Promise<T>) => Promise<T>;
