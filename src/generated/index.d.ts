
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model manufacturers
 * 
 */
export type manufacturers = $Result.DefaultSelection<Prisma.$manufacturersPayload>
/**
 * Model lasers
 * 
 */
export type lasers = $Result.DefaultSelection<Prisma.$lasersPayload>
/**
 * Model wavelength_specs
 * 
 */
export type wavelength_specs = $Result.DefaultSelection<Prisma.$wavelength_specsPayload>
/**
 * Model optical_specs
 * 
 */
export type optical_specs = $Result.DefaultSelection<Prisma.$optical_specsPayload>
/**
 * Model stability_specs
 * 
 */
export type stability_specs = $Result.DefaultSelection<Prisma.$stability_specsPayload>
/**
 * Model environmental_specs
 * 
 */
export type environmental_specs = $Result.DefaultSelection<Prisma.$environmental_specsPayload>
/**
 * Model pulse_specs
 * 
 */
export type pulse_specs = $Result.DefaultSelection<Prisma.$pulse_specsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model access_codes
 * 
 */
export type access_codes = $Result.DefaultSelection<Prisma.$access_codesPayload>
/**
 * Model audit_log
 * 
 */
export type audit_log = $Result.DefaultSelection<Prisma.$audit_logPayload>
/**
 * Model pending_actions
 * 
 */
export type pending_actions = $Result.DefaultSelection<Prisma.$pending_actionsPayload>
/**
 * Model rollback_history
 * 
 */
export type rollback_history = $Result.DefaultSelection<Prisma.$rollback_historyPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Manufacturers
 * const manufacturers = await prisma.manufacturers.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Manufacturers
   * const manufacturers = await prisma.manufacturers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.manufacturers`: Exposes CRUD operations for the **manufacturers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manufacturers
    * const manufacturers = await prisma.manufacturers.findMany()
    * ```
    */
  get manufacturers(): Prisma.manufacturersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lasers`: Exposes CRUD operations for the **lasers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lasers
    * const lasers = await prisma.lasers.findMany()
    * ```
    */
  get lasers(): Prisma.lasersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wavelength_specs`: Exposes CRUD operations for the **wavelength_specs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wavelength_specs
    * const wavelength_specs = await prisma.wavelength_specs.findMany()
    * ```
    */
  get wavelength_specs(): Prisma.wavelength_specsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.optical_specs`: Exposes CRUD operations for the **optical_specs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Optical_specs
    * const optical_specs = await prisma.optical_specs.findMany()
    * ```
    */
  get optical_specs(): Prisma.optical_specsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stability_specs`: Exposes CRUD operations for the **stability_specs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stability_specs
    * const stability_specs = await prisma.stability_specs.findMany()
    * ```
    */
  get stability_specs(): Prisma.stability_specsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.environmental_specs`: Exposes CRUD operations for the **environmental_specs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Environmental_specs
    * const environmental_specs = await prisma.environmental_specs.findMany()
    * ```
    */
  get environmental_specs(): Prisma.environmental_specsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pulse_specs`: Exposes CRUD operations for the **pulse_specs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pulse_specs
    * const pulse_specs = await prisma.pulse_specs.findMany()
    * ```
    */
  get pulse_specs(): Prisma.pulse_specsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.access_codes`: Exposes CRUD operations for the **access_codes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Access_codes
    * const access_codes = await prisma.access_codes.findMany()
    * ```
    */
  get access_codes(): Prisma.access_codesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audit_log`: Exposes CRUD operations for the **audit_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_logs
    * const audit_logs = await prisma.audit_log.findMany()
    * ```
    */
  get audit_log(): Prisma.audit_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pending_actions`: Exposes CRUD operations for the **pending_actions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pending_actions
    * const pending_actions = await prisma.pending_actions.findMany()
    * ```
    */
  get pending_actions(): Prisma.pending_actionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rollback_history`: Exposes CRUD operations for the **rollback_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rollback_histories
    * const rollback_histories = await prisma.rollback_history.findMany()
    * ```
    */
  get rollback_history(): Prisma.rollback_historyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    manufacturers: 'manufacturers',
    lasers: 'lasers',
    wavelength_specs: 'wavelength_specs',
    optical_specs: 'optical_specs',
    stability_specs: 'stability_specs',
    environmental_specs: 'environmental_specs',
    pulse_specs: 'pulse_specs',
    users: 'users',
    access_codes: 'access_codes',
    audit_log: 'audit_log',
    pending_actions: 'pending_actions',
    rollback_history: 'rollback_history'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "manufacturers" | "lasers" | "wavelength_specs" | "optical_specs" | "stability_specs" | "environmental_specs" | "pulse_specs" | "users" | "access_codes" | "audit_log" | "pending_actions" | "rollback_history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      manufacturers: {
        payload: Prisma.$manufacturersPayload<ExtArgs>
        fields: Prisma.manufacturersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.manufacturersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manufacturersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.manufacturersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manufacturersPayload>
          }
          findFirst: {
            args: Prisma.manufacturersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manufacturersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.manufacturersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manufacturersPayload>
          }
          findMany: {
            args: Prisma.manufacturersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manufacturersPayload>[]
          }
          create: {
            args: Prisma.manufacturersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manufacturersPayload>
          }
          createMany: {
            args: Prisma.manufacturersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.manufacturersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manufacturersPayload>[]
          }
          delete: {
            args: Prisma.manufacturersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manufacturersPayload>
          }
          update: {
            args: Prisma.manufacturersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manufacturersPayload>
          }
          deleteMany: {
            args: Prisma.manufacturersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.manufacturersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.manufacturersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manufacturersPayload>[]
          }
          upsert: {
            args: Prisma.manufacturersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manufacturersPayload>
          }
          aggregate: {
            args: Prisma.ManufacturersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManufacturers>
          }
          groupBy: {
            args: Prisma.manufacturersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManufacturersGroupByOutputType>[]
          }
          count: {
            args: Prisma.manufacturersCountArgs<ExtArgs>
            result: $Utils.Optional<ManufacturersCountAggregateOutputType> | number
          }
        }
      }
      lasers: {
        payload: Prisma.$lasersPayload<ExtArgs>
        fields: Prisma.lasersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lasersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lasersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lasersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lasersPayload>
          }
          findFirst: {
            args: Prisma.lasersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lasersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lasersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lasersPayload>
          }
          findMany: {
            args: Prisma.lasersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lasersPayload>[]
          }
          create: {
            args: Prisma.lasersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lasersPayload>
          }
          createMany: {
            args: Prisma.lasersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lasersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lasersPayload>[]
          }
          delete: {
            args: Prisma.lasersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lasersPayload>
          }
          update: {
            args: Prisma.lasersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lasersPayload>
          }
          deleteMany: {
            args: Prisma.lasersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lasersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lasersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lasersPayload>[]
          }
          upsert: {
            args: Prisma.lasersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lasersPayload>
          }
          aggregate: {
            args: Prisma.LasersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLasers>
          }
          groupBy: {
            args: Prisma.lasersGroupByArgs<ExtArgs>
            result: $Utils.Optional<LasersGroupByOutputType>[]
          }
          count: {
            args: Prisma.lasersCountArgs<ExtArgs>
            result: $Utils.Optional<LasersCountAggregateOutputType> | number
          }
        }
      }
      wavelength_specs: {
        payload: Prisma.$wavelength_specsPayload<ExtArgs>
        fields: Prisma.wavelength_specsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.wavelength_specsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wavelength_specsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.wavelength_specsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wavelength_specsPayload>
          }
          findFirst: {
            args: Prisma.wavelength_specsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wavelength_specsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.wavelength_specsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wavelength_specsPayload>
          }
          findMany: {
            args: Prisma.wavelength_specsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wavelength_specsPayload>[]
          }
          create: {
            args: Prisma.wavelength_specsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wavelength_specsPayload>
          }
          createMany: {
            args: Prisma.wavelength_specsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.wavelength_specsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wavelength_specsPayload>[]
          }
          delete: {
            args: Prisma.wavelength_specsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wavelength_specsPayload>
          }
          update: {
            args: Prisma.wavelength_specsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wavelength_specsPayload>
          }
          deleteMany: {
            args: Prisma.wavelength_specsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.wavelength_specsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.wavelength_specsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wavelength_specsPayload>[]
          }
          upsert: {
            args: Prisma.wavelength_specsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wavelength_specsPayload>
          }
          aggregate: {
            args: Prisma.Wavelength_specsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWavelength_specs>
          }
          groupBy: {
            args: Prisma.wavelength_specsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Wavelength_specsGroupByOutputType>[]
          }
          count: {
            args: Prisma.wavelength_specsCountArgs<ExtArgs>
            result: $Utils.Optional<Wavelength_specsCountAggregateOutputType> | number
          }
        }
      }
      optical_specs: {
        payload: Prisma.$optical_specsPayload<ExtArgs>
        fields: Prisma.optical_specsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.optical_specsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optical_specsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.optical_specsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optical_specsPayload>
          }
          findFirst: {
            args: Prisma.optical_specsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optical_specsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.optical_specsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optical_specsPayload>
          }
          findMany: {
            args: Prisma.optical_specsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optical_specsPayload>[]
          }
          create: {
            args: Prisma.optical_specsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optical_specsPayload>
          }
          createMany: {
            args: Prisma.optical_specsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.optical_specsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optical_specsPayload>[]
          }
          delete: {
            args: Prisma.optical_specsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optical_specsPayload>
          }
          update: {
            args: Prisma.optical_specsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optical_specsPayload>
          }
          deleteMany: {
            args: Prisma.optical_specsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.optical_specsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.optical_specsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optical_specsPayload>[]
          }
          upsert: {
            args: Prisma.optical_specsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optical_specsPayload>
          }
          aggregate: {
            args: Prisma.Optical_specsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOptical_specs>
          }
          groupBy: {
            args: Prisma.optical_specsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Optical_specsGroupByOutputType>[]
          }
          count: {
            args: Prisma.optical_specsCountArgs<ExtArgs>
            result: $Utils.Optional<Optical_specsCountAggregateOutputType> | number
          }
        }
      }
      stability_specs: {
        payload: Prisma.$stability_specsPayload<ExtArgs>
        fields: Prisma.stability_specsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stability_specsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stability_specsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stability_specsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stability_specsPayload>
          }
          findFirst: {
            args: Prisma.stability_specsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stability_specsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stability_specsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stability_specsPayload>
          }
          findMany: {
            args: Prisma.stability_specsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stability_specsPayload>[]
          }
          create: {
            args: Prisma.stability_specsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stability_specsPayload>
          }
          createMany: {
            args: Prisma.stability_specsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stability_specsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stability_specsPayload>[]
          }
          delete: {
            args: Prisma.stability_specsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stability_specsPayload>
          }
          update: {
            args: Prisma.stability_specsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stability_specsPayload>
          }
          deleteMany: {
            args: Prisma.stability_specsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stability_specsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stability_specsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stability_specsPayload>[]
          }
          upsert: {
            args: Prisma.stability_specsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stability_specsPayload>
          }
          aggregate: {
            args: Prisma.Stability_specsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStability_specs>
          }
          groupBy: {
            args: Prisma.stability_specsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stability_specsGroupByOutputType>[]
          }
          count: {
            args: Prisma.stability_specsCountArgs<ExtArgs>
            result: $Utils.Optional<Stability_specsCountAggregateOutputType> | number
          }
        }
      }
      environmental_specs: {
        payload: Prisma.$environmental_specsPayload<ExtArgs>
        fields: Prisma.environmental_specsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.environmental_specsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmental_specsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.environmental_specsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmental_specsPayload>
          }
          findFirst: {
            args: Prisma.environmental_specsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmental_specsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.environmental_specsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmental_specsPayload>
          }
          findMany: {
            args: Prisma.environmental_specsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmental_specsPayload>[]
          }
          create: {
            args: Prisma.environmental_specsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmental_specsPayload>
          }
          createMany: {
            args: Prisma.environmental_specsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.environmental_specsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmental_specsPayload>[]
          }
          delete: {
            args: Prisma.environmental_specsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmental_specsPayload>
          }
          update: {
            args: Prisma.environmental_specsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmental_specsPayload>
          }
          deleteMany: {
            args: Prisma.environmental_specsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.environmental_specsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.environmental_specsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmental_specsPayload>[]
          }
          upsert: {
            args: Prisma.environmental_specsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmental_specsPayload>
          }
          aggregate: {
            args: Prisma.Environmental_specsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvironmental_specs>
          }
          groupBy: {
            args: Prisma.environmental_specsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Environmental_specsGroupByOutputType>[]
          }
          count: {
            args: Prisma.environmental_specsCountArgs<ExtArgs>
            result: $Utils.Optional<Environmental_specsCountAggregateOutputType> | number
          }
        }
      }
      pulse_specs: {
        payload: Prisma.$pulse_specsPayload<ExtArgs>
        fields: Prisma.pulse_specsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pulse_specsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pulse_specsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pulse_specsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pulse_specsPayload>
          }
          findFirst: {
            args: Prisma.pulse_specsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pulse_specsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pulse_specsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pulse_specsPayload>
          }
          findMany: {
            args: Prisma.pulse_specsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pulse_specsPayload>[]
          }
          create: {
            args: Prisma.pulse_specsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pulse_specsPayload>
          }
          createMany: {
            args: Prisma.pulse_specsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pulse_specsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pulse_specsPayload>[]
          }
          delete: {
            args: Prisma.pulse_specsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pulse_specsPayload>
          }
          update: {
            args: Prisma.pulse_specsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pulse_specsPayload>
          }
          deleteMany: {
            args: Prisma.pulse_specsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pulse_specsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pulse_specsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pulse_specsPayload>[]
          }
          upsert: {
            args: Prisma.pulse_specsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pulse_specsPayload>
          }
          aggregate: {
            args: Prisma.Pulse_specsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePulse_specs>
          }
          groupBy: {
            args: Prisma.pulse_specsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pulse_specsGroupByOutputType>[]
          }
          count: {
            args: Prisma.pulse_specsCountArgs<ExtArgs>
            result: $Utils.Optional<Pulse_specsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      access_codes: {
        payload: Prisma.$access_codesPayload<ExtArgs>
        fields: Prisma.access_codesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.access_codesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_codesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.access_codesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_codesPayload>
          }
          findFirst: {
            args: Prisma.access_codesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_codesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.access_codesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_codesPayload>
          }
          findMany: {
            args: Prisma.access_codesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_codesPayload>[]
          }
          create: {
            args: Prisma.access_codesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_codesPayload>
          }
          createMany: {
            args: Prisma.access_codesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.access_codesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_codesPayload>[]
          }
          delete: {
            args: Prisma.access_codesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_codesPayload>
          }
          update: {
            args: Prisma.access_codesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_codesPayload>
          }
          deleteMany: {
            args: Prisma.access_codesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.access_codesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.access_codesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_codesPayload>[]
          }
          upsert: {
            args: Prisma.access_codesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_codesPayload>
          }
          aggregate: {
            args: Prisma.Access_codesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccess_codes>
          }
          groupBy: {
            args: Prisma.access_codesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Access_codesGroupByOutputType>[]
          }
          count: {
            args: Prisma.access_codesCountArgs<ExtArgs>
            result: $Utils.Optional<Access_codesCountAggregateOutputType> | number
          }
        }
      }
      audit_log: {
        payload: Prisma.$audit_logPayload<ExtArgs>
        fields: Prisma.audit_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.audit_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.audit_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          findFirst: {
            args: Prisma.audit_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.audit_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          findMany: {
            args: Prisma.audit_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>[]
          }
          create: {
            args: Prisma.audit_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          createMany: {
            args: Prisma.audit_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.audit_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>[]
          }
          delete: {
            args: Prisma.audit_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          update: {
            args: Prisma.audit_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          deleteMany: {
            args: Prisma.audit_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.audit_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.audit_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>[]
          }
          upsert: {
            args: Prisma.audit_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          aggregate: {
            args: Prisma.Audit_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit_log>
          }
          groupBy: {
            args: Prisma.audit_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Audit_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.audit_logCountArgs<ExtArgs>
            result: $Utils.Optional<Audit_logCountAggregateOutputType> | number
          }
        }
      }
      pending_actions: {
        payload: Prisma.$pending_actionsPayload<ExtArgs>
        fields: Prisma.pending_actionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pending_actionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_actionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pending_actionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_actionsPayload>
          }
          findFirst: {
            args: Prisma.pending_actionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_actionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pending_actionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_actionsPayload>
          }
          findMany: {
            args: Prisma.pending_actionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_actionsPayload>[]
          }
          create: {
            args: Prisma.pending_actionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_actionsPayload>
          }
          createMany: {
            args: Prisma.pending_actionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pending_actionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_actionsPayload>[]
          }
          delete: {
            args: Prisma.pending_actionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_actionsPayload>
          }
          update: {
            args: Prisma.pending_actionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_actionsPayload>
          }
          deleteMany: {
            args: Prisma.pending_actionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pending_actionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pending_actionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_actionsPayload>[]
          }
          upsert: {
            args: Prisma.pending_actionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_actionsPayload>
          }
          aggregate: {
            args: Prisma.Pending_actionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePending_actions>
          }
          groupBy: {
            args: Prisma.pending_actionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pending_actionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.pending_actionsCountArgs<ExtArgs>
            result: $Utils.Optional<Pending_actionsCountAggregateOutputType> | number
          }
        }
      }
      rollback_history: {
        payload: Prisma.$rollback_historyPayload<ExtArgs>
        fields: Prisma.rollback_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rollback_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rollback_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rollback_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rollback_historyPayload>
          }
          findFirst: {
            args: Prisma.rollback_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rollback_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rollback_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rollback_historyPayload>
          }
          findMany: {
            args: Prisma.rollback_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rollback_historyPayload>[]
          }
          create: {
            args: Prisma.rollback_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rollback_historyPayload>
          }
          createMany: {
            args: Prisma.rollback_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rollback_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rollback_historyPayload>[]
          }
          delete: {
            args: Prisma.rollback_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rollback_historyPayload>
          }
          update: {
            args: Prisma.rollback_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rollback_historyPayload>
          }
          deleteMany: {
            args: Prisma.rollback_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rollback_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rollback_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rollback_historyPayload>[]
          }
          upsert: {
            args: Prisma.rollback_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rollback_historyPayload>
          }
          aggregate: {
            args: Prisma.Rollback_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRollback_history>
          }
          groupBy: {
            args: Prisma.rollback_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rollback_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.rollback_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Rollback_historyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    manufacturers?: manufacturersOmit
    lasers?: lasersOmit
    wavelength_specs?: wavelength_specsOmit
    optical_specs?: optical_specsOmit
    stability_specs?: stability_specsOmit
    environmental_specs?: environmental_specsOmit
    pulse_specs?: pulse_specsOmit
    users?: usersOmit
    access_codes?: access_codesOmit
    audit_log?: audit_logOmit
    pending_actions?: pending_actionsOmit
    rollback_history?: rollback_historyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ManufacturersCountOutputType
   */

  export type ManufacturersCountOutputType = {
    lasers: number
  }

  export type ManufacturersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lasers?: boolean | ManufacturersCountOutputTypeCountLasersArgs
  }

  // Custom InputTypes
  /**
   * ManufacturersCountOutputType without action
   */
  export type ManufacturersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturersCountOutputType
     */
    select?: ManufacturersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ManufacturersCountOutputType without action
   */
  export type ManufacturersCountOutputTypeCountLasersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lasersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    access_codes: number
    audit_log: number
    pending_actions_initiated: number
    pending_actions_approved: number
    rollback_history_initiated: number
    rollback_history_approved: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    access_codes?: boolean | UsersCountOutputTypeCountAccess_codesArgs
    audit_log?: boolean | UsersCountOutputTypeCountAudit_logArgs
    pending_actions_initiated?: boolean | UsersCountOutputTypeCountPending_actions_initiatedArgs
    pending_actions_approved?: boolean | UsersCountOutputTypeCountPending_actions_approvedArgs
    rollback_history_initiated?: boolean | UsersCountOutputTypeCountRollback_history_initiatedArgs
    rollback_history_approved?: boolean | UsersCountOutputTypeCountRollback_history_approvedArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAccess_codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: access_codesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAudit_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPending_actions_initiatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pending_actionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPending_actions_approvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pending_actionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRollback_history_initiatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rollback_historyWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRollback_history_approvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rollback_historyWhereInput
  }


  /**
   * Count Type Audit_logCountOutputType
   */

  export type Audit_logCountOutputType = {
    rollback_history: number
  }

  export type Audit_logCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rollback_history?: boolean | Audit_logCountOutputTypeCountRollback_historyArgs
  }

  // Custom InputTypes
  /**
   * Audit_logCountOutputType without action
   */
  export type Audit_logCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_logCountOutputType
     */
    select?: Audit_logCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Audit_logCountOutputType without action
   */
  export type Audit_logCountOutputTypeCountRollback_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rollback_historyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model manufacturers
   */

  export type AggregateManufacturers = {
    _count: ManufacturersCountAggregateOutputType | null
    _avg: ManufacturersAvgAggregateOutputType | null
    _sum: ManufacturersSumAggregateOutputType | null
    _min: ManufacturersMinAggregateOutputType | null
    _max: ManufacturersMaxAggregateOutputType | null
  }

  export type ManufacturersAvgAggregateOutputType = {
    id: number | null
  }

  export type ManufacturersSumAggregateOutputType = {
    id: number | null
  }

  export type ManufacturersMinAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
    website: string | null
    contact_email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ManufacturersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
    website: string | null
    contact_email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ManufacturersCountAggregateOutputType = {
    id: number
    name: number
    country: number
    website: number
    contact_email: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ManufacturersAvgAggregateInputType = {
    id?: true
  }

  export type ManufacturersSumAggregateInputType = {
    id?: true
  }

  export type ManufacturersMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    website?: true
    contact_email?: true
    created_at?: true
    updated_at?: true
  }

  export type ManufacturersMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    website?: true
    contact_email?: true
    created_at?: true
    updated_at?: true
  }

  export type ManufacturersCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    website?: true
    contact_email?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ManufacturersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which manufacturers to aggregate.
     */
    where?: manufacturersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manufacturers to fetch.
     */
    orderBy?: manufacturersOrderByWithRelationInput | manufacturersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: manufacturersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned manufacturers
    **/
    _count?: true | ManufacturersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManufacturersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManufacturersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManufacturersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManufacturersMaxAggregateInputType
  }

  export type GetManufacturersAggregateType<T extends ManufacturersAggregateArgs> = {
        [P in keyof T & keyof AggregateManufacturers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManufacturers[P]>
      : GetScalarType<T[P], AggregateManufacturers[P]>
  }




  export type manufacturersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: manufacturersWhereInput
    orderBy?: manufacturersOrderByWithAggregationInput | manufacturersOrderByWithAggregationInput[]
    by: ManufacturersScalarFieldEnum[] | ManufacturersScalarFieldEnum
    having?: manufacturersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManufacturersCountAggregateInputType | true
    _avg?: ManufacturersAvgAggregateInputType
    _sum?: ManufacturersSumAggregateInputType
    _min?: ManufacturersMinAggregateInputType
    _max?: ManufacturersMaxAggregateInputType
  }

  export type ManufacturersGroupByOutputType = {
    id: number
    name: string
    country: string | null
    website: string | null
    contact_email: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ManufacturersCountAggregateOutputType | null
    _avg: ManufacturersAvgAggregateOutputType | null
    _sum: ManufacturersSumAggregateOutputType | null
    _min: ManufacturersMinAggregateOutputType | null
    _max: ManufacturersMaxAggregateOutputType | null
  }

  type GetManufacturersGroupByPayload<T extends manufacturersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManufacturersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManufacturersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManufacturersGroupByOutputType[P]>
            : GetScalarType<T[P], ManufacturersGroupByOutputType[P]>
        }
      >
    >


  export type manufacturersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    website?: boolean
    contact_email?: boolean
    created_at?: boolean
    updated_at?: boolean
    lasers?: boolean | manufacturers$lasersArgs<ExtArgs>
    _count?: boolean | ManufacturersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manufacturers"]>

  export type manufacturersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    website?: boolean
    contact_email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["manufacturers"]>

  export type manufacturersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    website?: boolean
    contact_email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["manufacturers"]>

  export type manufacturersSelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    website?: boolean
    contact_email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type manufacturersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "website" | "contact_email" | "created_at" | "updated_at", ExtArgs["result"]["manufacturers"]>
  export type manufacturersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lasers?: boolean | manufacturers$lasersArgs<ExtArgs>
    _count?: boolean | ManufacturersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type manufacturersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type manufacturersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $manufacturersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "manufacturers"
    objects: {
      lasers: Prisma.$lasersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      country: string | null
      website: string | null
      contact_email: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["manufacturers"]>
    composites: {}
  }

  type manufacturersGetPayload<S extends boolean | null | undefined | manufacturersDefaultArgs> = $Result.GetResult<Prisma.$manufacturersPayload, S>

  type manufacturersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<manufacturersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManufacturersCountAggregateInputType | true
    }

  export interface manufacturersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['manufacturers'], meta: { name: 'manufacturers' } }
    /**
     * Find zero or one Manufacturers that matches the filter.
     * @param {manufacturersFindUniqueArgs} args - Arguments to find a Manufacturers
     * @example
     * // Get one Manufacturers
     * const manufacturers = await prisma.manufacturers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends manufacturersFindUniqueArgs>(args: SelectSubset<T, manufacturersFindUniqueArgs<ExtArgs>>): Prisma__manufacturersClient<$Result.GetResult<Prisma.$manufacturersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manufacturers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {manufacturersFindUniqueOrThrowArgs} args - Arguments to find a Manufacturers
     * @example
     * // Get one Manufacturers
     * const manufacturers = await prisma.manufacturers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends manufacturersFindUniqueOrThrowArgs>(args: SelectSubset<T, manufacturersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__manufacturersClient<$Result.GetResult<Prisma.$manufacturersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manufacturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manufacturersFindFirstArgs} args - Arguments to find a Manufacturers
     * @example
     * // Get one Manufacturers
     * const manufacturers = await prisma.manufacturers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends manufacturersFindFirstArgs>(args?: SelectSubset<T, manufacturersFindFirstArgs<ExtArgs>>): Prisma__manufacturersClient<$Result.GetResult<Prisma.$manufacturersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manufacturers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manufacturersFindFirstOrThrowArgs} args - Arguments to find a Manufacturers
     * @example
     * // Get one Manufacturers
     * const manufacturers = await prisma.manufacturers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends manufacturersFindFirstOrThrowArgs>(args?: SelectSubset<T, manufacturersFindFirstOrThrowArgs<ExtArgs>>): Prisma__manufacturersClient<$Result.GetResult<Prisma.$manufacturersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Manufacturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manufacturersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manufacturers
     * const manufacturers = await prisma.manufacturers.findMany()
     * 
     * // Get first 10 Manufacturers
     * const manufacturers = await prisma.manufacturers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manufacturersWithIdOnly = await prisma.manufacturers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends manufacturersFindManyArgs>(args?: SelectSubset<T, manufacturersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$manufacturersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manufacturers.
     * @param {manufacturersCreateArgs} args - Arguments to create a Manufacturers.
     * @example
     * // Create one Manufacturers
     * const Manufacturers = await prisma.manufacturers.create({
     *   data: {
     *     // ... data to create a Manufacturers
     *   }
     * })
     * 
     */
    create<T extends manufacturersCreateArgs>(args: SelectSubset<T, manufacturersCreateArgs<ExtArgs>>): Prisma__manufacturersClient<$Result.GetResult<Prisma.$manufacturersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Manufacturers.
     * @param {manufacturersCreateManyArgs} args - Arguments to create many Manufacturers.
     * @example
     * // Create many Manufacturers
     * const manufacturers = await prisma.manufacturers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends manufacturersCreateManyArgs>(args?: SelectSubset<T, manufacturersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Manufacturers and returns the data saved in the database.
     * @param {manufacturersCreateManyAndReturnArgs} args - Arguments to create many Manufacturers.
     * @example
     * // Create many Manufacturers
     * const manufacturers = await prisma.manufacturers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Manufacturers and only return the `id`
     * const manufacturersWithIdOnly = await prisma.manufacturers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends manufacturersCreateManyAndReturnArgs>(args?: SelectSubset<T, manufacturersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$manufacturersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Manufacturers.
     * @param {manufacturersDeleteArgs} args - Arguments to delete one Manufacturers.
     * @example
     * // Delete one Manufacturers
     * const Manufacturers = await prisma.manufacturers.delete({
     *   where: {
     *     // ... filter to delete one Manufacturers
     *   }
     * })
     * 
     */
    delete<T extends manufacturersDeleteArgs>(args: SelectSubset<T, manufacturersDeleteArgs<ExtArgs>>): Prisma__manufacturersClient<$Result.GetResult<Prisma.$manufacturersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manufacturers.
     * @param {manufacturersUpdateArgs} args - Arguments to update one Manufacturers.
     * @example
     * // Update one Manufacturers
     * const manufacturers = await prisma.manufacturers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends manufacturersUpdateArgs>(args: SelectSubset<T, manufacturersUpdateArgs<ExtArgs>>): Prisma__manufacturersClient<$Result.GetResult<Prisma.$manufacturersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Manufacturers.
     * @param {manufacturersDeleteManyArgs} args - Arguments to filter Manufacturers to delete.
     * @example
     * // Delete a few Manufacturers
     * const { count } = await prisma.manufacturers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends manufacturersDeleteManyArgs>(args?: SelectSubset<T, manufacturersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manufacturersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manufacturers
     * const manufacturers = await prisma.manufacturers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends manufacturersUpdateManyArgs>(args: SelectSubset<T, manufacturersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manufacturers and returns the data updated in the database.
     * @param {manufacturersUpdateManyAndReturnArgs} args - Arguments to update many Manufacturers.
     * @example
     * // Update many Manufacturers
     * const manufacturers = await prisma.manufacturers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Manufacturers and only return the `id`
     * const manufacturersWithIdOnly = await prisma.manufacturers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends manufacturersUpdateManyAndReturnArgs>(args: SelectSubset<T, manufacturersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$manufacturersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Manufacturers.
     * @param {manufacturersUpsertArgs} args - Arguments to update or create a Manufacturers.
     * @example
     * // Update or create a Manufacturers
     * const manufacturers = await prisma.manufacturers.upsert({
     *   create: {
     *     // ... data to create a Manufacturers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manufacturers we want to update
     *   }
     * })
     */
    upsert<T extends manufacturersUpsertArgs>(args: SelectSubset<T, manufacturersUpsertArgs<ExtArgs>>): Prisma__manufacturersClient<$Result.GetResult<Prisma.$manufacturersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manufacturersCountArgs} args - Arguments to filter Manufacturers to count.
     * @example
     * // Count the number of Manufacturers
     * const count = await prisma.manufacturers.count({
     *   where: {
     *     // ... the filter for the Manufacturers we want to count
     *   }
     * })
    **/
    count<T extends manufacturersCountArgs>(
      args?: Subset<T, manufacturersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManufacturersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManufacturersAggregateArgs>(args: Subset<T, ManufacturersAggregateArgs>): Prisma.PrismaPromise<GetManufacturersAggregateType<T>>

    /**
     * Group by Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manufacturersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends manufacturersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: manufacturersGroupByArgs['orderBy'] }
        : { orderBy?: manufacturersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, manufacturersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManufacturersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the manufacturers model
   */
  readonly fields: manufacturersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for manufacturers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__manufacturersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lasers<T extends manufacturers$lasersArgs<ExtArgs> = {}>(args?: Subset<T, manufacturers$lasersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the manufacturers model
   */
  interface manufacturersFieldRefs {
    readonly id: FieldRef<"manufacturers", 'Int'>
    readonly name: FieldRef<"manufacturers", 'String'>
    readonly country: FieldRef<"manufacturers", 'String'>
    readonly website: FieldRef<"manufacturers", 'String'>
    readonly contact_email: FieldRef<"manufacturers", 'String'>
    readonly created_at: FieldRef<"manufacturers", 'DateTime'>
    readonly updated_at: FieldRef<"manufacturers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * manufacturers findUnique
   */
  export type manufacturersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manufacturers
     */
    select?: manufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manufacturers
     */
    omit?: manufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: manufacturersInclude<ExtArgs> | null
    /**
     * Filter, which manufacturers to fetch.
     */
    where: manufacturersWhereUniqueInput
  }

  /**
   * manufacturers findUniqueOrThrow
   */
  export type manufacturersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manufacturers
     */
    select?: manufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manufacturers
     */
    omit?: manufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: manufacturersInclude<ExtArgs> | null
    /**
     * Filter, which manufacturers to fetch.
     */
    where: manufacturersWhereUniqueInput
  }

  /**
   * manufacturers findFirst
   */
  export type manufacturersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manufacturers
     */
    select?: manufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manufacturers
     */
    omit?: manufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: manufacturersInclude<ExtArgs> | null
    /**
     * Filter, which manufacturers to fetch.
     */
    where?: manufacturersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manufacturers to fetch.
     */
    orderBy?: manufacturersOrderByWithRelationInput | manufacturersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for manufacturers.
     */
    cursor?: manufacturersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of manufacturers.
     */
    distinct?: ManufacturersScalarFieldEnum | ManufacturersScalarFieldEnum[]
  }

  /**
   * manufacturers findFirstOrThrow
   */
  export type manufacturersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manufacturers
     */
    select?: manufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manufacturers
     */
    omit?: manufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: manufacturersInclude<ExtArgs> | null
    /**
     * Filter, which manufacturers to fetch.
     */
    where?: manufacturersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manufacturers to fetch.
     */
    orderBy?: manufacturersOrderByWithRelationInput | manufacturersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for manufacturers.
     */
    cursor?: manufacturersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of manufacturers.
     */
    distinct?: ManufacturersScalarFieldEnum | ManufacturersScalarFieldEnum[]
  }

  /**
   * manufacturers findMany
   */
  export type manufacturersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manufacturers
     */
    select?: manufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manufacturers
     */
    omit?: manufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: manufacturersInclude<ExtArgs> | null
    /**
     * Filter, which manufacturers to fetch.
     */
    where?: manufacturersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manufacturers to fetch.
     */
    orderBy?: manufacturersOrderByWithRelationInput | manufacturersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing manufacturers.
     */
    cursor?: manufacturersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manufacturers.
     */
    skip?: number
    distinct?: ManufacturersScalarFieldEnum | ManufacturersScalarFieldEnum[]
  }

  /**
   * manufacturers create
   */
  export type manufacturersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manufacturers
     */
    select?: manufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manufacturers
     */
    omit?: manufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: manufacturersInclude<ExtArgs> | null
    /**
     * The data needed to create a manufacturers.
     */
    data: XOR<manufacturersCreateInput, manufacturersUncheckedCreateInput>
  }

  /**
   * manufacturers createMany
   */
  export type manufacturersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many manufacturers.
     */
    data: manufacturersCreateManyInput | manufacturersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * manufacturers createManyAndReturn
   */
  export type manufacturersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manufacturers
     */
    select?: manufacturersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the manufacturers
     */
    omit?: manufacturersOmit<ExtArgs> | null
    /**
     * The data used to create many manufacturers.
     */
    data: manufacturersCreateManyInput | manufacturersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * manufacturers update
   */
  export type manufacturersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manufacturers
     */
    select?: manufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manufacturers
     */
    omit?: manufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: manufacturersInclude<ExtArgs> | null
    /**
     * The data needed to update a manufacturers.
     */
    data: XOR<manufacturersUpdateInput, manufacturersUncheckedUpdateInput>
    /**
     * Choose, which manufacturers to update.
     */
    where: manufacturersWhereUniqueInput
  }

  /**
   * manufacturers updateMany
   */
  export type manufacturersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update manufacturers.
     */
    data: XOR<manufacturersUpdateManyMutationInput, manufacturersUncheckedUpdateManyInput>
    /**
     * Filter which manufacturers to update
     */
    where?: manufacturersWhereInput
    /**
     * Limit how many manufacturers to update.
     */
    limit?: number
  }

  /**
   * manufacturers updateManyAndReturn
   */
  export type manufacturersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manufacturers
     */
    select?: manufacturersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the manufacturers
     */
    omit?: manufacturersOmit<ExtArgs> | null
    /**
     * The data used to update manufacturers.
     */
    data: XOR<manufacturersUpdateManyMutationInput, manufacturersUncheckedUpdateManyInput>
    /**
     * Filter which manufacturers to update
     */
    where?: manufacturersWhereInput
    /**
     * Limit how many manufacturers to update.
     */
    limit?: number
  }

  /**
   * manufacturers upsert
   */
  export type manufacturersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manufacturers
     */
    select?: manufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manufacturers
     */
    omit?: manufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: manufacturersInclude<ExtArgs> | null
    /**
     * The filter to search for the manufacturers to update in case it exists.
     */
    where: manufacturersWhereUniqueInput
    /**
     * In case the manufacturers found by the `where` argument doesn't exist, create a new manufacturers with this data.
     */
    create: XOR<manufacturersCreateInput, manufacturersUncheckedCreateInput>
    /**
     * In case the manufacturers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<manufacturersUpdateInput, manufacturersUncheckedUpdateInput>
  }

  /**
   * manufacturers delete
   */
  export type manufacturersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manufacturers
     */
    select?: manufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manufacturers
     */
    omit?: manufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: manufacturersInclude<ExtArgs> | null
    /**
     * Filter which manufacturers to delete.
     */
    where: manufacturersWhereUniqueInput
  }

  /**
   * manufacturers deleteMany
   */
  export type manufacturersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which manufacturers to delete
     */
    where?: manufacturersWhereInput
    /**
     * Limit how many manufacturers to delete.
     */
    limit?: number
  }

  /**
   * manufacturers.lasers
   */
  export type manufacturers$lasersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lasers
     */
    select?: lasersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lasers
     */
    omit?: lasersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lasersInclude<ExtArgs> | null
    where?: lasersWhereInput
    orderBy?: lasersOrderByWithRelationInput | lasersOrderByWithRelationInput[]
    cursor?: lasersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LasersScalarFieldEnum | LasersScalarFieldEnum[]
  }

  /**
   * manufacturers without action
   */
  export type manufacturersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manufacturers
     */
    select?: manufacturersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manufacturers
     */
    omit?: manufacturersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: manufacturersInclude<ExtArgs> | null
  }


  /**
   * Model lasers
   */

  export type AggregateLasers = {
    _count: LasersCountAggregateOutputType | null
    _avg: LasersAvgAggregateOutputType | null
    _sum: LasersSumAggregateOutputType | null
    _min: LasersMinAggregateOutputType | null
    _max: LasersMaxAggregateOutputType | null
  }

  export type LasersAvgAggregateOutputType = {
    id: number | null
    manufacturer_id: number | null
    power_output_w: Decimal | null
    power_consumption_w: Decimal | null
  }

  export type LasersSumAggregateOutputType = {
    id: number | null
    manufacturer_id: number | null
    power_output_w: Decimal | null
    power_consumption_w: Decimal | null
  }

  export type LasersMinAggregateOutputType = {
    id: number | null
    model_name: string | null
    manufacturer_id: number | null
    laser_type: string | null
    modulation_type: string | null
    cooling_method: string | null
    is_single_mode: boolean | null
    power_output_w: Decimal | null
    power_consumption_w: Decimal | null
    application: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LasersMaxAggregateOutputType = {
    id: number | null
    model_name: string | null
    manufacturer_id: number | null
    laser_type: string | null
    modulation_type: string | null
    cooling_method: string | null
    is_single_mode: boolean | null
    power_output_w: Decimal | null
    power_consumption_w: Decimal | null
    application: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LasersCountAggregateOutputType = {
    id: number
    model_name: number
    manufacturer_id: number
    laser_type: number
    modulation_type: number
    cooling_method: number
    is_single_mode: number
    power_output_w: number
    power_consumption_w: number
    application: number
    notes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LasersAvgAggregateInputType = {
    id?: true
    manufacturer_id?: true
    power_output_w?: true
    power_consumption_w?: true
  }

  export type LasersSumAggregateInputType = {
    id?: true
    manufacturer_id?: true
    power_output_w?: true
    power_consumption_w?: true
  }

  export type LasersMinAggregateInputType = {
    id?: true
    model_name?: true
    manufacturer_id?: true
    laser_type?: true
    modulation_type?: true
    cooling_method?: true
    is_single_mode?: true
    power_output_w?: true
    power_consumption_w?: true
    application?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type LasersMaxAggregateInputType = {
    id?: true
    model_name?: true
    manufacturer_id?: true
    laser_type?: true
    modulation_type?: true
    cooling_method?: true
    is_single_mode?: true
    power_output_w?: true
    power_consumption_w?: true
    application?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type LasersCountAggregateInputType = {
    id?: true
    model_name?: true
    manufacturer_id?: true
    laser_type?: true
    modulation_type?: true
    cooling_method?: true
    is_single_mode?: true
    power_output_w?: true
    power_consumption_w?: true
    application?: true
    notes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LasersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lasers to aggregate.
     */
    where?: lasersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lasers to fetch.
     */
    orderBy?: lasersOrderByWithRelationInput | lasersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lasersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lasers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lasers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lasers
    **/
    _count?: true | LasersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LasersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LasersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LasersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LasersMaxAggregateInputType
  }

  export type GetLasersAggregateType<T extends LasersAggregateArgs> = {
        [P in keyof T & keyof AggregateLasers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLasers[P]>
      : GetScalarType<T[P], AggregateLasers[P]>
  }




  export type lasersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lasersWhereInput
    orderBy?: lasersOrderByWithAggregationInput | lasersOrderByWithAggregationInput[]
    by: LasersScalarFieldEnum[] | LasersScalarFieldEnum
    having?: lasersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LasersCountAggregateInputType | true
    _avg?: LasersAvgAggregateInputType
    _sum?: LasersSumAggregateInputType
    _min?: LasersMinAggregateInputType
    _max?: LasersMaxAggregateInputType
  }

  export type LasersGroupByOutputType = {
    id: number
    model_name: string
    manufacturer_id: number
    laser_type: string
    modulation_type: string
    cooling_method: string | null
    is_single_mode: boolean
    power_output_w: Decimal
    power_consumption_w: Decimal | null
    application: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: LasersCountAggregateOutputType | null
    _avg: LasersAvgAggregateOutputType | null
    _sum: LasersSumAggregateOutputType | null
    _min: LasersMinAggregateOutputType | null
    _max: LasersMaxAggregateOutputType | null
  }

  type GetLasersGroupByPayload<T extends lasersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LasersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LasersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LasersGroupByOutputType[P]>
            : GetScalarType<T[P], LasersGroupByOutputType[P]>
        }
      >
    >


  export type lasersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model_name?: boolean
    manufacturer_id?: boolean
    laser_type?: boolean
    modulation_type?: boolean
    cooling_method?: boolean
    is_single_mode?: boolean
    power_output_w?: boolean
    power_consumption_w?: boolean
    application?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    manufacturer?: boolean | manufacturersDefaultArgs<ExtArgs>
    wavelength_specs?: boolean | lasers$wavelength_specsArgs<ExtArgs>
    optical_specs?: boolean | lasers$optical_specsArgs<ExtArgs>
    stability_specs?: boolean | lasers$stability_specsArgs<ExtArgs>
    environmental_specs?: boolean | lasers$environmental_specsArgs<ExtArgs>
    pulse_specs?: boolean | lasers$pulse_specsArgs<ExtArgs>
  }, ExtArgs["result"]["lasers"]>

  export type lasersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model_name?: boolean
    manufacturer_id?: boolean
    laser_type?: boolean
    modulation_type?: boolean
    cooling_method?: boolean
    is_single_mode?: boolean
    power_output_w?: boolean
    power_consumption_w?: boolean
    application?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    manufacturer?: boolean | manufacturersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lasers"]>

  export type lasersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model_name?: boolean
    manufacturer_id?: boolean
    laser_type?: boolean
    modulation_type?: boolean
    cooling_method?: boolean
    is_single_mode?: boolean
    power_output_w?: boolean
    power_consumption_w?: boolean
    application?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    manufacturer?: boolean | manufacturersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lasers"]>

  export type lasersSelectScalar = {
    id?: boolean
    model_name?: boolean
    manufacturer_id?: boolean
    laser_type?: boolean
    modulation_type?: boolean
    cooling_method?: boolean
    is_single_mode?: boolean
    power_output_w?: boolean
    power_consumption_w?: boolean
    application?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type lasersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model_name" | "manufacturer_id" | "laser_type" | "modulation_type" | "cooling_method" | "is_single_mode" | "power_output_w" | "power_consumption_w" | "application" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["lasers"]>
  export type lasersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manufacturer?: boolean | manufacturersDefaultArgs<ExtArgs>
    wavelength_specs?: boolean | lasers$wavelength_specsArgs<ExtArgs>
    optical_specs?: boolean | lasers$optical_specsArgs<ExtArgs>
    stability_specs?: boolean | lasers$stability_specsArgs<ExtArgs>
    environmental_specs?: boolean | lasers$environmental_specsArgs<ExtArgs>
    pulse_specs?: boolean | lasers$pulse_specsArgs<ExtArgs>
  }
  export type lasersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manufacturer?: boolean | manufacturersDefaultArgs<ExtArgs>
  }
  export type lasersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manufacturer?: boolean | manufacturersDefaultArgs<ExtArgs>
  }

  export type $lasersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lasers"
    objects: {
      manufacturer: Prisma.$manufacturersPayload<ExtArgs>
      wavelength_specs: Prisma.$wavelength_specsPayload<ExtArgs> | null
      optical_specs: Prisma.$optical_specsPayload<ExtArgs> | null
      stability_specs: Prisma.$stability_specsPayload<ExtArgs> | null
      environmental_specs: Prisma.$environmental_specsPayload<ExtArgs> | null
      pulse_specs: Prisma.$pulse_specsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      model_name: string
      manufacturer_id: number
      laser_type: string
      modulation_type: string
      cooling_method: string | null
      is_single_mode: boolean
      power_output_w: Prisma.Decimal
      power_consumption_w: Prisma.Decimal | null
      application: string | null
      notes: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["lasers"]>
    composites: {}
  }

  type lasersGetPayload<S extends boolean | null | undefined | lasersDefaultArgs> = $Result.GetResult<Prisma.$lasersPayload, S>

  type lasersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lasersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LasersCountAggregateInputType | true
    }

  export interface lasersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lasers'], meta: { name: 'lasers' } }
    /**
     * Find zero or one Lasers that matches the filter.
     * @param {lasersFindUniqueArgs} args - Arguments to find a Lasers
     * @example
     * // Get one Lasers
     * const lasers = await prisma.lasers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lasersFindUniqueArgs>(args: SelectSubset<T, lasersFindUniqueArgs<ExtArgs>>): Prisma__lasersClient<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lasers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lasersFindUniqueOrThrowArgs} args - Arguments to find a Lasers
     * @example
     * // Get one Lasers
     * const lasers = await prisma.lasers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lasersFindUniqueOrThrowArgs>(args: SelectSubset<T, lasersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lasersClient<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lasers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lasersFindFirstArgs} args - Arguments to find a Lasers
     * @example
     * // Get one Lasers
     * const lasers = await prisma.lasers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lasersFindFirstArgs>(args?: SelectSubset<T, lasersFindFirstArgs<ExtArgs>>): Prisma__lasersClient<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lasers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lasersFindFirstOrThrowArgs} args - Arguments to find a Lasers
     * @example
     * // Get one Lasers
     * const lasers = await prisma.lasers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lasersFindFirstOrThrowArgs>(args?: SelectSubset<T, lasersFindFirstOrThrowArgs<ExtArgs>>): Prisma__lasersClient<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lasers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lasersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lasers
     * const lasers = await prisma.lasers.findMany()
     * 
     * // Get first 10 Lasers
     * const lasers = await prisma.lasers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lasersWithIdOnly = await prisma.lasers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lasersFindManyArgs>(args?: SelectSubset<T, lasersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lasers.
     * @param {lasersCreateArgs} args - Arguments to create a Lasers.
     * @example
     * // Create one Lasers
     * const Lasers = await prisma.lasers.create({
     *   data: {
     *     // ... data to create a Lasers
     *   }
     * })
     * 
     */
    create<T extends lasersCreateArgs>(args: SelectSubset<T, lasersCreateArgs<ExtArgs>>): Prisma__lasersClient<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lasers.
     * @param {lasersCreateManyArgs} args - Arguments to create many Lasers.
     * @example
     * // Create many Lasers
     * const lasers = await prisma.lasers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lasersCreateManyArgs>(args?: SelectSubset<T, lasersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lasers and returns the data saved in the database.
     * @param {lasersCreateManyAndReturnArgs} args - Arguments to create many Lasers.
     * @example
     * // Create many Lasers
     * const lasers = await prisma.lasers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lasers and only return the `id`
     * const lasersWithIdOnly = await prisma.lasers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lasersCreateManyAndReturnArgs>(args?: SelectSubset<T, lasersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lasers.
     * @param {lasersDeleteArgs} args - Arguments to delete one Lasers.
     * @example
     * // Delete one Lasers
     * const Lasers = await prisma.lasers.delete({
     *   where: {
     *     // ... filter to delete one Lasers
     *   }
     * })
     * 
     */
    delete<T extends lasersDeleteArgs>(args: SelectSubset<T, lasersDeleteArgs<ExtArgs>>): Prisma__lasersClient<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lasers.
     * @param {lasersUpdateArgs} args - Arguments to update one Lasers.
     * @example
     * // Update one Lasers
     * const lasers = await prisma.lasers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lasersUpdateArgs>(args: SelectSubset<T, lasersUpdateArgs<ExtArgs>>): Prisma__lasersClient<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lasers.
     * @param {lasersDeleteManyArgs} args - Arguments to filter Lasers to delete.
     * @example
     * // Delete a few Lasers
     * const { count } = await prisma.lasers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lasersDeleteManyArgs>(args?: SelectSubset<T, lasersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lasers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lasersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lasers
     * const lasers = await prisma.lasers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lasersUpdateManyArgs>(args: SelectSubset<T, lasersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lasers and returns the data updated in the database.
     * @param {lasersUpdateManyAndReturnArgs} args - Arguments to update many Lasers.
     * @example
     * // Update many Lasers
     * const lasers = await prisma.lasers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lasers and only return the `id`
     * const lasersWithIdOnly = await prisma.lasers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends lasersUpdateManyAndReturnArgs>(args: SelectSubset<T, lasersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lasers.
     * @param {lasersUpsertArgs} args - Arguments to update or create a Lasers.
     * @example
     * // Update or create a Lasers
     * const lasers = await prisma.lasers.upsert({
     *   create: {
     *     // ... data to create a Lasers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lasers we want to update
     *   }
     * })
     */
    upsert<T extends lasersUpsertArgs>(args: SelectSubset<T, lasersUpsertArgs<ExtArgs>>): Prisma__lasersClient<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lasers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lasersCountArgs} args - Arguments to filter Lasers to count.
     * @example
     * // Count the number of Lasers
     * const count = await prisma.lasers.count({
     *   where: {
     *     // ... the filter for the Lasers we want to count
     *   }
     * })
    **/
    count<T extends lasersCountArgs>(
      args?: Subset<T, lasersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LasersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lasers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LasersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LasersAggregateArgs>(args: Subset<T, LasersAggregateArgs>): Prisma.PrismaPromise<GetLasersAggregateType<T>>

    /**
     * Group by Lasers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lasersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lasersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lasersGroupByArgs['orderBy'] }
        : { orderBy?: lasersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lasersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLasersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lasers model
   */
  readonly fields: lasersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lasers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lasersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manufacturer<T extends manufacturersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, manufacturersDefaultArgs<ExtArgs>>): Prisma__manufacturersClient<$Result.GetResult<Prisma.$manufacturersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wavelength_specs<T extends lasers$wavelength_specsArgs<ExtArgs> = {}>(args?: Subset<T, lasers$wavelength_specsArgs<ExtArgs>>): Prisma__wavelength_specsClient<$Result.GetResult<Prisma.$wavelength_specsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    optical_specs<T extends lasers$optical_specsArgs<ExtArgs> = {}>(args?: Subset<T, lasers$optical_specsArgs<ExtArgs>>): Prisma__optical_specsClient<$Result.GetResult<Prisma.$optical_specsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stability_specs<T extends lasers$stability_specsArgs<ExtArgs> = {}>(args?: Subset<T, lasers$stability_specsArgs<ExtArgs>>): Prisma__stability_specsClient<$Result.GetResult<Prisma.$stability_specsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    environmental_specs<T extends lasers$environmental_specsArgs<ExtArgs> = {}>(args?: Subset<T, lasers$environmental_specsArgs<ExtArgs>>): Prisma__environmental_specsClient<$Result.GetResult<Prisma.$environmental_specsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pulse_specs<T extends lasers$pulse_specsArgs<ExtArgs> = {}>(args?: Subset<T, lasers$pulse_specsArgs<ExtArgs>>): Prisma__pulse_specsClient<$Result.GetResult<Prisma.$pulse_specsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lasers model
   */
  interface lasersFieldRefs {
    readonly id: FieldRef<"lasers", 'Int'>
    readonly model_name: FieldRef<"lasers", 'String'>
    readonly manufacturer_id: FieldRef<"lasers", 'Int'>
    readonly laser_type: FieldRef<"lasers", 'String'>
    readonly modulation_type: FieldRef<"lasers", 'String'>
    readonly cooling_method: FieldRef<"lasers", 'String'>
    readonly is_single_mode: FieldRef<"lasers", 'Boolean'>
    readonly power_output_w: FieldRef<"lasers", 'Decimal'>
    readonly power_consumption_w: FieldRef<"lasers", 'Decimal'>
    readonly application: FieldRef<"lasers", 'String'>
    readonly notes: FieldRef<"lasers", 'String'>
    readonly created_at: FieldRef<"lasers", 'DateTime'>
    readonly updated_at: FieldRef<"lasers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lasers findUnique
   */
  export type lasersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lasers
     */
    select?: lasersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lasers
     */
    omit?: lasersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lasersInclude<ExtArgs> | null
    /**
     * Filter, which lasers to fetch.
     */
    where: lasersWhereUniqueInput
  }

  /**
   * lasers findUniqueOrThrow
   */
  export type lasersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lasers
     */
    select?: lasersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lasers
     */
    omit?: lasersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lasersInclude<ExtArgs> | null
    /**
     * Filter, which lasers to fetch.
     */
    where: lasersWhereUniqueInput
  }

  /**
   * lasers findFirst
   */
  export type lasersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lasers
     */
    select?: lasersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lasers
     */
    omit?: lasersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lasersInclude<ExtArgs> | null
    /**
     * Filter, which lasers to fetch.
     */
    where?: lasersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lasers to fetch.
     */
    orderBy?: lasersOrderByWithRelationInput | lasersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lasers.
     */
    cursor?: lasersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lasers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lasers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lasers.
     */
    distinct?: LasersScalarFieldEnum | LasersScalarFieldEnum[]
  }

  /**
   * lasers findFirstOrThrow
   */
  export type lasersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lasers
     */
    select?: lasersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lasers
     */
    omit?: lasersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lasersInclude<ExtArgs> | null
    /**
     * Filter, which lasers to fetch.
     */
    where?: lasersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lasers to fetch.
     */
    orderBy?: lasersOrderByWithRelationInput | lasersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lasers.
     */
    cursor?: lasersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lasers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lasers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lasers.
     */
    distinct?: LasersScalarFieldEnum | LasersScalarFieldEnum[]
  }

  /**
   * lasers findMany
   */
  export type lasersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lasers
     */
    select?: lasersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lasers
     */
    omit?: lasersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lasersInclude<ExtArgs> | null
    /**
     * Filter, which lasers to fetch.
     */
    where?: lasersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lasers to fetch.
     */
    orderBy?: lasersOrderByWithRelationInput | lasersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lasers.
     */
    cursor?: lasersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lasers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lasers.
     */
    skip?: number
    distinct?: LasersScalarFieldEnum | LasersScalarFieldEnum[]
  }

  /**
   * lasers create
   */
  export type lasersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lasers
     */
    select?: lasersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lasers
     */
    omit?: lasersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lasersInclude<ExtArgs> | null
    /**
     * The data needed to create a lasers.
     */
    data: XOR<lasersCreateInput, lasersUncheckedCreateInput>
  }

  /**
   * lasers createMany
   */
  export type lasersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lasers.
     */
    data: lasersCreateManyInput | lasersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lasers createManyAndReturn
   */
  export type lasersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lasers
     */
    select?: lasersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lasers
     */
    omit?: lasersOmit<ExtArgs> | null
    /**
     * The data used to create many lasers.
     */
    data: lasersCreateManyInput | lasersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lasersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * lasers update
   */
  export type lasersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lasers
     */
    select?: lasersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lasers
     */
    omit?: lasersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lasersInclude<ExtArgs> | null
    /**
     * The data needed to update a lasers.
     */
    data: XOR<lasersUpdateInput, lasersUncheckedUpdateInput>
    /**
     * Choose, which lasers to update.
     */
    where: lasersWhereUniqueInput
  }

  /**
   * lasers updateMany
   */
  export type lasersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lasers.
     */
    data: XOR<lasersUpdateManyMutationInput, lasersUncheckedUpdateManyInput>
    /**
     * Filter which lasers to update
     */
    where?: lasersWhereInput
    /**
     * Limit how many lasers to update.
     */
    limit?: number
  }

  /**
   * lasers updateManyAndReturn
   */
  export type lasersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lasers
     */
    select?: lasersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lasers
     */
    omit?: lasersOmit<ExtArgs> | null
    /**
     * The data used to update lasers.
     */
    data: XOR<lasersUpdateManyMutationInput, lasersUncheckedUpdateManyInput>
    /**
     * Filter which lasers to update
     */
    where?: lasersWhereInput
    /**
     * Limit how many lasers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lasersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * lasers upsert
   */
  export type lasersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lasers
     */
    select?: lasersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lasers
     */
    omit?: lasersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lasersInclude<ExtArgs> | null
    /**
     * The filter to search for the lasers to update in case it exists.
     */
    where: lasersWhereUniqueInput
    /**
     * In case the lasers found by the `where` argument doesn't exist, create a new lasers with this data.
     */
    create: XOR<lasersCreateInput, lasersUncheckedCreateInput>
    /**
     * In case the lasers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lasersUpdateInput, lasersUncheckedUpdateInput>
  }

  /**
   * lasers delete
   */
  export type lasersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lasers
     */
    select?: lasersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lasers
     */
    omit?: lasersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lasersInclude<ExtArgs> | null
    /**
     * Filter which lasers to delete.
     */
    where: lasersWhereUniqueInput
  }

  /**
   * lasers deleteMany
   */
  export type lasersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lasers to delete
     */
    where?: lasersWhereInput
    /**
     * Limit how many lasers to delete.
     */
    limit?: number
  }

  /**
   * lasers.wavelength_specs
   */
  export type lasers$wavelength_specsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wavelength_specs
     */
    select?: wavelength_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wavelength_specs
     */
    omit?: wavelength_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wavelength_specsInclude<ExtArgs> | null
    where?: wavelength_specsWhereInput
  }

  /**
   * lasers.optical_specs
   */
  export type lasers$optical_specsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the optical_specs
     */
    select?: optical_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the optical_specs
     */
    omit?: optical_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optical_specsInclude<ExtArgs> | null
    where?: optical_specsWhereInput
  }

  /**
   * lasers.stability_specs
   */
  export type lasers$stability_specsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stability_specs
     */
    select?: stability_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stability_specs
     */
    omit?: stability_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stability_specsInclude<ExtArgs> | null
    where?: stability_specsWhereInput
  }

  /**
   * lasers.environmental_specs
   */
  export type lasers$environmental_specsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environmental_specs
     */
    select?: environmental_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environmental_specs
     */
    omit?: environmental_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmental_specsInclude<ExtArgs> | null
    where?: environmental_specsWhereInput
  }

  /**
   * lasers.pulse_specs
   */
  export type lasers$pulse_specsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pulse_specs
     */
    select?: pulse_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pulse_specs
     */
    omit?: pulse_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pulse_specsInclude<ExtArgs> | null
    where?: pulse_specsWhereInput
  }

  /**
   * lasers without action
   */
  export type lasersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lasers
     */
    select?: lasersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lasers
     */
    omit?: lasersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lasersInclude<ExtArgs> | null
  }


  /**
   * Model wavelength_specs
   */

  export type AggregateWavelength_specs = {
    _count: Wavelength_specsCountAggregateOutputType | null
    _avg: Wavelength_specsAvgAggregateOutputType | null
    _sum: Wavelength_specsSumAggregateOutputType | null
    _min: Wavelength_specsMinAggregateOutputType | null
    _max: Wavelength_specsMaxAggregateOutputType | null
  }

  export type Wavelength_specsAvgAggregateOutputType = {
    id: number | null
    laser_id: number | null
    wavelength_base_nm: Decimal | null
    wavelength_tolerance_nm: Decimal | null
    bandwidth_nm: Decimal | null
    fwhm_nm: Decimal | null
    wavelength_stability_nm_per_c: Decimal | null
  }

  export type Wavelength_specsSumAggregateOutputType = {
    id: number | null
    laser_id: number | null
    wavelength_base_nm: Decimal | null
    wavelength_tolerance_nm: Decimal | null
    bandwidth_nm: Decimal | null
    fwhm_nm: Decimal | null
    wavelength_stability_nm_per_c: Decimal | null
  }

  export type Wavelength_specsMinAggregateOutputType = {
    id: number | null
    laser_id: number | null
    wavelength_base_nm: Decimal | null
    wavelength_tolerance_nm: Decimal | null
    bandwidth_nm: Decimal | null
    fwhm_nm: Decimal | null
    wavelength_stability_nm_per_c: Decimal | null
    wavelength_tuning_range: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Wavelength_specsMaxAggregateOutputType = {
    id: number | null
    laser_id: number | null
    wavelength_base_nm: Decimal | null
    wavelength_tolerance_nm: Decimal | null
    bandwidth_nm: Decimal | null
    fwhm_nm: Decimal | null
    wavelength_stability_nm_per_c: Decimal | null
    wavelength_tuning_range: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Wavelength_specsCountAggregateOutputType = {
    id: number
    laser_id: number
    wavelength_base_nm: number
    wavelength_tolerance_nm: number
    bandwidth_nm: number
    fwhm_nm: number
    wavelength_stability_nm_per_c: number
    wavelength_tuning_range: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Wavelength_specsAvgAggregateInputType = {
    id?: true
    laser_id?: true
    wavelength_base_nm?: true
    wavelength_tolerance_nm?: true
    bandwidth_nm?: true
    fwhm_nm?: true
    wavelength_stability_nm_per_c?: true
  }

  export type Wavelength_specsSumAggregateInputType = {
    id?: true
    laser_id?: true
    wavelength_base_nm?: true
    wavelength_tolerance_nm?: true
    bandwidth_nm?: true
    fwhm_nm?: true
    wavelength_stability_nm_per_c?: true
  }

  export type Wavelength_specsMinAggregateInputType = {
    id?: true
    laser_id?: true
    wavelength_base_nm?: true
    wavelength_tolerance_nm?: true
    bandwidth_nm?: true
    fwhm_nm?: true
    wavelength_stability_nm_per_c?: true
    wavelength_tuning_range?: true
    created_at?: true
    updated_at?: true
  }

  export type Wavelength_specsMaxAggregateInputType = {
    id?: true
    laser_id?: true
    wavelength_base_nm?: true
    wavelength_tolerance_nm?: true
    bandwidth_nm?: true
    fwhm_nm?: true
    wavelength_stability_nm_per_c?: true
    wavelength_tuning_range?: true
    created_at?: true
    updated_at?: true
  }

  export type Wavelength_specsCountAggregateInputType = {
    id?: true
    laser_id?: true
    wavelength_base_nm?: true
    wavelength_tolerance_nm?: true
    bandwidth_nm?: true
    fwhm_nm?: true
    wavelength_stability_nm_per_c?: true
    wavelength_tuning_range?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Wavelength_specsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wavelength_specs to aggregate.
     */
    where?: wavelength_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wavelength_specs to fetch.
     */
    orderBy?: wavelength_specsOrderByWithRelationInput | wavelength_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: wavelength_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wavelength_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wavelength_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wavelength_specs
    **/
    _count?: true | Wavelength_specsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wavelength_specsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wavelength_specsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wavelength_specsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wavelength_specsMaxAggregateInputType
  }

  export type GetWavelength_specsAggregateType<T extends Wavelength_specsAggregateArgs> = {
        [P in keyof T & keyof AggregateWavelength_specs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWavelength_specs[P]>
      : GetScalarType<T[P], AggregateWavelength_specs[P]>
  }




  export type wavelength_specsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wavelength_specsWhereInput
    orderBy?: wavelength_specsOrderByWithAggregationInput | wavelength_specsOrderByWithAggregationInput[]
    by: Wavelength_specsScalarFieldEnum[] | Wavelength_specsScalarFieldEnum
    having?: wavelength_specsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wavelength_specsCountAggregateInputType | true
    _avg?: Wavelength_specsAvgAggregateInputType
    _sum?: Wavelength_specsSumAggregateInputType
    _min?: Wavelength_specsMinAggregateInputType
    _max?: Wavelength_specsMaxAggregateInputType
  }

  export type Wavelength_specsGroupByOutputType = {
    id: number
    laser_id: number
    wavelength_base_nm: Decimal
    wavelength_tolerance_nm: Decimal | null
    bandwidth_nm: Decimal | null
    fwhm_nm: Decimal | null
    wavelength_stability_nm_per_c: Decimal | null
    wavelength_tuning_range: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Wavelength_specsCountAggregateOutputType | null
    _avg: Wavelength_specsAvgAggregateOutputType | null
    _sum: Wavelength_specsSumAggregateOutputType | null
    _min: Wavelength_specsMinAggregateOutputType | null
    _max: Wavelength_specsMaxAggregateOutputType | null
  }

  type GetWavelength_specsGroupByPayload<T extends wavelength_specsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Wavelength_specsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wavelength_specsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wavelength_specsGroupByOutputType[P]>
            : GetScalarType<T[P], Wavelength_specsGroupByOutputType[P]>
        }
      >
    >


  export type wavelength_specsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    wavelength_base_nm?: boolean
    wavelength_tolerance_nm?: boolean
    bandwidth_nm?: boolean
    fwhm_nm?: boolean
    wavelength_stability_nm_per_c?: boolean
    wavelength_tuning_range?: boolean
    created_at?: boolean
    updated_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wavelength_specs"]>

  export type wavelength_specsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    wavelength_base_nm?: boolean
    wavelength_tolerance_nm?: boolean
    bandwidth_nm?: boolean
    fwhm_nm?: boolean
    wavelength_stability_nm_per_c?: boolean
    wavelength_tuning_range?: boolean
    created_at?: boolean
    updated_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wavelength_specs"]>

  export type wavelength_specsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    wavelength_base_nm?: boolean
    wavelength_tolerance_nm?: boolean
    bandwidth_nm?: boolean
    fwhm_nm?: boolean
    wavelength_stability_nm_per_c?: boolean
    wavelength_tuning_range?: boolean
    created_at?: boolean
    updated_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wavelength_specs"]>

  export type wavelength_specsSelectScalar = {
    id?: boolean
    laser_id?: boolean
    wavelength_base_nm?: boolean
    wavelength_tolerance_nm?: boolean
    bandwidth_nm?: boolean
    fwhm_nm?: boolean
    wavelength_stability_nm_per_c?: boolean
    wavelength_tuning_range?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type wavelength_specsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "laser_id" | "wavelength_base_nm" | "wavelength_tolerance_nm" | "bandwidth_nm" | "fwhm_nm" | "wavelength_stability_nm_per_c" | "wavelength_tuning_range" | "created_at" | "updated_at", ExtArgs["result"]["wavelength_specs"]>
  export type wavelength_specsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }
  export type wavelength_specsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }
  export type wavelength_specsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }

  export type $wavelength_specsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wavelength_specs"
    objects: {
      laser: Prisma.$lasersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      laser_id: number
      wavelength_base_nm: Prisma.Decimal
      wavelength_tolerance_nm: Prisma.Decimal | null
      bandwidth_nm: Prisma.Decimal | null
      fwhm_nm: Prisma.Decimal | null
      wavelength_stability_nm_per_c: Prisma.Decimal | null
      wavelength_tuning_range: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["wavelength_specs"]>
    composites: {}
  }

  type wavelength_specsGetPayload<S extends boolean | null | undefined | wavelength_specsDefaultArgs> = $Result.GetResult<Prisma.$wavelength_specsPayload, S>

  type wavelength_specsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<wavelength_specsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Wavelength_specsCountAggregateInputType | true
    }

  export interface wavelength_specsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wavelength_specs'], meta: { name: 'wavelength_specs' } }
    /**
     * Find zero or one Wavelength_specs that matches the filter.
     * @param {wavelength_specsFindUniqueArgs} args - Arguments to find a Wavelength_specs
     * @example
     * // Get one Wavelength_specs
     * const wavelength_specs = await prisma.wavelength_specs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wavelength_specsFindUniqueArgs>(args: SelectSubset<T, wavelength_specsFindUniqueArgs<ExtArgs>>): Prisma__wavelength_specsClient<$Result.GetResult<Prisma.$wavelength_specsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wavelength_specs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wavelength_specsFindUniqueOrThrowArgs} args - Arguments to find a Wavelength_specs
     * @example
     * // Get one Wavelength_specs
     * const wavelength_specs = await prisma.wavelength_specs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wavelength_specsFindUniqueOrThrowArgs>(args: SelectSubset<T, wavelength_specsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__wavelength_specsClient<$Result.GetResult<Prisma.$wavelength_specsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wavelength_specs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wavelength_specsFindFirstArgs} args - Arguments to find a Wavelength_specs
     * @example
     * // Get one Wavelength_specs
     * const wavelength_specs = await prisma.wavelength_specs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wavelength_specsFindFirstArgs>(args?: SelectSubset<T, wavelength_specsFindFirstArgs<ExtArgs>>): Prisma__wavelength_specsClient<$Result.GetResult<Prisma.$wavelength_specsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wavelength_specs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wavelength_specsFindFirstOrThrowArgs} args - Arguments to find a Wavelength_specs
     * @example
     * // Get one Wavelength_specs
     * const wavelength_specs = await prisma.wavelength_specs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wavelength_specsFindFirstOrThrowArgs>(args?: SelectSubset<T, wavelength_specsFindFirstOrThrowArgs<ExtArgs>>): Prisma__wavelength_specsClient<$Result.GetResult<Prisma.$wavelength_specsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wavelength_specs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wavelength_specsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wavelength_specs
     * const wavelength_specs = await prisma.wavelength_specs.findMany()
     * 
     * // Get first 10 Wavelength_specs
     * const wavelength_specs = await prisma.wavelength_specs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wavelength_specsWithIdOnly = await prisma.wavelength_specs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends wavelength_specsFindManyArgs>(args?: SelectSubset<T, wavelength_specsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wavelength_specsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wavelength_specs.
     * @param {wavelength_specsCreateArgs} args - Arguments to create a Wavelength_specs.
     * @example
     * // Create one Wavelength_specs
     * const Wavelength_specs = await prisma.wavelength_specs.create({
     *   data: {
     *     // ... data to create a Wavelength_specs
     *   }
     * })
     * 
     */
    create<T extends wavelength_specsCreateArgs>(args: SelectSubset<T, wavelength_specsCreateArgs<ExtArgs>>): Prisma__wavelength_specsClient<$Result.GetResult<Prisma.$wavelength_specsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wavelength_specs.
     * @param {wavelength_specsCreateManyArgs} args - Arguments to create many Wavelength_specs.
     * @example
     * // Create many Wavelength_specs
     * const wavelength_specs = await prisma.wavelength_specs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends wavelength_specsCreateManyArgs>(args?: SelectSubset<T, wavelength_specsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wavelength_specs and returns the data saved in the database.
     * @param {wavelength_specsCreateManyAndReturnArgs} args - Arguments to create many Wavelength_specs.
     * @example
     * // Create many Wavelength_specs
     * const wavelength_specs = await prisma.wavelength_specs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wavelength_specs and only return the `id`
     * const wavelength_specsWithIdOnly = await prisma.wavelength_specs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends wavelength_specsCreateManyAndReturnArgs>(args?: SelectSubset<T, wavelength_specsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wavelength_specsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wavelength_specs.
     * @param {wavelength_specsDeleteArgs} args - Arguments to delete one Wavelength_specs.
     * @example
     * // Delete one Wavelength_specs
     * const Wavelength_specs = await prisma.wavelength_specs.delete({
     *   where: {
     *     // ... filter to delete one Wavelength_specs
     *   }
     * })
     * 
     */
    delete<T extends wavelength_specsDeleteArgs>(args: SelectSubset<T, wavelength_specsDeleteArgs<ExtArgs>>): Prisma__wavelength_specsClient<$Result.GetResult<Prisma.$wavelength_specsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wavelength_specs.
     * @param {wavelength_specsUpdateArgs} args - Arguments to update one Wavelength_specs.
     * @example
     * // Update one Wavelength_specs
     * const wavelength_specs = await prisma.wavelength_specs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends wavelength_specsUpdateArgs>(args: SelectSubset<T, wavelength_specsUpdateArgs<ExtArgs>>): Prisma__wavelength_specsClient<$Result.GetResult<Prisma.$wavelength_specsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wavelength_specs.
     * @param {wavelength_specsDeleteManyArgs} args - Arguments to filter Wavelength_specs to delete.
     * @example
     * // Delete a few Wavelength_specs
     * const { count } = await prisma.wavelength_specs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends wavelength_specsDeleteManyArgs>(args?: SelectSubset<T, wavelength_specsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wavelength_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wavelength_specsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wavelength_specs
     * const wavelength_specs = await prisma.wavelength_specs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends wavelength_specsUpdateManyArgs>(args: SelectSubset<T, wavelength_specsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wavelength_specs and returns the data updated in the database.
     * @param {wavelength_specsUpdateManyAndReturnArgs} args - Arguments to update many Wavelength_specs.
     * @example
     * // Update many Wavelength_specs
     * const wavelength_specs = await prisma.wavelength_specs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wavelength_specs and only return the `id`
     * const wavelength_specsWithIdOnly = await prisma.wavelength_specs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends wavelength_specsUpdateManyAndReturnArgs>(args: SelectSubset<T, wavelength_specsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wavelength_specsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wavelength_specs.
     * @param {wavelength_specsUpsertArgs} args - Arguments to update or create a Wavelength_specs.
     * @example
     * // Update or create a Wavelength_specs
     * const wavelength_specs = await prisma.wavelength_specs.upsert({
     *   create: {
     *     // ... data to create a Wavelength_specs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wavelength_specs we want to update
     *   }
     * })
     */
    upsert<T extends wavelength_specsUpsertArgs>(args: SelectSubset<T, wavelength_specsUpsertArgs<ExtArgs>>): Prisma__wavelength_specsClient<$Result.GetResult<Prisma.$wavelength_specsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wavelength_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wavelength_specsCountArgs} args - Arguments to filter Wavelength_specs to count.
     * @example
     * // Count the number of Wavelength_specs
     * const count = await prisma.wavelength_specs.count({
     *   where: {
     *     // ... the filter for the Wavelength_specs we want to count
     *   }
     * })
    **/
    count<T extends wavelength_specsCountArgs>(
      args?: Subset<T, wavelength_specsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wavelength_specsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wavelength_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wavelength_specsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wavelength_specsAggregateArgs>(args: Subset<T, Wavelength_specsAggregateArgs>): Prisma.PrismaPromise<GetWavelength_specsAggregateType<T>>

    /**
     * Group by Wavelength_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wavelength_specsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends wavelength_specsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: wavelength_specsGroupByArgs['orderBy'] }
        : { orderBy?: wavelength_specsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, wavelength_specsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWavelength_specsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wavelength_specs model
   */
  readonly fields: wavelength_specsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wavelength_specs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__wavelength_specsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laser<T extends lasersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lasersDefaultArgs<ExtArgs>>): Prisma__lasersClient<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the wavelength_specs model
   */
  interface wavelength_specsFieldRefs {
    readonly id: FieldRef<"wavelength_specs", 'Int'>
    readonly laser_id: FieldRef<"wavelength_specs", 'Int'>
    readonly wavelength_base_nm: FieldRef<"wavelength_specs", 'Decimal'>
    readonly wavelength_tolerance_nm: FieldRef<"wavelength_specs", 'Decimal'>
    readonly bandwidth_nm: FieldRef<"wavelength_specs", 'Decimal'>
    readonly fwhm_nm: FieldRef<"wavelength_specs", 'Decimal'>
    readonly wavelength_stability_nm_per_c: FieldRef<"wavelength_specs", 'Decimal'>
    readonly wavelength_tuning_range: FieldRef<"wavelength_specs", 'String'>
    readonly created_at: FieldRef<"wavelength_specs", 'DateTime'>
    readonly updated_at: FieldRef<"wavelength_specs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * wavelength_specs findUnique
   */
  export type wavelength_specsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wavelength_specs
     */
    select?: wavelength_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wavelength_specs
     */
    omit?: wavelength_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wavelength_specsInclude<ExtArgs> | null
    /**
     * Filter, which wavelength_specs to fetch.
     */
    where: wavelength_specsWhereUniqueInput
  }

  /**
   * wavelength_specs findUniqueOrThrow
   */
  export type wavelength_specsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wavelength_specs
     */
    select?: wavelength_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wavelength_specs
     */
    omit?: wavelength_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wavelength_specsInclude<ExtArgs> | null
    /**
     * Filter, which wavelength_specs to fetch.
     */
    where: wavelength_specsWhereUniqueInput
  }

  /**
   * wavelength_specs findFirst
   */
  export type wavelength_specsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wavelength_specs
     */
    select?: wavelength_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wavelength_specs
     */
    omit?: wavelength_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wavelength_specsInclude<ExtArgs> | null
    /**
     * Filter, which wavelength_specs to fetch.
     */
    where?: wavelength_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wavelength_specs to fetch.
     */
    orderBy?: wavelength_specsOrderByWithRelationInput | wavelength_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wavelength_specs.
     */
    cursor?: wavelength_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wavelength_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wavelength_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wavelength_specs.
     */
    distinct?: Wavelength_specsScalarFieldEnum | Wavelength_specsScalarFieldEnum[]
  }

  /**
   * wavelength_specs findFirstOrThrow
   */
  export type wavelength_specsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wavelength_specs
     */
    select?: wavelength_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wavelength_specs
     */
    omit?: wavelength_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wavelength_specsInclude<ExtArgs> | null
    /**
     * Filter, which wavelength_specs to fetch.
     */
    where?: wavelength_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wavelength_specs to fetch.
     */
    orderBy?: wavelength_specsOrderByWithRelationInput | wavelength_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wavelength_specs.
     */
    cursor?: wavelength_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wavelength_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wavelength_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wavelength_specs.
     */
    distinct?: Wavelength_specsScalarFieldEnum | Wavelength_specsScalarFieldEnum[]
  }

  /**
   * wavelength_specs findMany
   */
  export type wavelength_specsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wavelength_specs
     */
    select?: wavelength_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wavelength_specs
     */
    omit?: wavelength_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wavelength_specsInclude<ExtArgs> | null
    /**
     * Filter, which wavelength_specs to fetch.
     */
    where?: wavelength_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wavelength_specs to fetch.
     */
    orderBy?: wavelength_specsOrderByWithRelationInput | wavelength_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wavelength_specs.
     */
    cursor?: wavelength_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wavelength_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wavelength_specs.
     */
    skip?: number
    distinct?: Wavelength_specsScalarFieldEnum | Wavelength_specsScalarFieldEnum[]
  }

  /**
   * wavelength_specs create
   */
  export type wavelength_specsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wavelength_specs
     */
    select?: wavelength_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wavelength_specs
     */
    omit?: wavelength_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wavelength_specsInclude<ExtArgs> | null
    /**
     * The data needed to create a wavelength_specs.
     */
    data: XOR<wavelength_specsCreateInput, wavelength_specsUncheckedCreateInput>
  }

  /**
   * wavelength_specs createMany
   */
  export type wavelength_specsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wavelength_specs.
     */
    data: wavelength_specsCreateManyInput | wavelength_specsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wavelength_specs createManyAndReturn
   */
  export type wavelength_specsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wavelength_specs
     */
    select?: wavelength_specsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wavelength_specs
     */
    omit?: wavelength_specsOmit<ExtArgs> | null
    /**
     * The data used to create many wavelength_specs.
     */
    data: wavelength_specsCreateManyInput | wavelength_specsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wavelength_specsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * wavelength_specs update
   */
  export type wavelength_specsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wavelength_specs
     */
    select?: wavelength_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wavelength_specs
     */
    omit?: wavelength_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wavelength_specsInclude<ExtArgs> | null
    /**
     * The data needed to update a wavelength_specs.
     */
    data: XOR<wavelength_specsUpdateInput, wavelength_specsUncheckedUpdateInput>
    /**
     * Choose, which wavelength_specs to update.
     */
    where: wavelength_specsWhereUniqueInput
  }

  /**
   * wavelength_specs updateMany
   */
  export type wavelength_specsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wavelength_specs.
     */
    data: XOR<wavelength_specsUpdateManyMutationInput, wavelength_specsUncheckedUpdateManyInput>
    /**
     * Filter which wavelength_specs to update
     */
    where?: wavelength_specsWhereInput
    /**
     * Limit how many wavelength_specs to update.
     */
    limit?: number
  }

  /**
   * wavelength_specs updateManyAndReturn
   */
  export type wavelength_specsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wavelength_specs
     */
    select?: wavelength_specsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wavelength_specs
     */
    omit?: wavelength_specsOmit<ExtArgs> | null
    /**
     * The data used to update wavelength_specs.
     */
    data: XOR<wavelength_specsUpdateManyMutationInput, wavelength_specsUncheckedUpdateManyInput>
    /**
     * Filter which wavelength_specs to update
     */
    where?: wavelength_specsWhereInput
    /**
     * Limit how many wavelength_specs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wavelength_specsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * wavelength_specs upsert
   */
  export type wavelength_specsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wavelength_specs
     */
    select?: wavelength_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wavelength_specs
     */
    omit?: wavelength_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wavelength_specsInclude<ExtArgs> | null
    /**
     * The filter to search for the wavelength_specs to update in case it exists.
     */
    where: wavelength_specsWhereUniqueInput
    /**
     * In case the wavelength_specs found by the `where` argument doesn't exist, create a new wavelength_specs with this data.
     */
    create: XOR<wavelength_specsCreateInput, wavelength_specsUncheckedCreateInput>
    /**
     * In case the wavelength_specs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<wavelength_specsUpdateInput, wavelength_specsUncheckedUpdateInput>
  }

  /**
   * wavelength_specs delete
   */
  export type wavelength_specsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wavelength_specs
     */
    select?: wavelength_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wavelength_specs
     */
    omit?: wavelength_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wavelength_specsInclude<ExtArgs> | null
    /**
     * Filter which wavelength_specs to delete.
     */
    where: wavelength_specsWhereUniqueInput
  }

  /**
   * wavelength_specs deleteMany
   */
  export type wavelength_specsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wavelength_specs to delete
     */
    where?: wavelength_specsWhereInput
    /**
     * Limit how many wavelength_specs to delete.
     */
    limit?: number
  }

  /**
   * wavelength_specs without action
   */
  export type wavelength_specsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wavelength_specs
     */
    select?: wavelength_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wavelength_specs
     */
    omit?: wavelength_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wavelength_specsInclude<ExtArgs> | null
  }


  /**
   * Model optical_specs
   */

  export type AggregateOptical_specs = {
    _count: Optical_specsCountAggregateOutputType | null
    _avg: Optical_specsAvgAggregateOutputType | null
    _sum: Optical_specsSumAggregateOutputType | null
    _min: Optical_specsMinAggregateOutputType | null
    _max: Optical_specsMaxAggregateOutputType | null
  }

  export type Optical_specsAvgAggregateOutputType = {
    id: number | null
    laser_id: number | null
    beam_divergence_mrad: Decimal | null
    beam_quality_m2: Decimal | null
    aperture_mm: Decimal | null
    numerical_aperture: Decimal | null
    polarization_ratio_db: Decimal | null
  }

  export type Optical_specsSumAggregateOutputType = {
    id: number | null
    laser_id: number | null
    beam_divergence_mrad: Decimal | null
    beam_quality_m2: Decimal | null
    aperture_mm: Decimal | null
    numerical_aperture: Decimal | null
    polarization_ratio_db: Decimal | null
  }

  export type Optical_specsMinAggregateOutputType = {
    id: number | null
    laser_id: number | null
    beam_divergence_mrad: Decimal | null
    beam_quality_m2: Decimal | null
    aperture_mm: Decimal | null
    numerical_aperture: Decimal | null
    polarization: string | null
    polarization_ratio_db: Decimal | null
    created_at: Date | null
  }

  export type Optical_specsMaxAggregateOutputType = {
    id: number | null
    laser_id: number | null
    beam_divergence_mrad: Decimal | null
    beam_quality_m2: Decimal | null
    aperture_mm: Decimal | null
    numerical_aperture: Decimal | null
    polarization: string | null
    polarization_ratio_db: Decimal | null
    created_at: Date | null
  }

  export type Optical_specsCountAggregateOutputType = {
    id: number
    laser_id: number
    beam_divergence_mrad: number
    beam_quality_m2: number
    aperture_mm: number
    numerical_aperture: number
    polarization: number
    polarization_ratio_db: number
    created_at: number
    _all: number
  }


  export type Optical_specsAvgAggregateInputType = {
    id?: true
    laser_id?: true
    beam_divergence_mrad?: true
    beam_quality_m2?: true
    aperture_mm?: true
    numerical_aperture?: true
    polarization_ratio_db?: true
  }

  export type Optical_specsSumAggregateInputType = {
    id?: true
    laser_id?: true
    beam_divergence_mrad?: true
    beam_quality_m2?: true
    aperture_mm?: true
    numerical_aperture?: true
    polarization_ratio_db?: true
  }

  export type Optical_specsMinAggregateInputType = {
    id?: true
    laser_id?: true
    beam_divergence_mrad?: true
    beam_quality_m2?: true
    aperture_mm?: true
    numerical_aperture?: true
    polarization?: true
    polarization_ratio_db?: true
    created_at?: true
  }

  export type Optical_specsMaxAggregateInputType = {
    id?: true
    laser_id?: true
    beam_divergence_mrad?: true
    beam_quality_m2?: true
    aperture_mm?: true
    numerical_aperture?: true
    polarization?: true
    polarization_ratio_db?: true
    created_at?: true
  }

  export type Optical_specsCountAggregateInputType = {
    id?: true
    laser_id?: true
    beam_divergence_mrad?: true
    beam_quality_m2?: true
    aperture_mm?: true
    numerical_aperture?: true
    polarization?: true
    polarization_ratio_db?: true
    created_at?: true
    _all?: true
  }

  export type Optical_specsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which optical_specs to aggregate.
     */
    where?: optical_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of optical_specs to fetch.
     */
    orderBy?: optical_specsOrderByWithRelationInput | optical_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: optical_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` optical_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` optical_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned optical_specs
    **/
    _count?: true | Optical_specsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Optical_specsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Optical_specsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Optical_specsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Optical_specsMaxAggregateInputType
  }

  export type GetOptical_specsAggregateType<T extends Optical_specsAggregateArgs> = {
        [P in keyof T & keyof AggregateOptical_specs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOptical_specs[P]>
      : GetScalarType<T[P], AggregateOptical_specs[P]>
  }




  export type optical_specsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: optical_specsWhereInput
    orderBy?: optical_specsOrderByWithAggregationInput | optical_specsOrderByWithAggregationInput[]
    by: Optical_specsScalarFieldEnum[] | Optical_specsScalarFieldEnum
    having?: optical_specsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Optical_specsCountAggregateInputType | true
    _avg?: Optical_specsAvgAggregateInputType
    _sum?: Optical_specsSumAggregateInputType
    _min?: Optical_specsMinAggregateInputType
    _max?: Optical_specsMaxAggregateInputType
  }

  export type Optical_specsGroupByOutputType = {
    id: number
    laser_id: number
    beam_divergence_mrad: Decimal | null
    beam_quality_m2: Decimal | null
    aperture_mm: Decimal | null
    numerical_aperture: Decimal | null
    polarization: string | null
    polarization_ratio_db: Decimal | null
    created_at: Date | null
    _count: Optical_specsCountAggregateOutputType | null
    _avg: Optical_specsAvgAggregateOutputType | null
    _sum: Optical_specsSumAggregateOutputType | null
    _min: Optical_specsMinAggregateOutputType | null
    _max: Optical_specsMaxAggregateOutputType | null
  }

  type GetOptical_specsGroupByPayload<T extends optical_specsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Optical_specsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Optical_specsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Optical_specsGroupByOutputType[P]>
            : GetScalarType<T[P], Optical_specsGroupByOutputType[P]>
        }
      >
    >


  export type optical_specsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    beam_divergence_mrad?: boolean
    beam_quality_m2?: boolean
    aperture_mm?: boolean
    numerical_aperture?: boolean
    polarization?: boolean
    polarization_ratio_db?: boolean
    created_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optical_specs"]>

  export type optical_specsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    beam_divergence_mrad?: boolean
    beam_quality_m2?: boolean
    aperture_mm?: boolean
    numerical_aperture?: boolean
    polarization?: boolean
    polarization_ratio_db?: boolean
    created_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optical_specs"]>

  export type optical_specsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    beam_divergence_mrad?: boolean
    beam_quality_m2?: boolean
    aperture_mm?: boolean
    numerical_aperture?: boolean
    polarization?: boolean
    polarization_ratio_db?: boolean
    created_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optical_specs"]>

  export type optical_specsSelectScalar = {
    id?: boolean
    laser_id?: boolean
    beam_divergence_mrad?: boolean
    beam_quality_m2?: boolean
    aperture_mm?: boolean
    numerical_aperture?: boolean
    polarization?: boolean
    polarization_ratio_db?: boolean
    created_at?: boolean
  }

  export type optical_specsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "laser_id" | "beam_divergence_mrad" | "beam_quality_m2" | "aperture_mm" | "numerical_aperture" | "polarization" | "polarization_ratio_db" | "created_at", ExtArgs["result"]["optical_specs"]>
  export type optical_specsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }
  export type optical_specsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }
  export type optical_specsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }

  export type $optical_specsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "optical_specs"
    objects: {
      laser: Prisma.$lasersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      laser_id: number
      beam_divergence_mrad: Prisma.Decimal | null
      beam_quality_m2: Prisma.Decimal | null
      aperture_mm: Prisma.Decimal | null
      numerical_aperture: Prisma.Decimal | null
      polarization: string | null
      polarization_ratio_db: Prisma.Decimal | null
      created_at: Date | null
    }, ExtArgs["result"]["optical_specs"]>
    composites: {}
  }

  type optical_specsGetPayload<S extends boolean | null | undefined | optical_specsDefaultArgs> = $Result.GetResult<Prisma.$optical_specsPayload, S>

  type optical_specsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<optical_specsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Optical_specsCountAggregateInputType | true
    }

  export interface optical_specsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['optical_specs'], meta: { name: 'optical_specs' } }
    /**
     * Find zero or one Optical_specs that matches the filter.
     * @param {optical_specsFindUniqueArgs} args - Arguments to find a Optical_specs
     * @example
     * // Get one Optical_specs
     * const optical_specs = await prisma.optical_specs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends optical_specsFindUniqueArgs>(args: SelectSubset<T, optical_specsFindUniqueArgs<ExtArgs>>): Prisma__optical_specsClient<$Result.GetResult<Prisma.$optical_specsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Optical_specs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {optical_specsFindUniqueOrThrowArgs} args - Arguments to find a Optical_specs
     * @example
     * // Get one Optical_specs
     * const optical_specs = await prisma.optical_specs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends optical_specsFindUniqueOrThrowArgs>(args: SelectSubset<T, optical_specsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__optical_specsClient<$Result.GetResult<Prisma.$optical_specsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Optical_specs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optical_specsFindFirstArgs} args - Arguments to find a Optical_specs
     * @example
     * // Get one Optical_specs
     * const optical_specs = await prisma.optical_specs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends optical_specsFindFirstArgs>(args?: SelectSubset<T, optical_specsFindFirstArgs<ExtArgs>>): Prisma__optical_specsClient<$Result.GetResult<Prisma.$optical_specsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Optical_specs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optical_specsFindFirstOrThrowArgs} args - Arguments to find a Optical_specs
     * @example
     * // Get one Optical_specs
     * const optical_specs = await prisma.optical_specs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends optical_specsFindFirstOrThrowArgs>(args?: SelectSubset<T, optical_specsFindFirstOrThrowArgs<ExtArgs>>): Prisma__optical_specsClient<$Result.GetResult<Prisma.$optical_specsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Optical_specs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optical_specsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Optical_specs
     * const optical_specs = await prisma.optical_specs.findMany()
     * 
     * // Get first 10 Optical_specs
     * const optical_specs = await prisma.optical_specs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optical_specsWithIdOnly = await prisma.optical_specs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends optical_specsFindManyArgs>(args?: SelectSubset<T, optical_specsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optical_specsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Optical_specs.
     * @param {optical_specsCreateArgs} args - Arguments to create a Optical_specs.
     * @example
     * // Create one Optical_specs
     * const Optical_specs = await prisma.optical_specs.create({
     *   data: {
     *     // ... data to create a Optical_specs
     *   }
     * })
     * 
     */
    create<T extends optical_specsCreateArgs>(args: SelectSubset<T, optical_specsCreateArgs<ExtArgs>>): Prisma__optical_specsClient<$Result.GetResult<Prisma.$optical_specsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Optical_specs.
     * @param {optical_specsCreateManyArgs} args - Arguments to create many Optical_specs.
     * @example
     * // Create many Optical_specs
     * const optical_specs = await prisma.optical_specs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends optical_specsCreateManyArgs>(args?: SelectSubset<T, optical_specsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Optical_specs and returns the data saved in the database.
     * @param {optical_specsCreateManyAndReturnArgs} args - Arguments to create many Optical_specs.
     * @example
     * // Create many Optical_specs
     * const optical_specs = await prisma.optical_specs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Optical_specs and only return the `id`
     * const optical_specsWithIdOnly = await prisma.optical_specs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends optical_specsCreateManyAndReturnArgs>(args?: SelectSubset<T, optical_specsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optical_specsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Optical_specs.
     * @param {optical_specsDeleteArgs} args - Arguments to delete one Optical_specs.
     * @example
     * // Delete one Optical_specs
     * const Optical_specs = await prisma.optical_specs.delete({
     *   where: {
     *     // ... filter to delete one Optical_specs
     *   }
     * })
     * 
     */
    delete<T extends optical_specsDeleteArgs>(args: SelectSubset<T, optical_specsDeleteArgs<ExtArgs>>): Prisma__optical_specsClient<$Result.GetResult<Prisma.$optical_specsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Optical_specs.
     * @param {optical_specsUpdateArgs} args - Arguments to update one Optical_specs.
     * @example
     * // Update one Optical_specs
     * const optical_specs = await prisma.optical_specs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends optical_specsUpdateArgs>(args: SelectSubset<T, optical_specsUpdateArgs<ExtArgs>>): Prisma__optical_specsClient<$Result.GetResult<Prisma.$optical_specsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Optical_specs.
     * @param {optical_specsDeleteManyArgs} args - Arguments to filter Optical_specs to delete.
     * @example
     * // Delete a few Optical_specs
     * const { count } = await prisma.optical_specs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends optical_specsDeleteManyArgs>(args?: SelectSubset<T, optical_specsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Optical_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optical_specsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Optical_specs
     * const optical_specs = await prisma.optical_specs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends optical_specsUpdateManyArgs>(args: SelectSubset<T, optical_specsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Optical_specs and returns the data updated in the database.
     * @param {optical_specsUpdateManyAndReturnArgs} args - Arguments to update many Optical_specs.
     * @example
     * // Update many Optical_specs
     * const optical_specs = await prisma.optical_specs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Optical_specs and only return the `id`
     * const optical_specsWithIdOnly = await prisma.optical_specs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends optical_specsUpdateManyAndReturnArgs>(args: SelectSubset<T, optical_specsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optical_specsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Optical_specs.
     * @param {optical_specsUpsertArgs} args - Arguments to update or create a Optical_specs.
     * @example
     * // Update or create a Optical_specs
     * const optical_specs = await prisma.optical_specs.upsert({
     *   create: {
     *     // ... data to create a Optical_specs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Optical_specs we want to update
     *   }
     * })
     */
    upsert<T extends optical_specsUpsertArgs>(args: SelectSubset<T, optical_specsUpsertArgs<ExtArgs>>): Prisma__optical_specsClient<$Result.GetResult<Prisma.$optical_specsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Optical_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optical_specsCountArgs} args - Arguments to filter Optical_specs to count.
     * @example
     * // Count the number of Optical_specs
     * const count = await prisma.optical_specs.count({
     *   where: {
     *     // ... the filter for the Optical_specs we want to count
     *   }
     * })
    **/
    count<T extends optical_specsCountArgs>(
      args?: Subset<T, optical_specsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Optical_specsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Optical_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Optical_specsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Optical_specsAggregateArgs>(args: Subset<T, Optical_specsAggregateArgs>): Prisma.PrismaPromise<GetOptical_specsAggregateType<T>>

    /**
     * Group by Optical_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optical_specsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends optical_specsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: optical_specsGroupByArgs['orderBy'] }
        : { orderBy?: optical_specsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, optical_specsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptical_specsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the optical_specs model
   */
  readonly fields: optical_specsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for optical_specs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__optical_specsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laser<T extends lasersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lasersDefaultArgs<ExtArgs>>): Prisma__lasersClient<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the optical_specs model
   */
  interface optical_specsFieldRefs {
    readonly id: FieldRef<"optical_specs", 'Int'>
    readonly laser_id: FieldRef<"optical_specs", 'Int'>
    readonly beam_divergence_mrad: FieldRef<"optical_specs", 'Decimal'>
    readonly beam_quality_m2: FieldRef<"optical_specs", 'Decimal'>
    readonly aperture_mm: FieldRef<"optical_specs", 'Decimal'>
    readonly numerical_aperture: FieldRef<"optical_specs", 'Decimal'>
    readonly polarization: FieldRef<"optical_specs", 'String'>
    readonly polarization_ratio_db: FieldRef<"optical_specs", 'Decimal'>
    readonly created_at: FieldRef<"optical_specs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * optical_specs findUnique
   */
  export type optical_specsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the optical_specs
     */
    select?: optical_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the optical_specs
     */
    omit?: optical_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optical_specsInclude<ExtArgs> | null
    /**
     * Filter, which optical_specs to fetch.
     */
    where: optical_specsWhereUniqueInput
  }

  /**
   * optical_specs findUniqueOrThrow
   */
  export type optical_specsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the optical_specs
     */
    select?: optical_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the optical_specs
     */
    omit?: optical_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optical_specsInclude<ExtArgs> | null
    /**
     * Filter, which optical_specs to fetch.
     */
    where: optical_specsWhereUniqueInput
  }

  /**
   * optical_specs findFirst
   */
  export type optical_specsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the optical_specs
     */
    select?: optical_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the optical_specs
     */
    omit?: optical_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optical_specsInclude<ExtArgs> | null
    /**
     * Filter, which optical_specs to fetch.
     */
    where?: optical_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of optical_specs to fetch.
     */
    orderBy?: optical_specsOrderByWithRelationInput | optical_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for optical_specs.
     */
    cursor?: optical_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` optical_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` optical_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of optical_specs.
     */
    distinct?: Optical_specsScalarFieldEnum | Optical_specsScalarFieldEnum[]
  }

  /**
   * optical_specs findFirstOrThrow
   */
  export type optical_specsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the optical_specs
     */
    select?: optical_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the optical_specs
     */
    omit?: optical_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optical_specsInclude<ExtArgs> | null
    /**
     * Filter, which optical_specs to fetch.
     */
    where?: optical_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of optical_specs to fetch.
     */
    orderBy?: optical_specsOrderByWithRelationInput | optical_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for optical_specs.
     */
    cursor?: optical_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` optical_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` optical_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of optical_specs.
     */
    distinct?: Optical_specsScalarFieldEnum | Optical_specsScalarFieldEnum[]
  }

  /**
   * optical_specs findMany
   */
  export type optical_specsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the optical_specs
     */
    select?: optical_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the optical_specs
     */
    omit?: optical_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optical_specsInclude<ExtArgs> | null
    /**
     * Filter, which optical_specs to fetch.
     */
    where?: optical_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of optical_specs to fetch.
     */
    orderBy?: optical_specsOrderByWithRelationInput | optical_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing optical_specs.
     */
    cursor?: optical_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` optical_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` optical_specs.
     */
    skip?: number
    distinct?: Optical_specsScalarFieldEnum | Optical_specsScalarFieldEnum[]
  }

  /**
   * optical_specs create
   */
  export type optical_specsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the optical_specs
     */
    select?: optical_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the optical_specs
     */
    omit?: optical_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optical_specsInclude<ExtArgs> | null
    /**
     * The data needed to create a optical_specs.
     */
    data: XOR<optical_specsCreateInput, optical_specsUncheckedCreateInput>
  }

  /**
   * optical_specs createMany
   */
  export type optical_specsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many optical_specs.
     */
    data: optical_specsCreateManyInput | optical_specsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * optical_specs createManyAndReturn
   */
  export type optical_specsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the optical_specs
     */
    select?: optical_specsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the optical_specs
     */
    omit?: optical_specsOmit<ExtArgs> | null
    /**
     * The data used to create many optical_specs.
     */
    data: optical_specsCreateManyInput | optical_specsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optical_specsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * optical_specs update
   */
  export type optical_specsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the optical_specs
     */
    select?: optical_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the optical_specs
     */
    omit?: optical_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optical_specsInclude<ExtArgs> | null
    /**
     * The data needed to update a optical_specs.
     */
    data: XOR<optical_specsUpdateInput, optical_specsUncheckedUpdateInput>
    /**
     * Choose, which optical_specs to update.
     */
    where: optical_specsWhereUniqueInput
  }

  /**
   * optical_specs updateMany
   */
  export type optical_specsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update optical_specs.
     */
    data: XOR<optical_specsUpdateManyMutationInput, optical_specsUncheckedUpdateManyInput>
    /**
     * Filter which optical_specs to update
     */
    where?: optical_specsWhereInput
    /**
     * Limit how many optical_specs to update.
     */
    limit?: number
  }

  /**
   * optical_specs updateManyAndReturn
   */
  export type optical_specsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the optical_specs
     */
    select?: optical_specsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the optical_specs
     */
    omit?: optical_specsOmit<ExtArgs> | null
    /**
     * The data used to update optical_specs.
     */
    data: XOR<optical_specsUpdateManyMutationInput, optical_specsUncheckedUpdateManyInput>
    /**
     * Filter which optical_specs to update
     */
    where?: optical_specsWhereInput
    /**
     * Limit how many optical_specs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optical_specsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * optical_specs upsert
   */
  export type optical_specsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the optical_specs
     */
    select?: optical_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the optical_specs
     */
    omit?: optical_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optical_specsInclude<ExtArgs> | null
    /**
     * The filter to search for the optical_specs to update in case it exists.
     */
    where: optical_specsWhereUniqueInput
    /**
     * In case the optical_specs found by the `where` argument doesn't exist, create a new optical_specs with this data.
     */
    create: XOR<optical_specsCreateInput, optical_specsUncheckedCreateInput>
    /**
     * In case the optical_specs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<optical_specsUpdateInput, optical_specsUncheckedUpdateInput>
  }

  /**
   * optical_specs delete
   */
  export type optical_specsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the optical_specs
     */
    select?: optical_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the optical_specs
     */
    omit?: optical_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optical_specsInclude<ExtArgs> | null
    /**
     * Filter which optical_specs to delete.
     */
    where: optical_specsWhereUniqueInput
  }

  /**
   * optical_specs deleteMany
   */
  export type optical_specsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which optical_specs to delete
     */
    where?: optical_specsWhereInput
    /**
     * Limit how many optical_specs to delete.
     */
    limit?: number
  }

  /**
   * optical_specs without action
   */
  export type optical_specsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the optical_specs
     */
    select?: optical_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the optical_specs
     */
    omit?: optical_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optical_specsInclude<ExtArgs> | null
  }


  /**
   * Model stability_specs
   */

  export type AggregateStability_specs = {
    _count: Stability_specsCountAggregateOutputType | null
    _avg: Stability_specsAvgAggregateOutputType | null
    _sum: Stability_specsSumAggregateOutputType | null
    _min: Stability_specsMinAggregateOutputType | null
    _max: Stability_specsMaxAggregateOutputType | null
  }

  export type Stability_specsAvgAggregateOutputType = {
    id: number | null
    laser_id: number | null
    power_stability_percent: Decimal | null
    pointing_stability_urad: Decimal | null
    temperature_stability_c: Decimal | null
    warmup_time_min: Decimal | null
  }

  export type Stability_specsSumAggregateOutputType = {
    id: number | null
    laser_id: number | null
    power_stability_percent: Decimal | null
    pointing_stability_urad: Decimal | null
    temperature_stability_c: Decimal | null
    warmup_time_min: Decimal | null
  }

  export type Stability_specsMinAggregateOutputType = {
    id: number | null
    laser_id: number | null
    power_stability_percent: Decimal | null
    pointing_stability_urad: Decimal | null
    temperature_stability_c: Decimal | null
    warmup_time_min: Decimal | null
    created_at: Date | null
  }

  export type Stability_specsMaxAggregateOutputType = {
    id: number | null
    laser_id: number | null
    power_stability_percent: Decimal | null
    pointing_stability_urad: Decimal | null
    temperature_stability_c: Decimal | null
    warmup_time_min: Decimal | null
    created_at: Date | null
  }

  export type Stability_specsCountAggregateOutputType = {
    id: number
    laser_id: number
    power_stability_percent: number
    pointing_stability_urad: number
    temperature_stability_c: number
    warmup_time_min: number
    created_at: number
    _all: number
  }


  export type Stability_specsAvgAggregateInputType = {
    id?: true
    laser_id?: true
    power_stability_percent?: true
    pointing_stability_urad?: true
    temperature_stability_c?: true
    warmup_time_min?: true
  }

  export type Stability_specsSumAggregateInputType = {
    id?: true
    laser_id?: true
    power_stability_percent?: true
    pointing_stability_urad?: true
    temperature_stability_c?: true
    warmup_time_min?: true
  }

  export type Stability_specsMinAggregateInputType = {
    id?: true
    laser_id?: true
    power_stability_percent?: true
    pointing_stability_urad?: true
    temperature_stability_c?: true
    warmup_time_min?: true
    created_at?: true
  }

  export type Stability_specsMaxAggregateInputType = {
    id?: true
    laser_id?: true
    power_stability_percent?: true
    pointing_stability_urad?: true
    temperature_stability_c?: true
    warmup_time_min?: true
    created_at?: true
  }

  export type Stability_specsCountAggregateInputType = {
    id?: true
    laser_id?: true
    power_stability_percent?: true
    pointing_stability_urad?: true
    temperature_stability_c?: true
    warmup_time_min?: true
    created_at?: true
    _all?: true
  }

  export type Stability_specsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stability_specs to aggregate.
     */
    where?: stability_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stability_specs to fetch.
     */
    orderBy?: stability_specsOrderByWithRelationInput | stability_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stability_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stability_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stability_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stability_specs
    **/
    _count?: true | Stability_specsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stability_specsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stability_specsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stability_specsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stability_specsMaxAggregateInputType
  }

  export type GetStability_specsAggregateType<T extends Stability_specsAggregateArgs> = {
        [P in keyof T & keyof AggregateStability_specs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStability_specs[P]>
      : GetScalarType<T[P], AggregateStability_specs[P]>
  }




  export type stability_specsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stability_specsWhereInput
    orderBy?: stability_specsOrderByWithAggregationInput | stability_specsOrderByWithAggregationInput[]
    by: Stability_specsScalarFieldEnum[] | Stability_specsScalarFieldEnum
    having?: stability_specsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stability_specsCountAggregateInputType | true
    _avg?: Stability_specsAvgAggregateInputType
    _sum?: Stability_specsSumAggregateInputType
    _min?: Stability_specsMinAggregateInputType
    _max?: Stability_specsMaxAggregateInputType
  }

  export type Stability_specsGroupByOutputType = {
    id: number
    laser_id: number
    power_stability_percent: Decimal | null
    pointing_stability_urad: Decimal | null
    temperature_stability_c: Decimal | null
    warmup_time_min: Decimal | null
    created_at: Date | null
    _count: Stability_specsCountAggregateOutputType | null
    _avg: Stability_specsAvgAggregateOutputType | null
    _sum: Stability_specsSumAggregateOutputType | null
    _min: Stability_specsMinAggregateOutputType | null
    _max: Stability_specsMaxAggregateOutputType | null
  }

  type GetStability_specsGroupByPayload<T extends stability_specsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stability_specsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stability_specsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stability_specsGroupByOutputType[P]>
            : GetScalarType<T[P], Stability_specsGroupByOutputType[P]>
        }
      >
    >


  export type stability_specsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    power_stability_percent?: boolean
    pointing_stability_urad?: boolean
    temperature_stability_c?: boolean
    warmup_time_min?: boolean
    created_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stability_specs"]>

  export type stability_specsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    power_stability_percent?: boolean
    pointing_stability_urad?: boolean
    temperature_stability_c?: boolean
    warmup_time_min?: boolean
    created_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stability_specs"]>

  export type stability_specsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    power_stability_percent?: boolean
    pointing_stability_urad?: boolean
    temperature_stability_c?: boolean
    warmup_time_min?: boolean
    created_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stability_specs"]>

  export type stability_specsSelectScalar = {
    id?: boolean
    laser_id?: boolean
    power_stability_percent?: boolean
    pointing_stability_urad?: boolean
    temperature_stability_c?: boolean
    warmup_time_min?: boolean
    created_at?: boolean
  }

  export type stability_specsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "laser_id" | "power_stability_percent" | "pointing_stability_urad" | "temperature_stability_c" | "warmup_time_min" | "created_at", ExtArgs["result"]["stability_specs"]>
  export type stability_specsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }
  export type stability_specsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }
  export type stability_specsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }

  export type $stability_specsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stability_specs"
    objects: {
      laser: Prisma.$lasersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      laser_id: number
      power_stability_percent: Prisma.Decimal | null
      pointing_stability_urad: Prisma.Decimal | null
      temperature_stability_c: Prisma.Decimal | null
      warmup_time_min: Prisma.Decimal | null
      created_at: Date | null
    }, ExtArgs["result"]["stability_specs"]>
    composites: {}
  }

  type stability_specsGetPayload<S extends boolean | null | undefined | stability_specsDefaultArgs> = $Result.GetResult<Prisma.$stability_specsPayload, S>

  type stability_specsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stability_specsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stability_specsCountAggregateInputType | true
    }

  export interface stability_specsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stability_specs'], meta: { name: 'stability_specs' } }
    /**
     * Find zero or one Stability_specs that matches the filter.
     * @param {stability_specsFindUniqueArgs} args - Arguments to find a Stability_specs
     * @example
     * // Get one Stability_specs
     * const stability_specs = await prisma.stability_specs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stability_specsFindUniqueArgs>(args: SelectSubset<T, stability_specsFindUniqueArgs<ExtArgs>>): Prisma__stability_specsClient<$Result.GetResult<Prisma.$stability_specsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stability_specs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stability_specsFindUniqueOrThrowArgs} args - Arguments to find a Stability_specs
     * @example
     * // Get one Stability_specs
     * const stability_specs = await prisma.stability_specs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stability_specsFindUniqueOrThrowArgs>(args: SelectSubset<T, stability_specsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stability_specsClient<$Result.GetResult<Prisma.$stability_specsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stability_specs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stability_specsFindFirstArgs} args - Arguments to find a Stability_specs
     * @example
     * // Get one Stability_specs
     * const stability_specs = await prisma.stability_specs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stability_specsFindFirstArgs>(args?: SelectSubset<T, stability_specsFindFirstArgs<ExtArgs>>): Prisma__stability_specsClient<$Result.GetResult<Prisma.$stability_specsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stability_specs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stability_specsFindFirstOrThrowArgs} args - Arguments to find a Stability_specs
     * @example
     * // Get one Stability_specs
     * const stability_specs = await prisma.stability_specs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stability_specsFindFirstOrThrowArgs>(args?: SelectSubset<T, stability_specsFindFirstOrThrowArgs<ExtArgs>>): Prisma__stability_specsClient<$Result.GetResult<Prisma.$stability_specsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stability_specs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stability_specsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stability_specs
     * const stability_specs = await prisma.stability_specs.findMany()
     * 
     * // Get first 10 Stability_specs
     * const stability_specs = await prisma.stability_specs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stability_specsWithIdOnly = await prisma.stability_specs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stability_specsFindManyArgs>(args?: SelectSubset<T, stability_specsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stability_specsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stability_specs.
     * @param {stability_specsCreateArgs} args - Arguments to create a Stability_specs.
     * @example
     * // Create one Stability_specs
     * const Stability_specs = await prisma.stability_specs.create({
     *   data: {
     *     // ... data to create a Stability_specs
     *   }
     * })
     * 
     */
    create<T extends stability_specsCreateArgs>(args: SelectSubset<T, stability_specsCreateArgs<ExtArgs>>): Prisma__stability_specsClient<$Result.GetResult<Prisma.$stability_specsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stability_specs.
     * @param {stability_specsCreateManyArgs} args - Arguments to create many Stability_specs.
     * @example
     * // Create many Stability_specs
     * const stability_specs = await prisma.stability_specs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stability_specsCreateManyArgs>(args?: SelectSubset<T, stability_specsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stability_specs and returns the data saved in the database.
     * @param {stability_specsCreateManyAndReturnArgs} args - Arguments to create many Stability_specs.
     * @example
     * // Create many Stability_specs
     * const stability_specs = await prisma.stability_specs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stability_specs and only return the `id`
     * const stability_specsWithIdOnly = await prisma.stability_specs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stability_specsCreateManyAndReturnArgs>(args?: SelectSubset<T, stability_specsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stability_specsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stability_specs.
     * @param {stability_specsDeleteArgs} args - Arguments to delete one Stability_specs.
     * @example
     * // Delete one Stability_specs
     * const Stability_specs = await prisma.stability_specs.delete({
     *   where: {
     *     // ... filter to delete one Stability_specs
     *   }
     * })
     * 
     */
    delete<T extends stability_specsDeleteArgs>(args: SelectSubset<T, stability_specsDeleteArgs<ExtArgs>>): Prisma__stability_specsClient<$Result.GetResult<Prisma.$stability_specsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stability_specs.
     * @param {stability_specsUpdateArgs} args - Arguments to update one Stability_specs.
     * @example
     * // Update one Stability_specs
     * const stability_specs = await prisma.stability_specs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stability_specsUpdateArgs>(args: SelectSubset<T, stability_specsUpdateArgs<ExtArgs>>): Prisma__stability_specsClient<$Result.GetResult<Prisma.$stability_specsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stability_specs.
     * @param {stability_specsDeleteManyArgs} args - Arguments to filter Stability_specs to delete.
     * @example
     * // Delete a few Stability_specs
     * const { count } = await prisma.stability_specs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stability_specsDeleteManyArgs>(args?: SelectSubset<T, stability_specsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stability_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stability_specsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stability_specs
     * const stability_specs = await prisma.stability_specs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stability_specsUpdateManyArgs>(args: SelectSubset<T, stability_specsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stability_specs and returns the data updated in the database.
     * @param {stability_specsUpdateManyAndReturnArgs} args - Arguments to update many Stability_specs.
     * @example
     * // Update many Stability_specs
     * const stability_specs = await prisma.stability_specs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stability_specs and only return the `id`
     * const stability_specsWithIdOnly = await prisma.stability_specs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stability_specsUpdateManyAndReturnArgs>(args: SelectSubset<T, stability_specsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stability_specsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stability_specs.
     * @param {stability_specsUpsertArgs} args - Arguments to update or create a Stability_specs.
     * @example
     * // Update or create a Stability_specs
     * const stability_specs = await prisma.stability_specs.upsert({
     *   create: {
     *     // ... data to create a Stability_specs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stability_specs we want to update
     *   }
     * })
     */
    upsert<T extends stability_specsUpsertArgs>(args: SelectSubset<T, stability_specsUpsertArgs<ExtArgs>>): Prisma__stability_specsClient<$Result.GetResult<Prisma.$stability_specsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stability_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stability_specsCountArgs} args - Arguments to filter Stability_specs to count.
     * @example
     * // Count the number of Stability_specs
     * const count = await prisma.stability_specs.count({
     *   where: {
     *     // ... the filter for the Stability_specs we want to count
     *   }
     * })
    **/
    count<T extends stability_specsCountArgs>(
      args?: Subset<T, stability_specsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stability_specsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stability_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stability_specsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Stability_specsAggregateArgs>(args: Subset<T, Stability_specsAggregateArgs>): Prisma.PrismaPromise<GetStability_specsAggregateType<T>>

    /**
     * Group by Stability_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stability_specsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stability_specsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stability_specsGroupByArgs['orderBy'] }
        : { orderBy?: stability_specsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stability_specsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStability_specsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stability_specs model
   */
  readonly fields: stability_specsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stability_specs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stability_specsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laser<T extends lasersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lasersDefaultArgs<ExtArgs>>): Prisma__lasersClient<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stability_specs model
   */
  interface stability_specsFieldRefs {
    readonly id: FieldRef<"stability_specs", 'Int'>
    readonly laser_id: FieldRef<"stability_specs", 'Int'>
    readonly power_stability_percent: FieldRef<"stability_specs", 'Decimal'>
    readonly pointing_stability_urad: FieldRef<"stability_specs", 'Decimal'>
    readonly temperature_stability_c: FieldRef<"stability_specs", 'Decimal'>
    readonly warmup_time_min: FieldRef<"stability_specs", 'Decimal'>
    readonly created_at: FieldRef<"stability_specs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stability_specs findUnique
   */
  export type stability_specsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stability_specs
     */
    select?: stability_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stability_specs
     */
    omit?: stability_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stability_specsInclude<ExtArgs> | null
    /**
     * Filter, which stability_specs to fetch.
     */
    where: stability_specsWhereUniqueInput
  }

  /**
   * stability_specs findUniqueOrThrow
   */
  export type stability_specsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stability_specs
     */
    select?: stability_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stability_specs
     */
    omit?: stability_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stability_specsInclude<ExtArgs> | null
    /**
     * Filter, which stability_specs to fetch.
     */
    where: stability_specsWhereUniqueInput
  }

  /**
   * stability_specs findFirst
   */
  export type stability_specsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stability_specs
     */
    select?: stability_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stability_specs
     */
    omit?: stability_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stability_specsInclude<ExtArgs> | null
    /**
     * Filter, which stability_specs to fetch.
     */
    where?: stability_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stability_specs to fetch.
     */
    orderBy?: stability_specsOrderByWithRelationInput | stability_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stability_specs.
     */
    cursor?: stability_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stability_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stability_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stability_specs.
     */
    distinct?: Stability_specsScalarFieldEnum | Stability_specsScalarFieldEnum[]
  }

  /**
   * stability_specs findFirstOrThrow
   */
  export type stability_specsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stability_specs
     */
    select?: stability_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stability_specs
     */
    omit?: stability_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stability_specsInclude<ExtArgs> | null
    /**
     * Filter, which stability_specs to fetch.
     */
    where?: stability_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stability_specs to fetch.
     */
    orderBy?: stability_specsOrderByWithRelationInput | stability_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stability_specs.
     */
    cursor?: stability_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stability_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stability_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stability_specs.
     */
    distinct?: Stability_specsScalarFieldEnum | Stability_specsScalarFieldEnum[]
  }

  /**
   * stability_specs findMany
   */
  export type stability_specsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stability_specs
     */
    select?: stability_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stability_specs
     */
    omit?: stability_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stability_specsInclude<ExtArgs> | null
    /**
     * Filter, which stability_specs to fetch.
     */
    where?: stability_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stability_specs to fetch.
     */
    orderBy?: stability_specsOrderByWithRelationInput | stability_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stability_specs.
     */
    cursor?: stability_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stability_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stability_specs.
     */
    skip?: number
    distinct?: Stability_specsScalarFieldEnum | Stability_specsScalarFieldEnum[]
  }

  /**
   * stability_specs create
   */
  export type stability_specsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stability_specs
     */
    select?: stability_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stability_specs
     */
    omit?: stability_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stability_specsInclude<ExtArgs> | null
    /**
     * The data needed to create a stability_specs.
     */
    data: XOR<stability_specsCreateInput, stability_specsUncheckedCreateInput>
  }

  /**
   * stability_specs createMany
   */
  export type stability_specsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stability_specs.
     */
    data: stability_specsCreateManyInput | stability_specsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stability_specs createManyAndReturn
   */
  export type stability_specsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stability_specs
     */
    select?: stability_specsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stability_specs
     */
    omit?: stability_specsOmit<ExtArgs> | null
    /**
     * The data used to create many stability_specs.
     */
    data: stability_specsCreateManyInput | stability_specsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stability_specsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stability_specs update
   */
  export type stability_specsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stability_specs
     */
    select?: stability_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stability_specs
     */
    omit?: stability_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stability_specsInclude<ExtArgs> | null
    /**
     * The data needed to update a stability_specs.
     */
    data: XOR<stability_specsUpdateInput, stability_specsUncheckedUpdateInput>
    /**
     * Choose, which stability_specs to update.
     */
    where: stability_specsWhereUniqueInput
  }

  /**
   * stability_specs updateMany
   */
  export type stability_specsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stability_specs.
     */
    data: XOR<stability_specsUpdateManyMutationInput, stability_specsUncheckedUpdateManyInput>
    /**
     * Filter which stability_specs to update
     */
    where?: stability_specsWhereInput
    /**
     * Limit how many stability_specs to update.
     */
    limit?: number
  }

  /**
   * stability_specs updateManyAndReturn
   */
  export type stability_specsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stability_specs
     */
    select?: stability_specsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stability_specs
     */
    omit?: stability_specsOmit<ExtArgs> | null
    /**
     * The data used to update stability_specs.
     */
    data: XOR<stability_specsUpdateManyMutationInput, stability_specsUncheckedUpdateManyInput>
    /**
     * Filter which stability_specs to update
     */
    where?: stability_specsWhereInput
    /**
     * Limit how many stability_specs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stability_specsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stability_specs upsert
   */
  export type stability_specsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stability_specs
     */
    select?: stability_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stability_specs
     */
    omit?: stability_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stability_specsInclude<ExtArgs> | null
    /**
     * The filter to search for the stability_specs to update in case it exists.
     */
    where: stability_specsWhereUniqueInput
    /**
     * In case the stability_specs found by the `where` argument doesn't exist, create a new stability_specs with this data.
     */
    create: XOR<stability_specsCreateInput, stability_specsUncheckedCreateInput>
    /**
     * In case the stability_specs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stability_specsUpdateInput, stability_specsUncheckedUpdateInput>
  }

  /**
   * stability_specs delete
   */
  export type stability_specsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stability_specs
     */
    select?: stability_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stability_specs
     */
    omit?: stability_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stability_specsInclude<ExtArgs> | null
    /**
     * Filter which stability_specs to delete.
     */
    where: stability_specsWhereUniqueInput
  }

  /**
   * stability_specs deleteMany
   */
  export type stability_specsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stability_specs to delete
     */
    where?: stability_specsWhereInput
    /**
     * Limit how many stability_specs to delete.
     */
    limit?: number
  }

  /**
   * stability_specs without action
   */
  export type stability_specsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stability_specs
     */
    select?: stability_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stability_specs
     */
    omit?: stability_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stability_specsInclude<ExtArgs> | null
  }


  /**
   * Model environmental_specs
   */

  export type AggregateEnvironmental_specs = {
    _count: Environmental_specsCountAggregateOutputType | null
    _avg: Environmental_specsAvgAggregateOutputType | null
    _sum: Environmental_specsSumAggregateOutputType | null
    _min: Environmental_specsMinAggregateOutputType | null
    _max: Environmental_specsMaxAggregateOutputType | null
  }

  export type Environmental_specsAvgAggregateOutputType = {
    id: number | null
    laser_id: number | null
    operating_temp_min_c: Decimal | null
    operating_temp_max_c: Decimal | null
    storage_temp_min_c: Decimal | null
    storage_temp_max_c: Decimal | null
    humidity_max_percent: Decimal | null
  }

  export type Environmental_specsSumAggregateOutputType = {
    id: number | null
    laser_id: number | null
    operating_temp_min_c: Decimal | null
    operating_temp_max_c: Decimal | null
    storage_temp_min_c: Decimal | null
    storage_temp_max_c: Decimal | null
    humidity_max_percent: Decimal | null
  }

  export type Environmental_specsMinAggregateOutputType = {
    id: number | null
    laser_id: number | null
    operating_temp_min_c: Decimal | null
    operating_temp_max_c: Decimal | null
    storage_temp_min_c: Decimal | null
    storage_temp_max_c: Decimal | null
    humidity_max_percent: Decimal | null
    protection_class: string | null
    created_at: Date | null
  }

  export type Environmental_specsMaxAggregateOutputType = {
    id: number | null
    laser_id: number | null
    operating_temp_min_c: Decimal | null
    operating_temp_max_c: Decimal | null
    storage_temp_min_c: Decimal | null
    storage_temp_max_c: Decimal | null
    humidity_max_percent: Decimal | null
    protection_class: string | null
    created_at: Date | null
  }

  export type Environmental_specsCountAggregateOutputType = {
    id: number
    laser_id: number
    operating_temp_min_c: number
    operating_temp_max_c: number
    storage_temp_min_c: number
    storage_temp_max_c: number
    humidity_max_percent: number
    protection_class: number
    created_at: number
    _all: number
  }


  export type Environmental_specsAvgAggregateInputType = {
    id?: true
    laser_id?: true
    operating_temp_min_c?: true
    operating_temp_max_c?: true
    storage_temp_min_c?: true
    storage_temp_max_c?: true
    humidity_max_percent?: true
  }

  export type Environmental_specsSumAggregateInputType = {
    id?: true
    laser_id?: true
    operating_temp_min_c?: true
    operating_temp_max_c?: true
    storage_temp_min_c?: true
    storage_temp_max_c?: true
    humidity_max_percent?: true
  }

  export type Environmental_specsMinAggregateInputType = {
    id?: true
    laser_id?: true
    operating_temp_min_c?: true
    operating_temp_max_c?: true
    storage_temp_min_c?: true
    storage_temp_max_c?: true
    humidity_max_percent?: true
    protection_class?: true
    created_at?: true
  }

  export type Environmental_specsMaxAggregateInputType = {
    id?: true
    laser_id?: true
    operating_temp_min_c?: true
    operating_temp_max_c?: true
    storage_temp_min_c?: true
    storage_temp_max_c?: true
    humidity_max_percent?: true
    protection_class?: true
    created_at?: true
  }

  export type Environmental_specsCountAggregateInputType = {
    id?: true
    laser_id?: true
    operating_temp_min_c?: true
    operating_temp_max_c?: true
    storage_temp_min_c?: true
    storage_temp_max_c?: true
    humidity_max_percent?: true
    protection_class?: true
    created_at?: true
    _all?: true
  }

  export type Environmental_specsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which environmental_specs to aggregate.
     */
    where?: environmental_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of environmental_specs to fetch.
     */
    orderBy?: environmental_specsOrderByWithRelationInput | environmental_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: environmental_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` environmental_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` environmental_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned environmental_specs
    **/
    _count?: true | Environmental_specsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Environmental_specsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Environmental_specsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Environmental_specsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Environmental_specsMaxAggregateInputType
  }

  export type GetEnvironmental_specsAggregateType<T extends Environmental_specsAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvironmental_specs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvironmental_specs[P]>
      : GetScalarType<T[P], AggregateEnvironmental_specs[P]>
  }




  export type environmental_specsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: environmental_specsWhereInput
    orderBy?: environmental_specsOrderByWithAggregationInput | environmental_specsOrderByWithAggregationInput[]
    by: Environmental_specsScalarFieldEnum[] | Environmental_specsScalarFieldEnum
    having?: environmental_specsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Environmental_specsCountAggregateInputType | true
    _avg?: Environmental_specsAvgAggregateInputType
    _sum?: Environmental_specsSumAggregateInputType
    _min?: Environmental_specsMinAggregateInputType
    _max?: Environmental_specsMaxAggregateInputType
  }

  export type Environmental_specsGroupByOutputType = {
    id: number
    laser_id: number
    operating_temp_min_c: Decimal | null
    operating_temp_max_c: Decimal | null
    storage_temp_min_c: Decimal | null
    storage_temp_max_c: Decimal | null
    humidity_max_percent: Decimal | null
    protection_class: string | null
    created_at: Date | null
    _count: Environmental_specsCountAggregateOutputType | null
    _avg: Environmental_specsAvgAggregateOutputType | null
    _sum: Environmental_specsSumAggregateOutputType | null
    _min: Environmental_specsMinAggregateOutputType | null
    _max: Environmental_specsMaxAggregateOutputType | null
  }

  type GetEnvironmental_specsGroupByPayload<T extends environmental_specsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Environmental_specsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Environmental_specsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Environmental_specsGroupByOutputType[P]>
            : GetScalarType<T[P], Environmental_specsGroupByOutputType[P]>
        }
      >
    >


  export type environmental_specsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    operating_temp_min_c?: boolean
    operating_temp_max_c?: boolean
    storage_temp_min_c?: boolean
    storage_temp_max_c?: boolean
    humidity_max_percent?: boolean
    protection_class?: boolean
    created_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmental_specs"]>

  export type environmental_specsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    operating_temp_min_c?: boolean
    operating_temp_max_c?: boolean
    storage_temp_min_c?: boolean
    storage_temp_max_c?: boolean
    humidity_max_percent?: boolean
    protection_class?: boolean
    created_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmental_specs"]>

  export type environmental_specsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    operating_temp_min_c?: boolean
    operating_temp_max_c?: boolean
    storage_temp_min_c?: boolean
    storage_temp_max_c?: boolean
    humidity_max_percent?: boolean
    protection_class?: boolean
    created_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmental_specs"]>

  export type environmental_specsSelectScalar = {
    id?: boolean
    laser_id?: boolean
    operating_temp_min_c?: boolean
    operating_temp_max_c?: boolean
    storage_temp_min_c?: boolean
    storage_temp_max_c?: boolean
    humidity_max_percent?: boolean
    protection_class?: boolean
    created_at?: boolean
  }

  export type environmental_specsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "laser_id" | "operating_temp_min_c" | "operating_temp_max_c" | "storage_temp_min_c" | "storage_temp_max_c" | "humidity_max_percent" | "protection_class" | "created_at", ExtArgs["result"]["environmental_specs"]>
  export type environmental_specsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }
  export type environmental_specsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }
  export type environmental_specsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }

  export type $environmental_specsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "environmental_specs"
    objects: {
      laser: Prisma.$lasersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      laser_id: number
      operating_temp_min_c: Prisma.Decimal | null
      operating_temp_max_c: Prisma.Decimal | null
      storage_temp_min_c: Prisma.Decimal | null
      storage_temp_max_c: Prisma.Decimal | null
      humidity_max_percent: Prisma.Decimal | null
      protection_class: string | null
      created_at: Date | null
    }, ExtArgs["result"]["environmental_specs"]>
    composites: {}
  }

  type environmental_specsGetPayload<S extends boolean | null | undefined | environmental_specsDefaultArgs> = $Result.GetResult<Prisma.$environmental_specsPayload, S>

  type environmental_specsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<environmental_specsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Environmental_specsCountAggregateInputType | true
    }

  export interface environmental_specsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['environmental_specs'], meta: { name: 'environmental_specs' } }
    /**
     * Find zero or one Environmental_specs that matches the filter.
     * @param {environmental_specsFindUniqueArgs} args - Arguments to find a Environmental_specs
     * @example
     * // Get one Environmental_specs
     * const environmental_specs = await prisma.environmental_specs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends environmental_specsFindUniqueArgs>(args: SelectSubset<T, environmental_specsFindUniqueArgs<ExtArgs>>): Prisma__environmental_specsClient<$Result.GetResult<Prisma.$environmental_specsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Environmental_specs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {environmental_specsFindUniqueOrThrowArgs} args - Arguments to find a Environmental_specs
     * @example
     * // Get one Environmental_specs
     * const environmental_specs = await prisma.environmental_specs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends environmental_specsFindUniqueOrThrowArgs>(args: SelectSubset<T, environmental_specsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__environmental_specsClient<$Result.GetResult<Prisma.$environmental_specsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Environmental_specs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {environmental_specsFindFirstArgs} args - Arguments to find a Environmental_specs
     * @example
     * // Get one Environmental_specs
     * const environmental_specs = await prisma.environmental_specs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends environmental_specsFindFirstArgs>(args?: SelectSubset<T, environmental_specsFindFirstArgs<ExtArgs>>): Prisma__environmental_specsClient<$Result.GetResult<Prisma.$environmental_specsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Environmental_specs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {environmental_specsFindFirstOrThrowArgs} args - Arguments to find a Environmental_specs
     * @example
     * // Get one Environmental_specs
     * const environmental_specs = await prisma.environmental_specs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends environmental_specsFindFirstOrThrowArgs>(args?: SelectSubset<T, environmental_specsFindFirstOrThrowArgs<ExtArgs>>): Prisma__environmental_specsClient<$Result.GetResult<Prisma.$environmental_specsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Environmental_specs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {environmental_specsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Environmental_specs
     * const environmental_specs = await prisma.environmental_specs.findMany()
     * 
     * // Get first 10 Environmental_specs
     * const environmental_specs = await prisma.environmental_specs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const environmental_specsWithIdOnly = await prisma.environmental_specs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends environmental_specsFindManyArgs>(args?: SelectSubset<T, environmental_specsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$environmental_specsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Environmental_specs.
     * @param {environmental_specsCreateArgs} args - Arguments to create a Environmental_specs.
     * @example
     * // Create one Environmental_specs
     * const Environmental_specs = await prisma.environmental_specs.create({
     *   data: {
     *     // ... data to create a Environmental_specs
     *   }
     * })
     * 
     */
    create<T extends environmental_specsCreateArgs>(args: SelectSubset<T, environmental_specsCreateArgs<ExtArgs>>): Prisma__environmental_specsClient<$Result.GetResult<Prisma.$environmental_specsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Environmental_specs.
     * @param {environmental_specsCreateManyArgs} args - Arguments to create many Environmental_specs.
     * @example
     * // Create many Environmental_specs
     * const environmental_specs = await prisma.environmental_specs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends environmental_specsCreateManyArgs>(args?: SelectSubset<T, environmental_specsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Environmental_specs and returns the data saved in the database.
     * @param {environmental_specsCreateManyAndReturnArgs} args - Arguments to create many Environmental_specs.
     * @example
     * // Create many Environmental_specs
     * const environmental_specs = await prisma.environmental_specs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Environmental_specs and only return the `id`
     * const environmental_specsWithIdOnly = await prisma.environmental_specs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends environmental_specsCreateManyAndReturnArgs>(args?: SelectSubset<T, environmental_specsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$environmental_specsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Environmental_specs.
     * @param {environmental_specsDeleteArgs} args - Arguments to delete one Environmental_specs.
     * @example
     * // Delete one Environmental_specs
     * const Environmental_specs = await prisma.environmental_specs.delete({
     *   where: {
     *     // ... filter to delete one Environmental_specs
     *   }
     * })
     * 
     */
    delete<T extends environmental_specsDeleteArgs>(args: SelectSubset<T, environmental_specsDeleteArgs<ExtArgs>>): Prisma__environmental_specsClient<$Result.GetResult<Prisma.$environmental_specsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Environmental_specs.
     * @param {environmental_specsUpdateArgs} args - Arguments to update one Environmental_specs.
     * @example
     * // Update one Environmental_specs
     * const environmental_specs = await prisma.environmental_specs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends environmental_specsUpdateArgs>(args: SelectSubset<T, environmental_specsUpdateArgs<ExtArgs>>): Prisma__environmental_specsClient<$Result.GetResult<Prisma.$environmental_specsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Environmental_specs.
     * @param {environmental_specsDeleteManyArgs} args - Arguments to filter Environmental_specs to delete.
     * @example
     * // Delete a few Environmental_specs
     * const { count } = await prisma.environmental_specs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends environmental_specsDeleteManyArgs>(args?: SelectSubset<T, environmental_specsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Environmental_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {environmental_specsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Environmental_specs
     * const environmental_specs = await prisma.environmental_specs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends environmental_specsUpdateManyArgs>(args: SelectSubset<T, environmental_specsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Environmental_specs and returns the data updated in the database.
     * @param {environmental_specsUpdateManyAndReturnArgs} args - Arguments to update many Environmental_specs.
     * @example
     * // Update many Environmental_specs
     * const environmental_specs = await prisma.environmental_specs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Environmental_specs and only return the `id`
     * const environmental_specsWithIdOnly = await prisma.environmental_specs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends environmental_specsUpdateManyAndReturnArgs>(args: SelectSubset<T, environmental_specsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$environmental_specsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Environmental_specs.
     * @param {environmental_specsUpsertArgs} args - Arguments to update or create a Environmental_specs.
     * @example
     * // Update or create a Environmental_specs
     * const environmental_specs = await prisma.environmental_specs.upsert({
     *   create: {
     *     // ... data to create a Environmental_specs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Environmental_specs we want to update
     *   }
     * })
     */
    upsert<T extends environmental_specsUpsertArgs>(args: SelectSubset<T, environmental_specsUpsertArgs<ExtArgs>>): Prisma__environmental_specsClient<$Result.GetResult<Prisma.$environmental_specsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Environmental_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {environmental_specsCountArgs} args - Arguments to filter Environmental_specs to count.
     * @example
     * // Count the number of Environmental_specs
     * const count = await prisma.environmental_specs.count({
     *   where: {
     *     // ... the filter for the Environmental_specs we want to count
     *   }
     * })
    **/
    count<T extends environmental_specsCountArgs>(
      args?: Subset<T, environmental_specsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Environmental_specsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Environmental_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Environmental_specsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Environmental_specsAggregateArgs>(args: Subset<T, Environmental_specsAggregateArgs>): Prisma.PrismaPromise<GetEnvironmental_specsAggregateType<T>>

    /**
     * Group by Environmental_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {environmental_specsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends environmental_specsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: environmental_specsGroupByArgs['orderBy'] }
        : { orderBy?: environmental_specsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, environmental_specsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvironmental_specsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the environmental_specs model
   */
  readonly fields: environmental_specsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for environmental_specs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__environmental_specsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laser<T extends lasersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lasersDefaultArgs<ExtArgs>>): Prisma__lasersClient<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the environmental_specs model
   */
  interface environmental_specsFieldRefs {
    readonly id: FieldRef<"environmental_specs", 'Int'>
    readonly laser_id: FieldRef<"environmental_specs", 'Int'>
    readonly operating_temp_min_c: FieldRef<"environmental_specs", 'Decimal'>
    readonly operating_temp_max_c: FieldRef<"environmental_specs", 'Decimal'>
    readonly storage_temp_min_c: FieldRef<"environmental_specs", 'Decimal'>
    readonly storage_temp_max_c: FieldRef<"environmental_specs", 'Decimal'>
    readonly humidity_max_percent: FieldRef<"environmental_specs", 'Decimal'>
    readonly protection_class: FieldRef<"environmental_specs", 'String'>
    readonly created_at: FieldRef<"environmental_specs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * environmental_specs findUnique
   */
  export type environmental_specsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environmental_specs
     */
    select?: environmental_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environmental_specs
     */
    omit?: environmental_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmental_specsInclude<ExtArgs> | null
    /**
     * Filter, which environmental_specs to fetch.
     */
    where: environmental_specsWhereUniqueInput
  }

  /**
   * environmental_specs findUniqueOrThrow
   */
  export type environmental_specsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environmental_specs
     */
    select?: environmental_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environmental_specs
     */
    omit?: environmental_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmental_specsInclude<ExtArgs> | null
    /**
     * Filter, which environmental_specs to fetch.
     */
    where: environmental_specsWhereUniqueInput
  }

  /**
   * environmental_specs findFirst
   */
  export type environmental_specsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environmental_specs
     */
    select?: environmental_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environmental_specs
     */
    omit?: environmental_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmental_specsInclude<ExtArgs> | null
    /**
     * Filter, which environmental_specs to fetch.
     */
    where?: environmental_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of environmental_specs to fetch.
     */
    orderBy?: environmental_specsOrderByWithRelationInput | environmental_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for environmental_specs.
     */
    cursor?: environmental_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` environmental_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` environmental_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of environmental_specs.
     */
    distinct?: Environmental_specsScalarFieldEnum | Environmental_specsScalarFieldEnum[]
  }

  /**
   * environmental_specs findFirstOrThrow
   */
  export type environmental_specsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environmental_specs
     */
    select?: environmental_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environmental_specs
     */
    omit?: environmental_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmental_specsInclude<ExtArgs> | null
    /**
     * Filter, which environmental_specs to fetch.
     */
    where?: environmental_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of environmental_specs to fetch.
     */
    orderBy?: environmental_specsOrderByWithRelationInput | environmental_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for environmental_specs.
     */
    cursor?: environmental_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` environmental_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` environmental_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of environmental_specs.
     */
    distinct?: Environmental_specsScalarFieldEnum | Environmental_specsScalarFieldEnum[]
  }

  /**
   * environmental_specs findMany
   */
  export type environmental_specsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environmental_specs
     */
    select?: environmental_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environmental_specs
     */
    omit?: environmental_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmental_specsInclude<ExtArgs> | null
    /**
     * Filter, which environmental_specs to fetch.
     */
    where?: environmental_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of environmental_specs to fetch.
     */
    orderBy?: environmental_specsOrderByWithRelationInput | environmental_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing environmental_specs.
     */
    cursor?: environmental_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` environmental_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` environmental_specs.
     */
    skip?: number
    distinct?: Environmental_specsScalarFieldEnum | Environmental_specsScalarFieldEnum[]
  }

  /**
   * environmental_specs create
   */
  export type environmental_specsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environmental_specs
     */
    select?: environmental_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environmental_specs
     */
    omit?: environmental_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmental_specsInclude<ExtArgs> | null
    /**
     * The data needed to create a environmental_specs.
     */
    data: XOR<environmental_specsCreateInput, environmental_specsUncheckedCreateInput>
  }

  /**
   * environmental_specs createMany
   */
  export type environmental_specsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many environmental_specs.
     */
    data: environmental_specsCreateManyInput | environmental_specsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * environmental_specs createManyAndReturn
   */
  export type environmental_specsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environmental_specs
     */
    select?: environmental_specsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the environmental_specs
     */
    omit?: environmental_specsOmit<ExtArgs> | null
    /**
     * The data used to create many environmental_specs.
     */
    data: environmental_specsCreateManyInput | environmental_specsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmental_specsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * environmental_specs update
   */
  export type environmental_specsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environmental_specs
     */
    select?: environmental_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environmental_specs
     */
    omit?: environmental_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmental_specsInclude<ExtArgs> | null
    /**
     * The data needed to update a environmental_specs.
     */
    data: XOR<environmental_specsUpdateInput, environmental_specsUncheckedUpdateInput>
    /**
     * Choose, which environmental_specs to update.
     */
    where: environmental_specsWhereUniqueInput
  }

  /**
   * environmental_specs updateMany
   */
  export type environmental_specsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update environmental_specs.
     */
    data: XOR<environmental_specsUpdateManyMutationInput, environmental_specsUncheckedUpdateManyInput>
    /**
     * Filter which environmental_specs to update
     */
    where?: environmental_specsWhereInput
    /**
     * Limit how many environmental_specs to update.
     */
    limit?: number
  }

  /**
   * environmental_specs updateManyAndReturn
   */
  export type environmental_specsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environmental_specs
     */
    select?: environmental_specsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the environmental_specs
     */
    omit?: environmental_specsOmit<ExtArgs> | null
    /**
     * The data used to update environmental_specs.
     */
    data: XOR<environmental_specsUpdateManyMutationInput, environmental_specsUncheckedUpdateManyInput>
    /**
     * Filter which environmental_specs to update
     */
    where?: environmental_specsWhereInput
    /**
     * Limit how many environmental_specs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmental_specsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * environmental_specs upsert
   */
  export type environmental_specsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environmental_specs
     */
    select?: environmental_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environmental_specs
     */
    omit?: environmental_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmental_specsInclude<ExtArgs> | null
    /**
     * The filter to search for the environmental_specs to update in case it exists.
     */
    where: environmental_specsWhereUniqueInput
    /**
     * In case the environmental_specs found by the `where` argument doesn't exist, create a new environmental_specs with this data.
     */
    create: XOR<environmental_specsCreateInput, environmental_specsUncheckedCreateInput>
    /**
     * In case the environmental_specs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<environmental_specsUpdateInput, environmental_specsUncheckedUpdateInput>
  }

  /**
   * environmental_specs delete
   */
  export type environmental_specsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environmental_specs
     */
    select?: environmental_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environmental_specs
     */
    omit?: environmental_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmental_specsInclude<ExtArgs> | null
    /**
     * Filter which environmental_specs to delete.
     */
    where: environmental_specsWhereUniqueInput
  }

  /**
   * environmental_specs deleteMany
   */
  export type environmental_specsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which environmental_specs to delete
     */
    where?: environmental_specsWhereInput
    /**
     * Limit how many environmental_specs to delete.
     */
    limit?: number
  }

  /**
   * environmental_specs without action
   */
  export type environmental_specsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environmental_specs
     */
    select?: environmental_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environmental_specs
     */
    omit?: environmental_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmental_specsInclude<ExtArgs> | null
  }


  /**
   * Model pulse_specs
   */

  export type AggregatePulse_specs = {
    _count: Pulse_specsCountAggregateOutputType | null
    _avg: Pulse_specsAvgAggregateOutputType | null
    _sum: Pulse_specsSumAggregateOutputType | null
    _min: Pulse_specsMinAggregateOutputType | null
    _max: Pulse_specsMaxAggregateOutputType | null
  }

  export type Pulse_specsAvgAggregateOutputType = {
    id: number | null
    laser_id: number | null
    pulse_width_ns: Decimal | null
    pulse_energy_j: Decimal | null
    rep_rate_hz: Decimal | null
    duty_cycle_percent: Decimal | null
    rise_time_ns: Decimal | null
    fall_time_ns: Decimal | null
  }

  export type Pulse_specsSumAggregateOutputType = {
    id: number | null
    laser_id: number | null
    pulse_width_ns: Decimal | null
    pulse_energy_j: Decimal | null
    rep_rate_hz: Decimal | null
    duty_cycle_percent: Decimal | null
    rise_time_ns: Decimal | null
    fall_time_ns: Decimal | null
  }

  export type Pulse_specsMinAggregateOutputType = {
    id: number | null
    laser_id: number | null
    pulse_width_ns: Decimal | null
    pulse_energy_j: Decimal | null
    rep_rate_hz: Decimal | null
    duty_cycle_percent: Decimal | null
    rise_time_ns: Decimal | null
    fall_time_ns: Decimal | null
    created_at: Date | null
  }

  export type Pulse_specsMaxAggregateOutputType = {
    id: number | null
    laser_id: number | null
    pulse_width_ns: Decimal | null
    pulse_energy_j: Decimal | null
    rep_rate_hz: Decimal | null
    duty_cycle_percent: Decimal | null
    rise_time_ns: Decimal | null
    fall_time_ns: Decimal | null
    created_at: Date | null
  }

  export type Pulse_specsCountAggregateOutputType = {
    id: number
    laser_id: number
    pulse_width_ns: number
    pulse_energy_j: number
    rep_rate_hz: number
    duty_cycle_percent: number
    rise_time_ns: number
    fall_time_ns: number
    created_at: number
    _all: number
  }


  export type Pulse_specsAvgAggregateInputType = {
    id?: true
    laser_id?: true
    pulse_width_ns?: true
    pulse_energy_j?: true
    rep_rate_hz?: true
    duty_cycle_percent?: true
    rise_time_ns?: true
    fall_time_ns?: true
  }

  export type Pulse_specsSumAggregateInputType = {
    id?: true
    laser_id?: true
    pulse_width_ns?: true
    pulse_energy_j?: true
    rep_rate_hz?: true
    duty_cycle_percent?: true
    rise_time_ns?: true
    fall_time_ns?: true
  }

  export type Pulse_specsMinAggregateInputType = {
    id?: true
    laser_id?: true
    pulse_width_ns?: true
    pulse_energy_j?: true
    rep_rate_hz?: true
    duty_cycle_percent?: true
    rise_time_ns?: true
    fall_time_ns?: true
    created_at?: true
  }

  export type Pulse_specsMaxAggregateInputType = {
    id?: true
    laser_id?: true
    pulse_width_ns?: true
    pulse_energy_j?: true
    rep_rate_hz?: true
    duty_cycle_percent?: true
    rise_time_ns?: true
    fall_time_ns?: true
    created_at?: true
  }

  export type Pulse_specsCountAggregateInputType = {
    id?: true
    laser_id?: true
    pulse_width_ns?: true
    pulse_energy_j?: true
    rep_rate_hz?: true
    duty_cycle_percent?: true
    rise_time_ns?: true
    fall_time_ns?: true
    created_at?: true
    _all?: true
  }

  export type Pulse_specsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pulse_specs to aggregate.
     */
    where?: pulse_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pulse_specs to fetch.
     */
    orderBy?: pulse_specsOrderByWithRelationInput | pulse_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pulse_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pulse_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pulse_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pulse_specs
    **/
    _count?: true | Pulse_specsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pulse_specsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pulse_specsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pulse_specsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pulse_specsMaxAggregateInputType
  }

  export type GetPulse_specsAggregateType<T extends Pulse_specsAggregateArgs> = {
        [P in keyof T & keyof AggregatePulse_specs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePulse_specs[P]>
      : GetScalarType<T[P], AggregatePulse_specs[P]>
  }




  export type pulse_specsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pulse_specsWhereInput
    orderBy?: pulse_specsOrderByWithAggregationInput | pulse_specsOrderByWithAggregationInput[]
    by: Pulse_specsScalarFieldEnum[] | Pulse_specsScalarFieldEnum
    having?: pulse_specsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pulse_specsCountAggregateInputType | true
    _avg?: Pulse_specsAvgAggregateInputType
    _sum?: Pulse_specsSumAggregateInputType
    _min?: Pulse_specsMinAggregateInputType
    _max?: Pulse_specsMaxAggregateInputType
  }

  export type Pulse_specsGroupByOutputType = {
    id: number
    laser_id: number
    pulse_width_ns: Decimal | null
    pulse_energy_j: Decimal | null
    rep_rate_hz: Decimal | null
    duty_cycle_percent: Decimal | null
    rise_time_ns: Decimal | null
    fall_time_ns: Decimal | null
    created_at: Date | null
    _count: Pulse_specsCountAggregateOutputType | null
    _avg: Pulse_specsAvgAggregateOutputType | null
    _sum: Pulse_specsSumAggregateOutputType | null
    _min: Pulse_specsMinAggregateOutputType | null
    _max: Pulse_specsMaxAggregateOutputType | null
  }

  type GetPulse_specsGroupByPayload<T extends pulse_specsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pulse_specsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pulse_specsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pulse_specsGroupByOutputType[P]>
            : GetScalarType<T[P], Pulse_specsGroupByOutputType[P]>
        }
      >
    >


  export type pulse_specsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    pulse_width_ns?: boolean
    pulse_energy_j?: boolean
    rep_rate_hz?: boolean
    duty_cycle_percent?: boolean
    rise_time_ns?: boolean
    fall_time_ns?: boolean
    created_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pulse_specs"]>

  export type pulse_specsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    pulse_width_ns?: boolean
    pulse_energy_j?: boolean
    rep_rate_hz?: boolean
    duty_cycle_percent?: boolean
    rise_time_ns?: boolean
    fall_time_ns?: boolean
    created_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pulse_specs"]>

  export type pulse_specsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laser_id?: boolean
    pulse_width_ns?: boolean
    pulse_energy_j?: boolean
    rep_rate_hz?: boolean
    duty_cycle_percent?: boolean
    rise_time_ns?: boolean
    fall_time_ns?: boolean
    created_at?: boolean
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pulse_specs"]>

  export type pulse_specsSelectScalar = {
    id?: boolean
    laser_id?: boolean
    pulse_width_ns?: boolean
    pulse_energy_j?: boolean
    rep_rate_hz?: boolean
    duty_cycle_percent?: boolean
    rise_time_ns?: boolean
    fall_time_ns?: boolean
    created_at?: boolean
  }

  export type pulse_specsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "laser_id" | "pulse_width_ns" | "pulse_energy_j" | "rep_rate_hz" | "duty_cycle_percent" | "rise_time_ns" | "fall_time_ns" | "created_at", ExtArgs["result"]["pulse_specs"]>
  export type pulse_specsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }
  export type pulse_specsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }
  export type pulse_specsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laser?: boolean | lasersDefaultArgs<ExtArgs>
  }

  export type $pulse_specsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pulse_specs"
    objects: {
      laser: Prisma.$lasersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      laser_id: number
      pulse_width_ns: Prisma.Decimal | null
      pulse_energy_j: Prisma.Decimal | null
      rep_rate_hz: Prisma.Decimal | null
      duty_cycle_percent: Prisma.Decimal | null
      rise_time_ns: Prisma.Decimal | null
      fall_time_ns: Prisma.Decimal | null
      created_at: Date | null
    }, ExtArgs["result"]["pulse_specs"]>
    composites: {}
  }

  type pulse_specsGetPayload<S extends boolean | null | undefined | pulse_specsDefaultArgs> = $Result.GetResult<Prisma.$pulse_specsPayload, S>

  type pulse_specsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pulse_specsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pulse_specsCountAggregateInputType | true
    }

  export interface pulse_specsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pulse_specs'], meta: { name: 'pulse_specs' } }
    /**
     * Find zero or one Pulse_specs that matches the filter.
     * @param {pulse_specsFindUniqueArgs} args - Arguments to find a Pulse_specs
     * @example
     * // Get one Pulse_specs
     * const pulse_specs = await prisma.pulse_specs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pulse_specsFindUniqueArgs>(args: SelectSubset<T, pulse_specsFindUniqueArgs<ExtArgs>>): Prisma__pulse_specsClient<$Result.GetResult<Prisma.$pulse_specsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pulse_specs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pulse_specsFindUniqueOrThrowArgs} args - Arguments to find a Pulse_specs
     * @example
     * // Get one Pulse_specs
     * const pulse_specs = await prisma.pulse_specs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pulse_specsFindUniqueOrThrowArgs>(args: SelectSubset<T, pulse_specsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pulse_specsClient<$Result.GetResult<Prisma.$pulse_specsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pulse_specs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pulse_specsFindFirstArgs} args - Arguments to find a Pulse_specs
     * @example
     * // Get one Pulse_specs
     * const pulse_specs = await prisma.pulse_specs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pulse_specsFindFirstArgs>(args?: SelectSubset<T, pulse_specsFindFirstArgs<ExtArgs>>): Prisma__pulse_specsClient<$Result.GetResult<Prisma.$pulse_specsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pulse_specs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pulse_specsFindFirstOrThrowArgs} args - Arguments to find a Pulse_specs
     * @example
     * // Get one Pulse_specs
     * const pulse_specs = await prisma.pulse_specs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pulse_specsFindFirstOrThrowArgs>(args?: SelectSubset<T, pulse_specsFindFirstOrThrowArgs<ExtArgs>>): Prisma__pulse_specsClient<$Result.GetResult<Prisma.$pulse_specsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pulse_specs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pulse_specsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pulse_specs
     * const pulse_specs = await prisma.pulse_specs.findMany()
     * 
     * // Get first 10 Pulse_specs
     * const pulse_specs = await prisma.pulse_specs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pulse_specsWithIdOnly = await prisma.pulse_specs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pulse_specsFindManyArgs>(args?: SelectSubset<T, pulse_specsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pulse_specsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pulse_specs.
     * @param {pulse_specsCreateArgs} args - Arguments to create a Pulse_specs.
     * @example
     * // Create one Pulse_specs
     * const Pulse_specs = await prisma.pulse_specs.create({
     *   data: {
     *     // ... data to create a Pulse_specs
     *   }
     * })
     * 
     */
    create<T extends pulse_specsCreateArgs>(args: SelectSubset<T, pulse_specsCreateArgs<ExtArgs>>): Prisma__pulse_specsClient<$Result.GetResult<Prisma.$pulse_specsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pulse_specs.
     * @param {pulse_specsCreateManyArgs} args - Arguments to create many Pulse_specs.
     * @example
     * // Create many Pulse_specs
     * const pulse_specs = await prisma.pulse_specs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pulse_specsCreateManyArgs>(args?: SelectSubset<T, pulse_specsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pulse_specs and returns the data saved in the database.
     * @param {pulse_specsCreateManyAndReturnArgs} args - Arguments to create many Pulse_specs.
     * @example
     * // Create many Pulse_specs
     * const pulse_specs = await prisma.pulse_specs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pulse_specs and only return the `id`
     * const pulse_specsWithIdOnly = await prisma.pulse_specs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pulse_specsCreateManyAndReturnArgs>(args?: SelectSubset<T, pulse_specsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pulse_specsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pulse_specs.
     * @param {pulse_specsDeleteArgs} args - Arguments to delete one Pulse_specs.
     * @example
     * // Delete one Pulse_specs
     * const Pulse_specs = await prisma.pulse_specs.delete({
     *   where: {
     *     // ... filter to delete one Pulse_specs
     *   }
     * })
     * 
     */
    delete<T extends pulse_specsDeleteArgs>(args: SelectSubset<T, pulse_specsDeleteArgs<ExtArgs>>): Prisma__pulse_specsClient<$Result.GetResult<Prisma.$pulse_specsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pulse_specs.
     * @param {pulse_specsUpdateArgs} args - Arguments to update one Pulse_specs.
     * @example
     * // Update one Pulse_specs
     * const pulse_specs = await prisma.pulse_specs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pulse_specsUpdateArgs>(args: SelectSubset<T, pulse_specsUpdateArgs<ExtArgs>>): Prisma__pulse_specsClient<$Result.GetResult<Prisma.$pulse_specsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pulse_specs.
     * @param {pulse_specsDeleteManyArgs} args - Arguments to filter Pulse_specs to delete.
     * @example
     * // Delete a few Pulse_specs
     * const { count } = await prisma.pulse_specs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pulse_specsDeleteManyArgs>(args?: SelectSubset<T, pulse_specsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pulse_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pulse_specsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pulse_specs
     * const pulse_specs = await prisma.pulse_specs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pulse_specsUpdateManyArgs>(args: SelectSubset<T, pulse_specsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pulse_specs and returns the data updated in the database.
     * @param {pulse_specsUpdateManyAndReturnArgs} args - Arguments to update many Pulse_specs.
     * @example
     * // Update many Pulse_specs
     * const pulse_specs = await prisma.pulse_specs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pulse_specs and only return the `id`
     * const pulse_specsWithIdOnly = await prisma.pulse_specs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pulse_specsUpdateManyAndReturnArgs>(args: SelectSubset<T, pulse_specsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pulse_specsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pulse_specs.
     * @param {pulse_specsUpsertArgs} args - Arguments to update or create a Pulse_specs.
     * @example
     * // Update or create a Pulse_specs
     * const pulse_specs = await prisma.pulse_specs.upsert({
     *   create: {
     *     // ... data to create a Pulse_specs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pulse_specs we want to update
     *   }
     * })
     */
    upsert<T extends pulse_specsUpsertArgs>(args: SelectSubset<T, pulse_specsUpsertArgs<ExtArgs>>): Prisma__pulse_specsClient<$Result.GetResult<Prisma.$pulse_specsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pulse_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pulse_specsCountArgs} args - Arguments to filter Pulse_specs to count.
     * @example
     * // Count the number of Pulse_specs
     * const count = await prisma.pulse_specs.count({
     *   where: {
     *     // ... the filter for the Pulse_specs we want to count
     *   }
     * })
    **/
    count<T extends pulse_specsCountArgs>(
      args?: Subset<T, pulse_specsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pulse_specsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pulse_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pulse_specsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pulse_specsAggregateArgs>(args: Subset<T, Pulse_specsAggregateArgs>): Prisma.PrismaPromise<GetPulse_specsAggregateType<T>>

    /**
     * Group by Pulse_specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pulse_specsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pulse_specsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pulse_specsGroupByArgs['orderBy'] }
        : { orderBy?: pulse_specsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pulse_specsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPulse_specsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pulse_specs model
   */
  readonly fields: pulse_specsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pulse_specs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pulse_specsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laser<T extends lasersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lasersDefaultArgs<ExtArgs>>): Prisma__lasersClient<$Result.GetResult<Prisma.$lasersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pulse_specs model
   */
  interface pulse_specsFieldRefs {
    readonly id: FieldRef<"pulse_specs", 'Int'>
    readonly laser_id: FieldRef<"pulse_specs", 'Int'>
    readonly pulse_width_ns: FieldRef<"pulse_specs", 'Decimal'>
    readonly pulse_energy_j: FieldRef<"pulse_specs", 'Decimal'>
    readonly rep_rate_hz: FieldRef<"pulse_specs", 'Decimal'>
    readonly duty_cycle_percent: FieldRef<"pulse_specs", 'Decimal'>
    readonly rise_time_ns: FieldRef<"pulse_specs", 'Decimal'>
    readonly fall_time_ns: FieldRef<"pulse_specs", 'Decimal'>
    readonly created_at: FieldRef<"pulse_specs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pulse_specs findUnique
   */
  export type pulse_specsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pulse_specs
     */
    select?: pulse_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pulse_specs
     */
    omit?: pulse_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pulse_specsInclude<ExtArgs> | null
    /**
     * Filter, which pulse_specs to fetch.
     */
    where: pulse_specsWhereUniqueInput
  }

  /**
   * pulse_specs findUniqueOrThrow
   */
  export type pulse_specsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pulse_specs
     */
    select?: pulse_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pulse_specs
     */
    omit?: pulse_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pulse_specsInclude<ExtArgs> | null
    /**
     * Filter, which pulse_specs to fetch.
     */
    where: pulse_specsWhereUniqueInput
  }

  /**
   * pulse_specs findFirst
   */
  export type pulse_specsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pulse_specs
     */
    select?: pulse_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pulse_specs
     */
    omit?: pulse_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pulse_specsInclude<ExtArgs> | null
    /**
     * Filter, which pulse_specs to fetch.
     */
    where?: pulse_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pulse_specs to fetch.
     */
    orderBy?: pulse_specsOrderByWithRelationInput | pulse_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pulse_specs.
     */
    cursor?: pulse_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pulse_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pulse_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pulse_specs.
     */
    distinct?: Pulse_specsScalarFieldEnum | Pulse_specsScalarFieldEnum[]
  }

  /**
   * pulse_specs findFirstOrThrow
   */
  export type pulse_specsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pulse_specs
     */
    select?: pulse_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pulse_specs
     */
    omit?: pulse_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pulse_specsInclude<ExtArgs> | null
    /**
     * Filter, which pulse_specs to fetch.
     */
    where?: pulse_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pulse_specs to fetch.
     */
    orderBy?: pulse_specsOrderByWithRelationInput | pulse_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pulse_specs.
     */
    cursor?: pulse_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pulse_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pulse_specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pulse_specs.
     */
    distinct?: Pulse_specsScalarFieldEnum | Pulse_specsScalarFieldEnum[]
  }

  /**
   * pulse_specs findMany
   */
  export type pulse_specsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pulse_specs
     */
    select?: pulse_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pulse_specs
     */
    omit?: pulse_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pulse_specsInclude<ExtArgs> | null
    /**
     * Filter, which pulse_specs to fetch.
     */
    where?: pulse_specsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pulse_specs to fetch.
     */
    orderBy?: pulse_specsOrderByWithRelationInput | pulse_specsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pulse_specs.
     */
    cursor?: pulse_specsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pulse_specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pulse_specs.
     */
    skip?: number
    distinct?: Pulse_specsScalarFieldEnum | Pulse_specsScalarFieldEnum[]
  }

  /**
   * pulse_specs create
   */
  export type pulse_specsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pulse_specs
     */
    select?: pulse_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pulse_specs
     */
    omit?: pulse_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pulse_specsInclude<ExtArgs> | null
    /**
     * The data needed to create a pulse_specs.
     */
    data: XOR<pulse_specsCreateInput, pulse_specsUncheckedCreateInput>
  }

  /**
   * pulse_specs createMany
   */
  export type pulse_specsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pulse_specs.
     */
    data: pulse_specsCreateManyInput | pulse_specsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pulse_specs createManyAndReturn
   */
  export type pulse_specsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pulse_specs
     */
    select?: pulse_specsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pulse_specs
     */
    omit?: pulse_specsOmit<ExtArgs> | null
    /**
     * The data used to create many pulse_specs.
     */
    data: pulse_specsCreateManyInput | pulse_specsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pulse_specsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pulse_specs update
   */
  export type pulse_specsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pulse_specs
     */
    select?: pulse_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pulse_specs
     */
    omit?: pulse_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pulse_specsInclude<ExtArgs> | null
    /**
     * The data needed to update a pulse_specs.
     */
    data: XOR<pulse_specsUpdateInput, pulse_specsUncheckedUpdateInput>
    /**
     * Choose, which pulse_specs to update.
     */
    where: pulse_specsWhereUniqueInput
  }

  /**
   * pulse_specs updateMany
   */
  export type pulse_specsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pulse_specs.
     */
    data: XOR<pulse_specsUpdateManyMutationInput, pulse_specsUncheckedUpdateManyInput>
    /**
     * Filter which pulse_specs to update
     */
    where?: pulse_specsWhereInput
    /**
     * Limit how many pulse_specs to update.
     */
    limit?: number
  }

  /**
   * pulse_specs updateManyAndReturn
   */
  export type pulse_specsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pulse_specs
     */
    select?: pulse_specsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pulse_specs
     */
    omit?: pulse_specsOmit<ExtArgs> | null
    /**
     * The data used to update pulse_specs.
     */
    data: XOR<pulse_specsUpdateManyMutationInput, pulse_specsUncheckedUpdateManyInput>
    /**
     * Filter which pulse_specs to update
     */
    where?: pulse_specsWhereInput
    /**
     * Limit how many pulse_specs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pulse_specsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pulse_specs upsert
   */
  export type pulse_specsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pulse_specs
     */
    select?: pulse_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pulse_specs
     */
    omit?: pulse_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pulse_specsInclude<ExtArgs> | null
    /**
     * The filter to search for the pulse_specs to update in case it exists.
     */
    where: pulse_specsWhereUniqueInput
    /**
     * In case the pulse_specs found by the `where` argument doesn't exist, create a new pulse_specs with this data.
     */
    create: XOR<pulse_specsCreateInput, pulse_specsUncheckedCreateInput>
    /**
     * In case the pulse_specs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pulse_specsUpdateInput, pulse_specsUncheckedUpdateInput>
  }

  /**
   * pulse_specs delete
   */
  export type pulse_specsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pulse_specs
     */
    select?: pulse_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pulse_specs
     */
    omit?: pulse_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pulse_specsInclude<ExtArgs> | null
    /**
     * Filter which pulse_specs to delete.
     */
    where: pulse_specsWhereUniqueInput
  }

  /**
   * pulse_specs deleteMany
   */
  export type pulse_specsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pulse_specs to delete
     */
    where?: pulse_specsWhereInput
    /**
     * Limit how many pulse_specs to delete.
     */
    limit?: number
  }

  /**
   * pulse_specs without action
   */
  export type pulse_specsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pulse_specs
     */
    select?: pulse_specsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pulse_specs
     */
    omit?: pulse_specsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pulse_specsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    name: string | null
    role: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    last_login: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    name: string | null
    role: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    last_login: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    name: number
    role: number
    is_active: number
    created_at: number
    updated_at: number
    last_login: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    last_login?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    last_login?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    last_login?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password_hash: string
    name: string
    role: string
    is_active: boolean
    created_at: Date | null
    updated_at: Date | null
    last_login: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_login?: boolean
    access_codes?: boolean | users$access_codesArgs<ExtArgs>
    audit_log?: boolean | users$audit_logArgs<ExtArgs>
    pending_actions_initiated?: boolean | users$pending_actions_initiatedArgs<ExtArgs>
    pending_actions_approved?: boolean | users$pending_actions_approvedArgs<ExtArgs>
    rollback_history_initiated?: boolean | users$rollback_history_initiatedArgs<ExtArgs>
    rollback_history_approved?: boolean | users$rollback_history_approvedArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_login?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_login?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_login?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "name" | "role" | "is_active" | "created_at" | "updated_at" | "last_login", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    access_codes?: boolean | users$access_codesArgs<ExtArgs>
    audit_log?: boolean | users$audit_logArgs<ExtArgs>
    pending_actions_initiated?: boolean | users$pending_actions_initiatedArgs<ExtArgs>
    pending_actions_approved?: boolean | users$pending_actions_approvedArgs<ExtArgs>
    rollback_history_initiated?: boolean | users$rollback_history_initiatedArgs<ExtArgs>
    rollback_history_approved?: boolean | users$rollback_history_approvedArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      access_codes: Prisma.$access_codesPayload<ExtArgs>[]
      audit_log: Prisma.$audit_logPayload<ExtArgs>[]
      pending_actions_initiated: Prisma.$pending_actionsPayload<ExtArgs>[]
      pending_actions_approved: Prisma.$pending_actionsPayload<ExtArgs>[]
      rollback_history_initiated: Prisma.$rollback_historyPayload<ExtArgs>[]
      rollback_history_approved: Prisma.$rollback_historyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password_hash: string
      name: string
      role: string
      is_active: boolean
      created_at: Date | null
      updated_at: Date | null
      last_login: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    access_codes<T extends users$access_codesArgs<ExtArgs> = {}>(args?: Subset<T, users$access_codesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$access_codesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audit_log<T extends users$audit_logArgs<ExtArgs> = {}>(args?: Subset<T, users$audit_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pending_actions_initiated<T extends users$pending_actions_initiatedArgs<ExtArgs> = {}>(args?: Subset<T, users$pending_actions_initiatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pending_actionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pending_actions_approved<T extends users$pending_actions_approvedArgs<ExtArgs> = {}>(args?: Subset<T, users$pending_actions_approvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pending_actionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rollback_history_initiated<T extends users$rollback_history_initiatedArgs<ExtArgs> = {}>(args?: Subset<T, users$rollback_history_initiatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rollback_history_approved<T extends users$rollback_history_approvedArgs<ExtArgs> = {}>(args?: Subset<T, users$rollback_history_approvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly last_login: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.access_codes
   */
  export type users$access_codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_codes
     */
    select?: access_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_codes
     */
    omit?: access_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_codesInclude<ExtArgs> | null
    where?: access_codesWhereInput
    orderBy?: access_codesOrderByWithRelationInput | access_codesOrderByWithRelationInput[]
    cursor?: access_codesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Access_codesScalarFieldEnum | Access_codesScalarFieldEnum[]
  }

  /**
   * users.audit_log
   */
  export type users$audit_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    where?: audit_logWhereInput
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    cursor?: audit_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[]
  }

  /**
   * users.pending_actions_initiated
   */
  export type users$pending_actions_initiatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsInclude<ExtArgs> | null
    where?: pending_actionsWhereInput
    orderBy?: pending_actionsOrderByWithRelationInput | pending_actionsOrderByWithRelationInput[]
    cursor?: pending_actionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pending_actionsScalarFieldEnum | Pending_actionsScalarFieldEnum[]
  }

  /**
   * users.pending_actions_approved
   */
  export type users$pending_actions_approvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsInclude<ExtArgs> | null
    where?: pending_actionsWhereInput
    orderBy?: pending_actionsOrderByWithRelationInput | pending_actionsOrderByWithRelationInput[]
    cursor?: pending_actionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pending_actionsScalarFieldEnum | Pending_actionsScalarFieldEnum[]
  }

  /**
   * users.rollback_history_initiated
   */
  export type users$rollback_history_initiatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyInclude<ExtArgs> | null
    where?: rollback_historyWhereInput
    orderBy?: rollback_historyOrderByWithRelationInput | rollback_historyOrderByWithRelationInput[]
    cursor?: rollback_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rollback_historyScalarFieldEnum | Rollback_historyScalarFieldEnum[]
  }

  /**
   * users.rollback_history_approved
   */
  export type users$rollback_history_approvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyInclude<ExtArgs> | null
    where?: rollback_historyWhereInput
    orderBy?: rollback_historyOrderByWithRelationInput | rollback_historyOrderByWithRelationInput[]
    cursor?: rollback_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rollback_historyScalarFieldEnum | Rollback_historyScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model access_codes
   */

  export type AggregateAccess_codes = {
    _count: Access_codesCountAggregateOutputType | null
    _avg: Access_codesAvgAggregateOutputType | null
    _sum: Access_codesSumAggregateOutputType | null
    _min: Access_codesMinAggregateOutputType | null
    _max: Access_codesMaxAggregateOutputType | null
  }

  export type Access_codesAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    max_uses: number | null
    current_uses: number | null
  }

  export type Access_codesSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    max_uses: number | null
    current_uses: number | null
  }

  export type Access_codesMinAggregateOutputType = {
    id: number | null
    code_hash: string | null
    color_code: string | null
    role: string | null
    created_by: number | null
    expires_at: Date | null
    max_uses: number | null
    current_uses: number | null
    is_active: boolean | null
    notes: string | null
    created_at: Date | null
  }

  export type Access_codesMaxAggregateOutputType = {
    id: number | null
    code_hash: string | null
    color_code: string | null
    role: string | null
    created_by: number | null
    expires_at: Date | null
    max_uses: number | null
    current_uses: number | null
    is_active: boolean | null
    notes: string | null
    created_at: Date | null
  }

  export type Access_codesCountAggregateOutputType = {
    id: number
    code_hash: number
    color_code: number
    role: number
    created_by: number
    expires_at: number
    max_uses: number
    current_uses: number
    is_active: number
    notes: number
    created_at: number
    _all: number
  }


  export type Access_codesAvgAggregateInputType = {
    id?: true
    created_by?: true
    max_uses?: true
    current_uses?: true
  }

  export type Access_codesSumAggregateInputType = {
    id?: true
    created_by?: true
    max_uses?: true
    current_uses?: true
  }

  export type Access_codesMinAggregateInputType = {
    id?: true
    code_hash?: true
    color_code?: true
    role?: true
    created_by?: true
    expires_at?: true
    max_uses?: true
    current_uses?: true
    is_active?: true
    notes?: true
    created_at?: true
  }

  export type Access_codesMaxAggregateInputType = {
    id?: true
    code_hash?: true
    color_code?: true
    role?: true
    created_by?: true
    expires_at?: true
    max_uses?: true
    current_uses?: true
    is_active?: true
    notes?: true
    created_at?: true
  }

  export type Access_codesCountAggregateInputType = {
    id?: true
    code_hash?: true
    color_code?: true
    role?: true
    created_by?: true
    expires_at?: true
    max_uses?: true
    current_uses?: true
    is_active?: true
    notes?: true
    created_at?: true
    _all?: true
  }

  export type Access_codesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which access_codes to aggregate.
     */
    where?: access_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of access_codes to fetch.
     */
    orderBy?: access_codesOrderByWithRelationInput | access_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: access_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` access_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` access_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned access_codes
    **/
    _count?: true | Access_codesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Access_codesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Access_codesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Access_codesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Access_codesMaxAggregateInputType
  }

  export type GetAccess_codesAggregateType<T extends Access_codesAggregateArgs> = {
        [P in keyof T & keyof AggregateAccess_codes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccess_codes[P]>
      : GetScalarType<T[P], AggregateAccess_codes[P]>
  }




  export type access_codesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: access_codesWhereInput
    orderBy?: access_codesOrderByWithAggregationInput | access_codesOrderByWithAggregationInput[]
    by: Access_codesScalarFieldEnum[] | Access_codesScalarFieldEnum
    having?: access_codesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Access_codesCountAggregateInputType | true
    _avg?: Access_codesAvgAggregateInputType
    _sum?: Access_codesSumAggregateInputType
    _min?: Access_codesMinAggregateInputType
    _max?: Access_codesMaxAggregateInputType
  }

  export type Access_codesGroupByOutputType = {
    id: number
    code_hash: string
    color_code: string
    role: string
    created_by: number
    expires_at: Date | null
    max_uses: number | null
    current_uses: number
    is_active: boolean
    notes: string | null
    created_at: Date | null
    _count: Access_codesCountAggregateOutputType | null
    _avg: Access_codesAvgAggregateOutputType | null
    _sum: Access_codesSumAggregateOutputType | null
    _min: Access_codesMinAggregateOutputType | null
    _max: Access_codesMaxAggregateOutputType | null
  }

  type GetAccess_codesGroupByPayload<T extends access_codesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Access_codesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Access_codesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Access_codesGroupByOutputType[P]>
            : GetScalarType<T[P], Access_codesGroupByOutputType[P]>
        }
      >
    >


  export type access_codesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_hash?: boolean
    color_code?: boolean
    role?: boolean
    created_by?: boolean
    expires_at?: boolean
    max_uses?: boolean
    current_uses?: boolean
    is_active?: boolean
    notes?: boolean
    created_at?: boolean
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["access_codes"]>

  export type access_codesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_hash?: boolean
    color_code?: boolean
    role?: boolean
    created_by?: boolean
    expires_at?: boolean
    max_uses?: boolean
    current_uses?: boolean
    is_active?: boolean
    notes?: boolean
    created_at?: boolean
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["access_codes"]>

  export type access_codesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_hash?: boolean
    color_code?: boolean
    role?: boolean
    created_by?: boolean
    expires_at?: boolean
    max_uses?: boolean
    current_uses?: boolean
    is_active?: boolean
    notes?: boolean
    created_at?: boolean
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["access_codes"]>

  export type access_codesSelectScalar = {
    id?: boolean
    code_hash?: boolean
    color_code?: boolean
    role?: boolean
    created_by?: boolean
    expires_at?: boolean
    max_uses?: boolean
    current_uses?: boolean
    is_active?: boolean
    notes?: boolean
    created_at?: boolean
  }

  export type access_codesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code_hash" | "color_code" | "role" | "created_by" | "expires_at" | "max_uses" | "current_uses" | "is_active" | "notes" | "created_at", ExtArgs["result"]["access_codes"]>
  export type access_codesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type access_codesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type access_codesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $access_codesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "access_codes"
    objects: {
      creator: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code_hash: string
      color_code: string
      role: string
      created_by: number
      expires_at: Date | null
      max_uses: number | null
      current_uses: number
      is_active: boolean
      notes: string | null
      created_at: Date | null
    }, ExtArgs["result"]["access_codes"]>
    composites: {}
  }

  type access_codesGetPayload<S extends boolean | null | undefined | access_codesDefaultArgs> = $Result.GetResult<Prisma.$access_codesPayload, S>

  type access_codesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<access_codesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Access_codesCountAggregateInputType | true
    }

  export interface access_codesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['access_codes'], meta: { name: 'access_codes' } }
    /**
     * Find zero or one Access_codes that matches the filter.
     * @param {access_codesFindUniqueArgs} args - Arguments to find a Access_codes
     * @example
     * // Get one Access_codes
     * const access_codes = await prisma.access_codes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends access_codesFindUniqueArgs>(args: SelectSubset<T, access_codesFindUniqueArgs<ExtArgs>>): Prisma__access_codesClient<$Result.GetResult<Prisma.$access_codesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Access_codes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {access_codesFindUniqueOrThrowArgs} args - Arguments to find a Access_codes
     * @example
     * // Get one Access_codes
     * const access_codes = await prisma.access_codes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends access_codesFindUniqueOrThrowArgs>(args: SelectSubset<T, access_codesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__access_codesClient<$Result.GetResult<Prisma.$access_codesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Access_codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_codesFindFirstArgs} args - Arguments to find a Access_codes
     * @example
     * // Get one Access_codes
     * const access_codes = await prisma.access_codes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends access_codesFindFirstArgs>(args?: SelectSubset<T, access_codesFindFirstArgs<ExtArgs>>): Prisma__access_codesClient<$Result.GetResult<Prisma.$access_codesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Access_codes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_codesFindFirstOrThrowArgs} args - Arguments to find a Access_codes
     * @example
     * // Get one Access_codes
     * const access_codes = await prisma.access_codes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends access_codesFindFirstOrThrowArgs>(args?: SelectSubset<T, access_codesFindFirstOrThrowArgs<ExtArgs>>): Prisma__access_codesClient<$Result.GetResult<Prisma.$access_codesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Access_codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_codesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Access_codes
     * const access_codes = await prisma.access_codes.findMany()
     * 
     * // Get first 10 Access_codes
     * const access_codes = await prisma.access_codes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const access_codesWithIdOnly = await prisma.access_codes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends access_codesFindManyArgs>(args?: SelectSubset<T, access_codesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$access_codesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Access_codes.
     * @param {access_codesCreateArgs} args - Arguments to create a Access_codes.
     * @example
     * // Create one Access_codes
     * const Access_codes = await prisma.access_codes.create({
     *   data: {
     *     // ... data to create a Access_codes
     *   }
     * })
     * 
     */
    create<T extends access_codesCreateArgs>(args: SelectSubset<T, access_codesCreateArgs<ExtArgs>>): Prisma__access_codesClient<$Result.GetResult<Prisma.$access_codesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Access_codes.
     * @param {access_codesCreateManyArgs} args - Arguments to create many Access_codes.
     * @example
     * // Create many Access_codes
     * const access_codes = await prisma.access_codes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends access_codesCreateManyArgs>(args?: SelectSubset<T, access_codesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Access_codes and returns the data saved in the database.
     * @param {access_codesCreateManyAndReturnArgs} args - Arguments to create many Access_codes.
     * @example
     * // Create many Access_codes
     * const access_codes = await prisma.access_codes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Access_codes and only return the `id`
     * const access_codesWithIdOnly = await prisma.access_codes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends access_codesCreateManyAndReturnArgs>(args?: SelectSubset<T, access_codesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$access_codesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Access_codes.
     * @param {access_codesDeleteArgs} args - Arguments to delete one Access_codes.
     * @example
     * // Delete one Access_codes
     * const Access_codes = await prisma.access_codes.delete({
     *   where: {
     *     // ... filter to delete one Access_codes
     *   }
     * })
     * 
     */
    delete<T extends access_codesDeleteArgs>(args: SelectSubset<T, access_codesDeleteArgs<ExtArgs>>): Prisma__access_codesClient<$Result.GetResult<Prisma.$access_codesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Access_codes.
     * @param {access_codesUpdateArgs} args - Arguments to update one Access_codes.
     * @example
     * // Update one Access_codes
     * const access_codes = await prisma.access_codes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends access_codesUpdateArgs>(args: SelectSubset<T, access_codesUpdateArgs<ExtArgs>>): Prisma__access_codesClient<$Result.GetResult<Prisma.$access_codesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Access_codes.
     * @param {access_codesDeleteManyArgs} args - Arguments to filter Access_codes to delete.
     * @example
     * // Delete a few Access_codes
     * const { count } = await prisma.access_codes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends access_codesDeleteManyArgs>(args?: SelectSubset<T, access_codesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Access_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_codesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Access_codes
     * const access_codes = await prisma.access_codes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends access_codesUpdateManyArgs>(args: SelectSubset<T, access_codesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Access_codes and returns the data updated in the database.
     * @param {access_codesUpdateManyAndReturnArgs} args - Arguments to update many Access_codes.
     * @example
     * // Update many Access_codes
     * const access_codes = await prisma.access_codes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Access_codes and only return the `id`
     * const access_codesWithIdOnly = await prisma.access_codes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends access_codesUpdateManyAndReturnArgs>(args: SelectSubset<T, access_codesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$access_codesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Access_codes.
     * @param {access_codesUpsertArgs} args - Arguments to update or create a Access_codes.
     * @example
     * // Update or create a Access_codes
     * const access_codes = await prisma.access_codes.upsert({
     *   create: {
     *     // ... data to create a Access_codes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Access_codes we want to update
     *   }
     * })
     */
    upsert<T extends access_codesUpsertArgs>(args: SelectSubset<T, access_codesUpsertArgs<ExtArgs>>): Prisma__access_codesClient<$Result.GetResult<Prisma.$access_codesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Access_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_codesCountArgs} args - Arguments to filter Access_codes to count.
     * @example
     * // Count the number of Access_codes
     * const count = await prisma.access_codes.count({
     *   where: {
     *     // ... the filter for the Access_codes we want to count
     *   }
     * })
    **/
    count<T extends access_codesCountArgs>(
      args?: Subset<T, access_codesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Access_codesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Access_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Access_codesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Access_codesAggregateArgs>(args: Subset<T, Access_codesAggregateArgs>): Prisma.PrismaPromise<GetAccess_codesAggregateType<T>>

    /**
     * Group by Access_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_codesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends access_codesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: access_codesGroupByArgs['orderBy'] }
        : { orderBy?: access_codesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, access_codesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccess_codesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the access_codes model
   */
  readonly fields: access_codesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for access_codes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__access_codesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the access_codes model
   */
  interface access_codesFieldRefs {
    readonly id: FieldRef<"access_codes", 'Int'>
    readonly code_hash: FieldRef<"access_codes", 'String'>
    readonly color_code: FieldRef<"access_codes", 'String'>
    readonly role: FieldRef<"access_codes", 'String'>
    readonly created_by: FieldRef<"access_codes", 'Int'>
    readonly expires_at: FieldRef<"access_codes", 'DateTime'>
    readonly max_uses: FieldRef<"access_codes", 'Int'>
    readonly current_uses: FieldRef<"access_codes", 'Int'>
    readonly is_active: FieldRef<"access_codes", 'Boolean'>
    readonly notes: FieldRef<"access_codes", 'String'>
    readonly created_at: FieldRef<"access_codes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * access_codes findUnique
   */
  export type access_codesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_codes
     */
    select?: access_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_codes
     */
    omit?: access_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_codesInclude<ExtArgs> | null
    /**
     * Filter, which access_codes to fetch.
     */
    where: access_codesWhereUniqueInput
  }

  /**
   * access_codes findUniqueOrThrow
   */
  export type access_codesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_codes
     */
    select?: access_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_codes
     */
    omit?: access_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_codesInclude<ExtArgs> | null
    /**
     * Filter, which access_codes to fetch.
     */
    where: access_codesWhereUniqueInput
  }

  /**
   * access_codes findFirst
   */
  export type access_codesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_codes
     */
    select?: access_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_codes
     */
    omit?: access_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_codesInclude<ExtArgs> | null
    /**
     * Filter, which access_codes to fetch.
     */
    where?: access_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of access_codes to fetch.
     */
    orderBy?: access_codesOrderByWithRelationInput | access_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for access_codes.
     */
    cursor?: access_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` access_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` access_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of access_codes.
     */
    distinct?: Access_codesScalarFieldEnum | Access_codesScalarFieldEnum[]
  }

  /**
   * access_codes findFirstOrThrow
   */
  export type access_codesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_codes
     */
    select?: access_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_codes
     */
    omit?: access_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_codesInclude<ExtArgs> | null
    /**
     * Filter, which access_codes to fetch.
     */
    where?: access_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of access_codes to fetch.
     */
    orderBy?: access_codesOrderByWithRelationInput | access_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for access_codes.
     */
    cursor?: access_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` access_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` access_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of access_codes.
     */
    distinct?: Access_codesScalarFieldEnum | Access_codesScalarFieldEnum[]
  }

  /**
   * access_codes findMany
   */
  export type access_codesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_codes
     */
    select?: access_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_codes
     */
    omit?: access_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_codesInclude<ExtArgs> | null
    /**
     * Filter, which access_codes to fetch.
     */
    where?: access_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of access_codes to fetch.
     */
    orderBy?: access_codesOrderByWithRelationInput | access_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing access_codes.
     */
    cursor?: access_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` access_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` access_codes.
     */
    skip?: number
    distinct?: Access_codesScalarFieldEnum | Access_codesScalarFieldEnum[]
  }

  /**
   * access_codes create
   */
  export type access_codesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_codes
     */
    select?: access_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_codes
     */
    omit?: access_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_codesInclude<ExtArgs> | null
    /**
     * The data needed to create a access_codes.
     */
    data: XOR<access_codesCreateInput, access_codesUncheckedCreateInput>
  }

  /**
   * access_codes createMany
   */
  export type access_codesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many access_codes.
     */
    data: access_codesCreateManyInput | access_codesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * access_codes createManyAndReturn
   */
  export type access_codesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_codes
     */
    select?: access_codesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the access_codes
     */
    omit?: access_codesOmit<ExtArgs> | null
    /**
     * The data used to create many access_codes.
     */
    data: access_codesCreateManyInput | access_codesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_codesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * access_codes update
   */
  export type access_codesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_codes
     */
    select?: access_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_codes
     */
    omit?: access_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_codesInclude<ExtArgs> | null
    /**
     * The data needed to update a access_codes.
     */
    data: XOR<access_codesUpdateInput, access_codesUncheckedUpdateInput>
    /**
     * Choose, which access_codes to update.
     */
    where: access_codesWhereUniqueInput
  }

  /**
   * access_codes updateMany
   */
  export type access_codesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update access_codes.
     */
    data: XOR<access_codesUpdateManyMutationInput, access_codesUncheckedUpdateManyInput>
    /**
     * Filter which access_codes to update
     */
    where?: access_codesWhereInput
    /**
     * Limit how many access_codes to update.
     */
    limit?: number
  }

  /**
   * access_codes updateManyAndReturn
   */
  export type access_codesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_codes
     */
    select?: access_codesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the access_codes
     */
    omit?: access_codesOmit<ExtArgs> | null
    /**
     * The data used to update access_codes.
     */
    data: XOR<access_codesUpdateManyMutationInput, access_codesUncheckedUpdateManyInput>
    /**
     * Filter which access_codes to update
     */
    where?: access_codesWhereInput
    /**
     * Limit how many access_codes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_codesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * access_codes upsert
   */
  export type access_codesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_codes
     */
    select?: access_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_codes
     */
    omit?: access_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_codesInclude<ExtArgs> | null
    /**
     * The filter to search for the access_codes to update in case it exists.
     */
    where: access_codesWhereUniqueInput
    /**
     * In case the access_codes found by the `where` argument doesn't exist, create a new access_codes with this data.
     */
    create: XOR<access_codesCreateInput, access_codesUncheckedCreateInput>
    /**
     * In case the access_codes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<access_codesUpdateInput, access_codesUncheckedUpdateInput>
  }

  /**
   * access_codes delete
   */
  export type access_codesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_codes
     */
    select?: access_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_codes
     */
    omit?: access_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_codesInclude<ExtArgs> | null
    /**
     * Filter which access_codes to delete.
     */
    where: access_codesWhereUniqueInput
  }

  /**
   * access_codes deleteMany
   */
  export type access_codesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which access_codes to delete
     */
    where?: access_codesWhereInput
    /**
     * Limit how many access_codes to delete.
     */
    limit?: number
  }

  /**
   * access_codes without action
   */
  export type access_codesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_codes
     */
    select?: access_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_codes
     */
    omit?: access_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_codesInclude<ExtArgs> | null
  }


  /**
   * Model audit_log
   */

  export type AggregateAudit_log = {
    _count: Audit_logCountAggregateOutputType | null
    _avg: Audit_logAvgAggregateOutputType | null
    _sum: Audit_logSumAggregateOutputType | null
    _min: Audit_logMinAggregateOutputType | null
    _max: Audit_logMaxAggregateOutputType | null
  }

  export type Audit_logAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    record_id: number | null
  }

  export type Audit_logSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    record_id: number | null
  }

  export type Audit_logMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    table_name: string | null
    record_id: number | null
    action: string | null
    ip_address: string | null
    created_at: Date | null
  }

  export type Audit_logMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    table_name: string | null
    record_id: number | null
    action: string | null
    ip_address: string | null
    created_at: Date | null
  }

  export type Audit_logCountAggregateOutputType = {
    id: number
    user_id: number
    table_name: number
    record_id: number
    action: number
    old_data: number
    new_data: number
    ip_address: number
    created_at: number
    _all: number
  }


  export type Audit_logAvgAggregateInputType = {
    id?: true
    user_id?: true
    record_id?: true
  }

  export type Audit_logSumAggregateInputType = {
    id?: true
    user_id?: true
    record_id?: true
  }

  export type Audit_logMinAggregateInputType = {
    id?: true
    user_id?: true
    table_name?: true
    record_id?: true
    action?: true
    ip_address?: true
    created_at?: true
  }

  export type Audit_logMaxAggregateInputType = {
    id?: true
    user_id?: true
    table_name?: true
    record_id?: true
    action?: true
    ip_address?: true
    created_at?: true
  }

  export type Audit_logCountAggregateInputType = {
    id?: true
    user_id?: true
    table_name?: true
    record_id?: true
    action?: true
    old_data?: true
    new_data?: true
    ip_address?: true
    created_at?: true
    _all?: true
  }

  export type Audit_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_log to aggregate.
     */
    where?: audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audit_logs
    **/
    _count?: true | Audit_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Audit_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Audit_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_logMaxAggregateInputType
  }

  export type GetAudit_logAggregateType<T extends Audit_logAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_log[P]>
      : GetScalarType<T[P], AggregateAudit_log[P]>
  }




  export type audit_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logWhereInput
    orderBy?: audit_logOrderByWithAggregationInput | audit_logOrderByWithAggregationInput[]
    by: Audit_logScalarFieldEnum[] | Audit_logScalarFieldEnum
    having?: audit_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_logCountAggregateInputType | true
    _avg?: Audit_logAvgAggregateInputType
    _sum?: Audit_logSumAggregateInputType
    _min?: Audit_logMinAggregateInputType
    _max?: Audit_logMaxAggregateInputType
  }

  export type Audit_logGroupByOutputType = {
    id: number
    user_id: number | null
    table_name: string
    record_id: number | null
    action: string
    old_data: JsonValue | null
    new_data: JsonValue | null
    ip_address: string | null
    created_at: Date | null
    _count: Audit_logCountAggregateOutputType | null
    _avg: Audit_logAvgAggregateOutputType | null
    _sum: Audit_logSumAggregateOutputType | null
    _min: Audit_logMinAggregateOutputType | null
    _max: Audit_logMaxAggregateOutputType | null
  }

  type GetAudit_logGroupByPayload<T extends audit_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_logGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_logGroupByOutputType[P]>
        }
      >
    >


  export type audit_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    table_name?: boolean
    record_id?: boolean
    action?: boolean
    old_data?: boolean
    new_data?: boolean
    ip_address?: boolean
    created_at?: boolean
    user?: boolean | audit_log$userArgs<ExtArgs>
    rollback_history?: boolean | audit_log$rollback_historyArgs<ExtArgs>
    _count?: boolean | Audit_logCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_log"]>

  export type audit_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    table_name?: boolean
    record_id?: boolean
    action?: boolean
    old_data?: boolean
    new_data?: boolean
    ip_address?: boolean
    created_at?: boolean
    user?: boolean | audit_log$userArgs<ExtArgs>
  }, ExtArgs["result"]["audit_log"]>

  export type audit_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    table_name?: boolean
    record_id?: boolean
    action?: boolean
    old_data?: boolean
    new_data?: boolean
    ip_address?: boolean
    created_at?: boolean
    user?: boolean | audit_log$userArgs<ExtArgs>
  }, ExtArgs["result"]["audit_log"]>

  export type audit_logSelectScalar = {
    id?: boolean
    user_id?: boolean
    table_name?: boolean
    record_id?: boolean
    action?: boolean
    old_data?: boolean
    new_data?: boolean
    ip_address?: boolean
    created_at?: boolean
  }

  export type audit_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "table_name" | "record_id" | "action" | "old_data" | "new_data" | "ip_address" | "created_at", ExtArgs["result"]["audit_log"]>
  export type audit_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | audit_log$userArgs<ExtArgs>
    rollback_history?: boolean | audit_log$rollback_historyArgs<ExtArgs>
    _count?: boolean | Audit_logCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type audit_logIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | audit_log$userArgs<ExtArgs>
  }
  export type audit_logIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | audit_log$userArgs<ExtArgs>
  }

  export type $audit_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit_log"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
      rollback_history: Prisma.$rollback_historyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      table_name: string
      record_id: number | null
      action: string
      old_data: Prisma.JsonValue | null
      new_data: Prisma.JsonValue | null
      ip_address: string | null
      created_at: Date | null
    }, ExtArgs["result"]["audit_log"]>
    composites: {}
  }

  type audit_logGetPayload<S extends boolean | null | undefined | audit_logDefaultArgs> = $Result.GetResult<Prisma.$audit_logPayload, S>

  type audit_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<audit_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Audit_logCountAggregateInputType | true
    }

  export interface audit_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_log'], meta: { name: 'audit_log' } }
    /**
     * Find zero or one Audit_log that matches the filter.
     * @param {audit_logFindUniqueArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends audit_logFindUniqueArgs>(args: SelectSubset<T, audit_logFindUniqueArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {audit_logFindUniqueOrThrowArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends audit_logFindUniqueOrThrowArgs>(args: SelectSubset<T, audit_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindFirstArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends audit_logFindFirstArgs>(args?: SelectSubset<T, audit_logFindFirstArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindFirstOrThrowArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends audit_logFindFirstOrThrowArgs>(args?: SelectSubset<T, audit_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_logs
     * const audit_logs = await prisma.audit_log.findMany()
     * 
     * // Get first 10 Audit_logs
     * const audit_logs = await prisma.audit_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audit_logWithIdOnly = await prisma.audit_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends audit_logFindManyArgs>(args?: SelectSubset<T, audit_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit_log.
     * @param {audit_logCreateArgs} args - Arguments to create a Audit_log.
     * @example
     * // Create one Audit_log
     * const Audit_log = await prisma.audit_log.create({
     *   data: {
     *     // ... data to create a Audit_log
     *   }
     * })
     * 
     */
    create<T extends audit_logCreateArgs>(args: SelectSubset<T, audit_logCreateArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audit_logs.
     * @param {audit_logCreateManyArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_log = await prisma.audit_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends audit_logCreateManyArgs>(args?: SelectSubset<T, audit_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audit_logs and returns the data saved in the database.
     * @param {audit_logCreateManyAndReturnArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_log = await prisma.audit_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audit_logs and only return the `id`
     * const audit_logWithIdOnly = await prisma.audit_log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends audit_logCreateManyAndReturnArgs>(args?: SelectSubset<T, audit_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit_log.
     * @param {audit_logDeleteArgs} args - Arguments to delete one Audit_log.
     * @example
     * // Delete one Audit_log
     * const Audit_log = await prisma.audit_log.delete({
     *   where: {
     *     // ... filter to delete one Audit_log
     *   }
     * })
     * 
     */
    delete<T extends audit_logDeleteArgs>(args: SelectSubset<T, audit_logDeleteArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit_log.
     * @param {audit_logUpdateArgs} args - Arguments to update one Audit_log.
     * @example
     * // Update one Audit_log
     * const audit_log = await prisma.audit_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends audit_logUpdateArgs>(args: SelectSubset<T, audit_logUpdateArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audit_logs.
     * @param {audit_logDeleteManyArgs} args - Arguments to filter Audit_logs to delete.
     * @example
     * // Delete a few Audit_logs
     * const { count } = await prisma.audit_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends audit_logDeleteManyArgs>(args?: SelectSubset<T, audit_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_logs
     * const audit_log = await prisma.audit_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends audit_logUpdateManyArgs>(args: SelectSubset<T, audit_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs and returns the data updated in the database.
     * @param {audit_logUpdateManyAndReturnArgs} args - Arguments to update many Audit_logs.
     * @example
     * // Update many Audit_logs
     * const audit_log = await prisma.audit_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audit_logs and only return the `id`
     * const audit_logWithIdOnly = await prisma.audit_log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends audit_logUpdateManyAndReturnArgs>(args: SelectSubset<T, audit_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit_log.
     * @param {audit_logUpsertArgs} args - Arguments to update or create a Audit_log.
     * @example
     * // Update or create a Audit_log
     * const audit_log = await prisma.audit_log.upsert({
     *   create: {
     *     // ... data to create a Audit_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_log we want to update
     *   }
     * })
     */
    upsert<T extends audit_logUpsertArgs>(args: SelectSubset<T, audit_logUpsertArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logCountArgs} args - Arguments to filter Audit_logs to count.
     * @example
     * // Count the number of Audit_logs
     * const count = await prisma.audit_log.count({
     *   where: {
     *     // ... the filter for the Audit_logs we want to count
     *   }
     * })
    **/
    count<T extends audit_logCountArgs>(
      args?: Subset<T, audit_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Audit_logAggregateArgs>(args: Subset<T, Audit_logAggregateArgs>): Prisma.PrismaPromise<GetAudit_logAggregateType<T>>

    /**
     * Group by Audit_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends audit_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_logGroupByArgs['orderBy'] }
        : { orderBy?: audit_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, audit_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit_log model
   */
  readonly fields: audit_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends audit_log$userArgs<ExtArgs> = {}>(args?: Subset<T, audit_log$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rollback_history<T extends audit_log$rollback_historyArgs<ExtArgs> = {}>(args?: Subset<T, audit_log$rollback_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the audit_log model
   */
  interface audit_logFieldRefs {
    readonly id: FieldRef<"audit_log", 'Int'>
    readonly user_id: FieldRef<"audit_log", 'Int'>
    readonly table_name: FieldRef<"audit_log", 'String'>
    readonly record_id: FieldRef<"audit_log", 'Int'>
    readonly action: FieldRef<"audit_log", 'String'>
    readonly old_data: FieldRef<"audit_log", 'Json'>
    readonly new_data: FieldRef<"audit_log", 'Json'>
    readonly ip_address: FieldRef<"audit_log", 'String'>
    readonly created_at: FieldRef<"audit_log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * audit_log findUnique
   */
  export type audit_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * Filter, which audit_log to fetch.
     */
    where: audit_logWhereUniqueInput
  }

  /**
   * audit_log findUniqueOrThrow
   */
  export type audit_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * Filter, which audit_log to fetch.
     */
    where: audit_logWhereUniqueInput
  }

  /**
   * audit_log findFirst
   */
  export type audit_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * Filter, which audit_log to fetch.
     */
    where?: audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[]
  }

  /**
   * audit_log findFirstOrThrow
   */
  export type audit_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * Filter, which audit_log to fetch.
     */
    where?: audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[]
  }

  /**
   * audit_log findMany
   */
  export type audit_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audit_logs.
     */
    cursor?: audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[]
  }

  /**
   * audit_log create
   */
  export type audit_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * The data needed to create a audit_log.
     */
    data: XOR<audit_logCreateInput, audit_logUncheckedCreateInput>
  }

  /**
   * audit_log createMany
   */
  export type audit_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logCreateManyInput | audit_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit_log createManyAndReturn
   */
  export type audit_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logCreateManyInput | audit_logCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_log update
   */
  export type audit_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * The data needed to update a audit_log.
     */
    data: XOR<audit_logUpdateInput, audit_logUncheckedUpdateInput>
    /**
     * Choose, which audit_log to update.
     */
    where: audit_logWhereUniqueInput
  }

  /**
   * audit_log updateMany
   */
  export type audit_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logUpdateManyMutationInput, audit_logUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
  }

  /**
   * audit_log updateManyAndReturn
   */
  export type audit_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logUpdateManyMutationInput, audit_logUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_log upsert
   */
  export type audit_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * The filter to search for the audit_log to update in case it exists.
     */
    where: audit_logWhereUniqueInput
    /**
     * In case the audit_log found by the `where` argument doesn't exist, create a new audit_log with this data.
     */
    create: XOR<audit_logCreateInput, audit_logUncheckedCreateInput>
    /**
     * In case the audit_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_logUpdateInput, audit_logUncheckedUpdateInput>
  }

  /**
   * audit_log delete
   */
  export type audit_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * Filter which audit_log to delete.
     */
    where: audit_logWhereUniqueInput
  }

  /**
   * audit_log deleteMany
   */
  export type audit_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_logs to delete
     */
    where?: audit_logWhereInput
    /**
     * Limit how many audit_logs to delete.
     */
    limit?: number
  }

  /**
   * audit_log.user
   */
  export type audit_log$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * audit_log.rollback_history
   */
  export type audit_log$rollback_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyInclude<ExtArgs> | null
    where?: rollback_historyWhereInput
    orderBy?: rollback_historyOrderByWithRelationInput | rollback_historyOrderByWithRelationInput[]
    cursor?: rollback_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rollback_historyScalarFieldEnum | Rollback_historyScalarFieldEnum[]
  }

  /**
   * audit_log without action
   */
  export type audit_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
  }


  /**
   * Model pending_actions
   */

  export type AggregatePending_actions = {
    _count: Pending_actionsCountAggregateOutputType | null
    _avg: Pending_actionsAvgAggregateOutputType | null
    _sum: Pending_actionsSumAggregateOutputType | null
    _min: Pending_actionsMinAggregateOutputType | null
    _max: Pending_actionsMaxAggregateOutputType | null
  }

  export type Pending_actionsAvgAggregateOutputType = {
    id: number | null
    initiated_by: number | null
    target_record_id: number | null
    approved_by: number | null
  }

  export type Pending_actionsSumAggregateOutputType = {
    id: number | null
    initiated_by: number | null
    target_record_id: number | null
    approved_by: number | null
  }

  export type Pending_actionsMinAggregateOutputType = {
    id: number | null
    action_type: string | null
    initiated_by: number | null
    target_table: string | null
    target_record_id: number | null
    reason: string | null
    status: string | null
    expires_at: Date | null
    approved_by: number | null
    approved_at: Date | null
    completed_at: Date | null
    created_at: Date | null
  }

  export type Pending_actionsMaxAggregateOutputType = {
    id: number | null
    action_type: string | null
    initiated_by: number | null
    target_table: string | null
    target_record_id: number | null
    reason: string | null
    status: string | null
    expires_at: Date | null
    approved_by: number | null
    approved_at: Date | null
    completed_at: Date | null
    created_at: Date | null
  }

  export type Pending_actionsCountAggregateOutputType = {
    id: number
    action_type: number
    initiated_by: number
    target_table: number
    target_record_id: number
    action_data: number
    reason: number
    status: number
    expires_at: number
    approved_by: number
    approved_at: number
    completed_at: number
    created_at: number
    _all: number
  }


  export type Pending_actionsAvgAggregateInputType = {
    id?: true
    initiated_by?: true
    target_record_id?: true
    approved_by?: true
  }

  export type Pending_actionsSumAggregateInputType = {
    id?: true
    initiated_by?: true
    target_record_id?: true
    approved_by?: true
  }

  export type Pending_actionsMinAggregateInputType = {
    id?: true
    action_type?: true
    initiated_by?: true
    target_table?: true
    target_record_id?: true
    reason?: true
    status?: true
    expires_at?: true
    approved_by?: true
    approved_at?: true
    completed_at?: true
    created_at?: true
  }

  export type Pending_actionsMaxAggregateInputType = {
    id?: true
    action_type?: true
    initiated_by?: true
    target_table?: true
    target_record_id?: true
    reason?: true
    status?: true
    expires_at?: true
    approved_by?: true
    approved_at?: true
    completed_at?: true
    created_at?: true
  }

  export type Pending_actionsCountAggregateInputType = {
    id?: true
    action_type?: true
    initiated_by?: true
    target_table?: true
    target_record_id?: true
    action_data?: true
    reason?: true
    status?: true
    expires_at?: true
    approved_by?: true
    approved_at?: true
    completed_at?: true
    created_at?: true
    _all?: true
  }

  export type Pending_actionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pending_actions to aggregate.
     */
    where?: pending_actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pending_actions to fetch.
     */
    orderBy?: pending_actionsOrderByWithRelationInput | pending_actionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pending_actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pending_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pending_actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pending_actions
    **/
    _count?: true | Pending_actionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pending_actionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pending_actionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pending_actionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pending_actionsMaxAggregateInputType
  }

  export type GetPending_actionsAggregateType<T extends Pending_actionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePending_actions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePending_actions[P]>
      : GetScalarType<T[P], AggregatePending_actions[P]>
  }




  export type pending_actionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pending_actionsWhereInput
    orderBy?: pending_actionsOrderByWithAggregationInput | pending_actionsOrderByWithAggregationInput[]
    by: Pending_actionsScalarFieldEnum[] | Pending_actionsScalarFieldEnum
    having?: pending_actionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pending_actionsCountAggregateInputType | true
    _avg?: Pending_actionsAvgAggregateInputType
    _sum?: Pending_actionsSumAggregateInputType
    _min?: Pending_actionsMinAggregateInputType
    _max?: Pending_actionsMaxAggregateInputType
  }

  export type Pending_actionsGroupByOutputType = {
    id: number
    action_type: string
    initiated_by: number
    target_table: string
    target_record_id: number | null
    action_data: JsonValue | null
    reason: string | null
    status: string
    expires_at: Date | null
    approved_by: number | null
    approved_at: Date | null
    completed_at: Date | null
    created_at: Date | null
    _count: Pending_actionsCountAggregateOutputType | null
    _avg: Pending_actionsAvgAggregateOutputType | null
    _sum: Pending_actionsSumAggregateOutputType | null
    _min: Pending_actionsMinAggregateOutputType | null
    _max: Pending_actionsMaxAggregateOutputType | null
  }

  type GetPending_actionsGroupByPayload<T extends pending_actionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pending_actionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pending_actionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pending_actionsGroupByOutputType[P]>
            : GetScalarType<T[P], Pending_actionsGroupByOutputType[P]>
        }
      >
    >


  export type pending_actionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action_type?: boolean
    initiated_by?: boolean
    target_table?: boolean
    target_record_id?: boolean
    action_data?: boolean
    reason?: boolean
    status?: boolean
    expires_at?: boolean
    approved_by?: boolean
    approved_at?: boolean
    completed_at?: boolean
    created_at?: boolean
    initiator?: boolean | usersDefaultArgs<ExtArgs>
    approver?: boolean | pending_actions$approverArgs<ExtArgs>
  }, ExtArgs["result"]["pending_actions"]>

  export type pending_actionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action_type?: boolean
    initiated_by?: boolean
    target_table?: boolean
    target_record_id?: boolean
    action_data?: boolean
    reason?: boolean
    status?: boolean
    expires_at?: boolean
    approved_by?: boolean
    approved_at?: boolean
    completed_at?: boolean
    created_at?: boolean
    initiator?: boolean | usersDefaultArgs<ExtArgs>
    approver?: boolean | pending_actions$approverArgs<ExtArgs>
  }, ExtArgs["result"]["pending_actions"]>

  export type pending_actionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action_type?: boolean
    initiated_by?: boolean
    target_table?: boolean
    target_record_id?: boolean
    action_data?: boolean
    reason?: boolean
    status?: boolean
    expires_at?: boolean
    approved_by?: boolean
    approved_at?: boolean
    completed_at?: boolean
    created_at?: boolean
    initiator?: boolean | usersDefaultArgs<ExtArgs>
    approver?: boolean | pending_actions$approverArgs<ExtArgs>
  }, ExtArgs["result"]["pending_actions"]>

  export type pending_actionsSelectScalar = {
    id?: boolean
    action_type?: boolean
    initiated_by?: boolean
    target_table?: boolean
    target_record_id?: boolean
    action_data?: boolean
    reason?: boolean
    status?: boolean
    expires_at?: boolean
    approved_by?: boolean
    approved_at?: boolean
    completed_at?: boolean
    created_at?: boolean
  }

  export type pending_actionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action_type" | "initiated_by" | "target_table" | "target_record_id" | "action_data" | "reason" | "status" | "expires_at" | "approved_by" | "approved_at" | "completed_at" | "created_at", ExtArgs["result"]["pending_actions"]>
  export type pending_actionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    initiator?: boolean | usersDefaultArgs<ExtArgs>
    approver?: boolean | pending_actions$approverArgs<ExtArgs>
  }
  export type pending_actionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    initiator?: boolean | usersDefaultArgs<ExtArgs>
    approver?: boolean | pending_actions$approverArgs<ExtArgs>
  }
  export type pending_actionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    initiator?: boolean | usersDefaultArgs<ExtArgs>
    approver?: boolean | pending_actions$approverArgs<ExtArgs>
  }

  export type $pending_actionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pending_actions"
    objects: {
      initiator: Prisma.$usersPayload<ExtArgs>
      approver: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action_type: string
      initiated_by: number
      target_table: string
      target_record_id: number | null
      action_data: Prisma.JsonValue | null
      reason: string | null
      status: string
      expires_at: Date | null
      approved_by: number | null
      approved_at: Date | null
      completed_at: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["pending_actions"]>
    composites: {}
  }

  type pending_actionsGetPayload<S extends boolean | null | undefined | pending_actionsDefaultArgs> = $Result.GetResult<Prisma.$pending_actionsPayload, S>

  type pending_actionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pending_actionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pending_actionsCountAggregateInputType | true
    }

  export interface pending_actionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pending_actions'], meta: { name: 'pending_actions' } }
    /**
     * Find zero or one Pending_actions that matches the filter.
     * @param {pending_actionsFindUniqueArgs} args - Arguments to find a Pending_actions
     * @example
     * // Get one Pending_actions
     * const pending_actions = await prisma.pending_actions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pending_actionsFindUniqueArgs>(args: SelectSubset<T, pending_actionsFindUniqueArgs<ExtArgs>>): Prisma__pending_actionsClient<$Result.GetResult<Prisma.$pending_actionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pending_actions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pending_actionsFindUniqueOrThrowArgs} args - Arguments to find a Pending_actions
     * @example
     * // Get one Pending_actions
     * const pending_actions = await prisma.pending_actions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pending_actionsFindUniqueOrThrowArgs>(args: SelectSubset<T, pending_actionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pending_actionsClient<$Result.GetResult<Prisma.$pending_actionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pending_actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pending_actionsFindFirstArgs} args - Arguments to find a Pending_actions
     * @example
     * // Get one Pending_actions
     * const pending_actions = await prisma.pending_actions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pending_actionsFindFirstArgs>(args?: SelectSubset<T, pending_actionsFindFirstArgs<ExtArgs>>): Prisma__pending_actionsClient<$Result.GetResult<Prisma.$pending_actionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pending_actions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pending_actionsFindFirstOrThrowArgs} args - Arguments to find a Pending_actions
     * @example
     * // Get one Pending_actions
     * const pending_actions = await prisma.pending_actions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pending_actionsFindFirstOrThrowArgs>(args?: SelectSubset<T, pending_actionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__pending_actionsClient<$Result.GetResult<Prisma.$pending_actionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pending_actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pending_actionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pending_actions
     * const pending_actions = await prisma.pending_actions.findMany()
     * 
     * // Get first 10 Pending_actions
     * const pending_actions = await prisma.pending_actions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pending_actionsWithIdOnly = await prisma.pending_actions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pending_actionsFindManyArgs>(args?: SelectSubset<T, pending_actionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pending_actionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pending_actions.
     * @param {pending_actionsCreateArgs} args - Arguments to create a Pending_actions.
     * @example
     * // Create one Pending_actions
     * const Pending_actions = await prisma.pending_actions.create({
     *   data: {
     *     // ... data to create a Pending_actions
     *   }
     * })
     * 
     */
    create<T extends pending_actionsCreateArgs>(args: SelectSubset<T, pending_actionsCreateArgs<ExtArgs>>): Prisma__pending_actionsClient<$Result.GetResult<Prisma.$pending_actionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pending_actions.
     * @param {pending_actionsCreateManyArgs} args - Arguments to create many Pending_actions.
     * @example
     * // Create many Pending_actions
     * const pending_actions = await prisma.pending_actions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pending_actionsCreateManyArgs>(args?: SelectSubset<T, pending_actionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pending_actions and returns the data saved in the database.
     * @param {pending_actionsCreateManyAndReturnArgs} args - Arguments to create many Pending_actions.
     * @example
     * // Create many Pending_actions
     * const pending_actions = await prisma.pending_actions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pending_actions and only return the `id`
     * const pending_actionsWithIdOnly = await prisma.pending_actions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pending_actionsCreateManyAndReturnArgs>(args?: SelectSubset<T, pending_actionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pending_actionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pending_actions.
     * @param {pending_actionsDeleteArgs} args - Arguments to delete one Pending_actions.
     * @example
     * // Delete one Pending_actions
     * const Pending_actions = await prisma.pending_actions.delete({
     *   where: {
     *     // ... filter to delete one Pending_actions
     *   }
     * })
     * 
     */
    delete<T extends pending_actionsDeleteArgs>(args: SelectSubset<T, pending_actionsDeleteArgs<ExtArgs>>): Prisma__pending_actionsClient<$Result.GetResult<Prisma.$pending_actionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pending_actions.
     * @param {pending_actionsUpdateArgs} args - Arguments to update one Pending_actions.
     * @example
     * // Update one Pending_actions
     * const pending_actions = await prisma.pending_actions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pending_actionsUpdateArgs>(args: SelectSubset<T, pending_actionsUpdateArgs<ExtArgs>>): Prisma__pending_actionsClient<$Result.GetResult<Prisma.$pending_actionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pending_actions.
     * @param {pending_actionsDeleteManyArgs} args - Arguments to filter Pending_actions to delete.
     * @example
     * // Delete a few Pending_actions
     * const { count } = await prisma.pending_actions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pending_actionsDeleteManyArgs>(args?: SelectSubset<T, pending_actionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pending_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pending_actionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pending_actions
     * const pending_actions = await prisma.pending_actions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pending_actionsUpdateManyArgs>(args: SelectSubset<T, pending_actionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pending_actions and returns the data updated in the database.
     * @param {pending_actionsUpdateManyAndReturnArgs} args - Arguments to update many Pending_actions.
     * @example
     * // Update many Pending_actions
     * const pending_actions = await prisma.pending_actions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pending_actions and only return the `id`
     * const pending_actionsWithIdOnly = await prisma.pending_actions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pending_actionsUpdateManyAndReturnArgs>(args: SelectSubset<T, pending_actionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pending_actionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pending_actions.
     * @param {pending_actionsUpsertArgs} args - Arguments to update or create a Pending_actions.
     * @example
     * // Update or create a Pending_actions
     * const pending_actions = await prisma.pending_actions.upsert({
     *   create: {
     *     // ... data to create a Pending_actions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pending_actions we want to update
     *   }
     * })
     */
    upsert<T extends pending_actionsUpsertArgs>(args: SelectSubset<T, pending_actionsUpsertArgs<ExtArgs>>): Prisma__pending_actionsClient<$Result.GetResult<Prisma.$pending_actionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pending_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pending_actionsCountArgs} args - Arguments to filter Pending_actions to count.
     * @example
     * // Count the number of Pending_actions
     * const count = await prisma.pending_actions.count({
     *   where: {
     *     // ... the filter for the Pending_actions we want to count
     *   }
     * })
    **/
    count<T extends pending_actionsCountArgs>(
      args?: Subset<T, pending_actionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pending_actionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pending_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_actionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pending_actionsAggregateArgs>(args: Subset<T, Pending_actionsAggregateArgs>): Prisma.PrismaPromise<GetPending_actionsAggregateType<T>>

    /**
     * Group by Pending_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pending_actionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pending_actionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pending_actionsGroupByArgs['orderBy'] }
        : { orderBy?: pending_actionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pending_actionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPending_actionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pending_actions model
   */
  readonly fields: pending_actionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pending_actions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pending_actionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    initiator<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends pending_actions$approverArgs<ExtArgs> = {}>(args?: Subset<T, pending_actions$approverArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pending_actions model
   */
  interface pending_actionsFieldRefs {
    readonly id: FieldRef<"pending_actions", 'Int'>
    readonly action_type: FieldRef<"pending_actions", 'String'>
    readonly initiated_by: FieldRef<"pending_actions", 'Int'>
    readonly target_table: FieldRef<"pending_actions", 'String'>
    readonly target_record_id: FieldRef<"pending_actions", 'Int'>
    readonly action_data: FieldRef<"pending_actions", 'Json'>
    readonly reason: FieldRef<"pending_actions", 'String'>
    readonly status: FieldRef<"pending_actions", 'String'>
    readonly expires_at: FieldRef<"pending_actions", 'DateTime'>
    readonly approved_by: FieldRef<"pending_actions", 'Int'>
    readonly approved_at: FieldRef<"pending_actions", 'DateTime'>
    readonly completed_at: FieldRef<"pending_actions", 'DateTime'>
    readonly created_at: FieldRef<"pending_actions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pending_actions findUnique
   */
  export type pending_actionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsInclude<ExtArgs> | null
    /**
     * Filter, which pending_actions to fetch.
     */
    where: pending_actionsWhereUniqueInput
  }

  /**
   * pending_actions findUniqueOrThrow
   */
  export type pending_actionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsInclude<ExtArgs> | null
    /**
     * Filter, which pending_actions to fetch.
     */
    where: pending_actionsWhereUniqueInput
  }

  /**
   * pending_actions findFirst
   */
  export type pending_actionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsInclude<ExtArgs> | null
    /**
     * Filter, which pending_actions to fetch.
     */
    where?: pending_actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pending_actions to fetch.
     */
    orderBy?: pending_actionsOrderByWithRelationInput | pending_actionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pending_actions.
     */
    cursor?: pending_actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pending_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pending_actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pending_actions.
     */
    distinct?: Pending_actionsScalarFieldEnum | Pending_actionsScalarFieldEnum[]
  }

  /**
   * pending_actions findFirstOrThrow
   */
  export type pending_actionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsInclude<ExtArgs> | null
    /**
     * Filter, which pending_actions to fetch.
     */
    where?: pending_actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pending_actions to fetch.
     */
    orderBy?: pending_actionsOrderByWithRelationInput | pending_actionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pending_actions.
     */
    cursor?: pending_actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pending_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pending_actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pending_actions.
     */
    distinct?: Pending_actionsScalarFieldEnum | Pending_actionsScalarFieldEnum[]
  }

  /**
   * pending_actions findMany
   */
  export type pending_actionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsInclude<ExtArgs> | null
    /**
     * Filter, which pending_actions to fetch.
     */
    where?: pending_actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pending_actions to fetch.
     */
    orderBy?: pending_actionsOrderByWithRelationInput | pending_actionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pending_actions.
     */
    cursor?: pending_actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pending_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pending_actions.
     */
    skip?: number
    distinct?: Pending_actionsScalarFieldEnum | Pending_actionsScalarFieldEnum[]
  }

  /**
   * pending_actions create
   */
  export type pending_actionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsInclude<ExtArgs> | null
    /**
     * The data needed to create a pending_actions.
     */
    data: XOR<pending_actionsCreateInput, pending_actionsUncheckedCreateInput>
  }

  /**
   * pending_actions createMany
   */
  export type pending_actionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pending_actions.
     */
    data: pending_actionsCreateManyInput | pending_actionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pending_actions createManyAndReturn
   */
  export type pending_actionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * The data used to create many pending_actions.
     */
    data: pending_actionsCreateManyInput | pending_actionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pending_actions update
   */
  export type pending_actionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsInclude<ExtArgs> | null
    /**
     * The data needed to update a pending_actions.
     */
    data: XOR<pending_actionsUpdateInput, pending_actionsUncheckedUpdateInput>
    /**
     * Choose, which pending_actions to update.
     */
    where: pending_actionsWhereUniqueInput
  }

  /**
   * pending_actions updateMany
   */
  export type pending_actionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pending_actions.
     */
    data: XOR<pending_actionsUpdateManyMutationInput, pending_actionsUncheckedUpdateManyInput>
    /**
     * Filter which pending_actions to update
     */
    where?: pending_actionsWhereInput
    /**
     * Limit how many pending_actions to update.
     */
    limit?: number
  }

  /**
   * pending_actions updateManyAndReturn
   */
  export type pending_actionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * The data used to update pending_actions.
     */
    data: XOR<pending_actionsUpdateManyMutationInput, pending_actionsUncheckedUpdateManyInput>
    /**
     * Filter which pending_actions to update
     */
    where?: pending_actionsWhereInput
    /**
     * Limit how many pending_actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pending_actions upsert
   */
  export type pending_actionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsInclude<ExtArgs> | null
    /**
     * The filter to search for the pending_actions to update in case it exists.
     */
    where: pending_actionsWhereUniqueInput
    /**
     * In case the pending_actions found by the `where` argument doesn't exist, create a new pending_actions with this data.
     */
    create: XOR<pending_actionsCreateInput, pending_actionsUncheckedCreateInput>
    /**
     * In case the pending_actions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pending_actionsUpdateInput, pending_actionsUncheckedUpdateInput>
  }

  /**
   * pending_actions delete
   */
  export type pending_actionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsInclude<ExtArgs> | null
    /**
     * Filter which pending_actions to delete.
     */
    where: pending_actionsWhereUniqueInput
  }

  /**
   * pending_actions deleteMany
   */
  export type pending_actionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pending_actions to delete
     */
    where?: pending_actionsWhereInput
    /**
     * Limit how many pending_actions to delete.
     */
    limit?: number
  }

  /**
   * pending_actions.approver
   */
  export type pending_actions$approverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * pending_actions without action
   */
  export type pending_actionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_actions
     */
    select?: pending_actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_actions
     */
    omit?: pending_actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pending_actionsInclude<ExtArgs> | null
  }


  /**
   * Model rollback_history
   */

  export type AggregateRollback_history = {
    _count: Rollback_historyCountAggregateOutputType | null
    _avg: Rollback_historyAvgAggregateOutputType | null
    _sum: Rollback_historySumAggregateOutputType | null
    _min: Rollback_historyMinAggregateOutputType | null
    _max: Rollback_historyMaxAggregateOutputType | null
  }

  export type Rollback_historyAvgAggregateOutputType = {
    id: number | null
    audit_log_id: number | null
    initiated_by: number | null
    approved_by: number | null
  }

  export type Rollback_historySumAggregateOutputType = {
    id: number | null
    audit_log_id: number | null
    initiated_by: number | null
    approved_by: number | null
  }

  export type Rollback_historyMinAggregateOutputType = {
    id: number | null
    audit_log_id: number | null
    initiated_by: number | null
    approved_by: number | null
    status: string | null
    error_message: string | null
    created_at: Date | null
  }

  export type Rollback_historyMaxAggregateOutputType = {
    id: number | null
    audit_log_id: number | null
    initiated_by: number | null
    approved_by: number | null
    status: string | null
    error_message: string | null
    created_at: Date | null
  }

  export type Rollback_historyCountAggregateOutputType = {
    id: number
    audit_log_id: number
    initiated_by: number
    approved_by: number
    status: number
    error_message: number
    created_at: number
    _all: number
  }


  export type Rollback_historyAvgAggregateInputType = {
    id?: true
    audit_log_id?: true
    initiated_by?: true
    approved_by?: true
  }

  export type Rollback_historySumAggregateInputType = {
    id?: true
    audit_log_id?: true
    initiated_by?: true
    approved_by?: true
  }

  export type Rollback_historyMinAggregateInputType = {
    id?: true
    audit_log_id?: true
    initiated_by?: true
    approved_by?: true
    status?: true
    error_message?: true
    created_at?: true
  }

  export type Rollback_historyMaxAggregateInputType = {
    id?: true
    audit_log_id?: true
    initiated_by?: true
    approved_by?: true
    status?: true
    error_message?: true
    created_at?: true
  }

  export type Rollback_historyCountAggregateInputType = {
    id?: true
    audit_log_id?: true
    initiated_by?: true
    approved_by?: true
    status?: true
    error_message?: true
    created_at?: true
    _all?: true
  }

  export type Rollback_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rollback_history to aggregate.
     */
    where?: rollback_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rollback_histories to fetch.
     */
    orderBy?: rollback_historyOrderByWithRelationInput | rollback_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rollback_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rollback_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rollback_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rollback_histories
    **/
    _count?: true | Rollback_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rollback_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rollback_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rollback_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rollback_historyMaxAggregateInputType
  }

  export type GetRollback_historyAggregateType<T extends Rollback_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateRollback_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRollback_history[P]>
      : GetScalarType<T[P], AggregateRollback_history[P]>
  }




  export type rollback_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rollback_historyWhereInput
    orderBy?: rollback_historyOrderByWithAggregationInput | rollback_historyOrderByWithAggregationInput[]
    by: Rollback_historyScalarFieldEnum[] | Rollback_historyScalarFieldEnum
    having?: rollback_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rollback_historyCountAggregateInputType | true
    _avg?: Rollback_historyAvgAggregateInputType
    _sum?: Rollback_historySumAggregateInputType
    _min?: Rollback_historyMinAggregateInputType
    _max?: Rollback_historyMaxAggregateInputType
  }

  export type Rollback_historyGroupByOutputType = {
    id: number
    audit_log_id: number
    initiated_by: number
    approved_by: number | null
    status: string
    error_message: string | null
    created_at: Date | null
    _count: Rollback_historyCountAggregateOutputType | null
    _avg: Rollback_historyAvgAggregateOutputType | null
    _sum: Rollback_historySumAggregateOutputType | null
    _min: Rollback_historyMinAggregateOutputType | null
    _max: Rollback_historyMaxAggregateOutputType | null
  }

  type GetRollback_historyGroupByPayload<T extends rollback_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rollback_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rollback_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rollback_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Rollback_historyGroupByOutputType[P]>
        }
      >
    >


  export type rollback_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    audit_log_id?: boolean
    initiated_by?: boolean
    approved_by?: boolean
    status?: boolean
    error_message?: boolean
    created_at?: boolean
    audit_log?: boolean | audit_logDefaultArgs<ExtArgs>
    initiator?: boolean | usersDefaultArgs<ExtArgs>
    approver?: boolean | rollback_history$approverArgs<ExtArgs>
  }, ExtArgs["result"]["rollback_history"]>

  export type rollback_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    audit_log_id?: boolean
    initiated_by?: boolean
    approved_by?: boolean
    status?: boolean
    error_message?: boolean
    created_at?: boolean
    audit_log?: boolean | audit_logDefaultArgs<ExtArgs>
    initiator?: boolean | usersDefaultArgs<ExtArgs>
    approver?: boolean | rollback_history$approverArgs<ExtArgs>
  }, ExtArgs["result"]["rollback_history"]>

  export type rollback_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    audit_log_id?: boolean
    initiated_by?: boolean
    approved_by?: boolean
    status?: boolean
    error_message?: boolean
    created_at?: boolean
    audit_log?: boolean | audit_logDefaultArgs<ExtArgs>
    initiator?: boolean | usersDefaultArgs<ExtArgs>
    approver?: boolean | rollback_history$approverArgs<ExtArgs>
  }, ExtArgs["result"]["rollback_history"]>

  export type rollback_historySelectScalar = {
    id?: boolean
    audit_log_id?: boolean
    initiated_by?: boolean
    approved_by?: boolean
    status?: boolean
    error_message?: boolean
    created_at?: boolean
  }

  export type rollback_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "audit_log_id" | "initiated_by" | "approved_by" | "status" | "error_message" | "created_at", ExtArgs["result"]["rollback_history"]>
  export type rollback_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_log?: boolean | audit_logDefaultArgs<ExtArgs>
    initiator?: boolean | usersDefaultArgs<ExtArgs>
    approver?: boolean | rollback_history$approverArgs<ExtArgs>
  }
  export type rollback_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_log?: boolean | audit_logDefaultArgs<ExtArgs>
    initiator?: boolean | usersDefaultArgs<ExtArgs>
    approver?: boolean | rollback_history$approverArgs<ExtArgs>
  }
  export type rollback_historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_log?: boolean | audit_logDefaultArgs<ExtArgs>
    initiator?: boolean | usersDefaultArgs<ExtArgs>
    approver?: boolean | rollback_history$approverArgs<ExtArgs>
  }

  export type $rollback_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rollback_history"
    objects: {
      audit_log: Prisma.$audit_logPayload<ExtArgs>
      initiator: Prisma.$usersPayload<ExtArgs>
      approver: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      audit_log_id: number
      initiated_by: number
      approved_by: number | null
      status: string
      error_message: string | null
      created_at: Date | null
    }, ExtArgs["result"]["rollback_history"]>
    composites: {}
  }

  type rollback_historyGetPayload<S extends boolean | null | undefined | rollback_historyDefaultArgs> = $Result.GetResult<Prisma.$rollback_historyPayload, S>

  type rollback_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rollback_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rollback_historyCountAggregateInputType | true
    }

  export interface rollback_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rollback_history'], meta: { name: 'rollback_history' } }
    /**
     * Find zero or one Rollback_history that matches the filter.
     * @param {rollback_historyFindUniqueArgs} args - Arguments to find a Rollback_history
     * @example
     * // Get one Rollback_history
     * const rollback_history = await prisma.rollback_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rollback_historyFindUniqueArgs>(args: SelectSubset<T, rollback_historyFindUniqueArgs<ExtArgs>>): Prisma__rollback_historyClient<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rollback_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rollback_historyFindUniqueOrThrowArgs} args - Arguments to find a Rollback_history
     * @example
     * // Get one Rollback_history
     * const rollback_history = await prisma.rollback_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rollback_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, rollback_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rollback_historyClient<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rollback_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rollback_historyFindFirstArgs} args - Arguments to find a Rollback_history
     * @example
     * // Get one Rollback_history
     * const rollback_history = await prisma.rollback_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rollback_historyFindFirstArgs>(args?: SelectSubset<T, rollback_historyFindFirstArgs<ExtArgs>>): Prisma__rollback_historyClient<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rollback_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rollback_historyFindFirstOrThrowArgs} args - Arguments to find a Rollback_history
     * @example
     * // Get one Rollback_history
     * const rollback_history = await prisma.rollback_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rollback_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, rollback_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__rollback_historyClient<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rollback_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rollback_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rollback_histories
     * const rollback_histories = await prisma.rollback_history.findMany()
     * 
     * // Get first 10 Rollback_histories
     * const rollback_histories = await prisma.rollback_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rollback_historyWithIdOnly = await prisma.rollback_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rollback_historyFindManyArgs>(args?: SelectSubset<T, rollback_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rollback_history.
     * @param {rollback_historyCreateArgs} args - Arguments to create a Rollback_history.
     * @example
     * // Create one Rollback_history
     * const Rollback_history = await prisma.rollback_history.create({
     *   data: {
     *     // ... data to create a Rollback_history
     *   }
     * })
     * 
     */
    create<T extends rollback_historyCreateArgs>(args: SelectSubset<T, rollback_historyCreateArgs<ExtArgs>>): Prisma__rollback_historyClient<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rollback_histories.
     * @param {rollback_historyCreateManyArgs} args - Arguments to create many Rollback_histories.
     * @example
     * // Create many Rollback_histories
     * const rollback_history = await prisma.rollback_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rollback_historyCreateManyArgs>(args?: SelectSubset<T, rollback_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rollback_histories and returns the data saved in the database.
     * @param {rollback_historyCreateManyAndReturnArgs} args - Arguments to create many Rollback_histories.
     * @example
     * // Create many Rollback_histories
     * const rollback_history = await prisma.rollback_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rollback_histories and only return the `id`
     * const rollback_historyWithIdOnly = await prisma.rollback_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rollback_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, rollback_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rollback_history.
     * @param {rollback_historyDeleteArgs} args - Arguments to delete one Rollback_history.
     * @example
     * // Delete one Rollback_history
     * const Rollback_history = await prisma.rollback_history.delete({
     *   where: {
     *     // ... filter to delete one Rollback_history
     *   }
     * })
     * 
     */
    delete<T extends rollback_historyDeleteArgs>(args: SelectSubset<T, rollback_historyDeleteArgs<ExtArgs>>): Prisma__rollback_historyClient<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rollback_history.
     * @param {rollback_historyUpdateArgs} args - Arguments to update one Rollback_history.
     * @example
     * // Update one Rollback_history
     * const rollback_history = await prisma.rollback_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rollback_historyUpdateArgs>(args: SelectSubset<T, rollback_historyUpdateArgs<ExtArgs>>): Prisma__rollback_historyClient<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rollback_histories.
     * @param {rollback_historyDeleteManyArgs} args - Arguments to filter Rollback_histories to delete.
     * @example
     * // Delete a few Rollback_histories
     * const { count } = await prisma.rollback_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rollback_historyDeleteManyArgs>(args?: SelectSubset<T, rollback_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rollback_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rollback_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rollback_histories
     * const rollback_history = await prisma.rollback_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rollback_historyUpdateManyArgs>(args: SelectSubset<T, rollback_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rollback_histories and returns the data updated in the database.
     * @param {rollback_historyUpdateManyAndReturnArgs} args - Arguments to update many Rollback_histories.
     * @example
     * // Update many Rollback_histories
     * const rollback_history = await prisma.rollback_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rollback_histories and only return the `id`
     * const rollback_historyWithIdOnly = await prisma.rollback_history.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rollback_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, rollback_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rollback_history.
     * @param {rollback_historyUpsertArgs} args - Arguments to update or create a Rollback_history.
     * @example
     * // Update or create a Rollback_history
     * const rollback_history = await prisma.rollback_history.upsert({
     *   create: {
     *     // ... data to create a Rollback_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rollback_history we want to update
     *   }
     * })
     */
    upsert<T extends rollback_historyUpsertArgs>(args: SelectSubset<T, rollback_historyUpsertArgs<ExtArgs>>): Prisma__rollback_historyClient<$Result.GetResult<Prisma.$rollback_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rollback_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rollback_historyCountArgs} args - Arguments to filter Rollback_histories to count.
     * @example
     * // Count the number of Rollback_histories
     * const count = await prisma.rollback_history.count({
     *   where: {
     *     // ... the filter for the Rollback_histories we want to count
     *   }
     * })
    **/
    count<T extends rollback_historyCountArgs>(
      args?: Subset<T, rollback_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rollback_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rollback_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rollback_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rollback_historyAggregateArgs>(args: Subset<T, Rollback_historyAggregateArgs>): Prisma.PrismaPromise<GetRollback_historyAggregateType<T>>

    /**
     * Group by Rollback_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rollback_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rollback_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rollback_historyGroupByArgs['orderBy'] }
        : { orderBy?: rollback_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rollback_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRollback_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rollback_history model
   */
  readonly fields: rollback_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rollback_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rollback_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audit_log<T extends audit_logDefaultArgs<ExtArgs> = {}>(args?: Subset<T, audit_logDefaultArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    initiator<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends rollback_history$approverArgs<ExtArgs> = {}>(args?: Subset<T, rollback_history$approverArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rollback_history model
   */
  interface rollback_historyFieldRefs {
    readonly id: FieldRef<"rollback_history", 'Int'>
    readonly audit_log_id: FieldRef<"rollback_history", 'Int'>
    readonly initiated_by: FieldRef<"rollback_history", 'Int'>
    readonly approved_by: FieldRef<"rollback_history", 'Int'>
    readonly status: FieldRef<"rollback_history", 'String'>
    readonly error_message: FieldRef<"rollback_history", 'String'>
    readonly created_at: FieldRef<"rollback_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rollback_history findUnique
   */
  export type rollback_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyInclude<ExtArgs> | null
    /**
     * Filter, which rollback_history to fetch.
     */
    where: rollback_historyWhereUniqueInput
  }

  /**
   * rollback_history findUniqueOrThrow
   */
  export type rollback_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyInclude<ExtArgs> | null
    /**
     * Filter, which rollback_history to fetch.
     */
    where: rollback_historyWhereUniqueInput
  }

  /**
   * rollback_history findFirst
   */
  export type rollback_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyInclude<ExtArgs> | null
    /**
     * Filter, which rollback_history to fetch.
     */
    where?: rollback_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rollback_histories to fetch.
     */
    orderBy?: rollback_historyOrderByWithRelationInput | rollback_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rollback_histories.
     */
    cursor?: rollback_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rollback_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rollback_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rollback_histories.
     */
    distinct?: Rollback_historyScalarFieldEnum | Rollback_historyScalarFieldEnum[]
  }

  /**
   * rollback_history findFirstOrThrow
   */
  export type rollback_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyInclude<ExtArgs> | null
    /**
     * Filter, which rollback_history to fetch.
     */
    where?: rollback_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rollback_histories to fetch.
     */
    orderBy?: rollback_historyOrderByWithRelationInput | rollback_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rollback_histories.
     */
    cursor?: rollback_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rollback_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rollback_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rollback_histories.
     */
    distinct?: Rollback_historyScalarFieldEnum | Rollback_historyScalarFieldEnum[]
  }

  /**
   * rollback_history findMany
   */
  export type rollback_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyInclude<ExtArgs> | null
    /**
     * Filter, which rollback_histories to fetch.
     */
    where?: rollback_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rollback_histories to fetch.
     */
    orderBy?: rollback_historyOrderByWithRelationInput | rollback_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rollback_histories.
     */
    cursor?: rollback_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rollback_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rollback_histories.
     */
    skip?: number
    distinct?: Rollback_historyScalarFieldEnum | Rollback_historyScalarFieldEnum[]
  }

  /**
   * rollback_history create
   */
  export type rollback_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a rollback_history.
     */
    data: XOR<rollback_historyCreateInput, rollback_historyUncheckedCreateInput>
  }

  /**
   * rollback_history createMany
   */
  export type rollback_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rollback_histories.
     */
    data: rollback_historyCreateManyInput | rollback_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rollback_history createManyAndReturn
   */
  export type rollback_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * The data used to create many rollback_histories.
     */
    data: rollback_historyCreateManyInput | rollback_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rollback_history update
   */
  export type rollback_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a rollback_history.
     */
    data: XOR<rollback_historyUpdateInput, rollback_historyUncheckedUpdateInput>
    /**
     * Choose, which rollback_history to update.
     */
    where: rollback_historyWhereUniqueInput
  }

  /**
   * rollback_history updateMany
   */
  export type rollback_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rollback_histories.
     */
    data: XOR<rollback_historyUpdateManyMutationInput, rollback_historyUncheckedUpdateManyInput>
    /**
     * Filter which rollback_histories to update
     */
    where?: rollback_historyWhereInput
    /**
     * Limit how many rollback_histories to update.
     */
    limit?: number
  }

  /**
   * rollback_history updateManyAndReturn
   */
  export type rollback_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * The data used to update rollback_histories.
     */
    data: XOR<rollback_historyUpdateManyMutationInput, rollback_historyUncheckedUpdateManyInput>
    /**
     * Filter which rollback_histories to update
     */
    where?: rollback_historyWhereInput
    /**
     * Limit how many rollback_histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rollback_history upsert
   */
  export type rollback_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the rollback_history to update in case it exists.
     */
    where: rollback_historyWhereUniqueInput
    /**
     * In case the rollback_history found by the `where` argument doesn't exist, create a new rollback_history with this data.
     */
    create: XOR<rollback_historyCreateInput, rollback_historyUncheckedCreateInput>
    /**
     * In case the rollback_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rollback_historyUpdateInput, rollback_historyUncheckedUpdateInput>
  }

  /**
   * rollback_history delete
   */
  export type rollback_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyInclude<ExtArgs> | null
    /**
     * Filter which rollback_history to delete.
     */
    where: rollback_historyWhereUniqueInput
  }

  /**
   * rollback_history deleteMany
   */
  export type rollback_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rollback_histories to delete
     */
    where?: rollback_historyWhereInput
    /**
     * Limit how many rollback_histories to delete.
     */
    limit?: number
  }

  /**
   * rollback_history.approver
   */
  export type rollback_history$approverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * rollback_history without action
   */
  export type rollback_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rollback_history
     */
    select?: rollback_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the rollback_history
     */
    omit?: rollback_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rollback_historyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ManufacturersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    website: 'website',
    contact_email: 'contact_email',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ManufacturersScalarFieldEnum = (typeof ManufacturersScalarFieldEnum)[keyof typeof ManufacturersScalarFieldEnum]


  export const LasersScalarFieldEnum: {
    id: 'id',
    model_name: 'model_name',
    manufacturer_id: 'manufacturer_id',
    laser_type: 'laser_type',
    modulation_type: 'modulation_type',
    cooling_method: 'cooling_method',
    is_single_mode: 'is_single_mode',
    power_output_w: 'power_output_w',
    power_consumption_w: 'power_consumption_w',
    application: 'application',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LasersScalarFieldEnum = (typeof LasersScalarFieldEnum)[keyof typeof LasersScalarFieldEnum]


  export const Wavelength_specsScalarFieldEnum: {
    id: 'id',
    laser_id: 'laser_id',
    wavelength_base_nm: 'wavelength_base_nm',
    wavelength_tolerance_nm: 'wavelength_tolerance_nm',
    bandwidth_nm: 'bandwidth_nm',
    fwhm_nm: 'fwhm_nm',
    wavelength_stability_nm_per_c: 'wavelength_stability_nm_per_c',
    wavelength_tuning_range: 'wavelength_tuning_range',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Wavelength_specsScalarFieldEnum = (typeof Wavelength_specsScalarFieldEnum)[keyof typeof Wavelength_specsScalarFieldEnum]


  export const Optical_specsScalarFieldEnum: {
    id: 'id',
    laser_id: 'laser_id',
    beam_divergence_mrad: 'beam_divergence_mrad',
    beam_quality_m2: 'beam_quality_m2',
    aperture_mm: 'aperture_mm',
    numerical_aperture: 'numerical_aperture',
    polarization: 'polarization',
    polarization_ratio_db: 'polarization_ratio_db',
    created_at: 'created_at'
  };

  export type Optical_specsScalarFieldEnum = (typeof Optical_specsScalarFieldEnum)[keyof typeof Optical_specsScalarFieldEnum]


  export const Stability_specsScalarFieldEnum: {
    id: 'id',
    laser_id: 'laser_id',
    power_stability_percent: 'power_stability_percent',
    pointing_stability_urad: 'pointing_stability_urad',
    temperature_stability_c: 'temperature_stability_c',
    warmup_time_min: 'warmup_time_min',
    created_at: 'created_at'
  };

  export type Stability_specsScalarFieldEnum = (typeof Stability_specsScalarFieldEnum)[keyof typeof Stability_specsScalarFieldEnum]


  export const Environmental_specsScalarFieldEnum: {
    id: 'id',
    laser_id: 'laser_id',
    operating_temp_min_c: 'operating_temp_min_c',
    operating_temp_max_c: 'operating_temp_max_c',
    storage_temp_min_c: 'storage_temp_min_c',
    storage_temp_max_c: 'storage_temp_max_c',
    humidity_max_percent: 'humidity_max_percent',
    protection_class: 'protection_class',
    created_at: 'created_at'
  };

  export type Environmental_specsScalarFieldEnum = (typeof Environmental_specsScalarFieldEnum)[keyof typeof Environmental_specsScalarFieldEnum]


  export const Pulse_specsScalarFieldEnum: {
    id: 'id',
    laser_id: 'laser_id',
    pulse_width_ns: 'pulse_width_ns',
    pulse_energy_j: 'pulse_energy_j',
    rep_rate_hz: 'rep_rate_hz',
    duty_cycle_percent: 'duty_cycle_percent',
    rise_time_ns: 'rise_time_ns',
    fall_time_ns: 'fall_time_ns',
    created_at: 'created_at'
  };

  export type Pulse_specsScalarFieldEnum = (typeof Pulse_specsScalarFieldEnum)[keyof typeof Pulse_specsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    name: 'name',
    role: 'role',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    last_login: 'last_login'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Access_codesScalarFieldEnum: {
    id: 'id',
    code_hash: 'code_hash',
    color_code: 'color_code',
    role: 'role',
    created_by: 'created_by',
    expires_at: 'expires_at',
    max_uses: 'max_uses',
    current_uses: 'current_uses',
    is_active: 'is_active',
    notes: 'notes',
    created_at: 'created_at'
  };

  export type Access_codesScalarFieldEnum = (typeof Access_codesScalarFieldEnum)[keyof typeof Access_codesScalarFieldEnum]


  export const Audit_logScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    table_name: 'table_name',
    record_id: 'record_id',
    action: 'action',
    old_data: 'old_data',
    new_data: 'new_data',
    ip_address: 'ip_address',
    created_at: 'created_at'
  };

  export type Audit_logScalarFieldEnum = (typeof Audit_logScalarFieldEnum)[keyof typeof Audit_logScalarFieldEnum]


  export const Pending_actionsScalarFieldEnum: {
    id: 'id',
    action_type: 'action_type',
    initiated_by: 'initiated_by',
    target_table: 'target_table',
    target_record_id: 'target_record_id',
    action_data: 'action_data',
    reason: 'reason',
    status: 'status',
    expires_at: 'expires_at',
    approved_by: 'approved_by',
    approved_at: 'approved_at',
    completed_at: 'completed_at',
    created_at: 'created_at'
  };

  export type Pending_actionsScalarFieldEnum = (typeof Pending_actionsScalarFieldEnum)[keyof typeof Pending_actionsScalarFieldEnum]


  export const Rollback_historyScalarFieldEnum: {
    id: 'id',
    audit_log_id: 'audit_log_id',
    initiated_by: 'initiated_by',
    approved_by: 'approved_by',
    status: 'status',
    error_message: 'error_message',
    created_at: 'created_at'
  };

  export type Rollback_historyScalarFieldEnum = (typeof Rollback_historyScalarFieldEnum)[keyof typeof Rollback_historyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type manufacturersWhereInput = {
    AND?: manufacturersWhereInput | manufacturersWhereInput[]
    OR?: manufacturersWhereInput[]
    NOT?: manufacturersWhereInput | manufacturersWhereInput[]
    id?: IntFilter<"manufacturers"> | number
    name?: StringFilter<"manufacturers"> | string
    country?: StringNullableFilter<"manufacturers"> | string | null
    website?: StringNullableFilter<"manufacturers"> | string | null
    contact_email?: StringNullableFilter<"manufacturers"> | string | null
    created_at?: DateTimeNullableFilter<"manufacturers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"manufacturers"> | Date | string | null
    lasers?: LasersListRelationFilter
  }

  export type manufacturersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    contact_email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    lasers?: lasersOrderByRelationAggregateInput
  }

  export type manufacturersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: manufacturersWhereInput | manufacturersWhereInput[]
    OR?: manufacturersWhereInput[]
    NOT?: manufacturersWhereInput | manufacturersWhereInput[]
    name?: StringFilter<"manufacturers"> | string
    country?: StringNullableFilter<"manufacturers"> | string | null
    website?: StringNullableFilter<"manufacturers"> | string | null
    contact_email?: StringNullableFilter<"manufacturers"> | string | null
    created_at?: DateTimeNullableFilter<"manufacturers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"manufacturers"> | Date | string | null
    lasers?: LasersListRelationFilter
  }, "id">

  export type manufacturersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    contact_email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: manufacturersCountOrderByAggregateInput
    _avg?: manufacturersAvgOrderByAggregateInput
    _max?: manufacturersMaxOrderByAggregateInput
    _min?: manufacturersMinOrderByAggregateInput
    _sum?: manufacturersSumOrderByAggregateInput
  }

  export type manufacturersScalarWhereWithAggregatesInput = {
    AND?: manufacturersScalarWhereWithAggregatesInput | manufacturersScalarWhereWithAggregatesInput[]
    OR?: manufacturersScalarWhereWithAggregatesInput[]
    NOT?: manufacturersScalarWhereWithAggregatesInput | manufacturersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"manufacturers"> | number
    name?: StringWithAggregatesFilter<"manufacturers"> | string
    country?: StringNullableWithAggregatesFilter<"manufacturers"> | string | null
    website?: StringNullableWithAggregatesFilter<"manufacturers"> | string | null
    contact_email?: StringNullableWithAggregatesFilter<"manufacturers"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"manufacturers"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"manufacturers"> | Date | string | null
  }

  export type lasersWhereInput = {
    AND?: lasersWhereInput | lasersWhereInput[]
    OR?: lasersWhereInput[]
    NOT?: lasersWhereInput | lasersWhereInput[]
    id?: IntFilter<"lasers"> | number
    model_name?: StringFilter<"lasers"> | string
    manufacturer_id?: IntFilter<"lasers"> | number
    laser_type?: StringFilter<"lasers"> | string
    modulation_type?: StringFilter<"lasers"> | string
    cooling_method?: StringNullableFilter<"lasers"> | string | null
    is_single_mode?: BoolFilter<"lasers"> | boolean
    power_output_w?: DecimalFilter<"lasers"> | Decimal | DecimalJsLike | number | string
    power_consumption_w?: DecimalNullableFilter<"lasers"> | Decimal | DecimalJsLike | number | string | null
    application?: StringNullableFilter<"lasers"> | string | null
    notes?: StringNullableFilter<"lasers"> | string | null
    created_at?: DateTimeNullableFilter<"lasers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"lasers"> | Date | string | null
    manufacturer?: XOR<ManufacturersScalarRelationFilter, manufacturersWhereInput>
    wavelength_specs?: XOR<Wavelength_specsNullableScalarRelationFilter, wavelength_specsWhereInput> | null
    optical_specs?: XOR<Optical_specsNullableScalarRelationFilter, optical_specsWhereInput> | null
    stability_specs?: XOR<Stability_specsNullableScalarRelationFilter, stability_specsWhereInput> | null
    environmental_specs?: XOR<Environmental_specsNullableScalarRelationFilter, environmental_specsWhereInput> | null
    pulse_specs?: XOR<Pulse_specsNullableScalarRelationFilter, pulse_specsWhereInput> | null
  }

  export type lasersOrderByWithRelationInput = {
    id?: SortOrder
    model_name?: SortOrder
    manufacturer_id?: SortOrder
    laser_type?: SortOrder
    modulation_type?: SortOrder
    cooling_method?: SortOrderInput | SortOrder
    is_single_mode?: SortOrder
    power_output_w?: SortOrder
    power_consumption_w?: SortOrderInput | SortOrder
    application?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    manufacturer?: manufacturersOrderByWithRelationInput
    wavelength_specs?: wavelength_specsOrderByWithRelationInput
    optical_specs?: optical_specsOrderByWithRelationInput
    stability_specs?: stability_specsOrderByWithRelationInput
    environmental_specs?: environmental_specsOrderByWithRelationInput
    pulse_specs?: pulse_specsOrderByWithRelationInput
  }

  export type lasersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: lasersWhereInput | lasersWhereInput[]
    OR?: lasersWhereInput[]
    NOT?: lasersWhereInput | lasersWhereInput[]
    model_name?: StringFilter<"lasers"> | string
    manufacturer_id?: IntFilter<"lasers"> | number
    laser_type?: StringFilter<"lasers"> | string
    modulation_type?: StringFilter<"lasers"> | string
    cooling_method?: StringNullableFilter<"lasers"> | string | null
    is_single_mode?: BoolFilter<"lasers"> | boolean
    power_output_w?: DecimalFilter<"lasers"> | Decimal | DecimalJsLike | number | string
    power_consumption_w?: DecimalNullableFilter<"lasers"> | Decimal | DecimalJsLike | number | string | null
    application?: StringNullableFilter<"lasers"> | string | null
    notes?: StringNullableFilter<"lasers"> | string | null
    created_at?: DateTimeNullableFilter<"lasers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"lasers"> | Date | string | null
    manufacturer?: XOR<ManufacturersScalarRelationFilter, manufacturersWhereInput>
    wavelength_specs?: XOR<Wavelength_specsNullableScalarRelationFilter, wavelength_specsWhereInput> | null
    optical_specs?: XOR<Optical_specsNullableScalarRelationFilter, optical_specsWhereInput> | null
    stability_specs?: XOR<Stability_specsNullableScalarRelationFilter, stability_specsWhereInput> | null
    environmental_specs?: XOR<Environmental_specsNullableScalarRelationFilter, environmental_specsWhereInput> | null
    pulse_specs?: XOR<Pulse_specsNullableScalarRelationFilter, pulse_specsWhereInput> | null
  }, "id">

  export type lasersOrderByWithAggregationInput = {
    id?: SortOrder
    model_name?: SortOrder
    manufacturer_id?: SortOrder
    laser_type?: SortOrder
    modulation_type?: SortOrder
    cooling_method?: SortOrderInput | SortOrder
    is_single_mode?: SortOrder
    power_output_w?: SortOrder
    power_consumption_w?: SortOrderInput | SortOrder
    application?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: lasersCountOrderByAggregateInput
    _avg?: lasersAvgOrderByAggregateInput
    _max?: lasersMaxOrderByAggregateInput
    _min?: lasersMinOrderByAggregateInput
    _sum?: lasersSumOrderByAggregateInput
  }

  export type lasersScalarWhereWithAggregatesInput = {
    AND?: lasersScalarWhereWithAggregatesInput | lasersScalarWhereWithAggregatesInput[]
    OR?: lasersScalarWhereWithAggregatesInput[]
    NOT?: lasersScalarWhereWithAggregatesInput | lasersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"lasers"> | number
    model_name?: StringWithAggregatesFilter<"lasers"> | string
    manufacturer_id?: IntWithAggregatesFilter<"lasers"> | number
    laser_type?: StringWithAggregatesFilter<"lasers"> | string
    modulation_type?: StringWithAggregatesFilter<"lasers"> | string
    cooling_method?: StringNullableWithAggregatesFilter<"lasers"> | string | null
    is_single_mode?: BoolWithAggregatesFilter<"lasers"> | boolean
    power_output_w?: DecimalWithAggregatesFilter<"lasers"> | Decimal | DecimalJsLike | number | string
    power_consumption_w?: DecimalNullableWithAggregatesFilter<"lasers"> | Decimal | DecimalJsLike | number | string | null
    application?: StringNullableWithAggregatesFilter<"lasers"> | string | null
    notes?: StringNullableWithAggregatesFilter<"lasers"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"lasers"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"lasers"> | Date | string | null
  }

  export type wavelength_specsWhereInput = {
    AND?: wavelength_specsWhereInput | wavelength_specsWhereInput[]
    OR?: wavelength_specsWhereInput[]
    NOT?: wavelength_specsWhereInput | wavelength_specsWhereInput[]
    id?: IntFilter<"wavelength_specs"> | number
    laser_id?: IntFilter<"wavelength_specs"> | number
    wavelength_base_nm?: DecimalFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: DecimalNullableFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: DecimalNullableFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: DecimalNullableFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: DecimalNullableFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: StringNullableFilter<"wavelength_specs"> | string | null
    created_at?: DateTimeNullableFilter<"wavelength_specs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"wavelength_specs"> | Date | string | null
    laser?: XOR<LasersScalarRelationFilter, lasersWhereInput>
  }

  export type wavelength_specsOrderByWithRelationInput = {
    id?: SortOrder
    laser_id?: SortOrder
    wavelength_base_nm?: SortOrder
    wavelength_tolerance_nm?: SortOrderInput | SortOrder
    bandwidth_nm?: SortOrderInput | SortOrder
    fwhm_nm?: SortOrderInput | SortOrder
    wavelength_stability_nm_per_c?: SortOrderInput | SortOrder
    wavelength_tuning_range?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    laser?: lasersOrderByWithRelationInput
  }

  export type wavelength_specsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    laser_id?: number
    AND?: wavelength_specsWhereInput | wavelength_specsWhereInput[]
    OR?: wavelength_specsWhereInput[]
    NOT?: wavelength_specsWhereInput | wavelength_specsWhereInput[]
    wavelength_base_nm?: DecimalFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: DecimalNullableFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: DecimalNullableFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: DecimalNullableFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: DecimalNullableFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: StringNullableFilter<"wavelength_specs"> | string | null
    created_at?: DateTimeNullableFilter<"wavelength_specs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"wavelength_specs"> | Date | string | null
    laser?: XOR<LasersScalarRelationFilter, lasersWhereInput>
  }, "id" | "laser_id">

  export type wavelength_specsOrderByWithAggregationInput = {
    id?: SortOrder
    laser_id?: SortOrder
    wavelength_base_nm?: SortOrder
    wavelength_tolerance_nm?: SortOrderInput | SortOrder
    bandwidth_nm?: SortOrderInput | SortOrder
    fwhm_nm?: SortOrderInput | SortOrder
    wavelength_stability_nm_per_c?: SortOrderInput | SortOrder
    wavelength_tuning_range?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: wavelength_specsCountOrderByAggregateInput
    _avg?: wavelength_specsAvgOrderByAggregateInput
    _max?: wavelength_specsMaxOrderByAggregateInput
    _min?: wavelength_specsMinOrderByAggregateInput
    _sum?: wavelength_specsSumOrderByAggregateInput
  }

  export type wavelength_specsScalarWhereWithAggregatesInput = {
    AND?: wavelength_specsScalarWhereWithAggregatesInput | wavelength_specsScalarWhereWithAggregatesInput[]
    OR?: wavelength_specsScalarWhereWithAggregatesInput[]
    NOT?: wavelength_specsScalarWhereWithAggregatesInput | wavelength_specsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"wavelength_specs"> | number
    laser_id?: IntWithAggregatesFilter<"wavelength_specs"> | number
    wavelength_base_nm?: DecimalWithAggregatesFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: DecimalNullableWithAggregatesFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: DecimalNullableWithAggregatesFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: DecimalNullableWithAggregatesFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: DecimalNullableWithAggregatesFilter<"wavelength_specs"> | Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: StringNullableWithAggregatesFilter<"wavelength_specs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"wavelength_specs"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"wavelength_specs"> | Date | string | null
  }

  export type optical_specsWhereInput = {
    AND?: optical_specsWhereInput | optical_specsWhereInput[]
    OR?: optical_specsWhereInput[]
    NOT?: optical_specsWhereInput | optical_specsWhereInput[]
    id?: IntFilter<"optical_specs"> | number
    laser_id?: IntFilter<"optical_specs"> | number
    beam_divergence_mrad?: DecimalNullableFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: DecimalNullableFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    aperture_mm?: DecimalNullableFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: DecimalNullableFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    polarization?: StringNullableFilter<"optical_specs"> | string | null
    polarization_ratio_db?: DecimalNullableFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"optical_specs"> | Date | string | null
    laser?: XOR<LasersScalarRelationFilter, lasersWhereInput>
  }

  export type optical_specsOrderByWithRelationInput = {
    id?: SortOrder
    laser_id?: SortOrder
    beam_divergence_mrad?: SortOrderInput | SortOrder
    beam_quality_m2?: SortOrderInput | SortOrder
    aperture_mm?: SortOrderInput | SortOrder
    numerical_aperture?: SortOrderInput | SortOrder
    polarization?: SortOrderInput | SortOrder
    polarization_ratio_db?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    laser?: lasersOrderByWithRelationInput
  }

  export type optical_specsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    laser_id?: number
    AND?: optical_specsWhereInput | optical_specsWhereInput[]
    OR?: optical_specsWhereInput[]
    NOT?: optical_specsWhereInput | optical_specsWhereInput[]
    beam_divergence_mrad?: DecimalNullableFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: DecimalNullableFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    aperture_mm?: DecimalNullableFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: DecimalNullableFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    polarization?: StringNullableFilter<"optical_specs"> | string | null
    polarization_ratio_db?: DecimalNullableFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"optical_specs"> | Date | string | null
    laser?: XOR<LasersScalarRelationFilter, lasersWhereInput>
  }, "id" | "laser_id">

  export type optical_specsOrderByWithAggregationInput = {
    id?: SortOrder
    laser_id?: SortOrder
    beam_divergence_mrad?: SortOrderInput | SortOrder
    beam_quality_m2?: SortOrderInput | SortOrder
    aperture_mm?: SortOrderInput | SortOrder
    numerical_aperture?: SortOrderInput | SortOrder
    polarization?: SortOrderInput | SortOrder
    polarization_ratio_db?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: optical_specsCountOrderByAggregateInput
    _avg?: optical_specsAvgOrderByAggregateInput
    _max?: optical_specsMaxOrderByAggregateInput
    _min?: optical_specsMinOrderByAggregateInput
    _sum?: optical_specsSumOrderByAggregateInput
  }

  export type optical_specsScalarWhereWithAggregatesInput = {
    AND?: optical_specsScalarWhereWithAggregatesInput | optical_specsScalarWhereWithAggregatesInput[]
    OR?: optical_specsScalarWhereWithAggregatesInput[]
    NOT?: optical_specsScalarWhereWithAggregatesInput | optical_specsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"optical_specs"> | number
    laser_id?: IntWithAggregatesFilter<"optical_specs"> | number
    beam_divergence_mrad?: DecimalNullableWithAggregatesFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: DecimalNullableWithAggregatesFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    aperture_mm?: DecimalNullableWithAggregatesFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: DecimalNullableWithAggregatesFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    polarization?: StringNullableWithAggregatesFilter<"optical_specs"> | string | null
    polarization_ratio_db?: DecimalNullableWithAggregatesFilter<"optical_specs"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"optical_specs"> | Date | string | null
  }

  export type stability_specsWhereInput = {
    AND?: stability_specsWhereInput | stability_specsWhereInput[]
    OR?: stability_specsWhereInput[]
    NOT?: stability_specsWhereInput | stability_specsWhereInput[]
    id?: IntFilter<"stability_specs"> | number
    laser_id?: IntFilter<"stability_specs"> | number
    power_stability_percent?: DecimalNullableFilter<"stability_specs"> | Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: DecimalNullableFilter<"stability_specs"> | Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: DecimalNullableFilter<"stability_specs"> | Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: DecimalNullableFilter<"stability_specs"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"stability_specs"> | Date | string | null
    laser?: XOR<LasersScalarRelationFilter, lasersWhereInput>
  }

  export type stability_specsOrderByWithRelationInput = {
    id?: SortOrder
    laser_id?: SortOrder
    power_stability_percent?: SortOrderInput | SortOrder
    pointing_stability_urad?: SortOrderInput | SortOrder
    temperature_stability_c?: SortOrderInput | SortOrder
    warmup_time_min?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    laser?: lasersOrderByWithRelationInput
  }

  export type stability_specsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    laser_id?: number
    AND?: stability_specsWhereInput | stability_specsWhereInput[]
    OR?: stability_specsWhereInput[]
    NOT?: stability_specsWhereInput | stability_specsWhereInput[]
    power_stability_percent?: DecimalNullableFilter<"stability_specs"> | Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: DecimalNullableFilter<"stability_specs"> | Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: DecimalNullableFilter<"stability_specs"> | Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: DecimalNullableFilter<"stability_specs"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"stability_specs"> | Date | string | null
    laser?: XOR<LasersScalarRelationFilter, lasersWhereInput>
  }, "id" | "laser_id">

  export type stability_specsOrderByWithAggregationInput = {
    id?: SortOrder
    laser_id?: SortOrder
    power_stability_percent?: SortOrderInput | SortOrder
    pointing_stability_urad?: SortOrderInput | SortOrder
    temperature_stability_c?: SortOrderInput | SortOrder
    warmup_time_min?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: stability_specsCountOrderByAggregateInput
    _avg?: stability_specsAvgOrderByAggregateInput
    _max?: stability_specsMaxOrderByAggregateInput
    _min?: stability_specsMinOrderByAggregateInput
    _sum?: stability_specsSumOrderByAggregateInput
  }

  export type stability_specsScalarWhereWithAggregatesInput = {
    AND?: stability_specsScalarWhereWithAggregatesInput | stability_specsScalarWhereWithAggregatesInput[]
    OR?: stability_specsScalarWhereWithAggregatesInput[]
    NOT?: stability_specsScalarWhereWithAggregatesInput | stability_specsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stability_specs"> | number
    laser_id?: IntWithAggregatesFilter<"stability_specs"> | number
    power_stability_percent?: DecimalNullableWithAggregatesFilter<"stability_specs"> | Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: DecimalNullableWithAggregatesFilter<"stability_specs"> | Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: DecimalNullableWithAggregatesFilter<"stability_specs"> | Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: DecimalNullableWithAggregatesFilter<"stability_specs"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"stability_specs"> | Date | string | null
  }

  export type environmental_specsWhereInput = {
    AND?: environmental_specsWhereInput | environmental_specsWhereInput[]
    OR?: environmental_specsWhereInput[]
    NOT?: environmental_specsWhereInput | environmental_specsWhereInput[]
    id?: IntFilter<"environmental_specs"> | number
    laser_id?: IntFilter<"environmental_specs"> | number
    operating_temp_min_c?: DecimalNullableFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: DecimalNullableFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: DecimalNullableFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: DecimalNullableFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: DecimalNullableFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    protection_class?: StringNullableFilter<"environmental_specs"> | string | null
    created_at?: DateTimeNullableFilter<"environmental_specs"> | Date | string | null
    laser?: XOR<LasersScalarRelationFilter, lasersWhereInput>
  }

  export type environmental_specsOrderByWithRelationInput = {
    id?: SortOrder
    laser_id?: SortOrder
    operating_temp_min_c?: SortOrderInput | SortOrder
    operating_temp_max_c?: SortOrderInput | SortOrder
    storage_temp_min_c?: SortOrderInput | SortOrder
    storage_temp_max_c?: SortOrderInput | SortOrder
    humidity_max_percent?: SortOrderInput | SortOrder
    protection_class?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    laser?: lasersOrderByWithRelationInput
  }

  export type environmental_specsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    laser_id?: number
    AND?: environmental_specsWhereInput | environmental_specsWhereInput[]
    OR?: environmental_specsWhereInput[]
    NOT?: environmental_specsWhereInput | environmental_specsWhereInput[]
    operating_temp_min_c?: DecimalNullableFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: DecimalNullableFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: DecimalNullableFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: DecimalNullableFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: DecimalNullableFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    protection_class?: StringNullableFilter<"environmental_specs"> | string | null
    created_at?: DateTimeNullableFilter<"environmental_specs"> | Date | string | null
    laser?: XOR<LasersScalarRelationFilter, lasersWhereInput>
  }, "id" | "laser_id">

  export type environmental_specsOrderByWithAggregationInput = {
    id?: SortOrder
    laser_id?: SortOrder
    operating_temp_min_c?: SortOrderInput | SortOrder
    operating_temp_max_c?: SortOrderInput | SortOrder
    storage_temp_min_c?: SortOrderInput | SortOrder
    storage_temp_max_c?: SortOrderInput | SortOrder
    humidity_max_percent?: SortOrderInput | SortOrder
    protection_class?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: environmental_specsCountOrderByAggregateInput
    _avg?: environmental_specsAvgOrderByAggregateInput
    _max?: environmental_specsMaxOrderByAggregateInput
    _min?: environmental_specsMinOrderByAggregateInput
    _sum?: environmental_specsSumOrderByAggregateInput
  }

  export type environmental_specsScalarWhereWithAggregatesInput = {
    AND?: environmental_specsScalarWhereWithAggregatesInput | environmental_specsScalarWhereWithAggregatesInput[]
    OR?: environmental_specsScalarWhereWithAggregatesInput[]
    NOT?: environmental_specsScalarWhereWithAggregatesInput | environmental_specsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"environmental_specs"> | number
    laser_id?: IntWithAggregatesFilter<"environmental_specs"> | number
    operating_temp_min_c?: DecimalNullableWithAggregatesFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: DecimalNullableWithAggregatesFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: DecimalNullableWithAggregatesFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: DecimalNullableWithAggregatesFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: DecimalNullableWithAggregatesFilter<"environmental_specs"> | Decimal | DecimalJsLike | number | string | null
    protection_class?: StringNullableWithAggregatesFilter<"environmental_specs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"environmental_specs"> | Date | string | null
  }

  export type pulse_specsWhereInput = {
    AND?: pulse_specsWhereInput | pulse_specsWhereInput[]
    OR?: pulse_specsWhereInput[]
    NOT?: pulse_specsWhereInput | pulse_specsWhereInput[]
    id?: IntFilter<"pulse_specs"> | number
    laser_id?: IntFilter<"pulse_specs"> | number
    pulse_width_ns?: DecimalNullableFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: DecimalNullableFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: DecimalNullableFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: DecimalNullableFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: DecimalNullableFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: DecimalNullableFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"pulse_specs"> | Date | string | null
    laser?: XOR<LasersScalarRelationFilter, lasersWhereInput>
  }

  export type pulse_specsOrderByWithRelationInput = {
    id?: SortOrder
    laser_id?: SortOrder
    pulse_width_ns?: SortOrderInput | SortOrder
    pulse_energy_j?: SortOrderInput | SortOrder
    rep_rate_hz?: SortOrderInput | SortOrder
    duty_cycle_percent?: SortOrderInput | SortOrder
    rise_time_ns?: SortOrderInput | SortOrder
    fall_time_ns?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    laser?: lasersOrderByWithRelationInput
  }

  export type pulse_specsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    laser_id?: number
    AND?: pulse_specsWhereInput | pulse_specsWhereInput[]
    OR?: pulse_specsWhereInput[]
    NOT?: pulse_specsWhereInput | pulse_specsWhereInput[]
    pulse_width_ns?: DecimalNullableFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: DecimalNullableFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: DecimalNullableFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: DecimalNullableFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: DecimalNullableFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: DecimalNullableFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"pulse_specs"> | Date | string | null
    laser?: XOR<LasersScalarRelationFilter, lasersWhereInput>
  }, "id" | "laser_id">

  export type pulse_specsOrderByWithAggregationInput = {
    id?: SortOrder
    laser_id?: SortOrder
    pulse_width_ns?: SortOrderInput | SortOrder
    pulse_energy_j?: SortOrderInput | SortOrder
    rep_rate_hz?: SortOrderInput | SortOrder
    duty_cycle_percent?: SortOrderInput | SortOrder
    rise_time_ns?: SortOrderInput | SortOrder
    fall_time_ns?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: pulse_specsCountOrderByAggregateInput
    _avg?: pulse_specsAvgOrderByAggregateInput
    _max?: pulse_specsMaxOrderByAggregateInput
    _min?: pulse_specsMinOrderByAggregateInput
    _sum?: pulse_specsSumOrderByAggregateInput
  }

  export type pulse_specsScalarWhereWithAggregatesInput = {
    AND?: pulse_specsScalarWhereWithAggregatesInput | pulse_specsScalarWhereWithAggregatesInput[]
    OR?: pulse_specsScalarWhereWithAggregatesInput[]
    NOT?: pulse_specsScalarWhereWithAggregatesInput | pulse_specsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pulse_specs"> | number
    laser_id?: IntWithAggregatesFilter<"pulse_specs"> | number
    pulse_width_ns?: DecimalNullableWithAggregatesFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: DecimalNullableWithAggregatesFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: DecimalNullableWithAggregatesFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: DecimalNullableWithAggregatesFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: DecimalNullableWithAggregatesFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: DecimalNullableWithAggregatesFilter<"pulse_specs"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"pulse_specs"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    is_active?: BoolFilter<"users"> | boolean
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    last_login?: DateTimeNullableFilter<"users"> | Date | string | null
    access_codes?: Access_codesListRelationFilter
    audit_log?: Audit_logListRelationFilter
    pending_actions_initiated?: Pending_actionsListRelationFilter
    pending_actions_approved?: Pending_actionsListRelationFilter
    rollback_history_initiated?: Rollback_historyListRelationFilter
    rollback_history_approved?: Rollback_historyListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    access_codes?: access_codesOrderByRelationAggregateInput
    audit_log?: audit_logOrderByRelationAggregateInput
    pending_actions_initiated?: pending_actionsOrderByRelationAggregateInput
    pending_actions_approved?: pending_actionsOrderByRelationAggregateInput
    rollback_history_initiated?: rollback_historyOrderByRelationAggregateInput
    rollback_history_approved?: rollback_historyOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    is_active?: BoolFilter<"users"> | boolean
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    last_login?: DateTimeNullableFilter<"users"> | Date | string | null
    access_codes?: Access_codesListRelationFilter
    audit_log?: Audit_logListRelationFilter
    pending_actions_initiated?: Pending_actionsListRelationFilter
    pending_actions_approved?: Pending_actionsListRelationFilter
    rollback_history_initiated?: Rollback_historyListRelationFilter
    rollback_history_approved?: Rollback_historyListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    is_active?: BoolWithAggregatesFilter<"users"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    last_login?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type access_codesWhereInput = {
    AND?: access_codesWhereInput | access_codesWhereInput[]
    OR?: access_codesWhereInput[]
    NOT?: access_codesWhereInput | access_codesWhereInput[]
    id?: IntFilter<"access_codes"> | number
    code_hash?: StringFilter<"access_codes"> | string
    color_code?: StringFilter<"access_codes"> | string
    role?: StringFilter<"access_codes"> | string
    created_by?: IntFilter<"access_codes"> | number
    expires_at?: DateTimeNullableFilter<"access_codes"> | Date | string | null
    max_uses?: IntNullableFilter<"access_codes"> | number | null
    current_uses?: IntFilter<"access_codes"> | number
    is_active?: BoolFilter<"access_codes"> | boolean
    notes?: StringNullableFilter<"access_codes"> | string | null
    created_at?: DateTimeNullableFilter<"access_codes"> | Date | string | null
    creator?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type access_codesOrderByWithRelationInput = {
    id?: SortOrder
    code_hash?: SortOrder
    color_code?: SortOrder
    role?: SortOrder
    created_by?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    max_uses?: SortOrderInput | SortOrder
    current_uses?: SortOrder
    is_active?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    creator?: usersOrderByWithRelationInput
  }

  export type access_codesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: access_codesWhereInput | access_codesWhereInput[]
    OR?: access_codesWhereInput[]
    NOT?: access_codesWhereInput | access_codesWhereInput[]
    code_hash?: StringFilter<"access_codes"> | string
    color_code?: StringFilter<"access_codes"> | string
    role?: StringFilter<"access_codes"> | string
    created_by?: IntFilter<"access_codes"> | number
    expires_at?: DateTimeNullableFilter<"access_codes"> | Date | string | null
    max_uses?: IntNullableFilter<"access_codes"> | number | null
    current_uses?: IntFilter<"access_codes"> | number
    is_active?: BoolFilter<"access_codes"> | boolean
    notes?: StringNullableFilter<"access_codes"> | string | null
    created_at?: DateTimeNullableFilter<"access_codes"> | Date | string | null
    creator?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type access_codesOrderByWithAggregationInput = {
    id?: SortOrder
    code_hash?: SortOrder
    color_code?: SortOrder
    role?: SortOrder
    created_by?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    max_uses?: SortOrderInput | SortOrder
    current_uses?: SortOrder
    is_active?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: access_codesCountOrderByAggregateInput
    _avg?: access_codesAvgOrderByAggregateInput
    _max?: access_codesMaxOrderByAggregateInput
    _min?: access_codesMinOrderByAggregateInput
    _sum?: access_codesSumOrderByAggregateInput
  }

  export type access_codesScalarWhereWithAggregatesInput = {
    AND?: access_codesScalarWhereWithAggregatesInput | access_codesScalarWhereWithAggregatesInput[]
    OR?: access_codesScalarWhereWithAggregatesInput[]
    NOT?: access_codesScalarWhereWithAggregatesInput | access_codesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"access_codes"> | number
    code_hash?: StringWithAggregatesFilter<"access_codes"> | string
    color_code?: StringWithAggregatesFilter<"access_codes"> | string
    role?: StringWithAggregatesFilter<"access_codes"> | string
    created_by?: IntWithAggregatesFilter<"access_codes"> | number
    expires_at?: DateTimeNullableWithAggregatesFilter<"access_codes"> | Date | string | null
    max_uses?: IntNullableWithAggregatesFilter<"access_codes"> | number | null
    current_uses?: IntWithAggregatesFilter<"access_codes"> | number
    is_active?: BoolWithAggregatesFilter<"access_codes"> | boolean
    notes?: StringNullableWithAggregatesFilter<"access_codes"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"access_codes"> | Date | string | null
  }

  export type audit_logWhereInput = {
    AND?: audit_logWhereInput | audit_logWhereInput[]
    OR?: audit_logWhereInput[]
    NOT?: audit_logWhereInput | audit_logWhereInput[]
    id?: IntFilter<"audit_log"> | number
    user_id?: IntNullableFilter<"audit_log"> | number | null
    table_name?: StringFilter<"audit_log"> | string
    record_id?: IntNullableFilter<"audit_log"> | number | null
    action?: StringFilter<"audit_log"> | string
    old_data?: JsonNullableFilter<"audit_log">
    new_data?: JsonNullableFilter<"audit_log">
    ip_address?: StringNullableFilter<"audit_log"> | string | null
    created_at?: DateTimeNullableFilter<"audit_log"> | Date | string | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    rollback_history?: Rollback_historyListRelationFilter
  }

  export type audit_logOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    table_name?: SortOrder
    record_id?: SortOrderInput | SortOrder
    action?: SortOrder
    old_data?: SortOrderInput | SortOrder
    new_data?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
    rollback_history?: rollback_historyOrderByRelationAggregateInput
  }

  export type audit_logWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: audit_logWhereInput | audit_logWhereInput[]
    OR?: audit_logWhereInput[]
    NOT?: audit_logWhereInput | audit_logWhereInput[]
    user_id?: IntNullableFilter<"audit_log"> | number | null
    table_name?: StringFilter<"audit_log"> | string
    record_id?: IntNullableFilter<"audit_log"> | number | null
    action?: StringFilter<"audit_log"> | string
    old_data?: JsonNullableFilter<"audit_log">
    new_data?: JsonNullableFilter<"audit_log">
    ip_address?: StringNullableFilter<"audit_log"> | string | null
    created_at?: DateTimeNullableFilter<"audit_log"> | Date | string | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    rollback_history?: Rollback_historyListRelationFilter
  }, "id">

  export type audit_logOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    table_name?: SortOrder
    record_id?: SortOrderInput | SortOrder
    action?: SortOrder
    old_data?: SortOrderInput | SortOrder
    new_data?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: audit_logCountOrderByAggregateInput
    _avg?: audit_logAvgOrderByAggregateInput
    _max?: audit_logMaxOrderByAggregateInput
    _min?: audit_logMinOrderByAggregateInput
    _sum?: audit_logSumOrderByAggregateInput
  }

  export type audit_logScalarWhereWithAggregatesInput = {
    AND?: audit_logScalarWhereWithAggregatesInput | audit_logScalarWhereWithAggregatesInput[]
    OR?: audit_logScalarWhereWithAggregatesInput[]
    NOT?: audit_logScalarWhereWithAggregatesInput | audit_logScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"audit_log"> | number
    user_id?: IntNullableWithAggregatesFilter<"audit_log"> | number | null
    table_name?: StringWithAggregatesFilter<"audit_log"> | string
    record_id?: IntNullableWithAggregatesFilter<"audit_log"> | number | null
    action?: StringWithAggregatesFilter<"audit_log"> | string
    old_data?: JsonNullableWithAggregatesFilter<"audit_log">
    new_data?: JsonNullableWithAggregatesFilter<"audit_log">
    ip_address?: StringNullableWithAggregatesFilter<"audit_log"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"audit_log"> | Date | string | null
  }

  export type pending_actionsWhereInput = {
    AND?: pending_actionsWhereInput | pending_actionsWhereInput[]
    OR?: pending_actionsWhereInput[]
    NOT?: pending_actionsWhereInput | pending_actionsWhereInput[]
    id?: IntFilter<"pending_actions"> | number
    action_type?: StringFilter<"pending_actions"> | string
    initiated_by?: IntFilter<"pending_actions"> | number
    target_table?: StringFilter<"pending_actions"> | string
    target_record_id?: IntNullableFilter<"pending_actions"> | number | null
    action_data?: JsonNullableFilter<"pending_actions">
    reason?: StringNullableFilter<"pending_actions"> | string | null
    status?: StringFilter<"pending_actions"> | string
    expires_at?: DateTimeNullableFilter<"pending_actions"> | Date | string | null
    approved_by?: IntNullableFilter<"pending_actions"> | number | null
    approved_at?: DateTimeNullableFilter<"pending_actions"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"pending_actions"> | Date | string | null
    created_at?: DateTimeNullableFilter<"pending_actions"> | Date | string | null
    initiator?: XOR<UsersScalarRelationFilter, usersWhereInput>
    approver?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type pending_actionsOrderByWithRelationInput = {
    id?: SortOrder
    action_type?: SortOrder
    initiated_by?: SortOrder
    target_table?: SortOrder
    target_record_id?: SortOrderInput | SortOrder
    action_data?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    approved_by?: SortOrderInput | SortOrder
    approved_at?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    initiator?: usersOrderByWithRelationInput
    approver?: usersOrderByWithRelationInput
  }

  export type pending_actionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pending_actionsWhereInput | pending_actionsWhereInput[]
    OR?: pending_actionsWhereInput[]
    NOT?: pending_actionsWhereInput | pending_actionsWhereInput[]
    action_type?: StringFilter<"pending_actions"> | string
    initiated_by?: IntFilter<"pending_actions"> | number
    target_table?: StringFilter<"pending_actions"> | string
    target_record_id?: IntNullableFilter<"pending_actions"> | number | null
    action_data?: JsonNullableFilter<"pending_actions">
    reason?: StringNullableFilter<"pending_actions"> | string | null
    status?: StringFilter<"pending_actions"> | string
    expires_at?: DateTimeNullableFilter<"pending_actions"> | Date | string | null
    approved_by?: IntNullableFilter<"pending_actions"> | number | null
    approved_at?: DateTimeNullableFilter<"pending_actions"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"pending_actions"> | Date | string | null
    created_at?: DateTimeNullableFilter<"pending_actions"> | Date | string | null
    initiator?: XOR<UsersScalarRelationFilter, usersWhereInput>
    approver?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type pending_actionsOrderByWithAggregationInput = {
    id?: SortOrder
    action_type?: SortOrder
    initiated_by?: SortOrder
    target_table?: SortOrder
    target_record_id?: SortOrderInput | SortOrder
    action_data?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    approved_by?: SortOrderInput | SortOrder
    approved_at?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: pending_actionsCountOrderByAggregateInput
    _avg?: pending_actionsAvgOrderByAggregateInput
    _max?: pending_actionsMaxOrderByAggregateInput
    _min?: pending_actionsMinOrderByAggregateInput
    _sum?: pending_actionsSumOrderByAggregateInput
  }

  export type pending_actionsScalarWhereWithAggregatesInput = {
    AND?: pending_actionsScalarWhereWithAggregatesInput | pending_actionsScalarWhereWithAggregatesInput[]
    OR?: pending_actionsScalarWhereWithAggregatesInput[]
    NOT?: pending_actionsScalarWhereWithAggregatesInput | pending_actionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pending_actions"> | number
    action_type?: StringWithAggregatesFilter<"pending_actions"> | string
    initiated_by?: IntWithAggregatesFilter<"pending_actions"> | number
    target_table?: StringWithAggregatesFilter<"pending_actions"> | string
    target_record_id?: IntNullableWithAggregatesFilter<"pending_actions"> | number | null
    action_data?: JsonNullableWithAggregatesFilter<"pending_actions">
    reason?: StringNullableWithAggregatesFilter<"pending_actions"> | string | null
    status?: StringWithAggregatesFilter<"pending_actions"> | string
    expires_at?: DateTimeNullableWithAggregatesFilter<"pending_actions"> | Date | string | null
    approved_by?: IntNullableWithAggregatesFilter<"pending_actions"> | number | null
    approved_at?: DateTimeNullableWithAggregatesFilter<"pending_actions"> | Date | string | null
    completed_at?: DateTimeNullableWithAggregatesFilter<"pending_actions"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"pending_actions"> | Date | string | null
  }

  export type rollback_historyWhereInput = {
    AND?: rollback_historyWhereInput | rollback_historyWhereInput[]
    OR?: rollback_historyWhereInput[]
    NOT?: rollback_historyWhereInput | rollback_historyWhereInput[]
    id?: IntFilter<"rollback_history"> | number
    audit_log_id?: IntFilter<"rollback_history"> | number
    initiated_by?: IntFilter<"rollback_history"> | number
    approved_by?: IntNullableFilter<"rollback_history"> | number | null
    status?: StringFilter<"rollback_history"> | string
    error_message?: StringNullableFilter<"rollback_history"> | string | null
    created_at?: DateTimeNullableFilter<"rollback_history"> | Date | string | null
    audit_log?: XOR<Audit_logScalarRelationFilter, audit_logWhereInput>
    initiator?: XOR<UsersScalarRelationFilter, usersWhereInput>
    approver?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type rollback_historyOrderByWithRelationInput = {
    id?: SortOrder
    audit_log_id?: SortOrder
    initiated_by?: SortOrder
    approved_by?: SortOrderInput | SortOrder
    status?: SortOrder
    error_message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    audit_log?: audit_logOrderByWithRelationInput
    initiator?: usersOrderByWithRelationInput
    approver?: usersOrderByWithRelationInput
  }

  export type rollback_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rollback_historyWhereInput | rollback_historyWhereInput[]
    OR?: rollback_historyWhereInput[]
    NOT?: rollback_historyWhereInput | rollback_historyWhereInput[]
    audit_log_id?: IntFilter<"rollback_history"> | number
    initiated_by?: IntFilter<"rollback_history"> | number
    approved_by?: IntNullableFilter<"rollback_history"> | number | null
    status?: StringFilter<"rollback_history"> | string
    error_message?: StringNullableFilter<"rollback_history"> | string | null
    created_at?: DateTimeNullableFilter<"rollback_history"> | Date | string | null
    audit_log?: XOR<Audit_logScalarRelationFilter, audit_logWhereInput>
    initiator?: XOR<UsersScalarRelationFilter, usersWhereInput>
    approver?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type rollback_historyOrderByWithAggregationInput = {
    id?: SortOrder
    audit_log_id?: SortOrder
    initiated_by?: SortOrder
    approved_by?: SortOrderInput | SortOrder
    status?: SortOrder
    error_message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: rollback_historyCountOrderByAggregateInput
    _avg?: rollback_historyAvgOrderByAggregateInput
    _max?: rollback_historyMaxOrderByAggregateInput
    _min?: rollback_historyMinOrderByAggregateInput
    _sum?: rollback_historySumOrderByAggregateInput
  }

  export type rollback_historyScalarWhereWithAggregatesInput = {
    AND?: rollback_historyScalarWhereWithAggregatesInput | rollback_historyScalarWhereWithAggregatesInput[]
    OR?: rollback_historyScalarWhereWithAggregatesInput[]
    NOT?: rollback_historyScalarWhereWithAggregatesInput | rollback_historyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rollback_history"> | number
    audit_log_id?: IntWithAggregatesFilter<"rollback_history"> | number
    initiated_by?: IntWithAggregatesFilter<"rollback_history"> | number
    approved_by?: IntNullableWithAggregatesFilter<"rollback_history"> | number | null
    status?: StringWithAggregatesFilter<"rollback_history"> | string
    error_message?: StringNullableWithAggregatesFilter<"rollback_history"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"rollback_history"> | Date | string | null
  }

  export type manufacturersCreateInput = {
    name: string
    country?: string | null
    website?: string | null
    contact_email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    lasers?: lasersCreateNestedManyWithoutManufacturerInput
  }

  export type manufacturersUncheckedCreateInput = {
    id?: number
    name: string
    country?: string | null
    website?: string | null
    contact_email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    lasers?: lasersUncheckedCreateNestedManyWithoutManufacturerInput
  }

  export type manufacturersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lasers?: lasersUpdateManyWithoutManufacturerNestedInput
  }

  export type manufacturersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lasers?: lasersUncheckedUpdateManyWithoutManufacturerNestedInput
  }

  export type manufacturersCreateManyInput = {
    id?: number
    name: string
    country?: string | null
    website?: string | null
    contact_email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type manufacturersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type manufacturersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lasersCreateInput = {
    model_name: string
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    manufacturer: manufacturersCreateNestedOneWithoutLasersInput
    wavelength_specs?: wavelength_specsCreateNestedOneWithoutLaserInput
    optical_specs?: optical_specsCreateNestedOneWithoutLaserInput
    stability_specs?: stability_specsCreateNestedOneWithoutLaserInput
    environmental_specs?: environmental_specsCreateNestedOneWithoutLaserInput
    pulse_specs?: pulse_specsCreateNestedOneWithoutLaserInput
  }

  export type lasersUncheckedCreateInput = {
    id?: number
    model_name: string
    manufacturer_id: number
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    wavelength_specs?: wavelength_specsUncheckedCreateNestedOneWithoutLaserInput
    optical_specs?: optical_specsUncheckedCreateNestedOneWithoutLaserInput
    stability_specs?: stability_specsUncheckedCreateNestedOneWithoutLaserInput
    environmental_specs?: environmental_specsUncheckedCreateNestedOneWithoutLaserInput
    pulse_specs?: pulse_specsUncheckedCreateNestedOneWithoutLaserInput
  }

  export type lasersUpdateInput = {
    model_name?: StringFieldUpdateOperationsInput | string
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    manufacturer?: manufacturersUpdateOneRequiredWithoutLasersNestedInput
    wavelength_specs?: wavelength_specsUpdateOneWithoutLaserNestedInput
    optical_specs?: optical_specsUpdateOneWithoutLaserNestedInput
    stability_specs?: stability_specsUpdateOneWithoutLaserNestedInput
    environmental_specs?: environmental_specsUpdateOneWithoutLaserNestedInput
    pulse_specs?: pulse_specsUpdateOneWithoutLaserNestedInput
  }

  export type lasersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model_name?: StringFieldUpdateOperationsInput | string
    manufacturer_id?: IntFieldUpdateOperationsInput | number
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wavelength_specs?: wavelength_specsUncheckedUpdateOneWithoutLaserNestedInput
    optical_specs?: optical_specsUncheckedUpdateOneWithoutLaserNestedInput
    stability_specs?: stability_specsUncheckedUpdateOneWithoutLaserNestedInput
    environmental_specs?: environmental_specsUncheckedUpdateOneWithoutLaserNestedInput
    pulse_specs?: pulse_specsUncheckedUpdateOneWithoutLaserNestedInput
  }

  export type lasersCreateManyInput = {
    id?: number
    model_name: string
    manufacturer_id: number
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type lasersUpdateManyMutationInput = {
    model_name?: StringFieldUpdateOperationsInput | string
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lasersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model_name?: StringFieldUpdateOperationsInput | string
    manufacturer_id?: IntFieldUpdateOperationsInput | number
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wavelength_specsCreateInput = {
    wavelength_base_nm: Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    laser: lasersCreateNestedOneWithoutWavelength_specsInput
  }

  export type wavelength_specsUncheckedCreateInput = {
    id?: number
    laser_id: number
    wavelength_base_nm: Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type wavelength_specsUpdateInput = {
    wavelength_base_nm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laser?: lasersUpdateOneRequiredWithoutWavelength_specsNestedInput
  }

  export type wavelength_specsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    laser_id?: IntFieldUpdateOperationsInput | number
    wavelength_base_nm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wavelength_specsCreateManyInput = {
    id?: number
    laser_id: number
    wavelength_base_nm: Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type wavelength_specsUpdateManyMutationInput = {
    wavelength_base_nm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wavelength_specsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    laser_id?: IntFieldUpdateOperationsInput | number
    wavelength_base_nm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type optical_specsCreateInput = {
    beam_divergence_mrad?: Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: Decimal | DecimalJsLike | number | string | null
    aperture_mm?: Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: Decimal | DecimalJsLike | number | string | null
    polarization?: string | null
    polarization_ratio_db?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    laser: lasersCreateNestedOneWithoutOptical_specsInput
  }

  export type optical_specsUncheckedCreateInput = {
    id?: number
    laser_id: number
    beam_divergence_mrad?: Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: Decimal | DecimalJsLike | number | string | null
    aperture_mm?: Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: Decimal | DecimalJsLike | number | string | null
    polarization?: string | null
    polarization_ratio_db?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type optical_specsUpdateInput = {
    beam_divergence_mrad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aperture_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polarization?: NullableStringFieldUpdateOperationsInput | string | null
    polarization_ratio_db?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laser?: lasersUpdateOneRequiredWithoutOptical_specsNestedInput
  }

  export type optical_specsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    laser_id?: IntFieldUpdateOperationsInput | number
    beam_divergence_mrad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aperture_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polarization?: NullableStringFieldUpdateOperationsInput | string | null
    polarization_ratio_db?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type optical_specsCreateManyInput = {
    id?: number
    laser_id: number
    beam_divergence_mrad?: Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: Decimal | DecimalJsLike | number | string | null
    aperture_mm?: Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: Decimal | DecimalJsLike | number | string | null
    polarization?: string | null
    polarization_ratio_db?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type optical_specsUpdateManyMutationInput = {
    beam_divergence_mrad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aperture_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polarization?: NullableStringFieldUpdateOperationsInput | string | null
    polarization_ratio_db?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type optical_specsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    laser_id?: IntFieldUpdateOperationsInput | number
    beam_divergence_mrad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aperture_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polarization?: NullableStringFieldUpdateOperationsInput | string | null
    polarization_ratio_db?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stability_specsCreateInput = {
    power_stability_percent?: Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    laser: lasersCreateNestedOneWithoutStability_specsInput
  }

  export type stability_specsUncheckedCreateInput = {
    id?: number
    laser_id: number
    power_stability_percent?: Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type stability_specsUpdateInput = {
    power_stability_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laser?: lasersUpdateOneRequiredWithoutStability_specsNestedInput
  }

  export type stability_specsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    laser_id?: IntFieldUpdateOperationsInput | number
    power_stability_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stability_specsCreateManyInput = {
    id?: number
    laser_id: number
    power_stability_percent?: Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type stability_specsUpdateManyMutationInput = {
    power_stability_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stability_specsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    laser_id?: IntFieldUpdateOperationsInput | number
    power_stability_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type environmental_specsCreateInput = {
    operating_temp_min_c?: Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: Decimal | DecimalJsLike | number | string | null
    protection_class?: string | null
    created_at?: Date | string | null
    laser: lasersCreateNestedOneWithoutEnvironmental_specsInput
  }

  export type environmental_specsUncheckedCreateInput = {
    id?: number
    laser_id: number
    operating_temp_min_c?: Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: Decimal | DecimalJsLike | number | string | null
    protection_class?: string | null
    created_at?: Date | string | null
  }

  export type environmental_specsUpdateInput = {
    operating_temp_min_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protection_class?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laser?: lasersUpdateOneRequiredWithoutEnvironmental_specsNestedInput
  }

  export type environmental_specsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    laser_id?: IntFieldUpdateOperationsInput | number
    operating_temp_min_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protection_class?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type environmental_specsCreateManyInput = {
    id?: number
    laser_id: number
    operating_temp_min_c?: Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: Decimal | DecimalJsLike | number | string | null
    protection_class?: string | null
    created_at?: Date | string | null
  }

  export type environmental_specsUpdateManyMutationInput = {
    operating_temp_min_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protection_class?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type environmental_specsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    laser_id?: IntFieldUpdateOperationsInput | number
    operating_temp_min_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protection_class?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pulse_specsCreateInput = {
    pulse_width_ns?: Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    laser: lasersCreateNestedOneWithoutPulse_specsInput
  }

  export type pulse_specsUncheckedCreateInput = {
    id?: number
    laser_id: number
    pulse_width_ns?: Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type pulse_specsUpdateInput = {
    pulse_width_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laser?: lasersUpdateOneRequiredWithoutPulse_specsNestedInput
  }

  export type pulse_specsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    laser_id?: IntFieldUpdateOperationsInput | number
    pulse_width_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pulse_specsCreateManyInput = {
    id?: number
    laser_id: number
    pulse_width_ns?: Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type pulse_specsUpdateManyMutationInput = {
    pulse_width_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pulse_specsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    laser_id?: IntFieldUpdateOperationsInput | number
    pulse_width_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    access_codes?: access_codesCreateNestedManyWithoutCreatorInput
    audit_log?: audit_logCreateNestedManyWithoutUserInput
    pending_actions_initiated?: pending_actionsCreateNestedManyWithoutInitiatorInput
    pending_actions_approved?: pending_actionsCreateNestedManyWithoutApproverInput
    rollback_history_initiated?: rollback_historyCreateNestedManyWithoutInitiatorInput
    rollback_history_approved?: rollback_historyCreateNestedManyWithoutApproverInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    access_codes?: access_codesUncheckedCreateNestedManyWithoutCreatorInput
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput
    pending_actions_initiated?: pending_actionsUncheckedCreateNestedManyWithoutInitiatorInput
    pending_actions_approved?: pending_actionsUncheckedCreateNestedManyWithoutApproverInput
    rollback_history_initiated?: rollback_historyUncheckedCreateNestedManyWithoutInitiatorInput
    rollback_history_approved?: rollback_historyUncheckedCreateNestedManyWithoutApproverInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_codes?: access_codesUpdateManyWithoutCreatorNestedInput
    audit_log?: audit_logUpdateManyWithoutUserNestedInput
    pending_actions_initiated?: pending_actionsUpdateManyWithoutInitiatorNestedInput
    pending_actions_approved?: pending_actionsUpdateManyWithoutApproverNestedInput
    rollback_history_initiated?: rollback_historyUpdateManyWithoutInitiatorNestedInput
    rollback_history_approved?: rollback_historyUpdateManyWithoutApproverNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_codes?: access_codesUncheckedUpdateManyWithoutCreatorNestedInput
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput
    pending_actions_initiated?: pending_actionsUncheckedUpdateManyWithoutInitiatorNestedInput
    pending_actions_approved?: pending_actionsUncheckedUpdateManyWithoutApproverNestedInput
    rollback_history_initiated?: rollback_historyUncheckedUpdateManyWithoutInitiatorNestedInput
    rollback_history_approved?: rollback_historyUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type access_codesCreateInput = {
    code_hash: string
    color_code: string
    role: string
    expires_at?: Date | string | null
    max_uses?: number | null
    current_uses?: number
    is_active?: boolean
    notes?: string | null
    created_at?: Date | string | null
    creator: usersCreateNestedOneWithoutAccess_codesInput
  }

  export type access_codesUncheckedCreateInput = {
    id?: number
    code_hash: string
    color_code: string
    role: string
    created_by: number
    expires_at?: Date | string | null
    max_uses?: number | null
    current_uses?: number
    is_active?: boolean
    notes?: string | null
    created_at?: Date | string | null
  }

  export type access_codesUpdateInput = {
    code_hash?: StringFieldUpdateOperationsInput | string
    color_code?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: NullableIntFieldUpdateOperationsInput | number | null
    current_uses?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: usersUpdateOneRequiredWithoutAccess_codesNestedInput
  }

  export type access_codesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code_hash?: StringFieldUpdateOperationsInput | string
    color_code?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: NullableIntFieldUpdateOperationsInput | number | null
    current_uses?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type access_codesCreateManyInput = {
    id?: number
    code_hash: string
    color_code: string
    role: string
    created_by: number
    expires_at?: Date | string | null
    max_uses?: number | null
    current_uses?: number
    is_active?: boolean
    notes?: string | null
    created_at?: Date | string | null
  }

  export type access_codesUpdateManyMutationInput = {
    code_hash?: StringFieldUpdateOperationsInput | string
    color_code?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: NullableIntFieldUpdateOperationsInput | number | null
    current_uses?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type access_codesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code_hash?: StringFieldUpdateOperationsInput | string
    color_code?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: NullableIntFieldUpdateOperationsInput | number | null
    current_uses?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logCreateInput = {
    table_name: string
    record_id?: number | null
    action: string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    created_at?: Date | string | null
    user?: usersCreateNestedOneWithoutAudit_logInput
    rollback_history?: rollback_historyCreateNestedManyWithoutAudit_logInput
  }

  export type audit_logUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    table_name: string
    record_id?: number | null
    action: string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    created_at?: Date | string | null
    rollback_history?: rollback_historyUncheckedCreateNestedManyWithoutAudit_logInput
  }

  export type audit_logUpdateInput = {
    table_name?: StringFieldUpdateOperationsInput | string
    record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneWithoutAudit_logNestedInput
    rollback_history?: rollback_historyUpdateManyWithoutAudit_logNestedInput
  }

  export type audit_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_name?: StringFieldUpdateOperationsInput | string
    record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rollback_history?: rollback_historyUncheckedUpdateManyWithoutAudit_logNestedInput
  }

  export type audit_logCreateManyInput = {
    id?: number
    user_id?: number | null
    table_name: string
    record_id?: number | null
    action: string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    created_at?: Date | string | null
  }

  export type audit_logUpdateManyMutationInput = {
    table_name?: StringFieldUpdateOperationsInput | string
    record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_name?: StringFieldUpdateOperationsInput | string
    record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pending_actionsCreateInput = {
    action_type: string
    target_table: string
    target_record_id?: number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    status?: string
    expires_at?: Date | string | null
    approved_at?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string | null
    initiator: usersCreateNestedOneWithoutPending_actions_initiatedInput
    approver?: usersCreateNestedOneWithoutPending_actions_approvedInput
  }

  export type pending_actionsUncheckedCreateInput = {
    id?: number
    action_type: string
    initiated_by: number
    target_table: string
    target_record_id?: number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    status?: string
    expires_at?: Date | string | null
    approved_by?: number | null
    approved_at?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type pending_actionsUpdateInput = {
    action_type?: StringFieldUpdateOperationsInput | string
    target_table?: StringFieldUpdateOperationsInput | string
    target_record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initiator?: usersUpdateOneRequiredWithoutPending_actions_initiatedNestedInput
    approver?: usersUpdateOneWithoutPending_actions_approvedNestedInput
  }

  export type pending_actionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_type?: StringFieldUpdateOperationsInput | string
    initiated_by?: IntFieldUpdateOperationsInput | number
    target_table?: StringFieldUpdateOperationsInput | string
    target_record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pending_actionsCreateManyInput = {
    id?: number
    action_type: string
    initiated_by: number
    target_table: string
    target_record_id?: number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    status?: string
    expires_at?: Date | string | null
    approved_by?: number | null
    approved_at?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type pending_actionsUpdateManyMutationInput = {
    action_type?: StringFieldUpdateOperationsInput | string
    target_table?: StringFieldUpdateOperationsInput | string
    target_record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pending_actionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_type?: StringFieldUpdateOperationsInput | string
    initiated_by?: IntFieldUpdateOperationsInput | number
    target_table?: StringFieldUpdateOperationsInput | string
    target_record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rollback_historyCreateInput = {
    status: string
    error_message?: string | null
    created_at?: Date | string | null
    audit_log: audit_logCreateNestedOneWithoutRollback_historyInput
    initiator: usersCreateNestedOneWithoutRollback_history_initiatedInput
    approver?: usersCreateNestedOneWithoutRollback_history_approvedInput
  }

  export type rollback_historyUncheckedCreateInput = {
    id?: number
    audit_log_id: number
    initiated_by: number
    approved_by?: number | null
    status: string
    error_message?: string | null
    created_at?: Date | string | null
  }

  export type rollback_historyUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUpdateOneRequiredWithoutRollback_historyNestedInput
    initiator?: usersUpdateOneRequiredWithoutRollback_history_initiatedNestedInput
    approver?: usersUpdateOneWithoutRollback_history_approvedNestedInput
  }

  export type rollback_historyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    audit_log_id?: IntFieldUpdateOperationsInput | number
    initiated_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rollback_historyCreateManyInput = {
    id?: number
    audit_log_id: number
    initiated_by: number
    approved_by?: number | null
    status: string
    error_message?: string | null
    created_at?: Date | string | null
  }

  export type rollback_historyUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rollback_historyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    audit_log_id?: IntFieldUpdateOperationsInput | number
    initiated_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LasersListRelationFilter = {
    every?: lasersWhereInput
    some?: lasersWhereInput
    none?: lasersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type lasersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type manufacturersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    website?: SortOrder
    contact_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type manufacturersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type manufacturersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    website?: SortOrder
    contact_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type manufacturersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    website?: SortOrder
    contact_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type manufacturersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ManufacturersScalarRelationFilter = {
    is?: manufacturersWhereInput
    isNot?: manufacturersWhereInput
  }

  export type Wavelength_specsNullableScalarRelationFilter = {
    is?: wavelength_specsWhereInput | null
    isNot?: wavelength_specsWhereInput | null
  }

  export type Optical_specsNullableScalarRelationFilter = {
    is?: optical_specsWhereInput | null
    isNot?: optical_specsWhereInput | null
  }

  export type Stability_specsNullableScalarRelationFilter = {
    is?: stability_specsWhereInput | null
    isNot?: stability_specsWhereInput | null
  }

  export type Environmental_specsNullableScalarRelationFilter = {
    is?: environmental_specsWhereInput | null
    isNot?: environmental_specsWhereInput | null
  }

  export type Pulse_specsNullableScalarRelationFilter = {
    is?: pulse_specsWhereInput | null
    isNot?: pulse_specsWhereInput | null
  }

  export type lasersCountOrderByAggregateInput = {
    id?: SortOrder
    model_name?: SortOrder
    manufacturer_id?: SortOrder
    laser_type?: SortOrder
    modulation_type?: SortOrder
    cooling_method?: SortOrder
    is_single_mode?: SortOrder
    power_output_w?: SortOrder
    power_consumption_w?: SortOrder
    application?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lasersAvgOrderByAggregateInput = {
    id?: SortOrder
    manufacturer_id?: SortOrder
    power_output_w?: SortOrder
    power_consumption_w?: SortOrder
  }

  export type lasersMaxOrderByAggregateInput = {
    id?: SortOrder
    model_name?: SortOrder
    manufacturer_id?: SortOrder
    laser_type?: SortOrder
    modulation_type?: SortOrder
    cooling_method?: SortOrder
    is_single_mode?: SortOrder
    power_output_w?: SortOrder
    power_consumption_w?: SortOrder
    application?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lasersMinOrderByAggregateInput = {
    id?: SortOrder
    model_name?: SortOrder
    manufacturer_id?: SortOrder
    laser_type?: SortOrder
    modulation_type?: SortOrder
    cooling_method?: SortOrder
    is_single_mode?: SortOrder
    power_output_w?: SortOrder
    power_consumption_w?: SortOrder
    application?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lasersSumOrderByAggregateInput = {
    id?: SortOrder
    manufacturer_id?: SortOrder
    power_output_w?: SortOrder
    power_consumption_w?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type LasersScalarRelationFilter = {
    is?: lasersWhereInput
    isNot?: lasersWhereInput
  }

  export type wavelength_specsCountOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    wavelength_base_nm?: SortOrder
    wavelength_tolerance_nm?: SortOrder
    bandwidth_nm?: SortOrder
    fwhm_nm?: SortOrder
    wavelength_stability_nm_per_c?: SortOrder
    wavelength_tuning_range?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type wavelength_specsAvgOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    wavelength_base_nm?: SortOrder
    wavelength_tolerance_nm?: SortOrder
    bandwidth_nm?: SortOrder
    fwhm_nm?: SortOrder
    wavelength_stability_nm_per_c?: SortOrder
  }

  export type wavelength_specsMaxOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    wavelength_base_nm?: SortOrder
    wavelength_tolerance_nm?: SortOrder
    bandwidth_nm?: SortOrder
    fwhm_nm?: SortOrder
    wavelength_stability_nm_per_c?: SortOrder
    wavelength_tuning_range?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type wavelength_specsMinOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    wavelength_base_nm?: SortOrder
    wavelength_tolerance_nm?: SortOrder
    bandwidth_nm?: SortOrder
    fwhm_nm?: SortOrder
    wavelength_stability_nm_per_c?: SortOrder
    wavelength_tuning_range?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type wavelength_specsSumOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    wavelength_base_nm?: SortOrder
    wavelength_tolerance_nm?: SortOrder
    bandwidth_nm?: SortOrder
    fwhm_nm?: SortOrder
    wavelength_stability_nm_per_c?: SortOrder
  }

  export type optical_specsCountOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    beam_divergence_mrad?: SortOrder
    beam_quality_m2?: SortOrder
    aperture_mm?: SortOrder
    numerical_aperture?: SortOrder
    polarization?: SortOrder
    polarization_ratio_db?: SortOrder
    created_at?: SortOrder
  }

  export type optical_specsAvgOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    beam_divergence_mrad?: SortOrder
    beam_quality_m2?: SortOrder
    aperture_mm?: SortOrder
    numerical_aperture?: SortOrder
    polarization_ratio_db?: SortOrder
  }

  export type optical_specsMaxOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    beam_divergence_mrad?: SortOrder
    beam_quality_m2?: SortOrder
    aperture_mm?: SortOrder
    numerical_aperture?: SortOrder
    polarization?: SortOrder
    polarization_ratio_db?: SortOrder
    created_at?: SortOrder
  }

  export type optical_specsMinOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    beam_divergence_mrad?: SortOrder
    beam_quality_m2?: SortOrder
    aperture_mm?: SortOrder
    numerical_aperture?: SortOrder
    polarization?: SortOrder
    polarization_ratio_db?: SortOrder
    created_at?: SortOrder
  }

  export type optical_specsSumOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    beam_divergence_mrad?: SortOrder
    beam_quality_m2?: SortOrder
    aperture_mm?: SortOrder
    numerical_aperture?: SortOrder
    polarization_ratio_db?: SortOrder
  }

  export type stability_specsCountOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    power_stability_percent?: SortOrder
    pointing_stability_urad?: SortOrder
    temperature_stability_c?: SortOrder
    warmup_time_min?: SortOrder
    created_at?: SortOrder
  }

  export type stability_specsAvgOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    power_stability_percent?: SortOrder
    pointing_stability_urad?: SortOrder
    temperature_stability_c?: SortOrder
    warmup_time_min?: SortOrder
  }

  export type stability_specsMaxOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    power_stability_percent?: SortOrder
    pointing_stability_urad?: SortOrder
    temperature_stability_c?: SortOrder
    warmup_time_min?: SortOrder
    created_at?: SortOrder
  }

  export type stability_specsMinOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    power_stability_percent?: SortOrder
    pointing_stability_urad?: SortOrder
    temperature_stability_c?: SortOrder
    warmup_time_min?: SortOrder
    created_at?: SortOrder
  }

  export type stability_specsSumOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    power_stability_percent?: SortOrder
    pointing_stability_urad?: SortOrder
    temperature_stability_c?: SortOrder
    warmup_time_min?: SortOrder
  }

  export type environmental_specsCountOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    operating_temp_min_c?: SortOrder
    operating_temp_max_c?: SortOrder
    storage_temp_min_c?: SortOrder
    storage_temp_max_c?: SortOrder
    humidity_max_percent?: SortOrder
    protection_class?: SortOrder
    created_at?: SortOrder
  }

  export type environmental_specsAvgOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    operating_temp_min_c?: SortOrder
    operating_temp_max_c?: SortOrder
    storage_temp_min_c?: SortOrder
    storage_temp_max_c?: SortOrder
    humidity_max_percent?: SortOrder
  }

  export type environmental_specsMaxOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    operating_temp_min_c?: SortOrder
    operating_temp_max_c?: SortOrder
    storage_temp_min_c?: SortOrder
    storage_temp_max_c?: SortOrder
    humidity_max_percent?: SortOrder
    protection_class?: SortOrder
    created_at?: SortOrder
  }

  export type environmental_specsMinOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    operating_temp_min_c?: SortOrder
    operating_temp_max_c?: SortOrder
    storage_temp_min_c?: SortOrder
    storage_temp_max_c?: SortOrder
    humidity_max_percent?: SortOrder
    protection_class?: SortOrder
    created_at?: SortOrder
  }

  export type environmental_specsSumOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    operating_temp_min_c?: SortOrder
    operating_temp_max_c?: SortOrder
    storage_temp_min_c?: SortOrder
    storage_temp_max_c?: SortOrder
    humidity_max_percent?: SortOrder
  }

  export type pulse_specsCountOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    pulse_width_ns?: SortOrder
    pulse_energy_j?: SortOrder
    rep_rate_hz?: SortOrder
    duty_cycle_percent?: SortOrder
    rise_time_ns?: SortOrder
    fall_time_ns?: SortOrder
    created_at?: SortOrder
  }

  export type pulse_specsAvgOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    pulse_width_ns?: SortOrder
    pulse_energy_j?: SortOrder
    rep_rate_hz?: SortOrder
    duty_cycle_percent?: SortOrder
    rise_time_ns?: SortOrder
    fall_time_ns?: SortOrder
  }

  export type pulse_specsMaxOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    pulse_width_ns?: SortOrder
    pulse_energy_j?: SortOrder
    rep_rate_hz?: SortOrder
    duty_cycle_percent?: SortOrder
    rise_time_ns?: SortOrder
    fall_time_ns?: SortOrder
    created_at?: SortOrder
  }

  export type pulse_specsMinOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    pulse_width_ns?: SortOrder
    pulse_energy_j?: SortOrder
    rep_rate_hz?: SortOrder
    duty_cycle_percent?: SortOrder
    rise_time_ns?: SortOrder
    fall_time_ns?: SortOrder
    created_at?: SortOrder
  }

  export type pulse_specsSumOrderByAggregateInput = {
    id?: SortOrder
    laser_id?: SortOrder
    pulse_width_ns?: SortOrder
    pulse_energy_j?: SortOrder
    rep_rate_hz?: SortOrder
    duty_cycle_percent?: SortOrder
    rise_time_ns?: SortOrder
    fall_time_ns?: SortOrder
  }

  export type Access_codesListRelationFilter = {
    every?: access_codesWhereInput
    some?: access_codesWhereInput
    none?: access_codesWhereInput
  }

  export type Audit_logListRelationFilter = {
    every?: audit_logWhereInput
    some?: audit_logWhereInput
    none?: audit_logWhereInput
  }

  export type Pending_actionsListRelationFilter = {
    every?: pending_actionsWhereInput
    some?: pending_actionsWhereInput
    none?: pending_actionsWhereInput
  }

  export type Rollback_historyListRelationFilter = {
    every?: rollback_historyWhereInput
    some?: rollback_historyWhereInput
    none?: rollback_historyWhereInput
  }

  export type access_codesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type audit_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pending_actionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rollback_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_login?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_login?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_login?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type access_codesCountOrderByAggregateInput = {
    id?: SortOrder
    code_hash?: SortOrder
    color_code?: SortOrder
    role?: SortOrder
    created_by?: SortOrder
    expires_at?: SortOrder
    max_uses?: SortOrder
    current_uses?: SortOrder
    is_active?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type access_codesAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    max_uses?: SortOrder
    current_uses?: SortOrder
  }

  export type access_codesMaxOrderByAggregateInput = {
    id?: SortOrder
    code_hash?: SortOrder
    color_code?: SortOrder
    role?: SortOrder
    created_by?: SortOrder
    expires_at?: SortOrder
    max_uses?: SortOrder
    current_uses?: SortOrder
    is_active?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type access_codesMinOrderByAggregateInput = {
    id?: SortOrder
    code_hash?: SortOrder
    color_code?: SortOrder
    role?: SortOrder
    created_by?: SortOrder
    expires_at?: SortOrder
    max_uses?: SortOrder
    current_uses?: SortOrder
    is_active?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type access_codesSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    max_uses?: SortOrder
    current_uses?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type audit_logCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    table_name?: SortOrder
    record_id?: SortOrder
    action?: SortOrder
    old_data?: SortOrder
    new_data?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
  }

  export type audit_logAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    record_id?: SortOrder
  }

  export type audit_logMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    table_name?: SortOrder
    record_id?: SortOrder
    action?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
  }

  export type audit_logMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    table_name?: SortOrder
    record_id?: SortOrder
    action?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
  }

  export type audit_logSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    record_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type pending_actionsCountOrderByAggregateInput = {
    id?: SortOrder
    action_type?: SortOrder
    initiated_by?: SortOrder
    target_table?: SortOrder
    target_record_id?: SortOrder
    action_data?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
    approved_by?: SortOrder
    approved_at?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
  }

  export type pending_actionsAvgOrderByAggregateInput = {
    id?: SortOrder
    initiated_by?: SortOrder
    target_record_id?: SortOrder
    approved_by?: SortOrder
  }

  export type pending_actionsMaxOrderByAggregateInput = {
    id?: SortOrder
    action_type?: SortOrder
    initiated_by?: SortOrder
    target_table?: SortOrder
    target_record_id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
    approved_by?: SortOrder
    approved_at?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
  }

  export type pending_actionsMinOrderByAggregateInput = {
    id?: SortOrder
    action_type?: SortOrder
    initiated_by?: SortOrder
    target_table?: SortOrder
    target_record_id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
    approved_by?: SortOrder
    approved_at?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
  }

  export type pending_actionsSumOrderByAggregateInput = {
    id?: SortOrder
    initiated_by?: SortOrder
    target_record_id?: SortOrder
    approved_by?: SortOrder
  }

  export type Audit_logScalarRelationFilter = {
    is?: audit_logWhereInput
    isNot?: audit_logWhereInput
  }

  export type rollback_historyCountOrderByAggregateInput = {
    id?: SortOrder
    audit_log_id?: SortOrder
    initiated_by?: SortOrder
    approved_by?: SortOrder
    status?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
  }

  export type rollback_historyAvgOrderByAggregateInput = {
    id?: SortOrder
    audit_log_id?: SortOrder
    initiated_by?: SortOrder
    approved_by?: SortOrder
  }

  export type rollback_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    audit_log_id?: SortOrder
    initiated_by?: SortOrder
    approved_by?: SortOrder
    status?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
  }

  export type rollback_historyMinOrderByAggregateInput = {
    id?: SortOrder
    audit_log_id?: SortOrder
    initiated_by?: SortOrder
    approved_by?: SortOrder
    status?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
  }

  export type rollback_historySumOrderByAggregateInput = {
    id?: SortOrder
    audit_log_id?: SortOrder
    initiated_by?: SortOrder
    approved_by?: SortOrder
  }

  export type lasersCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<lasersCreateWithoutManufacturerInput, lasersUncheckedCreateWithoutManufacturerInput> | lasersCreateWithoutManufacturerInput[] | lasersUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: lasersCreateOrConnectWithoutManufacturerInput | lasersCreateOrConnectWithoutManufacturerInput[]
    createMany?: lasersCreateManyManufacturerInputEnvelope
    connect?: lasersWhereUniqueInput | lasersWhereUniqueInput[]
  }

  export type lasersUncheckedCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<lasersCreateWithoutManufacturerInput, lasersUncheckedCreateWithoutManufacturerInput> | lasersCreateWithoutManufacturerInput[] | lasersUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: lasersCreateOrConnectWithoutManufacturerInput | lasersCreateOrConnectWithoutManufacturerInput[]
    createMany?: lasersCreateManyManufacturerInputEnvelope
    connect?: lasersWhereUniqueInput | lasersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type lasersUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<lasersCreateWithoutManufacturerInput, lasersUncheckedCreateWithoutManufacturerInput> | lasersCreateWithoutManufacturerInput[] | lasersUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: lasersCreateOrConnectWithoutManufacturerInput | lasersCreateOrConnectWithoutManufacturerInput[]
    upsert?: lasersUpsertWithWhereUniqueWithoutManufacturerInput | lasersUpsertWithWhereUniqueWithoutManufacturerInput[]
    createMany?: lasersCreateManyManufacturerInputEnvelope
    set?: lasersWhereUniqueInput | lasersWhereUniqueInput[]
    disconnect?: lasersWhereUniqueInput | lasersWhereUniqueInput[]
    delete?: lasersWhereUniqueInput | lasersWhereUniqueInput[]
    connect?: lasersWhereUniqueInput | lasersWhereUniqueInput[]
    update?: lasersUpdateWithWhereUniqueWithoutManufacturerInput | lasersUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: lasersUpdateManyWithWhereWithoutManufacturerInput | lasersUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: lasersScalarWhereInput | lasersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type lasersUncheckedUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<lasersCreateWithoutManufacturerInput, lasersUncheckedCreateWithoutManufacturerInput> | lasersCreateWithoutManufacturerInput[] | lasersUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: lasersCreateOrConnectWithoutManufacturerInput | lasersCreateOrConnectWithoutManufacturerInput[]
    upsert?: lasersUpsertWithWhereUniqueWithoutManufacturerInput | lasersUpsertWithWhereUniqueWithoutManufacturerInput[]
    createMany?: lasersCreateManyManufacturerInputEnvelope
    set?: lasersWhereUniqueInput | lasersWhereUniqueInput[]
    disconnect?: lasersWhereUniqueInput | lasersWhereUniqueInput[]
    delete?: lasersWhereUniqueInput | lasersWhereUniqueInput[]
    connect?: lasersWhereUniqueInput | lasersWhereUniqueInput[]
    update?: lasersUpdateWithWhereUniqueWithoutManufacturerInput | lasersUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: lasersUpdateManyWithWhereWithoutManufacturerInput | lasersUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: lasersScalarWhereInput | lasersScalarWhereInput[]
  }

  export type manufacturersCreateNestedOneWithoutLasersInput = {
    create?: XOR<manufacturersCreateWithoutLasersInput, manufacturersUncheckedCreateWithoutLasersInput>
    connectOrCreate?: manufacturersCreateOrConnectWithoutLasersInput
    connect?: manufacturersWhereUniqueInput
  }

  export type wavelength_specsCreateNestedOneWithoutLaserInput = {
    create?: XOR<wavelength_specsCreateWithoutLaserInput, wavelength_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: wavelength_specsCreateOrConnectWithoutLaserInput
    connect?: wavelength_specsWhereUniqueInput
  }

  export type optical_specsCreateNestedOneWithoutLaserInput = {
    create?: XOR<optical_specsCreateWithoutLaserInput, optical_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: optical_specsCreateOrConnectWithoutLaserInput
    connect?: optical_specsWhereUniqueInput
  }

  export type stability_specsCreateNestedOneWithoutLaserInput = {
    create?: XOR<stability_specsCreateWithoutLaserInput, stability_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: stability_specsCreateOrConnectWithoutLaserInput
    connect?: stability_specsWhereUniqueInput
  }

  export type environmental_specsCreateNestedOneWithoutLaserInput = {
    create?: XOR<environmental_specsCreateWithoutLaserInput, environmental_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: environmental_specsCreateOrConnectWithoutLaserInput
    connect?: environmental_specsWhereUniqueInput
  }

  export type pulse_specsCreateNestedOneWithoutLaserInput = {
    create?: XOR<pulse_specsCreateWithoutLaserInput, pulse_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: pulse_specsCreateOrConnectWithoutLaserInput
    connect?: pulse_specsWhereUniqueInput
  }

  export type wavelength_specsUncheckedCreateNestedOneWithoutLaserInput = {
    create?: XOR<wavelength_specsCreateWithoutLaserInput, wavelength_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: wavelength_specsCreateOrConnectWithoutLaserInput
    connect?: wavelength_specsWhereUniqueInput
  }

  export type optical_specsUncheckedCreateNestedOneWithoutLaserInput = {
    create?: XOR<optical_specsCreateWithoutLaserInput, optical_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: optical_specsCreateOrConnectWithoutLaserInput
    connect?: optical_specsWhereUniqueInput
  }

  export type stability_specsUncheckedCreateNestedOneWithoutLaserInput = {
    create?: XOR<stability_specsCreateWithoutLaserInput, stability_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: stability_specsCreateOrConnectWithoutLaserInput
    connect?: stability_specsWhereUniqueInput
  }

  export type environmental_specsUncheckedCreateNestedOneWithoutLaserInput = {
    create?: XOR<environmental_specsCreateWithoutLaserInput, environmental_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: environmental_specsCreateOrConnectWithoutLaserInput
    connect?: environmental_specsWhereUniqueInput
  }

  export type pulse_specsUncheckedCreateNestedOneWithoutLaserInput = {
    create?: XOR<pulse_specsCreateWithoutLaserInput, pulse_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: pulse_specsCreateOrConnectWithoutLaserInput
    connect?: pulse_specsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type manufacturersUpdateOneRequiredWithoutLasersNestedInput = {
    create?: XOR<manufacturersCreateWithoutLasersInput, manufacturersUncheckedCreateWithoutLasersInput>
    connectOrCreate?: manufacturersCreateOrConnectWithoutLasersInput
    upsert?: manufacturersUpsertWithoutLasersInput
    connect?: manufacturersWhereUniqueInput
    update?: XOR<XOR<manufacturersUpdateToOneWithWhereWithoutLasersInput, manufacturersUpdateWithoutLasersInput>, manufacturersUncheckedUpdateWithoutLasersInput>
  }

  export type wavelength_specsUpdateOneWithoutLaserNestedInput = {
    create?: XOR<wavelength_specsCreateWithoutLaserInput, wavelength_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: wavelength_specsCreateOrConnectWithoutLaserInput
    upsert?: wavelength_specsUpsertWithoutLaserInput
    disconnect?: wavelength_specsWhereInput | boolean
    delete?: wavelength_specsWhereInput | boolean
    connect?: wavelength_specsWhereUniqueInput
    update?: XOR<XOR<wavelength_specsUpdateToOneWithWhereWithoutLaserInput, wavelength_specsUpdateWithoutLaserInput>, wavelength_specsUncheckedUpdateWithoutLaserInput>
  }

  export type optical_specsUpdateOneWithoutLaserNestedInput = {
    create?: XOR<optical_specsCreateWithoutLaserInput, optical_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: optical_specsCreateOrConnectWithoutLaserInput
    upsert?: optical_specsUpsertWithoutLaserInput
    disconnect?: optical_specsWhereInput | boolean
    delete?: optical_specsWhereInput | boolean
    connect?: optical_specsWhereUniqueInput
    update?: XOR<XOR<optical_specsUpdateToOneWithWhereWithoutLaserInput, optical_specsUpdateWithoutLaserInput>, optical_specsUncheckedUpdateWithoutLaserInput>
  }

  export type stability_specsUpdateOneWithoutLaserNestedInput = {
    create?: XOR<stability_specsCreateWithoutLaserInput, stability_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: stability_specsCreateOrConnectWithoutLaserInput
    upsert?: stability_specsUpsertWithoutLaserInput
    disconnect?: stability_specsWhereInput | boolean
    delete?: stability_specsWhereInput | boolean
    connect?: stability_specsWhereUniqueInput
    update?: XOR<XOR<stability_specsUpdateToOneWithWhereWithoutLaserInput, stability_specsUpdateWithoutLaserInput>, stability_specsUncheckedUpdateWithoutLaserInput>
  }

  export type environmental_specsUpdateOneWithoutLaserNestedInput = {
    create?: XOR<environmental_specsCreateWithoutLaserInput, environmental_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: environmental_specsCreateOrConnectWithoutLaserInput
    upsert?: environmental_specsUpsertWithoutLaserInput
    disconnect?: environmental_specsWhereInput | boolean
    delete?: environmental_specsWhereInput | boolean
    connect?: environmental_specsWhereUniqueInput
    update?: XOR<XOR<environmental_specsUpdateToOneWithWhereWithoutLaserInput, environmental_specsUpdateWithoutLaserInput>, environmental_specsUncheckedUpdateWithoutLaserInput>
  }

  export type pulse_specsUpdateOneWithoutLaserNestedInput = {
    create?: XOR<pulse_specsCreateWithoutLaserInput, pulse_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: pulse_specsCreateOrConnectWithoutLaserInput
    upsert?: pulse_specsUpsertWithoutLaserInput
    disconnect?: pulse_specsWhereInput | boolean
    delete?: pulse_specsWhereInput | boolean
    connect?: pulse_specsWhereUniqueInput
    update?: XOR<XOR<pulse_specsUpdateToOneWithWhereWithoutLaserInput, pulse_specsUpdateWithoutLaserInput>, pulse_specsUncheckedUpdateWithoutLaserInput>
  }

  export type wavelength_specsUncheckedUpdateOneWithoutLaserNestedInput = {
    create?: XOR<wavelength_specsCreateWithoutLaserInput, wavelength_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: wavelength_specsCreateOrConnectWithoutLaserInput
    upsert?: wavelength_specsUpsertWithoutLaserInput
    disconnect?: wavelength_specsWhereInput | boolean
    delete?: wavelength_specsWhereInput | boolean
    connect?: wavelength_specsWhereUniqueInput
    update?: XOR<XOR<wavelength_specsUpdateToOneWithWhereWithoutLaserInput, wavelength_specsUpdateWithoutLaserInput>, wavelength_specsUncheckedUpdateWithoutLaserInput>
  }

  export type optical_specsUncheckedUpdateOneWithoutLaserNestedInput = {
    create?: XOR<optical_specsCreateWithoutLaserInput, optical_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: optical_specsCreateOrConnectWithoutLaserInput
    upsert?: optical_specsUpsertWithoutLaserInput
    disconnect?: optical_specsWhereInput | boolean
    delete?: optical_specsWhereInput | boolean
    connect?: optical_specsWhereUniqueInput
    update?: XOR<XOR<optical_specsUpdateToOneWithWhereWithoutLaserInput, optical_specsUpdateWithoutLaserInput>, optical_specsUncheckedUpdateWithoutLaserInput>
  }

  export type stability_specsUncheckedUpdateOneWithoutLaserNestedInput = {
    create?: XOR<stability_specsCreateWithoutLaserInput, stability_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: stability_specsCreateOrConnectWithoutLaserInput
    upsert?: stability_specsUpsertWithoutLaserInput
    disconnect?: stability_specsWhereInput | boolean
    delete?: stability_specsWhereInput | boolean
    connect?: stability_specsWhereUniqueInput
    update?: XOR<XOR<stability_specsUpdateToOneWithWhereWithoutLaserInput, stability_specsUpdateWithoutLaserInput>, stability_specsUncheckedUpdateWithoutLaserInput>
  }

  export type environmental_specsUncheckedUpdateOneWithoutLaserNestedInput = {
    create?: XOR<environmental_specsCreateWithoutLaserInput, environmental_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: environmental_specsCreateOrConnectWithoutLaserInput
    upsert?: environmental_specsUpsertWithoutLaserInput
    disconnect?: environmental_specsWhereInput | boolean
    delete?: environmental_specsWhereInput | boolean
    connect?: environmental_specsWhereUniqueInput
    update?: XOR<XOR<environmental_specsUpdateToOneWithWhereWithoutLaserInput, environmental_specsUpdateWithoutLaserInput>, environmental_specsUncheckedUpdateWithoutLaserInput>
  }

  export type pulse_specsUncheckedUpdateOneWithoutLaserNestedInput = {
    create?: XOR<pulse_specsCreateWithoutLaserInput, pulse_specsUncheckedCreateWithoutLaserInput>
    connectOrCreate?: pulse_specsCreateOrConnectWithoutLaserInput
    upsert?: pulse_specsUpsertWithoutLaserInput
    disconnect?: pulse_specsWhereInput | boolean
    delete?: pulse_specsWhereInput | boolean
    connect?: pulse_specsWhereUniqueInput
    update?: XOR<XOR<pulse_specsUpdateToOneWithWhereWithoutLaserInput, pulse_specsUpdateWithoutLaserInput>, pulse_specsUncheckedUpdateWithoutLaserInput>
  }

  export type lasersCreateNestedOneWithoutWavelength_specsInput = {
    create?: XOR<lasersCreateWithoutWavelength_specsInput, lasersUncheckedCreateWithoutWavelength_specsInput>
    connectOrCreate?: lasersCreateOrConnectWithoutWavelength_specsInput
    connect?: lasersWhereUniqueInput
  }

  export type lasersUpdateOneRequiredWithoutWavelength_specsNestedInput = {
    create?: XOR<lasersCreateWithoutWavelength_specsInput, lasersUncheckedCreateWithoutWavelength_specsInput>
    connectOrCreate?: lasersCreateOrConnectWithoutWavelength_specsInput
    upsert?: lasersUpsertWithoutWavelength_specsInput
    connect?: lasersWhereUniqueInput
    update?: XOR<XOR<lasersUpdateToOneWithWhereWithoutWavelength_specsInput, lasersUpdateWithoutWavelength_specsInput>, lasersUncheckedUpdateWithoutWavelength_specsInput>
  }

  export type lasersCreateNestedOneWithoutOptical_specsInput = {
    create?: XOR<lasersCreateWithoutOptical_specsInput, lasersUncheckedCreateWithoutOptical_specsInput>
    connectOrCreate?: lasersCreateOrConnectWithoutOptical_specsInput
    connect?: lasersWhereUniqueInput
  }

  export type lasersUpdateOneRequiredWithoutOptical_specsNestedInput = {
    create?: XOR<lasersCreateWithoutOptical_specsInput, lasersUncheckedCreateWithoutOptical_specsInput>
    connectOrCreate?: lasersCreateOrConnectWithoutOptical_specsInput
    upsert?: lasersUpsertWithoutOptical_specsInput
    connect?: lasersWhereUniqueInput
    update?: XOR<XOR<lasersUpdateToOneWithWhereWithoutOptical_specsInput, lasersUpdateWithoutOptical_specsInput>, lasersUncheckedUpdateWithoutOptical_specsInput>
  }

  export type lasersCreateNestedOneWithoutStability_specsInput = {
    create?: XOR<lasersCreateWithoutStability_specsInput, lasersUncheckedCreateWithoutStability_specsInput>
    connectOrCreate?: lasersCreateOrConnectWithoutStability_specsInput
    connect?: lasersWhereUniqueInput
  }

  export type lasersUpdateOneRequiredWithoutStability_specsNestedInput = {
    create?: XOR<lasersCreateWithoutStability_specsInput, lasersUncheckedCreateWithoutStability_specsInput>
    connectOrCreate?: lasersCreateOrConnectWithoutStability_specsInput
    upsert?: lasersUpsertWithoutStability_specsInput
    connect?: lasersWhereUniqueInput
    update?: XOR<XOR<lasersUpdateToOneWithWhereWithoutStability_specsInput, lasersUpdateWithoutStability_specsInput>, lasersUncheckedUpdateWithoutStability_specsInput>
  }

  export type lasersCreateNestedOneWithoutEnvironmental_specsInput = {
    create?: XOR<lasersCreateWithoutEnvironmental_specsInput, lasersUncheckedCreateWithoutEnvironmental_specsInput>
    connectOrCreate?: lasersCreateOrConnectWithoutEnvironmental_specsInput
    connect?: lasersWhereUniqueInput
  }

  export type lasersUpdateOneRequiredWithoutEnvironmental_specsNestedInput = {
    create?: XOR<lasersCreateWithoutEnvironmental_specsInput, lasersUncheckedCreateWithoutEnvironmental_specsInput>
    connectOrCreate?: lasersCreateOrConnectWithoutEnvironmental_specsInput
    upsert?: lasersUpsertWithoutEnvironmental_specsInput
    connect?: lasersWhereUniqueInput
    update?: XOR<XOR<lasersUpdateToOneWithWhereWithoutEnvironmental_specsInput, lasersUpdateWithoutEnvironmental_specsInput>, lasersUncheckedUpdateWithoutEnvironmental_specsInput>
  }

  export type lasersCreateNestedOneWithoutPulse_specsInput = {
    create?: XOR<lasersCreateWithoutPulse_specsInput, lasersUncheckedCreateWithoutPulse_specsInput>
    connectOrCreate?: lasersCreateOrConnectWithoutPulse_specsInput
    connect?: lasersWhereUniqueInput
  }

  export type lasersUpdateOneRequiredWithoutPulse_specsNestedInput = {
    create?: XOR<lasersCreateWithoutPulse_specsInput, lasersUncheckedCreateWithoutPulse_specsInput>
    connectOrCreate?: lasersCreateOrConnectWithoutPulse_specsInput
    upsert?: lasersUpsertWithoutPulse_specsInput
    connect?: lasersWhereUniqueInput
    update?: XOR<XOR<lasersUpdateToOneWithWhereWithoutPulse_specsInput, lasersUpdateWithoutPulse_specsInput>, lasersUncheckedUpdateWithoutPulse_specsInput>
  }

  export type access_codesCreateNestedManyWithoutCreatorInput = {
    create?: XOR<access_codesCreateWithoutCreatorInput, access_codesUncheckedCreateWithoutCreatorInput> | access_codesCreateWithoutCreatorInput[] | access_codesUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: access_codesCreateOrConnectWithoutCreatorInput | access_codesCreateOrConnectWithoutCreatorInput[]
    createMany?: access_codesCreateManyCreatorInputEnvelope
    connect?: access_codesWhereUniqueInput | access_codesWhereUniqueInput[]
  }

  export type audit_logCreateNestedManyWithoutUserInput = {
    create?: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput> | audit_logCreateWithoutUserInput[] | audit_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: audit_logCreateOrConnectWithoutUserInput | audit_logCreateOrConnectWithoutUserInput[]
    createMany?: audit_logCreateManyUserInputEnvelope
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
  }

  export type pending_actionsCreateNestedManyWithoutInitiatorInput = {
    create?: XOR<pending_actionsCreateWithoutInitiatorInput, pending_actionsUncheckedCreateWithoutInitiatorInput> | pending_actionsCreateWithoutInitiatorInput[] | pending_actionsUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: pending_actionsCreateOrConnectWithoutInitiatorInput | pending_actionsCreateOrConnectWithoutInitiatorInput[]
    createMany?: pending_actionsCreateManyInitiatorInputEnvelope
    connect?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
  }

  export type pending_actionsCreateNestedManyWithoutApproverInput = {
    create?: XOR<pending_actionsCreateWithoutApproverInput, pending_actionsUncheckedCreateWithoutApproverInput> | pending_actionsCreateWithoutApproverInput[] | pending_actionsUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: pending_actionsCreateOrConnectWithoutApproverInput | pending_actionsCreateOrConnectWithoutApproverInput[]
    createMany?: pending_actionsCreateManyApproverInputEnvelope
    connect?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
  }

  export type rollback_historyCreateNestedManyWithoutInitiatorInput = {
    create?: XOR<rollback_historyCreateWithoutInitiatorInput, rollback_historyUncheckedCreateWithoutInitiatorInput> | rollback_historyCreateWithoutInitiatorInput[] | rollback_historyUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: rollback_historyCreateOrConnectWithoutInitiatorInput | rollback_historyCreateOrConnectWithoutInitiatorInput[]
    createMany?: rollback_historyCreateManyInitiatorInputEnvelope
    connect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
  }

  export type rollback_historyCreateNestedManyWithoutApproverInput = {
    create?: XOR<rollback_historyCreateWithoutApproverInput, rollback_historyUncheckedCreateWithoutApproverInput> | rollback_historyCreateWithoutApproverInput[] | rollback_historyUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: rollback_historyCreateOrConnectWithoutApproverInput | rollback_historyCreateOrConnectWithoutApproverInput[]
    createMany?: rollback_historyCreateManyApproverInputEnvelope
    connect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
  }

  export type access_codesUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<access_codesCreateWithoutCreatorInput, access_codesUncheckedCreateWithoutCreatorInput> | access_codesCreateWithoutCreatorInput[] | access_codesUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: access_codesCreateOrConnectWithoutCreatorInput | access_codesCreateOrConnectWithoutCreatorInput[]
    createMany?: access_codesCreateManyCreatorInputEnvelope
    connect?: access_codesWhereUniqueInput | access_codesWhereUniqueInput[]
  }

  export type audit_logUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput> | audit_logCreateWithoutUserInput[] | audit_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: audit_logCreateOrConnectWithoutUserInput | audit_logCreateOrConnectWithoutUserInput[]
    createMany?: audit_logCreateManyUserInputEnvelope
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
  }

  export type pending_actionsUncheckedCreateNestedManyWithoutInitiatorInput = {
    create?: XOR<pending_actionsCreateWithoutInitiatorInput, pending_actionsUncheckedCreateWithoutInitiatorInput> | pending_actionsCreateWithoutInitiatorInput[] | pending_actionsUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: pending_actionsCreateOrConnectWithoutInitiatorInput | pending_actionsCreateOrConnectWithoutInitiatorInput[]
    createMany?: pending_actionsCreateManyInitiatorInputEnvelope
    connect?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
  }

  export type pending_actionsUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<pending_actionsCreateWithoutApproverInput, pending_actionsUncheckedCreateWithoutApproverInput> | pending_actionsCreateWithoutApproverInput[] | pending_actionsUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: pending_actionsCreateOrConnectWithoutApproverInput | pending_actionsCreateOrConnectWithoutApproverInput[]
    createMany?: pending_actionsCreateManyApproverInputEnvelope
    connect?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
  }

  export type rollback_historyUncheckedCreateNestedManyWithoutInitiatorInput = {
    create?: XOR<rollback_historyCreateWithoutInitiatorInput, rollback_historyUncheckedCreateWithoutInitiatorInput> | rollback_historyCreateWithoutInitiatorInput[] | rollback_historyUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: rollback_historyCreateOrConnectWithoutInitiatorInput | rollback_historyCreateOrConnectWithoutInitiatorInput[]
    createMany?: rollback_historyCreateManyInitiatorInputEnvelope
    connect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
  }

  export type rollback_historyUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<rollback_historyCreateWithoutApproverInput, rollback_historyUncheckedCreateWithoutApproverInput> | rollback_historyCreateWithoutApproverInput[] | rollback_historyUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: rollback_historyCreateOrConnectWithoutApproverInput | rollback_historyCreateOrConnectWithoutApproverInput[]
    createMany?: rollback_historyCreateManyApproverInputEnvelope
    connect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
  }

  export type access_codesUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<access_codesCreateWithoutCreatorInput, access_codesUncheckedCreateWithoutCreatorInput> | access_codesCreateWithoutCreatorInput[] | access_codesUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: access_codesCreateOrConnectWithoutCreatorInput | access_codesCreateOrConnectWithoutCreatorInput[]
    upsert?: access_codesUpsertWithWhereUniqueWithoutCreatorInput | access_codesUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: access_codesCreateManyCreatorInputEnvelope
    set?: access_codesWhereUniqueInput | access_codesWhereUniqueInput[]
    disconnect?: access_codesWhereUniqueInput | access_codesWhereUniqueInput[]
    delete?: access_codesWhereUniqueInput | access_codesWhereUniqueInput[]
    connect?: access_codesWhereUniqueInput | access_codesWhereUniqueInput[]
    update?: access_codesUpdateWithWhereUniqueWithoutCreatorInput | access_codesUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: access_codesUpdateManyWithWhereWithoutCreatorInput | access_codesUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: access_codesScalarWhereInput | access_codesScalarWhereInput[]
  }

  export type audit_logUpdateManyWithoutUserNestedInput = {
    create?: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput> | audit_logCreateWithoutUserInput[] | audit_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: audit_logCreateOrConnectWithoutUserInput | audit_logCreateOrConnectWithoutUserInput[]
    upsert?: audit_logUpsertWithWhereUniqueWithoutUserInput | audit_logUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: audit_logCreateManyUserInputEnvelope
    set?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    disconnect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    delete?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    update?: audit_logUpdateWithWhereUniqueWithoutUserInput | audit_logUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: audit_logUpdateManyWithWhereWithoutUserInput | audit_logUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: audit_logScalarWhereInput | audit_logScalarWhereInput[]
  }

  export type pending_actionsUpdateManyWithoutInitiatorNestedInput = {
    create?: XOR<pending_actionsCreateWithoutInitiatorInput, pending_actionsUncheckedCreateWithoutInitiatorInput> | pending_actionsCreateWithoutInitiatorInput[] | pending_actionsUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: pending_actionsCreateOrConnectWithoutInitiatorInput | pending_actionsCreateOrConnectWithoutInitiatorInput[]
    upsert?: pending_actionsUpsertWithWhereUniqueWithoutInitiatorInput | pending_actionsUpsertWithWhereUniqueWithoutInitiatorInput[]
    createMany?: pending_actionsCreateManyInitiatorInputEnvelope
    set?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    disconnect?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    delete?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    connect?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    update?: pending_actionsUpdateWithWhereUniqueWithoutInitiatorInput | pending_actionsUpdateWithWhereUniqueWithoutInitiatorInput[]
    updateMany?: pending_actionsUpdateManyWithWhereWithoutInitiatorInput | pending_actionsUpdateManyWithWhereWithoutInitiatorInput[]
    deleteMany?: pending_actionsScalarWhereInput | pending_actionsScalarWhereInput[]
  }

  export type pending_actionsUpdateManyWithoutApproverNestedInput = {
    create?: XOR<pending_actionsCreateWithoutApproverInput, pending_actionsUncheckedCreateWithoutApproverInput> | pending_actionsCreateWithoutApproverInput[] | pending_actionsUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: pending_actionsCreateOrConnectWithoutApproverInput | pending_actionsCreateOrConnectWithoutApproverInput[]
    upsert?: pending_actionsUpsertWithWhereUniqueWithoutApproverInput | pending_actionsUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: pending_actionsCreateManyApproverInputEnvelope
    set?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    disconnect?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    delete?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    connect?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    update?: pending_actionsUpdateWithWhereUniqueWithoutApproverInput | pending_actionsUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: pending_actionsUpdateManyWithWhereWithoutApproverInput | pending_actionsUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: pending_actionsScalarWhereInput | pending_actionsScalarWhereInput[]
  }

  export type rollback_historyUpdateManyWithoutInitiatorNestedInput = {
    create?: XOR<rollback_historyCreateWithoutInitiatorInput, rollback_historyUncheckedCreateWithoutInitiatorInput> | rollback_historyCreateWithoutInitiatorInput[] | rollback_historyUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: rollback_historyCreateOrConnectWithoutInitiatorInput | rollback_historyCreateOrConnectWithoutInitiatorInput[]
    upsert?: rollback_historyUpsertWithWhereUniqueWithoutInitiatorInput | rollback_historyUpsertWithWhereUniqueWithoutInitiatorInput[]
    createMany?: rollback_historyCreateManyInitiatorInputEnvelope
    set?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    disconnect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    delete?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    connect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    update?: rollback_historyUpdateWithWhereUniqueWithoutInitiatorInput | rollback_historyUpdateWithWhereUniqueWithoutInitiatorInput[]
    updateMany?: rollback_historyUpdateManyWithWhereWithoutInitiatorInput | rollback_historyUpdateManyWithWhereWithoutInitiatorInput[]
    deleteMany?: rollback_historyScalarWhereInput | rollback_historyScalarWhereInput[]
  }

  export type rollback_historyUpdateManyWithoutApproverNestedInput = {
    create?: XOR<rollback_historyCreateWithoutApproverInput, rollback_historyUncheckedCreateWithoutApproverInput> | rollback_historyCreateWithoutApproverInput[] | rollback_historyUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: rollback_historyCreateOrConnectWithoutApproverInput | rollback_historyCreateOrConnectWithoutApproverInput[]
    upsert?: rollback_historyUpsertWithWhereUniqueWithoutApproverInput | rollback_historyUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: rollback_historyCreateManyApproverInputEnvelope
    set?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    disconnect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    delete?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    connect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    update?: rollback_historyUpdateWithWhereUniqueWithoutApproverInput | rollback_historyUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: rollback_historyUpdateManyWithWhereWithoutApproverInput | rollback_historyUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: rollback_historyScalarWhereInput | rollback_historyScalarWhereInput[]
  }

  export type access_codesUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<access_codesCreateWithoutCreatorInput, access_codesUncheckedCreateWithoutCreatorInput> | access_codesCreateWithoutCreatorInput[] | access_codesUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: access_codesCreateOrConnectWithoutCreatorInput | access_codesCreateOrConnectWithoutCreatorInput[]
    upsert?: access_codesUpsertWithWhereUniqueWithoutCreatorInput | access_codesUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: access_codesCreateManyCreatorInputEnvelope
    set?: access_codesWhereUniqueInput | access_codesWhereUniqueInput[]
    disconnect?: access_codesWhereUniqueInput | access_codesWhereUniqueInput[]
    delete?: access_codesWhereUniqueInput | access_codesWhereUniqueInput[]
    connect?: access_codesWhereUniqueInput | access_codesWhereUniqueInput[]
    update?: access_codesUpdateWithWhereUniqueWithoutCreatorInput | access_codesUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: access_codesUpdateManyWithWhereWithoutCreatorInput | access_codesUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: access_codesScalarWhereInput | access_codesScalarWhereInput[]
  }

  export type audit_logUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput> | audit_logCreateWithoutUserInput[] | audit_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: audit_logCreateOrConnectWithoutUserInput | audit_logCreateOrConnectWithoutUserInput[]
    upsert?: audit_logUpsertWithWhereUniqueWithoutUserInput | audit_logUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: audit_logCreateManyUserInputEnvelope
    set?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    disconnect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    delete?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    update?: audit_logUpdateWithWhereUniqueWithoutUserInput | audit_logUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: audit_logUpdateManyWithWhereWithoutUserInput | audit_logUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: audit_logScalarWhereInput | audit_logScalarWhereInput[]
  }

  export type pending_actionsUncheckedUpdateManyWithoutInitiatorNestedInput = {
    create?: XOR<pending_actionsCreateWithoutInitiatorInput, pending_actionsUncheckedCreateWithoutInitiatorInput> | pending_actionsCreateWithoutInitiatorInput[] | pending_actionsUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: pending_actionsCreateOrConnectWithoutInitiatorInput | pending_actionsCreateOrConnectWithoutInitiatorInput[]
    upsert?: pending_actionsUpsertWithWhereUniqueWithoutInitiatorInput | pending_actionsUpsertWithWhereUniqueWithoutInitiatorInput[]
    createMany?: pending_actionsCreateManyInitiatorInputEnvelope
    set?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    disconnect?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    delete?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    connect?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    update?: pending_actionsUpdateWithWhereUniqueWithoutInitiatorInput | pending_actionsUpdateWithWhereUniqueWithoutInitiatorInput[]
    updateMany?: pending_actionsUpdateManyWithWhereWithoutInitiatorInput | pending_actionsUpdateManyWithWhereWithoutInitiatorInput[]
    deleteMany?: pending_actionsScalarWhereInput | pending_actionsScalarWhereInput[]
  }

  export type pending_actionsUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<pending_actionsCreateWithoutApproverInput, pending_actionsUncheckedCreateWithoutApproverInput> | pending_actionsCreateWithoutApproverInput[] | pending_actionsUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: pending_actionsCreateOrConnectWithoutApproverInput | pending_actionsCreateOrConnectWithoutApproverInput[]
    upsert?: pending_actionsUpsertWithWhereUniqueWithoutApproverInput | pending_actionsUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: pending_actionsCreateManyApproverInputEnvelope
    set?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    disconnect?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    delete?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    connect?: pending_actionsWhereUniqueInput | pending_actionsWhereUniqueInput[]
    update?: pending_actionsUpdateWithWhereUniqueWithoutApproverInput | pending_actionsUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: pending_actionsUpdateManyWithWhereWithoutApproverInput | pending_actionsUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: pending_actionsScalarWhereInput | pending_actionsScalarWhereInput[]
  }

  export type rollback_historyUncheckedUpdateManyWithoutInitiatorNestedInput = {
    create?: XOR<rollback_historyCreateWithoutInitiatorInput, rollback_historyUncheckedCreateWithoutInitiatorInput> | rollback_historyCreateWithoutInitiatorInput[] | rollback_historyUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: rollback_historyCreateOrConnectWithoutInitiatorInput | rollback_historyCreateOrConnectWithoutInitiatorInput[]
    upsert?: rollback_historyUpsertWithWhereUniqueWithoutInitiatorInput | rollback_historyUpsertWithWhereUniqueWithoutInitiatorInput[]
    createMany?: rollback_historyCreateManyInitiatorInputEnvelope
    set?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    disconnect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    delete?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    connect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    update?: rollback_historyUpdateWithWhereUniqueWithoutInitiatorInput | rollback_historyUpdateWithWhereUniqueWithoutInitiatorInput[]
    updateMany?: rollback_historyUpdateManyWithWhereWithoutInitiatorInput | rollback_historyUpdateManyWithWhereWithoutInitiatorInput[]
    deleteMany?: rollback_historyScalarWhereInput | rollback_historyScalarWhereInput[]
  }

  export type rollback_historyUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<rollback_historyCreateWithoutApproverInput, rollback_historyUncheckedCreateWithoutApproverInput> | rollback_historyCreateWithoutApproverInput[] | rollback_historyUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: rollback_historyCreateOrConnectWithoutApproverInput | rollback_historyCreateOrConnectWithoutApproverInput[]
    upsert?: rollback_historyUpsertWithWhereUniqueWithoutApproverInput | rollback_historyUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: rollback_historyCreateManyApproverInputEnvelope
    set?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    disconnect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    delete?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    connect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    update?: rollback_historyUpdateWithWhereUniqueWithoutApproverInput | rollback_historyUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: rollback_historyUpdateManyWithWhereWithoutApproverInput | rollback_historyUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: rollback_historyScalarWhereInput | rollback_historyScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutAccess_codesInput = {
    create?: XOR<usersCreateWithoutAccess_codesInput, usersUncheckedCreateWithoutAccess_codesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAccess_codesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutAccess_codesNestedInput = {
    create?: XOR<usersCreateWithoutAccess_codesInput, usersUncheckedCreateWithoutAccess_codesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAccess_codesInput
    upsert?: usersUpsertWithoutAccess_codesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAccess_codesInput, usersUpdateWithoutAccess_codesInput>, usersUncheckedUpdateWithoutAccess_codesInput>
  }

  export type usersCreateNestedOneWithoutAudit_logInput = {
    create?: XOR<usersCreateWithoutAudit_logInput, usersUncheckedCreateWithoutAudit_logInput>
    connectOrCreate?: usersCreateOrConnectWithoutAudit_logInput
    connect?: usersWhereUniqueInput
  }

  export type rollback_historyCreateNestedManyWithoutAudit_logInput = {
    create?: XOR<rollback_historyCreateWithoutAudit_logInput, rollback_historyUncheckedCreateWithoutAudit_logInput> | rollback_historyCreateWithoutAudit_logInput[] | rollback_historyUncheckedCreateWithoutAudit_logInput[]
    connectOrCreate?: rollback_historyCreateOrConnectWithoutAudit_logInput | rollback_historyCreateOrConnectWithoutAudit_logInput[]
    createMany?: rollback_historyCreateManyAudit_logInputEnvelope
    connect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
  }

  export type rollback_historyUncheckedCreateNestedManyWithoutAudit_logInput = {
    create?: XOR<rollback_historyCreateWithoutAudit_logInput, rollback_historyUncheckedCreateWithoutAudit_logInput> | rollback_historyCreateWithoutAudit_logInput[] | rollback_historyUncheckedCreateWithoutAudit_logInput[]
    connectOrCreate?: rollback_historyCreateOrConnectWithoutAudit_logInput | rollback_historyCreateOrConnectWithoutAudit_logInput[]
    createMany?: rollback_historyCreateManyAudit_logInputEnvelope
    connect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
  }

  export type usersUpdateOneWithoutAudit_logNestedInput = {
    create?: XOR<usersCreateWithoutAudit_logInput, usersUncheckedCreateWithoutAudit_logInput>
    connectOrCreate?: usersCreateOrConnectWithoutAudit_logInput
    upsert?: usersUpsertWithoutAudit_logInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAudit_logInput, usersUpdateWithoutAudit_logInput>, usersUncheckedUpdateWithoutAudit_logInput>
  }

  export type rollback_historyUpdateManyWithoutAudit_logNestedInput = {
    create?: XOR<rollback_historyCreateWithoutAudit_logInput, rollback_historyUncheckedCreateWithoutAudit_logInput> | rollback_historyCreateWithoutAudit_logInput[] | rollback_historyUncheckedCreateWithoutAudit_logInput[]
    connectOrCreate?: rollback_historyCreateOrConnectWithoutAudit_logInput | rollback_historyCreateOrConnectWithoutAudit_logInput[]
    upsert?: rollback_historyUpsertWithWhereUniqueWithoutAudit_logInput | rollback_historyUpsertWithWhereUniqueWithoutAudit_logInput[]
    createMany?: rollback_historyCreateManyAudit_logInputEnvelope
    set?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    disconnect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    delete?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    connect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    update?: rollback_historyUpdateWithWhereUniqueWithoutAudit_logInput | rollback_historyUpdateWithWhereUniqueWithoutAudit_logInput[]
    updateMany?: rollback_historyUpdateManyWithWhereWithoutAudit_logInput | rollback_historyUpdateManyWithWhereWithoutAudit_logInput[]
    deleteMany?: rollback_historyScalarWhereInput | rollback_historyScalarWhereInput[]
  }

  export type rollback_historyUncheckedUpdateManyWithoutAudit_logNestedInput = {
    create?: XOR<rollback_historyCreateWithoutAudit_logInput, rollback_historyUncheckedCreateWithoutAudit_logInput> | rollback_historyCreateWithoutAudit_logInput[] | rollback_historyUncheckedCreateWithoutAudit_logInput[]
    connectOrCreate?: rollback_historyCreateOrConnectWithoutAudit_logInput | rollback_historyCreateOrConnectWithoutAudit_logInput[]
    upsert?: rollback_historyUpsertWithWhereUniqueWithoutAudit_logInput | rollback_historyUpsertWithWhereUniqueWithoutAudit_logInput[]
    createMany?: rollback_historyCreateManyAudit_logInputEnvelope
    set?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    disconnect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    delete?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    connect?: rollback_historyWhereUniqueInput | rollback_historyWhereUniqueInput[]
    update?: rollback_historyUpdateWithWhereUniqueWithoutAudit_logInput | rollback_historyUpdateWithWhereUniqueWithoutAudit_logInput[]
    updateMany?: rollback_historyUpdateManyWithWhereWithoutAudit_logInput | rollback_historyUpdateManyWithWhereWithoutAudit_logInput[]
    deleteMany?: rollback_historyScalarWhereInput | rollback_historyScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutPending_actions_initiatedInput = {
    create?: XOR<usersCreateWithoutPending_actions_initiatedInput, usersUncheckedCreateWithoutPending_actions_initiatedInput>
    connectOrCreate?: usersCreateOrConnectWithoutPending_actions_initiatedInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutPending_actions_approvedInput = {
    create?: XOR<usersCreateWithoutPending_actions_approvedInput, usersUncheckedCreateWithoutPending_actions_approvedInput>
    connectOrCreate?: usersCreateOrConnectWithoutPending_actions_approvedInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutPending_actions_initiatedNestedInput = {
    create?: XOR<usersCreateWithoutPending_actions_initiatedInput, usersUncheckedCreateWithoutPending_actions_initiatedInput>
    connectOrCreate?: usersCreateOrConnectWithoutPending_actions_initiatedInput
    upsert?: usersUpsertWithoutPending_actions_initiatedInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPending_actions_initiatedInput, usersUpdateWithoutPending_actions_initiatedInput>, usersUncheckedUpdateWithoutPending_actions_initiatedInput>
  }

  export type usersUpdateOneWithoutPending_actions_approvedNestedInput = {
    create?: XOR<usersCreateWithoutPending_actions_approvedInput, usersUncheckedCreateWithoutPending_actions_approvedInput>
    connectOrCreate?: usersCreateOrConnectWithoutPending_actions_approvedInput
    upsert?: usersUpsertWithoutPending_actions_approvedInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPending_actions_approvedInput, usersUpdateWithoutPending_actions_approvedInput>, usersUncheckedUpdateWithoutPending_actions_approvedInput>
  }

  export type audit_logCreateNestedOneWithoutRollback_historyInput = {
    create?: XOR<audit_logCreateWithoutRollback_historyInput, audit_logUncheckedCreateWithoutRollback_historyInput>
    connectOrCreate?: audit_logCreateOrConnectWithoutRollback_historyInput
    connect?: audit_logWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutRollback_history_initiatedInput = {
    create?: XOR<usersCreateWithoutRollback_history_initiatedInput, usersUncheckedCreateWithoutRollback_history_initiatedInput>
    connectOrCreate?: usersCreateOrConnectWithoutRollback_history_initiatedInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutRollback_history_approvedInput = {
    create?: XOR<usersCreateWithoutRollback_history_approvedInput, usersUncheckedCreateWithoutRollback_history_approvedInput>
    connectOrCreate?: usersCreateOrConnectWithoutRollback_history_approvedInput
    connect?: usersWhereUniqueInput
  }

  export type audit_logUpdateOneRequiredWithoutRollback_historyNestedInput = {
    create?: XOR<audit_logCreateWithoutRollback_historyInput, audit_logUncheckedCreateWithoutRollback_historyInput>
    connectOrCreate?: audit_logCreateOrConnectWithoutRollback_historyInput
    upsert?: audit_logUpsertWithoutRollback_historyInput
    connect?: audit_logWhereUniqueInput
    update?: XOR<XOR<audit_logUpdateToOneWithWhereWithoutRollback_historyInput, audit_logUpdateWithoutRollback_historyInput>, audit_logUncheckedUpdateWithoutRollback_historyInput>
  }

  export type usersUpdateOneRequiredWithoutRollback_history_initiatedNestedInput = {
    create?: XOR<usersCreateWithoutRollback_history_initiatedInput, usersUncheckedCreateWithoutRollback_history_initiatedInput>
    connectOrCreate?: usersCreateOrConnectWithoutRollback_history_initiatedInput
    upsert?: usersUpsertWithoutRollback_history_initiatedInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRollback_history_initiatedInput, usersUpdateWithoutRollback_history_initiatedInput>, usersUncheckedUpdateWithoutRollback_history_initiatedInput>
  }

  export type usersUpdateOneWithoutRollback_history_approvedNestedInput = {
    create?: XOR<usersCreateWithoutRollback_history_approvedInput, usersUncheckedCreateWithoutRollback_history_approvedInput>
    connectOrCreate?: usersCreateOrConnectWithoutRollback_history_approvedInput
    upsert?: usersUpsertWithoutRollback_history_approvedInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRollback_history_approvedInput, usersUpdateWithoutRollback_history_approvedInput>, usersUncheckedUpdateWithoutRollback_history_approvedInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type lasersCreateWithoutManufacturerInput = {
    model_name: string
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    wavelength_specs?: wavelength_specsCreateNestedOneWithoutLaserInput
    optical_specs?: optical_specsCreateNestedOneWithoutLaserInput
    stability_specs?: stability_specsCreateNestedOneWithoutLaserInput
    environmental_specs?: environmental_specsCreateNestedOneWithoutLaserInput
    pulse_specs?: pulse_specsCreateNestedOneWithoutLaserInput
  }

  export type lasersUncheckedCreateWithoutManufacturerInput = {
    id?: number
    model_name: string
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    wavelength_specs?: wavelength_specsUncheckedCreateNestedOneWithoutLaserInput
    optical_specs?: optical_specsUncheckedCreateNestedOneWithoutLaserInput
    stability_specs?: stability_specsUncheckedCreateNestedOneWithoutLaserInput
    environmental_specs?: environmental_specsUncheckedCreateNestedOneWithoutLaserInput
    pulse_specs?: pulse_specsUncheckedCreateNestedOneWithoutLaserInput
  }

  export type lasersCreateOrConnectWithoutManufacturerInput = {
    where: lasersWhereUniqueInput
    create: XOR<lasersCreateWithoutManufacturerInput, lasersUncheckedCreateWithoutManufacturerInput>
  }

  export type lasersCreateManyManufacturerInputEnvelope = {
    data: lasersCreateManyManufacturerInput | lasersCreateManyManufacturerInput[]
    skipDuplicates?: boolean
  }

  export type lasersUpsertWithWhereUniqueWithoutManufacturerInput = {
    where: lasersWhereUniqueInput
    update: XOR<lasersUpdateWithoutManufacturerInput, lasersUncheckedUpdateWithoutManufacturerInput>
    create: XOR<lasersCreateWithoutManufacturerInput, lasersUncheckedCreateWithoutManufacturerInput>
  }

  export type lasersUpdateWithWhereUniqueWithoutManufacturerInput = {
    where: lasersWhereUniqueInput
    data: XOR<lasersUpdateWithoutManufacturerInput, lasersUncheckedUpdateWithoutManufacturerInput>
  }

  export type lasersUpdateManyWithWhereWithoutManufacturerInput = {
    where: lasersScalarWhereInput
    data: XOR<lasersUpdateManyMutationInput, lasersUncheckedUpdateManyWithoutManufacturerInput>
  }

  export type lasersScalarWhereInput = {
    AND?: lasersScalarWhereInput | lasersScalarWhereInput[]
    OR?: lasersScalarWhereInput[]
    NOT?: lasersScalarWhereInput | lasersScalarWhereInput[]
    id?: IntFilter<"lasers"> | number
    model_name?: StringFilter<"lasers"> | string
    manufacturer_id?: IntFilter<"lasers"> | number
    laser_type?: StringFilter<"lasers"> | string
    modulation_type?: StringFilter<"lasers"> | string
    cooling_method?: StringNullableFilter<"lasers"> | string | null
    is_single_mode?: BoolFilter<"lasers"> | boolean
    power_output_w?: DecimalFilter<"lasers"> | Decimal | DecimalJsLike | number | string
    power_consumption_w?: DecimalNullableFilter<"lasers"> | Decimal | DecimalJsLike | number | string | null
    application?: StringNullableFilter<"lasers"> | string | null
    notes?: StringNullableFilter<"lasers"> | string | null
    created_at?: DateTimeNullableFilter<"lasers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"lasers"> | Date | string | null
  }

  export type manufacturersCreateWithoutLasersInput = {
    name: string
    country?: string | null
    website?: string | null
    contact_email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type manufacturersUncheckedCreateWithoutLasersInput = {
    id?: number
    name: string
    country?: string | null
    website?: string | null
    contact_email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type manufacturersCreateOrConnectWithoutLasersInput = {
    where: manufacturersWhereUniqueInput
    create: XOR<manufacturersCreateWithoutLasersInput, manufacturersUncheckedCreateWithoutLasersInput>
  }

  export type wavelength_specsCreateWithoutLaserInput = {
    wavelength_base_nm: Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type wavelength_specsUncheckedCreateWithoutLaserInput = {
    id?: number
    wavelength_base_nm: Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type wavelength_specsCreateOrConnectWithoutLaserInput = {
    where: wavelength_specsWhereUniqueInput
    create: XOR<wavelength_specsCreateWithoutLaserInput, wavelength_specsUncheckedCreateWithoutLaserInput>
  }

  export type optical_specsCreateWithoutLaserInput = {
    beam_divergence_mrad?: Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: Decimal | DecimalJsLike | number | string | null
    aperture_mm?: Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: Decimal | DecimalJsLike | number | string | null
    polarization?: string | null
    polarization_ratio_db?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type optical_specsUncheckedCreateWithoutLaserInput = {
    id?: number
    beam_divergence_mrad?: Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: Decimal | DecimalJsLike | number | string | null
    aperture_mm?: Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: Decimal | DecimalJsLike | number | string | null
    polarization?: string | null
    polarization_ratio_db?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type optical_specsCreateOrConnectWithoutLaserInput = {
    where: optical_specsWhereUniqueInput
    create: XOR<optical_specsCreateWithoutLaserInput, optical_specsUncheckedCreateWithoutLaserInput>
  }

  export type stability_specsCreateWithoutLaserInput = {
    power_stability_percent?: Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type stability_specsUncheckedCreateWithoutLaserInput = {
    id?: number
    power_stability_percent?: Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type stability_specsCreateOrConnectWithoutLaserInput = {
    where: stability_specsWhereUniqueInput
    create: XOR<stability_specsCreateWithoutLaserInput, stability_specsUncheckedCreateWithoutLaserInput>
  }

  export type environmental_specsCreateWithoutLaserInput = {
    operating_temp_min_c?: Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: Decimal | DecimalJsLike | number | string | null
    protection_class?: string | null
    created_at?: Date | string | null
  }

  export type environmental_specsUncheckedCreateWithoutLaserInput = {
    id?: number
    operating_temp_min_c?: Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: Decimal | DecimalJsLike | number | string | null
    protection_class?: string | null
    created_at?: Date | string | null
  }

  export type environmental_specsCreateOrConnectWithoutLaserInput = {
    where: environmental_specsWhereUniqueInput
    create: XOR<environmental_specsCreateWithoutLaserInput, environmental_specsUncheckedCreateWithoutLaserInput>
  }

  export type pulse_specsCreateWithoutLaserInput = {
    pulse_width_ns?: Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type pulse_specsUncheckedCreateWithoutLaserInput = {
    id?: number
    pulse_width_ns?: Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type pulse_specsCreateOrConnectWithoutLaserInput = {
    where: pulse_specsWhereUniqueInput
    create: XOR<pulse_specsCreateWithoutLaserInput, pulse_specsUncheckedCreateWithoutLaserInput>
  }

  export type manufacturersUpsertWithoutLasersInput = {
    update: XOR<manufacturersUpdateWithoutLasersInput, manufacturersUncheckedUpdateWithoutLasersInput>
    create: XOR<manufacturersCreateWithoutLasersInput, manufacturersUncheckedCreateWithoutLasersInput>
    where?: manufacturersWhereInput
  }

  export type manufacturersUpdateToOneWithWhereWithoutLasersInput = {
    where?: manufacturersWhereInput
    data: XOR<manufacturersUpdateWithoutLasersInput, manufacturersUncheckedUpdateWithoutLasersInput>
  }

  export type manufacturersUpdateWithoutLasersInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type manufacturersUncheckedUpdateWithoutLasersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wavelength_specsUpsertWithoutLaserInput = {
    update: XOR<wavelength_specsUpdateWithoutLaserInput, wavelength_specsUncheckedUpdateWithoutLaserInput>
    create: XOR<wavelength_specsCreateWithoutLaserInput, wavelength_specsUncheckedCreateWithoutLaserInput>
    where?: wavelength_specsWhereInput
  }

  export type wavelength_specsUpdateToOneWithWhereWithoutLaserInput = {
    where?: wavelength_specsWhereInput
    data: XOR<wavelength_specsUpdateWithoutLaserInput, wavelength_specsUncheckedUpdateWithoutLaserInput>
  }

  export type wavelength_specsUpdateWithoutLaserInput = {
    wavelength_base_nm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wavelength_specsUncheckedUpdateWithoutLaserInput = {
    id?: IntFieldUpdateOperationsInput | number
    wavelength_base_nm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wavelength_tolerance_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bandwidth_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fwhm_nm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wavelength_stability_nm_per_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wavelength_tuning_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type optical_specsUpsertWithoutLaserInput = {
    update: XOR<optical_specsUpdateWithoutLaserInput, optical_specsUncheckedUpdateWithoutLaserInput>
    create: XOR<optical_specsCreateWithoutLaserInput, optical_specsUncheckedCreateWithoutLaserInput>
    where?: optical_specsWhereInput
  }

  export type optical_specsUpdateToOneWithWhereWithoutLaserInput = {
    where?: optical_specsWhereInput
    data: XOR<optical_specsUpdateWithoutLaserInput, optical_specsUncheckedUpdateWithoutLaserInput>
  }

  export type optical_specsUpdateWithoutLaserInput = {
    beam_divergence_mrad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aperture_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polarization?: NullableStringFieldUpdateOperationsInput | string | null
    polarization_ratio_db?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type optical_specsUncheckedUpdateWithoutLaserInput = {
    id?: IntFieldUpdateOperationsInput | number
    beam_divergence_mrad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    beam_quality_m2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aperture_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    numerical_aperture?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polarization?: NullableStringFieldUpdateOperationsInput | string | null
    polarization_ratio_db?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stability_specsUpsertWithoutLaserInput = {
    update: XOR<stability_specsUpdateWithoutLaserInput, stability_specsUncheckedUpdateWithoutLaserInput>
    create: XOR<stability_specsCreateWithoutLaserInput, stability_specsUncheckedCreateWithoutLaserInput>
    where?: stability_specsWhereInput
  }

  export type stability_specsUpdateToOneWithWhereWithoutLaserInput = {
    where?: stability_specsWhereInput
    data: XOR<stability_specsUpdateWithoutLaserInput, stability_specsUncheckedUpdateWithoutLaserInput>
  }

  export type stability_specsUpdateWithoutLaserInput = {
    power_stability_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stability_specsUncheckedUpdateWithoutLaserInput = {
    id?: IntFieldUpdateOperationsInput | number
    power_stability_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pointing_stability_urad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    temperature_stability_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    warmup_time_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type environmental_specsUpsertWithoutLaserInput = {
    update: XOR<environmental_specsUpdateWithoutLaserInput, environmental_specsUncheckedUpdateWithoutLaserInput>
    create: XOR<environmental_specsCreateWithoutLaserInput, environmental_specsUncheckedCreateWithoutLaserInput>
    where?: environmental_specsWhereInput
  }

  export type environmental_specsUpdateToOneWithWhereWithoutLaserInput = {
    where?: environmental_specsWhereInput
    data: XOR<environmental_specsUpdateWithoutLaserInput, environmental_specsUncheckedUpdateWithoutLaserInput>
  }

  export type environmental_specsUpdateWithoutLaserInput = {
    operating_temp_min_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protection_class?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type environmental_specsUncheckedUpdateWithoutLaserInput = {
    id?: IntFieldUpdateOperationsInput | number
    operating_temp_min_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    operating_temp_max_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    storage_temp_min_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    storage_temp_max_c?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humidity_max_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protection_class?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pulse_specsUpsertWithoutLaserInput = {
    update: XOR<pulse_specsUpdateWithoutLaserInput, pulse_specsUncheckedUpdateWithoutLaserInput>
    create: XOR<pulse_specsCreateWithoutLaserInput, pulse_specsUncheckedCreateWithoutLaserInput>
    where?: pulse_specsWhereInput
  }

  export type pulse_specsUpdateToOneWithWhereWithoutLaserInput = {
    where?: pulse_specsWhereInput
    data: XOR<pulse_specsUpdateWithoutLaserInput, pulse_specsUncheckedUpdateWithoutLaserInput>
  }

  export type pulse_specsUpdateWithoutLaserInput = {
    pulse_width_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pulse_specsUncheckedUpdateWithoutLaserInput = {
    id?: IntFieldUpdateOperationsInput | number
    pulse_width_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pulse_energy_j?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rep_rate_hz?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duty_cycle_percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rise_time_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fall_time_ns?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lasersCreateWithoutWavelength_specsInput = {
    model_name: string
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    manufacturer: manufacturersCreateNestedOneWithoutLasersInput
    optical_specs?: optical_specsCreateNestedOneWithoutLaserInput
    stability_specs?: stability_specsCreateNestedOneWithoutLaserInput
    environmental_specs?: environmental_specsCreateNestedOneWithoutLaserInput
    pulse_specs?: pulse_specsCreateNestedOneWithoutLaserInput
  }

  export type lasersUncheckedCreateWithoutWavelength_specsInput = {
    id?: number
    model_name: string
    manufacturer_id: number
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    optical_specs?: optical_specsUncheckedCreateNestedOneWithoutLaserInput
    stability_specs?: stability_specsUncheckedCreateNestedOneWithoutLaserInput
    environmental_specs?: environmental_specsUncheckedCreateNestedOneWithoutLaserInput
    pulse_specs?: pulse_specsUncheckedCreateNestedOneWithoutLaserInput
  }

  export type lasersCreateOrConnectWithoutWavelength_specsInput = {
    where: lasersWhereUniqueInput
    create: XOR<lasersCreateWithoutWavelength_specsInput, lasersUncheckedCreateWithoutWavelength_specsInput>
  }

  export type lasersUpsertWithoutWavelength_specsInput = {
    update: XOR<lasersUpdateWithoutWavelength_specsInput, lasersUncheckedUpdateWithoutWavelength_specsInput>
    create: XOR<lasersCreateWithoutWavelength_specsInput, lasersUncheckedCreateWithoutWavelength_specsInput>
    where?: lasersWhereInput
  }

  export type lasersUpdateToOneWithWhereWithoutWavelength_specsInput = {
    where?: lasersWhereInput
    data: XOR<lasersUpdateWithoutWavelength_specsInput, lasersUncheckedUpdateWithoutWavelength_specsInput>
  }

  export type lasersUpdateWithoutWavelength_specsInput = {
    model_name?: StringFieldUpdateOperationsInput | string
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    manufacturer?: manufacturersUpdateOneRequiredWithoutLasersNestedInput
    optical_specs?: optical_specsUpdateOneWithoutLaserNestedInput
    stability_specs?: stability_specsUpdateOneWithoutLaserNestedInput
    environmental_specs?: environmental_specsUpdateOneWithoutLaserNestedInput
    pulse_specs?: pulse_specsUpdateOneWithoutLaserNestedInput
  }

  export type lasersUncheckedUpdateWithoutWavelength_specsInput = {
    id?: IntFieldUpdateOperationsInput | number
    model_name?: StringFieldUpdateOperationsInput | string
    manufacturer_id?: IntFieldUpdateOperationsInput | number
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optical_specs?: optical_specsUncheckedUpdateOneWithoutLaserNestedInput
    stability_specs?: stability_specsUncheckedUpdateOneWithoutLaserNestedInput
    environmental_specs?: environmental_specsUncheckedUpdateOneWithoutLaserNestedInput
    pulse_specs?: pulse_specsUncheckedUpdateOneWithoutLaserNestedInput
  }

  export type lasersCreateWithoutOptical_specsInput = {
    model_name: string
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    manufacturer: manufacturersCreateNestedOneWithoutLasersInput
    wavelength_specs?: wavelength_specsCreateNestedOneWithoutLaserInput
    stability_specs?: stability_specsCreateNestedOneWithoutLaserInput
    environmental_specs?: environmental_specsCreateNestedOneWithoutLaserInput
    pulse_specs?: pulse_specsCreateNestedOneWithoutLaserInput
  }

  export type lasersUncheckedCreateWithoutOptical_specsInput = {
    id?: number
    model_name: string
    manufacturer_id: number
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    wavelength_specs?: wavelength_specsUncheckedCreateNestedOneWithoutLaserInput
    stability_specs?: stability_specsUncheckedCreateNestedOneWithoutLaserInput
    environmental_specs?: environmental_specsUncheckedCreateNestedOneWithoutLaserInput
    pulse_specs?: pulse_specsUncheckedCreateNestedOneWithoutLaserInput
  }

  export type lasersCreateOrConnectWithoutOptical_specsInput = {
    where: lasersWhereUniqueInput
    create: XOR<lasersCreateWithoutOptical_specsInput, lasersUncheckedCreateWithoutOptical_specsInput>
  }

  export type lasersUpsertWithoutOptical_specsInput = {
    update: XOR<lasersUpdateWithoutOptical_specsInput, lasersUncheckedUpdateWithoutOptical_specsInput>
    create: XOR<lasersCreateWithoutOptical_specsInput, lasersUncheckedCreateWithoutOptical_specsInput>
    where?: lasersWhereInput
  }

  export type lasersUpdateToOneWithWhereWithoutOptical_specsInput = {
    where?: lasersWhereInput
    data: XOR<lasersUpdateWithoutOptical_specsInput, lasersUncheckedUpdateWithoutOptical_specsInput>
  }

  export type lasersUpdateWithoutOptical_specsInput = {
    model_name?: StringFieldUpdateOperationsInput | string
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    manufacturer?: manufacturersUpdateOneRequiredWithoutLasersNestedInput
    wavelength_specs?: wavelength_specsUpdateOneWithoutLaserNestedInput
    stability_specs?: stability_specsUpdateOneWithoutLaserNestedInput
    environmental_specs?: environmental_specsUpdateOneWithoutLaserNestedInput
    pulse_specs?: pulse_specsUpdateOneWithoutLaserNestedInput
  }

  export type lasersUncheckedUpdateWithoutOptical_specsInput = {
    id?: IntFieldUpdateOperationsInput | number
    model_name?: StringFieldUpdateOperationsInput | string
    manufacturer_id?: IntFieldUpdateOperationsInput | number
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wavelength_specs?: wavelength_specsUncheckedUpdateOneWithoutLaserNestedInput
    stability_specs?: stability_specsUncheckedUpdateOneWithoutLaserNestedInput
    environmental_specs?: environmental_specsUncheckedUpdateOneWithoutLaserNestedInput
    pulse_specs?: pulse_specsUncheckedUpdateOneWithoutLaserNestedInput
  }

  export type lasersCreateWithoutStability_specsInput = {
    model_name: string
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    manufacturer: manufacturersCreateNestedOneWithoutLasersInput
    wavelength_specs?: wavelength_specsCreateNestedOneWithoutLaserInput
    optical_specs?: optical_specsCreateNestedOneWithoutLaserInput
    environmental_specs?: environmental_specsCreateNestedOneWithoutLaserInput
    pulse_specs?: pulse_specsCreateNestedOneWithoutLaserInput
  }

  export type lasersUncheckedCreateWithoutStability_specsInput = {
    id?: number
    model_name: string
    manufacturer_id: number
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    wavelength_specs?: wavelength_specsUncheckedCreateNestedOneWithoutLaserInput
    optical_specs?: optical_specsUncheckedCreateNestedOneWithoutLaserInput
    environmental_specs?: environmental_specsUncheckedCreateNestedOneWithoutLaserInput
    pulse_specs?: pulse_specsUncheckedCreateNestedOneWithoutLaserInput
  }

  export type lasersCreateOrConnectWithoutStability_specsInput = {
    where: lasersWhereUniqueInput
    create: XOR<lasersCreateWithoutStability_specsInput, lasersUncheckedCreateWithoutStability_specsInput>
  }

  export type lasersUpsertWithoutStability_specsInput = {
    update: XOR<lasersUpdateWithoutStability_specsInput, lasersUncheckedUpdateWithoutStability_specsInput>
    create: XOR<lasersCreateWithoutStability_specsInput, lasersUncheckedCreateWithoutStability_specsInput>
    where?: lasersWhereInput
  }

  export type lasersUpdateToOneWithWhereWithoutStability_specsInput = {
    where?: lasersWhereInput
    data: XOR<lasersUpdateWithoutStability_specsInput, lasersUncheckedUpdateWithoutStability_specsInput>
  }

  export type lasersUpdateWithoutStability_specsInput = {
    model_name?: StringFieldUpdateOperationsInput | string
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    manufacturer?: manufacturersUpdateOneRequiredWithoutLasersNestedInput
    wavelength_specs?: wavelength_specsUpdateOneWithoutLaserNestedInput
    optical_specs?: optical_specsUpdateOneWithoutLaserNestedInput
    environmental_specs?: environmental_specsUpdateOneWithoutLaserNestedInput
    pulse_specs?: pulse_specsUpdateOneWithoutLaserNestedInput
  }

  export type lasersUncheckedUpdateWithoutStability_specsInput = {
    id?: IntFieldUpdateOperationsInput | number
    model_name?: StringFieldUpdateOperationsInput | string
    manufacturer_id?: IntFieldUpdateOperationsInput | number
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wavelength_specs?: wavelength_specsUncheckedUpdateOneWithoutLaserNestedInput
    optical_specs?: optical_specsUncheckedUpdateOneWithoutLaserNestedInput
    environmental_specs?: environmental_specsUncheckedUpdateOneWithoutLaserNestedInput
    pulse_specs?: pulse_specsUncheckedUpdateOneWithoutLaserNestedInput
  }

  export type lasersCreateWithoutEnvironmental_specsInput = {
    model_name: string
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    manufacturer: manufacturersCreateNestedOneWithoutLasersInput
    wavelength_specs?: wavelength_specsCreateNestedOneWithoutLaserInput
    optical_specs?: optical_specsCreateNestedOneWithoutLaserInput
    stability_specs?: stability_specsCreateNestedOneWithoutLaserInput
    pulse_specs?: pulse_specsCreateNestedOneWithoutLaserInput
  }

  export type lasersUncheckedCreateWithoutEnvironmental_specsInput = {
    id?: number
    model_name: string
    manufacturer_id: number
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    wavelength_specs?: wavelength_specsUncheckedCreateNestedOneWithoutLaserInput
    optical_specs?: optical_specsUncheckedCreateNestedOneWithoutLaserInput
    stability_specs?: stability_specsUncheckedCreateNestedOneWithoutLaserInput
    pulse_specs?: pulse_specsUncheckedCreateNestedOneWithoutLaserInput
  }

  export type lasersCreateOrConnectWithoutEnvironmental_specsInput = {
    where: lasersWhereUniqueInput
    create: XOR<lasersCreateWithoutEnvironmental_specsInput, lasersUncheckedCreateWithoutEnvironmental_specsInput>
  }

  export type lasersUpsertWithoutEnvironmental_specsInput = {
    update: XOR<lasersUpdateWithoutEnvironmental_specsInput, lasersUncheckedUpdateWithoutEnvironmental_specsInput>
    create: XOR<lasersCreateWithoutEnvironmental_specsInput, lasersUncheckedCreateWithoutEnvironmental_specsInput>
    where?: lasersWhereInput
  }

  export type lasersUpdateToOneWithWhereWithoutEnvironmental_specsInput = {
    where?: lasersWhereInput
    data: XOR<lasersUpdateWithoutEnvironmental_specsInput, lasersUncheckedUpdateWithoutEnvironmental_specsInput>
  }

  export type lasersUpdateWithoutEnvironmental_specsInput = {
    model_name?: StringFieldUpdateOperationsInput | string
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    manufacturer?: manufacturersUpdateOneRequiredWithoutLasersNestedInput
    wavelength_specs?: wavelength_specsUpdateOneWithoutLaserNestedInput
    optical_specs?: optical_specsUpdateOneWithoutLaserNestedInput
    stability_specs?: stability_specsUpdateOneWithoutLaserNestedInput
    pulse_specs?: pulse_specsUpdateOneWithoutLaserNestedInput
  }

  export type lasersUncheckedUpdateWithoutEnvironmental_specsInput = {
    id?: IntFieldUpdateOperationsInput | number
    model_name?: StringFieldUpdateOperationsInput | string
    manufacturer_id?: IntFieldUpdateOperationsInput | number
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wavelength_specs?: wavelength_specsUncheckedUpdateOneWithoutLaserNestedInput
    optical_specs?: optical_specsUncheckedUpdateOneWithoutLaserNestedInput
    stability_specs?: stability_specsUncheckedUpdateOneWithoutLaserNestedInput
    pulse_specs?: pulse_specsUncheckedUpdateOneWithoutLaserNestedInput
  }

  export type lasersCreateWithoutPulse_specsInput = {
    model_name: string
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    manufacturer: manufacturersCreateNestedOneWithoutLasersInput
    wavelength_specs?: wavelength_specsCreateNestedOneWithoutLaserInput
    optical_specs?: optical_specsCreateNestedOneWithoutLaserInput
    stability_specs?: stability_specsCreateNestedOneWithoutLaserInput
    environmental_specs?: environmental_specsCreateNestedOneWithoutLaserInput
  }

  export type lasersUncheckedCreateWithoutPulse_specsInput = {
    id?: number
    model_name: string
    manufacturer_id: number
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    wavelength_specs?: wavelength_specsUncheckedCreateNestedOneWithoutLaserInput
    optical_specs?: optical_specsUncheckedCreateNestedOneWithoutLaserInput
    stability_specs?: stability_specsUncheckedCreateNestedOneWithoutLaserInput
    environmental_specs?: environmental_specsUncheckedCreateNestedOneWithoutLaserInput
  }

  export type lasersCreateOrConnectWithoutPulse_specsInput = {
    where: lasersWhereUniqueInput
    create: XOR<lasersCreateWithoutPulse_specsInput, lasersUncheckedCreateWithoutPulse_specsInput>
  }

  export type lasersUpsertWithoutPulse_specsInput = {
    update: XOR<lasersUpdateWithoutPulse_specsInput, lasersUncheckedUpdateWithoutPulse_specsInput>
    create: XOR<lasersCreateWithoutPulse_specsInput, lasersUncheckedCreateWithoutPulse_specsInput>
    where?: lasersWhereInput
  }

  export type lasersUpdateToOneWithWhereWithoutPulse_specsInput = {
    where?: lasersWhereInput
    data: XOR<lasersUpdateWithoutPulse_specsInput, lasersUncheckedUpdateWithoutPulse_specsInput>
  }

  export type lasersUpdateWithoutPulse_specsInput = {
    model_name?: StringFieldUpdateOperationsInput | string
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    manufacturer?: manufacturersUpdateOneRequiredWithoutLasersNestedInput
    wavelength_specs?: wavelength_specsUpdateOneWithoutLaserNestedInput
    optical_specs?: optical_specsUpdateOneWithoutLaserNestedInput
    stability_specs?: stability_specsUpdateOneWithoutLaserNestedInput
    environmental_specs?: environmental_specsUpdateOneWithoutLaserNestedInput
  }

  export type lasersUncheckedUpdateWithoutPulse_specsInput = {
    id?: IntFieldUpdateOperationsInput | number
    model_name?: StringFieldUpdateOperationsInput | string
    manufacturer_id?: IntFieldUpdateOperationsInput | number
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wavelength_specs?: wavelength_specsUncheckedUpdateOneWithoutLaserNestedInput
    optical_specs?: optical_specsUncheckedUpdateOneWithoutLaserNestedInput
    stability_specs?: stability_specsUncheckedUpdateOneWithoutLaserNestedInput
    environmental_specs?: environmental_specsUncheckedUpdateOneWithoutLaserNestedInput
  }

  export type access_codesCreateWithoutCreatorInput = {
    code_hash: string
    color_code: string
    role: string
    expires_at?: Date | string | null
    max_uses?: number | null
    current_uses?: number
    is_active?: boolean
    notes?: string | null
    created_at?: Date | string | null
  }

  export type access_codesUncheckedCreateWithoutCreatorInput = {
    id?: number
    code_hash: string
    color_code: string
    role: string
    expires_at?: Date | string | null
    max_uses?: number | null
    current_uses?: number
    is_active?: boolean
    notes?: string | null
    created_at?: Date | string | null
  }

  export type access_codesCreateOrConnectWithoutCreatorInput = {
    where: access_codesWhereUniqueInput
    create: XOR<access_codesCreateWithoutCreatorInput, access_codesUncheckedCreateWithoutCreatorInput>
  }

  export type access_codesCreateManyCreatorInputEnvelope = {
    data: access_codesCreateManyCreatorInput | access_codesCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type audit_logCreateWithoutUserInput = {
    table_name: string
    record_id?: number | null
    action: string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    created_at?: Date | string | null
    rollback_history?: rollback_historyCreateNestedManyWithoutAudit_logInput
  }

  export type audit_logUncheckedCreateWithoutUserInput = {
    id?: number
    table_name: string
    record_id?: number | null
    action: string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    created_at?: Date | string | null
    rollback_history?: rollback_historyUncheckedCreateNestedManyWithoutAudit_logInput
  }

  export type audit_logCreateOrConnectWithoutUserInput = {
    where: audit_logWhereUniqueInput
    create: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput>
  }

  export type audit_logCreateManyUserInputEnvelope = {
    data: audit_logCreateManyUserInput | audit_logCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type pending_actionsCreateWithoutInitiatorInput = {
    action_type: string
    target_table: string
    target_record_id?: number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    status?: string
    expires_at?: Date | string | null
    approved_at?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string | null
    approver?: usersCreateNestedOneWithoutPending_actions_approvedInput
  }

  export type pending_actionsUncheckedCreateWithoutInitiatorInput = {
    id?: number
    action_type: string
    target_table: string
    target_record_id?: number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    status?: string
    expires_at?: Date | string | null
    approved_by?: number | null
    approved_at?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type pending_actionsCreateOrConnectWithoutInitiatorInput = {
    where: pending_actionsWhereUniqueInput
    create: XOR<pending_actionsCreateWithoutInitiatorInput, pending_actionsUncheckedCreateWithoutInitiatorInput>
  }

  export type pending_actionsCreateManyInitiatorInputEnvelope = {
    data: pending_actionsCreateManyInitiatorInput | pending_actionsCreateManyInitiatorInput[]
    skipDuplicates?: boolean
  }

  export type pending_actionsCreateWithoutApproverInput = {
    action_type: string
    target_table: string
    target_record_id?: number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    status?: string
    expires_at?: Date | string | null
    approved_at?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string | null
    initiator: usersCreateNestedOneWithoutPending_actions_initiatedInput
  }

  export type pending_actionsUncheckedCreateWithoutApproverInput = {
    id?: number
    action_type: string
    initiated_by: number
    target_table: string
    target_record_id?: number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    status?: string
    expires_at?: Date | string | null
    approved_at?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type pending_actionsCreateOrConnectWithoutApproverInput = {
    where: pending_actionsWhereUniqueInput
    create: XOR<pending_actionsCreateWithoutApproverInput, pending_actionsUncheckedCreateWithoutApproverInput>
  }

  export type pending_actionsCreateManyApproverInputEnvelope = {
    data: pending_actionsCreateManyApproverInput | pending_actionsCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type rollback_historyCreateWithoutInitiatorInput = {
    status: string
    error_message?: string | null
    created_at?: Date | string | null
    audit_log: audit_logCreateNestedOneWithoutRollback_historyInput
    approver?: usersCreateNestedOneWithoutRollback_history_approvedInput
  }

  export type rollback_historyUncheckedCreateWithoutInitiatorInput = {
    id?: number
    audit_log_id: number
    approved_by?: number | null
    status: string
    error_message?: string | null
    created_at?: Date | string | null
  }

  export type rollback_historyCreateOrConnectWithoutInitiatorInput = {
    where: rollback_historyWhereUniqueInput
    create: XOR<rollback_historyCreateWithoutInitiatorInput, rollback_historyUncheckedCreateWithoutInitiatorInput>
  }

  export type rollback_historyCreateManyInitiatorInputEnvelope = {
    data: rollback_historyCreateManyInitiatorInput | rollback_historyCreateManyInitiatorInput[]
    skipDuplicates?: boolean
  }

  export type rollback_historyCreateWithoutApproverInput = {
    status: string
    error_message?: string | null
    created_at?: Date | string | null
    audit_log: audit_logCreateNestedOneWithoutRollback_historyInput
    initiator: usersCreateNestedOneWithoutRollback_history_initiatedInput
  }

  export type rollback_historyUncheckedCreateWithoutApproverInput = {
    id?: number
    audit_log_id: number
    initiated_by: number
    status: string
    error_message?: string | null
    created_at?: Date | string | null
  }

  export type rollback_historyCreateOrConnectWithoutApproverInput = {
    where: rollback_historyWhereUniqueInput
    create: XOR<rollback_historyCreateWithoutApproverInput, rollback_historyUncheckedCreateWithoutApproverInput>
  }

  export type rollback_historyCreateManyApproverInputEnvelope = {
    data: rollback_historyCreateManyApproverInput | rollback_historyCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type access_codesUpsertWithWhereUniqueWithoutCreatorInput = {
    where: access_codesWhereUniqueInput
    update: XOR<access_codesUpdateWithoutCreatorInput, access_codesUncheckedUpdateWithoutCreatorInput>
    create: XOR<access_codesCreateWithoutCreatorInput, access_codesUncheckedCreateWithoutCreatorInput>
  }

  export type access_codesUpdateWithWhereUniqueWithoutCreatorInput = {
    where: access_codesWhereUniqueInput
    data: XOR<access_codesUpdateWithoutCreatorInput, access_codesUncheckedUpdateWithoutCreatorInput>
  }

  export type access_codesUpdateManyWithWhereWithoutCreatorInput = {
    where: access_codesScalarWhereInput
    data: XOR<access_codesUpdateManyMutationInput, access_codesUncheckedUpdateManyWithoutCreatorInput>
  }

  export type access_codesScalarWhereInput = {
    AND?: access_codesScalarWhereInput | access_codesScalarWhereInput[]
    OR?: access_codesScalarWhereInput[]
    NOT?: access_codesScalarWhereInput | access_codesScalarWhereInput[]
    id?: IntFilter<"access_codes"> | number
    code_hash?: StringFilter<"access_codes"> | string
    color_code?: StringFilter<"access_codes"> | string
    role?: StringFilter<"access_codes"> | string
    created_by?: IntFilter<"access_codes"> | number
    expires_at?: DateTimeNullableFilter<"access_codes"> | Date | string | null
    max_uses?: IntNullableFilter<"access_codes"> | number | null
    current_uses?: IntFilter<"access_codes"> | number
    is_active?: BoolFilter<"access_codes"> | boolean
    notes?: StringNullableFilter<"access_codes"> | string | null
    created_at?: DateTimeNullableFilter<"access_codes"> | Date | string | null
  }

  export type audit_logUpsertWithWhereUniqueWithoutUserInput = {
    where: audit_logWhereUniqueInput
    update: XOR<audit_logUpdateWithoutUserInput, audit_logUncheckedUpdateWithoutUserInput>
    create: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput>
  }

  export type audit_logUpdateWithWhereUniqueWithoutUserInput = {
    where: audit_logWhereUniqueInput
    data: XOR<audit_logUpdateWithoutUserInput, audit_logUncheckedUpdateWithoutUserInput>
  }

  export type audit_logUpdateManyWithWhereWithoutUserInput = {
    where: audit_logScalarWhereInput
    data: XOR<audit_logUpdateManyMutationInput, audit_logUncheckedUpdateManyWithoutUserInput>
  }

  export type audit_logScalarWhereInput = {
    AND?: audit_logScalarWhereInput | audit_logScalarWhereInput[]
    OR?: audit_logScalarWhereInput[]
    NOT?: audit_logScalarWhereInput | audit_logScalarWhereInput[]
    id?: IntFilter<"audit_log"> | number
    user_id?: IntNullableFilter<"audit_log"> | number | null
    table_name?: StringFilter<"audit_log"> | string
    record_id?: IntNullableFilter<"audit_log"> | number | null
    action?: StringFilter<"audit_log"> | string
    old_data?: JsonNullableFilter<"audit_log">
    new_data?: JsonNullableFilter<"audit_log">
    ip_address?: StringNullableFilter<"audit_log"> | string | null
    created_at?: DateTimeNullableFilter<"audit_log"> | Date | string | null
  }

  export type pending_actionsUpsertWithWhereUniqueWithoutInitiatorInput = {
    where: pending_actionsWhereUniqueInput
    update: XOR<pending_actionsUpdateWithoutInitiatorInput, pending_actionsUncheckedUpdateWithoutInitiatorInput>
    create: XOR<pending_actionsCreateWithoutInitiatorInput, pending_actionsUncheckedCreateWithoutInitiatorInput>
  }

  export type pending_actionsUpdateWithWhereUniqueWithoutInitiatorInput = {
    where: pending_actionsWhereUniqueInput
    data: XOR<pending_actionsUpdateWithoutInitiatorInput, pending_actionsUncheckedUpdateWithoutInitiatorInput>
  }

  export type pending_actionsUpdateManyWithWhereWithoutInitiatorInput = {
    where: pending_actionsScalarWhereInput
    data: XOR<pending_actionsUpdateManyMutationInput, pending_actionsUncheckedUpdateManyWithoutInitiatorInput>
  }

  export type pending_actionsScalarWhereInput = {
    AND?: pending_actionsScalarWhereInput | pending_actionsScalarWhereInput[]
    OR?: pending_actionsScalarWhereInput[]
    NOT?: pending_actionsScalarWhereInput | pending_actionsScalarWhereInput[]
    id?: IntFilter<"pending_actions"> | number
    action_type?: StringFilter<"pending_actions"> | string
    initiated_by?: IntFilter<"pending_actions"> | number
    target_table?: StringFilter<"pending_actions"> | string
    target_record_id?: IntNullableFilter<"pending_actions"> | number | null
    action_data?: JsonNullableFilter<"pending_actions">
    reason?: StringNullableFilter<"pending_actions"> | string | null
    status?: StringFilter<"pending_actions"> | string
    expires_at?: DateTimeNullableFilter<"pending_actions"> | Date | string | null
    approved_by?: IntNullableFilter<"pending_actions"> | number | null
    approved_at?: DateTimeNullableFilter<"pending_actions"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"pending_actions"> | Date | string | null
    created_at?: DateTimeNullableFilter<"pending_actions"> | Date | string | null
  }

  export type pending_actionsUpsertWithWhereUniqueWithoutApproverInput = {
    where: pending_actionsWhereUniqueInput
    update: XOR<pending_actionsUpdateWithoutApproverInput, pending_actionsUncheckedUpdateWithoutApproverInput>
    create: XOR<pending_actionsCreateWithoutApproverInput, pending_actionsUncheckedCreateWithoutApproverInput>
  }

  export type pending_actionsUpdateWithWhereUniqueWithoutApproverInput = {
    where: pending_actionsWhereUniqueInput
    data: XOR<pending_actionsUpdateWithoutApproverInput, pending_actionsUncheckedUpdateWithoutApproverInput>
  }

  export type pending_actionsUpdateManyWithWhereWithoutApproverInput = {
    where: pending_actionsScalarWhereInput
    data: XOR<pending_actionsUpdateManyMutationInput, pending_actionsUncheckedUpdateManyWithoutApproverInput>
  }

  export type rollback_historyUpsertWithWhereUniqueWithoutInitiatorInput = {
    where: rollback_historyWhereUniqueInput
    update: XOR<rollback_historyUpdateWithoutInitiatorInput, rollback_historyUncheckedUpdateWithoutInitiatorInput>
    create: XOR<rollback_historyCreateWithoutInitiatorInput, rollback_historyUncheckedCreateWithoutInitiatorInput>
  }

  export type rollback_historyUpdateWithWhereUniqueWithoutInitiatorInput = {
    where: rollback_historyWhereUniqueInput
    data: XOR<rollback_historyUpdateWithoutInitiatorInput, rollback_historyUncheckedUpdateWithoutInitiatorInput>
  }

  export type rollback_historyUpdateManyWithWhereWithoutInitiatorInput = {
    where: rollback_historyScalarWhereInput
    data: XOR<rollback_historyUpdateManyMutationInput, rollback_historyUncheckedUpdateManyWithoutInitiatorInput>
  }

  export type rollback_historyScalarWhereInput = {
    AND?: rollback_historyScalarWhereInput | rollback_historyScalarWhereInput[]
    OR?: rollback_historyScalarWhereInput[]
    NOT?: rollback_historyScalarWhereInput | rollback_historyScalarWhereInput[]
    id?: IntFilter<"rollback_history"> | number
    audit_log_id?: IntFilter<"rollback_history"> | number
    initiated_by?: IntFilter<"rollback_history"> | number
    approved_by?: IntNullableFilter<"rollback_history"> | number | null
    status?: StringFilter<"rollback_history"> | string
    error_message?: StringNullableFilter<"rollback_history"> | string | null
    created_at?: DateTimeNullableFilter<"rollback_history"> | Date | string | null
  }

  export type rollback_historyUpsertWithWhereUniqueWithoutApproverInput = {
    where: rollback_historyWhereUniqueInput
    update: XOR<rollback_historyUpdateWithoutApproverInput, rollback_historyUncheckedUpdateWithoutApproverInput>
    create: XOR<rollback_historyCreateWithoutApproverInput, rollback_historyUncheckedCreateWithoutApproverInput>
  }

  export type rollback_historyUpdateWithWhereUniqueWithoutApproverInput = {
    where: rollback_historyWhereUniqueInput
    data: XOR<rollback_historyUpdateWithoutApproverInput, rollback_historyUncheckedUpdateWithoutApproverInput>
  }

  export type rollback_historyUpdateManyWithWhereWithoutApproverInput = {
    where: rollback_historyScalarWhereInput
    data: XOR<rollback_historyUpdateManyMutationInput, rollback_historyUncheckedUpdateManyWithoutApproverInput>
  }

  export type usersCreateWithoutAccess_codesInput = {
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    audit_log?: audit_logCreateNestedManyWithoutUserInput
    pending_actions_initiated?: pending_actionsCreateNestedManyWithoutInitiatorInput
    pending_actions_approved?: pending_actionsCreateNestedManyWithoutApproverInput
    rollback_history_initiated?: rollback_historyCreateNestedManyWithoutInitiatorInput
    rollback_history_approved?: rollback_historyCreateNestedManyWithoutApproverInput
  }

  export type usersUncheckedCreateWithoutAccess_codesInput = {
    id?: number
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput
    pending_actions_initiated?: pending_actionsUncheckedCreateNestedManyWithoutInitiatorInput
    pending_actions_approved?: pending_actionsUncheckedCreateNestedManyWithoutApproverInput
    rollback_history_initiated?: rollback_historyUncheckedCreateNestedManyWithoutInitiatorInput
    rollback_history_approved?: rollback_historyUncheckedCreateNestedManyWithoutApproverInput
  }

  export type usersCreateOrConnectWithoutAccess_codesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAccess_codesInput, usersUncheckedCreateWithoutAccess_codesInput>
  }

  export type usersUpsertWithoutAccess_codesInput = {
    update: XOR<usersUpdateWithoutAccess_codesInput, usersUncheckedUpdateWithoutAccess_codesInput>
    create: XOR<usersCreateWithoutAccess_codesInput, usersUncheckedCreateWithoutAccess_codesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAccess_codesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAccess_codesInput, usersUncheckedUpdateWithoutAccess_codesInput>
  }

  export type usersUpdateWithoutAccess_codesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUpdateManyWithoutUserNestedInput
    pending_actions_initiated?: pending_actionsUpdateManyWithoutInitiatorNestedInput
    pending_actions_approved?: pending_actionsUpdateManyWithoutApproverNestedInput
    rollback_history_initiated?: rollback_historyUpdateManyWithoutInitiatorNestedInput
    rollback_history_approved?: rollback_historyUpdateManyWithoutApproverNestedInput
  }

  export type usersUncheckedUpdateWithoutAccess_codesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput
    pending_actions_initiated?: pending_actionsUncheckedUpdateManyWithoutInitiatorNestedInput
    pending_actions_approved?: pending_actionsUncheckedUpdateManyWithoutApproverNestedInput
    rollback_history_initiated?: rollback_historyUncheckedUpdateManyWithoutInitiatorNestedInput
    rollback_history_approved?: rollback_historyUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type usersCreateWithoutAudit_logInput = {
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    access_codes?: access_codesCreateNestedManyWithoutCreatorInput
    pending_actions_initiated?: pending_actionsCreateNestedManyWithoutInitiatorInput
    pending_actions_approved?: pending_actionsCreateNestedManyWithoutApproverInput
    rollback_history_initiated?: rollback_historyCreateNestedManyWithoutInitiatorInput
    rollback_history_approved?: rollback_historyCreateNestedManyWithoutApproverInput
  }

  export type usersUncheckedCreateWithoutAudit_logInput = {
    id?: number
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    access_codes?: access_codesUncheckedCreateNestedManyWithoutCreatorInput
    pending_actions_initiated?: pending_actionsUncheckedCreateNestedManyWithoutInitiatorInput
    pending_actions_approved?: pending_actionsUncheckedCreateNestedManyWithoutApproverInput
    rollback_history_initiated?: rollback_historyUncheckedCreateNestedManyWithoutInitiatorInput
    rollback_history_approved?: rollback_historyUncheckedCreateNestedManyWithoutApproverInput
  }

  export type usersCreateOrConnectWithoutAudit_logInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAudit_logInput, usersUncheckedCreateWithoutAudit_logInput>
  }

  export type rollback_historyCreateWithoutAudit_logInput = {
    status: string
    error_message?: string | null
    created_at?: Date | string | null
    initiator: usersCreateNestedOneWithoutRollback_history_initiatedInput
    approver?: usersCreateNestedOneWithoutRollback_history_approvedInput
  }

  export type rollback_historyUncheckedCreateWithoutAudit_logInput = {
    id?: number
    initiated_by: number
    approved_by?: number | null
    status: string
    error_message?: string | null
    created_at?: Date | string | null
  }

  export type rollback_historyCreateOrConnectWithoutAudit_logInput = {
    where: rollback_historyWhereUniqueInput
    create: XOR<rollback_historyCreateWithoutAudit_logInput, rollback_historyUncheckedCreateWithoutAudit_logInput>
  }

  export type rollback_historyCreateManyAudit_logInputEnvelope = {
    data: rollback_historyCreateManyAudit_logInput | rollback_historyCreateManyAudit_logInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutAudit_logInput = {
    update: XOR<usersUpdateWithoutAudit_logInput, usersUncheckedUpdateWithoutAudit_logInput>
    create: XOR<usersCreateWithoutAudit_logInput, usersUncheckedCreateWithoutAudit_logInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAudit_logInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAudit_logInput, usersUncheckedUpdateWithoutAudit_logInput>
  }

  export type usersUpdateWithoutAudit_logInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_codes?: access_codesUpdateManyWithoutCreatorNestedInput
    pending_actions_initiated?: pending_actionsUpdateManyWithoutInitiatorNestedInput
    pending_actions_approved?: pending_actionsUpdateManyWithoutApproverNestedInput
    rollback_history_initiated?: rollback_historyUpdateManyWithoutInitiatorNestedInput
    rollback_history_approved?: rollback_historyUpdateManyWithoutApproverNestedInput
  }

  export type usersUncheckedUpdateWithoutAudit_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_codes?: access_codesUncheckedUpdateManyWithoutCreatorNestedInput
    pending_actions_initiated?: pending_actionsUncheckedUpdateManyWithoutInitiatorNestedInput
    pending_actions_approved?: pending_actionsUncheckedUpdateManyWithoutApproverNestedInput
    rollback_history_initiated?: rollback_historyUncheckedUpdateManyWithoutInitiatorNestedInput
    rollback_history_approved?: rollback_historyUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type rollback_historyUpsertWithWhereUniqueWithoutAudit_logInput = {
    where: rollback_historyWhereUniqueInput
    update: XOR<rollback_historyUpdateWithoutAudit_logInput, rollback_historyUncheckedUpdateWithoutAudit_logInput>
    create: XOR<rollback_historyCreateWithoutAudit_logInput, rollback_historyUncheckedCreateWithoutAudit_logInput>
  }

  export type rollback_historyUpdateWithWhereUniqueWithoutAudit_logInput = {
    where: rollback_historyWhereUniqueInput
    data: XOR<rollback_historyUpdateWithoutAudit_logInput, rollback_historyUncheckedUpdateWithoutAudit_logInput>
  }

  export type rollback_historyUpdateManyWithWhereWithoutAudit_logInput = {
    where: rollback_historyScalarWhereInput
    data: XOR<rollback_historyUpdateManyMutationInput, rollback_historyUncheckedUpdateManyWithoutAudit_logInput>
  }

  export type usersCreateWithoutPending_actions_initiatedInput = {
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    access_codes?: access_codesCreateNestedManyWithoutCreatorInput
    audit_log?: audit_logCreateNestedManyWithoutUserInput
    pending_actions_approved?: pending_actionsCreateNestedManyWithoutApproverInput
    rollback_history_initiated?: rollback_historyCreateNestedManyWithoutInitiatorInput
    rollback_history_approved?: rollback_historyCreateNestedManyWithoutApproverInput
  }

  export type usersUncheckedCreateWithoutPending_actions_initiatedInput = {
    id?: number
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    access_codes?: access_codesUncheckedCreateNestedManyWithoutCreatorInput
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput
    pending_actions_approved?: pending_actionsUncheckedCreateNestedManyWithoutApproverInput
    rollback_history_initiated?: rollback_historyUncheckedCreateNestedManyWithoutInitiatorInput
    rollback_history_approved?: rollback_historyUncheckedCreateNestedManyWithoutApproverInput
  }

  export type usersCreateOrConnectWithoutPending_actions_initiatedInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPending_actions_initiatedInput, usersUncheckedCreateWithoutPending_actions_initiatedInput>
  }

  export type usersCreateWithoutPending_actions_approvedInput = {
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    access_codes?: access_codesCreateNestedManyWithoutCreatorInput
    audit_log?: audit_logCreateNestedManyWithoutUserInput
    pending_actions_initiated?: pending_actionsCreateNestedManyWithoutInitiatorInput
    rollback_history_initiated?: rollback_historyCreateNestedManyWithoutInitiatorInput
    rollback_history_approved?: rollback_historyCreateNestedManyWithoutApproverInput
  }

  export type usersUncheckedCreateWithoutPending_actions_approvedInput = {
    id?: number
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    access_codes?: access_codesUncheckedCreateNestedManyWithoutCreatorInput
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput
    pending_actions_initiated?: pending_actionsUncheckedCreateNestedManyWithoutInitiatorInput
    rollback_history_initiated?: rollback_historyUncheckedCreateNestedManyWithoutInitiatorInput
    rollback_history_approved?: rollback_historyUncheckedCreateNestedManyWithoutApproverInput
  }

  export type usersCreateOrConnectWithoutPending_actions_approvedInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPending_actions_approvedInput, usersUncheckedCreateWithoutPending_actions_approvedInput>
  }

  export type usersUpsertWithoutPending_actions_initiatedInput = {
    update: XOR<usersUpdateWithoutPending_actions_initiatedInput, usersUncheckedUpdateWithoutPending_actions_initiatedInput>
    create: XOR<usersCreateWithoutPending_actions_initiatedInput, usersUncheckedCreateWithoutPending_actions_initiatedInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPending_actions_initiatedInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPending_actions_initiatedInput, usersUncheckedUpdateWithoutPending_actions_initiatedInput>
  }

  export type usersUpdateWithoutPending_actions_initiatedInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_codes?: access_codesUpdateManyWithoutCreatorNestedInput
    audit_log?: audit_logUpdateManyWithoutUserNestedInput
    pending_actions_approved?: pending_actionsUpdateManyWithoutApproverNestedInput
    rollback_history_initiated?: rollback_historyUpdateManyWithoutInitiatorNestedInput
    rollback_history_approved?: rollback_historyUpdateManyWithoutApproverNestedInput
  }

  export type usersUncheckedUpdateWithoutPending_actions_initiatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_codes?: access_codesUncheckedUpdateManyWithoutCreatorNestedInput
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput
    pending_actions_approved?: pending_actionsUncheckedUpdateManyWithoutApproverNestedInput
    rollback_history_initiated?: rollback_historyUncheckedUpdateManyWithoutInitiatorNestedInput
    rollback_history_approved?: rollback_historyUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type usersUpsertWithoutPending_actions_approvedInput = {
    update: XOR<usersUpdateWithoutPending_actions_approvedInput, usersUncheckedUpdateWithoutPending_actions_approvedInput>
    create: XOR<usersCreateWithoutPending_actions_approvedInput, usersUncheckedCreateWithoutPending_actions_approvedInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPending_actions_approvedInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPending_actions_approvedInput, usersUncheckedUpdateWithoutPending_actions_approvedInput>
  }

  export type usersUpdateWithoutPending_actions_approvedInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_codes?: access_codesUpdateManyWithoutCreatorNestedInput
    audit_log?: audit_logUpdateManyWithoutUserNestedInput
    pending_actions_initiated?: pending_actionsUpdateManyWithoutInitiatorNestedInput
    rollback_history_initiated?: rollback_historyUpdateManyWithoutInitiatorNestedInput
    rollback_history_approved?: rollback_historyUpdateManyWithoutApproverNestedInput
  }

  export type usersUncheckedUpdateWithoutPending_actions_approvedInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_codes?: access_codesUncheckedUpdateManyWithoutCreatorNestedInput
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput
    pending_actions_initiated?: pending_actionsUncheckedUpdateManyWithoutInitiatorNestedInput
    rollback_history_initiated?: rollback_historyUncheckedUpdateManyWithoutInitiatorNestedInput
    rollback_history_approved?: rollback_historyUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type audit_logCreateWithoutRollback_historyInput = {
    table_name: string
    record_id?: number | null
    action: string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    created_at?: Date | string | null
    user?: usersCreateNestedOneWithoutAudit_logInput
  }

  export type audit_logUncheckedCreateWithoutRollback_historyInput = {
    id?: number
    user_id?: number | null
    table_name: string
    record_id?: number | null
    action: string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    created_at?: Date | string | null
  }

  export type audit_logCreateOrConnectWithoutRollback_historyInput = {
    where: audit_logWhereUniqueInput
    create: XOR<audit_logCreateWithoutRollback_historyInput, audit_logUncheckedCreateWithoutRollback_historyInput>
  }

  export type usersCreateWithoutRollback_history_initiatedInput = {
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    access_codes?: access_codesCreateNestedManyWithoutCreatorInput
    audit_log?: audit_logCreateNestedManyWithoutUserInput
    pending_actions_initiated?: pending_actionsCreateNestedManyWithoutInitiatorInput
    pending_actions_approved?: pending_actionsCreateNestedManyWithoutApproverInput
    rollback_history_approved?: rollback_historyCreateNestedManyWithoutApproverInput
  }

  export type usersUncheckedCreateWithoutRollback_history_initiatedInput = {
    id?: number
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    access_codes?: access_codesUncheckedCreateNestedManyWithoutCreatorInput
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput
    pending_actions_initiated?: pending_actionsUncheckedCreateNestedManyWithoutInitiatorInput
    pending_actions_approved?: pending_actionsUncheckedCreateNestedManyWithoutApproverInput
    rollback_history_approved?: rollback_historyUncheckedCreateNestedManyWithoutApproverInput
  }

  export type usersCreateOrConnectWithoutRollback_history_initiatedInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRollback_history_initiatedInput, usersUncheckedCreateWithoutRollback_history_initiatedInput>
  }

  export type usersCreateWithoutRollback_history_approvedInput = {
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    access_codes?: access_codesCreateNestedManyWithoutCreatorInput
    audit_log?: audit_logCreateNestedManyWithoutUserInput
    pending_actions_initiated?: pending_actionsCreateNestedManyWithoutInitiatorInput
    pending_actions_approved?: pending_actionsCreateNestedManyWithoutApproverInput
    rollback_history_initiated?: rollback_historyCreateNestedManyWithoutInitiatorInput
  }

  export type usersUncheckedCreateWithoutRollback_history_approvedInput = {
    id?: number
    email: string
    password_hash: string
    name: string
    role: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    last_login?: Date | string | null
    access_codes?: access_codesUncheckedCreateNestedManyWithoutCreatorInput
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput
    pending_actions_initiated?: pending_actionsUncheckedCreateNestedManyWithoutInitiatorInput
    pending_actions_approved?: pending_actionsUncheckedCreateNestedManyWithoutApproverInput
    rollback_history_initiated?: rollback_historyUncheckedCreateNestedManyWithoutInitiatorInput
  }

  export type usersCreateOrConnectWithoutRollback_history_approvedInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRollback_history_approvedInput, usersUncheckedCreateWithoutRollback_history_approvedInput>
  }

  export type audit_logUpsertWithoutRollback_historyInput = {
    update: XOR<audit_logUpdateWithoutRollback_historyInput, audit_logUncheckedUpdateWithoutRollback_historyInput>
    create: XOR<audit_logCreateWithoutRollback_historyInput, audit_logUncheckedCreateWithoutRollback_historyInput>
    where?: audit_logWhereInput
  }

  export type audit_logUpdateToOneWithWhereWithoutRollback_historyInput = {
    where?: audit_logWhereInput
    data: XOR<audit_logUpdateWithoutRollback_historyInput, audit_logUncheckedUpdateWithoutRollback_historyInput>
  }

  export type audit_logUpdateWithoutRollback_historyInput = {
    table_name?: StringFieldUpdateOperationsInput | string
    record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneWithoutAudit_logNestedInput
  }

  export type audit_logUncheckedUpdateWithoutRollback_historyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_name?: StringFieldUpdateOperationsInput | string
    record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutRollback_history_initiatedInput = {
    update: XOR<usersUpdateWithoutRollback_history_initiatedInput, usersUncheckedUpdateWithoutRollback_history_initiatedInput>
    create: XOR<usersCreateWithoutRollback_history_initiatedInput, usersUncheckedCreateWithoutRollback_history_initiatedInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRollback_history_initiatedInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRollback_history_initiatedInput, usersUncheckedUpdateWithoutRollback_history_initiatedInput>
  }

  export type usersUpdateWithoutRollback_history_initiatedInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_codes?: access_codesUpdateManyWithoutCreatorNestedInput
    audit_log?: audit_logUpdateManyWithoutUserNestedInput
    pending_actions_initiated?: pending_actionsUpdateManyWithoutInitiatorNestedInput
    pending_actions_approved?: pending_actionsUpdateManyWithoutApproverNestedInput
    rollback_history_approved?: rollback_historyUpdateManyWithoutApproverNestedInput
  }

  export type usersUncheckedUpdateWithoutRollback_history_initiatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_codes?: access_codesUncheckedUpdateManyWithoutCreatorNestedInput
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput
    pending_actions_initiated?: pending_actionsUncheckedUpdateManyWithoutInitiatorNestedInput
    pending_actions_approved?: pending_actionsUncheckedUpdateManyWithoutApproverNestedInput
    rollback_history_approved?: rollback_historyUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type usersUpsertWithoutRollback_history_approvedInput = {
    update: XOR<usersUpdateWithoutRollback_history_approvedInput, usersUncheckedUpdateWithoutRollback_history_approvedInput>
    create: XOR<usersCreateWithoutRollback_history_approvedInput, usersUncheckedCreateWithoutRollback_history_approvedInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRollback_history_approvedInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRollback_history_approvedInput, usersUncheckedUpdateWithoutRollback_history_approvedInput>
  }

  export type usersUpdateWithoutRollback_history_approvedInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_codes?: access_codesUpdateManyWithoutCreatorNestedInput
    audit_log?: audit_logUpdateManyWithoutUserNestedInput
    pending_actions_initiated?: pending_actionsUpdateManyWithoutInitiatorNestedInput
    pending_actions_approved?: pending_actionsUpdateManyWithoutApproverNestedInput
    rollback_history_initiated?: rollback_historyUpdateManyWithoutInitiatorNestedInput
  }

  export type usersUncheckedUpdateWithoutRollback_history_approvedInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    access_codes?: access_codesUncheckedUpdateManyWithoutCreatorNestedInput
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput
    pending_actions_initiated?: pending_actionsUncheckedUpdateManyWithoutInitiatorNestedInput
    pending_actions_approved?: pending_actionsUncheckedUpdateManyWithoutApproverNestedInput
    rollback_history_initiated?: rollback_historyUncheckedUpdateManyWithoutInitiatorNestedInput
  }

  export type lasersCreateManyManufacturerInput = {
    id?: number
    model_name: string
    laser_type: string
    modulation_type: string
    cooling_method?: string | null
    is_single_mode: boolean
    power_output_w: Decimal | DecimalJsLike | number | string
    power_consumption_w?: Decimal | DecimalJsLike | number | string | null
    application?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type lasersUpdateWithoutManufacturerInput = {
    model_name?: StringFieldUpdateOperationsInput | string
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wavelength_specs?: wavelength_specsUpdateOneWithoutLaserNestedInput
    optical_specs?: optical_specsUpdateOneWithoutLaserNestedInput
    stability_specs?: stability_specsUpdateOneWithoutLaserNestedInput
    environmental_specs?: environmental_specsUpdateOneWithoutLaserNestedInput
    pulse_specs?: pulse_specsUpdateOneWithoutLaserNestedInput
  }

  export type lasersUncheckedUpdateWithoutManufacturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    model_name?: StringFieldUpdateOperationsInput | string
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wavelength_specs?: wavelength_specsUncheckedUpdateOneWithoutLaserNestedInput
    optical_specs?: optical_specsUncheckedUpdateOneWithoutLaserNestedInput
    stability_specs?: stability_specsUncheckedUpdateOneWithoutLaserNestedInput
    environmental_specs?: environmental_specsUncheckedUpdateOneWithoutLaserNestedInput
    pulse_specs?: pulse_specsUncheckedUpdateOneWithoutLaserNestedInput
  }

  export type lasersUncheckedUpdateManyWithoutManufacturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    model_name?: StringFieldUpdateOperationsInput | string
    laser_type?: StringFieldUpdateOperationsInput | string
    modulation_type?: StringFieldUpdateOperationsInput | string
    cooling_method?: NullableStringFieldUpdateOperationsInput | string | null
    is_single_mode?: BoolFieldUpdateOperationsInput | boolean
    power_output_w?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    power_consumption_w?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type access_codesCreateManyCreatorInput = {
    id?: number
    code_hash: string
    color_code: string
    role: string
    expires_at?: Date | string | null
    max_uses?: number | null
    current_uses?: number
    is_active?: boolean
    notes?: string | null
    created_at?: Date | string | null
  }

  export type audit_logCreateManyUserInput = {
    id?: number
    table_name: string
    record_id?: number | null
    action: string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    created_at?: Date | string | null
  }

  export type pending_actionsCreateManyInitiatorInput = {
    id?: number
    action_type: string
    target_table: string
    target_record_id?: number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    status?: string
    expires_at?: Date | string | null
    approved_by?: number | null
    approved_at?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type pending_actionsCreateManyApproverInput = {
    id?: number
    action_type: string
    initiated_by: number
    target_table: string
    target_record_id?: number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    status?: string
    expires_at?: Date | string | null
    approved_at?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type rollback_historyCreateManyInitiatorInput = {
    id?: number
    audit_log_id: number
    approved_by?: number | null
    status: string
    error_message?: string | null
    created_at?: Date | string | null
  }

  export type rollback_historyCreateManyApproverInput = {
    id?: number
    audit_log_id: number
    initiated_by: number
    status: string
    error_message?: string | null
    created_at?: Date | string | null
  }

  export type access_codesUpdateWithoutCreatorInput = {
    code_hash?: StringFieldUpdateOperationsInput | string
    color_code?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: NullableIntFieldUpdateOperationsInput | number | null
    current_uses?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type access_codesUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    code_hash?: StringFieldUpdateOperationsInput | string
    color_code?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: NullableIntFieldUpdateOperationsInput | number | null
    current_uses?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type access_codesUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    code_hash?: StringFieldUpdateOperationsInput | string
    color_code?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_uses?: NullableIntFieldUpdateOperationsInput | number | null
    current_uses?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logUpdateWithoutUserInput = {
    table_name?: StringFieldUpdateOperationsInput | string
    record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rollback_history?: rollback_historyUpdateManyWithoutAudit_logNestedInput
  }

  export type audit_logUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_name?: StringFieldUpdateOperationsInput | string
    record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rollback_history?: rollback_historyUncheckedUpdateManyWithoutAudit_logNestedInput
  }

  export type audit_logUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_name?: StringFieldUpdateOperationsInput | string
    record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    old_data?: NullableJsonNullValueInput | InputJsonValue
    new_data?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pending_actionsUpdateWithoutInitiatorInput = {
    action_type?: StringFieldUpdateOperationsInput | string
    target_table?: StringFieldUpdateOperationsInput | string
    target_record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approver?: usersUpdateOneWithoutPending_actions_approvedNestedInput
  }

  export type pending_actionsUncheckedUpdateWithoutInitiatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_type?: StringFieldUpdateOperationsInput | string
    target_table?: StringFieldUpdateOperationsInput | string
    target_record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pending_actionsUncheckedUpdateManyWithoutInitiatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_type?: StringFieldUpdateOperationsInput | string
    target_table?: StringFieldUpdateOperationsInput | string
    target_record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pending_actionsUpdateWithoutApproverInput = {
    action_type?: StringFieldUpdateOperationsInput | string
    target_table?: StringFieldUpdateOperationsInput | string
    target_record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initiator?: usersUpdateOneRequiredWithoutPending_actions_initiatedNestedInput
  }

  export type pending_actionsUncheckedUpdateWithoutApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_type?: StringFieldUpdateOperationsInput | string
    initiated_by?: IntFieldUpdateOperationsInput | number
    target_table?: StringFieldUpdateOperationsInput | string
    target_record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pending_actionsUncheckedUpdateManyWithoutApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_type?: StringFieldUpdateOperationsInput | string
    initiated_by?: IntFieldUpdateOperationsInput | number
    target_table?: StringFieldUpdateOperationsInput | string
    target_record_id?: NullableIntFieldUpdateOperationsInput | number | null
    action_data?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rollback_historyUpdateWithoutInitiatorInput = {
    status?: StringFieldUpdateOperationsInput | string
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUpdateOneRequiredWithoutRollback_historyNestedInput
    approver?: usersUpdateOneWithoutRollback_history_approvedNestedInput
  }

  export type rollback_historyUncheckedUpdateWithoutInitiatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    audit_log_id?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rollback_historyUncheckedUpdateManyWithoutInitiatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    audit_log_id?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rollback_historyUpdateWithoutApproverInput = {
    status?: StringFieldUpdateOperationsInput | string
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUpdateOneRequiredWithoutRollback_historyNestedInput
    initiator?: usersUpdateOneRequiredWithoutRollback_history_initiatedNestedInput
  }

  export type rollback_historyUncheckedUpdateWithoutApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    audit_log_id?: IntFieldUpdateOperationsInput | number
    initiated_by?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rollback_historyUncheckedUpdateManyWithoutApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    audit_log_id?: IntFieldUpdateOperationsInput | number
    initiated_by?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rollback_historyCreateManyAudit_logInput = {
    id?: number
    initiated_by: number
    approved_by?: number | null
    status: string
    error_message?: string | null
    created_at?: Date | string | null
  }

  export type rollback_historyUpdateWithoutAudit_logInput = {
    status?: StringFieldUpdateOperationsInput | string
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initiator?: usersUpdateOneRequiredWithoutRollback_history_initiatedNestedInput
    approver?: usersUpdateOneWithoutRollback_history_approvedNestedInput
  }

  export type rollback_historyUncheckedUpdateWithoutAudit_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    initiated_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rollback_historyUncheckedUpdateManyWithoutAudit_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    initiated_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}