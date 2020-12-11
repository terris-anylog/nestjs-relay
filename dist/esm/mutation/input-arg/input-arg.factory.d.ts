import { ArgsOptions } from '@nestjs/graphql';
import { ParameterMetadata } from '../../common';
export interface CreateInputTypeArgs {
    params: ParameterMetadata[];
    mutationName: string;
}
export declare type InputArgOptions = Pick<ArgsOptions, 'type' | 'description'> & {
    paramIndex: number;
};
export declare class InputArgFactory {
    static create(args: CreateInputTypeArgs): InputArgOptions;
}
