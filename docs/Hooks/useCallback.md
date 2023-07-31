---
id: react-hook-useCallback
title: useCallback
description: Memoizes a function to prevent unnecessary re-rendering of components that depend on it.
sidebar_position: 4
---

**useCallback** is a React hook that allows you to optimize the performance of your React components by memoizing a function. In simple terms, it helps you avoid unnecessary re-creation of functions on each render.

When you define a function inside a component, it gets recreated every time the component re-renders, even if the function itself hasn't changed. This can lead to performance issues, especially if you pass that function as a prop to child components, as it may cause unnecessary re-renders in those components too.

Here's where useCallback comes in handy. It memoizes a function and returns a memoized version of it. The memoized version will only change if any of the dependencies provided to useCallback change. If the dependencies remain the same, useCallback will return the same memoized function from the previous render.

Here's an example to illustrate its usage:

```jsx
import React, { useState, useCallback } from 'react';

const CounterButton = ({ onClick }) => {
  console.log('CounterButton rendering');
  return (
    <button onClick={onClick}>
      Click me!
    </button>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log('Counter rendering');

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButton onClick={handleClick} />
    </div>
  );
};
```

In the example above, we have a Counter component that renders a CounterButton component. Whenever the Counter component re-renders, it will create a new handleClick function because it references the count state value. However, by using **useCallback**, we can optimize this behavior.

By providing [count] as the dependency array to useCallback, it ensures that the handleClick function will only be re-created if the count value changes. If count remains the same, useCallback will return the previously memoized handleClick function.

This optimization can be helpful when passing handleClick as a prop to child components because it prevents unnecessary re-renders in those components if the dependencies haven't changed.

Remember to include all the dependencies that the function relies on in the dependency array to ensure the correct behavior of **useCallback**.