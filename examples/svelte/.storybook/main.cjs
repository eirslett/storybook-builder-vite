const preprocess = require('svelte-preprocess');

module.exports = {
  framework: '@storybook/svelte',
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
  core: {
    builder: '@storybook/builder-vite',
    // we don't want to muck up the data when we're working on the builder
    disableTelemetry: true,
  },
  features: {
    // On-demand store does not work for .svelte stories, only CSF.
    storyStoreV7: false,
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return config;
  },
  // @ts-ignore
  svelteOptions: {
    // Possible with @sveltejs/vite-plugin-svelte version 1.0.0-next.43 or higher.
    // Focus a story iframe and press cmd+shift (mac) or ctrl+shift (windows) to activate.
    experimental: { inspector: true },
  },
};
