export const foo = (
      /// prettier-ignore
      ( // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("some-really-long-thing-like-super-long") as typeof import("some-really-long-thing-like-super-long")
      ).fooBarBaz.settings as any as FooBarBaz
    ).qux;
