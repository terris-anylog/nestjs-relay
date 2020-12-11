import { ResolvedGlobalId } from '../global-id';
export declare class NodeInterface {
    id: ResolvedGlobalId;
}
export declare const typeNodeInterface: () => typeof NodeInterface;
export declare const typeNodeInterfaces: () => (typeof NodeInterface)[];
export declare const returnsNodeInterface: () => typeof NodeInterface;
export declare const returnsNodeInterfaces: () => (typeof NodeInterface)[];
