import { CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
import { ResolvedGlobalId } from './resolved-global-id.class';
export declare class GlobalIdScalar implements CustomScalar<string, ResolvedGlobalId> {
    parseValue(value: string): ResolvedGlobalId;
    serialize(value: ResolvedGlobalId): string;
    parseLiteral(ast: ValueNode): ResolvedGlobalId;
}
