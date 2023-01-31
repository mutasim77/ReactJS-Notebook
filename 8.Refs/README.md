# React refs 🖇

As is the case with many other UI libraries, React offers a way to rethink a view as the result of a state of a component. This is a big pivot away from how we usually build applications.

When we become familiar with some of these new concepts, we discover how easy it is to solve simple problems in the frontend world that used to cause us some trouble. Part of that benefit comes from creating views with the abstraction mechanisms that React and JSX expose, instead of doing it through DOM spec methods.

Still, the React team did something smart: they provided escape hatches and kept the library open for situations beyond the ones they were specifically designing for, as well as situations the model may not work for.

These escape hatches are refs, which allow us to access DOM properties directly. Normally, React uses state to update the data on the screen by re-rendering the component for us. But there are certain situations where you need to deal with the DOM properties directly, and that’s where refs come in clutch.

An example of this would be auto-focusing a text box when a component renders. React doesn’t provide an easy way to do this, so we can use refs to access the DOM directly and focus the text box for us whenever the component renders on the screen.

In this article, we’re going to investigate why React, a framework meant to abstract your code away from DOM manipulation, leaves the door open for developers to access it.

- ## Creating refs 🔴

When working with class-based components in the past, we used <code>createRef()</code> to create a ref. However, now that React recommends functional components, and general practice is to follow the Hooks way of doing things, we don’t need to use <code>createRef()</code>. Instead, we use <code>useRef(null)</code> to create refs in functional components.

As stated in the intro, refs are escape hatches for React developers, and we should try to avoid using them if possible.

When we obtain a node using a <code>ref</code> and later modify some attribute or the DOM structure of it, it can enter into conflict with React’s diff and update approaches.

First, let’s start with a simple component and grab a node element using refs.

```jsx
import React from "react";
const ActionButton = ({ label, action }) => {
  return <button onClick={action}>{label}</button>;
};
export default ActionButton;
```

The ```<button>``` expression here is actually the JSX way of calling the React.createElement('button') statement, which is not actually a representation of an HTML button element — it’s a React element.

You can gain access to the actual HTML element by creating a React reference and passing it to the element itself.

```jsx
import React, { useRef } from "react";
const ActionButton = ({ label, action }) => {
  const buttonRef = useRef(null);
  return (
    <button onClick={action} ref={buttonRef}>
      {label}
    </button>
  );
};
export default ActionButton;
```

This way, at any time in the lifecycle of the component, we can access the actual HTML element at <code>buttonRef.current</code>.

Now we know how to access DOM nodes inside a React component. Let’s take a look at some of the situations where this may be useful.