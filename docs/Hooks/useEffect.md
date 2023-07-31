---
id: react-hook-useEffect
title: useEffect
description: Performs side effects after rendering, such as data fetching or subscriptions.
sidebar_position: 3
---

*useEffect* is a hook in React that allows you to perform side effects in functional components. Side effects can include things like fetching data from an API, subscribing to events, or updating the document title. It's called a "side effect" because it doesn't directly affect the rendering of your component, but rather deals with other interactions outside of it.

Here's a breakdown of how to use useEffect:

Import the useEffect hook from the React library:

```jsx
import React, { useEffect } from 'react';
```
Use the useEffect hook inside your functional component:

```jsx
function MyComponent() {
  useEffect(() => {
    // Side effect code goes here
  });

  return (
    // JSX code for your component
  );
}
```

The first argument of useEffect is a function that will be called after the component renders. This function is where you can place your side effect code. It runs every time the component renders by default.

```jsx
useEffect(() => {
  // Side effect code
});
```

You can also provide a second argument to useEffect that determines when the effect should run. This is an optional array of dependencies. If any of the dependencies change between renders, the effect will be triggered again. If the dependency array is empty, the effect will only run once when the component mounts, and not again.

```jsx
useEffect(() => {
  // Side effect code
}, [dependency1, dependency2]);
```
Now let's look at some examples:

1. Fetching data from an API:
```jsx
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      // Do something with the fetched data
    });
}, []);
```
In this example, the effect runs only once when the component mounts because the dependency array is empty.

2. Subscribing to an event:
```jsx
useEffect(() => {
  const handleClick = () => {
    // Handle the click event
  };

  window.addEventListener('click', handleClick);

  return () => {
    window.removeEventListener('click', handleClick);
  };
}, []);
```
Here, the effect adds an event listener for the click event when the component mounts, and removes it when the component unmounts. The empty dependency array ensures that the effect only runs once.

