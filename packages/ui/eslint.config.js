// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { config } from '@repo/eslint-config/index.js';

export default [...config, {
  ignores: ['.svelte-kit/**', 'dist/**']
}, ...storybook.configs["flat/recommended"]];
