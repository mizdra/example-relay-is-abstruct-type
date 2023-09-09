import { type CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './schema.graphql',
  generates: {
    '__generated__/types.ts': {
      plugins: ['typescript'],
      config: {
        nonOptionalTypename: true,
        enumsAsTypes: true,
        avoidOptionals: true,
      },
    },
    './__generated__/fabbrica.ts': {
      plugins: ['@mizdra/graphql-fabbrica'],
      config: {
        typesFile: './types',
      },
    },
  },
};

module.exports = config;
