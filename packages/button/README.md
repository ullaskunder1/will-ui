# @will01/button

A simple and reusable button component for React.

## Installation

```bash
npm install @will01/button
```

## Usage

```tsx
import React from 'react';
import Button from '@will01/button';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default App;
```

## Props

| Prop    | Type       | Description                |
|---------|------------|----------------------------|
| label   | `string`   | The text to display on the button. |
| onClick | `() => void` | The function to call when the button is clicked. |

## Example

```tsx
import React from 'react';
import Button from '@will01/button';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default App;
```

## License

[MIT License](LICENSE)