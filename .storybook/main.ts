import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname, resolve } from "path";

/**
 * Resolves the absolute path of a package.
 * Useful for Yarn PnP and monorepo setups.
 */
function getAbsolutePath(value: string): string {
  try {
    return dirname(require.resolve(join(value, "package.json")));
  } catch (error) {
    console.error(`Error resolving package: ${value}. Check if it is installed.`);
    throw error;
  }
}

const config: StorybookConfig = {
  stories: [
    "../packages/*/src/**/*.stories.@(js|jsx|ts|tsx|mdx)", // Pull stories from all packages
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config, { configType }) {
    // Ensure correct resolution of aliases and dependencies
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@reacture/core': resolve(__dirname, '../packages/core/src'), 
      
    };

    return config;
  },
};

export default config;
