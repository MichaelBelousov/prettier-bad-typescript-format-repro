export const foo = bar()
  ? baz
  : (
      // FIXME: when we remove the ipcUtilityProcess, let's make getting+creating this settings object typed, because the current JSON
      // type doesn't cast well to normal objects
      // prettier-ignore
      ( // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("some-really-long-thing-like-super-long") as typeof import("some-really-long-thing-like-super-long")
      ).fooBarBaz.settings as any as FooBarBaz
    ).qux;
