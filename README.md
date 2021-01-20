TS Backend Starter
====

This starter solves a list of problems with the most recent technologies
Used help from [Plop Logger](https://github.com/ilaborie/plop-logger) from Igor


Requirements
----

- Uses TypeScript
- Uses Latest native esm node modules. [It's now the official way](https://nodejs.org/api/esm.html#esm_modules_ecmascript_modules).
- Ready quickly for TDD
- Able to use Prettier easily with TS
- Forces Prettier before commit 
- Debugging files with Webstorm/Idea
- Running script with TS-Node 
- Front end agnostic



What it's using
----

TS Backend Starter with Husky for prettier

Uses:
* Jest
* Prettier and ESLint to have nice format
    - Run `npm run lint` to fix it
    - with slight variation from default options you can change
* Husky will refuse to commit if format is not good
    - Run ` npm run lint` before commit as Husky won't do it for you. It would be too intrusive, I
     think.
* `tsdx` to simplify commands, namely test coverage
    - `npm test` to test with Jest
    - `npm run coverage` to test with coverage
* `tslib` package for [better performance](https://www.npmjs.com/package/tslib)


Scripts with ts-node
-----

As of today, it's a bit complex. The goal is not only to reun a script, but also to be able to 
debug it through Webstorm/Idea

https://github.com/TypeStrong/ts-node/issues/1007

