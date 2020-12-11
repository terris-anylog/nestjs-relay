import { AnyConstructor, Mixin } from '../../common';
export declare const getInputName: (mutationName: string) => string;
export declare type InputMixin = Mixin<typeof InputMixin>;
export declare function InputMixin<TBase extends AnyConstructor>(base: TBase, mutationName: string): {
    new (...args: any[]): {
        [x: string]: unknown;
        clientMutationId?: string | undefined;
    };
} & TBase;
