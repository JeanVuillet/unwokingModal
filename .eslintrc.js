module.exports = {
    env: {
      browser: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
      'react-hooks',
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'off',
      'react/prop-types': 'off', // Désactive la validation des props (facultatif)
      'no-unused-vars': 'warn' // Affiche un avertissement pour les variables inutilisées
    },
  };