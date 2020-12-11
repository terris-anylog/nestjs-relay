import { ArgsOptions, ReturnTypeFunc } from '@nestjs/graphql';
export interface MethodIdentifier {
    target: Object;
    key: string | symbol;
}
export declare type ParameterMetadata = Omit<ArgsOptions, 'type'> & {
    typeFunc: ReturnTypeFunc;
    paramIndex: number;
};
export interface ClassIdentifier {
    target: Function;
}
export declare type ClassMetadata = {
    name: string;
};
export declare class MetadataStorage {
    static addMethodMetadata(args: MethodIdentifier & ParameterMetadata): void;
    static getMethodMetadata({ target, key }: MethodIdentifier): ParameterMetadata[];
    static addClassMetadata(args: ClassIdentifier & ClassMetadata): void;
    static getClassMetadata({ target }: ClassIdentifier): ClassMetadata;
}
