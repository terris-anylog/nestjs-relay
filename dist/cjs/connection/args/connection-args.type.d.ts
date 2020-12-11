import * as Relay from 'graphql-relay';
export declare class ConnectionArgs implements Relay.ConnectionArguments {
    before?: Relay.ConnectionCursor;
    after?: Relay.ConnectionCursor;
    first?: number;
    last?: number;
}
