# react-custom-inputs


# CustomInputTag React Component

## Overview

The **CustomInputTag** React component is designed to create an input field with customizable formatting based on the input type. It currently supports two types: "currency" and "percentage."

## Features

- **Currency Input**
  - Displays a "$" sign at the start of the input field.
  - Adds commas after every 3 digits for better readability.

- **Percentage Input**
  - No "$" sign at the start.
  - Appends a "%" sign at the end of the input value.
  - Does not add commas for improved usability.

## Usage

0. git clone
    ```bash
    git clone https://github.com/1447bits/react-custom-inputs.git
    ```

1. Install the dependencies and start the project:
   ```bash
   npm install
   npm start
   ```

2. Import the component into your React application:
   ```tsx
   import CustomInputTag from 'custom-input-tag';
   ```

3. Use the component with the desired type:
   ```tsx
   <CustomInputTag type="currency" />
   <CustomInputTag type="percentage" />
   <CustomInputTag type="normal" />
   ```

## Example

```tsx
import React from 'react';
import CustomInputTag from 'custom-input-tag';

const App: React.FC = () => {
  return (
    <div>
      <CustomInputTag type="currency" />
      <CustomInputTag type="percentage" />
      <CustomInputTag type="normal" />
    </div>
  );
};

export default App;
```
