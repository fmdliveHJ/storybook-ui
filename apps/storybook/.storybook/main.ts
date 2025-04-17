import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { mergeConfig } from 'vite';

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
    });
  },
};

export default config;
