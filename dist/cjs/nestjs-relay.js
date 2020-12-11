'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var graphql = require('@nestjs/graphql');
var graphqlRelay = require('graphql-relay');
var graphql$1 = require('graphql');
var util = require('util');

class ResolvedGlobalId {
    constructor(args) {
        this.type = args.type;
        this.id = args.id;
    }
    toString() {
        return this.id;
    }
    toNumber() {
        return Number(this.id);
    }
}
const typeResolvedGlobalId = () => ResolvedGlobalId;
const typeResolvedGlobalIds = () => [ResolvedGlobalId];

const GlobalIdField = (options) => graphql.ResolveField(typeResolvedGlobalId, Object.assign({ name: 'id', nullable: false }, options));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function GlobalIdFieldResolver(classRef, idFieldOptions) {
    const globalIdFieldOptions = idFieldOptions || {};
    let GlobalIdFieldResolverHost = class GlobalIdFieldResolverHost {
        id(parent, info) {
            if (!parent || !parent.id) {
                throw new Error(`Cannot resolve id when 'parent' or 'parent.id' is null`);
            }
            switch (typeof parent.id) {
                case 'object':
                    return parent.id;
                case 'string':
                    return new ResolvedGlobalId({
                        type: info.parentType.name,
                        id: parent.id,
                    });
                case 'number':
                    return new ResolvedGlobalId({
                        type: info.parentType.name,
                        id: parent.id.toString(),
                    });
            }
        }
    };
    __decorate([
        GlobalIdField(globalIdFieldOptions),
        __param(0, graphql.Parent()), __param(1, graphql.Info()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", ResolvedGlobalId)
    ], GlobalIdFieldResolverHost.prototype, "id", null);
    GlobalIdFieldResolverHost = __decorate([
        graphql.Resolver(classRef, { isAbstract: true })
    ], GlobalIdFieldResolverHost);
    return GlobalIdFieldResolverHost;
}

exports.GlobalIdScalar = class GlobalIdScalar {
    parseValue(value) {
        const { id, type } = graphqlRelay.fromGlobalId(value);
        if (!id || !type) {
            throw new graphql$1.GraphQLError(`Invalid ID: ${value}`);
        }
        return new ResolvedGlobalId({ type, id });
    }
    serialize(value) {
        return graphqlRelay.toGlobalId(value.type, value.id);
    }
    parseLiteral(ast) {
        if (ast.kind !== graphql$1.Kind.STRING) {
            throw new graphql$1.GraphQLError(`Invalid ID type: ${ast.kind}`);
        }
        const { id, type } = graphqlRelay.fromGlobalId(ast.value);
        if (!id || !type) {
            throw new graphql$1.GraphQLError(`Invalid ID: ${ast.value}`);
        }
        return new ResolvedGlobalId({ type, id });
    }
};
exports.GlobalIdScalar = __decorate([
    graphql.Scalar('ID', typeResolvedGlobalId)
], exports.GlobalIdScalar);

exports.NodeInterface = class NodeInterface {
};
__decorate([
    graphql.Field({
        nullable: false,
        description: 'The ID of the object',
    }),
    __metadata("design:type", ResolvedGlobalId)
], exports.NodeInterface.prototype, "id", void 0);
exports.NodeInterface = __decorate([
    graphql.InterfaceType('Node', {
        description: 'An object with an ID',
    })
], exports.NodeInterface);
const returnsNodeInterface = () => exports.NodeInterface;
const returnsNodeInterfaces = () => [exports.NodeInterface];

exports.NodeFieldResolver = class NodeFieldResolver {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resolveNode(id) {
        throw new Error('Method not implemented.');
    }
    node(id) {
        return this.resolveNode(id);
    }
    nodes(ids) {
        return Promise.all(ids.map((id) => Promise.resolve(this.resolveNode(id))));
    }
};
__decorate([
    graphql.Query(returnsNodeInterface, {
        name: 'node',
        description: 'Fetches an object given its ID',
        nullable: true,
    }),
    __param(0, graphql.Args({
        name: 'id',
        nullable: false,
        description: 'The ID of an object',
        type: typeResolvedGlobalId,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ResolvedGlobalId]),
    __metadata("design:returntype", Object)
], exports.NodeFieldResolver.prototype, "node", null);
__decorate([
    graphql.Query(returnsNodeInterfaces, {
        name: 'nodes',
        description: 'Fetches objects given their IDs',
        nullable: 'items',
    }),
    __param(0, graphql.Args({
        name: 'ids',
        nullable: false,
        description: 'The IDs of objects',
        type: typeResolvedGlobalIds,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], exports.NodeFieldResolver.prototype, "nodes", null);
exports.NodeFieldResolver = __decorate([
    graphql.Resolver(exports.NodeInterface)
], exports.NodeFieldResolver);

const returnsInt = () => graphql.Int;

const BASE_KEY = 'nestjs-relay';
const METHOD_KEY = 'method';
const METHOD_METADATA_KEY = `${BASE_KEY}:${METHOD_KEY}`;
const CLASS_KEY = 'class';
const CLASS_METADATA_KEY = `${BASE_KEY}:${CLASS_KEY}`;
class MetadataStorage {
    static addMethodMetadata(args) {
        const { target, key } = args, data = __rest(args, ["target", "key"]);
        const existingMetadata = MetadataStorage.getMethodMetadata({ target, key });
        const metadata = [...existingMetadata, data];
        Reflect.defineMetadata(METHOD_METADATA_KEY, metadata, target, key);
    }
    static getMethodMetadata({ target, key }) {
        return Reflect.getMetadata(METHOD_METADATA_KEY, target, key) || [];
    }
    static addClassMetadata(args) {
        const { target } = args, data = __rest(args, ["target"]);
        const existingMetadata = MetadataStorage.getClassMetadata({ target });
        const metadata = Object.assign(Object.assign({}, existingMetadata), data);
        Reflect.defineMetadata(CLASS_METADATA_KEY, metadata, target);
    }
    static getClassMetadata({ target }) {
        return Reflect.getMetadata(CLASS_METADATA_KEY, target);
    }
}

function NodeType(nameOrOptions, objectTypeOptions) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (target) => {
        const [name, options = {}] = util.isString(nameOrOptions)
            ? [nameOrOptions, objectTypeOptions]
            : [target.name, nameOrOptions];
        const interfaces = options.implements ? [].concat(options.implements) : [];
        const nodeOptions = Object.assign(Object.assign({}, options), { implements: interfaces.concat(exports.NodeInterface) });
        MetadataStorage.addClassMetadata({ name, target });
        graphql.ObjectType(name, nodeOptions)(target);
    };
}

function InputArg(typeFunc, options) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (target, key, paramIndex) => {
        MetadataStorage.addMethodMetadata(Object.assign(Object.assign({}, options), { typeFunc,
            target,
            key,
            paramIndex }));
    };
}

const capitalise = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const getClientMutationId = (args) => {
    var _a;
    const relayArgIndex = args.findIndex((arg) => arg['clientMutationId']);
    return ((_a = args[relayArgIndex]) === null || _a === void 0 ? void 0 : _a.clientMutationId) || null;
};

const getInputName = (mutationName) => capitalise(mutationName) + 'Input';
function InputMixin(base, mutationName) {
    const name = getInputName(mutationName);
    let Input = class Input extends base {
    };
    __decorate([
        graphql.Field({
            name: 'clientMutationId',
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Input.prototype, "clientMutationId", void 0);
    Input = __decorate([
        graphql.InputType(name)
    ], Input);
    return Input;
}

class InputArgFactory {
    static create(args) {
        if (args.params.length === 0) {
            /**
             * No parameters registered
             * -> Do not create input type for this mutation
             */
            throw new Error(`Not detected any RelayArg declarations in ${args.mutationName}.`);
        }
        if (args.params.length > 1) {
            /**
             * Throw error that multiple inputs have been registered
             */
            throw new Error(`Detected multiple RelayArg declarations in ${args.mutationName}.`);
        }
        /**
         * Single argument
         * Is an input type
         * -> Add the clientMutationId field
         */
        const param = args.params[0];
        const type = param.typeFunc();
        const inputType = InputMixin(type, args.mutationName);
        return {
            type: () => inputType,
            paramIndex: param.paramIndex,
            description: param.description,
        };
    }
}

const getPayloadName = (mutationName) => capitalise(mutationName) + 'Payload';
function PayloadMixin(base, mutationName) {
    const name = getPayloadName(mutationName);
    let Payload = class Payload extends base {
    };
    __decorate([
        graphql.Field({
            name: 'clientMutationId',
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Payload.prototype, "clientMutationId", void 0);
    Payload = __decorate([
        graphql.ObjectType(name)
    ], Payload);
    return Payload;
}

class PayloadTypeFactory {
    static create(args) {
        const type = args.typeFunc();
        const payloadType = PayloadMixin(type, args.mutationName);
        return payloadType;
    }
}

/** Returns true if `maybePromise` is a Promise. */
const isPromise = (maybePromise) => { var _a; return Boolean(typeof ((_a = maybePromise) === null || _a === void 0 ? void 0 : _a.then) === 'function'); };
const ensurePromise = (maybePromise) => isPromise(maybePromise) ? maybePromise : Promise.resolve(maybePromise);

function RelayMutation(typeFunc, options) {
    return (target, key, descriptor) => {
        const mutationName = (options === null || options === void 0 ? void 0 : options.name) ? options.name : String(key);
        /**
         * Resolver Interceptor
         */
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            return __awaiter(this, void 0, void 0, function* () {
                const clientMutationId = getClientMutationId(args);
                const methodResult = yield ensurePromise(originalMethod.apply(this, args));
                return Object.assign(Object.assign({}, methodResult), { clientMutationId });
            });
        };
        /**
         * Input Type
         */
        const params = MetadataStorage.getMethodMetadata({ target, key });
        const _a = InputArgFactory.create({ params, mutationName }), { paramIndex } = _a, argOptions = __rest(_a, ["paramIndex"]);
        const inputArgOptions = Object.assign({ name: 'input', nullable: false }, argOptions);
        graphql.Args(inputArgOptions)(target, key, paramIndex);
        /**
         * Payload Type
         */
        const payloadType = PayloadTypeFactory.create({ typeFunc, mutationName });
        const mutationOptions = Object.assign(Object.assign({}, options), { name: mutationName, nullable: true });
        graphql.Mutation(() => payloadType, mutationOptions)(target, key, descriptor);
    };
}

exports.BackwardConnectionArgs = class BackwardConnectionArgs {
};
__decorate([
    graphql.Field(returnsInt),
    __metadata("design:type", Number)
], exports.BackwardConnectionArgs.prototype, "last", void 0);
__decorate([
    graphql.Field({ nullable: true }),
    __metadata("design:type", String)
], exports.BackwardConnectionArgs.prototype, "before", void 0);
exports.BackwardConnectionArgs = __decorate([
    graphql.ArgsType()
], exports.BackwardConnectionArgs);

exports.ConnectionArgs = class ConnectionArgs {
};
__decorate([
    graphql.Field({
        nullable: true,
        description: 'Paginate before opaque cursor',
    }),
    __metadata("design:type", String)
], exports.ConnectionArgs.prototype, "before", void 0);
__decorate([
    graphql.Field({
        nullable: true,
        description: 'Paginate after opaque cursor',
    }),
    __metadata("design:type", String)
], exports.ConnectionArgs.prototype, "after", void 0);
__decorate([
    graphql.Field(returnsInt, { nullable: true, description: 'Paginate first' }),
    __metadata("design:type", Number)
], exports.ConnectionArgs.prototype, "first", void 0);
__decorate([
    graphql.Field(returnsInt, { nullable: true, description: 'Paginate last' }),
    __metadata("design:type", Number)
], exports.ConnectionArgs.prototype, "last", void 0);
exports.ConnectionArgs = __decorate([
    graphql.ArgsType()
], exports.ConnectionArgs);

exports.ForwardConnectionArgs = class ForwardConnectionArgs {
};
__decorate([
    graphql.Field(returnsInt),
    __metadata("design:type", Number)
], exports.ForwardConnectionArgs.prototype, "first", void 0);
__decorate([
    graphql.Field({ nullable: true }),
    __metadata("design:type", String)
], exports.ForwardConnectionArgs.prototype, "after", void 0);
exports.ForwardConnectionArgs = __decorate([
    graphql.ArgsType()
], exports.ForwardConnectionArgs);

exports.PageInfo = class PageInfo {
};
__decorate([
    graphql.Field(() => Boolean),
    __metadata("design:type", Boolean)
], exports.PageInfo.prototype, "hasNextPage", void 0);
__decorate([
    graphql.Field(() => Boolean),
    __metadata("design:type", Boolean)
], exports.PageInfo.prototype, "hasPreviousPage", void 0);
__decorate([
    graphql.Field(() => String),
    __metadata("design:type", String)
], exports.PageInfo.prototype, "startCursor", void 0);
__decorate([
    graphql.Field(() => String),
    __metadata("design:type", String)
], exports.PageInfo.prototype, "endCursor", void 0);
exports.PageInfo = __decorate([
    graphql.ObjectType()
], exports.PageInfo);

class ConnectionTypeFactory {
    static create(args) {
        const nodeType = args.nodeTypeFunc();
        let Edge = class Edge {
        };
        __decorate([
            graphql.Field(() => nodeType, {
                nullable: true,
            }),
            __metadata("design:type", Object)
        ], Edge.prototype, "node", void 0);
        __decorate([
            graphql.Field(() => String),
            __metadata("design:type", String)
        ], Edge.prototype, "cursor", void 0);
        Edge = __decorate([
            graphql.ObjectType(`${args.nodeTypeName}Edge`)
        ], Edge);
        let Connection = class Connection {
        };
        __decorate([
            graphql.Field(() => [Edge], {
                nullable: 'itemsAndList',
            }),
            __metadata("design:type", Array)
        ], Connection.prototype, "edges", void 0);
        __decorate([
            graphql.Field(() => exports.PageInfo),
            __metadata("design:type", Object)
        ], Connection.prototype, "pageInfo", void 0);
        Connection = __decorate([
            graphql.ObjectType(`${args.nodeTypeName}Connection`)
        ], Connection);
        return Connection;
    }
}

function ResolveConnectionField(nodeTypeFunc, options) {
    return (target, key, descriptor) => {
        // eslint-disable-next-line @typescript-eslint/ban-types
        const nodeType = nodeTypeFunc();
        const typeMetadata = MetadataStorage.getClassMetadata({ target: nodeType });
        const connection = ConnectionTypeFactory.create({
            nodeTypeFunc,
            nodeTypeName: typeMetadata.name,
        });
        const resolveFieldOptions = Object.assign(Object.assign({}, options), { nullable: true });
        graphql.ResolveField(() => connection, resolveFieldOptions)(target, key, descriptor);
    };
}

exports.GlobalIdFieldResolver = GlobalIdFieldResolver;
exports.InputArg = InputArg;
exports.NodeType = NodeType;
exports.RelayMutation = RelayMutation;
exports.ResolveConnectionField = ResolveConnectionField;
exports.ResolvedGlobalId = ResolvedGlobalId;
//# sourceMappingURL=nestjs-relay.js.map
