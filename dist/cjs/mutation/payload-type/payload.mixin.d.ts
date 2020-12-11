import { AnyConstructor, Mixin } from '../../common';
export declare const getPayloadName: (mutationName: string) => string;
export declare type PayloadMixin = Mixin<typeof PayloadMixin>;
export declare function PayloadMixin<TBase extends AnyConstructor>(base: TBase, mutationName: string): {
    new (...args: any[]): {
        [x: string]: unknown;
        clientMutationId?: string | undefined;
    };
} & TBase;
