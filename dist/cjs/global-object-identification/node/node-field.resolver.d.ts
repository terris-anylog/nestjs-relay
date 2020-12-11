import { NodeInterface } from './node.interface';
import { ResolvedGlobalId } from '../global-id';
export declare type ResolvedNode = Promise<NodeInterface> | NodeInterface | Promise<null> | null | Promise<undefined> | undefined;
export interface NodeResolver {
    resolveNode(id: ResolvedGlobalId): ResolvedNode;
}
export declare class NodeFieldResolver implements NodeResolver {
    resolveNode(id: ResolvedGlobalId): ResolvedNode;
    node(id: ResolvedGlobalId): ResolvedNode;
    nodes(ids: ResolvedGlobalId[]): Promise<ResolvedNode[]>;
}
