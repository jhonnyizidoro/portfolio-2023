import nextConfig from 'eslint-config-next/core-web-vitals'

export default [
  ...nextConfig,
  {
    settings: {
      react: { version: '19' },
    },
    rules: {
      'react/jsx-curly-brace-presence': ['warn', 'never'],
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/self-closing-comp': 1,
      'prefer-template': 1,
    },
  },
]
