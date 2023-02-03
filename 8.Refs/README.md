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

- ## Using React refs 🟣

One of the many concepts that React popularized among developers is the concept of declarative views. Before declarative views, most of us were modifying the DOM by calling functions that explicitly changed it.

As mentioned at the introduction of this article, we are now declaring views based on a state, and — though we are still calling functions to alter this state — we are not in control of when the DOM will change or even if it should change.

Because of this inversion of control, we’d lose this imperative nature if it weren’t for refs.
Here are a few use cases where it may make sense to bring refs into your code.

- ## Focus control 🟡

You can achieve focus in an element programmatically by calling <code>focus()</code> on the node instance.
Because the DOM exposes this as a function call, the best way to do this in React is to create a ref and manually do it when we think it’s suitable.

```jsx
import React, { useState } from "react";
const InputModal = ({ initialValue, onSubmit, onClose }) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    onClose();
  };
  return (
    <div className="modal--overlay">
      <div className="modal">
        <h1>Insert a new value</h1>
        <form action="?" onSubmit={onSubmit}>
          <input type="text" onChange={onChange} value={value} />
          <button>Save new value</button>
        </form>
      </div>
    </div>
  );
};
export default InputModal;
```
In this modal, we allow the user to modify a value already set in the screen below. It would be a better user experience if the input was on focus when the modal opens, which could enable a smooth keyboard transition between the two screens.

The first thing we need to do is get a reference for the input:

```jsx
import React, { useRef, useState } from "react";
const InputModal = ({ initialValue, onSubmit, onClose }) => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef(null);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    onClose();
  };
  return (
    <div className="modal--overlay">
      <div className="modal">
        <h1>Insert a new value</h1>
        <form action="?" onSubmit={onSubmit}>
          <input ref={inputRef} 
                 type="text" 
                 onChange={onChange}
                 value={value} />
          <button>Save new value</button>
        </form>
      </div>
    </div>
  );
};
export default InputModal;
```

Next, when our modal mounts, we imperatively call focus on our input ref within a <code>useEffect</code>:

```jsx
import React, { useEffect, useRef, useState } from "react";
const InputModal = ({ initialValue, onSubmit, onClose }) => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [])
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    onClose();
  };
  return (
    <div className="modal--overlay">
      <div className="modal">
        <h1>Insert a new value</h1>
        <form action="?" onSubmit={onSubmit}>
          <input ref={inputRef}
                 type="text"
                 onChange={onChange}
                 value={value} />
          <button>Save new value</button>
        </form>
      </div>
    </div>
  );
};
export default InputModal;
```

So when you open the modal, you should see the text box focused by default: