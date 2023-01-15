# React Fragments📌

## What is a React fragment?

Fragments are syntax that allow us to add multiple elements to a React component without wrapping them in an extra DOM node.
Let’s take a look at the following code:

```javascript
const App = () => {
  return (
    <h1>This is heading1 text</h1>
  );
}

export default App
```

This is a simple React component. When we return only one JSX in a component, we can avoid wrapping the JSX in another wrapper element as seen above. However, when we add more than one JSX element like so:

```javascript
const App = () => {
  return (
    <h1>This is heading1 text</h1>
    <p>This is paragraph text</p>
  );
}

export default App
```

We will encounter a SyntaxError. And thus, crashing our application in development.

<br>

In React, when a component returns multiple elements, we must wrap them in a container element like div for the code to work:
```javascript
const App = () => {
  return (
    <div>
      <h1>This is heading1 text</h1>
      <p>This is paragraph text</p>
    </div>
  );
};
export default App;
```
While this is fine, it may however cause unintended issues in our components.

## React fragment vs div
