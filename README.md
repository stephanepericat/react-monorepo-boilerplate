# react-monorepo-boilerplate

a small monorepo boilerplate for React 17+ components; using Yarn Workspaces.

## Commands

### add-package

Creates a new package.

```shell
yarn add-package

$ plop
? Enter component name: foo
✔  -> {"name":"foo","version":"1.0.0"}
✔  ++ /packages/Foo/package.json
✔  ++ /packages/Foo/src/index.js
✔  ++ /packages/Foo/src/foo.stories.js
✔  ++ /packages/Foo/__tests__/foo.test.js
✨  Done in 4.75s.
```

### build-packages

Generates build files for the components.

```shell
yarn build-packages

$ yarn workspaces run build

> react-mono-button
$ rimraf dist && webpack --config ../../webpack.config.js
asset bundle.js 43 KiB [emitted] [minimized] (name: main) 1 related asset
orphan modules 55.5 KiB [orphan] 5 modules
runtime modules 663 bytes 3 modules
cacheable modules 79.2 KiB
  modules by path ../../node_modules/hoist-non-react-statics/ 6.62 KiB 3 modules
  modules by path ../../node_modules/react-is/ 3.75 KiB
    ../../node_modules/react-is/index.js 195 bytes [built] [code generated]
    ../../node_modules/react-is/cjs/react-is.production.min.js 3.56 KiB [built] [code generated]
  modules by path ../../node_modules/react/ 9.06 KiB
    ../../node_modules/react/index.js 189 bytes [built] [code generated]
    ../../node_modules/react/cjs/react.production.min.js 8.87 KiB [built] [code generated]
  ./src/index.js + 5 modules 56.3 KiB [built] [code generated]
  ../../node_modules/shallowequal/index.js 1.32 KiB [built] [code generated]
  ../../node_modules/object-assign/index.js 2.17 KiB [built] [code generated]
webpack 5.24.2 compiled successfully in 3023 ms

> react-mono-demo
$ rimraf dist && webpack --config ../../webpack.config.js
asset bundle.js 8.19 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 663 bytes 3 modules
modules by path ../../node_modules/ 13.8 KiB
  modules by path ../../node_modules/prop-types/ 2.56 KiB
    ../../node_modules/prop-types/index.js 707 bytes [built] [code generated]
    ../../node_modules/prop-types/factoryWithThrowingShims.js 1.57 KiB [built] [code generated]
    ../../node_modules/prop-types/lib/ReactPropTypesSecret.js 311 bytes [built] [code generated]
  modules by path ../../node_modules/react/ 9.06 KiB
    ../../node_modules/react/index.js 189 bytes [built] [code generated]
    ../../node_modules/react/cjs/react.production.min.js 8.87 KiB [built] [code generated]
  ../../node_modules/object-assign/index.js 2.17 KiB [built] [code generated]
./src/index.js 302 bytes [built] [code generated]
webpack 5.24.2 compiled successfully in 1149 ms
✨  Done in 7.56s.
```

### build-storybook

Creates a deployable build of the Storybook instance

```shell
yarn build-storybook

$ build-storybook

info @storybook/react v6.1.20
info
info => Cleaning outputDir ~/Workspace/react-mono/storybook-static
info => Using prebuilt manager
info => Building preview..
info => Loading preview config..
info => Loading presets
info => Loading 1 config file in "./.storybook"
info => Loading 7 other files in "./.storybook"
info => Adding stories defined in ".storybook/main.js"
info => Using custom postcss.config.js
info => Using default Webpack setup
info => Compiling preview..
info => Preview built (23 s)
info => Output directory: ~/Workspace/react-mono/storybook-static
✨  Done in 26.20s.
```

### lint

Runs eslint on the source code.

```shell
yarn lint --fix

yarn run v1.22.10
$ eslint packages/**/*.js --fix
✨  Done in 1.40s.
```

### publish-packages

Builds & publishes the components to a registry.

```shell
yarn publish-packages

$ yarn workspaces run deploy

> react-mono-button
$ yarn build && yarn version --patch --no-git-tag-version && yarn publish --non-interactive
$ rimraf dist && webpack --config ../../webpack.config.js
webpack 5.24.2 compiled successfully in 2432 ms
info Current version: 1.0.1
info New version: 1.0.2
[1/4] Bumping version...
info Current version: 1.0.2
[2/4] Logging in...
[3/4] Publishing...
success Published.
[4/4] Revoking token...
info Not revoking login token, specified via config file.

> react-mono-demo
$ yarn build && yarn version --patch --no-git-tag-version && yarn publish --non-interactive
$ rimraf dist && webpack --config ../../webpack.config.js
webpack 5.24.2 compiled successfully in 1174 ms
info Current version: 1.0.0
info New version: 1.0.1
[1/4] Bumping version...
info Current version: 1.0.1
[2/4] Logging in...
[3/4] Publishing...
success Published.
[4/4] Revoking token...
info Not revoking login token, specified via config file.
✨  Done in 8.88s.
```

### storybook

Starts the local storybook server.

```shell
yarn storybook

$ start-storybook -p 6006
info @storybook/react v6.1.20
info
info => Using prebuilt manager
info => Loading presets
info => Loading 1 config file in "./.storybook"
info => Loading 7 other files in "./.storybook"
info => Adding stories defined in ".storybook/main.js"
info => Using custom postcss.config.js
info => Using default Webpack setup
webpack built d110683145ac7cd13274 in 10847ms
Storybook 6.1.20 started
```

### test

Runs the test suite.

```shell
yarn test

$ jest
 PASS  packages/Demo/__tests__/demo.test.js
 PASS  packages/Button/__tests__/button.test.js

Test Suites: 2 passed, 2 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.534 s
Ran all test suites.
✨  Done in 4.88s.
```

## Related Links

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest Styled Components](https://www.npmjs.com/package/jest-styled-components)
