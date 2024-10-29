### Yarn Workspaces / npm Workspaces: These are features provided by Yarn and npm package managers that allow you to manage multiple packages within a single repository (monorepo). They handle dependency management and symlink packages together.

### Lerna, Nx, Turborepo: These are monorepo management tools that build on top of Yarn or npm workspaces to provide additional features like advanced task orchestration, caching, incremental builds, and more.

<!--

npm pack

Test Your Package Locally
Explanation: Use npm pack to create a tarball of your package and test installing it in a separate project to ensure it works as expected.


-->

<!-->

when building a core module 4 file architecture needs to be followed
1.index.ts (Includes our core component like button,typography etc)

2.Typescript interface or type exported for that core

3.local styles in styles.ts for that core modules styles

4 Optional constants if any
