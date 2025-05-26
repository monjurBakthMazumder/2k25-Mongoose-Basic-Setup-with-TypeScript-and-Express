# 2k25 Mongoose Basic Setup with TypeScript and Express

---

### Step 1: Initialize the project

```bash
npm init -y
```

- Initializes a new Node.js project by creating a `package.json` file with default values (`-y` means yes to all prompts).

---

### Step 2: Install Express

```bash
npm install express
```

- Installs **Express**, a minimal and flexible Node.js web application framework.

---

### Step 3: Install Mongoose

```bash
npm install mongoose --save
```

- Installs **Mongoose**, an ODM (Object Data Modeling) library to interact with MongoDB databases.
- The `--save` flag adds it to `dependencies` in `package.json`.

---

### Step 4: Install TypeScript as a development dependency

```bash
npm install typescript --save-dev
```

- Installs **TypeScript**, enabling static typing.
- `--save-dev` means it is only needed for development, not production.

---

### Step 5: Install CORS middleware

```bash
npm install cors
```

- Installs **CORS** package to handle Cross-Origin Resource Sharing (enables client apps from different origins to access your server).

---

### Step 6: Install dotenv

```bash
npm install dotenv --save
```

- Installs **dotenv**, used to manage environment variables from a `.env` file.

---

### Step 7: Initialize TypeScript configuration

```bash
tsc --init
```

- Creates a `tsconfig.json` file with default TypeScript configuration.

---

### Step 8: Modify `tsconfig.json` for source and output folders

Edit `tsconfig.json` and add or update these:

```json
"rootDir": "./src/",
"outDir": "./dist/",
```

- `rootDir`: where your TypeScript source code lives (`src` folder).
- `outDir`: where the compiled JavaScript files will be placed (`dist` folder).

---

### Step 9: Create project structure

- Create a folder named `src` to hold all source code.
- Inside `src`, create a file named `app.ts`.

---

### Step 10: Basic Express app in `app.ts`

```ts
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

- Imports Express, creates an app instance.
- Sets up a simple route `GET /` that responds with "Hello World!"
- Starts server listening on port 3000.

---

### Step 11: Add build script to `package.json`

```json
"scripts": {
  "build": "tsc"
}
```

- Adds a script so running `npm run build` will compile your TypeScript code.

---

### Step 12: Create nested folder structure

Inside `src` folder, create folders:

```
src/
  app/
    config/
      index.ts
```

- This is a suggested modular structure for better organization (config files under `app/config`).

---

### Step 13: Install type definitions for Express and CORS

```bash
npm i --save-dev @types/express
npm i --save-dev @types/cors
```

- Installs TypeScript type declarations to enable type checking for Express and CORS.

---

### Step 14: Helpful blog reference

[Express + TypeScript + ESLint + Prettier Setup - dev.to](https://dev.to/shafayat/-express-typescript-eslint-prettiersetup-5fhg)

---

### Step 15: Update `tsconfig.json` with useful options

Add or update:

```json
// "skipDefaultLibCheck": true,  /* Skip type checking .d.ts files that come with TypeScript */
"skipLibCheck": true,           /* Skip type checking all declaration files */
"include": ["src/**/*.ts"],     /* Include all TS files in src */
"exclude": ["node_modules"]     /* Exclude node_modules folder */
```

- `skipLibCheck` speeds up compilation by ignoring type checking of `.d.ts` files.

---

### Step 16: Install ESLint and related packages

```bash
npm i -D eslint@9.14.0 @eslint/js @types/eslint__js typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

- Installs ESLint, its JS config, TypeScript parser and plugin, plus types for ESLint.

---

### Step 17: Initialize ESLint

```bash
npx eslint --init
```

- Starts interactive setup for ESLint configuration.

Answers for prompts:

- What do you want to lint?
  → javascript (or typescript if asked)
- How would you like to use ESLint?
  → problems (find problems)
- What type of modules?
  → esm (ECMAScript Modules)
- Which framework?
  → none
- Does your project use TypeScript?
  → yes
- Where does your code run?
  → browser (and possibly node)

When asked to install required dependencies, answer:

```
Would you like to install them now? » Yes
```

---

### Step 18: If needed, reinstall ESLint to specific version

```bash
npm remove eslint
npm i -D eslint@9.14.0
```

---

### Step 19: Add linting scripts in `package.json`

```json
"scripts": {
  "lint": "eslint src/**/*.ts",
  "lint:fix": "eslint src/**/*.ts --fix"
}
```

- `lint` checks for lint issues.
- `lint:fix` fixes problems automatically if possible.

---

### Step 20: Add Prettier for code formatting

```bash
npm i -D --exact prettier
```

- Installs Prettier with an exact version for consistent formatting.

---

### Step 21: Create `.prettierrc` configuration file

```json
{
  "semi": true,
  "singleQuote": true
}
```

- Enforces semicolons at line ends and single quotes for strings.

---

### Step 22: Create `.prettierignore` file

```
dist
coverage
```

- Ignore formatting files in these output or coverage folders.

---

### Step 23: Add format script in `package.json`

```json
"scripts": {
  "format": "prettier . --write"
}
```

- Runs Prettier to format all files in the project.

---

### Step 24: Create ESLint config file `eslint.config.mjs`

```js
export default {
  ignores: ['node_modules', 'dist'],
  rules: {
    'no-unused-vars': 'error',
    'no-unused-expressions': 'error',
    'prefer-const': 'error',
    'no-console': 'warning',
    'no-undefined': 'error',
  },
  globals: {
    process: 'readonly',
  },
};
```

- Ignores node_modules and dist folders.
- Enables strict linting rules.
- Declares `process` as a global read-only variable.

---

### Step 25: Create `.gitignore`

```
dist
node_modules
.env
```

- Prevents committing build files, dependencies, and environment variables.

---

### Step 26: Install `ts-node-dev` for development auto-reloading

```bash
npm i ts-node-dev --save-dev
```

- Enables running TypeScript files directly with auto restart on changes.

---

### Step 27: Run development server with live reload

```bash
ts-node-dev --respawn --transpile-only src/server.ts
```

- Runs `src/server.ts` (or `src/app.ts` if you prefer), respawning on file changes.
- `--transpile-only` skips type checking for speed (optional).

---

# Summary

You now have:

- A **TypeScript** based Express + Mongoose backend
- Code linting via **ESLint**
- Code formatting with **Prettier**
- Automatic dev server reload with **ts-node-dev**
- Proper `tsconfig.json` and project folder setup
- All necessary type declarations installed

---

# Author

**Md Monjur Bakth Mazumder**  
Software Engineer & Lead Frontend Developer at [Qrinux](https://www.qrinux.com/)  
Web Developer at Velocity Digital Inc.

📧 [Email me](mailto:md.monjurmbm2001@gmail.com)  
🌐 [Portfolio](https://mdmonjurbakthmazumder.netlify.app)

Passionate about building clean, maintainable, and scalable applications.
