import { ReturnTypeFunc, MutationOptions } from '@nestjs/graphql';
export declare type RelayMutationOptions = Omit<MutationOptions, 'nullable'>;
export declare function RelayMutation<T>(typeFunc: ReturnTypeFunc, options?: RelayMutationOptions): MethodDecorator;
