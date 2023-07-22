# React Hooks 🎣

React Hooks are a powerful feature introduced in React 16.8 that allows developers to add state and other React features to functional components. Prior to the introduction of hooks, state management and other complex logic could only be implemented in class components using lifecycle methods. With hooks, developers can now write more concise and reusable code by leveraging functions instead of classes.

<hr>

Hooks provide several benefits in React development. Firstly, they simplify the management of component state. With the "useState" hook, you can add state to a functional component, eliminating the need for a class-based component. This results in cleaner and more readable code.

Secondly, hooks enable the reuse of logic across components. The "useEffect" hook allows you to perform side effects such as data fetching, subscriptions, or manually changing the DOM after rendering. By encapsulating such logic in a custom hook, you can easily share it across different components, improving code maintainability and reducing duplication.

Another advantage of hooks is the ability to create custom hooks. Custom hooks are functions that combine multiple built-in hooks and encapsulate complex logic into reusable units. This promotes code modularity and makes it easier to share code between projects or within a team.

Here is a list of some commonly used React hooks:


- **<a href="#useState">useState</a>:** Manages state within functional components.
- **<a href="#useEffect">useEffect</a>:** Performs side effects after rendering, such as data fetching or subscriptions.
- **<a href="#useCallback">useCallback</a>:** Memoizes a function to prevent unnecessary re-rendering of components that depend on it.
- **<a href="#useMemo">useMemo</a>:** Memoizes a value to prevent expensive computations on every render.
- **<a href="#useRef">useRef</a>:** Creates a mutable ref object that persists across renders.
- **<a href="#useTransition">useTransition</a>:** Lets you update the state without blocking the UI.
- ```useContext```: Accesses the value of a React context.
- ```useReducer```: Alternative to useState for managing complex state logic.
- ```useLayoutEffect```: Similar to useEffect but fires synchronously after all DOM mutations.
- ```useImperativeHandle```: Customizes the instance value that is exposed to parent components when using ref.
- ```useDebugValue```: Provides a label for custom hooks in React DevTools.

These hooks cover a wide range of functionality and help streamline the development process in React. 
Below, we'll dive into each React hook in more detail. Let's start exploring each hook and its specific use cases:


<div id="useState"></div>

## useState 🟤
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


<div id="useEffect"></div>

## useEffect ⚪️
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


<div id="useCallback"></div>

## useCallback ⚫️

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


<div id="useMemo"></div>

## useMemo ⚫️

**useMemo** is another React hook that allows you to optimize the performance of your React components by memoizing a value. It's similar to **useCallback**, but instead of memoizing a function, it memoizes a computed value.

In React, there are situations where you may have expensive computations or calculations that are performed within a component. These computations can take up processing power and slow down your application, especially if they are re-executed on every render, even if the dependencies haven't changed.

Here's where useMemo comes in handy. It allows you to memoize the result of a computation and only recompute it if the dependencies provided to useMemo have changed. If the dependencies remain the same, useMemo will return the previously memoized value from the previous render, saving unnecessary calculations.

Here's an example to illustrate its usage:

```jsx
import React, { useState, useMemo } from 'react';

const ExpensiveComponent = ({ value }) => {
  const expensiveResult = useMemo(() => {
    console.log('Performing expensive computation...');
    // Perform some complex calculations based on the value
    return value * 2;
  }, [value]);

  console.log('ExpensiveComponent rendering');

  return (
    <div>
      <p>Value: {value}</p>
      <p>Expensive Result: {expensiveResult}</p>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  console.log('App rendering');

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <ExpensiveComponent value={count} />
    </div>
  );
};
```

In the example above, we have an **ExpensiveComponent** that performs some computationally expensive calculations based on the value prop it receives. Whenever the **ExpensiveComponent** re-renders, it would recompute the expensive result, even if the value prop hasn't changed. This can impact performance if the calculations are complex.

By using useMemo, we can optimize this behavior. By providing [value] as the dependency array to useMemo, it ensures that the expensive computation will only be re-executed if the value prop changes. If the value remains the same, useMemo will return the previously memoized value.

This optimization can be helpful in scenarios where you have expensive computations, heavy data processing, or complex transformations that depend on certain values. By memoizing the result with useMemo, you can avoid unnecessary recalculations and improve the performance of your components.

Remember to include all the dependencies that the computation relies on in the dependency array to ensure the correct behavior of **useMemo**.


<div id="useRef"></div>

## useRef 🔴
useRef is a React hook that allows you to create a mutable value that persists across component renders. It provides a way to store and access a value that **won't trigger a re-render** when it changes.

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


<div id="useTransition"></div>

## useTransition ⚪️

*useTransition* is a React Hook that lets you update the state without blocking the UI.

The useTransition hook allows us to specify some state updates as not as important. These state updates will be executed in parallel with other state updates, but the rendering of the component will not wait for these less important state updates.

```jsx
function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState(largeList)
  const [isPending, startTransition] = useTransition()

  function handleChange(e) {
    setName(e.target.value)
    startTransition(() => {
      setList(largeList.filter(item => item.name.includes(e.target.value)))
    })
  }

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map(item => <ListComponent key={item.id} item={item} />)
      )}
    </>
  )
}
```

Calling the *useTransition* hook returns an array with the first value being an *isPending* variable and the second value being the *startTransition* function. The *isPending* variable simply returns true while the code inside the *startTransition* hook is running. Essentially, this variable is true when the slow state update is running and false when it is finished running. The *startTransition* function takes a single callback and this callback just contains all the code related to the slow state update including the setting of the state.

In our case we are wrapping *setList* in our *startTransition* function which tells React that our *setList* state update is of low importance. This means that as soon as all of our normal state updates are finished that the component should rerender even if this slow state update is not finished. Also, if a user interacts with your application, such as clicking a button or typing in an input, those interactions will take higher priority than the code in the *startTransition* function. This ensures that even if you have really slow code running it won’t block your user from interacting with the application.

In conclusion, the *useTransition* hook makes working with slow, computationally intense state updates so much easier since now we can tell React to prioritize those updates at a lower level to more important updates which makes your application seem much more performant to users.
