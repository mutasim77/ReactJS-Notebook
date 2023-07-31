---
id: react-hook-useState
title: useState
description: Manages state within functional components.
sidebar_position: 2
---

The useState hook is a built-in hook provided by React that allows you to add state to functional components. With this hook, you can create and manage state variables within a functional component, giving it the ability to hold and update data.

The syntax for using useState is as follows:
```jsx
const [state, setState] = useState(initialValue);
```
Let's break down this syntax:

```state``` represents the current value of the state variable.
```setState``` is a function that allows you to update the state variable.
```initialValue``` is the initial value of the state variable.
Now, let's explore some examples to understand how useState works:

Example 1: Counter

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```
In this example, we create a state variable called count and initialize it with 0 using useState(0). The setCount function is used to update the count variable. When the "Increment" button is clicked, the increment function is called, which increments the count by 1. The updated value is then reflected in the component's rendering.

Example 2: Input Field

```jsx
import React, { useState } from 'react';

const InputField = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Typed text: {text}</p>
    </div>
  );
};
```
In this example, we create a state variable called text and initialize it with an empty string using useState(''). The setText function is used to update the text variable whenever the input field's value changes. The onChange event handler is called, which invokes handleChange and updates the text state with the typed value. The typed text is then displayed below the input field.

These examples demonstrate how useState enables you to add and manage state in functional components. By using the setState function, you can update the state variable, triggering a re-render of the component and reflecting the updated state in the UI.

Remember that you can use multiple useState hooks within a single component to manage multiple independent state variables. Each state variable will have its own corresponding setState function.
