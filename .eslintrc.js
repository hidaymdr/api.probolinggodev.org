module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "mocha": true,
    "es6": true
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
