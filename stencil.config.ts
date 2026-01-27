import { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'stenciljs-taildwindcss-v4-storybook',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
  plugins: [
    postcss({
      plugins: [
        "@tailwindcss/postcss": {}
      ]
    })
  ]
};
