---
id: react-hook-useRef
title: useRef
description: Creates a mutable ref object that persists across renders.
sidebar_position: 6
---

*useRef* is a React hook that allows you to create a mutable value that persists across component renders. It provides a way to store and access a value that **won't trigger a re-render** when it changes.

Here are a few important things to understand about *useRef*:

1. Creating a Ref:
You can create a ref by calling the useRef hook and passing an initial value as an argument:

```jsx
const myRef = useRef(initialValue);
```

2. Mutable Reference:
The value stored in a ref is mutable, meaning you can update it directly without triggering a re-render of the component.

3. Preserving Value across Renders:
Unlike regular variables or state values, the value stored in a ref persists across component renders. When the component re-renders, the ref will retain its value from the previous render.

4. Accessing the Value:
You can access the current value of a ref using the ```.current``` property. For example:

```jsx
console.log(myRef.current);
```

5. Updating the Value:

You can update the value stored in a ref using the ```.current``` property. For example:

```jsx
myRef.current = newValue;
```

Here's an example to illustrate its usage:

```jsx
import React, { useRef } from 'react';

const TextInput = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Accessing the current value
    console.log(inputRef.current.value);
    
    // Updating the value
    inputRef.current.value = 'New Value';
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Log Value</button>
    </div>
  );
};
```

In the example above, we create a ref using **useRef** and assign it to inputRef. We then attach this ref to an input element using the ref attribute. This allows us to access the input's value directly through inputRef.current.value.

In the handleClick function, we log the current value of the input to the console. We can also directly update the value of the input by assigning a new value to inputRef.current.value.

useRef is particularly useful when you need to interact with DOM elements directly or store mutable values that won't trigger a re-render. It can also be used to store and access any other mutable data throughout the lifecycle of a component.

Remember that updating the value of a ref using ```.current``` doesn't trigger a re-render. If you want to update the value and cause a re-render, you should use state (useState) instead.
