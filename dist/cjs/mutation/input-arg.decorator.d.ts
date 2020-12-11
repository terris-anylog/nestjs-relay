import { ArgsOptions, ReturnTypeFunc } from '@nestjs/graphql';
export declare type InputArgOptions = Omit<ArgsOptions, 'name' | 'nullable' | 'type' | 'defaultValue'>;
export declare function InputArg<T>(typeFunc: ReturnTypeFunc, options?: InputArgOptions): ParameterDecorator;
