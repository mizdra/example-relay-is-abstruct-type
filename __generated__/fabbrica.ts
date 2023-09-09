import {
  type Traits,
  type TypeFactoryDefineOptions,
  type TypeFactoryInterface,
  type DefaultFieldsResolver,
  defineTypeFactoryInternal,
} from '@mizdra/graphql-fabbrica/helper';
import type { Author, Book, Query } from './types';

export * from '@mizdra/graphql-fabbrica/helper';
const AuthorFieldNames = ['__typename', 'books', 'id', 'name'] as const;

export type AuthorFactoryDefineOptions<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends DefaultFieldsResolver<Author & TransientFields>,
  _Traits extends Traits<Author, TransientFields>,
> = TypeFactoryDefineOptions<Author, TransientFields, _DefaultFieldsResolver, _Traits>;
export type AuthorFactoryInterface<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends DefaultFieldsResolver<Author & TransientFields>,
  _Traits extends Traits<Author, TransientFields>,
> = TypeFactoryInterface<Author, TransientFields, _DefaultFieldsResolver, _Traits>;

export function defineAuthorFactoryInternal<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends DefaultFieldsResolver<Author & TransientFields>,
  _Traits extends Traits<Author, TransientFields>,
>(
  options: AuthorFactoryDefineOptions<TransientFields, _DefaultFieldsResolver, _Traits>,
): AuthorFactoryInterface<TransientFields, _DefaultFieldsResolver, _Traits> {
  return defineTypeFactoryInternal(AuthorFieldNames, options);
}

/**
 * Define factory for {@link Author} model.
 *
 * @param options
 * @returns factory {@link AuthorFactoryInterface}
 */
export function defineAuthorFactory<
  _DefaultFieldsResolver extends DefaultFieldsResolver<Author>,
  _Traits extends Traits<Author, {}>,
>(
  options: AuthorFactoryDefineOptions<{}, _DefaultFieldsResolver, _Traits>,
): AuthorFactoryInterface<{}, _DefaultFieldsResolver, _Traits> {
  return defineAuthorFactoryInternal(options);
}
const BookFieldNames = ['__typename', 'author', 'id', 'title'] as const;

export type BookFactoryDefineOptions<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends DefaultFieldsResolver<Book & TransientFields>,
  _Traits extends Traits<Book, TransientFields>,
> = TypeFactoryDefineOptions<Book, TransientFields, _DefaultFieldsResolver, _Traits>;
export type BookFactoryInterface<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends DefaultFieldsResolver<Book & TransientFields>,
  _Traits extends Traits<Book, TransientFields>,
> = TypeFactoryInterface<Book, TransientFields, _DefaultFieldsResolver, _Traits>;

export function defineBookFactoryInternal<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends DefaultFieldsResolver<Book & TransientFields>,
  _Traits extends Traits<Book, TransientFields>,
>(
  options: BookFactoryDefineOptions<TransientFields, _DefaultFieldsResolver, _Traits>,
): BookFactoryInterface<TransientFields, _DefaultFieldsResolver, _Traits> {
  return defineTypeFactoryInternal(BookFieldNames, options);
}

/**
 * Define factory for {@link Book} model.
 *
 * @param options
 * @returns factory {@link BookFactoryInterface}
 */
export function defineBookFactory<
  _DefaultFieldsResolver extends DefaultFieldsResolver<Book>,
  _Traits extends Traits<Book, {}>,
>(
  options: BookFactoryDefineOptions<{}, _DefaultFieldsResolver, _Traits>,
): BookFactoryInterface<{}, _DefaultFieldsResolver, _Traits> {
  return defineBookFactoryInternal(options);
}
const QueryFieldNames = ['__typename', 'book', 'node', 'search'] as const;

export type QueryFactoryDefineOptions<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends DefaultFieldsResolver<Query & TransientFields>,
  _Traits extends Traits<Query, TransientFields>,
> = TypeFactoryDefineOptions<Query, TransientFields, _DefaultFieldsResolver, _Traits>;
export type QueryFactoryInterface<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends DefaultFieldsResolver<Query & TransientFields>,
  _Traits extends Traits<Query, TransientFields>,
> = TypeFactoryInterface<Query, TransientFields, _DefaultFieldsResolver, _Traits>;

export function defineQueryFactoryInternal<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends DefaultFieldsResolver<Query & TransientFields>,
  _Traits extends Traits<Query, TransientFields>,
>(
  options: QueryFactoryDefineOptions<TransientFields, _DefaultFieldsResolver, _Traits>,
): QueryFactoryInterface<TransientFields, _DefaultFieldsResolver, _Traits> {
  return defineTypeFactoryInternal(QueryFieldNames, options);
}

/**
 * Define factory for {@link Query} model.
 *
 * @param options
 * @returns factory {@link QueryFactoryInterface}
 */
export function defineQueryFactory<
  _DefaultFieldsResolver extends DefaultFieldsResolver<Query>,
  _Traits extends Traits<Query, {}>,
>(
  options: QueryFactoryDefineOptions<{}, _DefaultFieldsResolver, _Traits>,
): QueryFactoryInterface<{}, _DefaultFieldsResolver, _Traits> {
  return defineQueryFactoryInternal(options);
}
