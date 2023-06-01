# React Hooks 🎣

React Hooks are a powerful feature introduced in React 16.8 that allows developers to add state and other React features to functional components. Prior to the introduction of hooks, state management and other complex logic could only be implemented in class components using lifecycle methods. With hooks, developers can now write more concise and reusable code by leveraging functions instead of classes.

<hr>

Hooks provide several benefits in React development. Firstly, they simplify the management of component state. With the "useState" hook, you can add state to a functional component, eliminating the need for a class-based component. This results in cleaner and more readable code.

Secondly, hooks enable the reuse of logic across components. The "useEffect" hook allows you to perform side effects such as data fetching, subscriptions, or manually changing the DOM after rendering. By encapsulating such logic in a custom hook, you can easily share it across different components, improving code maintainability and reducing duplication.

Another advantage of hooks is the ability to create custom hooks. Custom hooks are functions that combine multiple built-in hooks and encapsulate complex logic into reusable units. This promotes code modularity and makes it easier to share code between projects or within a team.

Here is a list of some commonly used React hooks:

- ```useState```: Manages state within functional components.
- ```useEffect```: Performs side effects after rendering, such as data fetching or subscriptions.
- ```useContext```: Accesses the value of a React context.
- ```useReducer```: Alternative to useState for managing complex state logic.
- ```useCallback```: Memoizes a function to prevent unnecessary re-rendering of components that depend on it.
- ```useMemo```: Memoizes a value to prevent expensive computations on every render.
- ```useRef```: Creates a mutable ref object that persists across renders.
- ```useLayoutEffect```: Similar to useEffect but fires synchronously after all DOM mutations.
- ```useImperativeHandle```: Customizes the instance value that is exposed to parent components when using ref.
- ```useDebugValue```: Provides a label for custom hooks in React DevTools.

These hooks cover a wide range of functionality and help streamline the development process in React. 

## useState:
The useState hook is used to manage state within functional components in React. It allows you to declare and update state variables. The useState hook returns an array with two elements: the current state value and a function to update that value.

Example:
```jsx
Copy code
import React, { useState } from 'react';

function Counter() {
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
 }
```
