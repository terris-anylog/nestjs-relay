import { Type } from '@nestjs/common';
import { GraphQLObjectType } from 'graphql';
import { GlobalId } from './global-id.type';
import { ResolvedGlobalId } from './resolved-global-id.class';
import { GlobalIdFieldOptions } from './global-id-field.decorator';
export interface ResolverParent {
    id: GlobalId;
}
export interface ResolverInfo {
    parentType: Pick<GraphQLObjectType, 'name'>;
}
export interface GlobalIdFieldResolver {
    id(parent: ResolverParent | null, info: ResolverInfo): ResolvedGlobalId;
}
export declare function GlobalIdFieldResolver<T>(classRef: Type<T>, idFieldOptions?: GlobalIdFieldOptions): Type<GlobalIdFieldResolver>;
