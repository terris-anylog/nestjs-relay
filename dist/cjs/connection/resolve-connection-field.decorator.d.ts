import { ReturnTypeFunc, FieldOptions } from '@nestjs/graphql';
export declare type ResolveConnectionFieldOptions = Omit<FieldOptions, 'nullable'>;
export declare function ResolveConnectionField(nodeTypeFunc: ReturnTypeFunc, options?: ResolveConnectionFieldOptions): MethodDecorator;
