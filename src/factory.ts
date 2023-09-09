import { defineBookFactory, dynamic } from '../__generated__/fabbrica';

export const BookFactory = defineBookFactory({
  defaultFields: {
    __typename: 'Book',
    id: dynamic(({ seq }) => `Book-${seq}`),
    title: 'Yuyushiki',
    author: undefined,
  },
});

// const book = await BookFactory.build();
// expect(book).toStrictEqual({
//   __typename: 'Book',
//   id: 'Book-0',
//   title: expect.any(String),
//   author: undefined,
// });
// assertType<{
//   __typename: 'Book';
//   id: string;
//   title: string;
//   author: undefined;
// }>(book);
