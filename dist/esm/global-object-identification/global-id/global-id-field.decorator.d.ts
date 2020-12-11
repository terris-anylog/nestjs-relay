import { FieldOptions } from '@nestjs/graphql';
export declare type GlobalIdFieldOptions = Pick<FieldOptions, 'complexity'>;
export declare const GlobalIdField: (options?: Pick<FieldOptions, "complexity"> | undefined) => MethodDecorator;
