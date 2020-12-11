import { ReturnTypeFunc } from '@nestjs/graphql';
import { AnyConstructor } from '../../common';
export interface CreatePayloadTypeArgs {
    typeFunc: ReturnTypeFunc;
    mutationName: string;
}
export declare class PayloadTypeFactory {
    static create(args: CreatePayloadTypeArgs): AnyConstructor;
}
