---
id: react-hook-useContext
title: useContext
description: Lets you read and subscribe to context from your component.
sidebar_position: 8
---

React context provides data to components no matter how deep they are in the components tree. The context is used to manage global data, e.g. global state, theme, services, user settings, and more.

## How to use the context ? 🤓
Using the context in React requires 3 simple steps: creating the context, providing the context, and consuming the context.

- A. Creating the context

The built-in factory function createContext(default) creates a context instance:

```jsx
// context.js
import { createContext } from 'react';

export const Context = createContext('Default Value');
```

The factory function accepts one optional argument: the **default** value.

- B. Providing the context

**Context.Provider** component available on the context instance is used to provide the context to its child components, no matter how deep they are.

To set the value of context use the **value** prop available on the `<Context.Provider value={value} />` :

```jsx
import { Context } from './context';

function Main() {
  const value = 'My Context Value';
  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
  );
}
```

Again, what's important here is that all the components that'd like later to consume the context have to be wrapped inside the provider component.

If you want to change the context value, simply update the value prop.

- C. Consuming the context

Consuming the context can be performed in 2 ways.

The first way, the one I recommend, is to use the ```useContext(Context)``` React hook:

```jsx
import { useContext } from 'react';
import { Context } from './context';

function MyComponent() {
  const value = useContext(Context);

  return <span>{value}</span>;
}
```

The hook returns the value of the context: `value = useContext(Context)`. The hook also makes sure to re-render the component when the context value changes.

The second way is by using a render function supplied as a child to Context.Consumer special component available on the context instance:

```jsx
import { Context } from './context';

function MyComponent() {
  return (
    <Context.Consumer>
      {value => <span>{value}</span>}
    </Context.Consumer>
  );
}
```

Again, in case the context value changes, `<Context.Consumer>` will re-call its render function.

![useContext pic](https://github.com/mutasim77/ReactJS-Notebook/assets/96326525/ec4f7e4c-24e4-49ee-96b3-a7f4b6f2d8cd)

You can have as many consumers as you want for a single context. If the context value changes "by changing the value prop of the provider `<Context.Provider value={value} />`", then all consumers are immediately notified and re-rendered.

If the consumer isn't wrapped inside the provider, but still tries to access the context value using `useContext(Context)` or `*<Context.Consumer>`*, then the value of the context would be the default value argument supplied to `*createContext(defaultValue)*` factory function that had created the context.

## When do you need context? 🤓

The main idea of using the context is to allow your components to access global data and re-render when that global data is changed. Context solves the props drilling problem: when you have to pass down props from parents to children.

You can hold inside the context:

- global state
- theme
- application configuration
- authenticated user name
- user settings
- preferred language
- a collection of services

On the other side, you should think carefully before deciding to use context in your application.

First, integrating the context adds complexity. Creating a context, wrapping everything in a provider, and using the useContext() in every consumer — increases complexity.

Secondly, adding context complicates unit testing of components. During testing, you'll have to wrap the consumer components into a context provider. Including the components that are indirectly affected by the context — the ancestors of context consumers!

## Conclusion 🤓
The context in React lets you supply child components with global data, no matter how deep they are in the components tree.

Using the context requires 3 steps: creating, providing, and consuming the context.

When integrating the context into your application, consider that it adds a good amount of complexity. Sometimes drilling the props through 2-3 levels in the hierarchy isn't a big problem.