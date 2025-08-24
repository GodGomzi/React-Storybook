# React Component Library Assignment

This project is a small component library built as part of a front-end development assignment. It features two reusable UI components: an `InputField` and a `DataTable`, built with a focus on scalability and modern development practices.

**[➡️https://68ab580dcdffeff86c7c838e-fzanxctdhe.chromatic.com/]**(STORYBOOK LINK)

---
## Tech Stack

* **React** & **TypeScript**
* **TailwindCSS** for styling
* **CVA** for variant management
* **Storybook** for component documentation
* **Vite** for the build tooling
* **Vitest** & **React Testing Library** for unit testing

---
## Setup Instructions

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server (for the demo page):**
    ```bash
    npm run dev
    ```

4.  **Run Storybook:**
    ```bash
    npm run storybook
    ```
5.  **Run tests:**
    ```bash
    npm run test
    ```
---
## Description of My Approach

I structured the project with scalability and maintainability in mind, following modern best practices for building a component library.

* **Component Colocation**: Each component lives in its own directory alongside its corresponding stories and tests (`src/components/InputField`). This makes each component a self-contained module that is easy to manage, test, and reuse.

* **Styling with CVA**: Instead of constructing complex class strings directly in the component, I used `class-variance-authority` (CVA). This allows for a structured, type-safe way to define style variants (e.g., `variant`, `size`), which keeps the component's rendering logic clean and separates styling concerns.

* **Logic Extraction (Custom Hooks)**: For the more complex `DataTable` component, I extracted all the stateful logic (sorting, selection) into a reusable `useDataTable` custom hook. This separates the presentation layer (the component) from the business logic (the hook), making the component easier to reason about and the logic itself reusable and independently testable.

* **Automated Documentation**: I used Storybook not just as a gallery, but as a comprehensive documentation tool. The `autodocs` feature automatically generates a props table and usage examples, ensuring that the documentation stays in sync with the code and provides an interactive playground for developers.

* **TypeScript and Type Safety**: The entire project is built with TypeScript. I used generics for the `DataTable` to make it highly reusable for any data structure and ensured all props and functions were strongly typed to improve the developer experience and prevent bugs.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
