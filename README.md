# Insect

<div align="center">
  <br />
  <br />
  <img src="https://res.cloudinary.com/kadet/image/upload/v1642358094/insect/logo_dbzodw.svg" width="250" height="auto" alt="dropd logo" align="center" />
  <br />
  <br />
  <h3 align="center">🛠 Highly customisable, minimalistic input x select field for React.</h3>

  <p align="center">
  <a href="https://npm.im/react-insect"><img src="https://img.shields.io/npm/v/react-dropd.svg?color=brightgreen&style=flat-square" alt="Package version."></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PR(s)-welcome-brightgreen.svg?style=flat-square" alt="Make a pull request."></a>
  </p>
</div>

## ⚡️ Features

- 100% responsive.
- Highly customisable.
- Supports custom rem unit.
- Zero third party dependency (asides react's recommended prop-types).
- Typescript ready
- Multi select options
- Options search
- Custom icons support

## 🔑 Installation

```
$ yarn add react-insect
```

## 📄 Basic Usage

```jsx
// Import Insect component
import { Insect } from 'react-insect';

// use it in react like so
export const MyComponent = () => {
  return (
    <>
      <Insect
        name="username"
        type="text"
        placeholder="Choose a username"
      />
    </>
  );
};
```