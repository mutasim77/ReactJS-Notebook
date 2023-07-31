---
id: react-hook-useReducer
title: useReducer
description: Alternative to useState for managing complex state logic.
sidebar_position: 9
---

**useReducer** is one of the additional Hooks that shipped with React v16.8. An alternative to the useState Hook, useReducer helps you manage complex state logic in React applications. When combined with other Hooks like **useContext**, **useReducer** can be a good alternative to **Redux, Recoil, or MobX**. In certain cases, it is an outright better option.

While Redux, Recoil, and MobX are usually the best options for managing global states in large React applications, more often than necessary, many React developers jump into these third-party state management libraries when they could have effectively handled their state with Hooks.

### How does the useReducer Hook work? 🤓

The **useReducer** Hook is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second. useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it. While this is similar to the pattern Redux uses, there are a few differences.

For example, the useReducer function is tightly coupled to a specific reducer. We dispatch action objects to that reducer only, whereas in Redux, the dispatch function sends the action object to the store. At the time of dispatch, the components don’t need to know which reducer will process the action.

For those who may be unfamiliar with Redux, we’ll explore this concept a bit further. There are three main building blocks in Redux:

- Store: An immutable object that holds the application’s state data
- Reducer: A function that returns some state data, triggered by an action type
- Action: An object that tells the reducer how to change the state. It must contain a type property and can contain an optional payload property


Let’s see how these building blocks compare to managing state with the useReducer Hook. Below is an example of a store in Redux:

```jsx
import { createStore } from 'redux'

const store = createStore(reducer, [preloadedState], [enhancer])

```

In the code below, we initialize state with the useReducer Hook:

```jsx
const initialState = { count: 0 }

const [state, dispatch] = useReducer(reducer, initialState)
```

**useReducer** doesn’t use the (state = initialState, action) => newState **Redux** pattern, so its reducer function works a bit differently. The code below shows how you’d create reducers with React’s useReducer:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}  
```

### Specifying the initial state
The initial state is the second argument passed to the useReducer Hook, which represents the default state:

```jsx
const initialState = { count: 1 }

// wherever our useReducer is located
const [state, dispatch] = useReducer(reducer, initialState, initFunc)
```

If you don’t pass a third argument to **useReducer**, it will take the second argument as the initial state. The third argument, which is the init function, is optional. This pattern also follows one of the golden rules of Redux state management: the state should be updated by emitting actions. Never write directly to the state.

However, it’s worth noting that the Redux state = initialState convention doesn’t work the same way with useReducer because the initial value sometimes depends on props.

### Creating the initial state lazily

In programming, lazy initialization is the tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed.

As mentioned above, useReducer can accept a third parameter, which is an optional init function for creating the initial state lazily. It lets you extract logic for calculating the initial state outside of the reducer function, as seen below:

```jsx
const initFunc = (initialCount) => {
    if (initialCount !== 0) {
        initialCount=+0
    }
  return {count: initialCount};
}

// wherever our useReducer is located
const [state, dispatch] = useReducer(reducer, initialCount, initFunc);
```

If the value is not 0 already, initFunc above will reset initialCount to 0 on page mount, then return the state object. Notice that this initFunc is a function, not just an array or object.

### The dispatch method

The dispatch function accepts an object that represents the type of action we want to execute when it is called. Basically, it sends the type of action to the reducer function to perform its job, which, of course, is updating the state.

The action to be executed is specified in our reducer function, which in turn, is passed to the useReducer. The reducer function will then return the updated state.

The actions that will be dispatched by our components should always be represented as one object with the type and payload key, where type stands as the identifier of the dispatched action and payload is the piece of information that this action will add to the state. dispatch is the second value returned from the useReducer Hook and can be used in our JSX to update the state:

```jsx
// creating our reducer function
function reducer(state, action) {
  switch (action.type) {
   // ...
      case 'reset':
          return { count: action.payload };
    default:
      throw new Error();
  }
}

// wherever our useReducer is located
const [state, dispatch] = useReducer(reducer, initialCount, initFunc);

// Updating the state with the dispatch functon on button click
<button onClick={() => dispatch({type: 'reset', payload: initialCount})}> Reset </button>
```

Notice how our reducer function uses the payload that is passed from the dispatch function. It sets our state object to the payload, i.e., whatever the initialCount is. Note that we can pass the dispatch function to other components through props, which alone is what allow us to replace Redux with useReducer.

Let’s say we have a component that we want to pass as props to our dispatch function. We can easily do that from the parent component:

```jsx
<Increment count={state.count} handleIncrement={() => dispatch({type: 'increment'})}/>
```

Now, in the child component, we receive the props, which, when emitted, will trigger the dispatch function and update the state:

```jsx
<button onClick={handleIncrement}>Increment</button>
```

### When not to use the useReducer Hook
Despite being able to use the useReducer Hook to handle complex state logic in our app, it’s important to note that there are some scenarios where a third-party state management library like **Redux** may be a better option:

- When your application needs a single source of truth
- When you want a more predictable state
- When state-lifting to the top-level component no longer suffices
- When you need to persist state even after a page refresh
  
With all these benefits, it’s also worth noting that using a library like Redux, as opposed to using pure React with useReducer, comes with some tradeoffs. For example, Redux has a hefty learning curve that is minimized by using **Redux Toolkit**, and it’s definitely not the fastest way to write code. Rather, it’s intended to give you an absolute and predictable way of managing state in your app.