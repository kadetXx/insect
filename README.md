# Insect

<div align="center">
  <br />
  <br />
  <img src="https://res.cloudinary.com/kadet/image/upload/v1642358094/insect/logo_dbzodw.svg" width="250" height="auto" alt="dropd logo" align="center" />
  <br />
  <br />
  <h3 align="center">🛠 Highly customisable, minimalistic input x select field for React.</h3>

  <p align="center">
  <a href="https://npm.im/react-insect"><img src="https://img.shields.io/npm/v/react-insect.svg?color=brightgreen&style=flat-square" alt="Package version."></a>
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

## 💾 Installation

```
$ yarn add react-insect
```

## 📄 Basic Usage

```jsx
// Import Insect component
import { Insect } from 'react-insect';

// Use it in your code like so
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

## 🪄 Props

Insect can be either an input field, a single select field or a multi select field. The props passed in determines what Insect is. Here's a table of all available props for input and for select.

<br />
<br />

### 🧩 General props
| Prop | Description | Type | default
| --- | --- | --- | --- |
| name | Sets the name of the input field. | *`string`* | 
| type | Sets type of input field | *`text \| number \| password \| email \| select`* | text
| label | Adds a label to the top of insect component. | *`string`* | 
| placeholder | Sets the placeholder for insect component. | *`string`* | Input or select an option
| prefixIcon | Adds an icon at the left of insect field | *`string \| React.ReactNode \| null`* | 
| suffixIcon | Adds an icon at the right of insect field | *`string \| React.ReactNode \| null`* | 
| className | Custom classname for main insect container | *`string`* | 
| labelClass | Custom classname for insect label | *`string`* | 
| inputWrapperClass | Custom classname for the input field wrapper div | *`string`* | 
| inputClass | Custom classname for the main input field  | *`string`* |  
| iconsClass | Custom classname for all icons  | *`string`* |  
| onFocus | Function to trigger when input field is focused on. | *`(e: React.FocusEvent<HTMLInputElement>) => void`* | 
| onBlur | Function to trigger when input field goes out of focus. | *`(e: React.FocusEvent<HTMLInputElement>) => void`* | 

<br />
<br />

### 🖌 For Input field type

| Prop | Description | Type | default
| --- | --- | --- | --- |
| value | Sets the value of the input field. | *`string`* | 
| onChange | Sets the placeholder for insect component. | *`(e: React.FormEvent<HTMLInputElement>) => void`* | 

<br />
<br />

### 🔮 For Select field type

| Prop | Description | Type | default
| --- | --- | --- | --- |
| allowMultiple | Enables multi select by setting the number of selectable items | *`number`* | 
| search | Toggles option search | *`boolean`* |  (false)
| options | A list of options for the select field | *`{ title: string; value: string; }[]`* | [  ]
| onSelect | Funtion to trigger when an item is selected. It returns the field name and then returns a single string for single select and an array of strings for multi select | *`(value: string \| string[] \| null, name: string) => void`* | 
| dropdownIcon | Custom icon for dropdown caret | *`string \| React.ReactNode \| null`* | 
| checkmarkIcon | Custom selected item indicator icon | *`string \| React.ReactNode \| null`* | 
| dropdownClass | Custom classname for the dropdown container div. This div wraps the *ul* tag which in turn wraps the individual *li* tags | *`string`* |  
| checkerClass | Custom classname for the selected items indicator icon | *`string`* |  
| closeOnBlur | Determines if the dropdown should close when outside is clicked or not | *`boolean`* | true


  
  
  
