import { ReturnTypeFunc } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';
import { AnyConstructor } from '../common';
export interface CreateConnectionTypeArgs {
    nodeTypeFunc: ReturnTypeFunc;
    nodeTypeName: string;
}
export declare class ConnectionTypeFactory {
    static create<T>(args: CreateConnectionTypeArgs): AnyConstructor<Relay.Connection<T>>;
}
