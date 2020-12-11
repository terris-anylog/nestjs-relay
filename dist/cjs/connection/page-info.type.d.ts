import * as Relay from 'graphql-relay';
export declare class PageInfo implements Relay.PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: Relay.ConnectionCursor;
    endCursor: Relay.ConnectionCursor;
}
